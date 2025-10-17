# Add InnoDIGI Thermostat Card to HACS Default

## Repository Information

**Repository:** `Alseenrodelap/homeassistant-innodigi-thermostat`  
**Category:** `plugin`

## Add to data/plugin

Please add this line to the `data/plugin` file:

```
"Alseenrodelap/homeassistant-innodigi-thermostat"
```

## Checklist

- ✅ Repository is public
- ✅ README.md with English documentation and installation instructions
- ✅ info.md for HACS display
- ✅ Valid hacs.json file in root
- ✅ MIT License
- ✅ Screenshot included
- ✅ GitHub Release v1.17.1 available
- ✅ GitHub Actions with HACS validation (passing)
- ✅ GitHub topics added (home-assistant, lovelace, custom-card, etc.)
- ✅ Repository description set
- ✅ Minimum Home Assistant version: 2023.1.0

## Description

A modern, touch-friendly thermostat card for Home Assistant with an intuitive horizontal slider interface.

### Key Features

- 🌡️ Dual temperature display with outdoor temperature support
- 📊 Horizontal slider with customizable gradient colors
- 🎛️ Visual editor - no YAML configuration needed
- 🏠 Preset modes (Eco/Home) with configurable temperatures
- 🎨 Fully customizable colors for slider, buttons, and displays
- 🌍 Multi-language support (7 languages: NL, EN, DE, FR, IT, ES, UK)
- ✅ Compatible with all generic climate entities
- 📱 Touch-friendly interface optimized for tablets and mobile
- ⚡ Real-time updates with smooth animations
- 🎨 Compact and normal layout modes

### Target Users

Home Assistant users with climate entities (thermostats) who want:
- A modern, intuitive interface
- Better control on touch devices
- Multi-language support
- Easy visual configuration

### Quality Indicators

- Clean, modern codebase (vanilla JavaScript)
- Comprehensive documentation in English
- Active development with regular releases
- Detailed changelog with all versions documented
- HACS validation passing
- 7 language translations maintained

## Links

- **Repository:** https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat
- **Documentation:** https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat#readme
- **Latest Release:** https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat/releases/latest
- **HACS Validation:** https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat/actions

## Installation (for users)

Once merged, users can install via:

1. HACS → Frontend → Search "InnoDIGI Thermostat Card"
2. Click Download
3. Restart Home Assistant

## Configuration Example

```yaml
type: custom:innodigi-thermostat-card
entity: climate.living_room
name: Living Room
eco_temperature: 18
home_temperature: 21
color_cold: '#3498db'
color_medium: '#2ecc71'
color_hot: '#e74c3c'
```

Or use the built-in visual editor for configuration without YAML!

---

Thank you for reviewing this submission! 🙏

