# Changelog

Alle belangrijke wijzigingen aan dit project worden in dit bestand gedocumenteerd.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/),
en dit project volgt [Semantic Versioning](https://semver.org/lang/nl/).

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

