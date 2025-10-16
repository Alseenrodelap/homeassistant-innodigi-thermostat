# Changelog

Alle belangrijke wijzigingen aan dit project worden in dit bestand gedocumenteerd.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/),
en dit project volgt [Semantic Versioning](https://semver.org/lang/nl/).

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

