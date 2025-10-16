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
            #3498db 0%, 
            #2ecc71 50%, 
            #e74c3c 100%);
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
    this._hass.callService('climate', 'set_preset_mode', {
      entity_id: this._config.entity,
      preset_mode: mode
    });
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

customElements.define('innodigi-thermostat-card', InnodigiThermostatCard);

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
  `%c INNODIGI-THERMOSTAT-CARD %c v1.0.0 `,
  'color: white; background: #039be5; font-weight: 700;',
  'color: #039be5; background: white; font-weight: 700;'
);

