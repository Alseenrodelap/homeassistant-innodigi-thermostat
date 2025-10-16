# Innodigi Thermostaat Kaart voor Home Assistant

Een moderne, touch-vriendelijke thermostaat kaart voor Home Assistant met een intuïtieve horizontale slider interface.

![Innodigi Thermostat Card](screenshot.png)

## Features

- 🌡️ **Dubbele temperatuurweergave**: Toont zowel huidige als doeltemperatuur
- 📊 **Horizontale slider**: Touch-vriendelijke balk in plaats van circulaire interface
- 🎯 **Visuele feedback**: Grote temperatuurweergave tijdens het slepen
- 🏠 **Preset modes**: Snel schakelen tussen Eco en Thuis modus
- ➕➖ **Plus/Min knoppen**: Nauwkeurige temperatuurcontrole
- 🎨 **Moderne UI**: Vloeiende animaties en gradient slider
- 🔄 **Realtime updates**: Onmiddellijke feedback bij interactie
- ✅ **Compatibel**: Werkt met alle generieke thermostaat entiteiten

## Installatie

### HACS (Aanbevolen)

1. Open HACS in je Home Assistant
2. Ga naar "Frontend"
3. Klik op de "+" knop
4. Zoek naar "Innodigi Thermostat Card"
5. Klik op "Install"
6. Herstart Home Assistant

### Handmatige installatie

1. Download `innodigi-thermostat-card.js`
2. Kopieer het bestand naar `/config/www/` in je Home Assistant installatie
3. Voeg de volgende regel toe aan je `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/innodigi-thermostat-card.js
      type: module
```

4. Herstart Home Assistant

## Configuratie

Voeg de kaart toe aan je dashboard via de UI of via YAML:

### Basis configuratie

```yaml
type: custom:innodigi-thermostat-card
entity: climate.woonkamer
```

### Volledige configuratie

```yaml
type: custom:innodigi-thermostat-card
entity: climate.woonkamer
name: Woonkamer Thermostaat
```

## Configuratie opties

| Optie | Type | Verplicht | Standaard | Beschrijving |
|-------|------|-----------|-----------|--------------|
| `type` | string | Ja | - | `custom:innodigi-thermostat-card` |
| `entity` | string | Ja | - | De climate entity ID |
| `name` | string | Nee | Entiteitsnaam | Naam van de thermostaat |

## Gebruik

### Temperatuur instellen

Er zijn drie manieren om de doeltemperatuur in te stellen:

1. **Slepen op de balk**: Klik of raak de gekleurde balk aan en sleep. De witte cirkel volgt je vinger en toont de temperatuur.
2. **Plus/Min knoppen**: Gebruik de + en - knoppen voor nauwkeurige aanpassingen.
3. **Direct klikken**: Klik of raak een punt op de balk aan om direct die temperatuur in te stellen.

### Preset modes

- **Eco**: Energiebesparende modus
- **Thuis**: Comfort modus voor thuisgebruik

Klik op de knoppen bovenaan de kaart om tussen modes te schakelen.

### Visuele indicatoren

- **Witte lijn**: Toont de huidige temperatuur
- **Witte cirkel**: Toont de doeltemperatuur
- **Kleurverloop**: Van blauw (koud) via groen naar rood (warm)

## Compatibiliteit

Deze kaart werkt met alle climate entiteiten die de volgende attributen ondersteunen:

- `current_temperature` - Huidige temperatuur
- `temperature` - Doeltemperatuur
- `min_temp` - Minimale temperatuur
- `max_temp` - Maximale temperatuur
- `target_temp_step` - Temperatuurstap (optioneel, standaard 0.5)
- `preset_mode` - Huidige preset mode (optioneel)

Compatible thermostaten:
- Generic Thermostat
- Netatmo
- Nest
- Tado
- Honeywell
- En vele anderen

## Ontwikkeling

### Lokaal testen

1. Clone de repository
2. Kopieer `innodigi-thermostat-card.js` naar je Home Assistant `/config/www/` directory
3. Voeg de resource toe aan je Lovelace configuratie
4. Herlaad de frontend (Developer Tools > YAML > Frontend herladen)

### Aanpassingen

De kaart is gebouwd met vanilla JavaScript en gebruikt Home Assistant's design tokens voor consistente styling. Je kunt de kleuren en afmetingen aanpassen in de `<style>` sectie van het bestand.

## Troubleshooting

### De kaart wordt niet geladen

1. Controleer of het bestand correct is geplaatst in `/config/www/`
2. Controleer of de resource is toegevoegd aan de configuratie
3. Herlaad de frontend of herstart Home Assistant
4. Controleer de browser console voor foutmeldingen (F12)

### De slider reageert niet

1. Controleer of je thermostaat entity correct is geconfigureerd
2. Controleer of de entity de juiste attributen heeft (`min_temp`, `max_temp`)
3. Controleer de browser console voor JavaScript fouten

### Preset modes werken niet

Niet alle thermostaten ondersteunen preset modes. Controleer of je thermostaat de `preset_mode` service ondersteunt:

1. Ga naar Developer Tools > Services
2. Zoek naar `climate.set_preset_mode`
3. Controleer welke preset modes beschikbaar zijn voor je entiteit

## Licentie

MIT License - Zie LICENSE bestand voor details

## Credits

Ontwikkeld door Elco voor gebruik met Innodigi thermostaten en compatibele systemen.

## Support

Voor vragen, bugs of feature requests, open een issue op GitHub:
https://github.com/elco/homeassistant-innodigi-thermostat/issues

