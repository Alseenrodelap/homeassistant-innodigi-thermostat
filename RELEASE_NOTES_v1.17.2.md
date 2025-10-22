# Release v1.17.2 - Heartbeat Mechanism to Prevent Sync Loss

## 🐛 Critical Bug Fix

### Problem Solved
**Issue**: After running for days or weeks, the thermostat card would stop receiving updates from Home Assistant, causing the temperature display to become stale and unresponsive.

**Root Cause**: The card was only updating when specific conditions were met, and after extended periods of inactivity, the update mechanism would stop working.

### Solution: Heartbeat Mechanism

#### 🔄 **30-Second Heartbeat**
- Added automatic heartbeat that checks for entity changes every 30 seconds
- Ensures the card stays in sync even during long periods of inactivity
- Only updates when actual changes are detected (performance optimized)

#### 🛡️ **Robust Update Logic**
- `updateValues()` is now called on every hass update
- Improved error handling and fallback mechanisms
- Entity state tracking prevents unnecessary updates

#### 🔧 **Enhanced Reliability**
- Automatic reinitialization if entity becomes unavailable
- Proper cleanup when card is removed (prevents memory leaks)
- Better error logging for debugging

#### 📊 **Entity State Tracking**
- Tracks entity state changes to detect when updates are needed
- Prevents UI freezing after extended periods
- Maintains sync between local state and entity state

## Technical Details

### New Methods Added
```javascript
_startHeartbeat()           // Starts 30-second heartbeat
_stopHeartbeat()            // Stops heartbeat (cleanup)
_forceUpdateFromEntity()    // Forces update from entity
disconnectedCallback()      // Cleanup when card removed
```

### Improved Methods
```javascript
set hass(hass) {
  // Always update values to ensure UI stays in sync
  this.updateValues();
  
  // Start heartbeat to ensure continuous updates
  this._startHeartbeat();
  
  // ... rest of logic
}

updateValues() {
  // Enhanced with better error handling
  // Fallback mechanisms for missing entities
  // Entity state tracking
}
```

### Heartbeat Logic
```javascript
// Every 30 seconds, check for changes
setInterval(() => {
  if (this._hass && this._config && !this._interacting && !this._dragging) {
    this._forceUpdateFromEntity();
  }
}, 30000);
```

## Impact

### ✅ **User Experience**
- **Always Current**: Temperature display stays accurate for weeks/months
- **No Manual Refresh**: Automatic sync without user intervention
- **Reliable**: Works consistently across all Home Assistant setups
- **Performance**: Minimal impact (only updates when needed)

### ✅ **Technical Benefits**
- **Memory Safe**: Proper cleanup prevents memory leaks
- **Error Resilient**: Automatic recovery from entity issues
- **Efficient**: Smart change detection prevents unnecessary updates
- **Maintainable**: Clear separation of concerns

### ✅ **Compatibility**
- **Backwards Compatible**: No breaking changes
- **All Entities**: Works with all climate entities
- **All Layouts**: Works with normal and compact layouts
- **All Features**: All existing features remain unchanged

## Installation

### Via HACS (Custom Repository)
1. Open HACS in your Home Assistant
2. Go to "Frontend" 
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

## Migration

**From v1.17.1 to v1.17.2:**
- **Automatic**: No configuration changes needed
- **Seamless**: All existing cards continue to work
- **Immediate**: Heartbeat starts automatically after update
- **Safe**: No data loss or breaking changes

## Testing

This release has been tested for:
- ✅ Extended periods (weeks of continuous operation)
- ✅ Multiple entity types (Generic Thermostat, Netatmo, etc.)
- ✅ Various Home Assistant versions (2023.1.0+)
- ✅ Different layouts (normal, compact)
- ✅ Memory usage (no leaks detected)
- ✅ Performance impact (minimal CPU usage)

## Support

- 📖 [Documentation](https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat)
- 🐛 [Report Issues](https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat/issues)
- ☕ [Donate](https://www.paypal.com/donate/?hosted_button_id=KYWBUB3324S9G)

---

**Full Changelog**: https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat/blob/main/CHANGELOG.md

**Previous Release**: [v1.17.1](https://github.com/Alseenrodelap/homeassistant-innodigi-thermostat/releases/tag/v1.17.1)
