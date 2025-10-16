class InnodigiThermostatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._dragging = false;
    this._dragValue = null;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    this.updateCard();
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }
    this._config = config;
    this.updateCard();
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
      color_cold: '#3498db',
      color_medium: '#2ecc71',
      color_hot: '#e74c3c',
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
    const targetTemp = this._dragging ? this._dragValue : (parseFloat(entity.attributes.temperature) || 20);
    const minTemp = parseFloat(entity.attributes.min_temp) || 5;
    const maxTemp = parseFloat(entity.attributes.max_temp) || 35;
    const step = parseFloat(entity.attributes.target_temp_step) || 0.5;
    const unit = this._hass.config.unit_system.temperature;
    const presetMode = entity.attributes.preset_mode || 'none';

    this.shadowRoot.innerHTML = `
      <style>
        ha-card {
          padding: 16px;
          background: var(--ha-card-background, var(--card-background-color, white));
          border-radius: var(--ha-card-border-radius, 12px);
          box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0,0,0,0.1));
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          font-size: 18px;
          font-weight: 500;
          color: var(--primary-text-color);
        }

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
          background: var(--primary-color);
          color: white;
        }

        .temperature-display {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 10px 0;
        }

        .temp-item {
          text-align: center;
        }

        .temp-label {
          font-size: 12px;
          color: var(--secondary-text-color);
          margin-bottom: 4px;
        }

        .temp-value {
          font-size: 32px;
          font-weight: 300;
          color: var(--primary-text-color);
        }

        .temp-unit {
          font-size: 20px;
          margin-left: 2px;
        }

        .slider-container {
          position: relative;
          padding: 30px 0;
          margin: 10px 0;
        }

        .slider-track {
          position: relative;
          height: 60px;
          background: linear-gradient(to right, 
            ${this._config.color_cold || '#3498db'} 0%, 
            ${this._config.color_medium || '#2ecc71'} 50%, 
            ${this._config.color_hot || '#e74c3c'} 100%);
          border-radius: 30px;
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
          width: 4px;
          height: 70px;
          background: rgba(255, 255, 255, 0.7);
          border: 2px solid var(--primary-text-color);
          border-radius: 2px;
          z-index: 1;
        }

        .slider-marker.target {
          width: 40px;
          height: 40px;
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
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-color);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 24px;
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
          gap: 16px;
        }

        .control-btn {
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 50%;
          background: var(--primary-color);
          color: white;
          font-size: 24px;
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
      </style>

      <ha-card>
        <div class="card-content">
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

          <div class="temperature-display">
            <div class="temp-item">
              <div class="temp-label">Huidig</div>
              <div class="temp-value">
                ${currentTemp.toFixed(1)}<span class="temp-unit">${unit}</span>
              </div>
            </div>
            <div class="temp-item">
              <div class="temp-label">Doel</div>
              <div class="temp-value">
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

          <div class="controls">
            <button class="control-btn" data-action="decrease">−</button>
            <div class="target-display">${targetTemp.toFixed(1)}${unit}</div>
            <button class="control-btn" data-action="increase">+</button>
          </div>
        </div>
      </ha-card>
    `;

    this._attachEventListeners();
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
    const step = parseFloat(entity.attributes.target_temp_step) || 0.5;

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
        const action = e.target.dataset.action;
        const currentTarget = parseFloat(entity.attributes.temperature) || 20;
        
        if (action === 'increase') {
          this._setTemperature(Math.min(maxTemp, currentTarget + step));
        } else if (action === 'decrease') {
          this._setTemperature(Math.max(minTemp, currentTarget - step));
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
      
      this._dragValue = temp;
      this._dragging = true;
      this.updateCard();
    };

    const handleEnd = () => {
      if (this._dragging && this._dragValue !== null) {
        this._setTemperature(this._dragValue);
      }
      this._dragging = false;
      this._dragValue = null;
      this.updateCard();
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

  _setTemperature(temperature) {
    this._hass.callService('climate', 'set_temperature', {
      entity_id: this._config.entity,
      temperature: temperature
    });
  }

  _setPresetMode(mode) {
    // Als er custom temperaturen zijn ingesteld, zet die in plaats van preset mode
    let targetTemp = null;
    
    if (mode === 'eco' && this._config.eco_temperature) {
      targetTemp = this._config.eco_temperature;
    } else if (mode === 'home' && this._config.home_temperature) {
      targetTemp = this._config.home_temperature;
    }

    if (targetTemp !== null) {
      // Zet de temperatuur
      this._hass.callService('climate', 'set_temperature', {
        entity_id: this._config.entity,
        temperature: targetTemp
      });
    }
    
    // Probeer ook de preset mode in te stellen (als de thermostaat dit ondersteunt)
    try {
      this._hass.callService('climate', 'set_preset_mode', {
        entity_id: this._config.entity,
        preset_mode: mode
      });
    } catch (e) {
      // Sommige thermostaten ondersteunen geen preset modes, dat is OK
    }
  }

  disconnectedCallback() {
    if (this._moveHandler) {
      document.removeEventListener('mousemove', this._moveHandler);
    }
    if (this._endHandler) {
      document.removeEventListener('mouseup', this._endHandler);
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
    // Only render on first hass set, not on every state update
    if (this._config && !this._initialized) {
      this._initialized = true;
      this.render();
    }
  }

  setConfig(config) {
    this._config = {
      entity: '',
      name: '',
      color_cold: '#3498db',
      color_medium: '#2ecc71',
      color_hot: '#e74c3c',
      eco_temperature: 18,
      home_temperature: 21,
      ...config
    };
    
    // Only render once on initialization, never re-render afterwards
    // (input values are updated directly via event handlers)
    if (this._hass && !this._initialized) {
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

        .config-row input[type="color"] {
          height: 40px;
          cursor: pointer;
        }

        .config-row input[type="number"] {
          width: 100px;
        }

        .description {
          font-size: 12px;
          color: var(--secondary-text-color);
          margin-top: 4px;
        }

        .color-preview {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .color-preview input {
          width: 80px;
        }

        .color-value {
          font-family: monospace;
          font-size: 12px;
          color: var(--secondary-text-color);
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
          <div class="section-title">Kleur Instellingen</div>
          <div class="config-row">
            <label>Kleur Koud (Links)</label>
            <div class="color-preview">
              <input type="color" id="color-cold" value="${this._config.color_cold}">
              <span class="color-value" id="color-cold-value">${this._config.color_cold}</span>
            </div>
            <div class="description">Kleur aan de linkerkant van de balk (koude temperaturen)</div>
          </div>
          
          <div class="config-row">
            <label>Kleur Middel (Midden)</label>
            <div class="color-preview">
              <input type="color" id="color-medium" value="${this._config.color_medium}">
              <span class="color-value" id="color-medium-value">${this._config.color_medium}</span>
            </div>
            <div class="description">Kleur in het midden van de balk</div>
          </div>
          
          <div class="config-row">
            <label>Kleur Warm (Rechts)</label>
            <div class="color-preview">
              <input type="color" id="color-hot" value="${this._config.color_hot}">
              <span class="color-value" id="color-hot-value">${this._config.color_hot}</span>
            </div>
            <div class="description">Kleur aan de rechterkant van de balk (warme temperaturen)</div>
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  attachEventListeners() {
    const entitySelect = this.shadowRoot.querySelector('#entity-select');
    const nameInput = this.shadowRoot.querySelector('#name-input');
    const ecoTemp = this.shadowRoot.querySelector('#eco-temp');
    const homeTemp = this.shadowRoot.querySelector('#home-temp');
    const colorCold = this.shadowRoot.querySelector('#color-cold');
    const colorMedium = this.shadowRoot.querySelector('#color-medium');
    const colorHot = this.shadowRoot.querySelector('#color-hot');
    const colorColdValue = this.shadowRoot.querySelector('#color-cold-value');
    const colorMediumValue = this.shadowRoot.querySelector('#color-medium-value');
    const colorHotValue = this.shadowRoot.querySelector('#color-hot-value');

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

    if (colorCold && colorColdValue) {
      // Update preview on input, save on change
      colorCold.addEventListener('input', (e) => {
        colorColdValue.textContent = e.target.value;
      });
      colorCold.addEventListener('change', (e) => {
        this._config.color_cold = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorMedium && colorMediumValue) {
      // Update preview on input, save on change
      colorMedium.addEventListener('input', (e) => {
        colorMediumValue.textContent = e.target.value;
      });
      colorMedium.addEventListener('change', (e) => {
        this._config.color_medium = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorHot && colorHotValue) {
      // Update preview on input, save on change
      colorHot.addEventListener('input', (e) => {
        colorHotValue.textContent = e.target.value;
      });
      colorHot.addEventListener('change', (e) => {
        this._config.color_hot = e.target.value;
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
  `%c INNODIGI-THERMOSTAT-CARD %c v1.2.3 `,
  'color: white; background: #039be5; font-weight: 700;',
  'color: #039be5; background: white; font-weight: 700;'
);

