// Translations for internationalization
const TRANSLATIONS = {
  en: {
    // Temperature labels
    outdoor: 'Outdoor',
    current: 'Current',
    target: 'Target',
    outdoor_compact: 'outdoor',
    // Editor - Basic settings
    section_basic: 'Basic Settings',
    entity_label: 'Thermostat Entity',
    entity_placeholder: '-- Select a thermostat --',
    name_label: 'Name (optional)',
    name_description: 'Override the default entity name',
    layout_label: 'Layout',
    layout_normal: 'Normal',
    layout_compact: 'Compact',
    layout_description: 'Normal: full card with title and mode buttons. Compact: smaller card without title.',
    // Editor - Outdoor temperature
    section_outdoor: 'Outdoor Temperature',
    outdoor_entity_label: 'Outdoor Temperature Entity',
    outdoor_entity_placeholder: '-- No outdoor temperature --',
    outdoor_entity_description: 'Optional: sensor or weather entity for outdoor temperature',
    outdoor_display_mode_label: 'Display Mode',
    outdoor_display_auto: 'Auto (responsive)',
    outdoor_display_inline: 'Always inline',
    outdoor_display_compact: 'Always compact',
    outdoor_display_description: 'Auto: inline on wide screens, compact on narrow. Compact: always small top-left. Inline: always as third card.',
    // Editor - Temperatures
    section_temperatures: 'Temperature Settings',
    eco_temp_label: 'Eco Temperature (°C)',
    eco_temp_description: 'Target temperature for Eco mode',
    home_temp_label: 'Home Temperature (°C)',
    home_temp_description: 'Target temperature for Home mode',
    eco_label: 'Eco Button Label (optional)',
    eco_label_description: 'Custom name for the Eco button (default: "Eco")',
    home_label: 'Home Button Label (optional)',
    home_label_description: 'Custom name for the Home button (default: "Home")',
    // Editor - Slider colors
    section_slider_colors: 'Slider Colors',
    color_cold_label: 'Cold Color',
    color_cold_description: 'Color at minimum temperature (left side)',
    color_medium_label: 'Medium Color',
    color_medium_description: 'Color at middle temperature',
    color_hot_label: 'Hot Color',
    color_hot_description: 'Color at maximum temperature (right side)',
    // Editor - Button colors
    section_button_colors: 'Button Colors',
    color_buttons_label: 'Plus/Minus Buttons Color',
    color_buttons_description: 'Color of the temperature adjustment buttons',
    color_mode_buttons_label: 'Eco/Home Buttons Color',
    color_mode_buttons_description: 'Color of the mode selection buttons',
    // Editor - Temperature colors
    section_temp_colors: 'Temperature Display Colors',
    color_current_temp_label: 'Current Temperature Color',
    color_current_temp_description: 'Color of the current temperature display',
    color_target_temp_label: 'Target Temperature Color',
    color_target_temp_description: 'Color of the target temperature display',
    color_outdoor_temp_label: 'Outdoor Temperature Color',
    color_outdoor_temp_description: 'Color of the outdoor temperature display',
    // Editor - Temperature cards
    section_temp_cards: 'Temperature Cards',
    show_temp_cards_label: 'Show temperatures in cards',
    show_temp_cards_description: 'Gives each temperature its own background color with rounded corners and border',
    temp_card_bg_label: 'Background Color',
    temp_card_bg_description: 'Base color of the background',
    temp_card_bg_alpha_label: 'Background Transparency (%)',
    temp_card_bg_alpha_description: '0% = fully transparent, 100% = fully opaque',
    temp_card_border_color_label: 'Border Color',
    temp_card_border_color_description: 'Color of the border around the cards',
    temp_card_border_alpha_label: 'Border Transparency (%)',
    temp_card_border_alpha_description: '0% = fully transparent, 100% = fully opaque',
    temp_card_border_width_label: 'Border Width (pixels)',
    temp_card_border_width_description: 'Thickness of the border (0 = no border, 1-5 pixels)',
    // Editor - Tap actions
    section_tap_actions: 'Temperature Tap Actions',
    tap_action_none: 'No action',
    tap_action_more_info: 'Show entity info',
    tap_action_toggle: 'Toggle on/off',
    temp_current_tap_label: 'Action on Current Temperature Click',
    temp_current_tap_description: 'What happens when you click on the current temperature',
    temp_target_tap_label: 'Action on Target Temperature Click',
    temp_target_tap_description: 'What happens when you click on the target temperature',
    temp_outdoor_tap_label: 'Action on Outdoor Temperature Click',
    temp_outdoor_tap_description: 'What happens when you click on the outdoor temperature'
  },
  nl: {
    // Temperature labels
    outdoor: 'Buiten',
    current: 'Huidig',
    target: 'Doel',
    outdoor_compact: 'buiten',
    // Editor - Basic settings
    section_basic: 'Basis Instellingen',
    entity_label: 'Thermostaat Entiteit',
    entity_placeholder: '-- Selecteer een thermostaat --',
    name_label: 'Naam (optioneel)',
    name_description: 'Overschrijf de standaard entiteitnaam',
    layout_label: 'Layout',
    layout_normal: 'Normaal',
    layout_compact: 'Compact',
    layout_description: 'Normaal: volledige kaart met titel en mode knoppen. Compact: kleinere kaart zonder titel.',
    // Editor - Outdoor temperature
    section_outdoor: 'Buitentemperatuur',
    outdoor_entity_label: 'Buitentemperatuur Entiteit',
    outdoor_entity_placeholder: '-- Geen buitentemperatuur --',
    outdoor_entity_description: 'Optioneel: sensor of weer entiteit voor buitentemperatuur',
    outdoor_display_mode_label: 'Weergave Modus',
    outdoor_display_auto: 'Auto (responsive)',
    outdoor_display_inline: 'Altijd inline',
    outdoor_display_compact: 'Altijd compact',
    outdoor_display_description: 'Auto: inline op brede schermen, compact op smalle. Compact: altijd klein linksboven. Inline: altijd als derde kaartje.',
    // Editor - Temperatures
    section_temperatures: 'Temperatuur Instellingen',
    eco_temp_label: 'Eco Temperatuur (°C)',
    eco_temp_description: 'Doeltemperatuur voor Eco modus',
    home_temp_label: 'Thuis Temperatuur (°C)',
    home_temp_description: 'Doeltemperatuur voor Thuis modus',
    eco_label: 'Eco Knop Label (optioneel)',
    eco_label_description: 'Aangepaste naam voor de Eco knop (standaard: "Eco")',
    home_label: 'Thuis Knop Label (optioneel)',
    home_label_description: 'Aangepaste naam voor de Thuis knop (standaard: "Thuis")',
    // Editor - Slider colors
    section_slider_colors: 'Slider Kleuren',
    color_cold_label: 'Koude Kleur',
    color_cold_description: 'Kleur bij minimum temperatuur (linker kant)',
    color_medium_label: 'Middel Kleur',
    color_medium_description: 'Kleur bij midden temperatuur',
    color_hot_label: 'Warme Kleur',
    color_hot_description: 'Kleur bij maximum temperatuur (rechter kant)',
    // Editor - Button colors
    section_button_colors: 'Knop Kleuren',
    color_buttons_label: 'Plus/Min Knoppen Kleur',
    color_buttons_description: 'Kleur van de temperatuur aanpas knoppen',
    color_mode_buttons_label: 'Eco/Thuis Knoppen Kleur',
    color_mode_buttons_description: 'Kleur van de modus selectie knoppen',
    // Editor - Temperature colors
    section_temp_colors: 'Temperatuur Weergave Kleuren',
    color_current_temp_label: 'Huidige Temperatuur Kleur',
    color_current_temp_description: 'Kleur van de huidige temperatuur weergave',
    color_target_temp_label: 'Doel Temperatuur Kleur',
    color_target_temp_description: 'Kleur van de doel temperatuur weergave',
    color_outdoor_temp_label: 'Buiten Temperatuur Kleur',
    color_outdoor_temp_description: 'Kleur van de buiten temperatuur weergave',
    // Editor - Temperature cards
    section_temp_cards: 'Temperatuur Kaartjes',
    show_temp_cards_label: 'Toon temperaturen in kaartjes',
    show_temp_cards_description: 'Geeft elke temperatuur een eigen achtergrondkleur met afgeronde hoeken en border',
    temp_card_bg_label: 'Achtergrondkleur',
    temp_card_bg_description: 'Basiskleur van de achtergrond',
    temp_card_bg_alpha_label: 'Achtergrond Transparantie (%)',
    temp_card_bg_alpha_description: '0% = volledig transparant, 100% = volledig ondoorzichtig',
    temp_card_border_color_label: 'Border Kleur',
    temp_card_border_color_description: 'Kleur van de rand rond de kaartjes',
    temp_card_border_alpha_label: 'Border Transparantie (%)',
    temp_card_border_alpha_description: '0% = volledig transparant, 100% = volledig ondoorzichtig',
    temp_card_border_width_label: 'Border Breedte (pixels)',
    temp_card_border_width_description: 'Dikte van de border (0 = geen border, 1-5 pixels)',
    // Editor - Tap actions
    section_tap_actions: 'Temperatuur Klik Acties',
    tap_action_none: 'Geen actie',
    tap_action_more_info: 'Toon entiteit info',
    tap_action_toggle: 'Schakel aan/uit',
    temp_current_tap_label: 'Actie bij klik op Huidige Temperatuur',
    temp_current_tap_description: 'Wat gebeurt er als je op de huidige temperatuur klikt',
    temp_target_tap_label: 'Actie bij klik op Doel Temperatuur',
    temp_target_tap_description: 'Wat gebeurt er als je op de doel temperatuur klikt',
    temp_outdoor_tap_label: 'Actie bij klik op Buiten Temperatuur',
    temp_outdoor_tap_description: 'Wat gebeurt er als je op de buiten temperatuur klikt'
  },
  de: {
    // Temperature labels
    outdoor: 'Außen',
    current: 'Aktuell',
    target: 'Ziel',
    outdoor_compact: 'außen',
    // Editor - Basic settings
    section_basic: 'Grundeinstellungen',
    entity_label: 'Thermostat Entität',
    entity_placeholder: '-- Thermostat auswählen --',
    name_label: 'Name (optional)',
    name_description: 'Standard Entitätsname überschreiben',
    layout_label: 'Layout',
    layout_normal: 'Normal',
    layout_compact: 'Kompakt',
    layout_description: 'Normal: vollständige Karte mit Titel und Modus-Schaltflächen. Kompakt: kleinere Karte ohne Titel.',
    // Editor - Outdoor temperature
    section_outdoor: 'Außentemperatur',
    outdoor_entity_label: 'Außentemperatur Entität',
    outdoor_entity_placeholder: '-- Keine Außentemperatur --',
    outdoor_entity_description: 'Optional: Sensor oder Wetter-Entität für Außentemperatur',
    outdoor_display_mode_label: 'Anzeigemodus',
    outdoor_display_auto: 'Auto (responsiv)',
    outdoor_display_inline: 'Immer inline',
    outdoor_display_compact: 'Immer kompakt',
    outdoor_display_description: 'Auto: inline auf breiten Bildschirmen, kompakt auf schmalen. Kompakt: immer klein oben links. Inline: immer als dritte Karte.',
    // Editor - Temperatures
    section_temperatures: 'Temperatureinstellungen',
    eco_temp_label: 'Eco Temperatur (°C)',
    eco_temp_description: 'Zieltemperatur für Eco-Modus',
    home_temp_label: 'Heimtemperatur (°C)',
    home_temp_description: 'Zieltemperatur für Heim-Modus',
    eco_label: 'Eco Taste Beschriftung (optional)',
    eco_label_description: 'Benutzerdefinierter Name für die Eco-Taste (Standard: "Eco")',
    home_label: 'Heim Taste Beschriftung (optional)',
    home_label_description: 'Benutzerdefinierter Name für die Heim-Taste (Standard: "Heim")',
    // Editor - Slider colors
    section_slider_colors: 'Schieberegler Farben',
    color_cold_label: 'Kalte Farbe',
    color_cold_description: 'Farbe bei Mindesttemperatur (linke Seite)',
    color_medium_label: 'Mittlere Farbe',
    color_medium_description: 'Farbe bei mittlerer Temperatur',
    color_hot_label: 'Heiße Farbe',
    color_hot_description: 'Farbe bei Maximaltemperatur (rechte Seite)',
    // Editor - Button colors
    section_button_colors: 'Schaltflächen Farben',
    color_buttons_label: 'Plus/Minus Schaltflächen Farbe',
    color_buttons_description: 'Farbe der Temperaturanpassungsschaltflächen',
    color_mode_buttons_label: 'Eco/Heim Schaltflächen Farbe',
    color_mode_buttons_description: 'Farbe der Modusauswahlschaltflächen',
    // Editor - Temperature colors
    section_temp_colors: 'Temperaturanzeige Farben',
    color_current_temp_label: 'Aktuelle Temperatur Farbe',
    color_current_temp_description: 'Farbe der aktuellen Temperaturanzeige',
    color_target_temp_label: 'Zieltemperatur Farbe',
    color_target_temp_description: 'Farbe der Zieltemperaturanzeige',
    color_outdoor_temp_label: 'Außentemperatur Farbe',
    color_outdoor_temp_description: 'Farbe der Außentemperaturanzeige',
    // Editor - Temperature cards
    section_temp_cards: 'Temperaturkarten',
    show_temp_cards_label: 'Temperaturen in Karten anzeigen',
    show_temp_cards_description: 'Gibt jeder Temperatur eine eigene Hintergrundfarbe mit abgerundeten Ecken und Rand',
    temp_card_bg_label: 'Hintergrundfarbe',
    temp_card_bg_description: 'Basisfarbe des Hintergrunds',
    temp_card_bg_alpha_label: 'Hintergrund Transparenz (%)',
    temp_card_bg_alpha_description: '0% = vollständig transparent, 100% = vollständig undurchsichtig',
    temp_card_border_color_label: 'Randfarbe',
    temp_card_border_color_description: 'Farbe des Randes um die Karten',
    temp_card_border_alpha_label: 'Rand Transparenz (%)',
    temp_card_border_alpha_description: '0% = vollständig transparent, 100% = vollständig undurchsichtig',
    temp_card_border_width_label: 'Randbreite (Pixel)',
    temp_card_border_width_description: 'Dicke des Randes (0 = kein Rand, 1-5 Pixel)',
    // Editor - Tap actions
    section_tap_actions: 'Temperatur Klick-Aktionen',
    tap_action_none: 'Keine Aktion',
    tap_action_more_info: 'Entitätsinformationen anzeigen',
    tap_action_toggle: 'Ein-/Ausschalten',
    temp_current_tap_label: 'Aktion bei Klick auf aktuelle Temperatur',
    temp_current_tap_description: 'Was passiert beim Klicken auf die aktuelle Temperatur',
    temp_target_tap_label: 'Aktion bei Klick auf Zieltemperatur',
    temp_target_tap_description: 'Was passiert beim Klicken auf die Zieltemperatur',
    temp_outdoor_tap_label: 'Aktion bei Klick auf Außentemperatur',
    temp_outdoor_tap_description: 'Was passiert beim Klicken auf die Außentemperatur'
  },
  fr: {
    // Temperature labels
    outdoor: 'Extérieur',
    current: 'Actuel',
    target: 'Cible',
    outdoor_compact: 'extérieur',
    // Editor - Basic settings
    section_basic: 'Paramètres de base',
    entity_label: 'Entité du thermostat',
    entity_placeholder: '-- Sélectionner un thermostat --',
    name_label: 'Nom (optionnel)',
    name_description: "Remplacer le nom d'entité par défaut",
    layout_label: 'Disposition',
    layout_normal: 'Normal',
    layout_compact: 'Compact',
    layout_description: 'Normal: carte complète avec titre et boutons de mode. Compact: carte plus petite sans titre.',
    // Editor - Outdoor temperature
    section_outdoor: 'Température extérieure',
    outdoor_entity_label: 'Entité de température extérieure',
    outdoor_entity_placeholder: '-- Pas de température extérieure --',
    outdoor_entity_description: 'Optionnel: capteur ou entité météo pour la température extérieure',
    outdoor_display_mode_label: "Mode d'affichage",
    outdoor_display_auto: 'Auto (responsive)',
    outdoor_display_inline: 'Toujours en ligne',
    outdoor_display_compact: 'Toujours compact',
    outdoor_display_description: 'Auto: en ligne sur grands écrans, compact sur petits. Compact: toujours petit en haut à gauche. En ligne: toujours comme troisième carte.',
    // Editor - Temperatures
    section_temperatures: 'Paramètres de température',
    eco_temp_label: 'Température Éco (°C)',
    eco_temp_description: 'Température cible pour le mode Éco',
    home_temp_label: 'Température Maison (°C)',
    home_temp_description: 'Température cible pour le mode Maison',
    eco_label: 'Libellé bouton Éco (facultatif)',
    eco_label_description: 'Nom personnalisé pour le bouton Éco (par défaut: "Éco")',
    home_label: 'Libellé bouton Maison (facultatif)',
    home_label_description: 'Nom personnalisé pour le bouton Maison (par défaut: "Maison")',
    // Editor - Slider colors
    section_slider_colors: 'Couleurs du curseur',
    color_cold_label: 'Couleur froide',
    color_cold_description: 'Couleur à température minimale (côté gauche)',
    color_medium_label: 'Couleur moyenne',
    color_medium_description: 'Couleur à température moyenne',
    color_hot_label: 'Couleur chaude',
    color_hot_description: 'Couleur à température maximale (côté droit)',
    // Editor - Button colors
    section_button_colors: 'Couleurs des boutons',
    color_buttons_label: 'Couleur des boutons Plus/Moins',
    color_buttons_description: "Couleur des boutons d'ajustement de température",
    color_mode_buttons_label: 'Couleur des boutons Éco/Maison',
    color_mode_buttons_description: 'Couleur des boutons de sélection du mode',
    // Editor - Temperature colors
    section_temp_colors: "Couleurs d'affichage de la température",
    color_current_temp_label: 'Couleur température actuelle',
    color_current_temp_description: "Couleur de l'affichage de la température actuelle",
    color_target_temp_label: 'Couleur température cible',
    color_target_temp_description: "Couleur de l'affichage de la température cible",
    color_outdoor_temp_label: 'Couleur température extérieure',
    color_outdoor_temp_description: "Couleur de l'affichage de la température extérieure",
    // Editor - Temperature cards
    section_temp_cards: 'Cartes de température',
    show_temp_cards_label: 'Afficher les températures dans des cartes',
    show_temp_cards_description: 'Donne à chaque température sa propre couleur de fond avec des coins arrondis et une bordure',
    temp_card_bg_label: 'Couleur de fond',
    temp_card_bg_description: 'Couleur de base du fond',
    temp_card_bg_alpha_label: 'Transparence du fond (%)',
    temp_card_bg_alpha_description: '0% = entièrement transparent, 100% = entièrement opaque',
    temp_card_border_color_label: 'Couleur de la bordure',
    temp_card_border_color_description: 'Couleur de la bordure autour des cartes',
    temp_card_border_alpha_label: 'Transparence de la bordure (%)',
    temp_card_border_alpha_description: '0% = entièrement transparent, 100% = entièrement opaque',
    temp_card_border_width_label: 'Largeur de la bordure (pixels)',
    temp_card_border_width_description: '0 = pas de bordure, 1-5 pixels',
    // Editor - Tap actions
    section_tap_actions: 'Actions de clic sur température',
    tap_action_none: 'Aucune action',
    tap_action_more_info: "Afficher les infos de l'entité",
    tap_action_toggle: 'Activer/Désactiver',
    temp_current_tap_label: 'Action au clic sur température actuelle',
    temp_current_tap_description: 'Ce qui se passe lorsque vous cliquez sur la température actuelle',
    temp_target_tap_label: 'Action au clic sur température cible',
    temp_target_tap_description: 'Ce qui se passe lorsque vous cliquez sur la température cible',
    temp_outdoor_tap_label: 'Action au clic sur température extérieure',
    temp_outdoor_tap_description: 'Ce qui se passe lorsque vous cliquez sur la température extérieure'
  },
  it: {
    // Temperature labels
    outdoor: 'Esterno',
    current: 'Attuale',
    target: 'Obiettivo',
    outdoor_compact: 'esterno',
    // Editor - Basic settings
    section_basic: 'Impostazioni di base',
    entity_label: 'Entità termostato',
    entity_placeholder: '-- Seleziona un termostato --',
    name_label: 'Nome (opzionale)',
    name_description: 'Sostituisci il nome predefinito dell\'entità',
    layout_label: 'Layout',
    layout_normal: 'Normale',
    layout_compact: 'Compatto',
    layout_description: 'Normale: scheda completa con titolo e pulsanti modalità. Compatto: scheda più piccola senza titolo.',
    // Editor - Outdoor temperature
    section_outdoor: 'Temperatura esterna',
    outdoor_entity_label: 'Entità temperatura esterna',
    outdoor_entity_placeholder: '-- Nessuna temperatura esterna --',
    outdoor_entity_description: 'Opzionale: sensore o entità meteo per la temperatura esterna',
    outdoor_display_mode_label: 'Modalità di visualizzazione',
    outdoor_display_auto: 'Auto (responsive)',
    outdoor_display_inline: 'Sempre in linea',
    outdoor_display_compact: 'Sempre compatto',
    outdoor_display_description: 'Auto: in linea su schermi larghi, compatto su schermi stretti. Compatto: sempre piccolo in alto a sinistra. In linea: sempre come terza scheda.',
    // Editor - Temperatures
    section_temperatures: 'Impostazioni temperatura',
    eco_temp_label: 'Temperatura Eco (°C)',
    eco_temp_description: 'Temperatura target per la modalità Eco',
    home_temp_label: 'Temperatura Casa (°C)',
    home_temp_description: 'Temperatura target per la modalità Casa',
    eco_label: 'Etichetta pulsante Eco (opzionale)',
    eco_label_description: 'Nome personalizzato per il pulsante Eco (predefinito: "Eco")',
    home_label: 'Etichetta pulsante Casa (opzionale)',
    home_label_description: 'Nome personalizzato per il pulsante Casa (predefinito: "Casa")',
    // Editor - Slider colors
    section_slider_colors: 'Colori cursore',
    color_cold_label: 'Colore freddo',
    color_cold_description: 'Colore alla temperatura minima (lato sinistro)',
    color_medium_label: 'Colore medio',
    color_medium_description: 'Colore alla temperatura media',
    color_hot_label: 'Colore caldo',
    color_hot_description: 'Colore alla temperatura massima (lato destro)',
    // Editor - Button colors
    section_button_colors: 'Colori pulsanti',
    color_buttons_label: 'Colore pulsanti Più/Meno',
    color_buttons_description: 'Colore dei pulsanti di regolazione temperatura',
    color_mode_buttons_label: 'Colore pulsanti Eco/Casa',
    color_mode_buttons_description: 'Colore dei pulsanti di selezione modalità',
    // Editor - Temperature colors
    section_temp_colors: 'Colori display temperatura',
    color_current_temp_label: 'Colore temperatura attuale',
    color_current_temp_description: 'Colore del display della temperatura attuale',
    color_target_temp_label: 'Colore temperatura obiettivo',
    color_target_temp_description: 'Colore del display della temperatura obiettivo',
    color_outdoor_temp_label: 'Colore temperatura esterna',
    color_outdoor_temp_description: 'Colore del display della temperatura esterna',
    // Editor - Temperature cards
    section_temp_cards: 'Schede temperatura',
    show_temp_cards_label: 'Mostra temperature nelle schede',
    show_temp_cards_description: 'Assegna a ogni temperatura il proprio colore di sfondo con angoli arrotondati e bordo',
    temp_card_bg_label: 'Colore di sfondo',
    temp_card_bg_description: 'Colore base dello sfondo',
    temp_card_bg_alpha_label: 'Trasparenza sfondo (%)',
    temp_card_bg_alpha_description: '0% = completamente trasparente, 100% = completamente opaco',
    temp_card_border_color_label: 'Colore bordo',
    temp_card_border_color_description: 'Colore del bordo intorno alle schede',
    temp_card_border_alpha_label: 'Trasparenza bordo (%)',
    temp_card_border_alpha_description: '0% = completamente trasparente, 100% = completamente opaco',
    temp_card_border_width_label: 'Larghezza bordo (pixel)',
    temp_card_border_width_description: 'Spessore del bordo (0 = nessun bordo, 1-5 pixel)',
    // Editor - Tap actions
    section_tap_actions: 'Azioni tocco temperatura',
    tap_action_none: 'Nessuna azione',
    tap_action_more_info: 'Mostra informazioni entità',
    tap_action_toggle: 'Attiva/Disattiva',
    temp_current_tap_label: 'Azione al tocco su temperatura attuale',
    temp_current_tap_description: 'Cosa succede quando tocchi la temperatura attuale',
    temp_target_tap_label: 'Azione al tocco su temperatura obiettivo',
    temp_target_tap_description: 'Cosa succede quando tocchi la temperatura obiettivo',
    temp_outdoor_tap_label: 'Azione al tocco su temperatura esterna',
    temp_outdoor_tap_description: 'Cosa succede quando tocchi la temperatura esterna'
  },
  es: {
    // Temperature labels
    outdoor: 'Exterior',
    current: 'Actual',
    target: 'Objetivo',
    outdoor_compact: 'exterior',
    // Editor - Basic settings
    section_basic: 'Configuración básica',
    entity_label: 'Entidad del termostato',
    entity_placeholder: '-- Seleccionar un termostato --',
    name_label: 'Nombre (opcional)',
    name_description: 'Reemplazar el nombre predeterminado de la entidad',
    layout_label: 'Diseño',
    layout_normal: 'Normal',
    layout_compact: 'Compacto',
    layout_description: 'Normal: tarjeta completa con título y botones de modo. Compacto: tarjeta más pequeña sin título.',
    // Editor - Outdoor temperature
    section_outdoor: 'Temperatura exterior',
    outdoor_entity_label: 'Entidad de temperatura exterior',
    outdoor_entity_placeholder: '-- Sin temperatura exterior --',
    outdoor_entity_description: 'Opcional: sensor o entidad meteorológica para la temperatura exterior',
    outdoor_display_mode_label: 'Modo de visualización',
    outdoor_display_auto: 'Auto (adaptable)',
    outdoor_display_inline: 'Siempre en línea',
    outdoor_display_compact: 'Siempre compacto',
    outdoor_display_description: 'Auto: en línea en pantallas anchas, compacto en estrechas. Compacto: siempre pequeño arriba a la izquierda. En línea: siempre como tercera tarjeta.',
    // Editor - Temperatures
    section_temperatures: 'Configuración de temperatura',
    eco_temp_label: 'Temperatura Eco (°C)',
    eco_temp_description: 'Temperatura objetivo para el modo Eco',
    home_temp_label: 'Temperatura Casa (°C)',
    home_temp_description: 'Temperatura objetivo para el modo Casa',
    eco_label: 'Etiqueta botón Eco (opcional)',
    eco_label_description: 'Nombre personalizado para el botón Eco (predeterminado: "Eco")',
    home_label: 'Etiqueta botón Casa (opcional)',
    home_label_description: 'Nombre personalizado para el botón Casa (predeterminado: "Casa")',
    // Editor - Slider colors
    section_slider_colors: 'Colores del deslizador',
    color_cold_label: 'Color frío',
    color_cold_description: 'Color a temperatura mínima (lado izquierdo)',
    color_medium_label: 'Color medio',
    color_medium_description: 'Color a temperatura media',
    color_hot_label: 'Color caliente',
    color_hot_description: 'Color a temperatura máxima (lado derecho)',
    // Editor - Button colors
    section_button_colors: 'Colores de botones',
    color_buttons_label: 'Color botones Más/Menos',
    color_buttons_description: 'Color de los botones de ajuste de temperatura',
    color_mode_buttons_label: 'Color botones Eco/Casa',
    color_mode_buttons_description: 'Color de los botones de selección de modo',
    // Editor - Temperature colors
    section_temp_colors: 'Colores de visualización de temperatura',
    color_current_temp_label: 'Color temperatura actual',
    color_current_temp_description: 'Color de la visualización de temperatura actual',
    color_target_temp_label: 'Color temperatura objetivo',
    color_target_temp_description: 'Color de la visualización de temperatura objetivo',
    color_outdoor_temp_label: 'Color temperatura exterior',
    color_outdoor_temp_description: 'Color de la visualización de temperatura exterior',
    // Editor - Temperature cards
    section_temp_cards: 'Tarjetas de temperatura',
    show_temp_cards_label: 'Mostrar temperaturas en tarjetas',
    show_temp_cards_description: 'Asigna a cada temperatura su propio color de fondo con esquinas redondeadas y borde',
    temp_card_bg_label: 'Color de fondo',
    temp_card_bg_description: 'Color base del fondo',
    temp_card_bg_alpha_label: 'Transparencia del fondo (%)',
    temp_card_bg_alpha_description: '0% = completamente transparente, 100% = completamente opaco',
    temp_card_border_color_label: 'Color del borde',
    temp_card_border_color_description: 'Color del borde alrededor de las tarjetas',
    temp_card_border_alpha_label: 'Transparencia del borde (%)',
    temp_card_border_alpha_description: '0% = completamente transparente, 100% = completamente opaco',
    temp_card_border_width_label: 'Ancho del borde (píxeles)',
    temp_card_border_width_description: 'Grosor del borde (0 = sin borde, 1-5 píxeles)',
    // Editor - Tap actions
    section_tap_actions: 'Acciones de toque en temperatura',
    tap_action_none: 'Sin acción',
    tap_action_more_info: 'Mostrar información de entidad',
    tap_action_toggle: 'Activar/Desactivar',
    temp_current_tap_label: 'Acción al tocar temperatura actual',
    temp_current_tap_description: 'Qué sucede cuando tocas la temperatura actual',
    temp_target_tap_label: 'Acción al tocar temperatura objetivo',
    temp_target_tap_description: 'Qué sucede cuando tocas la temperatura objetivo',
    temp_outdoor_tap_label: 'Acción al tocar temperatura exterior',
    temp_outdoor_tap_description: 'Qué sucede cuando tocas la temperatura exterior'
  },
  uk: {
    // Temperature labels
    outdoor: 'Зовнішня',
    current: 'Поточна',
    target: 'Цільова',
    outdoor_compact: 'зовні',
    // Editor - Basic settings
    section_basic: 'Основні налаштування',
    entity_label: 'Об\'єкт термостата',
    entity_placeholder: '-- Виберіть термостат --',
    name_label: 'Назва (необов\'язково)',
    name_description: 'Замінити назву об\'єкта за замовчуванням',
    layout_label: 'Макет',
    layout_normal: 'Звичайний',
    layout_compact: 'Компактний',
    layout_description: 'Звичайний: повна картка з заголовком і кнопками режиму. Компактний: менша картка без заголовка.',
    // Editor - Outdoor temperature
    section_outdoor: 'Зовнішня температура',
    outdoor_entity_label: 'Об\'єкт зовнішньої температури',
    outdoor_entity_placeholder: '-- Без зовнішньої температури --',
    outdoor_entity_description: 'Необов\'язково: датчик або об\'єкт погоди для зовнішньої температури',
    outdoor_display_mode_label: 'Режим відображення',
    outdoor_display_auto: 'Авто (адаптивний)',
    outdoor_display_inline: 'Завжди в рядку',
    outdoor_display_compact: 'Завжди компактний',
    outdoor_display_description: 'Авто: в рядку на широких екранах, компактний на вузьких. Компактний: завжди маленький зверху зліва. В рядку: завжди як третя картка.',
    // Editor - Temperatures
    section_temperatures: 'Налаштування температури',
    eco_temp_label: 'Температура Еко (°C)',
    eco_temp_description: 'Цільова температура для режиму Еко',
    home_temp_label: 'Температура Дім (°C)',
    home_temp_description: 'Цільова температура для режиму Дім',
    eco_label: 'Назва кнопки Еко (необов\'язково)',
    eco_label_description: 'Власна назва для кнопки Еко (за замовчуванням: "Еко")',
    home_label: 'Назва кнопки Дім (необов\'язково)',
    home_label_description: 'Власна назва для кнопки Дім (за замовчуванням: "Дім")',
    // Editor - Slider colors
    section_slider_colors: 'Кольори повзунка',
    color_cold_label: 'Холодний колір',
    color_cold_description: 'Колір при мінімальній температурі (ліва сторона)',
    color_medium_label: 'Середній колір',
    color_medium_description: 'Колір при середній температурі',
    color_hot_label: 'Гарячий колір',
    color_hot_description: 'Колір при максимальній температурі (права сторона)',
    // Editor - Button colors
    section_button_colors: 'Кольори кнопок',
    color_buttons_label: 'Колір кнопок Плюс/Мінус',
    color_buttons_description: 'Колір кнопок регулювання температури',
    color_mode_buttons_label: 'Колір кнопок Еко/Дім',
    color_mode_buttons_description: 'Колір кнопок вибору режиму',
    // Editor - Temperature colors
    section_temp_colors: 'Кольори відображення температури',
    color_current_temp_label: 'Колір поточної температури',
    color_current_temp_description: 'Колір відображення поточної температури',
    color_target_temp_label: 'Колір цільової температури',
    color_target_temp_description: 'Колір відображення цільової температури',
    color_outdoor_temp_label: 'Колір зовнішньої температури',
    color_outdoor_temp_description: 'Колір відображення зовнішньої температури',
    // Editor - Temperature cards
    section_temp_cards: 'Картки температури',
    show_temp_cards_label: 'Показати температури в картках',
    show_temp_cards_description: 'Надає кожній температурі власний колір фону з закругленими кутами та рамкою',
    temp_card_bg_label: 'Колір фону',
    temp_card_bg_description: 'Базовий колір фону',
    temp_card_bg_alpha_label: 'Прозорість фону (%)',
    temp_card_bg_alpha_description: '0% = повністю прозорий, 100% = повністю непрозорий',
    temp_card_border_color_label: 'Колір рамки',
    temp_card_border_color_description: 'Колір рамки навколо карток',
    temp_card_border_alpha_label: 'Прозорість рамки (%)',
    temp_card_border_alpha_description: '0% = повністю прозорий, 100% = повністю непрозорий',
    temp_card_border_width_label: 'Ширина рамки (пікселі)',
    temp_card_border_width_description: 'Товщина рамки (0 = без рамки, 1-5 пікселів)',
    // Editor - Tap actions
    section_tap_actions: 'Дії натискання на температуру',
    tap_action_none: 'Без дії',
    tap_action_more_info: 'Показати інформацію об\'єкта',
    tap_action_toggle: 'Увімкнути/Вимкнути',
    temp_current_tap_label: 'Дія при натисканні на поточну температуру',
    temp_current_tap_description: 'Що відбувається при натисканні на поточну температуру',
    temp_target_tap_label: 'Дія при натисканні на цільову температуру',
    temp_target_tap_description: 'Що відбувається при натисканні на цільову температуру',
    temp_outdoor_tap_label: 'Дія при натисканні на зовнішню температуру',
    temp_outdoor_tap_description: 'Що відбувається при натисканні на зовнішню температуру'
  }
};

// Helper function to get translated text
function getTranslation(hass, key) {
  const lang = hass?.language || hass?.locale?.language || 'en';
  const translations = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  return translations[key] || TRANSLATIONS['en'][key] || key;
}

class InnodigiThermostatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._dragging = false;
    this._dragValue = null;
    this._interacting = false;
    this._interactionTimeout = null;
    this._localTargetTemp = null; // Local target temperature for instant UI updates
    this._syncTimeout = null; // Debounce timer for syncing to thermostat
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    if (!this._config) return;
    
    // Initialize local temp from entity if not set
    if (this._localTargetTemp === null && !this._interacting && !this._dragging) {
      const entity = hass.states[this._config.entity];
      if (entity) {
        this._localTargetTemp = parseFloat(entity.attributes.temperature) || 20;
      }
    }
    
    // Only re-render if entity state actually changed or first render
    if (!oldHass || !this._cardInitialized) {
      this.updateCard();
      this._cardInitialized = true;
    } else {
      // When not interacting, sync local temp from entity
      if (!this._interacting && !this._dragging) {
        const entity = hass.states[this._config.entity];
        if (entity) {
          const entityTemp = parseFloat(entity.attributes.temperature) || 20;
          if (this._localTargetTemp !== entityTemp) {
            this._localTargetTemp = entityTemp;
            this.updateValues();
          }
        }
      }
      // When dragging, still update UI (will use _dragValue via _getCurrentTargetTemp)
      else if (this._dragging) {
        this.updateValues();
      }
    }
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }
    const oldEntity = this._config ? this._config.entity : null;
    const configChanged = JSON.stringify(this._config) !== JSON.stringify(config);
    this._config = config;
    
    // Only re-render if this is first time or entity changed
    if (!this._cardInitialized || oldEntity !== config.entity) {
      this._cardInitialized = false;
      if (this._hass) {
        this.updateCard();
        this._cardInitialized = true;
      }
    } else if (this._hass && configChanged) {
      // Just update values for other config changes
      this.updateValues();
    }
  }

  _setLocalTemperature(temp) {
    // Update local state immediately for instant UI feedback
    this._localTargetTemp = temp;
    this._interacting = true;
    
    // Update UI immediately
    this.updateValues();
    
    // Clear existing sync timeout
    if (this._syncTimeout) {
      clearTimeout(this._syncTimeout);
    }
    
    // Debounced sync to thermostat (1 second after last change)
    this._syncTimeout = setTimeout(() => {
      this._syncToThermostat(temp);
      this._syncTimeout = null;
      
      // Allow external updates after sync
      setTimeout(() => {
        this._interacting = false;
      }, 500);
    }, 1000);
  }

  _syncToThermostat(temperature) {
    // Actually send the temperature to Home Assistant
    this._hass.callService('climate', 'set_temperature', {
      entity_id: this._config.entity,
      temperature: temperature
    });
  }

  _getCurrentTargetTemp() {
    // ALWAYS use local state - never entity directly
    // Priority: dragging > local temp
    if (this._dragging && this._dragValue !== null) {
      return this._dragValue;
    }
    
    // Always return local temp (initialized from entity, but independent)
    return this._localTargetTemp !== null ? this._localTargetTemp : 20;
  }

  getCardSize() {
    return 3;
  }

  static getConfigElement() {
    return document.createElement('innodigi-thermostat-card-editor');
  }

  static getStubConfig() {
    return {
      entity: '',
      name: '',
      layout: 'normal',
      outdoor_entity: '',
      outdoor_display_mode: 'auto',
      // Slider gradient colors
      color_cold: '#3498db',
      color_medium: '#2ecc71',
      color_hot: '#e74c3c',
      // Button colors
      color_buttons: '#3498db',
      color_mode_buttons: '#2ecc71',
      // Temperature colors
      color_current_temp: '#3498db',
      color_target_temp: '#2ecc71',
      color_outdoor_temp: '#95a5a6',
      // Temperature cards
      show_temperature_cards: false,
      temperature_card_background: '#1a1a1a',
      temperature_card_background_alpha: 80,
      temperature_card_border_color: '#3498db',
      temperature_card_border_alpha: 50,
      temperature_card_border_width: 1,
      // Temperature tap actions
      temp_current_tap_action: 'more-info',
      temp_target_tap_action: 'more-info',
      temp_outdoor_tap_action: 'more-info',
      eco_temperature: 18,
      home_temperature: 21,
      // Mode button labels
      eco_label: '',
      home_label: ''
    };
  }

  updateCard() {
    if (!this._hass || !this._config) return;

    const entityId = this._config.entity;
    const entity = this._hass.states[entityId];

    if (!entity) {
      this.shadowRoot.innerHTML = `
        <ha-card>
          <div style="padding: 16px; color: red;">
            Entity not found: ${entityId}
          </div>
        </ha-card>
      `;
      return;
    }

    const currentTemp = parseFloat(entity.attributes.current_temperature) || 0;
    const targetTemp = this._getCurrentTargetTemp();
    const minTemp = parseFloat(entity.attributes.min_temp) || 5;
    const maxTemp = parseFloat(entity.attributes.max_temp) || 35;
    // Force step to 0.5 for half-degree increments
    const step = 0.5;
    const unit = this._hass.config.unit_system.temperature;
    const presetMode = entity.attributes.preset_mode || 'none';
    const layout = this._config.layout || 'normal';
    const isCompact = layout === 'compact';
    
    // Outdoor temperature
    const outdoorEntityId = this._config.outdoor_entity;
    const outdoorEntity = outdoorEntityId ? this._hass.states[outdoorEntityId] : null;
    const outdoorTemp = outdoorEntity ? (parseFloat(outdoorEntity.state) || 0) : null;
    const hasOutdoor = outdoorTemp !== null;
    const outdoorDisplayMode = this._config.outdoor_display_mode || 'auto';
    
    // Colors with defaults
    const colorButtons = this._config.color_buttons || '#3498db';
    const colorModeButtons = this._config.color_mode_buttons || '#2ecc71';
    const colorCurrentTemp = this._config.color_current_temp || '#3498db';
    const colorTargetTemp = this._config.color_target_temp || '#2ecc71';
    const colorOutdoorTemp = this._config.color_outdoor_temp || '#95a5a6';
    
    // Temperature cards
    const showTempCards = this._config.show_temperature_cards || false;
    const tempCardBgColor = this._config.temperature_card_background || '#1a1a1a';
    const tempCardBgAlpha = this._config.temperature_card_background_alpha ?? 80;
    const tempCardBorderColor = this._config.temperature_card_border_color || '#3498db';
    const tempCardBorderAlpha = this._config.temperature_card_border_alpha ?? 50;
    const tempCardBorderWidth = this._config.temperature_card_border_width ?? 1;
    
    // Helper function to convert hex to rgba
    const hexToRgba = (hex, alpha) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
    };
    
    const tempCardBg = hexToRgba(tempCardBgColor, tempCardBgAlpha);
    const tempCardBorder = hexToRgba(tempCardBorderColor, tempCardBorderAlpha);

    this.shadowRoot.innerHTML = `
      <style>
        ha-card {
          padding: ${isCompact ? '6px' : '14px'};
          background: var(--ha-card-background, var(--card-background-color, white));
          border-radius: var(--ha-card-border-radius, 12px);
          box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0,0,0,0.1));
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: ${isCompact ? '6px' : '16px'};
          position: relative;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding-top: ${outdoorDisplayMode === 'compact' && hasOutdoor && !isCompact ? '20px' : '0'};
        }

        .title {
          font-size: 18px;
          font-weight: 500;
          color: var(--primary-text-color);
          flex-shrink: 0;
          margin-right: 12px;
        }

        .outdoor-compact {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 11px;
          font-weight: 300;
          color: ${colorOutdoorTemp};
          display: ${outdoorDisplayMode === 'compact' && hasOutdoor ? 'block' : 'none'};
          opacity: 0.8;
          z-index: 1;
          padding: 2px 6px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }

        ${outdoorDisplayMode === 'compact' && hasOutdoor ? `
        /* Hide inline outdoor when compact mode is forced */
        .temp-item.outdoor {
          display: none !important;
        }
        /* Adjust temperature display padding when outdoor temp is shown */
        ${isCompact ? `
        .temperature-display {
          margin-top: 20px;
        }
        ` : ''}
        /* Adjust title position when outdoor temp is shown in normal mode */
        ${!isCompact ? `
        .title {
          margin-left: 55px;
        }
        ` : ''}
        ` : ''}

        ${outdoorDisplayMode === 'inline' && hasOutdoor ? `
        /* Force inline display, hide compact */
        .outdoor-compact {
          display: none !important;
        }
        .temp-item.outdoor {
          display: flex !important;
        }
        ` : ''}

        /* Auto mode: Show compact outdoor temp on narrow screens when outdoor is enabled */
        ${outdoorDisplayMode === 'auto' ? `
        @media (max-width: 400px) {
          .outdoor-compact {
            display: ${hasOutdoor ? 'block' : 'none'} !important;
          }
          .temp-item.outdoor {
            display: none !important;
          }
          /* Adjust temperature display padding when outdoor temp is shown */
          ${hasOutdoor && isCompact ? `
          .temperature-display {
            margin-top: 20px;
          }
          ` : ''}
          /* Adjust title position when outdoor temp is shown in normal mode */
          ${hasOutdoor && !isCompact ? `
          .title {
            margin-left: 55px;
          }
          ` : ''}
        }
        ` : ''}

        .mode-buttons {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
          flex-wrap: nowrap;
        }

        .mode-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 20px;
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s;
          outline: none;
        }

        .mode-btn:hover {
          opacity: 0.8;
        }

        .mode-btn.active {
          background: ${colorModeButtons};
          color: white;
        }

        .temperature-display {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: ${isCompact ? '4px 0' : '10px 0'};
          ${showTempCards ? `gap: ${isCompact ? '8px' : '12px'};` : ''}
        }

        .temp-item {
          text-align: center;
          ${outdoorDisplayMode === 'compact' && hasOutdoor ? 'flex: 1;' : ''}
          ${showTempCards ? `
            background: ${tempCardBg};
            padding: ${isCompact ? '8px' : '12px'};
            border-radius: ${isCompact ? '8px' : '12px'};
            min-width: ${isCompact ? '70px' : '90px'};
            border: ${tempCardBorderWidth}px solid ${tempCardBorder};
          ` : ''}
        }

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

        .temp-label {
          font-size: ${isCompact ? '11px' : '12px'};
          color: var(--secondary-text-color);
          margin-bottom: ${isCompact ? '2px' : '4px'};
        }

        .temp-value {
          font-size: ${isCompact ? '24px' : '32px'};
          font-weight: 300;
          color: var(--primary-text-color);
        }

        .temp-value.outdoor {
          color: ${colorOutdoorTemp};
        }

        .temp-value.current {
          color: ${colorCurrentTemp};
        }

        .temp-value.target {
          color: ${colorTargetTemp};
        }

        .temp-unit {
          font-size: ${isCompact ? '16px' : '20px'};
          margin-left: 2px;
        }

        .slider-container {
          position: relative;
          padding: ${isCompact ? '12px 0' : '25px 0'};
          margin: ${isCompact ? '2px 0' : '8px 0'};
        }

        .slider-track {
          position: relative;
          height: ${isCompact ? '30px' : '60px'};
          background: linear-gradient(to right, 
            ${this._config.color_cold || '#3498db'} 0%, 
            ${this._config.color_medium || '#2ecc71'} 50%, 
            ${this._config.color_hot || '#e74c3c'} 100%);
          border-radius: ${isCompact ? '15px' : '30px'};
          cursor: pointer;
          overflow: visible;
        }

        .slider-marker {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: left 0.1s ease;
        }

        .slider-marker.current {
          width: ${isCompact ? '3px' : '4px'};
          height: ${isCompact ? '36px' : '70px'};
          background: rgba(255, 255, 255, 0.7);
          border: 2px solid var(--primary-text-color);
          border-radius: 2px;
          z-index: 1;
        }

        .slider-marker.target {
          width: ${isCompact ? '28px' : '40px'};
          height: ${isCompact ? '28px' : '40px'};
          background: white;
          border: 3px solid var(--primary-color);
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          z-index: 2;
          cursor: grab;
        }

        .slider-marker.target:active {
          cursor: grabbing;
        }

        .drag-value {
          position: absolute;
          top: ${isCompact ? '-40px' : '-50px'};
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-color);
          color: white;
          padding: ${isCompact ? '6px 12px' : '8px 16px'};
          border-radius: ${isCompact ? '6px' : '8px'};
          font-size: ${isCompact ? '18px' : '24px'};
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          z-index: 3;
        }

        .drag-value.visible {
          opacity: 1;
        }

        .controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: ${isCompact ? '6px' : '12px'};
          ${isCompact ? 'flex-wrap: wrap;' : ''}
        }

        .control-btn {
          width: ${isCompact ? '45px' : '53px'};
          height: ${isCompact ? '45px' : '53px'};
          border: none;
          border-radius: 50%;
          background: ${colorButtons};
          color: white;
          font-size: ${isCompact ? '25px' : '29px'};
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
        }

        .control-btn:hover {
          transform: scale(1.1);
        }

        .control-btn:active {
          transform: scale(0.95);
        }

        .target-display {
          font-size: 20px;
          font-weight: 500;
          color: var(--primary-text-color);
          min-width: 80px;
          text-align: center;
        }

        .mode-btn.compact {
          padding: 6px 12px;
          font-size: 12px;
        }
      </style>

      <ha-card>
        <div class="card-content">
          ${hasOutdoor ? `
          <div class="outdoor-compact">${outdoorTemp.toFixed(1)}${unit} ${getTranslation(this._hass, 'outdoor_compact')}</div>
          ` : ''}
          ${!isCompact ? `
          <div class="header">
            <div class="title">${this._config.name || entity.attributes.friendly_name || 'Thermostaat'}</div>
            <div class="mode-buttons">
              <button class="mode-btn ${presetMode === 'eco' ? 'active' : ''}" data-mode="eco">
                ${this._config.eco_label || 'Eco'}
              </button>
              <button class="mode-btn ${presetMode === 'home' || presetMode === 'comfort' ? 'active' : ''}" data-mode="home">
                ${this._config.home_label || 'Home'}
              </button>
            </div>
          </div>
          ` : ''}

          <div class="temperature-display">
            ${hasOutdoor && outdoorDisplayMode !== 'compact' ? `
            <div class="temp-item ${this._config.temp_outdoor_tap_action !== 'none' ? 'clickable' : ''}" data-temp-type="outdoor">
              <div class="temp-label">${getTranslation(this._hass, 'outdoor')}</div>
              <div class="temp-value outdoor">
                ${outdoorTemp.toFixed(1)}<span class="temp-unit">${unit}</span>
              </div>
            </div>
            ` : ''}
            <div class="temp-item ${this._config.temp_current_tap_action !== 'none' ? 'clickable' : ''}" data-temp-type="current">
              <div class="temp-label">${getTranslation(this._hass, 'current')}</div>
              <div class="temp-value current">
                ${currentTemp.toFixed(1)}<span class="temp-unit">${unit}</span>
              </div>
            </div>
            <div class="temp-item ${this._config.temp_target_tap_action !== 'none' ? 'clickable' : ''}" data-temp-type="target">
              <div class="temp-label">${getTranslation(this._hass, 'target')}</div>
              <div class="temp-value target">
                ${targetTemp.toFixed(1)}<span class="temp-unit">${unit}</span>
              </div>
            </div>
          </div>

          <div class="slider-container">
            <div class="slider-track" data-slider="true">
              <div class="slider-marker current" style="left: ${this._tempToPercent(currentTemp, minTemp, maxTemp)}%"></div>
              <div class="slider-marker target" style="left: ${this._tempToPercent(targetTemp, minTemp, maxTemp)}%">
                <div class="drag-value ${this._dragging ? 'visible' : ''}">
                  ${targetTemp.toFixed(1)}${unit}
                </div>
              </div>
            </div>
          </div>

          ${isCompact ? `
          <div class="controls">
            <button class="mode-btn compact ${presetMode === 'eco' ? 'active' : ''}" data-mode="eco">${this._config.eco_label || 'Eco'}</button>
            <button class="control-btn" data-action="decrease">−</button>
            <button class="control-btn" data-action="increase">+</button>
            <button class="mode-btn compact ${presetMode === 'home' || presetMode === 'comfort' ? 'active' : ''}" data-mode="home">${this._config.home_label || 'Home'}</button>
          </div>
          ` : `
          <div class="controls">
            <button class="control-btn" data-action="decrease">−</button>
            <div class="target-display">${targetTemp.toFixed(1)}${unit}</div>
            <button class="control-btn" data-action="increase">+</button>
          </div>
          `}
        </div>
      </ha-card>
    `;

    this._attachEventListeners();
  }

  updateValues() {
    if (!this._hass || !this._config || !this.shadowRoot.querySelector('.temp-value')) return;
    
    const entityId = this._config.entity;
    const entity = this._hass.states[entityId];
    if (!entity) return;

    const currentTemp = parseFloat(entity.attributes.current_temperature) || 0;
    const targetTemp = this._getCurrentTargetTemp();
    const minTemp = parseFloat(entity.attributes.min_temp) || 5;
    const maxTemp = parseFloat(entity.attributes.max_temp) || 35;
    const unit = this._hass.config.unit_system.temperature;
    const presetMode = entity.attributes.preset_mode || 'none';

    // Update outdoor temperature if available
    const outdoorEntityId = this._config.outdoor_entity;
    if (outdoorEntityId) {
      const outdoorEntity = this._hass.states[outdoorEntityId];
      if (outdoorEntity) {
        const outdoorTemp = parseFloat(outdoorEntity.state) || 0;
        const outdoorValue = this.shadowRoot.querySelector('.temp-value.outdoor');
        if (outdoorValue) outdoorValue.innerHTML = `${outdoorTemp.toFixed(1)}<span class="temp-unit">${unit}</span>`;
        
        // Update compact outdoor display
        const outdoorCompact = this.shadowRoot.querySelector('.outdoor-compact');
        if (outdoorCompact) outdoorCompact.textContent = `${outdoorTemp.toFixed(1)}${unit} ${getTranslation(this._hass, 'outdoor_compact')}`;
      }
    }

    // Update temperature displays
    const currentValue = this.shadowRoot.querySelector('.temp-value.current');
    const targetValue = this.shadowRoot.querySelector('.temp-value.target');
    if (currentValue) currentValue.innerHTML = `${currentTemp.toFixed(1)}<span class="temp-unit">${unit}</span>`;
    if (targetValue) targetValue.innerHTML = `${targetTemp.toFixed(1)}<span class="temp-unit">${unit}</span>`;

    // Update slider positions
    const currentMarker = this.shadowRoot.querySelector('.slider-marker.current');
    const targetMarker = this.shadowRoot.querySelector('.slider-marker.target');
    if (currentMarker) currentMarker.style.left = `${this._tempToPercent(currentTemp, minTemp, maxTemp)}%`;
    if (targetMarker) targetMarker.style.left = `${this._tempToPercent(targetTemp, minTemp, maxTemp)}%`;

    // Update control display
    const targetDisplay = this.shadowRoot.querySelector('.target-display');
    if (targetDisplay) targetDisplay.textContent = `${targetTemp.toFixed(1)}${unit}`;

    // Update mode buttons
    this.shadowRoot.querySelectorAll('.mode-btn').forEach(btn => {
      if (btn.dataset.mode === 'eco') {
        btn.classList.toggle('active', presetMode === 'eco');
      } else if (btn.dataset.mode === 'home') {
        btn.classList.toggle('active', presetMode === 'home' || presetMode === 'comfort');
      }
    });

    // Update drag value if dragging
    const dragValue = this.shadowRoot.querySelector('.drag-value');
    if (dragValue) {
      dragValue.textContent = `${targetTemp.toFixed(1)}${unit}`;
      dragValue.classList.toggle('visible', this._dragging);
    }
  }

  _tempToPercent(temp, min, max) {
    return Math.max(0, Math.min(100, ((temp - min) / (max - min)) * 100));
  }

  _percentToTemp(percent, min, max, step) {
    const temp = min + (percent / 100) * (max - min);
    return Math.round(temp / step) * step;
  }

  _attachEventListeners() {
    const entity = this._hass.states[this._config.entity];
    const minTemp = parseFloat(entity.attributes.min_temp) || 5;
    const maxTemp = parseFloat(entity.attributes.max_temp) || 35;
    // Force step to 0.5 for half-degree increments
    const step = 0.5;

    // Mode buttons
    this.shadowRoot.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.target.dataset.mode;
        this._setPresetMode(mode);
      });
    });

    // Plus/minus buttons
    this.shadowRoot.querySelectorAll('.control-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const action = e.target.dataset.action;
        const currentTarget = this._getCurrentTargetTemp();
        
        let newTemp;
        if (action === 'increase') {
          newTemp = Math.round((currentTarget + step) * 2) / 2; // Round to nearest 0.5
          newTemp = Math.min(maxTemp, newTemp);
        } else if (action === 'decrease') {
          newTemp = Math.round((currentTarget - step) * 2) / 2; // Round to nearest 0.5
          newTemp = Math.max(minTemp, newTemp);
        }
        
        if (newTemp !== undefined && newTemp !== currentTarget) {
          this._setLocalTemperature(newTemp);
        }
      });
    });

    // Slider
    const sliderTrack = this.shadowRoot.querySelector('.slider-track');
    
    const handleMove = (e) => {
      if (!this._dragging && e.type === 'mousemove') return;
      
      const rect = sliderTrack.getBoundingClientRect();
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const temp = this._percentToTemp(percent, minTemp, maxTemp, step);
      
      if (this._dragValue !== temp) {
        this._dragValue = temp;
        // Don't set _interacting here - it blocks updates
        // It will be set by _setLocalTemperature on handleEnd
        this.updateValues();
      }
    };

    const handleEnd = () => {
      const wasDragging = this._dragging;
      const finalValue = this._dragValue;
      
      this._dragging = false;
      this._dragValue = null;
      
      if (wasDragging && finalValue !== null) {
        this._setLocalTemperature(finalValue);
      }
    };

    sliderTrack.addEventListener('mousedown', (e) => {
      this._dragging = true;
      handleMove(e);
    });

    sliderTrack.addEventListener('touchstart', (e) => {
      this._dragging = true;
      handleMove(e);
    }, { passive: true });

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    
    sliderTrack.addEventListener('touchmove', handleMove, { passive: true });
    sliderTrack.addEventListener('touchend', handleEnd);

    // Store references for cleanup
    this._moveHandler = handleMove;
    this._endHandler = handleEnd;

    // Temperature item click handlers
    this.shadowRoot.querySelectorAll('.temp-item.clickable').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const tempType = item.dataset.tempType;
        this._handleTempClick(tempType);
      });
    });
  }

  _handleTempClick(tempType) {
    let action = 'none';
    let entityId = this._config.entity;
    
    // Determine action and entity based on temp type
    if (tempType === 'current') {
      action = this._config.temp_current_tap_action || 'more-info';
    } else if (tempType === 'target') {
      action = this._config.temp_target_tap_action || 'more-info';
    } else if (tempType === 'outdoor') {
      action = this._config.temp_outdoor_tap_action || 'more-info';
      entityId = this._config.outdoor_entity;
    }
    
    if (action === 'none' || !entityId) return;
    
    // Handle the action
    if (action === 'more-info') {
      // Fire Home Assistant event to show more-info dialog
      const event = new Event('hass-more-info', {
        bubbles: true,
        composed: true
      });
      event.detail = { entityId };
      this.dispatchEvent(event);
    } else if (action === 'toggle') {
      // Toggle the entity (if applicable)
      this._hass.callService('homeassistant', 'toggle', {
        entity_id: entityId
      });
    }
  }

  _setPresetMode(mode) {
    // Gebruik altijd de geconfigureerde temperaturen
    let targetTemp = null;
    
    if (mode === 'eco' && this._config.eco_temperature !== undefined) {
      targetTemp = this._config.eco_temperature;
    } else if (mode === 'home' && this._config.home_temperature !== undefined) {
      targetTemp = this._config.home_temperature;
    }

    if (targetTemp !== null) {
      // Use local temperature setting for instant feedback
      this._setLocalTemperature(targetTemp);
    } else {
      // Geen custom temperatuur ingesteld, probeer preset mode direct
      this._hass.callService('climate', 'set_preset_mode', {
        entity_id: this._config.entity,
        preset_mode: mode
      }).catch(() => {
        // Thermostaat ondersteunt geen preset modes
      });
    }
  }

  disconnectedCallback() {
    if (this._moveHandler) {
      document.removeEventListener('mousemove', this._moveHandler);
    }
    if (this._endHandler) {
      document.removeEventListener('mouseup', this._endHandler);
    }
    if (this._interactionTimeout) {
      clearTimeout(this._interactionTimeout);
    }
    if (this._syncTimeout) {
      clearTimeout(this._syncTimeout);
    }
  }
}

// Editor Class for Visual Configuration
class InnodigiThermostatCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set hass(hass) {
    this._hass = hass;
    // Render once when both hass and config are available
    if (this._config && !this._initialized) {
      this._initialized = true;
      this.render();
    }
  }

  setConfig(config) {
    this._config = {
      entity: '',
      name: '',
      layout: 'normal',
      outdoor_entity: '',
      outdoor_display_mode: 'auto',
      // Slider colors
      color_cold: '#3498db',
      color_medium: '#2ecc71',
      color_hot: '#e74c3c',
      // Button colors
      color_buttons: '#3498db',
      color_mode_buttons: '#2ecc71',
      // Temperature colors
      color_current_temp: '#3498db',
      color_target_temp: '#2ecc71',
      color_outdoor_temp: '#95a5a6',
      // Temperature cards
      show_temperature_cards: false,
      temperature_card_background: '#1a1a1a',
      temperature_card_background_alpha: 80,
      temperature_card_border_color: '#3498db',
      temperature_card_border_alpha: 50,
      temperature_card_border_width: 1,
      // Temperature tap actions
      temp_current_tap_action: 'more-info',
      temp_target_tap_action: 'more-info',
      temp_outdoor_tap_action: 'more-info',
      eco_temperature: 18,
      home_temperature: 21,
      // Mode button labels
      eco_label: '',
      home_label: '',
      ...config
    };
    
    // Always render on config change (editor needs to show new values)
    if (this._hass) {
      this._initialized = true;
      this.render();
    }
  }

  configChanged(newConfig) {
    const event = new Event('config-changed', {
      bubbles: true,
      composed: true,
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  render() {
    if (!this._hass || !this._config) return;

    // Get all climate entities
    const climateEntities = Object.keys(this._hass.states)
      .filter(eid => eid.startsWith('climate.'))
      .map(eid => ({
        id: eid,
        name: this._hass.states[eid].attributes.friendly_name || eid
      }));

    // Build entity options
    let entityOptions = `<option value="">${getTranslation(this._hass, 'entity_placeholder')}</option>`;
    climateEntities.forEach(entity => {
      const selected = entity.id === this._config.entity ? 'selected' : '';
      entityOptions += `<option value="${entity.id}" ${selected}>${entity.name}</option>`;
    });

    // Get all sensor entities (for outdoor temperature)
    const sensorEntities = Object.keys(this._hass.states)
      .filter(eid => (eid.startsWith('sensor.') || eid.startsWith('weather.')))
      .map(eid => ({
        id: eid,
        name: this._hass.states[eid].attributes.friendly_name || eid
      }));

    // Build outdoor entity options
    let outdoorEntityOptions = `<option value="">${getTranslation(this._hass, 'outdoor_entity_placeholder')}</option>`;
    sensorEntities.forEach(entity => {
      const selected = entity.id === this._config.outdoor_entity ? 'selected' : '';
      outdoorEntityOptions += `<option value="${entity.id}" ${selected}>${entity.name}</option>`;
    });

    this.shadowRoot.innerHTML = `
      <style>
        .card-config {
          padding: 16px;
        }
        
        .config-section {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--divider-color);
        }
        
        .config-section:last-child {
          border-bottom: none;
        }
        
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-text-color);
          margin-bottom: 16px;
        }
        
        .config-row {
          margin-bottom: 16px;
        }
        
        .config-row label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--primary-text-color);
        }
        
        /* Special styling for labels with checkboxes */
        .config-row label:has(input[type="checkbox"]) {
          display: inline-flex;
          align-items: center;
          cursor: pointer;
        }
        
        .config-row label input[type="checkbox"] {
          margin-right: 8px;
          margin-bottom: 0;
          cursor: pointer;
        }
        
        .config-row input,
        .config-row select {
          width: 100%;
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color);
          color: var(--primary-text-color);
          font-size: 14px;
          box-sizing: border-box;
        }

        .config-row input[type="number"] {
          width: 100px;
        }

        .description {
          font-size: 12px;
          color: var(--secondary-text-color);
          margin-top: 4px;
        }

        input[type="color"] {
          width: 100px;
          height: 40px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          cursor: pointer;
        }
      </style>
      
      <div class="card-config">
        <div class="config-section">
          <div class="section-title">${getTranslation(this._hass, 'section_basic')}</div>
          <div class="config-row">
            <label>${getTranslation(this._hass, 'entity_label')}</label>
            <select id="entity-select">
              ${entityOptions}
            </select>
            <div class="description">${getTranslation(this._hass, 'name_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'name_label')}</label>
            <input type="text" id="name-input" placeholder="${getTranslation(this._hass, 'name_description')}" value="${this._config.name || ''}">
            <div class="description">${getTranslation(this._hass, 'name_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'layout_label')}</label>
            <select id="layout-select">
              <option value="normal" ${this._config.layout === 'normal' ? 'selected' : ''}>${getTranslation(this._hass, 'layout_normal')}</option>
              <option value="compact" ${this._config.layout === 'compact' ? 'selected' : ''}>${getTranslation(this._hass, 'layout_compact')}</option>
            </select>
            <div class="description">${getTranslation(this._hass, 'layout_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'outdoor_entity_label')}</label>
            <select id="outdoor-entity-select">
              ${outdoorEntityOptions}
            </select>
            <div class="description">${getTranslation(this._hass, 'outdoor_entity_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'outdoor_display_mode_label')}</label>
            <select id="outdoor-display-mode">
              <option value="auto" ${this._config.outdoor_display_mode === 'auto' ? 'selected' : ''}>${getTranslation(this._hass, 'outdoor_display_auto')}</option>
              <option value="compact" ${this._config.outdoor_display_mode === 'compact' ? 'selected' : ''}>${getTranslation(this._hass, 'outdoor_display_compact')}</option>
              <option value="inline" ${this._config.outdoor_display_mode === 'inline' ? 'selected' : ''}>${getTranslation(this._hass, 'outdoor_display_inline')}</option>
            </select>
            <div class="description">${getTranslation(this._hass, 'outdoor_display_description')}</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">${getTranslation(this._hass, 'section_temperatures')}</div>
          <div class="config-row">
            <label>${getTranslation(this._hass, 'eco_temp_label')}</label>
            <input type="number" id="eco-temp" min="5" max="35" step="0.5" value="${this._config.eco_temperature}">
            <div class="description">${getTranslation(this._hass, 'eco_temp_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'home_temp_label')}</label>
            <input type="number" id="home-temp" min="5" max="35" step="0.5" value="${this._config.home_temperature}">
            <div class="description">${getTranslation(this._hass, 'home_temp_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'eco_label')}</label>
            <input type="text" id="eco-label" placeholder="Eco" value="${this._config.eco_label || ''}">
            <div class="description">${getTranslation(this._hass, 'eco_label_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'home_label')}</label>
            <input type="text" id="home-label" placeholder="Home" value="${this._config.home_label || ''}">
            <div class="description">${getTranslation(this._hass, 'home_label_description')}</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">${getTranslation(this._hass, 'section_slider_colors')}</div>
          <div class="config-row">
            <label>${getTranslation(this._hass, 'color_cold_label')}</label>
            <input type="color" id="color-cold" value="${this._config.color_cold}">
            <div class="description">${getTranslation(this._hass, 'color_cold_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'color_medium_label')}</label>
            <input type="color" id="color-medium" value="${this._config.color_medium}">
            <div class="description">${getTranslation(this._hass, 'color_medium_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'color_hot_label')}</label>
            <input type="color" id="color-hot" value="${this._config.color_hot}">
            <div class="description">${getTranslation(this._hass, 'color_hot_description')}</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">${getTranslation(this._hass, 'section_button_colors')}</div>
          <div class="config-row">
            <label>${getTranslation(this._hass, 'color_buttons_label')}</label>
            <input type="color" id="color-buttons" value="${this._config.color_buttons}">
            <div class="description">${getTranslation(this._hass, 'color_buttons_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'color_mode_buttons_label')}</label>
            <input type="color" id="color-mode-buttons" value="${this._config.color_mode_buttons}">
            <div class="description">${getTranslation(this._hass, 'color_mode_buttons_description')}</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">${getTranslation(this._hass, 'section_temp_colors')}</div>
          <div class="config-row">
            <label>${getTranslation(this._hass, 'color_current_temp_label')}</label>
            <input type="color" id="color-current-temp" value="${this._config.color_current_temp}">
            <div class="description">${getTranslation(this._hass, 'color_current_temp_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'color_target_temp_label')}</label>
            <input type="color" id="color-target-temp" value="${this._config.color_target_temp}">
            <div class="description">${getTranslation(this._hass, 'color_target_temp_description')}</div>
          </div>
          
          <div class="config-row">
            <label>${getTranslation(this._hass, 'color_outdoor_temp_label')}</label>
            <input type="color" id="color-outdoor-temp" value="${this._config.color_outdoor_temp}">
            <div class="description">${getTranslation(this._hass, 'color_outdoor_temp_description')}</div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">${getTranslation(this._hass, 'section_temp_cards')}</div>
          <div class="config-row">
            <label>
              <input type="checkbox" id="show-temperature-cards" ${this._config.show_temperature_cards ? 'checked' : ''}>
              ${getTranslation(this._hass, 'show_temp_cards_label')}
            </label>
            <div class="description">${getTranslation(this._hass, 'show_temp_cards_description')}</div>
          </div>
          
          <div id="card-settings" style="display: ${this._config.show_temperature_cards ? 'block' : 'none'};">
            <div class="config-row">
              <label>${getTranslation(this._hass, 'temp_card_bg_label')}</label>
              <input type="color" id="temperature-card-background" value="${this._config.temperature_card_background}">
              <div class="description">${getTranslation(this._hass, 'temp_card_bg_description')}</div>
            </div>
            
            <div class="config-row">
              <label>${getTranslation(this._hass, 'temp_card_bg_alpha_label')}</label>
              <input type="range" id="temperature-card-background-alpha" min="0" max="100" value="${this._config.temperature_card_background_alpha}" style="width: 200px;">
              <span id="bg-alpha-value">${this._config.temperature_card_background_alpha}%</span>
              <div class="description">${getTranslation(this._hass, 'temp_card_bg_alpha_description')}</div>
            </div>
            
            <div class="config-row">
              <label>${getTranslation(this._hass, 'temp_card_border_color_label')}</label>
              <input type="color" id="temperature-card-border-color" value="${this._config.temperature_card_border_color}">
              <div class="description">${getTranslation(this._hass, 'temp_card_border_color_description')}</div>
            </div>
            
            <div class="config-row">
              <label>${getTranslation(this._hass, 'temp_card_border_alpha_label')}</label>
              <input type="range" id="temperature-card-border-alpha" min="0" max="100" value="${this._config.temperature_card_border_alpha}" style="width: 200px;">
              <span id="border-alpha-value">${this._config.temperature_card_border_alpha}%</span>
              <div class="description">${getTranslation(this._hass, 'temp_card_border_alpha_description')}</div>
            </div>
            
            <div class="config-row">
              <label>${getTranslation(this._hass, 'temp_card_border_width_label')}</label>
              <input type="number" id="temperature-card-border-width" min="0" max="5" value="${this._config.temperature_card_border_width}">
              <div class="description">${getTranslation(this._hass, 'temp_card_border_width_description')}</div>
            </div>
          </div>
        </div>

        <div class="config-section">
          <div class="section-title">${getTranslation(this._hass, 'section_tap_actions')}</div>
          <div class="config-row">
            <label>${getTranslation(this._hass, 'temp_current_tap_label')}</label>
            <select id="temp-current-tap-action">
              <option value="none" ${this._config.temp_current_tap_action === 'none' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_none')}</option>
              <option value="more-info" ${this._config.temp_current_tap_action === 'more-info' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_more_info')}</option>
              <option value="toggle" ${this._config.temp_current_tap_action === 'toggle' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_toggle')}</option>
            </select>
            <div class="description">${getTranslation(this._hass, 'temp_current_tap_description')}</div>
          </div>

          <div class="config-row">
            <label>${getTranslation(this._hass, 'temp_target_tap_label')}</label>
            <select id="temp-target-tap-action">
              <option value="none" ${this._config.temp_target_tap_action === 'none' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_none')}</option>
              <option value="more-info" ${this._config.temp_target_tap_action === 'more-info' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_more_info')}</option>
              <option value="toggle" ${this._config.temp_target_tap_action === 'toggle' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_toggle')}</option>
            </select>
            <div class="description">${getTranslation(this._hass, 'temp_target_tap_description')}</div>
          </div>

          <div class="config-row">
            <label>${getTranslation(this._hass, 'temp_outdoor_tap_label')}</label>
            <select id="temp-outdoor-tap-action">
              <option value="none" ${this._config.temp_outdoor_tap_action === 'none' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_none')}</option>
              <option value="more-info" ${this._config.temp_outdoor_tap_action === 'more-info' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_more_info')}</option>
              <option value="toggle" ${this._config.temp_outdoor_tap_action === 'toggle' ? 'selected' : ''}>${getTranslation(this._hass, 'tap_action_toggle')}</option>
            </select>
            <div class="description">${getTranslation(this._hass, 'temp_outdoor_tap_description')}</div>
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  attachEventListeners() {
    const entitySelect = this.shadowRoot.querySelector('#entity-select');
    const nameInput = this.shadowRoot.querySelector('#name-input');
    const layoutSelect = this.shadowRoot.querySelector('#layout-select');
    const outdoorEntitySelect = this.shadowRoot.querySelector('#outdoor-entity-select');
    const ecoTemp = this.shadowRoot.querySelector('#eco-temp');
    const homeTemp = this.shadowRoot.querySelector('#home-temp');
    
    // Slider color inputs
    const colorCold = this.shadowRoot.querySelector('#color-cold');
    const colorMedium = this.shadowRoot.querySelector('#color-medium');
    const colorHot = this.shadowRoot.querySelector('#color-hot');
    
    // Button color inputs
    const colorButtons = this.shadowRoot.querySelector('#color-buttons');
    const colorModeButtons = this.shadowRoot.querySelector('#color-mode-buttons');
    
    // Temperature color inputs
    const colorCurrentTemp = this.shadowRoot.querySelector('#color-current-temp');
    const colorTargetTemp = this.shadowRoot.querySelector('#color-target-temp');
    const colorOutdoorTemp = this.shadowRoot.querySelector('#color-outdoor-temp');
    
    // Temperature cards
    const showTempCards = this.shadowRoot.querySelector('#show-temperature-cards');
    const cardSettings = this.shadowRoot.querySelector('#card-settings');
    const tempCardBg = this.shadowRoot.querySelector('#temperature-card-background');
    const tempCardBgAlpha = this.shadowRoot.querySelector('#temperature-card-background-alpha');
    const bgAlphaValue = this.shadowRoot.querySelector('#bg-alpha-value');
    const tempCardBorderColor = this.shadowRoot.querySelector('#temperature-card-border-color');
    const tempCardBorderAlpha = this.shadowRoot.querySelector('#temperature-card-border-alpha');
    const borderAlphaValue = this.shadowRoot.querySelector('#border-alpha-value');
    const tempCardBorderWidth = this.shadowRoot.querySelector('#temperature-card-border-width');

    if (entitySelect) {
      entitySelect.addEventListener('change', (e) => {
        this._config.entity = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (nameInput) {
      nameInput.addEventListener('change', (e) => {
        this._config.name = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (layoutSelect) {
      layoutSelect.addEventListener('change', (e) => {
        this._config.layout = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (outdoorEntitySelect) {
      outdoorEntitySelect.addEventListener('change', (e) => {
        this._config.outdoor_entity = e.target.value;
        this.configChanged(this._config);
      });
    }

    const outdoorDisplayMode = this.shadowRoot.querySelector('#outdoor-display-mode');
    if (outdoorDisplayMode) {
      outdoorDisplayMode.addEventListener('change', (e) => {
        this._config.outdoor_display_mode = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (ecoTemp) {
      ecoTemp.addEventListener('change', (e) => {
        this._config.eco_temperature = parseFloat(e.target.value);
        this.configChanged(this._config);
      });
    }

    if (homeTemp) {
      homeTemp.addEventListener('change', (e) => {
        this._config.home_temperature = parseFloat(e.target.value);
        this.configChanged(this._config);
      });
    }

    // Mode button labels
    const ecoLabel = this.shadowRoot.querySelector('#eco-label');
    if (ecoLabel) {
      ecoLabel.addEventListener('change', (e) => {
        this._config.eco_label = e.target.value;
        this.configChanged(this._config);
      });
    }

    const homeLabel = this.shadowRoot.querySelector('#home-label');
    if (homeLabel) {
      homeLabel.addEventListener('change', (e) => {
        this._config.home_label = e.target.value;
        this.configChanged(this._config);
      });
    }

    // Native color pickers - simple change event
    if (colorCold) {
      colorCold.addEventListener('change', (e) => {
        this._config.color_cold = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorMedium) {
      colorMedium.addEventListener('change', (e) => {
        this._config.color_medium = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorHot) {
      colorHot.addEventListener('change', (e) => {
        this._config.color_hot = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorButtons) {
      colorButtons.addEventListener('change', (e) => {
        this._config.color_buttons = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorModeButtons) {
      colorModeButtons.addEventListener('change', (e) => {
        this._config.color_mode_buttons = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorCurrentTemp) {
      colorCurrentTemp.addEventListener('change', (e) => {
        this._config.color_current_temp = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorTargetTemp) {
      colorTargetTemp.addEventListener('change', (e) => {
        this._config.color_target_temp = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (colorOutdoorTemp) {
      colorOutdoorTemp.addEventListener('change', (e) => {
        this._config.color_outdoor_temp = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (showTempCards) {
      showTempCards.addEventListener('change', (e) => {
        this._config.show_temperature_cards = e.target.checked;
        // Show/hide all card settings based on checkbox
        if (cardSettings) {
          cardSettings.style.display = e.target.checked ? 'block' : 'none';
        }
        this.configChanged(this._config);
      });
    }

    if (tempCardBg) {
      tempCardBg.addEventListener('change', (e) => {
        this._config.temperature_card_background = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (tempCardBgAlpha) {
      tempCardBgAlpha.addEventListener('input', (e) => {
        // Update the display value
        if (bgAlphaValue) {
          bgAlphaValue.textContent = `${e.target.value}%`;
        }
      });
      tempCardBgAlpha.addEventListener('change', (e) => {
        this._config.temperature_card_background_alpha = parseInt(e.target.value);
        this.configChanged(this._config);
      });
    }

    if (tempCardBorderColor) {
      tempCardBorderColor.addEventListener('change', (e) => {
        this._config.temperature_card_border_color = e.target.value;
        this.configChanged(this._config);
      });
    }

    if (tempCardBorderAlpha) {
      tempCardBorderAlpha.addEventListener('input', (e) => {
        // Update the display value
        if (borderAlphaValue) {
          borderAlphaValue.textContent = `${e.target.value}%`;
        }
      });
      tempCardBorderAlpha.addEventListener('change', (e) => {
        this._config.temperature_card_border_alpha = parseInt(e.target.value);
        this.configChanged(this._config);
      });
    }

    if (tempCardBorderWidth) {
      tempCardBorderWidth.addEventListener('change', (e) => {
        this._config.temperature_card_border_width = parseInt(e.target.value);
        this.configChanged(this._config);
      });
    }

    // Temperature tap action selects
    const tempCurrentTapAction = this.shadowRoot.querySelector('#temp-current-tap-action');
    if (tempCurrentTapAction) {
      tempCurrentTapAction.addEventListener('change', (e) => {
        this._config.temp_current_tap_action = e.target.value;
        this.configChanged(this._config);
      });
    }

    const tempTargetTapAction = this.shadowRoot.querySelector('#temp-target-tap-action');
    if (tempTargetTapAction) {
      tempTargetTapAction.addEventListener('change', (e) => {
        this._config.temp_target_tap_action = e.target.value;
        this.configChanged(this._config);
      });
    }

    const tempOutdoorTapAction = this.shadowRoot.querySelector('#temp-outdoor-tap-action');
    if (tempOutdoorTapAction) {
      tempOutdoorTapAction.addEventListener('change', (e) => {
        this._config.temp_outdoor_tap_action = e.target.value;
        this.configChanged(this._config);
      });
    }
  }
}

customElements.define('innodigi-thermostat-card', InnodigiThermostatCard);
customElements.define('innodigi-thermostat-card-editor', InnodigiThermostatCardEditor);

// Register the card with Home Assistant
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'innodigi-thermostat-card',
  name: 'Innodigi Thermostaat Kaart',
  description: 'Een moderne thermostaat kaart met horizontale slider',
  preview: true,
  documentationURL: 'https://github.com/elco/homeassistant-innodigi-thermostat'
});

console.info(
  `%c INNODIGI-THERMOSTAT-CARD %c v1.15.1 `,
  'color: white; background: #039be5; font-weight: 700;',
  'color: #039be5; background: white; font-weight: 700;'
);

