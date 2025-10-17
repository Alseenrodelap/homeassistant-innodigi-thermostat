# Changelog

Alle belangrijke wijzigingen aan dit project worden in dit bestand gedocumenteerd.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/),
en dit project volgt [Semantic Versioning](https://semver.org/lang/nl/).

## [1.14.0] - 2025-10-17

### 🌍 UITBREIDING INTERNATIONALISATIE

#### 3 Nieuwe Talen Toegevoegd
- **Italiaans (it)** 🇮🇹: Volledige ondersteuning toegevoegd
- **Spaans (es)** 🇪🇸: Volledige ondersteuning toegevoegd
- **Oekraïens (uk)** 🇺🇦: Volledige ondersteuning toegevoegd

#### Totaal Nu 7 Talen Ondersteund
1. **Nederlands** (nl) 🇳🇱
2. **English** (en) 🇬🇧🇺🇸
3. **Deutsch** (de) 🇩🇪
4. **Français** (fr) 🇫🇷
5. **Italiano** (it) 🇮🇹 ✨ NIEUW
6. **Español** (es) 🇪🇸 ✨ NIEUW
7. **Українська** (uk) 🇺🇦 ✨ NIEUW

### 📊 TAAL VOORBEELDEN

#### Italiaans (it)
- **Card**: "Esterno", "Attuale", "Obiettivo"
- **Editor**: "Impostazioni di base", "Temperatura Eco", "Colori pulsanti"
- **Volledig vertaald**: Alle 30+ velden en 8 secties

#### Spaans (es)
- **Card**: "Exterior", "Actual", "Objetivo"
- **Editor**: "Configuración básica", "Temperatura Eco", "Colores de botones"
- **Volledig vertaald**: Alle 30+ velden en 8 secties

#### Oekraïens (uk)
- **Card**: "Зовнішня", "Поточна", "Цільова"
- **Editor**: "Основні налаштування", "Температура Еко", "Кольори кнопок"
- **Volledig vertaald**: Alle 30+ velden en 8 secties
- **Cyrillisch schrift**: Volledige ondersteuning

### 🎯 CARD LABELS IN ALLE TALEN

**Temperature Display Comparison**:
```
Nederlands:  Buiten  │ Huidig  │ Doel
English:     Outdoor │ Current │ Target
Deutsch:     Außen   │ Aktuell │ Ziel
Français:    Extérieur│ Actuel │ Cible
Italiano:    Esterno │ Attuale │ Obiettivo
Español:     Exterior│ Actual  │ Objetivo
Українська:  Зовнішня│ Поточна │ Цільова
```

### 🔧 TECHNISCHE DETAILS

#### Uitgebreide TRANSLATIONS Object
```javascript
const TRANSLATIONS = {
  en: { /* English */ },
  nl: { /* Dutch */ },
  de: { /* German */ },
  fr: { /* French */ },
  it: { /* Italian */ },    // ✨ NEW
  es: { /* Spanish */ },    // ✨ NEW
  uk: { /* Ukrainian */ }   // ✨ NEW
};
```

#### Coverage Per Taal
**Italiaans (it)**:
- Card labels: 4/4 ✓
- Editor sections: 8/8 ✓
- Editor fields: 30+/30+ ✓
- Dropdown options: 12+/12+ ✓
- 100% completeness ✓

**Spaans (es)**:
- Card labels: 4/4 ✓
- Editor sections: 8/8 ✓
- Editor fields: 30+/30+ ✓
- Dropdown options: 12+/12+ ✓
- 100% completeness ✓

**Oekraïens (uk)**:
- Card labels: 4/4 ✓
- Editor sections: 8/8 ✓
- Editor fields: 30+/30+ ✓
- Dropdown options: 12+/12+ ✓
- 100% completeness ✓
- Cyrillisch support ✓

### 💡 USE CASES

#### Use Case 1: Zuidelijke Europa
**Scenario**: Gebruikers in Italië en Spanje krijgen nu native taalondersteuning

**Voordelen**:
- Italiaanse gebruikers zien "Esterno", "Attuale", "Obiettivo"
- Spaanse gebruikers zien "Exterior", "Actual", "Objetivo"
- Geen Engels meer nodig voor configuratie
- Betere gebruikerservaring

#### Use Case 2: Oost-Europa
**Scenario**: Oekraïense gebruikers krijgen volledige Cyrillische ondersteuning

**Voordelen**:
- Native Cyrillisch schrift
- Alle UI elementen in het Oekraïens
- Volgt Home Assistant taalinstellingen
- Toegankelijk voor niet-Engels sprekende gebruikers

#### Use Case 3: Internationale Community
**Scenario**: Open source project met wereldwijde gebruikers

**Resultaat**:
- 7 talen = ~80% van Europa gedekt
- Lagere drempel voor internationale adoptie
- Community kan gemakkelijk nieuwe talen toevoegen
- Professional multi-language support

### 📈 BEREIK

**Geschatte gebruikers dekking**:
- Nederlands: ~24 miljoen sprekers
- English: ~1.5 miljard sprekers
- Deutsch: ~135 miljoen sprekers
- Français: ~300 miljoen sprekers
- Italiano: ~85 miljoen sprekers ✨
- Español: ~500 miljoen sprekers ✨
- Українська: ~45 miljoen sprekers ✨

**Totaal**: ~2.6 miljard potentiële gebruikers!

### 🌟 VOORBEELDEN

#### Example 1: Editor Sections in New Languages

**Italiaans**:
```
┌─────────────────────────────────┐
│ Impostazioni di base            │
│ Temperatura esterna             │
│ Impostazioni temperatura        │
│ Colori cursore                  │
│ Colori pulsanti                 │
│ Colori display temperatura      │
│ Schede temperatura              │
│ Azioni tocco temperatura        │
└─────────────────────────────────┘
```

**Spaans**:
```
┌─────────────────────────────────┐
│ Configuración básica            │
│ Temperatura exterior            │
│ Configuración de temperatura    │
│ Colores del deslizador          │
│ Colores de botones              │
│ Colores de visualización        │
│ Tarjetas de temperatura         │
│ Acciones de toque               │
└─────────────────────────────────┘
```

**Oekraïens**:
```
┌─────────────────────────────────┐
│ Основні налаштування            │
│ Зовнішня температура            │
│ Налаштування температури        │
│ Кольори повзунка                │
│ Кольори кнопок                  │
│ Кольори відображення            │
│ Картки температури              │
│ Дії натискання                  │
└─────────────────────────────────┘
```

#### Example 2: Tap Action Options

**All 7 Languages**:
- NL: "Geen actie", "Toon entiteit info", "Schakel aan/uit"
- EN: "No action", "Show entity info", "Toggle on/off"
- DE: "Keine Aktion", "Entitätsinformationen anzeigen", "Ein-/Ausschalten"
- FR: "Aucune action", "Afficher les infos de l'entité", "Activer/Désactiver"
- IT: "Nessuna azione", "Mostra informazioni entità", "Attiva/Disattiva"
- ES: "Sin acción", "Mostrar información de entidad", "Activar/Desactivar"
- UK: "Без дії", "Показати інформацію об'єкта", "Увімкнути/Вимкнути"

### 🔄 MIGRATIE

**Van v1.13.0 naar v1.14.0**:

Automatische migratie - geen actie vereist:
- Bestaande kaarten blijven werken
- Nieuwe talen worden automatisch gedetecteerd
- Geen config changes nodig
- Direct beschikbaar na update

### 📝 TECHNISCHE SPECIFICATIES

**Translation Coverage**:
- Totaal aantal talen: 4 → 7 (+3)
- Totaal aantal vertalingen per taal: 80+
- Card labels: 100% gedekt in 7 talen
- Editor UI: 100% gedekt in 7 talen
- Cyrillisch support: Ja (Oekraïens)

**File Size Impact**:
- 3 nieuwe talen toegevoegd: ~6KB
- Totale translations object: ~10KB
- Minified: ~5KB
- Gzipped: ~2KB
- Performance: negligible impact

**Quality Assurance**:
- Alle vertalingen handmatig gecontroleerd
- Native speaker quality voor alle talen
- Consistent terminology binnen elke taal
- Proper character encoding (UTF-8)

### 🎯 VOORDELEN

#### Gebruikerservaring
1. **Bredere bereikbaarheid**: 7 talen = meer gebruikers
2. **Native feel**: Elke gebruiker in eigen taal
3. **Professioneel**: Multi-language support is industry standard
4. **Inclusief**: Toegankelijk voor meer mensen

#### Development
1. **Schaalbaar**: Makkelijk om nieuwe talen toe te voegen
2. **Gestructureerd**: Clear pattern voor vertalingen
3. **Maintainable**: Centrale plek voor alle teksten
4. **Community-friendly**: Open voor bijdragen

#### Community
1. **Internationale adoptie**: Geen taalbarrière
2. **Open contribution**: Community kan talen toevoegen
3. **Growing ecosystem**: Meer gebruikers = meer feedback
4. **Professional image**: Complete i18n support

### 🚀 TOEKOMST

**Makkelijk uit te breiden naar**:
- Portugees (pt/pt-BR)
- Pools (pl)
- Russisch (ru)
- Zweeds (sv)
- Noors (no)
- Deens (da)
- En meer...

**Community contributions welkom!**

## [1.13.0] - 2025-10-17

### 🌍 INTERNATIONALISATIE

#### Volledige Meertalige Ondersteuning
- **Automatische taaldetectie**: Kaart gebruikt automatisch de taal van Home Assistant
- **4 talen ondersteund**: Nederlands, Engels, Duits, Frans
- **Volledig vertaald**: Alle labels, beschrijvingen, en UI-teksten
- **Fallback naar Engels**: Als taal niet beschikbaar is, wordt Engels gebruikt

#### Vertalingen
**Card labels**:
- Temperatuur labels: "Buiten", "Huidig", "Doel" + compact "buiten"
- Automatisch aangepast aan gebruikers taal

**Editor labels** (volledig vertaald):
- Basis Instellingen / Basic Settings / Grundeinstellungen / Paramètres de base
- Temperatuur Instellingen / Temperature Settings / Temperatureinstellungen / Paramètres de température
- Slider Kleuren / Slider Colors / Schieberegler Farben / Couleurs du curseur
- Knop Kleuren / Button Colors / Schaltflächen Farben / Couleurs des boutons
- Temperatuur Kleuren / Temperature Display Colors / Temperaturanzeige Farben / Couleurs d'affichage
- Temperatuur Kaartjes / Temperature Cards / Temperaturkarten / Cartes de température
- Temperatuur Klik Acties / Temperature Tap Actions / Temperatur Klick-Aktionen / Actions de clic

### 🔧 TECHNISCHE DETAILS

#### Translation System
**Translations Object**:
```javascript
const TRANSLATIONS = {
  en: { /* English translations */ },
  nl: { /* Dutch translations */ },
  de: { /* German translations */ },
  fr: { /* French translations */ }
};
```

**Helper Function**:
```javascript
function getTranslation(hass, key) {
  const lang = hass?.language || hass?.locale?.language || 'en';
  const translations = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  return translations[key] || TRANSLATIONS['en'][key] || key;
}
```

**Language Detection**:
- Gebruikt `hass.language` (primair)
- Fallback naar `hass.locale.language`
- Default naar 'en' als geen match
- Key als laatste fallback (voor debugging)

#### Usage in Code
**Card labels**:
```javascript
<div class="temp-label">${getTranslation(this._hass, 'outdoor')}</div>
<div class="temp-label">${getTranslation(this._hass, 'current')}</div>
<div class="temp-label">${getTranslation(this._hass, 'target')}</div>
```

**Compact outdoor display**:
```javascript
outdoorCompact.textContent = `${outdoorTemp.toFixed(1)}${unit} ${getTranslation(this._hass, 'outdoor_compact')}`;
```

**Editor UI**:
```javascript
<div class="section-title">${getTranslation(this._hass, 'section_basic')}</div>
<label>${getTranslation(this._hass, 'entity_label')}</label>
<div class="description">${getTranslation(this._hass, 'entity_description')}</div>
```

### 📊 ONDERSTEUNDE TALEN

#### Nederlands (nl)
- **Card**: "Buiten", "Huidig", "Doel", "buiten"
- **Editor**: Alle instellingen in het Nederlands
- **Voorbeelden**: "Thermostaat Entiteit", "Eco Temperatuur", "Plus/Min Knoppen"

#### English (en)
- **Card**: "Outdoor", "Current", "Target", "outdoor"
- **Editor**: All settings in English
- **Examples**: "Thermostat Entity", "Eco Temperature", "Plus/Minus Buttons"

#### Deutsch (de)
- **Card**: "Außen", "Aktuell", "Ziel", "außen"
- **Editor**: Alle Einstellungen auf Deutsch
- **Beispiele**: "Thermostat Entität", "Eco Temperatur", "Plus/Minus Schaltflächen"

#### Français (fr)
- **Card**: "Extérieur", "Actuel", "Cible", "extérieur"
- **Editor**: Tous les paramètres en français
- **Exemples**: "Entité du thermostat", "Température Éco", "Boutons Plus/Moins"

### 💡 USE CASES

#### Use Case 1: Internationale Installatie
**Scenario**: Home Assistant installatie met meerdere gebruikers die verschillende talen spreken

**Oplossing**: Elke gebruiker ziet de kaart automatisch in hun eigen taal
```yaml
# Gebruiker A: Nederlands (hass.language = 'nl')
# Ziet: "Buiten", "Huidig", "Doel"

# Gebruiker B: English (hass.language = 'en')
# Ziet: "Outdoor", "Current", "Target"

# Gebruiker C: Deutsch (hass.language = 'de')
# Ziet: "Außen", "Aktuell", "Ziel"
```

#### Use Case 2: Makkelijke Uitbreiding
**Scenario**: Nieuwe taal toevoegen aan de kaart

**Oplossing**: Voeg gewoon een nieuw taal object toe aan TRANSLATIONS:
```javascript
TRANSLATIONS.es = {
  outdoor: 'Exterior',
  current: 'Actual',
  target: 'Objetivo',
  // ... meer vertalingen
};
```

#### Use Case 3: Consistent met Home Assistant
**Scenario**: Gebruiker wil dat custom cards dezelfde taal gebruiken als HA

**Oplossing**: Automatische detectie zorgt dat card altijd HA's taal volgt
- Wijzig HA taal → Card taal verandert automatisch
- Geen configuratie nodig
- Instant switch bij language change

### 🎯 VOORDELEN

#### Gebruikerservaring
1. **Native feel**: Kaart voelt aan als standaard HA component
2. **Geen configuratie**: Automatisch de juiste taal
3. **Breed bereik**: Toegankelijk voor internationale gebruikers
4. **Consistent**: Alle teksten in dezelfde taal

#### Development
1. **Gemakkelijk uitbreiden**: Nieuwe talen toevoegen is simpel
2. **Centraal beheer**: Alle teksten in één object
3. **Type-safe**: Sleutels zijn consistent
4. **Maintainable**: Clear structure

#### Community
1. **Open voor bijdragen**: Community kan vertalingen toevoegen
2. **Internationale adoptie**: Geen taalbarrière meer
3. **Professional**: Multi-language support is professioneel
4. **Future-proof**: Basis gelegd voor meer talen

### 🔄 MIGRATIE

**Van v1.12.0 naar v1.13.0**:

Automatische migratie - geen actie vereist:
- Bestaande kaarten blijven werken
- Taal wordt automatisch gedetecteerd
- Geen config changes nodig
- Direct beschikbaar na update

**Taal aanpassen**:
```yaml
# Wordt bepaald door Home Assistant taalinstellingen:
# Configuratie → Systeem → Algemeen → Taal
# Card volgt automatisch deze instelling
```

### 📝 TECHNISCHE SPECIFICATIES

**Translation Coverage**:
- Card labels: 4/4 (outdoor, current, target, outdoor_compact)
- Editor sections: 8/8 (basic, outdoor, temperatures, slider_colors, button_colors, temp_colors, temp_cards, tap_actions)
- Editor fields: 30+ (alle labels, descriptions, placeholders)
- Dropdown options: 12+ (layout, display mode, tap actions)

**Supported Languages**:
- Dutch (nl) - 100% translated
- English (en) - 100% translated
- German (de) - 100% translated
- French (fr) - 100% translated

**File Size Impact**:
- Translation object: ~4KB
- Helper function: ~150 bytes
- Total increase: ~4KB (minified: ~2KB)
- Performance impact: negligible

### 🌟 VOORBEELDEN

#### Example 1: Card in Different Languages
**Dutch**:
```
┌─────────┬─────────┬─────────┐
│ Buiten  │ Huidig  │  Doel   │
│ 15.3°C  │ 21.5°C  │ 22.0°C  │
└─────────┴─────────┴─────────┘
```

**English**:
```
┌─────────┬─────────┬─────────┐
│Outdoor  │ Current │ Target  │
│ 15.3°C  │ 21.5°C  │ 22.0°C  │
└─────────┴─────────┴─────────┘
```

**German**:
```
┌─────────┬─────────┬─────────┐
│ Außen   │Aktuell  │  Ziel   │
│ 15.3°C  │ 21.5°C  │ 22.0°C  │
└─────────┴─────────┴─────────┘
```

**French**:
```
┌──────────┬─────────┬─────────┐
│Extérieur │ Actuel  │ Cible   │
│  15.3°C  │ 21.5°C  │ 22.0°C  │
└──────────┴─────────┴─────────┘
```

#### Example 2: Editor in Multiple Languages
**Section titles change based on language**:
- NL: "Basis Instellingen", "Temperatuur Instellingen", "Slider Kleuren"
- EN: "Basic Settings", "Temperature Settings", "Slider Colors"
- DE: "Grundeinstellungen", "Temperatureinstellungen", "Schieberegler Farben"
- FR: "Paramètres de base", "Paramètres de température", "Couleurs du curseur"

## [1.12.0] - 2025-10-16

### ✨ NIEUWE FUNCTIES

#### Temperatuur Klik Acties
- **Configureerbare klik acties**: Stel in wat er gebeurt bij klik op temperatuur kaartjes
- **3 opties per temperatuur**:
  - `Geen actie`: Temperatuur is niet klikbaar
  - `Toon entiteit info`: Opent de Home Assistant more-info dialog
  - `Schakel aan/uit`: Toggle de entiteit (voor schakelbare entiteiten)
- **Onafhankelijk instelbaar**: Elke temperatuur (Huidig, Doel, Buiten) heeft eigen actie
- **Visual feedback**: Klikbare items krijgen hover effect en pointer cursor
- **Smooth animaties**: Scale animatie bij klik voor betere UX

#### Outdoor Display Mode Fix
- **Compact mode correctie**: Bij 'Altijd compact' wordt outdoor kaartje nu correct verwijderd
- **Voorheen**: Outdoor kaartje bleef zichtbaar ondanks compact mode instelling
- **Nu**: Alleen inline outdoor display toont bij compact mode, kaartje is weg

### 🎨 UI/UX VERBETERINGEN

#### Klikbare Temperaturen
```
┌─────────┬─────────┬─────────┐
│ Huidig  │  Doel   │ Buiten  │  ← Klikbaar met cursor pointer
│ 21.5°C  │ 22.0°C  │ 15.3°C  │     Hover: opacity 0.8
└─────────┴─────────┴─────────┘     Active: scale(0.98)
```

#### Visual States
- **Default**: Normale weergave
- **Hover**: 80% opacity voor feedback
- **Active**: Scale naar 98% voor druk effect
- **Transition**: Smooth 0.2s opacity, 0.1s transform

### 🔧 TECHNISCHE DETAILS

#### Nieuwe Config Opties
```yaml
temp_current_tap_action: 'more-info'   # Actie bij klik op huidige temp
temp_target_tap_action: 'more-info'    # Actie bij klik op doel temp
temp_outdoor_tap_action: 'more-info'   # Actie bij klik op outdoor temp
```

#### Event Handling
**HTML Attributen**:
```html
<div class="temp-item clickable" data-temp-type="current">
  <!-- clickable class voor styling -->
  <!-- data-temp-type voor identificatie -->
</div>
```

**Event Flow**:
```javascript
_handleTempClick(tempType) {
  // 1. Bepaal actie en entiteit op basis van temp type
  // 2. Vuur 'hass-more-info' event voor more-info dialog
  // 3. Of call 'homeassistant.toggle' service voor toggle
}
```

**More-Info Event**:
```javascript
const event = new Event('hass-more-info', {
  bubbles: true,    // Event bubbles naar parent
  composed: true    // Event passeert Shadow DOM boundary
});
event.detail = { entityId };  // Entity ID voor dialog
```

#### CSS Styling
```css
.temp-item.clickable {
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}

.temp-item.clickable:hover {
  opacity: 0.8;
}

.temp-item.clickable:active {
  transform: scale(0.98);
}
```

#### Editor UI
Nieuwe sectie "Temperatuur Klik Acties" met 3 dropdowns:
```
┌─────────────────────────────────────┐
│ Temperatuur Klik Acties             │
├─────────────────────────────────────┤
│ Actie bij klik op Huidige Temp:    │
│ [Toon entiteit info ▼]              │
├─────────────────────────────────────┤
│ Actie bij klik op Doel Temp:       │
│ [Toon entiteit info ▼]              │
├─────────────────────────────────────┤
│ Actie bij klik op Buiten Temp:     │
│ [Toon entiteit info ▼]              │
└─────────────────────────────────────┘
```

### 🐛 BUG FIXES

#### Outdoor Display Mode
**Probleem**: Bij `outdoor_display_mode: 'compact'` bleef het outdoor kaartje zichtbaar in de temperature-display, waardoor er 3 kaartjes getoond werden.

**Oorzaak**: HTML rendering checked alleen `hasOutdoor`, niet de display mode.

**Oplossing**: 
```javascript
// Voor:
${hasOutdoor ? `<div class="temp-item">` : ''}

// Na:
${hasOutdoor && outdoorDisplayMode !== 'compact' ? `<div class="temp-item">` : ''}
```

**Resultaat**: 
- `auto` mode: 3 kaartjes op grote schermen, compact op kleine
- `compact` mode: Altijd compact inline display, geen kaartje
- `inline` mode: Altijd 3 kaartjes

### 📊 VOOR/NA VERGELIJKING

#### Compact Mode Display
**Voor (bug)**:
```
[15.3°C buiten]
┌──────┬──────┬──────┐
│Buiten│Huidig│ Doel │  ← 3 kaartjes (bug!)
│15.3°C│21.5°C│22.0°C│
└──────┴──────┴──────┘
```

**Na (correct)**:
```
[15.3°C buiten]
┌─────────┬─────────┐
│ Huidig  │  Doel   │  ← 2 kaartjes (correct)
│ 21.5°C  │ 22.0°C  │
└─────────┴─────────┘
```

#### Klikbare Temperaturen
**Voor**: Geen interactie mogelijk met temperatuur displays

**Na**: 
- Klik op Huidig → Thermostaat more-info
- Klik op Doel → Thermostaat more-info
- Klik op Buiten → Outdoor sensor more-info
- Configureerbaar per temperatuur
- Visual feedback bij hover/active

### 💡 USE CASES

#### Use Case 1: Snel Entity Info Openen
**Scenario**: Gebruiker wil snel historie/details van een sensor zien

**Oplossing**: Klik op temperatuur → more-info dialog opent automatisch

**Voorbeeld**:
```yaml
temp_outdoor_tap_action: 'more-info'  # Klik op outdoor temp
# → Opent more-info van sensor.outdoor_temperature
# → Toont geschiedenis grafiek, attributen, etc.
```

#### Use Case 2: Schakelbare Verwarming
**Scenario**: Temperatuur display ook gebruikt voor schakelbare heater

**Oplossing**: Gebruik toggle actie
```yaml
temp_target_tap_action: 'toggle'  # Klik schakelt aan/uit
```

#### Use Case 3: Alleen Info Tonen
**Scenario**: Temperaturen zijn puur informatief, geen interactie gewenst

**Oplossing**: Zet acties op 'none'
```yaml
temp_current_tap_action: 'none'
temp_target_tap_action: 'none'
temp_outdoor_tap_action: 'none'
```

### 🎯 VOORDELEN

#### Gebruikerservaring
1. **Directe toegang**: Geen navigatie nodig voor entity details
2. **Visual feedback**: Duidelijk welke items klikbaar zijn
3. **Consistente UX**: Volgt Home Assistant patterns
4. **Flexibiliteit**: Per temperatuur instelbaar

#### Development
1. **Clean implementation**: Hergebruikt HA's event system
2. **Type-safe**: Data attributes voor type identificatie
3. **Extensible**: Gemakkelijk meer acties toe te voegen
4. **Maintainable**: Clear separation of concerns

#### Performance
1. **Efficient events**: Gebruikt event delegation waar mogelijk
2. **Smooth animations**: Hardware-accelerated transforms
3. **No re-renders**: Alleen CSS changes voor hover states

### 🔄 MIGRATIE

**Van v1.11.0 naar v1.12.0**:

Automatische migratie - geen actie vereist:
- Nieuwe config opties krijgen default waarde 'more-info'
- Bestaande kaarten werken zonder aanpassingen
- Optioneel: Configureer acties in editor naar wens

### 📝 CONFIGURATIE VOORBEELD

```yaml
type: custom:innodigi-thermostat-card
entity: climate.woonkamer
outdoor_entity: sensor.outdoor_temperature
outdoor_display_mode: compact

# Nieuwe opties
temp_current_tap_action: more-info    # Klik op huidig → info
temp_target_tap_action: more-info     # Klik op doel → info  
temp_outdoor_tap_action: more-info    # Klik op buiten → info

# Of uitschakelen
# temp_current_tap_action: none
# temp_target_tap_action: none
# temp_outdoor_tap_action: none
```

## [1.11.0] - 2025-10-16

### 🎨 UI/UX VERBETERINGEN - Compact Mode & Control Buttons

#### Compact Mode Optimalisaties
- **Volledige breedte**: Bij compact outdoor mode gebruiken de 2 temperatuur kaartjes nu de volle breedte
- **Outdoor kaart verwijderd**: Derde kaartje (outdoor) wordt volledig verborgen in compact mode
- **Equal width**: Huidig en Doel kaartjes krijgen elk 50% breedte via `flex: 1`
- **"buiten" label**: Compact outdoor display toont nu "15.3°C buiten" i.p.v. alleen "15.3°C"
- **2px omhoog**: Compact display staat nu 2px hoger (`top: -2px`)

#### Grotere Control Buttons
- **5px groter**: Plus/Min buttons zijn nu groter voor betere usability
  - Normal: 48px → 53px (width/height)
  - Compact: 40px → 45px (width/height)
- **Grotere icons**: Font-size ook vergroot voor duidelijkheid
  - Normal: 24px → 29px
  - Compact: 20px → 25px

#### Gecompenseerde Spacing
Om grotere buttons te compenseren zonder hoogte toename:
- **Card padding**: 16px → 14px (normal), 8px → 6px (compact)
- **Card-content gap**: 20px → 16px (normal), 8px → 6px (compact)
- **Controls gap**: 16px → 12px (normal), 8px → 6px (compact)
- **Slider container padding**: 30px → 25px (normal), 15px → 12px (compact)
- **Slider container margin**: 10px → 8px (normal), 4px → 2px (compact)

#### Visual Changes

**Voor (compact mode met outdoor):**
```
[15.3°C]
┌──────┬──────┬──────┐
│Buiten│Huidig│ Doel │  ← 3 kaartjes, smaller
│15.3°C│21.5°C│22.0°C│
└──────┴──────┴──────┘
```

**Na (compact mode met outdoor):**
```
[15.3°C buiten]  ← 2px hoger + label
┌─────────┬─────────┐
│ Huidig  │  Doel   │  ← 2 kaartjes, volle breedte
│ 21.5°C  │ 22.0°C  │
└─────────┴─────────┘
   ⊖  22.0°C  ⊕      ← 5px grotere buttons
```

#### Technische Details

**Flex Layout**:
```css
.temp-item {
  flex: 1;  /* Bij compact mode met outdoor */
}
```

**Button Sizes**:
```css
.control-btn {
  width: 53px;   /* was 48px */
  height: 53px;  /* was 48px */
  font-size: 29px; /* was 24px */
}
```

**Compact Display**:
```html
<div class="outdoor-compact">
  15.3°C buiten  <!-- was: 15.3°C -->
</div>
```

**Spacing Reductions**:
- Total reduction: ~16px vertical space
- Allows for 5px larger buttons
- Net result: Same or slightly less height

#### Voordelen
- ✅ **Betere ruimtebenutting**: 2 kaartjes gebruiken volle breedte
- ✅ **Duidelijkere outdoor label**: "buiten" maakt het direct herkenbaar
- ✅ **Betere usability**: Grotere buttons zijn makkelijker te klikken
- ✅ **Geen hoogte toename**: Gecompenseerde spacing houdt card compact
- ✅ **Visueel evenwicht**: 2 gelijke kaartjes ogen symmetrisch
- ✅ **Touch-friendly**: 53px/45px buttons perfect voor touch screens

#### Use Case
Perfect voor:
- Touch screen interfaces (grotere touch targets)
- Smalle dashboard kolommen (volle breedte benutting)
- Minimalistisch design (2 kaartjes symmetrisch)
- Betere leesbaarheid outdoor temp (met "buiten" label)

## [1.10.0] - 2025-10-16

### ⚙️ NIEUWE FEATURE - Configureerbare Buitentemperatuur Weergave

#### Drie Weergave Modes
- **Auto (default)**: Responsive - compact op smalle schermen (<400px), inline op brede schermen
- **Compact**: Altijd klein links bovenaan weergeven, ongeacht schermgrootte
- **Inline**: Altijd als kolom in temperatuur display weergeven, nooit compact

#### Configuratie Dropdown
- **Locatie**: Editor > Basis Instellingen > Buitentemperatuur Weergave
- **Opties**: 
  1. Auto - Responsive (compact op smalle schermen)
  2. Altijd Compact (klein links bovenaan)
  3. Altijd Inline (in temperatuur display)
- **Default**: Auto (backwards compatible)

#### Gedrag per Mode

**Auto Mode** (responsive):
- Breed scherm (>400px): 3 kolommen met Buiten | Huidig | Doel
- Smal scherm (<400px): Compact display bovenaan + 2 kolommen Huidig | Doel
- Automatische aanpassing via media query

**Compact Mode** (altijd klein):
- Altijd compact display links bovenaan
- Alleen temperatuurwaarde (geen label)
- Klein: 12px font met background
- 2 kolommen: Huidig | Doel
- Perfect voor space-saving op elk scherm

**Inline Mode** (altijd volledig):
- Altijd 3-kolommen layout
- Volledig kaartje met label "Buiten"
- Geen compact display
- Perfecte voor brede dashboards

#### Config Optie
```yaml
outdoor_display_mode: 'auto'  # 'auto', 'compact', of 'inline'
```

#### CSS Implementatie

**Compact Mode**:
```css
.outdoor-compact {
  display: block;
}
.temp-item.outdoor {
  display: none !important;
}
```

**Inline Mode**:
```css
.outdoor-compact {
  display: none !important;
}
.temp-item.outdoor {
  display: flex !important;
}
```

**Auto Mode**:
```css
@media (max-width: 400px) {
  .outdoor-compact { display: block !important; }
  .temp-item.outdoor { display: none !important; }
}
```

#### Use Cases

**Compact Mode**:
- Smalle dashboard kolommen (altijd)
- Minimalistisch design voorkeur
- Maximale ruimte voor andere elementen
- Consistent gedrag op alle schermen

**Inline Mode**:
- Brede dashboard layouts
- Volledige informatieweergave gewenst
- Kaartjes styling voor outdoor temp
- Symmetrische 3-kolommen layout

**Auto Mode**:
- Responsive dashboards
- Mixed device usage (desktop/mobile)
- Geen voorkeur, automatisch aanpassen
- Default gedrag (backwards compatible)

#### Editor Verbetering
- **Nieuwe dropdown**: Direct onder outdoor entity selector
- **Duidelijke labels**: Beschrijft elk gedrag
- **Live update**: Direct zichtbaar na wijziging
- **Helpende beschrijving**: Uitleg bij elke optie

#### Technische Details

**State Management**:
- `outdoor_display_mode` property in config
- Default: 'auto' (backwards compatible)
- Gebruikt in CSS conditionals

**CSS Logic**:
- Template literals voor conditional CSS
- Display properties per mode
- Layout adjustments (margin, padding)
- Z-index management voor overlay

**Event Handling**:
- Dropdown change event in editor
- Config update via configChanged()
- Immediate re-render van card

#### Voordelen
- ✅ Volledige controle over weergave
- ✅ Keuze tussen ruimtebesparend en volledig
- ✅ Altijd compact mogelijk (niet alleen responsive)
- ✅ Altijd inline mogelijk (3 kolommen geforceerd)
- ✅ Backwards compatible (auto is default)
- ✅ Geen breaking changes
- ✅ Intuïtieve configuratie
- ✅ Live preview in editor

### Backwards Compatibility
- Default: 'auto' behoudt responsive gedrag
- Bestaande configs blijven werken
- Nieuwe optie is volledig optioneel
- Geen migratie nodig

## [1.9.0] - 2025-10-16

### 📱 NIEUWE FEATURE - Responsive Buitentemperatuur Display

#### Automatische Layout Aanpassing
- **Smart responsive**: Detecteert automatisch of er genoeg ruimte is voor 3 kolommen
- **Compact display**: Bij smalle schermen (<400px) wordt outdoor temp klein links bovenaan getoond
- **Geen label**: Alleen temperatuurwaarde in compact mode
- **Automatisch verbergen**: Outdoor kaartje verdwijnt uit hoofddisplay op smalle schermen

#### Responsive Gedrag

**Breed scherm** (>400px):
- Normale weergave met 3 kolommen: Buiten | Huidig | Doel
- Outdoor temp met label "Buiten"
- Volledig kaartje (indien kaartjes ingeschakeld)

**Smal scherm** (<400px):
- Compact outdoor display links bovenaan
- Klein: 12px font
- Geen label, alleen waarde: "15.3°C"
- 2 kolommen: Huidig | Doel
- Outdoor kaartje verborgen uit hoofddisplay

#### Styling Details

**Outdoor Compact Display**:
- Positie: Absolute links bovenaan in card
- Font: 12px, font-weight 300
- Kleur: Gebruikt outdoor temp kleur instelling
- Opacity: 0.8 voor subtiel effect
- Background: rgba(0, 0, 0, 0.1) voor leesbaarheid
- Border-radius: 4px
- Padding: 2px 4px
- Z-index: 10 (altijd bovenop)

**Layout Aanpassingen**:
- Normal mode: Titel schuift 55px naar rechts
- Compact mode: Temperature display margin-top 20px
- Automatisch ruimte maken voor compact display

#### Media Query
```css
@media (max-width: 400px) {
  .outdoor-compact {
    display: block !important;
  }
  .temp-item.outdoor {
    display: none !important;
  }
}
```

#### Technische Details

**HTML Structuur**:
- Compact display altijd in DOM (voor smooth transitions)
- Verborgen via CSS op brede schermen
- Verschijnt via media query op smalle schermen

**Update Logic**:
- `updateValues()` update beide displays (normal + compact)
- Sync houden met outdoor entity state
- Dezelfde temperatuur, andere weergave

**CSS Positie**:
```css
.outdoor-compact {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}
```

#### Use Cases

**Smalle Dashboard Kolommen**:
- Perfect voor 1-kolom layouts op tablet
- Mobiele weergave op smartphone
- Split-screen mode

**Responsive Dashboards**:
- Automatische aanpassing aan schermgrootte
- Geen handmatige configuratie nodig
- Smooth transitions tussen modes

**Space Saving**:
- Maximale info in minimale ruimte
- Outdoor temp altijd zichtbaar
- Geen horizontale scroll

#### Voordelen
- ✅ Automatisch responsive (geen config)
- ✅ Outdoor temp altijd zichtbaar
- ✅ Optimaal ruimtegebruik
- ✅ Smooth degradation op smalle schermen
- ✅ Behoud van functionaliteit
- ✅ Duidelijke visuele hierarchie
- ✅ Werkt met alle layouts (normal/compact)
- ✅ Backwards compatible

### Technische Implementatie
- Media query breakpoint: 400px
- CSS `display: none !important` voor override
- Absolute positioning voor overlay
- Beide displays blijven gesynchroniseerd
- Z-index voor correcte layering

## [1.8.0] - 2025-10-16

### 🎨 NIEUWE FEATURES - Alpha Waarden & Border Styling

#### Alpha Waarden (Transparantie)
- **Achtergrond transparantie**: Instelbare alpha waarde via slider (0-100%)
- **Border transparantie**: Instelbare alpha waarde via slider (0-100%)
- **Live preview**: Sliders tonen percentage real-time tijdens aanpassen
- **RGBA ondersteuning**: Automatische conversie van hex + alpha naar rgba()

#### Border Styling
- **Border kleur**: Eigen kleur voor de rand via colorpicker
- **Border alpha**: Aparte transparantie instelling voor border
- **Border breedte**: Instelbare dikte van 0-5 pixels
- **Flexibele styling**: Border kan volledig transparant (0%) of volledig zichtbaar (100%)

#### Features Detail

**Alpha Sliders**:
- Range: 0% (volledig transparant) tot 100% (volledig ondoorzichtig)
- Default achtergrond: 80% (subtiel transparant)
- Default border: 50% (half transparant)
- Live percentage display tijdens slepen

**Border Opties**:
- Kleur: Volledig aanpasbaar via colorpicker (default: #3498db)
- Alpha: Transparantie van 0-100% (default: 50%)
- Breedte: 0-5 pixels (default: 1px, 0 = geen border)
- Styling: Solid border met rgba kleur

**Hex naar RGBA Conversie**:
```javascript
hexToRgba('#3498db', 50)  // rgba(52, 152, 219, 0.5)
```

#### Config Opties (nieuw)
```javascript
temperature_card_background_alpha: 80      // 0-100%
temperature_card_border_color: '#3498db'   // Hex kleur
temperature_card_border_alpha: 50          // 0-100%
temperature_card_border_width: 1           // 0-5 pixels
```

#### Editor Verbeteringen
- **Uitgebreide sectie**: Alle kaartje instellingen gegroepeerd
- **Range sliders**: Intuïtieve percentage sliders voor alpha waarden
- **Live feedback**: Percentage display naast elke slider
- **Input validatie**: Min/max waarden voor alle inputs
- **Conditionele weergave**: Alle opties alleen zichtbaar bij aangevinkt

**Structuur**:
1. Checkbox: Toon kaartjes aan/uit
2. Achtergrondkleur colorpicker
3. Achtergrond alpha slider (0-100%)
4. Border kleur colorpicker
5. Border alpha slider (0-100%)
6. Border breedte input (0-5px)

#### Technische Details

**Helper Function**:
```javascript
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
};
```

**CSS Output**:
```css
.temp-item {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(52, 152, 219, 0.5);
}
```

**Event Listeners**:
- `input` event: Live percentage update tijdens slepen
- `change` event: Config opslaan bij release
- Beide alpha sliders hebben aparte display spans

#### Voordelen
- ✅ Volledige controle over transparantie
- ✅ Subtiele achtergrond mogelijk (bijv 30%)
- ✅ Border kan subtiel of opvallend zijn
- ✅ Past zich aan achtergrond dashboards aan
- ✅ Moderne glasmorphism effecten mogelijk
- ✅ Border kan volledig verborgen (0% of 0px)
- ✅ Live feedback tijdens aanpassen
- ✅ Intuïtieve percentage sliders
- ✅ Backwards compatible met defaults

### Voorbeelden

**Subtiele kaartjes**:
- Achtergrond: donkergrijs, 30% alpha (bijna transparant)
- Border: blauw, 20% alpha (subtiele rand)
- Breedte: 1px

**Opvallende kaartjes**:
- Achtergrond: zwart, 90% alpha (bijna solid)
- Border: blauw, 100% alpha (volledig zichtbaar)
- Breedte: 2px

**Glasmorphism**:
- Achtergrond: wit, 10% alpha (zeer transparant)
- Border: wit, 30% alpha (subtiel)
- Breedte: 1px

## [1.7.0] - 2025-10-16

### 🎨 NIEUWE FEATURE - Temperatuur Kaartjes

#### Optionele Temperatuur Kaartjes
- **Vinkje in instellingen**: Schakel temperatuur kaartjes aan/uit
- **Achtergrondkleur kaartjes**: Instelbare achtergrondkleur via colorpicker
- **Afgeronde hoeken**: Moderne uitstraling met border-radius
- **Automatische layout**: Werkt met 2 of 3 kolommen (met/zonder outdoor temp)

#### Features
- **Toggle functionaliteit**: Vinkje toont/verbergt de kaartjes styling
- **Conditionele colorpicker**: Achtergrondkleur picker verschijnt alleen bij aangevinkt
- **Responsive padding**: Compact mode krijgt kleinere padding (8px vs 12px)
- **Responsive radius**: Compact mode krijgt kleinere border-radius (8px vs 12px)
- **Min-width**: Kaartjes hebben minimum breedte voor consistente uitstraling

#### Config Opties (nieuw)
```javascript
show_temperature_cards: false           // Vinkje: toon kaartjes
temperature_card_background: '#1a1a1a'  // Achtergrondkleur kaartjes
```

#### Styling Details
**Normal mode** (show_temperature_cards: true):
- Background: instelbare kleur
- Padding: 12px
- Border-radius: 12px
- Min-width: 90px
- Gap tussen kaartjes: 12px

**Compact mode** (show_temperature_cards: true + layout: compact):
- Background: instelbare kleur
- Padding: 8px
- Border-radius: 8px
- Min-width: 70px
- Gap tussen kaartjes: 8px

#### Editor Verbeteringen
- **Nieuwe sectie**: "Temperatuur Kaartjes"
- **Checkbox**: Simpele aan/uit toggle
- **Dynamische UI**: Colorpicker verschijnt/verdwijnt bij (on)checken
- **Live preview**: Wijzigingen direct zichtbaar

### Technische Details
- Conditionele CSS via template literals
- Dynamic display van colorpicker row
- Event listener voor checkbox toggle
- Backwards compatible (default: false)

### Voordelen
- ✅ Visuele groepering van temperaturen
- ✅ Betere leesbaarheid op drukke dashboards
- ✅ Moderne uitstraling met kaartjes
- ✅ Flexibele styling - aan/uit schakelbaar
- ✅ Eigen achtergrondkleur per gebruik
- ✅ Werkt met alle layouts (normal/compact)
- ✅ Backwards compatible

## [1.6.0] - 2025-10-16

### 🎨 NIEUWE FEATURES - Uitgebreide Kleur Controle & Buitentemperatuur

#### Native Color Pickers
- **Browser-native colorpickers**: Gebruik je browser's eigen kleurenkiezer (geen OS picker)
- **Instant preview**: Zie direct het resultaat van je kleurkeuze
- **Simpelere configuratie**: Geen hex codes meer handmatig intypen

#### Uitgebreide Kleur Opties

**Slider Kleuren** (zoals voorheen):
- Kleur Koud (Links) - Blauwtint voor lage temperaturen
- Kleur Middel (Midden) - Groentint voor comfortabele temperaturen  
- Kleur Warm (Rechts) - Roodtint voor hoge temperaturen

**Nieuwe Knop Kleuren**:
- Plus/Min Knoppen - Kleur van de +/- temperatuur knoppen
- Eco/Thuis Knoppen - Kleur van de mode knoppen wanneer actief

**Nieuwe Temperatuur Kleuren**:
- Huidige Temperatuur - Kleur van de "Huidig" temperatuur display
- Doel Temperatuur - Kleur van de "Doel" temperatuur display
- Buiten Temperatuur - Kleur van de "Buiten" temperatuur display

#### Buitentemperatuur Feature
- **Optionele buitentemperatuur**: Voeg een sensor toe om buitentemperatuur te tonen
- **3-kolommen layout**: Bij outdoor sensor: Buiten | Huidig | Doel
- **2-kolommen layout**: Zonder outdoor sensor: Huidig | Doel
- **Flexibele configuratie**: Kies elke sensor of weather entiteit
- **Consistente styling**: Buitentemp heeft eigen instelbare kleur

### Editor Verbeteringen
- **Gegroepeerde instellingen**:
  - Slider Kleuren (gradient)
  - Knop Kleuren (buttons)
  - Temperatuur Kleuren (displays)
- **Outdoor entity selector**: Dropdown met alle sensor/weather entiteiten
- **Duidelijke beschrijvingen**: Elke optie heeft uitleg

### Technische Details

**Config Opties (nieuw)**:
```javascript
outdoor_entity: ''              // Sensor voor buitentemperatuur
color_buttons: '#3498db'        // Plus/Min knoppen
color_mode_buttons: '#2ecc71'   // Eco/Thuis knoppen  
color_current_temp: '#3498db'   // Huidige temp display
color_target_temp: '#2ecc71'    // Doel temp display
color_outdoor_temp: '#95a5a6'   // Buiten temp display
```

**Dynamische Layout**:
- Outdoor temp kolom verschijnt alleen als entity is geconfigureerd
- Kleuren worden toegepast via CSS classes (outdoor/current/target)
- UpdateValues() update nu ook outdoor temperatuur

**Backwards Compatible**:
- Alle nieuwe opties hebben defaults
- Bestaande configuraties blijven werken
- Oude slider kleuren behouden

### Voordelen
- ✅ Native colorpicker - browser UI in plaats van OS UI
- ✅ Meer controle - elke UI element eigen kleur
- ✅ Buitentemperatuur - zie binnen vs buiten verschil
- ✅ Flexibele layout - 2 of 3 kolommen
- ✅ Backwards compatible - oude configs werken nog
- ✅ Betere organisatie - kleuren gegroepeerd per functie

## [1.5.0] - 2025-10-16

### 🚀 MAJEURE ARCHITECTUUR WIJZIGING - Pure Lokale State

#### Het Probleem
Slider en knoppen gebruikten nog steeds direct entity.attributes.temperature, waardoor:
- Entity updates tijdens interactie de UI konden overschrijven
- Lokale wijzigingen werden "teruggedraaid" door entity updates
- Geen echte lokale state - alles hing af van entity

#### De Oplossing: Volledig Onafhankelijke Lokale State

**Nieuwe Architectuur:**
```javascript
_localTargetTemp  // Persistent lokale temperatuur
                  // Geïnitialiseerd van entity
                  // Daarna volledig onafhankelijk tijdens interactie
                  
_getCurrentTargetTemp() {
  if (dragging) return _dragValue;     // Tijdens slepen
  return _localTargetTemp;             // Anders: ALTIJD lokaal
  // NOOIT meer direct entity.temperature!
}
```

**Flow:**
1. **Initialisatie**: `_localTargetTemp` = entity temp
2. **Interactie**: Werk ALLEEN met `_localTargetTemp`
3. **Tijdens interactie**: Entity updates worden GENEGEERD
4. **Na interactie + sync**: `_localTargetTemp` = entity temp (sync)
5. **Idle**: `_localTargetTemp` volgt entity updates

#### Wat is Nieuw

**Persistent Lokale State:**
- `_localTargetTemp` wordt geïnitialiseerd bij eerste hass set
- Blijft persistent, wordt niet gereset naar null
- Volledig onafhankelijk tijdens interactie

**Smart Sync:**
- Tijdens interactie: entity updates negeren
- Na interactie: sync lokaal naar entity (via debounce)
- Idle: sync entity naar lokaal

**Update Strategie:**
```javascript
set hass() {
  if (!interacting && !dragging) {
    // Sync entity -> local
    _localTargetTemp = entity.temperature;
  } else if (dragging) {
    // Update UI during drag
    updateValues();  // Uses _dragValue
  }
  // During button interaction: no entity updates
}
```

#### Voordelen
- ✅ Slider volgt ALTIJD je vinger/muis
- ✅ Knoppen werken INSTANT zonder vertraging
- ✅ Geen entity updates tijdens interactie
- ✅ Pure lokale state = voorspelbaar gedrag
- ✅ Entity kan niet meer interfereren

#### Technische Details
- Lokale temp persist tussen interactions
- Entity temp alleen gelezen when idle
- Dragging heeft hoogste prioriteit
- Lokaal heeft tweede prioriteit  
- Entity temp alleen fallback

## [1.4.2] - 2025-10-16

### Opgelost (KRITIEKE FIX)
- **Slider volgt nu altijd je vinger/muis**: Ook na eerste drag blijft slider vloeiend volgen
- Sleepbol springt niet meer naar waarde bij loslaten, maar volgt tijdens slepen

### Wat was het probleem?
Na eerste interactie (knop click of slider drag) bleef `_interacting` flag op `true` staan.
Door verkeerde volgorde in `_getCurrentTargetTemp()` werd `_localTargetTemp` (van vorige actie) 
gebruikt in plaats van `_dragValue` (actuele sleeppositie).

### De Fix
1. **Priority check order**: `_dragging` check VOOR `_localTargetTemp` check
   - Tijdens slepen: gebruik altijd `_dragValue`
   - Na actie: gebruik `_localTargetTemp` tot sync compleet
   - Anders: gebruik entity temperatuur
   
2. **Removed blocking**: `_interacting` wordt niet meer gezet tijdens `handleMove`
   - Voorkomt dat flag blijft hangen tussen acties
   - Wordt alleen gezet bij `_setLocalTemperature()` (einde drag)

### Technisch
```javascript
// VOOR (verkeerd):
if (_localTargetTemp && _interacting) return local;  // ← altijd true na actie!
if (_dragging && _dragValue) return drag;

// NU (correct):
if (_dragging && _dragValue) return drag;            // ← eerst checken!
if (_localTargetTemp && _interacting) return local;
```

## [1.4.1] - 2025-10-16

### Opgelost
- **Slider werkt nu consistent**: Na eerste drag blijft slider vloeiend werken
- `_dragging` flag wordt nu correct gereset na elke interactie
- Alleen update als temperatuur echt verandert (performance)

### Verbeterd - Compact Mode
- **50% smallere slider**: 30px hoogte i.p.v. 60px
- **Minder ruimte rondom slider**:
  - Padding: 15px i.p.v. 30px
  - Margin: 4px i.p.v. 10px
- **Kleinere temperatuur displays**:
  - Temperatuur: 24px i.p.v. 32px
  - Labels: 11px i.p.v. 12px
  - Units: 16px i.p.v. 20px
  - Margins: 4px i.p.v. 10px
- **Compactere slider markers**:
  - Target knop: 28px i.p.v. 40px
  - Current marker: 36px hoog i.p.v. 70px
- **Kleiner drag-value kaartje**:
  - Font: 18px i.p.v. 24px
  - Padding: 6px/12px i.p.v. 8px/16px

### Technisch
- handleEnd slaat waarden lokaal op voor betere flow
- Conditional check of temp veranderd is voor updateValues
- Alle compact styling via dynamic template literals

## [1.4.0] - 2025-10-16

### 🎨 NIEUWE FEATURES

#### Compact Layout
- **Nieuwe layout optie**: Kies tussen 'Normal' en 'Compact' in de visuele editor
- **Compact mode**:
  - Minder ruimte in hoogte (8px padding i.p.v. 16px)
  - Geen titel getoond
  - Eco/Thuis knoppen naast Plus/Min knoppen
  - Geen doeltemperatuur tussen +/- knoppen
  - Kleinere knoppen (40px i.p.v. 48px)
  - Perfekt voor dashboards met beperkte ruimte

#### Verbeterde Slider
- **Drag value kaartje**: Toont altijd de temperatuur tijdens slepen (al geïmplementeerd)
- Sleepbolletje volgt je vinger/muis perfect
- Temperatuur wordt pas naar entity gestuurd bij loslaten (via lokale state)

### Layout Opties
- **Normal**: Volledige weergave met titel, gescheiden knoppen
- **Compact**: Ruimtebesparend, alle knoppen op één rij

### Technisch
- Layout selecteerbaar via visuele editor
- Dynamische CSS styling op basis van layout
- Conditionale rendering van header
- Flex-wrap voor compact mode knoppen
- Layout optie toegevoegd aan config defaults

## [1.3.0] - 2025-10-16

### 🚀 MAJEURE ARCHITECTUUR VERBETERING

#### Probleem Opgelost
Knoppen reageerden inconsistent, soms halve graad, soms hele graad, vaak helemaal niet. 
Dit kwam doordat we wachtten op state updates van Home Assistant na elke wijziging.

#### Oplossing: Lokale State Management
- **Instant UI feedback**: Knoppen updaten DIRECT zonder wachten op thermostaat
- **Debounced sync**: Wijzigingen worden gebundeld en na 1 seconde naar thermostaat gestuurd
- **Geen race conditions meer**: Lokale state heeft altijd voorrang tijdens interactie

### Wat is Nieuw
- `_localTargetTemp`: Lokale temperatuur state voor instant feedback
- `_setLocalTemperature()`: Update UI direct en schedule sync
- `_syncToThermostat()`: Debounced sync naar Home Assistant
- `_getCurrentTargetTemp()`: Intelligente temperatuur getter (lokaal > drag > entity)

### Technische Details
- Plus/Min knoppen werken met lokale state (instant +0.5°C of -0.5°C)
- Slider gebruikt lokale state tijdens drag
- 1 seconde debounce voordat sync naar thermostaat
- UI toont ALTIJD de lokale waarde tijdens interactie
- Na sync: 500ms wachten voordat externe updates weer worden toegestaan

### Voordelen
- ✅ Instant respons - geen vertraging meer
- ✅ Consistent gedrag - altijd 0.5°C stappen
- ✅ Sneller gebruik - meerdere clicks worden gebundeld
- ✅ Minder API calls - 10 clicks = 1 API call
- ✅ Geen blokkering meer - kan altijd klikken
- ✅ Robuuster - niet afhankelijk van state update timing

## [1.2.7] - 2025-10-16

### Opgelost (KRITIEKE FIXES)
- **Plus/Min knoppen werken nu consistent**: Altijd 0.5°C per klik, geen inconsistent gedrag meer
- **Knoppen doen altijd iets**: Werken elke keer, niet alleen na pagina reload
- **Geen minimum temperatuur blokkering**: Kan nu wel onder 18 graden (was bug door verloren event listeners)
- Event listeners blijven nu behouden en worden niet meer verloren

### Technisch (Fundamentele Verbeteringen)
- Nieuwe `_startInteraction()` en `_endInteraction()` helper methodes
- Oude timeouts worden nu automatisch gecanceld bij nieuwe interactie
- `_interactionTimeout` wordt opgeslagen zodat we oude timeouts kunnen opruimen
- `setConfig` rendert NIET meer bij elke config update (alleen bij entity change)
- Event listeners worden NOOIT meer vervangen na initialisatie
- `preventDefault()` en `stopPropagation()` toegevoegd aan knop clicks
- Betere state management voorkomt race conditions

### Wat was het probleem?
- Bij elke config update werden event listeners vervangen (verloren)
- Oude timeouts bleven actief en blokkeerden nieuwe interacties
- `_interacting` flag kon blijven hangen op `true`
- Dit veroorzaakte inconsistent gedrag en geblokkeerde knoppen

## [1.2.6] - 2025-10-16

### Verbeterd
- **Snellere respons**: Vertraging verkort van 1000ms naar 300ms voor directere feedback
- **Plus/Min knoppen**: Geforceerd op halve graden (0.5°C) stappen voor nauwkeurige controle
- Slider werkt ook met halve graden stappen

### Technisch
- Interactie timeout verkort van 1s naar 300ms voor alle knoppen
- Step geforceerd naar 0.5 in plaats van thermostaat attribuut gebruiken
- Consistente halve graad stappen door hele kaart

## [1.2.5] - 2025-10-16

### Opgelost
- **Colorpicker is weer zichtbaar**: Editor rendert nu correct bij config changes
- **Eco/Thuis temperaturen werken correct**: Gebruikt alleen geconfigureerde temperaturen (18°C voor eco)
- **Slider schiet niet meer heen en weer**: Updates worden geblokkeerd tijdens interactie
- **Plus/Min knoppen werken betrouwbaar**: Updates worden geblokkeerd tijdens gebruik
- Eco/Thuis knoppen roepen GEEN preset_mode API meer aan (voorkomt conflict met thermostaat presets)

### Technisch
- Toegevoegd `_interacting` flag om state updates te blokkeren tijdens gebruikersinteractie
- 1 seconde cooldown na elke actie voordat updates weer worden toegestaan
- Editor rendert bij setConfig maar niet bij elke hass update
- Preset mode buttons zetten alleen temperatuur, geen preset mode API calls meer

## [1.2.4] - 2025-10-16

### Opgelost
- **Slider werkt nu correct**: Volgt je vinger/muis tijdens het slepen
- **Knoppen functioneren**: Eco, Thuis, Plus en Min knoppen werken allemaal
- **Browser-native colorpicker**: Kleuren kiezen via tekstveld met hex codes in plaats van OS picker
- Kaart update nu alleen wanneer nodig in plaats van bij elke state change

### Toegevoegd
- Live kleur preview swatches in de configuratie editor
- Hex kleur validatie en auto-formatting (uppercase)
- Visuele kleur preview die real-time update tijdens typen

### Technisch
- Kaart gebruikt nu `updateValues()` voor state updates zonder volledige DOM re-render
- Event listeners blijven behouden tussen updates
- Slimme render strategie: volledige render alleen bij initialisatie en config wijzigingen
- Colorpicker vervangen door text input met pattern validatie en swatch preview

## [1.2.3] - 2025-10-16

### Opgelost
- **Alle invoervelden werken nu correct**: Kleurkiezers en andere velden kunnen nu worden aangepast zonder vastlopen
- **Volledig opgelost browser freeze**: Editor rendert nu alleen bij initialisatie, nooit meer daarna
- Kleurkiezers tonen live preview maar slaan pas op bij definitieve selectie
- Editor reageert niet meer op elke Home Assistant state update

### Technisch
- Kleurkiezer events gescheiden: `input` voor preview, `change` voor opslaan
- Editor rendert alleen eenmalig bij initialisatie
- `setConfig` voorkomt onnodige re-renders na initialisatie
- Alle input event handlers werken nu zonder DOM re-render

## [1.2.2] - 2025-10-16

### Opgelost
- **Focus verlies probleem**: Focus gaat niet meer verloren bij het typen in tekstvelden
- **Browser freeze**: Opgelost probleem waarbij de browser vastliep door te veel re-renders
- Editor rendert nu alleen wanneer nodig in plaats van bij elke state update
- Naam input veld gebruikt nu 'change' event in plaats van 'input' event

### Technisch
- Verbeterde render performance van de configuratie editor
- Toegevoegd `_initialized` flag om onnodige re-renders te voorkomen
- Optimalisatie van de `set hass()` setter in de editor class

## [1.2.0] - 2025-10-16

### Toegevoegd
- **Kleur configuratie**: Aanpasbare kleuren voor de temperatuurbalk (koud/middel/warm)
- **Temperatuur presets**: Instelbare doeltemperaturen voor Eco en Thuis modes
- Werkende entity selectie dropdown met alle climate entiteiten
- Live preview van geselecteerde kleuren in de editor
- Drie configuratie secties: Basis, Temperatuur, en Kleuren

### Verbeterd
- Volledig werkende visuele editor met echte form elementen
- Entity selector toont nu alle beschikbare thermostaten
- Eco en Thuis knoppen zetten nu automatisch de geconfigureerde temperaturen
- Betere structuur en styling van de configuratie interface

### Opgelost
- Entity picker werd niet correct getoond (nu vervangen door dropdown)
- Configuratie werd niet correct opgeslagen

## [1.1.0] - 2025-10-16

### Toegevoegd
- Visuele editor voor eenvoudige configuratie via de UI
- Entity picker voor het selecteren van climate entiteiten
- Configuratie veld voor aangepaste naam
- Automatische filtering op climate domain in entity selector
- `getConfigElement()` methode voor editor ondersteuning
- `getStubConfig()` methode voor standaard configuratie

### Verbeterd
- Kaart kan nu volledig via de visuele editor worden ingesteld
- Geen handmatige YAML configuratie meer nodig
- Betere gebruikerservaring bij het toevoegen van de kaart

## [1.0.0] - 2025-10-16

### Toegevoegd
- Initiële release van Innodigi Thermostat Card
- Horizontale slider interface voor temperatuurcontrole
- Weergave van huidige en doeltemperatuur
- Touch-vriendelijke slider met sleep functionaliteit
- Grote temperatuurweergave tijdens het slepen
- Eco en Thuis preset mode knoppen
- Plus en min knoppen voor nauwkeurige controle
- Gradient kleurverloop op de slider (blauw → groen → rood)
- Visuele markers voor huidige en doeltemperatuur
- Vloeiende animaties en transities
- Responsive design
- Compatibiliteit met alle generieke thermostaat entiteiten
- Ondersteuning voor Home Assistant design tokens
- Volledige Nederlandse documentatie

### Features
- Real-time updates bij temperatuurwijzigingen
- Touch en mouse ondersteuning
- Automatische cleanup van event listeners
- Foutafhandeling voor ontbrekende entiteiten
- Configureerbare naam voor de kaart
- Ondersteuning voor verschillende temperatuurunits (°C/°F)
- Automatische detectie van min/max temperaturen
- Configureerbare temperatuurstappen

### Documentatie
- Uitgebreide README met installatie-instructies
- Voorbeeld configuraties
- Troubleshooting guide
- HACS ondersteuning
- MIT licentie

