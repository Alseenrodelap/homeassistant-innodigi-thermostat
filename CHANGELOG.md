# Changelog

Alle belangrijke wijzigingen aan dit project worden in dit bestand gedocumenteerd.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/),
en dit project volgt [Semantic Versioning](https://semver.org/lang/nl/).

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

