# Installatie Handleiding - Innodigi Thermostat Card

Deze handleiding helpt je stap voor stap bij het installeren en configureren van de Innodigi Thermostat Card in Home Assistant.

## Vereisten

- Home Assistant versie 2023.1.0 of hoger
- Een werkende climate/thermostaat entiteit

## Installatie Methoden

### Methode 1: Via HACS (Aanbevolen)

HACS (Home Assistant Community Store) is de eenvoudigste manier om custom cards te installeren.

#### Stap 1: HACS Installeren (indien nog niet gedaan)

1. Ga naar https://hacs.xyz/docs/setup/download
2. Volg de installatie-instructies
3. Herstart Home Assistant

#### Stap 2: Repository Toevoegen

1. Open HACS in de sidebar van Home Assistant
2. Klik op "Frontend"
3. Klik op het menu (⋮) rechtsboven
4. Selecteer "Custom repositories"
5. Voeg de repository URL toe: `https://github.com/elco/homeassistant-innodigi-thermostat`
6. Selecteer categorie: "Lovelace"
7. Klik op "Add"

#### Stap 3: Kaart Installeren

1. Zoek naar "Innodigi Thermostat Card" in HACS
2. Klik op de kaart
3. Klik op "Download"
4. Herstart Home Assistant

### Methode 2: Handmatige Installatie

#### Stap 1: Download het Bestand

Download `innodigi-thermostat-card.js` van de releases pagina:
https://github.com/elco/homeassistant-innodigi-thermostat/releases

#### Stap 2: Kopieer naar Home Assistant

1. Maak de directory `/config/www/` aan als deze nog niet bestaat
2. Kopieer `innodigi-thermostat-card.js` naar `/config/www/`

Via SSH of de File Editor add-on:
```bash
# Zorg dat de www directory bestaat
mkdir -p /config/www/

# Kopieer het bestand
cp innodigi-thermostat-card.js /config/www/
```

#### Stap 3: Voeg Resource Toe

Er zijn twee manieren om de resource toe te voegen:

**Optie A: Via de UI (Aanbevolen)**

1. Ga naar "Instellingen" → "Dashboards"
2. Klik rechtsboven op het menu (⋮)
3. Selecteer "Resources"
4. Klik op "+ ADD RESOURCE"
5. Vul in:
   - URL: `/local/innodigi-thermostat-card.js`
   - Resource type: "JavaScript Module"
6. Klik op "CREATE"

**Optie B: Via YAML**

Voeg toe aan `configuration.yaml`:

```yaml
lovelace:
  mode: yaml
  resources:
    - url: /local/innodigi-thermostat-card.js
      type: module
```

#### Stap 4: Herstart Home Assistant

1. Ga naar "Instellingen" → "Systeem"
2. Klik op "HERSTART"
3. Bevestig de herstart

## Kaart Toevoegen aan Dashboard

### Via de Visuele Editor (Aanbevolen) ⭐

1. Ga naar je dashboard
2. Klik rechtsboven op het menu (⋮)
3. Selecteer "Bewerken dashboard"
4. Klik op "+ VOEG KAART TOE"
5. Scroll naar beneden en selecteer **"Custom: Innodigi Thermostat Card"**
6. **Selecteer je thermostaat** via de entity picker dropdown
7. Voeg optioneel een **aangepaste naam** toe
8. Klik op "OPSLAAN"

**Nieuwe feature!** De kaart heeft nu een visuele editor, dus je hoeft geen YAML meer te schrijven! 🎉

### Via YAML (Alternatief)

Als je liever met YAML werkt:

1. Klik op het menu (⋮) en selecteer "Code-editor"
2. Configureer de kaart:
   ```yaml
   type: custom:innodigi-thermostat-card
   entity: climate.jouw_thermostaat
   name: Woonkamer
   ```
3. Klik op "OPSLAAN"

## Verificatie

### Controleer of de Kaart Geladen is

1. Open de browser console (F12)
2. Zoek naar het bericht: `INNODIGI-THERMOSTAT-CARD v1.0.0`
3. Als je dit ziet, is de kaart succesvol geladen!

### Controleer Resources

1. Ga naar "Instellingen" → "Dashboards" → "Resources"
2. Controleer of `/local/innodigi-thermostat-card.js` in de lijst staat
3. Controleer of het type "JavaScript Module" is

## Problemen Oplossen

### De kaart verschijnt niet

**Probleem**: De kaart wordt niet gevonden in de kaarten lijst

**Oplossing**:
1. Controleer of het bestand aanwezig is: `/config/www/innodigi-thermostat-card.js`
2. Controleer of de resource correct is toegevoegd
3. Herlaad de frontend: "Developer Tools" → "YAML" → "Lovelace Resources"
4. Herstart Home Assistant
5. Ververs de browser pagina (Ctrl+F5 of Cmd+Shift+R)

### Foutmelding: "Custom element doesn't exist"

**Probleem**: De browser kan de custom kaart niet vinden

**Oplossing**:
1. Open de browser console (F12)
2. Controleer op JavaScript fouten
3. Controleer of de URL klopt: `/local/innodigi-thermostat-card.js`
4. Controleer of het bestand toegankelijk is via: `http://jouw-ha-url:8123/local/innodigi-thermostat-card.js`

### Foutmelding: "Entity not found"

**Probleem**: De opgegeven thermostaat entiteit bestaat niet

**Oplossing**:
1. Ga naar "Developer Tools" → "States"
2. Zoek naar je thermostaat entiteit (bijv. `climate.woonkamer`)
3. Controleer of de entiteit bestaat en actief is
4. Update de configuratie met de juiste entity ID

### De slider werkt niet

**Probleem**: De temperatuur slider reageert niet

**Oplossing**:
1. Controleer of je thermostaat de volgende attributen heeft:
   - `min_temp`
   - `max_temp`
   - `temperature`
2. Controleer de browser console voor JavaScript fouten
3. Test of de thermostaat werkt met de standaard thermostat card

### Preset modes werken niet

**Probleem**: De Eco en Thuis knoppen doen niets

**Oplossing**:
1. Niet alle thermostaten ondersteunen preset modes
2. Controleer in "Developer Tools" → "Services":
   - Service: `climate.set_preset_mode`
   - Entity: je thermostaat
   - Kijk welke preset modes beschikbaar zijn
3. Als je thermostaat geen preset modes ondersteunt, zijn de knoppen niet functioneel (maar ook niet storend)

## Generieke Thermostaat Configureren

Als je nog geen thermostaat hebt, kun je een generieke thermostaat aanmaken:

Voeg toe aan `configuration.yaml`:

```yaml
climate:
  - platform: generic_thermostat
    name: Woonkamer
    heater: switch.verwarming_woonkamer
    target_sensor: sensor.temperatuur_woonkamer
    min_temp: 15
    max_temp: 25
    target_temp: 20
    cold_tolerance: 0.3
    hot_tolerance: 0.0
    min_cycle_duration:
      minutes: 5
    precision: 0.5
```

Herstart Home Assistant en de thermostaat is beschikbaar als `climate.woonkamer`.

## Volgende Stappen

Nu de kaart is geïnstalleerd, kun je:

1. De kaart aanpassen aan je wensen
2. Meerdere kaarten toevoegen voor verschillende thermostaten
3. De kaart combineren met andere kaarten in een grid layout
4. Experimenteren met verschillende dashboard layouts

## Hulp Nodig?

- Bekijk de [README.md](README.md) voor meer informatie
- Bekijk [example-config.yaml](example-config.yaml) voor voorbeelden
- Open een issue op GitHub: https://github.com/elco/homeassistant-innodigi-thermostat/issues

Veel plezier met je nieuwe thermostaat kaart! 🌡️

