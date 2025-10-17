# Release v1.17.1 - Bug Fixes

## 🐛 Bug Fixes

### 1. Slider Works After Edit Mode
**Problem**: After closing the editor, the slider stopped working

**Root Cause**: 
- Event listeners for `mousemove` and `mouseup` were added to `document`
- With each render (e.g., after closing editor), NEW listeners were added
- Old listeners remained and referenced deleted DOM elements
- This caused conflicts and blocked slider functionality

**Solution**:
```javascript
_attachEventListeners() {
  // Clean up old event listeners first to prevent stacking
  if (this._moveHandler) {
    document.removeEventListener('mousemove', this._moveHandler);
    this._moveHandler = null;
  }
  if (this._endHandler) {
    document.removeEventListener('mouseup', this._endHandler);
    this._endHandler = null;
  }
  
  // ... rest of event listener setup
}
```

**Result**:
- Old listeners are now correctly removed before new ones are added
- Slider works reliably after leaving the editor
- No more listener stacking
- No memory leaks from leftover listeners

### 2. Eco/Home Button Colors Fix
**Problem**: Set background color for Eco/Home buttons was not applied

**Root Cause**:
- CSS specificity conflict possible
- Theme variables could override the custom color
- Without `!important`, the color was sometimes ignored

**Solution**:
```css
/* Before */
.mode-btn.active {
  background: ${colorModeButtons};
  color: white;
}

/* After */
.mode-btn.active {
  background: ${colorModeButtons} !important;
  color: white;
}
```

**Result**:
- Custom button colors are NOW correctly applied
- Works in all themes and situations
- No more overriding by theme CSS

## 🔧 Technical Details

**Event Listener Lifecycle**:
```
1. Card render → _attachEventListeners() called
2. Check: Do old handlers exist?
   - YES → Remove from document → Set refs to null
   - NO → Continue
3. Create new handlers → Attach to document
4. Store refs in this._moveHandler and this._endHandler
5. On next render or cleanup → Repeat from step 1
```

**CSS !important Usage**:
- Normal: Avoid `!important` where possible
- Here: Necessary because:
  - Theme CSS can override custom colors
  - No other way to guarantee
  - Specific use case for user-configured colors

## 📊 Impact

**User Experience**:
- ✅ Slider works reliably after editor use
- ✅ Custom button colors are displayed correctly
- ✅ No more confusing behavior after configuration changes
- ✅ Better reliability overall

**Code Quality**:
- Proper cleanup of event listeners
- Prevent memory leaks
- Better CSS specificity handling

**Backwards Compatibility**:
- No breaking changes
- Existing configurations continue to work
- Only bugfixes, no new features

## Features

- 🌡️ Dual temperature display with outdoor temperature support
- 📊 Horizontal slider with gradient colors
- 🎛️ Visual editor - no YAML needed
- 🏠 Preset modes (Eco/Home with configurable temperatures)
- 🎨 Fully customizable colors
- 🌍 7 languages supported (NL, EN, DE, FR, IT, ES, UK)
- ✅ Compatible with all generic thermostat entities

## Installation

### Via HACS (Custom Repository)
1. Open HACS in your Home Assistant
2. Click on "Frontend" 
3. Click the 3 dots menu (⋮) in the top right
4. Select "Custom repositories"
5. Add: `https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat`
6. Category: `Lovelace`
7. Click "Add"
8. Search for "InnoDIGI Thermostat Card"
9. Click "Download"
10. Restart Home Assistant

### Manual Installation
1. Download `innodigi-thermostat-card.js` from this release
2. Copy to `/config/www/` in your Home Assistant installation
3. Add to `configuration.yaml`:
   ```yaml
   lovelace:
     resources:
       - url: /local/innodigi-thermostat-card.js
         type: module
   ```
4. Restart Home Assistant

## Configuration

Basic YAML configuration:
```yaml
type: custom:innodigi-thermostat-card
entity: climate.living_room
```

Or use the visual editor - no YAML needed!

## Support

- 📖 [Documentation](https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat)
- 🐛 [Report Issues](https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat/issues)
- ☕ [Donate](https://www.paypal.com/donate/?hosted_button_id=KYWBUB3324S9G)

---

**Full Changelog**: https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat/blob/main/CHANGELOG.md

