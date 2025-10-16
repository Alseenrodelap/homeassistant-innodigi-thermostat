class InnodigiThermostatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._dragging = false;
    this._dragValue = null;
    this._interacting = false;
    this._interactionTimeout = null;
    this._localTargetTemp = null; // Local target temperature for instant UI updates
    this._syncTimeout = null; // Debounce timer for syncing to thermostat
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    if (!this._config) return;
    
    // Initialize local temp from entity if not set
    if (this._localTargetTemp === null && !this._interacting && !this._dragging) {
      const entity = hass.states[this._config.entity];
      if (entity) {
        this._localTargetTemp = parseFloat(entity.attributes.temperature) || 20;
      }
    }
    
    // Only re-render if entity state actually changed or first render
    if (!oldHass || !this._cardInitialized) {
      this.updateCard();
      this._cardInitialized = true;
    } else {
      // When not interacting, sync local temp from entity
      if (!this._interacting && !this._dragging) {
        const entity = hass.states[this._config.entity];
        if (entity) {
          const entityTemp = parseFloat(entity.attributes.temperature) || 20;
          if (this._localTargetTemp !== entityTemp) {
            this._localTargetTemp = entityTemp;
            this.updateValues();
          }
        }
      }
      // When dragging, still update UI (will use _dragValue via _getCurrentTargetTemp)
      else if (this._dragging) {
        this.updateValues();
      }
    }
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }
    const oldEntity = this._config ? this._config.entity : null;
    const configChanged = JSON.stringify(this._config) !== JSON.stringify(config);
    this._config = config;
    
    // Only re-render if this is first time or entity changed
    if (!this._cardInitialized || oldEntity !== config.entity) {
      this._cardInitialized = false;
      if (this._hass) {
        this.updateCard();
        this._cardInitialized = true;
      }
    } else if (this._hass && configChanged) {
      // Just update values for other config changes
      this.updateValues();
    }
  }

  _setLocalTemperature(temp) {
    // Update local state immediately for instant UI feedback
    this._localTargetTemp = temp;
    this._interacting = true;
    
    // Update UI immediately
    this.updateValues();
    
    // Clear existing sync timeout
    if (this._syncTimeout) {
      clearTimeout(this._syncTimeout);
    }
    
    // Debounced sync to thermostat (1 second after last change)
    this._syncTimeout = setTimeout(() => {
      this._syncToThermostat(temp);
      this._syncTimeout = null;
      
      // Allow external updates after sync
      setTimeout(() => {
        this._interacting = false;
      }, 500);
    }, 1000);
  }

  _syncToThermostat(temperature) {
    // Actually send the temperature to Home Assistant
    this._hass.callService('climate', 'set_temperature', {
      entity_id: this._config.entity,
      temperature: temperature
    });
  }

  _getCurrentTargetTemp() {
    // ALWAYS use local state - never entity directly
    // Priority: dragging > local temp
    if (this._dragging && this._dragValue !== null) {
      return this._dragValue;
    }
    
    // Always return local temp (initialized from entity, but independent)
    return this._localTargetTemp !== null ? this._localTargetTemp : 20;
  }

  getCardSize() {
    return 3;
  }

  static getConfigElement() {
    return document.createElement('innodigi-thermostat-card-editor');
  }

  static getStubConfig() {
    return {
      entity: '',
      name: '',
      layout: 'normal',
      outdoor_entity: '',
      outdoor_display_mode: 'auto',
      // Slider gradient colors
      color_cold: '#3498db',
      color_medium: '#2ecc71',
      color_hot: '#e74c3c',
      // Button colors
      color_buttons: '#3498db',
      color_mode_buttons: '#2ecc71',
      // Temperature colors
      color_current_temp: '#3498db',
      color_target_temp: '#2ecc71',
      color_outdoor_temp: '#95a5a6',
      // Temperature cards
      show_temperature_cards: false,
      temperature_card_background: '#1a1a1a',
      temperature_card_background_alpha: 80,
      temperature_card_border_color: '#3498db',
      temperature_card_border_alpha: 50,
      temperature_card_border_width: 1,
      eco_temperature: 18,
      home_temperature: 21
    };
  }

  updateCard() {
    if (!this._hass || !this._config) return;

    const entityId = this._config.entity;
    const entity = this._hass.states[entityId];

    if (!entity) {
      this.shadowRoot.innerHTML = `
        <ha-card>
          <div style="padding: 16px; color: red;">
            Entity not found: ${entityId}
          </div>
        </ha-card>
      `;
      return;
    }

    const currentTemp = parseFloat(entity.attributes.current_temperature) || 0;
    const targetTemp = this._getCurrentTargetTemp();
    const minTemp = parseFloat(entity.attributes.min_temp) || 5;
    const maxTemp = parseFloat(entity.attributes.max_temp) || 35;
    // Force step to 0.5 for half-degree increments
    const step = 0.5;
    const unit = this._hass.config.unit_system.temperature;
    const presetMode = entity.attributes.preset_mode || 'none';
    const layout = this._config.layout || 'normal';
    const isCompact = layout === 'compact';
    
    // Outdoor temperature
    const outdoorEntityId = this._config.outdoor_entity;
    const outdoorEntity = outdoorEntityId ? this._hass.states[outdoorEntityId] : null;
    const outdoorTemp = outdoorEntity ? (parseFloat(outdoorEntity.state) || 0) : null;
    const hasOutdoor = outdoorTemp !== null;
    const outdoorDisplayMode = this._config.outdoor_display_mode || 'auto';
    
    // Colors with defaults
    const colorButtons = this._config.color_buttons || '#3498db';
    const colorModeButtons = this._config.color_mode_buttons || '#2ecc71';
    const colorCurrentTemp = this._config.color_current_temp || '#3498db';
    const colorTargetTemp = this._config.color_target_temp || '#2ecc71';
    const colorOutdoorTemp = this._config.color_outdoor_temp || '#95a5a6';
    
    // Temperature cards
    const showTempCards = this._config.show_temperature_cards || false;
    const tempCardBgColor = this._config.temperature_card_background || '#1a1a1a';
    const tempCardBgAlpha = this._config.temperature_card_background_alpha ?? 80;
    const tempCardBorderColor = this._config.temperature_card_border_color || '#3498db';
    const tempCardBorderAlpha = this._config.temperature_card_border_alpha ?? 50;
    const tempCardBorderWidth = this._config.temperature_card_border_width ?? 1;
    
    // Helper function to convert hex to rgba
    const hexToRgba = (hex, alpha) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
    };
    
    const tempCardBg = hexToRgba(tempCardBgColor, tempCardBgAlpha);
    const tempCardBorder = hexToRgba(tempCardBorderColor, tempCardBorderAlpha);

    this.shadowRoot.innerHTML = `
      <style>
        ha-card {
          padding: ${isCompact ? '8px' : '16px'};
          background: var(--ha-card-background, var(--card-background-color, white));
          border-radius: var(--ha-card-border-radius, 12px);
          box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0,0,0,0.1));
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: ${isCompact ? '8px' : '20px'};
          position: relative;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .title {
          font-size: 18px;
          font-weight: 500;
          color: var(--primary-text-color);
        }

        .outdoor-compact {
          position: absolute;
          left: 0;
          top: ${isCompact ? '0' : '0'};
          font-size: 12px;
          font-weight: 300;
          color: ${colorOutdoorTemp};
          display: ${outdoorDisplayMode === 'compact' && hasOutdoor ? 'block' : 'none'};
          opacity: 0.8;
          z-index: 10;
          padding: 2px 4px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }

        ${outdoorDisplayMode === 'compact' && hasOutdoor ? `
        /* Hide inline outdoor when compact mode is forced */
        .temp-item.outdoor {
          display: none !important;
        }
        /* Adjust temperature display padding when outdoor temp is shown */
        ${isCompact ? `
        .temperature-display {
          margin-top: 20px;
        }
        ` : ''}
        /* Adjust title position when outdoor temp is shown in normal mode */
        ${!isCompact ? `
        .title {
          margin-left: 55px;
        }
        ` : ''}
        ` : ''}

        ${outdoorDisplayMode === 'inline' && hasOutdoor ? `
        /* Force inline display, hide compact */
        .outdoor-compact {
          display: none !important;
        }
        .temp-item.outdoor {
          display: flex !important;
        }
        ` : ''}

        /* Auto mode: Show compact outdoor temp on narrow screens when outdoor is enabled */
        ${outdoorDisplayMode === 'auto' ? `
        @media (max-width: 400px) {
          .outdoor-compact {
            display: ${hasOutdoor ? 'block' : 'none'} !important;
          }
          .temp-item.outdoor {
            display: none !important;
          }
          /* Adjust temperature display padding when outdoor temp is shown */
          ${hasOutdoor && isCompact ? `
          .temperature-display {
            margin-top: 20px;
          }
          ` : ''}
          /* Adjust title position when outdoor temp is shown in normal mode */
          ${hasOutdoor && !isCompact ? `
          .title {
            margin-left: 55px;
          }
          ` : ''}
        }
        ` : ''}

        .mode-buttons {
          display: flex;
          gap: 8px;
        }

        .mode-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 20px;
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s;
          outline: none;
        }

        .mode-btn:hover {
          opacity: 0.8;
        }

        .mode-btn.active {
          background: ${colorModeButtons};
          color: white;
        }

        .temperature-display {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: ${isCompact ? '4px 0' : '10px 0'};
          ${showTempCards ? `gap: ${isCompact ? '8px' : '12px'};` : ''}
        }

        .temp-item {
          text-align: center;
          ${showTempCards ? `
            background: ${tempCardBg};
            padding: ${isCompact ? '8px' : '12px'};
            border-radius: ${isCompact ? '8px' : '12px'};
            min-width: ${isCompact ? '70px' : '90px'};
            border: ${tempCardBorderWidth}px solid ${tempCardBorder};
          ` : ''}
        }

        .temp-label {
          font-size: ${isCompact ? '11px' : '12px'};
          color: var(--secondary-text-color);
          margin-bottom: ${isCompact ? '2px' : '4px'};
        }

        .temp-value {
          font-size: ${isCompact ? '24px' : '32px'};
          font-weight: 300;
          color: var(--primary-text-color);
        }

        .temp-value.outdoor {
          color: ${colorOutdoorTemp};
        }

        .temp-value.current {
          color: ${colorCurrentTemp};
        }

        .temp-value.target {
          color: ${colorTargetTemp};
        }

        .temp-unit {
          font-size: ${isCompact ? '16px' : '20px'};
          margin-left: 2px;
        }

        .slider-container {
          position: relative;
          padding: ${isCompact ? '15px 0' : '30px 0'};
          margin: ${isCompact ? '4px 0' : '10px 0'};
        }

        .slider-track {
          position: relative;
          height: ${isCompact ? '30px' : '60px'};
          background: linear-gradient(to right, 
            ${this._config.color_cold || '#3498db'} 0%, 
            ${this._config.color_medium || '#2ecc71'} 50%, 
            ${this._config.color_hot || '#e74c3c'} 100%);
          border-radius: ${isCompact ? '15px' : '30px'};
          cursor: pointer;
          overflow: visible;
        }

        .slider-marker {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: left 0.1s ease;
        }

        .slider-marker.current {
          width: ${isCompact ? '3px' : '4px'};
          height: ${isCompact ? '36px' : '70px'};
          background: rgba(255, 255, 255, 0.7);
          border: 2px solid var(--primary-text-color);
          border-radius: 2px;
          z-index: 1;
        }

        .slider-marker.target {
          width: ${isCompact ? '28px' : '40px'};
          height: ${isCompact ? '28px' : '40px'};
          background: white;
          border: 3px solid var(--primary-color);
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          z-index: 2;
          cursor: grab;
        }

        .slider-marker.target:active {
          cursor: grabbing;
        }

        .drag-value {
          position: absolute;
          top: ${isCompact ? '-40px' : '-50px'};
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-color);
          color: white;
          padding: ${isCompact ? '6px 12px' : '8px 16px'};
          border-radius: ${isCompact ? '6px' : '8px'};
          font-size: ${isCompact ? '18px' : '24px'};
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          z-index: 3;
        }

        .drag-value.visible {
          opacity: 1;
        }

        .controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: ${isCompact ? '8px' : '16px'};
          ${isCompact ? 'flex-wrap: wrap;' : ''}
        }

        .control-btn {
          width: ${isCompact ? '40px' : '48px'};
          height: ${isCompact ? '40px' : '48px'};
          border: none;
          border-radius: 50%;
          background: ${colorButtons};
          color: white;
          font-size: ${isCompact ? '20px' : '24px'};
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
        }

        .control-btn:hover {
          transform: scale(1.1);
        }

        .control-btn:active {
          transform: scale(0.95);
        }

        .target-display {
          font-size: 20px;
          font-weight: 500;
          color: var(--primary-text-color);
          min-width: 80px;
          text-align: center;
        }

        .mode-btn.compact {
          padding: 6px 12px;
          font-size: 12px;
        }
      </style>

      <ha-card>
        <div class="card-content">
          ${hasOutdoor ? `
          <div class="outdoor-compact">${outdoorTemp.toFixed(1)}${unit}</div>
          ` : ''}
          ${!isCompact ? `
          <div class="header">
            <div class="title">${this._config.name || entity.attributes.friendly_name || 'Thermostaat'}</div>
            <div class="mode-buttons">
              <button class="mode-btn ${presetMode === 'eco' ? 'active' : ''}" data-mode="eco">
                Eco
              </button>
              <button class="mode-btn ${presetMode === 'home' || presetMode === 'comfort' ? 'active' : ''}" data-mode="home">
                Thuis
              </button>
            </div>
          </div>
          ` : ''}

          <div class="temperature-display">
            ${hasOutdoor ? `
            <div class="temp-item">
              <div class="temp-label">Buiten</div>
              <div class="temp-value outdoor">
                ${outdoorTemp.toFixed(1)}<span class="temp-unit">${unit}</span>
              </div>
            </div>
            ` : ''}
            <div class="temp-item">
              <div class="temp-label">Huidig</div>
              <div class="temp-value current">
                ${currentTemp.toFixed(1)}<span class="temp-unit">${unit}</span>
              </div>
            </div>
            <div class="temp-item">
              <div class="temp-label">Doel</div>
              <div class="temp-value target">
                ${targetTemp.toFixed(1)}<span class="temp-unit">${unit}</span>
              </div>
            </div>
          </div>

          <div class="slider-container">
            <div class="slider-track" data-slider="true">
              <div class="slider-marker current" style="left: ${this._tempToPercent(currentTemp, minTemp, maxTemp)}%"></div>
              <div class="slider-marker target" style="left: ${this._tempToPercent(targetTemp, minTemp, maxTemp)}%">
                <div class="drag-value ${this._dragging ? 'visible' : ''}">
                  ${targetTemp.toFixed(1)}${unit}
                </div>
              </div>
            </div>
          </div>

          ${isCompact ? `
          <div class="controls">
            <button class="mode-btn compact ${presetMode === 'eco' ? 'active' : ''}" data-mode="eco">Eco</button>
            <button class="control-btn" data-action="decrease">−</button>
            <button class="control-btn" data-action="increase">+</button>
            <button class="mode-btn compact ${presetMode === 'home' || presetMode === 'comfort' ? 'active' : ''}" data-mode="home">Thuis</button>
          </div>
          ` : `
          <div class="controls">
            <button class="control-btn" data-action="decrease">−</button>
            <div class="target-display">${targetTemp.toFixed(1)}${unit}</div>
            <button class="control-btn" data-action="increase">+</button>
          </div>
          `}
        </div>
      </ha-card>
    `;

    this._attachEventListeners();
  }

  updateValues() {
    if (!this._hass || !this._config || !this.shadowRoot.querySelector('.temp-value')) return;
    
    const entityId = this._config.entity;
    const entity = this._hass.states[entityId];
    if (!entity) return;

    const currentTemp = parseFloat(entity.attributes.current_temperature) || 0;
    const targetTemp = this._getCurrentTargetTemp();
    const minTemp = parseFloat(entity.attributes.min_temp) || 5;
    const maxTemp = parseFloat(entity.attributes.max_temp) || 35;
    const unit = this._hass.config.unit_system.temperature;
    const presetMode = entity.attributes.preset_mode || 'none';

    // Update outdoor temperature if available
    const outdoorEntityId = this._config.outdoor_entity;
    if (outdoorEntityId) {
      const outdoorEntity = this._hass.states[outdoorEntityId];
      if (outdoorEntity) {
        const outdoorTemp = parseFloat(outdoorEntity.state) || 0;
        const outdoorValue = this.shadowRoot.querySelector('.temp-value.outdoor');
        if (outdoorValue) outdoorValue.innerHTML = `${outdoorTemp.toFixed(1)}<span class="temp-unit">${unit}</span>`;
        
        // Update compact outdoor display
        const outdoorCompact = this.shadowRoot.querySelector('.outdoor-compact');
        if (outdoorCompact) outdoorCompact.textContent = `${outdoorTemp.toFixed(1)}${unit}`;
      }
    }

    // Update temperature displays
    const currentValue = this.shadowRoot.querySelector('.temp-value.current');
    const targetValue = this.shadowRoot.querySelector('.temp-value.target');
    if (currentValue) currentValue.innerHTML = `${currentTemp.toFixed(1)}<span class="temp-unit">${unit}</span>`;
    if (targetValue) targetValue.innerHTML = `${targetTemp.toFixed(1)}<span class="temp-unit">${unit}</span>`;

    // Update slider positions
    const currentMarker = this.shadowRoot.querySelector('.slider-marker.current');
    const targetMarker = this.shadowRoot.querySelector('.slider-marker.target');
    if (currentMarker) currentMarker.style.left = `${this._tempToPercent(currentTemp, minTemp, maxTemp)}%`;
    if (targetMarker) targetMarker.style.left = `${this._tempToPercent(targetTemp, minTemp, maxTemp)}%`;

    // Update control display
    const targetDisplay = this.shadowRoot.querySelector('.target-display');
    if (targetDisplay) targetDisplay.textContent = `${targetTemp.toFixed(1)}${unit}`;

    // Update mode buttons
    this.shadowRoot.querySelectorAll('.mode-btn').forEach(btn => {
      if (btn.dataset.mode === 'eco') {
        btn.classList.toggle('active', presetMode === 'eco');
      } else if (btn.dataset.mode === 'home') {
        btn.classList.toggle('active', presetMode === 'home' || presetMode === 'comfort');
      }
    });

    // Update drag value if dragging
    const dragValue = this.shadowRoot.querySelector('.drag-value');
    if (dragValue) {
      dragValue.textContent = `${targetTemp.toFixed(1)}${unit}`;
      dragValue.classList.toggle('visible', this._dragging);
    }
  }

  _tempToPercent(temp, min, max) {
    return Math.max(0, Math.min(100, ((temp - min) / (max - min)) * 100));
  }

  _percentToTemp(percent, min, max, step) {
    const temp = min + (percent / 100) * (max - min);
    return Math.round(temp / step) * step;
  }

  _attachEventListeners() {
    const entity = this._hass.states[this._config.entity];
    const minTemp = parseFloat(entity.attributes.min_temp) || 5;
    const maxTemp = parseFloat(entity.attributes.max_temp) || 35;
    // Force step to 0.5 for half-degree increments
    const step = 0.5;

    // Mode buttons
    this.shadowRoot.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.target.dataset.mode;
        this._setPresetMode(mode);
      });
    });

    // Plus/minus buttons
    this.shadowRoot.querySelectorAll('.control-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const action = e.target.dataset.action;
        const currentTarget = this._getCurrentTargetTemp();
        
        let newTemp;
        if (action === 'increase') {
          newTemp = Math.round((currentTarget + step) * 2) / 2; // Round to nearest 0.5
          newTemp = Math.min(maxTemp, newTemp);
        } else if (action === 'decrease') {
          newTemp = Math.round((currentTarget - step) * 2) / 2; // Round to nearest 0.5
          newTemp = Math.max(minTemp, newTemp);
        }
        
        if (newTemp !== undefined && newTemp !== currentTarget) {
          this._setLocalTemperature(newTemp);
        }
      });
    });

    // Slider
    const sliderTrack = this.shadowRoot.querySelector('.slider-track');
    
    const handleMove = (e) => {
      if (!this._dragging && e.type === 'mousemove') return;
      
      const rect = sliderTrack.getBoundingClientRect();
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const temp = this._percentToTemp(percent, minTemp, maxTemp, step);
      
      if (this._dragValue !== temp) {
        this._dragValue = temp;
        // Don't set _interacting here - it blocks updates
        // It will be set by _setLocalTemperature on handleEnd
        this.updateValues();
      }
    };

    const handleEnd = () => {
      const wasDragging = this._dragging;
      const finalValue = this._dragValue;
      
      this._dragging = false;
      this._dragValue = null;
      
      if (wasDragging && finalValue !== null) {
        this._setLocalTemperature(finalValue);
      }
    };

    sliderTrack.addEventListener('mousedown', (e) => {
      this._dragging = true;
      handleMove(e);
    });

    sliderTrack.addEventListener('touchstart', (e) => {
      this._dragging = true;
      handleMove(e);
    }, { passive: true });

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    
    sliderTrack.addEventListener('touchmove', handleMove, { passive: true });
    sliderTrack.addEventListener('touchend', handleEnd);

    // Store references for cleanup
    this._moveHandler = handleMove;
    this._endHandler = handleEnd;
  }

  _setPresetMode(mode) {
    // Gebruik altijd de geconfigureerde temperaturen
    let targetTemp = null;
    
    if (mode === 'eco' && this._config.eco_temperature !== undefined) {
      targetTemp = this._config.eco_temperature;
    } else if (mode === 'home' && this._config.home_temperature !== undefined) {
      targetTemp = this._config.home_temperature;
    }

    if (targetTemp !== null) {
      // Use local temperature setting for instant feedback
      this._setLocalTemperature(targetTemp);
    } else {
      // Geen custom temperatuur ingesteld, probeer preset mode direct
      this._hass.callService('climate', 'set_preset_mode', {
        entity_id: this._config.entity,
        preset_mode: mode
      }).catch(() => {
        // Thermostaat ondersteunt geen preset modes
      });
    }
  }

  disconnectedCallback() {
    if (this._moveHandler) {
      document.removeEventListener('mousemove', this._moveHandler);
    }
    if (this._endHandler) {
      document.removeEventListener('mouseup', this._endHandler);
    }
    if (this._interactionTimeout) {
      clearTimeout(this._interactionTimeout);
    }
    if (this._syncTimeout) {
      clearTimeout(this._syncTimeout);
    }
  }
}

// Editor Class for Visual Configuration
class InnodigiThermostatCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set hass(hass) {
    this._hass = hass;
    // Render once when both hass and config are available
    if (this._config && !this._initialized) {
      this._initialized = true;
      this.render();
    }
  }

  setConfig(config) {
    this._config = {
      entity: '',
      name: '',
      layout: 'normal',
      outdoor_entity: '',
      outdoor_display_mode: 'auto',
      // Slider colors
      color_cold: '#3498db',
      color_medium: '#2ecc71',
      color_hot: '#e74c3c',
      // Button colors
      color_buttons: '#3498db',
      color_mode_buttons: '#2ecc71',
      // Temperature colors
      color_current_temp: '#3498db',
      color_target_temp: '#2ecc71',
      color_outdoor_temp: '#95a5a6',
      // Temperature cards
      show_temperature_cards: false,
      temperature_card_background: '#1a1a1a',
      temperature_card_background_alpha: 80,
      temperature_card_border_color: '#3498db',
      temperature_card_border_alpha: 50,
      temperature_card_border_width: 1,
      eco_temperature: 18,
      home_temperature: 21,
      ...config
    };
    
    // Always render on config change (editor needs to show new values)
    if (this._hass) {
      this._initialized = true;
      this.render();
    }
  }

  configChanged(newConfig) {
    const event = new Event('config-changed', {
      bubbles: true,
      composed: true,
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  render() {
    if (!this._hass || !this._config) return;

    // Get all climate entities
    const climateEntities = Object.keys(this._hass.states)
      .filter(eid => eid.startsWith('climate.'))
      .map(eid => ({
        id: eid,
        name: this._hass.states[eid].attributes.friendly_name || eid
      }));

    // Build entity options
    let entityOptions = '<option value="">-- Selecteer een thermostaat --</option>';
    climateEntities.forEach(entity => {
      const selected = entity.id === this._config.entity ? 'selected' : '';
      entityOptions += `<option value="${entity.id}" ${selected}>${entity.name}</option>`;
    });

    // Get all sensor entities (for outdoor temperature)
    const sensorEntities = Object.keys(this._hass.states)
      .filter(eid => (eid.startsWith('sensor.') || eid.startsWith('weather.')))
      .map(eid => ({
        id: eid,
        name: this._hass.states[eid].attributes.friendly_name || eid
      }));

    // Build outdoor entity options
    let outdoorEntityOptions = '<option value="">-- Geen buitentemperatuur --</option>';
    sensorEntities.forEach(entity => {
      const selected = entity.id === this._config.outdoor_entity ? 'selected' : '';
      outdoorEntityOptions += `<option value="${entity.id}" ${selected}>${entity.name}</option>`;
    });

    this.shadowRoot.innerHTML = `
      <style>
        .card-config {
          padding: 16px;
        }
        
        .config-section {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--divider-color);
        }
        
        .config-section:last-child {
          border-bottom: none;
        }
        
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-text-color);
          margin-bottom: 16px;
        }
        
        .config-row {
          margin-bottom: 16px;
        }
        
        .config-row label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--primary-text-color);
        }
        
        .config-row input,
        .config-row select {
          width: 100%;
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color);
          color: var(--primary-text-color);
          font-size: 14px;
          box-sizing: border-box;
        }

        .config-row input[type="number"] {
          width: 100px;
        }

        .description {
          font-size: 12px;
          color: var(--secondary-text-color);
          margin-top: 4px;
        }

        input[type="color"] {
          width: 100px;
          height: 40px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          cursor: pointer;
        }
      </style>
      
      <div class="card-config">
        <div class="config-section">
          <div class="section-title">Basis Instellingen</div>
          <div class="config-row">
            <label>Thermostaat Entity (Verplicht)</label>
            <select id="entity-select">
              ${entityOptions}
            </select>
            <div class="description">Selecteer een climate entiteit (thermostaat)</div>
          </div>
          
          <div class="config-row">
            <label>Naam (Optioneel)</label>
            <input type="text" id="name-input" placeholder="Laat leeg voor standaard naam" value="${this._config.name || ''}">
            <div class="description">Aangepaste naam voor de kaart</div>
          </div>
          
          <div class="config-row">
            <label>Layout</label>
            <select id="layout-select">
              <option value="normal" ${this._config.layout === 'normal' ? 'selected' : ''}>Normal - Volledige weergave met titel</option>
              <option value="compact" ${this._config.layout === 'compact' ? 'selected' : ''}>Compact - Minder ruimte, knoppen naast elkaar</option>
            </select>
            <div class="description">Normal toont titel en knoppen apart, Compact bespaart ruimte</div>
          </div>
          
          <div class="config-row">
            <label>Buitentemperatuur Entity (Optioneel)</label>
            <select id="outdoor-entity-select">
              ${outdoorEntityOptions}
            </select>
            <div class="description">Selecteer een sensor voor buitentemperatuur (optioneel)</div>
          </div>
          
          <div class="config-row">
            <label>Buitentemperatuur Weergave</label>
            <select id="outdoor-display-mode">
              <option value="auto" ${this._config.outdoor_display_mode === 'auto' ? 'selected' : ''}>Auto - Responsive (compact op smalle schermen)</option>
              <option value="compact" ${this._config.outdoor_display_mode === 'compact' ? 'selected' : ''}>Altijd Compact (klein links bovenaan)</option>
              <option value="inline" ${this._config.outdoor_display_mode === 'inline' ? 'selected' : ''}>Altijd Inline (in temperatuur display)</option>
            </select>
            <div class="description">Auto past zich aan schermgrootte aan, Compact toont altijd klein bovenaan, Inline toont altijd als kolom</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">Temperatuur Instellingen</div>
          <div class="config-row">
            <label>Eco Doeltemperatuur (°C)</label>
            <input type="number" id="eco-temp" min="5" max="35" step="0.5" value="${this._config.eco_temperature}">
            <div class="description">Temperatuur wanneer Eco mode wordt ingeschakeld</div>
          </div>
          
          <div class="config-row">
            <label>Thuis Doeltemperatuur (°C)</label>
            <input type="number" id="home-temp" min="5" max="35" step="0.5" value="${this._config.home_temperature}">
            <div class="description">Temperatuur wanneer Thuis mode wordt ingeschakeld</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">Slider Kleuren</div>
          <div class="config-row">
            <label>Kleur Koud (Links)</label>
            <input type="color" id="color-cold" value="${this._config.color_cold}">
            <div class="description">Kleur aan de linkerkant van de slider (koude temperaturen)</div>
          </div>
          
          <div class="config-row">
            <label>Kleur Middel (Midden)</label>
            <input type="color" id="color-medium" value="${this._config.color_medium}">
            <div class="description">Kleur in het midden van de slider</div>
          </div>
          
          <div class="config-row">
            <label>Kleur Warm (Rechts)</label>
            <input type="color" id="color-hot" value="${this._config.color_hot}">
            <div class="description">Kleur aan de rechterkant van de slider (warme temperaturen)</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">Knop Kleuren</div>
          <div class="config-row">
            <label>Plus/Min Knoppen</label>
            <input type="color" id="color-buttons" value="${this._config.color_buttons}">
            <div class="description">Kleur van de + en - knoppen</div>
          </div>
          
          <div class="config-row">
            <label>Eco/Thuis Knoppen</label>
            <input type="color" id="color-mode-buttons" value="${this._config.color_mode_buttons}">
            <div class="description">Kleur van de Eco en Thuis knoppen wanneer actief</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">Temperatuur Kleuren</div>
          <div class="config-row">
            <label>Huidige Temperatuur</label>
            <input type="color" id="color-current-temp" value="${this._config.color_current_temp}">
            <div class="description">Kleur van de huidige temperatuur weergave</div>
          </div>
          
          <div class="config-row">
            <label>Doel Temperatuur</label>
            <input type="color" id="color-target-temp" value="${this._config.color_target_temp}">
            <div class="description">Kleur van de doel temperatuur weergave</div>
          </div>
          
          <div class="config-row">
            <label>Buiten Temperatuur</label>
            <input type="color" id="color-outdoor-temp" value="${this._config.color_outdoor_temp}">
            <div class="description">Kleur van de buiten temperatuur weergave</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">Temperatuur Kaartjes</div>
          <div class="config-row">
            <label>
              <input type="checkbox" id="show-temperature-cards" ${this._config.show_temperature_cards ? 'checked' : ''}>
              Toon temperaturen in kaartjes
            </label>
            <div class="description">Geeft elke temperatuur een eigen achtergrondkleur met afgeronde hoeken en border</div>
          </div>
          
          <div id="card-settings" style="display: ${this._config.show_temperature_cards ? 'block' : 'none'};">
            <div class="config-row">
              <label>Achtergrondkleur</label>
              <input type="color" id="temperature-card-background" value="${this._config.temperature_card_background}">
              <div class="description">Basiskleur van de achtergrond</div>
            </div>
            
            <div class="config-row">
              <label>Achtergrond Transparantie (%)</label>
              <input type="range" id="temperature-card-background-alpha" min="0" max="100" value="${this._config.temperature_card_background_alpha}" style="width: 200px;">
              <span id="bg-alpha-value">${this._config.temperature_card_background_alpha}%</span>
              <div class="description">0% = volledig transparant, 100% = volledig ondoorzichtig</div>
            </div>
            
            <div class="config-row">
              <label>Border Kleur</label>
              <input type="color" id="temperature-card-border-color" value="${this._config.temperature_card_border_color}">
              <div class="description">Kleur van de rand rond de kaartjes</div>
            </div>
            
            <div class="config-row">
              <label>Border Transparantie (%)</label>
              <input type="range" id="temperature-card-border-alpha" min="0" max="100" value="${this._config.temperature_card_border_alpha}" style="width: 200px;">
              <span id="border-alpha-value">${this._config.temperature_card_border_alpha}%</span>
              <div class="description">0% = volledig transparant, 100% = volledig ondoorzichtig</div>
            </div>
            
            <div class="config-row">
              <label>Border Breedte (pixels)</label>
              <input type="number" id="temperature-card-border-width" min="0" max="5" value="${this._config.temperature_card_border_width}">
              <div class="description">Dikte van de border (0 = geen border, 1-5 pixels)</div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  attachEventListeners() {
    const entitySelect = this.shadowRoot.querySelector('#entity-select');
    const nameInput = this.shadowRoot.querySelector('#name-input');
    const layoutSelect = this.shadowRoot.querySelector('#layout-select');
    const outdoorEntitySelect = this.shadowRoot.querySelector('#outdoor-entity-select');
    const ecoTemp = this.shadowRoot.querySelector('#eco-temp');
    const homeTemp = this.shadowRoot.querySelector('#home-temp');
    
    // Slider color inputs
    const colorCold = this.shadowRoot.querySelector('#color-cold');
    const colorMedium = this.shadowRoot.querySelector('#color-medium');
    const colorHot = this.shadowRoot.querySelector('#color-hot');
    
    // Button color inputs
    const colorButtons = this.shadowRoot.querySelector('#color-buttons');
    const colorModeButtons = this.shadowRoot.querySelector('#color-mode-buttons');
    
    // Temperature color inputs
    const colorCurrentTemp = this.shadowRoot.querySelector('#color-current-temp');
    const colorTargetTemp = this.shadowRoot.querySelector('#color-target-temp');
    const colorOutdoorTemp = this.shadowRoot.querySelector('#color-outdoor-temp');
    
    // Temperature cards
    const showTempCards = this.shadowRoot.querySelector('#show-temperature-cards');
    const cardSettings = this.shadowRoot.querySelector('#card-settings');
    const tempCardBg = this.shadowRoot.querySelector('#temperature-card-background');
    const tempCardBgAlpha = this.shadowRoot.querySelector('#temperature-card-background-alpha');
    const bgAlphaValue = this.shadowRoot.querySelector('#bg-alpha-value');
    const tempCardBorderColor = this.shadowRoot.querySelector('#temperature-card-border-color');
    const tempCardBorderAlpha = this.shadowRoot.querySelector('#temperature-card-border-alpha');
    const borderAlphaValue = this.shadowRoot.querySelector('#border-alpha-value');
    const tempCardBorderWidth = this.shadowRoot.querySelector('#temperature-card-border-width');

    if (entitySelect) {
      entitySelect.addEventListener('change', (e) => {
        this._config.entity = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (nameInput) {
      nameInput.addEventListener('change', (e) => {
        this._config.name = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (layoutSelect) {
      layoutSelect.addEventListener('change', (e) => {
        this._config.layout = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (outdoorEntitySelect) {
      outdoorEntitySelect.addEventListener('change', (e) => {
        this._config.outdoor_entity = e.target.value;
        this.configChanged(this._config);
      });
    }

    const outdoorDisplayMode = this.shadowRoot.querySelector('#outdoor-display-mode');
    if (outdoorDisplayMode) {
      outdoorDisplayMode.addEventListener('change', (e) => {
        this._config.outdoor_display_mode = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (ecoTemp) {
      ecoTemp.addEventListener('change', (e) => {
        this._config.eco_temperature = parseFloat(e.target.value);
        this.configChanged(this._config);
      });
    }

    if (homeTemp) {
      homeTemp.addEventListener('change', (e) => {
        this._config.home_temperature = parseFloat(e.target.value);
        this.configChanged(this._config);
      });
    }

    // Native color pickers - simple change event
    if (colorCold) {
      colorCold.addEventListener('change', (e) => {
        this._config.color_cold = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorMedium) {
      colorMedium.addEventListener('change', (e) => {
        this._config.color_medium = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorHot) {
      colorHot.addEventListener('change', (e) => {
        this._config.color_hot = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorButtons) {
      colorButtons.addEventListener('change', (e) => {
        this._config.color_buttons = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorModeButtons) {
      colorModeButtons.addEventListener('change', (e) => {
        this._config.color_mode_buttons = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorCurrentTemp) {
      colorCurrentTemp.addEventListener('change', (e) => {
        this._config.color_current_temp = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorTargetTemp) {
      colorTargetTemp.addEventListener('change', (e) => {
        this._config.color_target_temp = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorOutdoorTemp) {
      colorOutdoorTemp.addEventListener('change', (e) => {
        this._config.color_outdoor_temp = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (showTempCards) {
      showTempCards.addEventListener('change', (e) => {
        this._config.show_temperature_cards = e.target.checked;
        // Show/hide all card settings based on checkbox
        if (cardSettings) {
          cardSettings.style.display = e.target.checked ? 'block' : 'none';
        }
        this.configChanged(this._config);
      });
    }

    if (tempCardBg) {
      tempCardBg.addEventListener('change', (e) => {
        this._config.temperature_card_background = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (tempCardBgAlpha) {
      tempCardBgAlpha.addEventListener('input', (e) => {
        // Update the display value
        if (bgAlphaValue) {
          bgAlphaValue.textContent = `${e.target.value}%`;
        }
      });
      tempCardBgAlpha.addEventListener('change', (e) => {
        this._config.temperature_card_background_alpha = parseInt(e.target.value);
        this.configChanged(this._config);
      });
    }

    if (tempCardBorderColor) {
      tempCardBorderColor.addEventListener('change', (e) => {
        this._config.temperature_card_border_color = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (tempCardBorderAlpha) {
      tempCardBorderAlpha.addEventListener('input', (e) => {
        // Update the display value
        if (borderAlphaValue) {
          borderAlphaValue.textContent = `${e.target.value}%`;
        }
      });
      tempCardBorderAlpha.addEventListener('change', (e) => {
        this._config.temperature_card_border_alpha = parseInt(e.target.value);
        this.configChanged(this._config);
      });
    }

    if (tempCardBorderWidth) {
      tempCardBorderWidth.addEventListener('change', (e) => {
        this._config.temperature_card_border_width = parseInt(e.target.value);
        this.configChanged(this._config);
      });
    }
  }
}

customElements.define('innodigi-thermostat-card', InnodigiThermostatCard);
customElements.define('innodigi-thermostat-card-editor', InnodigiThermostatCardEditor);

// Register the card with Home Assistant
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'innodigi-thermostat-card',
  name: 'Innodigi Thermostaat Kaart',
  description: 'Een moderne thermostaat kaart met horizontale slider',
  preview: true,
  documentationURL: 'https://github.com/elco/homeassistant-innodigi-thermostat'
});

console.info(
  `%c INNODIGI-THERMOSTAT-CARD %c v1.5.0 `,
  'color: white; background: #039be5; font-weight: 700;',
  'color: #039be5; background: white; font-weight: 700;'
);

