# Innodigi Thermostaat Kaart

Een moderne thermostaat kaart voor Home Assistant met een intuïtieve horizontale slider interface, speciaal ontworpen voor touch screens.

## Features

✨ **Moderne UI met horizontale slider**
- Touch-vriendelijke balk in plaats van circulaire interface
- Gradient kleurverloop van blauw naar rood
- Grote temperatuurweergave tijdens het slepen

🌡️ **Volledige temperatuurcontrole**
- Weergave van huidige en doeltemperatuur
- Plus en min knoppen voor nauwkeurige aanpassingen
- Sleep functionaliteit voor snelle aanpassingen

🏠 **Preset modes**
- Eco modus voor energiebesparing
- Thuis modus voor comfort
- Visuele indicatie van actieve modus

🎨 **Moderne styling**
- Gebruikt Home Assistant design tokens
- Vloeiende animaties
- Responsive ontwerp

## Installatie

1. Download het bestand via HACS of handmatig
2. Voeg de resource toe aan je Lovelace configuratie
3. Herstart Home Assistant
4. Voeg de kaart toe aan je dashboard

## Basis configuratie

```yaml
type: custom:innodigi-thermostat-card
entity: climate.woonkamer
```

## Compatibiliteit

Werkt met alle generieke thermostaat entiteiten in Home Assistant, waaronder:
- Generic Thermostat
- Netatmo
- Nest
- Tado
- Honeywell
- En vele anderen

