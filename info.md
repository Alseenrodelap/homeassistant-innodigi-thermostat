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

🎛️ **Visuele editor**
- Eenvoudig configureren via de UI
- Entity picker voor climate entiteiten
- Geen YAML kennis nodig

🎨 **Moderne styling**
- Gebruikt Home Assistant design tokens
- Vloeiende animaties
- Responsive ontwerp

## Installatie

1. Download het bestand via HACS of handmatig
2. Voeg de resource toe aan je Lovelace configuratie
3. Herstart Home Assistant
4. Voeg de kaart toe aan je dashboard

## Gebruik

### Via de Visuele Editor (Aanbevolen)
1. Dashboard bewerken
2. Voeg kaart toe
3. Selecteer "Custom: Innodigi Thermostaat Kaart"
4. Kies je thermostaat entity
5. Voeg optioneel een naam toe
6. Opslaan

### Via YAML (Optioneel)
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

## ☕ Doneren

Vind je deze custom card nuttig? Overweeg een donatie om de ontwikkeling te ondersteunen!

[![Donate with PayPal](https://www.paypalobjects.com/nl_NL/NL/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?hosted_button_id=KYWBUB3324S9G)

Elke bijdrage wordt gewaardeerd en helpt om de kaart te blijven verbeteren en onderhouden. Dank je wel! 🙏

