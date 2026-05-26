const stats = [
  ["hp", "KP"],
  ["atk", "Angriff"],
  ["def", "Verteid."],
  ["spa", "Sp. Ang."],
  ["spd", "Sp. Vert."],
  ["spe", "Init."]
];

const i18n = {
  de: {
    splashPresents: "presents",
    languageButton: "EN",
    reset: "EVs resetten",
    navTrainer: "Trainer",
    navItems: "Items",
    navLocations: "Orte",
    subtitle: "Plane Builds, tracke EVs und trainiere schneller in Feuerrot / Blattgrün.",
    itemsTitle: "Item-Fundorte",
    itemsIntro: "Wichtige Feuerrot / Blattgrün Items fürs EV-Training und Builds.",
    itemSearch: "Item suchen",
    itemSearchPlaceholder: "z.B. Machoband, Überreste...",
    itemAll: "Alle",
    itemCategoryEv: "EV-Training",
    itemCategoryVitamin: "Vitamine",
    itemCategoryBattle: "Kampf",
    itemCategoryUtility: "Utility",
    itemCategoryBuild: "Build",
    itemCategoryBerry: "Beeren",
    itemSource: "Quelle",
    itemMethodGift: "Geschenk",
    itemMethodShop: "Kaufbar",
    itemMethodHidden: "Versteckt",
    itemMethodOverworld: "Fundort",
    itemMethodWild: "Wildes Pokémon",
    itemMethodThief: "Raub/Dieb",
    itemMethodPostgame: "Postgame",
    itemMethodTrainerTower: "Trainer-Turm",
    itemMethodPickup: "Mitnahme",
    itemLocation: "Fundort",
    itemEffect: "Effekt",
    itemNote: "Hinweis",
    itemNoResults: "Keine Items gefunden.",
    locationsTitle: "Orte-Route",
    locationsIntro: "Wichtige EV-Trainingsorte, Build-Items und versteckte Fundorte in Spiel-Reihenfolge.",
    locationAll: "Alle",
    locationStory: "Story",
    locationPostgame: "Postgame",
    locationImportant: "Wichtig",
    locationEv: "EV",
    locationBuild: "Build",
    locationHidden: "Versteckt",
    locationWild: "Wild",
    locationWhen: "Wann",
    locationDo: "Was du hier machst",
    locationItems: "Items / Training",
    locationTip: "Routine",
    locationNoResults: "Keine Orte gefunden.",
    search: "Suche",
    searchPlaceholder: "z.B. Glurak, Pikachu, Mewtu...",
    pokemon: "Pokémon",
    activeBuild: "Aktiver Build",
    version: "Version",
    nature: "Wesen",
    target: "Ziel",
    targetTitle: "EV-Verteilung",
    buildTitle: "Empfohlener Spielstil",
    applyBuild: "Build als Ziel setzen",
    trainingTitle: "Besiegte Pokémon",
    moveHelpTitle: "Attacken kurz erklärt",
    teamTitle: "Team-Slots",
    teamSlot: "Slot",
    activeSlot: "Aktiv",
    resetSlot: "Slot zurücksetzen",
    slotResetMessage: "Aktiver Slot wurde zurückgesetzt.",
    slotName: "Slot-Name",
    slotNamePlaceholder: "z.B. Starter",
    exportTeam: "Export",
    importTeam: "Import",
    teamCodePlaceholder: "Team-Code hier einfügen oder per Export erzeugen",
    exportDone: "Team-Code ist bereit.",
    exportCopied: "Team-Code kopiert.",
    importDone: "Team wurde importiert.",
    importFailed: "Team-Code konnte nicht gelesen werden.",
    teamOverviewTitle: "Team-Fortschritt",
    teamOverviewDone: "fertige Slots",
    teamOverviewTotal: "Team-EVs",
    teamRecipients: "EVs bekommen",
    teamRecipientsHint: "Aktiviere alle Slots, die im Kampf EP bekommen haben.",
    teamActiveOnly: "Nur aktiv",
    teamAll: "Alle",
    noTeamRecipients: "Wähle mindestens einen Team-Slot aus, der EP bekommen hat.",
    trainingPlanTitle: "Trainingsplan",
    trainingPlanDone: "Alle Zielwerte sind fertig.",
    trainingPlanStep: "noch",
    trainingPlanBattles: "Kämpfe",
    teamSlotHint: "Klick einen Slot an, um EVs, Wesen und Shiny separat zu speichern.",
    matchupTitle: "Typen-Check",
    matchupStrong: "Greift stark an",
    matchupWeak: "Schwach gegen",
    matchupResists: "Resistiert",
    matchupImmune: "Immun gegen",
    matchupNone: "Keins",
    matchupNote: "Feuerrot / Blattgrün: Typenlogik ohne Fee.",
    pokerus: "Pokérus",
    machoBrace: "Machoband",
    noResults: "Keine Treffer",
    complete: "Alle Zielwerte sind erreicht.",
    moves: "Attacken",
    role: "Rolle",
    item: "Item",
    evGoal: "EV-Ziel",
    defeated: "Besiegte Pokémon",
    neutralNature: "neutral",
    currentEvs: "Aktuell",
    remainingEvs: "Übrig",
    multiplier: "Multiplikator",
    nowGain: "jetzt",
    tutorialButton: "Guides",
    tutorialEyebrow: "Guide",
    tutorialTitle: "Guides & Hilfe",
    tutorialClose: "Schließen",
    allStats: "Alle",
    undo: "Undo",
    nothingToUndo: "Noch nichts zum Rückgängig machen.",
    noTrainingOptions: "Für diesen Zielwert sind aktuell keine Trainingsgegner eingetragen.",
    trainingHelp: "Aktiviere Pokérus oder Machoband, dann ändern sich Multiplikator und EV-Werte sofort.",
    trainingSourceQuick: "EV-Training",
    trainingSourceDex: "Alle Pokémon",
    evDexSearchPlaceholder: "z.B. Schiggy, Raupy, Abra...",
    evDexPlace: "EV-Dex",
    trainingComplete: "Ziel erreicht. Stoppe das Training für diesen Build.",
    lastActionPrefix: "Eingetragen",
    overTarget: "über Ziel",
    completeStat: "fertig",
    shinyOn: "Shiny: An",
    shinyOff: "Shiny: Aus"
  },
  en: {
    splashPresents: "presents",
    languageButton: "DE",
    reset: "Reset EVs",
    navTrainer: "Trainer",
    navItems: "Items",
    navLocations: "Locations",
    subtitle: "Plan builds, track EVs, and train faster in FireRed / LeafGreen.",
    itemsTitle: "Item locations",
    itemsIntro: "Important FireRed / LeafGreen items for EV training and builds.",
    itemSearch: "Search item",
    itemSearchPlaceholder: "e.g. Macho Brace, Leftovers...",
    itemAll: "All",
    itemCategoryEv: "EV training",
    itemCategoryVitamin: "Vitamins",
    itemCategoryBattle: "Battle",
    itemCategoryUtility: "Utility",
    itemCategoryBuild: "Build",
    itemCategoryBerry: "Berries",
    itemSource: "Source",
    itemMethodGift: "Gift",
    itemMethodShop: "Buyable",
    itemMethodHidden: "Hidden",
    itemMethodOverworld: "Location",
    itemMethodWild: "Wild Pokemon",
    itemMethodThief: "Thief/Covet",
    itemMethodPostgame: "Postgame",
    itemMethodTrainerTower: "Trainer Tower",
    itemMethodPickup: "Pickup",
    itemLocation: "Location",
    itemEffect: "Effect",
    itemNote: "Note",
    itemNoResults: "No items found.",
    locationsTitle: "Location route",
    locationsIntro: "Important EV training spots, build items, and hidden pickups in playthrough order.",
    locationAll: "All",
    locationStory: "Story",
    locationPostgame: "Postgame",
    locationImportant: "Important",
    locationEv: "EV",
    locationBuild: "Build",
    locationHidden: "Hidden",
    locationWild: "Wild",
    locationWhen: "When",
    locationDo: "What to do here",
    locationItems: "Items / training",
    locationTip: "Routine",
    locationNoResults: "No locations found.",
    search: "Search",
    searchPlaceholder: "e.g. Charizard, Pikachu, Mewtwo...",
    pokemon: "Pokemon",
    activeBuild: "Active build",
    version: "Version",
    nature: "Nature",
    target: "Goal",
    targetTitle: "EV spread",
    buildTitle: "Recommended playstyle",
    applyBuild: "Set build goal",
    trainingTitle: "Defeated Pokemon",
    moveHelpTitle: "Move guide",
    teamTitle: "Team slots",
    teamSlot: "Slot",
    activeSlot: "Active",
    resetSlot: "Reset slot",
    slotResetMessage: "Active slot was reset.",
    slotName: "Slot name",
    slotNamePlaceholder: "e.g. Starter",
    exportTeam: "Export",
    importTeam: "Import",
    teamCodePlaceholder: "Paste team code here or create one with export",
    exportDone: "Team code is ready.",
    exportCopied: "Team code copied.",
    importDone: "Team was imported.",
    importFailed: "Team code could not be read.",
    teamOverviewTitle: "Team progress",
    teamOverviewDone: "finished slots",
    teamOverviewTotal: "team EVs",
    teamRecipients: "Receives EVs",
    teamRecipientsHint: "Enable every slot that received EXP in the battle.",
    teamActiveOnly: "Active only",
    teamAll: "All",
    noTeamRecipients: "Choose at least one team slot that received EXP.",
    trainingPlanTitle: "Training plan",
    trainingPlanDone: "All goal values are done.",
    trainingPlanStep: "left",
    trainingPlanBattles: "battles",
    teamSlotHint: "Click a slot to store EVs, nature and shiny separately.",
    matchupTitle: "Type check",
    matchupStrong: "Hits hard",
    matchupWeak: "Weak to",
    matchupResists: "Resists",
    matchupImmune: "Immune to",
    matchupNone: "None",
    matchupNote: "FireRed / LeafGreen: type logic without Fairy.",
    pokerus: "Pokerus",
    machoBrace: "Macho Brace",
    noResults: "No results",
    complete: "All goal values reached.",
    moves: "Moves",
    role: "Role",
    item: "Item",
    evGoal: "EV goal",
    defeated: "Defeated Pokemon",
    neutralNature: "neutral",
    currentEvs: "Current",
    remainingEvs: "Remaining",
    multiplier: "Multiplier",
    nowGain: "now",
    tutorialButton: "Guides",
    tutorialEyebrow: "Guide",
    tutorialTitle: "Guides & help",
    tutorialClose: "Close",
    allStats: "All",
    undo: "Undo",
    nothingToUndo: "Nothing to undo yet.",
    noTrainingOptions: "No training enemies are entered for this goal yet.",
    trainingHelp: "Toggle Pokerus or Macho Brace and the multiplier plus EV gains update immediately.",
    trainingSourceQuick: "EV training",
    trainingSourceDex: "All Pokemon",
    evDexSearchPlaceholder: "e.g. Squirtle, Caterpie, Abra...",
    evDexPlace: "EV Dex",
    trainingComplete: "Goal reached. Stop training for this build.",
    lastActionPrefix: "Added",
    overTarget: "over goal",
    completeStat: "done",
    shinyOn: "Shiny: On",
    shinyOff: "Shiny: Off"
  }
};

const tutorialGuide = {
  de: {
    heroTitle: "EV-Training Schritt für Schritt",
    heroText: "So läuft es wirklich ab: Du spielst normal auf dem Gameboy/Emulator, und nach jedem besiegten Trainings-Pokémon trägst du denselben Gegner in der Webseite ein.",
    loopTitle: "Der komplette Loop",
    loop: ["Build wählen", "Gegner finden", "besiegen", "in der App anklicken", "Balken prüfen", "bei Ziel stoppen"],
    gameLabel: "Im Spiel",
    appLabel: "In der Webseite",
    battleText: "Glumanda besiegt Abra",
    resultText: "Abra gibt +1 Sp. Ang. EV",
    appClickText: "Klick: Abra +1 Sp. Ang.",
    steps: [
      {
        title: "1. Pokémon und Build vorbereiten",
        game: "Nimm das Pokémon ins Team, das du trainieren willst. Beispiel: Glumanda soll ein schneller Spezial-Angreifer werden.",
        app: "Wähle Glumanda aus, schau dir den empfohlenen Build an und klicke bei Bedarf auf „Build als Ziel setzen“.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/4.png",
        appMock: "build"
      },
      {
        title: "2. Training-Bonus einstellen",
        game: "Wenn dein Pokémon Pokérus hat oder Machoband trägt, ist das wichtig. Beides zusammen macht aus +1 EV direkt +4 EV.",
        app: "Aktiviere Pokérus und/oder Machoband. Der Multiplikator und die Gegnerwerte ändern sich sofort.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        appMock: "multiplier"
      },
      {
        title: "3. Passenden Gegner suchen",
        game: "Für Sp. Angriff suchst du z.B. Abra auf Route 24 oder Nebulak im Pokémon-Turm. Der Gegner bestimmt den EV-Stat.",
        app: "Unten bei „Besiegte Pokémon“ siehst du, welcher Gegner welchen EV-Wert gibt und wo du ihn findest.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/63.png",
        appMock: "enemy"
      },
      {
        title: "4. Gegner besiegen und sofort eintragen",
        game: "Besiege Abra. Sobald dein Pokémon EP bekommt, wurden die EVs vergeben. Das passiert nicht erst beim Level-Up.",
        app: "Klicke direkt danach auf Abra. Die App addiert den richtigen Wert mit Pokérus/Machoband automatisch.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/63.png",
        appMock: "click"
      },
      {
        title: "5. Fortschritt kontrollieren",
        game: "Du kannst weiterkämpfen. Im Spiel siehst du die genauen EV-Zahlen nicht, nur später stärkere Stat-Steigerungen.",
        app: "Schau auf Balken, Zielwert und „Übrig“. Wenn ein Stat voll ist, wechselst du zum nächsten Trainingsziel.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/25.png",
        appMock: "progress"
      },
      {
        title: "6. Stoppen, wenn das Ziel erreicht ist",
        game: "Wenn Sp. Ang. und Init. fertig sind, trainierst du diese Stats nicht weiter. Sonst verschwendest du EVs.",
        app: "Bei 510 / 510 oder wenn alle Zielwerte erreicht sind: Stoppen oder mit einem neuen Pokémon anfangen.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        appMock: "done"
      }
    ],
    examplesTitle: "Mini-Rechnung mit Abra",
    examples: [
      { label: "1 Abra", value: "+1 Sp. Ang." },
      { label: "1 Abra + Machoband", value: "+2 Sp. Ang." },
      { label: "1 Abra + Pokérus", value: "+2 Sp. Ang." },
      { label: "1 Abra + beides", value: "+4 Sp. Ang." }
    ],
    rulesTitle: "Wichtig zu merken",
    rules: [
      "Du musst nicht Level-Up abwarten. EVs kommen sofort nach dem Kampf, wenn EP verteilt wurden.",
      "Wenn mehrere Pokémon EP bekommen, bekommen alle diese EVs.",
      "Die App stimmt nur, wenn du jeden besiegten Trainingsgegner direkt einträgst.",
      "Ein einzelner Stat bringt maximal 252 sinnvolle EVs, insgesamt sind 510 EVs möglich."
    ],
    noteTitle: "Kurzform",
    note: "Spiel: Gegner besiegen. Webseite: denselben Gegner anklicken. Wiederholen, bis der Zielbalken voll ist."
  },
  en: {
    heroTitle: "EV Training Step by Step",
    heroText: "This is the real flow: you play normally on your Game Boy or emulator, and after each defeated training target you record that same enemy in the website.",
    loopTitle: "The full loop",
    loop: ["choose build", "find target", "defeat it", "tap it in the app", "check bars", "stop at goal"],
    gameLabel: "In-game",
    appLabel: "On the website",
    battleText: "Charmander defeats Abra",
    resultText: "Abra gives +1 Sp. Atk EV",
    appClickText: "Click: Abra +1 Sp. Atk",
    steps: [
      {
        title: "1. Prepare your Pokemon and build",
        game: "Put the Pokemon you want to train on your team. Example: Charmander should become a fast special attacker.",
        app: "Select Charmander, review the recommended build, and use Set build goal if needed.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/4.png",
        appMock: "build"
      },
      {
        title: "2. Set training bonuses",
        game: "If your Pokemon has Pokerus or holds the Macho Brace, it matters. Both together turn +1 EV into +4 EV.",
        app: "Enable Pokerus and/or Macho Brace. The multiplier and enemy values update immediately.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        appMock: "multiplier"
      },
      {
        title: "3. Find the right enemy",
        game: "For Sp. Atk, look for Abra on Route 24 or Gastly in Pokemon Tower. The enemy decides the EV stat.",
        app: "Under Defeated Pokemon you can see which enemy gives which EV value and where to find it.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/63.png",
        appMock: "enemy"
      },
      {
        title: "4. Defeat it and record it",
        game: "Defeat Abra. Once your Pokemon gains EXP, the EVs are awarded. This does not wait for a level-up.",
        app: "Click Abra right after the battle. The app adds the correct value with Pokerus/Macho Brace automatically.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/63.png",
        appMock: "click"
      },
      {
        title: "5. Check progress",
        game: "Keep battling. The game does not show exact EV numbers, only later stat increases on level-up.",
        app: "Watch the bars, goal value and remaining EVs. When a stat is done, switch to the next target.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/25.png",
        appMock: "progress"
      },
      {
        title: "6. Stop at the goal",
        game: "Once Sp. Atk and Speed are complete, stop training those stats. Otherwise you waste EVs.",
        app: "At 510 / 510, or when all goals are complete, stop or start a new Pokemon.",
        gameImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        appMock: "done"
      }
    ],
    examplesTitle: "Mini calculation with Abra",
    examples: [
      { label: "1 Abra", value: "+1 Sp. Atk" },
      { label: "1 Abra + Macho Brace", value: "+2 Sp. Atk" },
      { label: "1 Abra + Pokerus", value: "+2 Sp. Atk" },
      { label: "1 Abra + both", value: "+4 Sp. Atk" }
    ],
    rulesTitle: "Important to remember",
    rules: [
      "You do not need to wait for a level-up. EVs are gained right after EXP is awarded.",
      "If multiple Pokemon receive EXP, all of them receive those EVs.",
      "The app is accurate only if you record every defeated training target.",
      "One stat can use up to 252 meaningful EVs, and the total cap is 510 EVs."
    ],
    noteTitle: "Short version",
    note: "Game: defeat the target. Website: click the same target. Repeat until the goal bar is full."
  }
};

const statLabels = {
  de: {
    hp: "KP",
    atk: "Angriff",
    def: "Verteid.",
    spa: "Sp. Ang.",
    spd: "Sp. Vert.",
    spe: "Init."
  },
  en: {
    hp: "HP",
    atk: "Attack",
    def: "Defense",
    spa: "Sp. Atk",
    spd: "Sp. Def",
    spe: "Speed"
  }
};

const versions = [
  { de: "Feuerrot / Blattgrün", en: "FireRed / LeafGreen" },
  { de: "Diamant / Perl", en: "Diamond / Pearl" },
  { de: "Schwarz / Weiß", en: "Black / White" },
  { de: "Karmesin / Purpur", en: "Scarlet / Violet" }
];

const natures = [
  { id: "hardy", de: "Robust", en: "Hardy", plus: null, minus: null },
  { id: "lonely", de: "Solo", en: "Lonely", plus: "atk", minus: "def" },
  { id: "brave", de: "Mutig", en: "Brave", plus: "atk", minus: "spe" },
  { id: "adamant", de: "Hart", en: "Adamant", plus: "atk", minus: "spa" },
  { id: "naughty", de: "Frech", en: "Naughty", plus: "atk", minus: "spd" },
  { id: "bold", de: "Kühn", en: "Bold", plus: "def", minus: "atk" },
  { id: "docile", de: "Sanft", en: "Docile", plus: null, minus: null },
  { id: "relaxed", de: "Locker", en: "Relaxed", plus: "def", minus: "spe" },
  { id: "impish", de: "Pfiffig", en: "Impish", plus: "def", minus: "spa" },
  { id: "lax", de: "Lasch", en: "Lax", plus: "def", minus: "spd" },
  { id: "timid", de: "Scheu", en: "Timid", plus: "spe", minus: "atk" },
  { id: "hasty", de: "Hastig", en: "Hasty", plus: "spe", minus: "def" },
  { id: "serious", de: "Ernst", en: "Serious", plus: null, minus: null },
  { id: "jolly", de: "Froh", en: "Jolly", plus: "spe", minus: "spa" },
  { id: "naive", de: "Naiv", en: "Naive", plus: "spe", minus: "spd" },
  { id: "modest", de: "Mäßig", en: "Modest", plus: "spa", minus: "atk" },
  { id: "mild", de: "Mild", en: "Mild", plus: "spa", minus: "def" },
  { id: "quiet", de: "Ruhig", en: "Quiet", plus: "spa", minus: "spe" },
  { id: "bashful", de: "Zaghaft", en: "Bashful", plus: null, minus: null },
  { id: "rash", de: "Hitzig", en: "Rash", plus: "spa", minus: "spd" },
  { id: "calm", de: "Still", en: "Calm", plus: "spd", minus: "atk" },
  { id: "gentle", de: "Zart", en: "Gentle", plus: "spd", minus: "def" },
  { id: "sassy", de: "Forsch", en: "Sassy", plus: "spd", minus: "spe" },
  { id: "careful", de: "Sacht", en: "Careful", plus: "spd", minus: "spa" },
  { id: "quirky", de: "Kauzig", en: "Quirky", plus: null, minus: null }
];

const typeNames = {
  de: {
    Normal: "Normal",
    Fire: "Feuer",
    Water: "Wasser",
    Electric: "Elektro",
    Grass: "Pflanze",
    Ice: "Eis",
    Fighting: "Kampf",
    Poison: "Gift",
    Ground: "Boden",
    Flying: "Flug",
    Psychic: "Psycho",
    Bug: "Käfer",
    Rock: "Gestein",
    Ghost: "Geist",
    Dragon: "Drache",
    Dark: "Unlicht",
    Steel: "Stahl"
  },
  en: {
    Normal: "Normal",
    Fire: "Fire",
    Water: "Water",
    Electric: "Electric",
    Grass: "Grass",
    Ice: "Ice",
    Fighting: "Fighting",
    Poison: "Poison",
    Ground: "Ground",
    Flying: "Flying",
    Psychic: "Psychic",
    Bug: "Bug",
    Rock: "Rock",
    Ghost: "Ghost",
    Dragon: "Dragon",
    Dark: "Dark",
    Steel: "Steel"
  }
};

const typeKeys = Object.keys(typeNames.en);

const typeChart = {
  Normal: { Rock: 0.5, Ghost: 0, Steel: 0.5 },
  Fire: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2 },
  Water: { Fire: 2, Water: 0.5, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5 },
  Electric: { Water: 2, Electric: 0.5, Grass: 0.5, Ground: 0, Flying: 2, Dragon: 0.5 },
  Grass: { Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Ground: 2, Flying: 0.5, Bug: 0.5, Rock: 2, Dragon: 0.5, Steel: 0.5 },
  Ice: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 0.5, Ground: 2, Flying: 2, Dragon: 2, Steel: 0.5 },
  Fighting: { Normal: 2, Ice: 2, Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Rock: 2, Ghost: 0, Dark: 2, Steel: 2 },
  Poison: { Grass: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0 },
  Ground: { Fire: 2, Electric: 2, Grass: 0.5, Poison: 2, Flying: 0, Bug: 0.5, Rock: 2, Steel: 2 },
  Flying: { Electric: 0.5, Grass: 2, Fighting: 2, Bug: 2, Rock: 0.5, Steel: 0.5 },
  Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Dark: 0, Steel: 0.5 },
  Bug: { Fire: 0.5, Grass: 2, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Psychic: 2, Ghost: 0.5, Dark: 2, Steel: 0.5 },
  Rock: { Fire: 2, Ice: 2, Fighting: 0.5, Ground: 0.5, Flying: 2, Bug: 2, Steel: 0.5 },
  Ghost: { Normal: 0, Psychic: 2, Ghost: 2, Dark: 0.5, Steel: 0.5 },
  Dragon: { Dragon: 2, Steel: 0.5 },
  Dark: { Fighting: 0.5, Psychic: 2, Ghost: 2, Dark: 0.5, Steel: 0.5 },
  Steel: { Fire: 0.5, Water: 0.5, Electric: 0.5, Ice: 2, Rock: 2, Steel: 0.5 }
};

const physicalFastTarget = { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 };
const specialFastTarget = { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 };
const bulkyPhysicalTarget = { hp: 252, atk: 252, def: 4, spa: 0, spd: 0, spe: 0 };
const bulkySpecialTarget = { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 };

const customTargets = {
  3: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
  6: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
  9: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
  25: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
  65: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
  94: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
  130: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
  143: { hp: 252, atk: 252, def: 4, spa: 0, spd: 0, spe: 0 },
  149: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
  150: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 }
};

const buildRecommendations = {
  3: {
    role: "Bulky Spezial-Angreifer",
    nature: "Mäßig oder Still",
    ability: "Notdünger",
    item: "Wundersaat / Überreste",
    evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
    moves: ["Rasierblatt", "Gigasauger", "Schlafpuder", "Egelsamen"],
    note: "Stabiler Story-Build: hält viel aus und gewinnt lange Kämpfe über Status und Heilung."
  },
  6: {
    role: "Schneller Spezial-Angreifer",
    nature: "Scheu oder Mäßig",
    ability: "Großbrand",
    item: "Holzkohle / Überreste",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Flammenwurf", "Fliegen", "Drachenklaue", "Erdbeben"],
    note: "Sehr guter Story-Build: schnell, starker Feuer-STAB und genug Coverage für viele Trainer."
  },
  9: {
    role: "Bulky Spezial-Angreifer",
    nature: "Mäßig oder Still",
    ability: "Sturzbach",
    item: "Überreste / Mystikwasser",
    evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
    moves: ["Surfer", "Eisstrahl", "Biss", "Schutzschild"],
    note: "Sicherer Story-Build: hält viel aus und nutzt Surfer und Eisstrahl mit starkem Sp. Angriff."
  },
  25: {
    role: "Schneller Spezial-Angreifer",
    nature: "Scheu",
    ability: "Statik",
    item: "Magnet",
    evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ["Donnerblitz", "Donnerwelle", "Ruckzuckhieb", "Doppelteam"],
    note: "Pikachu ist fragil, also zuerst zuschlagen oder Gegner paralysieren."
  },
  26: {
    role: "Schneller Spezial-Angreifer",
    nature: "Scheu",
    ability: "Statik",
    item: "Magnet",
    evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ["Donnerblitz", "Donnerwelle", "Durchbruch", "Ruckzuckhieb"],
    note: "Raichu spielt sich wie Pikachu, aber deutlich stabiler und besser für die Story."
  },
  59: {
    role: "Schneller Spezial-Angreifer",
    nature: "Scheu oder Mäßig",
    ability: "Bedroher",
    item: "Holzkohle",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Flammenwurf", "Turbotempo", "Biss", "Schaufler"],
    note: "Bedroher macht Arkani angenehm sicher. Feuer-Attacken sind in Gen 3 speziell, deshalb passt Sp. Angriff gut."
  },
  65: {
    role: "Spezial-Sweeper",
    nature: "Scheu",
    ability: "Synchro",
    item: "Krummlöffel",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Psychokinese", "Gedankengut", "Genesung", "Donnerwelle"],
    note: "Extrem stark, aber fragil. Gut spielen heißt: reinkommen, schneller sein, Druck machen."
  },
  68: {
    role: "Physischer Wallbreaker",
    nature: "Hart",
    ability: "Adrenalin",
    item: "Schwarzgurt",
    evs: { hp: 252, atk: 252, def: 4, spa: 0, spd: 0, spe: 0 },
    moves: ["Kreuzhieb", "Erdbeben", "Steinhagel", "Protzer"],
    note: "Langsam, aber sehr hart. Gute Wahl gegen Normal-, Gestein- und Eis-Pokémon."
  },
  94: {
    role: "Spezial-Sweeper",
    nature: "Scheu oder Mäßig",
    ability: "Schwebe",
    item: "Krummlöffel / Überreste",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Psychokinese", "Donnerblitz", "Gigasauger", "Hypnose"],
    note: "Gengar lebt von Tempo und Coverage. Schwebe gibt dir einen kostenlosen Boden-Switch."
  },
  103: {
    role: "Bulky Spezial-Angreifer",
    nature: "Mäßig",
    ability: "Chlorophyll",
    item: "Wundersaat",
    evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
    moves: ["Psychokinese", "Gigasauger", "Schlafpuder", "Egelsamen"],
    note: "Guter Mix aus Schaden und Kontrolle. Besonders angenehm gegen Wasser- und Boden-Pokémon."
  },
  121: {
    role: "Schneller Spezial-Angreifer",
    nature: "Scheu",
    ability: "Innere Kraft",
    item: "Mystikwasser",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Surfer", "Psychokinese", "Eisstrahl", "Donnerblitz"],
    note: "Starmie ist eines der besten Story-Pokémon: schnell, stark und mit sehr guter Coverage."
  },
  130: {
    role: "Physischer Sweeper",
    nature: "Hart oder Froh",
    ability: "Bedroher",
    item: "Überreste / Seidenschal",
    evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ["Surfer", "Erdbeben", "Drachentanz", "Rückkehr"],
    note: "Drachentanz macht Garados sehr gefährlich. Bedroher hilft beim sicheren Setup."
  },
  131: {
    role: "Bulky Coverage-Angreifer",
    nature: "Still oder Mäßig",
    ability: "H2O-Absorber",
    item: "Überreste",
    evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
    moves: ["Surfer", "Eisstrahl", "Donnerblitz", "Abgesang"],
    note: "Lapras ist langsam, aber sehr verlässlich und trifft viele wichtige Gegner effektiv."
  },
  135: {
    role: "Schneller Spezial-Angreifer",
    nature: "Scheu",
    ability: "Voltabsorber",
    item: "Magnet",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Donnerblitz", "Donnerwelle", "Biss", "Doppelteam"],
    note: "Blitza ist ein cleaner Speed-Pick. Sehr gut, wenn du schnell Druck machen willst."
  },
  143: {
    role: "Bulky Physischer Angreifer",
    nature: "Hart",
    ability: "Speckschicht",
    item: "Überreste",
    evs: { hp: 252, atk: 252, def: 4, spa: 0, spd: 0, spe: 0 },
    moves: ["Rückkehr", "Erdbeben", "Spukball", "Erholung"],
    note: "Relaxo ist langsam, aber unglaublich stabil. Perfekt, wenn du sichere Wechsel willst."
  },
  145: {
    role: "Spezial-Angreifer",
    nature: "Scheu oder Mäßig",
    ability: "Erzwinger",
    item: "Magnet",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Donnerblitz", "Bohrschnabel", "Donnerwelle", "Lichtschild"],
    note: "Zapdos ist stark und flexibel: guter Schaden, gute Defensive, starke Typenkombination."
  },
  149: {
    role: "Physischer Sweeper",
    nature: "Hart oder Froh",
    ability: "Konzentrator",
    item: "Hackattack / Überreste",
    evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ["Drachenklaue", "Erdbeben", "Fliegen", "Rückkehr"],
    note: "Dragoran spielt sich in der Story stark über Fliegen, Erdbeben und breite Coverage."
  },
  150: {
    role: "Legendärer Spezial-Sweeper",
    nature: "Scheu oder Mäßig",
    ability: "Erzwinger",
    item: "Krummlöffel / Überreste",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Psychokinese", "Gedankengut", "Donnerblitz", "Eisstrahl"],
    note: "Mewtu ist absurd stark. Mit Gedankengut wird es schnell komplett außer Kontrolle."
  }
};

const specialMoveTypes = ["Feuer", "Wasser", "Elektro", "Pflanze", "Eis", "Psycho", "Drache", "Unlicht"];

const moveSuggestions = {
  Feuer: ["Flammenwurf", "Drachenklaue", "Schaufler", "Sonnentag"],
  Wasser: ["Surfer", "Eisstrahl", "Biss", "Schutzschild"],
  Elektro: ["Donnerblitz", "Donnerwelle", "Biss", "Ruckzuckhieb"],
  Pflanze: ["Gigasauger", "Schlafpuder", "Egelsamen", "Sonnentag"],
  Eis: ["Eisstrahl", "Surfer", "Erholung", "Schutzschild"],
  Psycho: ["Psychokinese", "Gedankengut", "Genesung", "Donnerwelle"],
  Drache: ["Drachenklaue", "Flammenwurf", "Donnerblitz", "Surfer"],
  Unlicht: ["Biss", "Spukball", "Rückkehr", "Schutzschild"],
  Normal: ["Rückkehr", "Spukball", "Durchbruch", "Erholung"],
  Kampf: ["Durchbruch", "Protzer", "Steinhagel", "Erdbeben"],
  Boden: ["Erdbeben", "Steinhagel", "Rückkehr", "Schaufler"],
  Gestein: ["Steinhagel", "Erdbeben", "Rückkehr", "Schutzschild"],
  Flug: ["Fliegen", "Rückkehr", "Stahlflügel", "Doppelteam"],
  Käfer: ["Silberhauch", "Aero-Ass", "Schwerttanz", "Rückkehr"],
  Gift: ["Matschbombe", "Biss", "Schaufler", "Doppelteam"],
  Geist: ["Psychokinese", "Donnerblitz", "Gigasauger", "Hypnose"],
  Stahl: ["Metallklaue", "Donnerblitz", "Sternschauer", "Donnerwelle"]
};

const pveMoveSets = {
  1: ["Rasierblatt", "Schlafpuder", "Egelsamen", "Tackle"],
  2: ["Rasierblatt", "Schlafpuder", "Egelsamen", "Gigasauger"],
  3: ["Rasierblatt", "Gigasauger", "Schlafpuder", "Egelsamen"],
  4: ["Glut", "Metallklaue", "Schaufler", "Schlitzer"],
  5: ["Flammenwurf", "Metallklaue", "Schaufler", "Schlitzer"],
  6: ["Flammenwurf", "Fliegen", "Drachenklaue", "Erdbeben"],
  7: ["Aquaknarre", "Biss", "Schutzschild", "Schaufler"],
  8: ["Surfer", "Biss", "Schutzschild", "Eisstrahl"],
  9: ["Surfer", "Eisstrahl", "Biss", "Schutzschild"],
  10: ["Tackle", "Fadenschuss"],
  11: ["Härtner"],
  12: ["Psychokinese", "Schlafpuder", "Silberhauch", "Gigasauger"],
  13: ["Giftstachel", "Fadenschuss"],
  14: ["Härtner"],
  15: ["Duonadel", "Durchbruch", "Schwerttanz", "Matschbombe"],
  16: ["Flügelschlag", "Ruckzuckhieb", "Sandwirbel", "Rückkehr"],
  17: ["Flügelschlag", "Ruckzuckhieb", "Sandwirbel", "Rückkehr"],
  18: ["Fliegen", "Rückkehr", "Stahlflügel", "Ruckzuckhieb"],
  19: ["Hyperzahn", "Ruckzuckhieb", "Schaufler", "Biss"],
  20: ["Hyperzahn", "Rückkehr", "Schaufler", "Stärke"],
  21: ["Pikser", "Verfolgung", "Fliegen", "Rückkehr"],
  22: ["Bohrschnabel", "Fliegen", "Rückkehr", "Stahlflügel"],
  23: ["Giftstachel", "Biss", "Schaufler", "Kreideschrei"],
  24: ["Matschbombe", "Biss", "Schaufler", "Kreideschrei"],
  25: ["Donnerblitz", "Donnerwelle", "Ruckzuckhieb", "Doppelteam"],
  26: ["Donnerblitz", "Donnerwelle", "Durchbruch", "Ruckzuckhieb"],
  27: ["Schaufler", "Schlitzer", "Sternschauer", "Sandwirbel"],
  28: ["Erdbeben", "Schlitzer", "Durchbruch", "Steinhagel"],
  29: ["Doppelkick", "Giftstachel", "Biss", "Schaufler"],
  30: ["Doppelkick", "Biss", "Schaufler", "Matschbombe"],
  31: ["Erdbeben", "Durchbruch", "Matschbombe", "Donnerblitz"],
  32: ["Doppelkick", "Giftstachel", "Hornattacke", "Schaufler"],
  33: ["Doppelkick", "Hornattacke", "Schaufler", "Matschbombe"],
  34: ["Erdbeben", "Durchbruch", "Matschbombe", "Donnerblitz"],
  35: ["Gesang", "Rückkehr", "Donnerblitz", "Eisstrahl"],
  36: ["Rückkehr", "Donnerblitz", "Eisstrahl", "Gedankengut"],
  37: ["Flammenwurf", "Hypnose", "Schaufler", "Ruckzuckhieb"],
  38: ["Flammenwurf", "Feuerwirbel", "Schaufler", "Rückkehr"],
  39: ["Gesang", "Rückkehr", "Doppelteam", "Schutzschild"],
  40: ["Rückkehr", "Donnerblitz", "Eisstrahl", "Gesang"],
  41: ["Flügelschlag", "Konfusstrahl", "Biss", "Aero-Ass"],
  42: ["Flügelschlag", "Konfusstrahl", "Biss", "Matschbombe"],
  43: ["Schlafpuder", "Säure", "Gigasauger", "Sonnentag"],
  44: ["Schlafpuder", "Säure", "Gigasauger", "Mondschein"],
  45: ["Gigasauger", "Solarstrahl", "Stachelspore", "Blättertanz"],
  46: ["Giftpuder", "Schlitzer", "Gigasauger", "Pilzspore"],
  47: ["Pilzspore", "Schlitzer", "Gigasauger", "Schwerttanz"],
  48: ["Konfusion", "Schlafpuder", "Gigasauger", "Giftpuder"],
  49: ["Psychokinese", "Schlafpuder", "Gigasauger", "Silberhauch"],
  50: ["Schaufler", "Schlitzer", "Sandwirbel", "Aero-Ass"],
  51: ["Erdbeben", "Schlitzer", "Aero-Ass", "Steinhagel"],
  52: ["Zahltag", "Biss", "Schaufler", "Schlitzer"],
  53: ["Schlitzer", "Biss", "Schaufler", "Donnerblitz"],
  54: ["Surfer", "Konfusion", "Schaufler", "Eisstrahl"],
  55: ["Surfer", "Eisstrahl", "Schaufler", "Aussetzer"],
  56: ["Karateschlag", "Fußkick", "Schaufler", "Kreideschrei"],
  57: ["Durchbruch", "Kreuzhieb", "Steinhagel", "Erdbeben"],
  58: ["Flammenwurf", "Biss", "Schaufler", "Rückkehr"],
  59: ["Flammenwurf", "Turbotempo", "Biss", "Schaufler"],
  60: ["Surfer", "Hypnose", "Bodyslam", "Regentanz"],
  61: ["Surfer", "Hypnose", "Bodyslam", "Durchbruch"],
  62: ["Surfer", "Durchbruch", "Hypnose", "Erdbeben"],
  63: ["Teleport", "Psychokinese", "Donnerwelle", "Schutzschild"],
  64: ["Psychokinese", "Genesung", "Donnerwelle", "Gedankengut"],
  65: ["Psychokinese", "Gedankengut", "Genesung", "Donnerwelle"],
  66: ["Karateschlag", "Geowurf", "Fußkick", "Silberblick"],
  67: ["Durchbruch", "Geowurf", "Steinhagel", "Protzer"],
  68: ["Kreuzhieb", "Erdbeben", "Steinhagel", "Protzer"],
  69: ["Rasierblatt", "Schlafpuder", "Säure", "Gigasauger"],
  70: ["Rasierblatt", "Schlafpuder", "Säure", "Gigasauger"],
  71: ["Rasierblatt", "Schlafpuder", "Gigasauger", "Solarstrahl"],
  72: ["Surfer", "Säure", "Superschall", "Eisstrahl"],
  73: ["Surfer", "Eisstrahl", "Säure", "Barriere"],
  74: ["Steinwurf", "Schaufler", "Intensität", "Stärke"],
  75: ["Steinhagel", "Schaufler", "Intensität", "Stärke"],
  76: ["Erdbeben", "Steinhagel", "Durchbruch", "Explosion"],
  77: ["Flammenwurf", "Stampfer", "Solarstrahl", "Agilität"],
  78: ["Flammenwurf", "Stampfer", "Solarstrahl", "Rückkehr"],
  79: ["Surfer", "Konfusion", "Aussetzer", "Eisstrahl"],
  80: ["Surfer", "Psychokinese", "Eisstrahl", "Aussetzer"],
  81: ["Donnerblitz", "Donnerwelle", "Sternschauer", "Ultraschall"],
  82: ["Donnerblitz", "Donnerwelle", "Ultraschall", "Metallsound"],
  83: ["Fliegen", "Schlitzer", "Schwerttanz", "Stahlflügel"],
  84: ["Bohrschnabel", "Verfolgung", "Rückkehr", "Aero-Ass"],
  85: ["Bohrschnabel", "Rückkehr", "Stahlflügel", "Aero-Ass"],
  86: ["Surfer", "Eisstrahl", "Kopfnuss", "Erholung"],
  87: ["Surfer", "Eisstrahl", "Kopfnuss", "Erholung"],
  88: ["Matschbombe", "Aussetzer", "Säurepanzer", "Geheimpower"],
  89: ["Matschbombe", "Aussetzer", "Säurepanzer", "Durchbruch"],
  90: ["Surfer", "Eisstrahl", "Schutzschild", "Explosion"],
  91: ["Surfer", "Eisstrahl", "Schutzschild", "Explosion"],
  92: ["Psychokinese", "Hypnose", "Konfusstrahl", "Nachtnebel"],
  93: ["Psychokinese", "Hypnose", "Konfusstrahl", "Nachtnebel"],
  94: ["Psychokinese", "Donnerblitz", "Gigasauger", "Hypnose"],
  95: ["Erdbeben", "Steinhagel", "Schaufler", "Kreideschrei"],
  96: ["Psychokinese", "Hypnose", "Kopfnuss", "Gedankengut"],
  97: ["Psychokinese", "Hypnose", "Kopfnuss", "Gedankengut"],
  98: ["Surfer", "Krabbhammer", "Schutzschild", "Stampfer"],
  99: ["Surfer", "Krabbhammer", "Schutzschild", "Stärke"],
  100: ["Donnerblitz", "Donnerwelle", "Sternschauer", "Explosion"],
  101: ["Donnerblitz", "Donnerwelle", "Sternschauer", "Explosion"],
  102: ["Schlafpuder", "Konfusion", "Gigasauger", "Egelsamen"],
  103: ["Psychokinese", "Gigasauger", "Schlafpuder", "Egelsamen"],
  104: ["Knochmerang", "Kopfnuss", "Schaufler", "Trugschlag"],
  105: ["Knochmerang", "Erdbeben", "Steinhagel", "Durchbruch"],
  106: ["Turmkick", "Durchbruch", "Steinhagel", "Protzer"],
  107: ["Durchbruch", "Tempohieb", "Donnerschlag", "Eishieb"],
  108: ["Rückkehr", "Surfer", "Donnerblitz", "Eisstrahl"],
  109: ["Matschbombe", "Smog", "Donnerblitz", "Explosion"],
  110: ["Matschbombe", "Donnerblitz", "Explosion", "Flammenwurf"],
  111: ["Hornattacke", "Schaufler", "Stärke", "Stampfer"],
  112: ["Erdbeben", "Steinhagel", "Durchbruch", "Hornbohrer"],
  113: ["Geowurf", "Toxin", "Weichei", "Lichtschild"],
  114: ["Gigasauger", "Schlafpuder", "Slam", "Sonnentag"],
  115: ["Rückkehr", "Erdbeben", "Durchbruch", "Biss"],
  116: ["Surfer", "Eisstrahl", "Agilität", "Rauchwolke"],
  117: ["Surfer", "Eisstrahl", "Agilität", "Rauchwolke"],
  118: ["Surfer", "Hornattacke", "Agilität", "Hornbohrer"],
  119: ["Surfer", "Hornattacke", "Agilität", "Hornbohrer"],
  120: ["Surfer", "Psychokinese", "Donnerblitz", "Eisstrahl"],
  121: ["Surfer", "Psychokinese", "Eisstrahl", "Donnerblitz"],
  122: ["Psychokinese", "Gedankengut", "Lichtschild", "Donnerblitz"],
  123: ["Schlitzer", "Aero-Ass", "Schwerttanz", "Zerschneider"],
  124: ["Eisstrahl", "Psychokinese", "Todeskuss", "Gedankengut"],
  125: ["Donnerblitz", "Donnerwelle", "Durchbruch", "Psychokinese"],
  126: ["Flammenwurf", "Psychokinese", "Durchbruch", "Feuerschlag"],
  127: ["Durchbruch", "Schwerttanz", "Steinhagel", "Rückkehr"],
  128: ["Rückkehr", "Erdbeben", "Surfer", "Eisstrahl"],
  129: ["Platscher", "Tackle", "Dreschflegel"],
  130: ["Surfer", "Erdbeben", "Drachentanz", "Rückkehr"],
  131: ["Surfer", "Eisstrahl", "Donnerblitz", "Abgesang"],
  132: ["Wandler"],
  133: ["Rückkehr", "Biss", "Schaufler", "Doppelteam"],
  134: ["Surfer", "Eisstrahl", "Biss", "Säurepanzer"],
  135: ["Donnerblitz", "Donnerwelle", "Biss", "Doppelteam"],
  136: ["Flammenwurf", "Biss", "Schaufler", "Rückkehr"],
  137: ["Psychokinese", "Donnerblitz", "Eisstrahl", "Genesung"],
  138: ["Surfer", "Eisstrahl", "Schutzschild", "Biss"],
  139: ["Surfer", "Eisstrahl", "Schutzschild", "Biss"],
  140: ["Surfer", "Steinhagel", "Schutzschild", "Kratzer"],
  141: ["Surfer", "Steinhagel", "Schlitzer", "Durchbruch"],
  142: ["Fliegen", "Steinhagel", "Erdbeben", "Stahlflügel"],
  143: ["Rückkehr", "Erdbeben", "Spukball", "Erholung"],
  144: ["Eisstrahl", "Fliegen", "Weißnebel", "Agilität"],
  145: ["Donnerblitz", "Bohrschnabel", "Donnerwelle", "Lichtschild"],
  146: ["Flammenwurf", "Fliegen", "Feuerwirbel", "Agilität"],
  147: ["Drachenwut", "Donnerwelle", "Surfer", "Eisstrahl"],
  148: ["Drachenwut", "Donnerwelle", "Surfer", "Eisstrahl"],
  149: ["Drachenklaue", "Erdbeben", "Fliegen", "Rückkehr"],
  150: ["Psychokinese", "Gedankengut", "Donnerblitz", "Eisstrahl"],
  151: ["Psychokinese", "Donnerblitz", "Eisstrahl", "Flammenwurf"]
};

const preferredItems = {
  Feuer: "Holzkohle",
  Wasser: "Mystikwasser",
  Elektro: "Magnet",
  Pflanze: "Wundersaat",
  Eis: "Ewiges Eis",
  Psycho: "Krummlöffel",
  Drache: "Drachenzahn",
  Normal: "Seidenschal",
  Kampf: "Schwarzgurt",
  Boden: "Pudersand",
  Gestein: "Granitstein",
  Flug: "Hackattack",
  Käfer: "Silberstaub",
  Gift: "Giftstich",
  Geist: "Bannsticker"
};

const itemDescriptions = {
  de: {
    Holzkohle: "verstärkt Feuer-Attacken.",
    Mystikwasser: "verstärkt Wasser-Attacken.",
    Magnet: "verstärkt Elektro-Attacken.",
    Wundersaat: "verstärkt Pflanzen-Attacken.",
    "Ewiges Eis": "verstärkt Eis-Attacken.",
    "Krummlöffel": "verstärkt Psycho-Attacken.",
    Drachenzahn: "verstärkt Drachen-Attacken.",
    Seidenschal: "verstärkt Normal-Attacken wie Rückkehr.",
    Schwarzgurt: "verstärkt Kampf-Attacken.",
    Pudersand: "verstärkt Boden-Attacken.",
    Granitstein: "verstärkt Gesteins-Attacken.",
    Hackattack: "verstärkt Flug-Attacken.",
    Silberstaub: "verstärkt Käfer-Attacken.",
    Giftstich: "verstärkt Gift-Attacken.",
    Bannsticker: "verstärkt Geist-Attacken.",
    Überreste: "heilt nach jeder Runde etwas KP.",
    "Scope-Linse": "erhöht die Volltreffer-Chance.",
    "Typ-verstärkendes Item": "verstärkt deinen wichtigsten Angriffstyp."
  },
  en: {
    Holzkohle: "boosts Fire-type moves.",
    Mystikwasser: "boosts Water-type moves.",
    Magnet: "boosts Electric-type moves.",
    Wundersaat: "boosts Grass-type moves.",
    "Ewiges Eis": "boosts Ice-type moves.",
    "Krummlöffel": "boosts Psychic-type moves.",
    Drachenzahn: "boosts Dragon-type moves.",
    Seidenschal: "boosts Normal-type moves such as Return.",
    Schwarzgurt: "boosts Fighting-type moves.",
    Pudersand: "boosts Ground-type moves.",
    Granitstein: "boosts Rock-type moves.",
    Hackattack: "boosts Flying-type moves.",
    Silberstaub: "boosts Bug-type moves.",
    Giftstich: "boosts Poison-type moves.",
    Bannsticker: "boosts Ghost-type moves.",
    Überreste: "heals a little HP after each turn.",
    "Scope-Linse": "raises the critical-hit chance.",
    "Psycho-verstärkendes Item": "boosts Psychic-type moves.",
    "Typ-verstärkendes Item": "boosts your most important attack type."
  }
};

const moveDescriptions = {
  de: {
    "Aero-Ass": "trifft immer und gibt sicheren Flug-Schaden.",
    Abgesang: "setzt einen Timer, der beide aktiven Pokémon nach 3 Runden besiegt.",
    Biss: "gibt Coverage und kann den Gegner zurückschrecken lassen.",
    Bohrschnabel: "starke Flug-Attacke ohne Aufladerunde.",
    Drachenklaue: "zuverlässiger Drachen-Spezialschaden in Gen 3.",
    Drachentanz: "erhöht Angriff und Initiative für einen Sweep.",
    Donnerblitz: "starker und genauer Elektro-STAB oder Coverage.",
    Donnerschlag: "physische Elektro-Coverage gegen Wasser- und Flug-Pokémon.",
    Donnerwelle: "paralysiert und macht schnelle Gegner langsamer.",
    Doppelteam: "erhöht Fluchtwert, damit Gegner öfter verfehlen.",
    Durchbruch: "solide Kampf-Coverage und bricht Barrieren.",
    Egelsamen: "zieht jede Runde KP und hilft beim sicheren Spielen.",
    Eisstrahl: "starke Coverage gegen Pflanze, Boden, Flug und Drache.",
    Erdbeben: "sehr starke Boden-Attacke mit breiter Coverage.",
    Erholung: "heilt komplett, schläfert dich aber für 2 Runden ein.",
    Flammenwurf: "zuverlässiger Feuer-STAB mit guter Genauigkeit.",
    Fliegen: "Flug-STAB und außerhalb vom Kampf praktisch zum Reisen.",
    Gedankengut: "erhöht Sp. Angriff und Sp. Verteidigung.",
    Genesung: "heilt sofort die Hälfte der maximalen KP.",
    Gigasauger: "Pflanzen-Schaden und heilt einen Teil zurück.",
    Hypnose: "schläfert den Gegner ein, kann aber verfehlen.",
    Kreuzhieb: "starke Kampf-Attacke mit erhöhter Volltreffer-Chance.",
    Lichtschild: "halbiert für einige Runden Spezial-Schaden.",
    Matschbombe: "starker Gift-STAB und kann vergiften.",
    Metallklaue: "Stahl-Schaden und kann deinen Angriff erhöhen.",
    Protzer: "erhöht Angriff und Verteidigung.",
    Psychokinese: "starker Psycho-STAB und kann Sp. Verteidigung senken.",
    Rasierblatt: "Pflanzen-STAB mit erhöhter Volltreffer-Chance.",
    Ruckzuckhieb: "Prioritätsangriff, um angeschlagene Gegner zuerst zu treffen.",
    Rückkehr: "starker Normal-Schaden bei hoher Freundschaft.",
    Schlafpuder: "schläfert den Gegner ein und schafft freie Runden.",
    Schaufler: "Boden-Coverage und kann außerhalb vom Kampf nützlich sein.",
    Schutzschild: "blockt eine Runde und scoutet gegnerische Attacken.",
    Schwerttanz: "erhöht Angriff stark für physischen Schaden.",
    Silberhauch: "Käfer-Schaden und kann alle Werte erhöhen.",
    Sonnentag: "verstärkt Feuer, schwächt Wasser und hilft Pflanzen-Sets.",
    Spukball: "starke physische Geist-Coverage in Gen 3.",
    Stahlflügel: "Flug-Pokémon bekommen Stahl-Coverage gegen Gestein und Eis.",
    Staralili: "solider früher Flug-Schaden.",
    Steinhagel: "Gesteins-Coverage und kann zurückschrecken lassen.",
    Sternschauer: "trifft immer und ist sicher gegen Ausweichen.",
    Surfer: "starker und genauer Wasser-STAB.",
    Turbotempo: "sehr starke Priorität, um Gegner sicher zu finishen."
  },
  en: {
    "Aero-Ass": "always hits and gives reliable Flying damage.",
    Abgesang: "starts a timer that knocks out both active Pokemon after 3 turns.",
    Biss: "adds coverage and can make the target flinch.",
    Bohrschnabel: "strong Flying move with no charging turn.",
    Drachenklaue: "reliable Dragon special damage in Gen 3.",
    Drachentanz: "raises Attack and Speed for sweeping.",
    Donnerblitz: "strong and accurate Electric STAB or coverage.",
    Donnerschlag: "physical Electric coverage against Water and Flying Pokemon.",
    Donnerwelle: "paralyzes and slows fast opponents.",
    Doppelteam: "raises evasion so opponents miss more often.",
    Durchbruch: "solid Fighting coverage and breaks screens.",
    Egelsamen: "drains HP every turn and helps safe play.",
    Eisstrahl: "strong coverage against Grass, Ground, Flying and Dragon.",
    Erdbeben: "very strong Ground move with wide coverage.",
    Erholung: "fully heals you, but puts you to sleep for 2 turns.",
    Flammenwurf: "reliable Fire STAB with good accuracy.",
    Fliegen: "Flying STAB and useful for travel outside battle.",
    Gedankengut: "raises Sp. Atk and Sp. Def.",
    Genesung: "instantly heals half of your max HP.",
    Gigasauger: "Grass damage that heals part of the damage back.",
    Hypnose: "puts the target to sleep, but can miss.",
    Kreuzhieb: "strong Fighting move with a higher critical-hit chance.",
    Lichtschild: "reduces special damage for several turns.",
    Matschbombe: "strong Poison STAB and can poison.",
    Metallklaue: "Steel damage and can raise your Attack.",
    Protzer: "raises Attack and Defense.",
    Psychokinese: "strong Psychic STAB and can lower Sp. Def.",
    Rasierblatt: "Grass STAB with a higher critical-hit chance.",
    Ruckzuckhieb: "priority move to hit weakened opponents first.",
    Rückkehr: "strong Normal damage at high friendship.",
    Schlafpuder: "puts the target to sleep and creates free turns.",
    Schaufler: "Ground coverage and can be useful outside battle.",
    Schutzschild: "blocks one turn and scouts enemy moves.",
    Schwerttanz: "sharply raises Attack for physical damage.",
    Silberhauch: "Bug damage and can raise all stats.",
    Sonnentag: "boosts Fire, weakens Water and helps Grass sets.",
    Spukball: "strong physical Ghost coverage in Gen 3.",
    Stahlflügel: "gives Flying Pokemon Steel coverage against Rock and Ice.",
    Steinhagel: "Rock coverage and can make the target flinch.",
    Sternschauer: "always hits and is safe against evasion.",
    Surfer: "strong and accurate Water STAB.",
    Turbotempo: "very strong priority to finish targets safely."
  }
};

const extraMoveDescriptions = {
  de: {
    Agilität: "erhöht Initiative stark und hilft, im PvE zuerst anzugreifen.",
    Aquaknarre: "frühe Wasser-Attacke, bis Surfer verfügbar ist.",
    Aussetzer: "blockiert zeitweise die zuletzt genutzte gegnerische Attacke.",
    Barriere: "erhöht Verteidigung stark und macht längere Kämpfe sicherer.",
    Blättertanz: "starker Pflanzen-Schaden, verwirrt dich danach aber.",
    Bodyslam: "solider Normal-Schaden und kann paralysieren.",
    Doppelkick: "trifft zweimal und ist früh stark gegen Gestein und Normal.",
    Dreschflegel: "wird stärker, wenn die eigenen KP niedrig sind.",
    Einrollen: "erhöht Verteidigung und hilft defensiv durch Story-Kämpfe.",
    Eishieb: "Eis-Coverage gegen Pflanze, Boden, Flug und Drache.",
    Explosion: "extrem starker letzter Treffer, danach ist dein Pokémon besiegt.",
    Fadenschuss: "senkt Initiative und macht frühe Kämpfe leichter.",
    Feuerwirbel: "bindet Gegner über mehrere Runden und verursacht Zusatzschaden.",
    Flügelschlag: "zuverlässiger früher Flug-STAB.",
    Fußkick: "Kampf-Schaden, besonders gut gegen schwere Gegner.",
    Geheimpower: "solider Story-Schaden mit Zusatzeffekt je nach Umgebung.",
    Geowurf: "macht festen Schaden in Höhe deines Levels.",
    Gesang: "schläfert Gegner ein, ist aber nicht sehr genau.",
    Giftpuder: "vergiftet und schwächt Gegner über mehrere Runden.",
    Giftstachel: "früher Gift-Schaden mit Chance zu vergiften.",
    Glut: "früher Feuer-STAB mit Chance zu verbrennen.",
    Härtner: "erhöht Verteidigung, vor allem bei Kokon-Pokémon nützlich.",
    Hornattacke: "solider Normal-Schaden für die Story.",
    Hornbohrer: "kann sofort besiegen, trifft aber unzuverlässig.",
    Hyperzahn: "starke frühe Normal-Attacke für Rattfratz/Rattikarl.",
    Intensität: "Boden-Attacke mit schwankender Stärke, früh sehr brauchbar.",
    Karateschlag: "früher Kampf-Schaden mit guter Volltreffer-Chance.",
    Knochmerang: "trifft zweimal und ist starker Boden-STAB für Tragosso/Knogga.",
    Konfusion: "früher Psycho-Schaden und kann verwirren.",
    Konfusstrahl: "verwirrt Gegner und gibt sichere freie Runden.",
    Kopfnuss: "solider Normal-Schaden und kann zurückschrecken lassen.",
    Krabbhammer: "starker Wasser-Schaden mit erhöhter Volltreffer-Chance.",
    Kreideschrei: "senkt gegnerische Verteidigung stark für physische Angriffe.",
    Kratzer: "früher Basisangriff, bis bessere Attacken verfügbar sind.",
    Megahorn: "sehr starker Käfer-Schaden gegen Psycho und Pflanze.",
    Metallsound: "senkt Sp. Verteidigung stark für Spezial-Angriffe.",
    Mondschein: "heilt KP und macht Pflanzen-Pokémon stabiler.",
    Nachtnebel: "macht festen Schaden in Höhe deines Levels.",
    Pilzspore: "schläfert sehr zuverlässig ein.",
    Platscher: "macht nichts, zeigt aber ehrlich Karpadors frühen Stand.",
    Rauchwolke: "senkt Genauigkeit und hilft in schweren Story-Kämpfen.",
    Regentanz: "verstärkt Wasser-Attacken für mehrere Runden.",
    Sandwirbel: "senkt Genauigkeit und kann frühe Kämpfe retten.",
    Solarstrahl: "sehr starker Pflanzen-Schaden, braucht ohne Sonne eine Aufladerunde.",
    Superschall: "verwirrt Gegner, ist aber nicht sehr genau.",
    Säure: "Gift-Schaden und kann Verteidigung senken.",
    Säurepanzer: "erhöht Verteidigung stark.",
    Schlitzer: "solider physischer Schaden mit erhöhter Volltreffer-Chance.",
    Pikser: "frühe Flug-Attacke für Habitak.",
    Slam: "stärkerer Normal-Schaden, aber nicht perfekt genau.",
    Smog: "früher Gift-Schaden mit Chance zu vergiften.",
    Stampfer: "solider Normal-Schaden und kann zurückschrecken lassen.",
    Steinwurf: "früher Gesteins-Schaden gegen Flug, Käfer und Feuer.",
    Tackle: "früher Basisangriff, vor allem bis bessere Moves kommen.",
    Tagedieb: "heilt sofort die Hälfte der maximalen KP.",
    Teleport: "bringt dich aus wilden Kämpfen und zurück zum letzten Pokémon-Center.",
    Tempohieb: "Prioritätsangriff, um angeschlagene Gegner sicher zu treffen.",
    Todeskuss: "schläfert Gegner ein und schafft freie Runden.",
    Toxin: "vergiftet schwer und wird pro Runde gefährlicher.",
    Trugschlag: "lässt Gegner mit mindestens 1 KP stehen, perfekt zum Fangen.",
    Turmkick: "sehr starker Kampf-Schaden, aber riskant bei Fehlschlag.",
    Ultraschall: "verwirrt Gegner, trifft aber nicht immer.",
    Verfolgung: "Unlicht-Schaden, besonders nützlich gegen Psycho und Geist.",
    Wandler: "kopiert den Gegner inklusive Attacken.",
    Weichei: "heilt sofort viel KP.",
    Zahltag: "macht Schaden und gibt nach dem Kampf extra Geld.",
    Drachenwut: "macht immer 40 KP Schaden und ist früh sehr zuverlässig.",
    Duonadel: "trifft zweimal und kann vergiften.",
    Feuerschlag: "solider Feuer-Schaden mit Chance zu verbrennen.",
    Silberblick: "senkt Verteidigung und hilft physischen Angriffen.",
    Stachelspore: "paralysiert und macht Gegner langsamer.",
    Stärke: "solider Normal-Schaden und außerhalb vom Kampf praktisch.",
    Weißnebel: "verhindert Statuswert-Senkungen.",
    Zerschneider: "früher Normal-Schaden und außerhalb vom Kampf nötig."
  },
  en: {
    Agilität: "sharply raises Speed and helps you move first in PvE.",
    Aquaknarre: "early Water move until Surf is available.",
    Aussetzer: "temporarily disables the target's last used move.",
    Barriere: "sharply raises Defense for safer long fights.",
    Blättertanz: "strong Grass damage, but confuses you afterward.",
    Bodyslam: "solid Normal damage and can paralyze.",
    Doppelkick: "hits twice and is useful early against Rock and Normal.",
    Dreschflegel: "gets stronger when your HP is low.",
    Einrollen: "raises Defense and helps with safer story fights.",
    Eishieb: "Ice coverage against Grass, Ground, Flying and Dragon.",
    Explosion: "huge final hit, but your Pokemon faints after using it.",
    Fadenschuss: "lowers Speed and makes early fights easier.",
    Feuerwirbel: "traps the target for multiple turns with chip damage.",
    Flügelschlag: "reliable early Flying STAB.",
    Fußkick: "Fighting damage, especially good against heavy targets.",
    Geheimpower: "solid story damage with an effect based on location.",
    Geowurf: "deals fixed damage equal to your level.",
    Gesang: "puts the target to sleep, but has shaky accuracy.",
    Giftpuder: "poisons and wears the target down over time.",
    Giftstachel: "early Poison damage with a poison chance.",
    Glut: "early Fire STAB with a burn chance.",
    Härtner: "raises Defense, mainly useful on cocoon Pokemon.",
    Hornattacke: "solid Normal damage for story play.",
    Hornbohrer: "can instantly knock out, but is unreliable.",
    Hyperzahn: "strong early Normal move for Rattata/Raticate.",
    Intensität: "Ground move with variable power, useful early.",
    Karateschlag: "early Fighting damage with a good critical-hit chance.",
    Knochmerang: "hits twice and is strong Ground STAB for Cubone/Marowak.",
    Konfusion: "early Psychic damage and can confuse.",
    Konfusstrahl: "confuses the target and can create free turns.",
    Kopfnuss: "solid Normal damage and can make the target flinch.",
    Krabbhammer: "strong Water damage with a higher critical-hit chance.",
    Kreideschrei: "sharply lowers Defense for physical attacks.",
    Kratzer: "basic early attack until better moves are available.",
    Megahorn: "very strong Bug damage against Psychic and Grass.",
    Metallsound: "sharply lowers Sp. Def for special attacks.",
    Mondschein: "heals HP and makes Grass Pokemon sturdier.",
    Nachtnebel: "deals fixed damage equal to your level.",
    Pilzspore: "puts the target to sleep very reliably.",
    Platscher: "does nothing, but honestly reflects early Magikarp.",
    Rauchwolke: "lowers accuracy and can help in hard story fights.",
    Regentanz: "boosts Water moves for several turns.",
    Sandwirbel: "lowers accuracy and can save early fights.",
    Solarstrahl: "very strong Grass damage, but needs a charge turn without sun.",
    Superschall: "confuses the target, but is not very accurate.",
    Säure: "Poison damage and can lower Defense.",
    Säurepanzer: "sharply raises Defense.",
    Schlitzer: "solid physical damage with a higher critical-hit chance.",
    Pikser: "early Flying move for Spearow.",
    Slam: "stronger Normal damage, but not perfectly accurate.",
    Smog: "early Poison damage with a poison chance.",
    Stampfer: "solid Normal damage and can make the target flinch.",
    Steinwurf: "early Rock damage against Flying, Bug and Fire.",
    Tackle: "basic early attack until better moves arrive.",
    Tagedieb: "instantly heals half of max HP.",
    Teleport: "escapes wild battles and returns to the last Pokemon Center.",
    Tempohieb: "priority attack for safely finishing weakened targets.",
    Todeskuss: "puts the target to sleep and creates free turns.",
    Toxin: "badly poisons and gets more dangerous each turn.",
    Trugschlag: "leaves the target with at least 1 HP, perfect for catching.",
    Turmkick: "very strong Fighting damage, but risky if it misses.",
    Ultraschall: "confuses the target, but is not fully accurate.",
    Verfolgung: "Dark damage, useful against Psychic and Ghost.",
    Wandler: "copies the target, including its moves.",
    Weichei: "instantly heals a lot of HP.",
    Zahltag: "deals damage and gives extra money after battle.",
    Drachenwut: "always deals 40 HP damage and is very reliable early.",
    Duonadel: "hits twice and can poison.",
    Feuerschlag: "solid Fire damage with a burn chance.",
    Silberblick: "lowers Defense and helps physical attacks.",
    Stachelspore: "paralyzes and slows the target.",
    Stärke: "solid Normal damage and useful outside battle.",
    Weißnebel: "prevents stat drops.",
    Zerschneider: "early Normal damage and required outside battle."
  }
};

const moveDetails = {
  "Abgesang": { type: "Normal", power: null, accuracy: null, pp: 5 },
  "Aero-Ass": { type: "Flug", power: 60, accuracy: null, pp: 20 },
  "Agilität": { type: "Psycho", power: null, accuracy: null, pp: 30 },
  "Aquaknarre": { type: "Wasser", power: 40, accuracy: 100, pp: 25 },
  "Aussetzer": { type: "Normal", power: null, accuracy: 55, pp: 20 },
  "Barriere": { type: "Psycho", power: null, accuracy: null, pp: 30 },
  "Biss": { type: "Unlicht", power: 60, accuracy: 100, pp: 25 },
  "Blättertanz": { type: "Pflanze", power: 70, accuracy: 100, pp: 20 },
  "Bodyslam": { type: "Normal", power: 85, accuracy: 100, pp: 15 },
  "Bohrschnabel": { type: "Flug", power: 80, accuracy: 100, pp: 20 },
  "Donnerblitz": { type: "Elektro", power: 95, accuracy: 100, pp: 15 },
  "Donnerschlag": { type: "Elektro", power: 75, accuracy: 100, pp: 15 },
  "Donnerwelle": { type: "Elektro", power: null, accuracy: 100, pp: 20 },
  "Doppelkick": { type: "Kampf", power: 30, accuracy: 100, pp: 30 },
  "Doppelteam": { type: "Normal", power: null, accuracy: null, pp: 15 },
  "Drachenklaue": { type: "Drache", power: 80, accuracy: 100, pp: 15 },
  "Drachentanz": { type: "Drache", power: null, accuracy: null, pp: 20 },
  "Drachenwut": { type: "Drache", power: null, accuracy: 100, pp: 10 },
  "Dreschflegel": { type: "Normal", power: null, accuracy: 100, pp: 15 },
  "Duonadel": { type: "Käfer", power: 25, accuracy: 100, pp: 20 },
  "Durchbruch": { type: "Kampf", power: 75, accuracy: 100, pp: 15 },
  "Egelsamen": { type: "Pflanze", power: null, accuracy: 90, pp: 10 },
  "Eishieb": { type: "Eis", power: 75, accuracy: 100, pp: 15 },
  "Eisstrahl": { type: "Eis", power: 95, accuracy: 100, pp: 10 },
  "Erdbeben": { type: "Boden", power: 100, accuracy: 100, pp: 10 },
  "Erholung": { type: "Psycho", power: null, accuracy: null, pp: 5 },
  "Explosion": { type: "Normal", power: 250, accuracy: 100, pp: 5 },
  "Fadenschuss": { type: "Käfer", power: null, accuracy: 95, pp: 40 },
  "Feuerschlag": { type: "Feuer", power: 75, accuracy: 100, pp: 15 },
  "Feuerwirbel": { type: "Feuer", power: 15, accuracy: 70, pp: 15 },
  "Flammenwurf": { type: "Feuer", power: 95, accuracy: 100, pp: 15 },
  "Fliegen": { type: "Flug", power: 70, accuracy: 95, pp: 15 },
  "Flügelschlag": { type: "Flug", power: 60, accuracy: 100, pp: 35 },
  "Fußkick": { type: "Kampf", power: null, accuracy: 100, pp: 20 },
  "Gedankengut": { type: "Psycho", power: null, accuracy: null, pp: 20 },
  "Geheimpower": { type: "Normal", power: 70, accuracy: 100, pp: 20 },
  "Genesung": { type: "Normal", power: null, accuracy: null, pp: 20 },
  "Geowurf": { type: "Kampf", power: null, accuracy: 100, pp: 20 },
  "Gesang": { type: "Normal", power: null, accuracy: 55, pp: 15 },
  "Giftpuder": { type: "Gift", power: null, accuracy: 75, pp: 35 },
  "Giftstachel": { type: "Gift", power: 15, accuracy: 100, pp: 35 },
  "Gigasauger": { type: "Pflanze", power: 60, accuracy: 100, pp: 5 },
  "Glut": { type: "Feuer", power: 40, accuracy: 100, pp: 25 },
  "Härtner": { type: "Normal", power: null, accuracy: null, pp: 30 },
  "Hornattacke": { type: "Normal", power: 65, accuracy: 100, pp: 25 },
  "Hornbohrer": { type: "Normal", power: null, accuracy: 30, pp: 5 },
  "Hyperzahn": { type: "Normal", power: 80, accuracy: 90, pp: 15 },
  "Hypnose": { type: "Psycho", power: null, accuracy: 60, pp: 20 },
  "Intensität": { type: "Boden", power: null, accuracy: 100, pp: 30 },
  "Karateschlag": { type: "Kampf", power: 50, accuracy: 100, pp: 25 },
  "Knochmerang": { type: "Boden", power: 50, accuracy: 90, pp: 10 },
  "Konfusion": { type: "Psycho", power: 50, accuracy: 100, pp: 25 },
  "Konfusstrahl": { type: "Geist", power: null, accuracy: 100, pp: 10 },
  "Kopfnuss": { type: "Normal", power: 70, accuracy: 100, pp: 15 },
  "Krabbhammer": { type: "Wasser", power: 90, accuracy: 85, pp: 10 },
  "Kratzer": { type: "Normal", power: 40, accuracy: 100, pp: 35 },
  "Kreideschrei": { type: "Normal", power: null, accuracy: 85, pp: 40 },
  "Kreuzhieb": { type: "Kampf", power: 100, accuracy: 80, pp: 5 },
  "Lichtschild": { type: "Psycho", power: null, accuracy: null, pp: 30 },
  "Matschbombe": { type: "Gift", power: 90, accuracy: 100, pp: 10 },
  "Metallklaue": { type: "Stahl", power: 50, accuracy: 95, pp: 35 },
  "Metallsound": { type: "Stahl", power: null, accuracy: 85, pp: 40 },
  "Mondschein": { type: "Normal", power: null, accuracy: null, pp: 5 },
  "Nachtnebel": { type: "Geist", power: null, accuracy: 100, pp: 15 },
  "Pikser": { type: "Flug", power: 35, accuracy: 100, pp: 35 },
  "Pilzspore": { type: "Pflanze", power: null, accuracy: 100, pp: 15 },
  "Platscher": { type: "Normal", power: null, accuracy: null, pp: 40 },
  "Protzer": { type: "Kampf", power: null, accuracy: null, pp: 20 },
  "Psychokinese": { type: "Psycho", power: 90, accuracy: 100, pp: 10 },
  "Rasierblatt": { type: "Pflanze", power: 55, accuracy: 95, pp: 25 },
  "Rauchwolke": { type: "Normal", power: null, accuracy: 100, pp: 20 },
  "Regentanz": { type: "Wasser", power: null, accuracy: null, pp: 5 },
  "Rückkehr": { type: "Normal", power: null, accuracy: 100, pp: 20 },
  "Ruckzuckhieb": { type: "Normal", power: 40, accuracy: 100, pp: 30 },
  "Sandwirbel": { type: "Boden", power: null, accuracy: 100, pp: 15 },
  "Säure": { type: "Gift", power: 40, accuracy: 100, pp: 30 },
  "Säurepanzer": { type: "Gift", power: null, accuracy: null, pp: 40 },
  "Schaufler": { type: "Boden", power: 60, accuracy: 100, pp: 10 },
  "Schlafpuder": { type: "Pflanze", power: null, accuracy: 75, pp: 15 },
  "Schlitzer": { type: "Normal", power: 70, accuracy: 100, pp: 20 },
  "Schutzschild": { type: "Normal", power: null, accuracy: null, pp: 10 },
  "Schwerttanz": { type: "Normal", power: null, accuracy: null, pp: 30 },
  "Silberblick": { type: "Normal", power: null, accuracy: 100, pp: 30 },
  "Silberhauch": { type: "Käfer", power: 60, accuracy: 100, pp: 5 },
  "Slam": { type: "Normal", power: 80, accuracy: 75, pp: 20 },
  "Smog": { type: "Gift", power: 20, accuracy: 70, pp: 20 },
  "Solarstrahl": { type: "Pflanze", power: 120, accuracy: 100, pp: 10 },
  "Sonnentag": { type: "Feuer", power: null, accuracy: null, pp: 5 },
  "Spukball": { type: "Geist", power: 80, accuracy: 100, pp: 15 },
  "Stachelspore": { type: "Pflanze", power: null, accuracy: 75, pp: 30 },
  "Stahlflügel": { type: "Stahl", power: 70, accuracy: 90, pp: 25 },
  "Stampfer": { type: "Normal", power: 65, accuracy: 100, pp: 20 },
  "Stärke": { type: "Normal", power: 80, accuracy: 100, pp: 15 },
  "Steinhagel": { type: "Gestein", power: 75, accuracy: 90, pp: 10 },
  "Steinwurf": { type: "Gestein", power: 50, accuracy: 90, pp: 15 },
  "Sternschauer": { type: "Normal", power: 60, accuracy: null, pp: 20 },
  "Superschall": { type: "Normal", power: null, accuracy: 55, pp: 20 },
  "Surfer": { type: "Wasser", power: 95, accuracy: 100, pp: 15 },
  "Tackle": { type: "Normal", power: 35, accuracy: 95, pp: 35 },
  "Teleport": { type: "Psycho", power: null, accuracy: null, pp: 20 },
  "Tempohieb": { type: "Kampf", power: 40, accuracy: 100, pp: 30 },
  "Todeskuss": { type: "Normal", power: null, accuracy: 75, pp: 10 },
  "Toxin": { type: "Gift", power: null, accuracy: 85, pp: 10 },
  "Trugschlag": { type: "Normal", power: 40, accuracy: 100, pp: 40 },
  "Turbotempo": { type: "Normal", power: 80, accuracy: 100, pp: 5 },
  "Turmkick": { type: "Kampf", power: 85, accuracy: 90, pp: 20 },
  "Ultraschall": { type: "Normal", power: null, accuracy: 90, pp: 20 },
  "Verfolgung": { type: "Unlicht", power: 40, accuracy: 100, pp: 20 },
  "Wandler": { type: "Normal", power: null, accuracy: null, pp: 10 },
  "Weichei": { type: "Normal", power: null, accuracy: null, pp: 5 },
  "Weißnebel": { type: "Eis", power: null, accuracy: null, pp: 30 },
  "Zahltag": { type: "Normal", power: 40, accuracy: 100, pp: 20 },
  "Zerschneider": { type: "Normal", power: 50, accuracy: 95, pp: 30 }
};

const moveEnglishNames = {
  "Abgesang": "Perish Song",
  "Aero-Ass": "Aerial Ace",
  "Agilität": "Agility",
  "Aquaknarre": "Water Gun",
  "Aussetzer": "Disable",
  "Barriere": "Barrier",
  "Biss": "Bite",
  "Blättertanz": "Petal Dance",
  "Bodyslam": "Body Slam",
  "Bohrschnabel": "Drill Peck",
  "Donnerblitz": "Thunderbolt",
  "Donnerschlag": "Thunder Punch",
  "Donnerwelle": "Thunder Wave",
  "Doppelkick": "Double Kick",
  "Doppelteam": "Double Team",
  "Drachenklaue": "Dragon Claw",
  "Drachentanz": "Dragon Dance",
  "Drachenwut": "Dragon Rage",
  "Dreschflegel": "Flail",
  "Duonadel": "Twineedle",
  "Durchbruch": "Brick Break",
  "Egelsamen": "Leech Seed",
  "Eishieb": "Ice Punch",
  "Eisstrahl": "Ice Beam",
  "Erdbeben": "Earthquake",
  "Erholung": "Rest",
  "Explosion": "Explosion",
  "Fadenschuss": "String Shot",
  "Feuerschlag": "Fire Punch",
  "Feuerwirbel": "Fire Spin",
  "Flammenwurf": "Flamethrower",
  "Fliegen": "Fly",
  "Flügelschlag": "Wing Attack",
  "Fußkick": "Low Kick",
  "Gedankengut": "Calm Mind",
  "Geheimpower": "Secret Power",
  "Genesung": "Recover",
  "Geowurf": "Seismic Toss",
  "Gesang": "Sing",
  "Giftpuder": "Poison Powder",
  "Giftstachel": "Poison Sting",
  "Gigasauger": "Giga Drain",
  "Glut": "Ember",
  "Härtner": "Harden",
  "Hornattacke": "Horn Attack",
  "Hornbohrer": "Horn Drill",
  "Hyperzahn": "Hyper Fang",
  "Hypnose": "Hypnosis",
  "Intensität": "Magnitude",
  "Karateschlag": "Karate Chop",
  "Knochmerang": "Bonemerang",
  "Konfusion": "Confusion",
  "Konfusstrahl": "Confuse Ray",
  "Kopfnuss": "Headbutt",
  "Krabbhammer": "Crabhammer",
  "Kratzer": "Scratch",
  "Kreideschrei": "Screech",
  "Kreuzhieb": "Cross Chop",
  "Lichtschild": "Light Screen",
  "Matschbombe": "Sludge Bomb",
  "Metallklaue": "Metal Claw",
  "Metallsound": "Metal Sound",
  "Mondschein": "Moonlight",
  "Nachtnebel": "Night Shade",
  "Pikser": "Peck",
  "Pilzspore": "Spore",
  "Platscher": "Splash",
  "Protzer": "Bulk Up",
  "Psychokinese": "Psychic",
  "Rasierblatt": "Razor Leaf",
  "Rauchwolke": "Smokescreen",
  "Regentanz": "Rain Dance",
  "Rückkehr": "Return",
  "Ruckzuckhieb": "Quick Attack",
  "Sandwirbel": "Sand Attack",
  "Säure": "Acid",
  "Säurepanzer": "Acid Armor",
  "Schaufler": "Dig",
  "Schlafpuder": "Sleep Powder",
  "Schlitzer": "Slash",
  "Schutzschild": "Protect",
  "Schwerttanz": "Swords Dance",
  "Silberblick": "Leer",
  "Silberhauch": "Silver Wind",
  "Slam": "Slam",
  "Smog": "Smog",
  "Solarstrahl": "Solar Beam",
  "Sonnentag": "Sunny Day",
  "Spukball": "Shadow Ball",
  "Stachelspore": "Stun Spore",
  "Stahlflügel": "Steel Wing",
  "Stampfer": "Stomp",
  "Stärke": "Strength",
  "Steinhagel": "Rock Slide",
  "Steinwurf": "Rock Throw",
  "Sternschauer": "Swift",
  "Superschall": "Supersonic",
  "Surfer": "Surf",
  "Tackle": "Tackle",
  "Teleport": "Teleport",
  "Tempohieb": "Mach Punch",
  "Todeskuss": "Lovely Kiss",
  "Toxin": "Toxic",
  "Trugschlag": "False Swipe",
  "Turbotempo": "Extreme Speed",
  "Turmkick": "High Jump Kick",
  "Ultraschall": "Sonic Boom",
  "Verfolgung": "Pursuit",
  "Wandler": "Transform",
  "Weichei": "Soft-Boiled",
  "Weißnebel": "Mist",
  "Zahltag": "Pay Day",
  "Zerschneider": "Cut"
};

const itemEnglishNames = {
  Holzkohle: "Charcoal",
  Mystikwasser: "Mystic Water",
  Magnet: "Magnet",
  Wundersaat: "Miracle Seed",
  "Ewiges Eis": "Never-Melt Ice",
  "Krummlöffel": "Twisted Spoon",
  Drachenzahn: "Dragon Fang",
  Seidenschal: "Silk Scarf",
  Schwarzgurt: "Black Belt",
  Pudersand: "Soft Sand",
  Granitstein: "Hard Stone",
  Hackattack: "Sharp Beak",
  Silberstaub: "SilverPowder",
  Giftstich: "Poison Barb",
  Bannsticker: "Spell Tag",
  Überreste: "Leftovers",
  "Scope-Linse": "Scope Lens",
  "Typ-verstärkendes Item": "Type-boosting item",
  "Psycho-verstärkendes Item": "Psychic-boosting item"
};

const buildTextEnglish = {
  "Bulky Spezial-Angreifer": "Bulky Special Attacker",
  "Schneller Spezial-Angreifer": "Fast Special Attacker",
  "Spezial-Sweeper": "Special Sweeper",
  "Physischer Wallbreaker": "Physical Wallbreaker",
  "Physischer Sweeper": "Physical Sweeper",
  "Bulky Coverage-Angreifer": "Bulky Coverage Attacker",
  "Bulky Physischer Angreifer": "Bulky Physical Attacker",
  "Spezial-Angreifer": "Special Attacker",
  "Legendärer Spezial-Sweeper": "Legendary Special Sweeper",
  "Stabiler Story-Build: hält viel aus und gewinnt lange Kämpfe über Status und Heilung.": "Stable story build: takes hits well and wins long fights through status and healing.",
  "Sehr guter Story-Build: schnell, starker Feuer-STAB und genug Coverage für viele Trainer.": "Very good story build: fast, strong Fire STAB, and enough coverage for many trainers.",
  "Sicherer Story-Build: hält viel aus und nutzt Surfer und Eisstrahl mit starkem Sp. Angriff.": "Safe story build: bulky and uses Surf plus Ice Beam with strong Sp. Atk.",
  "Pikachu ist fragil, also zuerst zuschlagen oder Gegner paralysieren.": "Pikachu is fragile, so hit first or paralyze opponents.",
  "Raichu spielt sich wie Pikachu, aber deutlich stabiler und besser für die Story.": "Raichu plays like Pikachu, but is much sturdier and better for the story.",
  "Bedroher macht Arkani angenehm sicher. Feuer-Attacken sind in Gen 3 speziell, deshalb passt Sp. Angriff gut.": "Intimidate makes Arcanine comfortable and safe. Fire moves are special in Gen 3, so Sp. Atk fits well.",
  "Extrem stark, aber fragil. Gut spielen heißt: reinkommen, schneller sein, Druck machen.": "Extremely strong but fragile. Use it by switching in safely, moving first, and applying pressure.",
  "Langsam, aber sehr hart. Gute Wahl gegen Normal-, Gestein- und Eis-Pokémon.": "Slow, but hits very hard. A good pick against Normal, Rock, and Ice Pokemon.",
  "Gengar lebt von Tempo und Coverage. Schwebe gibt dir einen kostenlosen Boden-Switch.": "Gengar lives off Speed and coverage. Levitate gives you a free Ground switch-in.",
  "Guter Mix aus Schaden und Kontrolle. Besonders angenehm gegen Wasser- und Boden-Pokémon.": "Good mix of damage and control. Especially comfortable against Water and Ground Pokemon.",
  "Starmie ist eines der besten Story-Pokémon: schnell, stark und mit sehr guter Coverage.": "Starmie is one of the best story Pokemon: fast, strong, and has excellent coverage.",
  "Drachentanz macht Garados sehr gefährlich. Bedroher hilft beim sicheren Setup.": "Dragon Dance makes Gyarados very dangerous. Intimidate helps it set up safely.",
  "Lapras ist langsam, aber sehr verlässlich und trifft viele wichtige Gegner effektiv.": "Lapras is slow, but very reliable and hits many important opponents effectively.",
  "Blitza ist ein cleaner Speed-Pick. Sehr gut, wenn du schnell Druck machen willst.": "Jolteon is a clean Speed pick. Very good when you want immediate pressure.",
  "Relaxo ist langsam, aber unglaublich stabil. Perfekt, wenn du sichere Wechsel willst.": "Snorlax is slow, but incredibly sturdy. Perfect when you want safe switches.",
  "Zapdos ist stark und flexibel: guter Schaden, gute Defensive, starke Typenkombination.": "Zapdos is strong and flexible: good damage, good bulk, and a strong type combination.",
  "Dragoran spielt sich in der Story stark über Fliegen, Erdbeben und breite Coverage.": "Dragonite is strong in the story with Fly, Earthquake, and broad coverage.",
  "Mewtu ist absurd stark. Mit Gedankengut wird es schnell komplett außer Kontrolle.": "Mewtwo is absurdly strong. With Calm Mind, it can quickly get out of control.",
  "PvE-Empfehlung: Story-taugliche Attacken mit STAB, Coverage oder nützlichem Status.": "PvE recommendation: story-friendly moves with STAB, coverage, or useful status."
};

const variableDamageMoves = new Set(["Drachenwut", "Dreschflegel", "Fußkick", "Geowurf", "Hornbohrer", "Intensität", "Nachtnebel", "Rückkehr"]);

const bulkySpecialPokemonIds = new Set([
  1, 2, 3, 7, 8, 9, 35, 36, 39, 40, 43, 44, 45, 60, 61, 79, 80, 86, 87, 90, 91, 102, 103, 108, 113, 114, 131, 134, 137, 138, 139, 144
]);

const physicalRolePokemonIds = new Set([
  19, 20, 21, 22, 23, 24, 27, 28, 29, 30, 31, 32, 33, 34, 46, 47, 50, 51, 52, 53, 56, 57, 66, 67, 68, 74, 75, 76, 83, 84, 85, 88, 89, 95, 98, 99, 104, 105, 106, 107, 111, 112, 115, 123, 127, 128, 129, 130, 140, 141, 142, 143, 147, 148, 149
]);

const bulkyPhysicalPokemonIds = new Set([31, 34, 68, 76, 89, 95, 105, 111, 112, 115, 143]);

function getRecommendedTarget(types, id) {
  if (buildRecommendations[id]?.evs) return buildRecommendations[id].evs;
  if (customTargets[id]) return customTargets[id];
  if (bulkyPhysicalPokemonIds.has(id)) return bulkyPhysicalTarget;
  if (physicalRolePokemonIds.has(id)) return physicalFastTarget;
  if (bulkySpecialPokemonIds.has(id)) return bulkySpecialTarget;

  const hasSpecialType = specialMoveTypes.some((type) => types.includes(type));
  return hasSpecialType ? specialFastTarget : physicalFastTarget;
}

const kantoPokemon = [
  [1, "Bisasam", "Pflanze / Gift"],
  [2, "Bisaknosp", "Pflanze / Gift"],
  [3, "Bisaflor", "Pflanze / Gift"],
  [4, "Glumanda", "Feuer"],
  [5, "Glutexo", "Feuer"],
  [6, "Glurak", "Feuer / Flug"],
  [7, "Schiggy", "Wasser"],
  [8, "Schillok", "Wasser"],
  [9, "Turtok", "Wasser"],
  [10, "Raupy", "Käfer"],
  [11, "Safcon", "Käfer"],
  [12, "Smettbo", "Käfer / Flug"],
  [13, "Hornliu", "Käfer / Gift"],
  [14, "Kokuna", "Käfer / Gift"],
  [15, "Bibor", "Käfer / Gift"],
  [16, "Taubsi", "Normal / Flug"],
  [17, "Tauboga", "Normal / Flug"],
  [18, "Tauboss", "Normal / Flug"],
  [19, "Rattfratz", "Normal"],
  [20, "Rattikarl", "Normal"],
  [21, "Habitak", "Normal / Flug"],
  [22, "Ibitak", "Normal / Flug"],
  [23, "Rettan", "Gift"],
  [24, "Arbok", "Gift"],
  [25, "Pikachu", "Elektro"],
  [26, "Raichu", "Elektro"],
  [27, "Sandan", "Boden"],
  [28, "Sandamer", "Boden"],
  [29, "Nidoran♀", "Gift"],
  [30, "Nidorina", "Gift"],
  [31, "Nidoqueen", "Gift / Boden"],
  [32, "Nidoran♂", "Gift"],
  [33, "Nidorino", "Gift"],
  [34, "Nidoking", "Gift / Boden"],
  [35, "Piepi", "Normal"],
  [36, "Pixi", "Normal"],
  [37, "Vulpix", "Feuer"],
  [38, "Vulnona", "Feuer"],
  [39, "Pummeluff", "Normal"],
  [40, "Knuddeluff", "Normal"],
  [41, "Zubat", "Gift / Flug"],
  [42, "Golbat", "Gift / Flug"],
  [43, "Myrapla", "Pflanze / Gift"],
  [44, "Duflor", "Pflanze / Gift"],
  [45, "Giflor", "Pflanze / Gift"],
  [46, "Paras", "Käfer / Pflanze"],
  [47, "Parasek", "Käfer / Pflanze"],
  [48, "Bluzuk", "Käfer / Gift"],
  [49, "Omot", "Käfer / Gift"],
  [50, "Digda", "Boden"],
  [51, "Digdri", "Boden"],
  [52, "Mauzi", "Normal"],
  [53, "Snobilikat", "Normal"],
  [54, "Enton", "Wasser"],
  [55, "Entoron", "Wasser"],
  [56, "Menki", "Kampf"],
  [57, "Rasaff", "Kampf"],
  [58, "Fukano", "Feuer"],
  [59, "Arkani", "Feuer"],
  [60, "Quapsel", "Wasser"],
  [61, "Quaputzi", "Wasser"],
  [62, "Quappo", "Wasser / Kampf"],
  [63, "Abra", "Psycho"],
  [64, "Kadabra", "Psycho"],
  [65, "Simsala", "Psycho"],
  [66, "Machollo", "Kampf"],
  [67, "Maschock", "Kampf"],
  [68, "Machomei", "Kampf"],
  [69, "Knofensa", "Pflanze / Gift"],
  [70, "Ultrigaria", "Pflanze / Gift"],
  [71, "Sarzenia", "Pflanze / Gift"],
  [72, "Tentacha", "Wasser / Gift"],
  [73, "Tentoxa", "Wasser / Gift"],
  [74, "Kleinstein", "Gestein / Boden"],
  [75, "Georok", "Gestein / Boden"],
  [76, "Geowaz", "Gestein / Boden"],
  [77, "Ponita", "Feuer"],
  [78, "Gallopa", "Feuer"],
  [79, "Flegmon", "Wasser / Psycho"],
  [80, "Lahmus", "Wasser / Psycho"],
  [81, "Magnetilo", "Elektro / Stahl"],
  [82, "Magneton", "Elektro / Stahl"],
  [83, "Porenta", "Normal / Flug"],
  [84, "Dodu", "Normal / Flug"],
  [85, "Dodri", "Normal / Flug"],
  [86, "Jurob", "Wasser"],
  [87, "Jugong", "Wasser / Eis"],
  [88, "Sleima", "Gift"],
  [89, "Sleimok", "Gift"],
  [90, "Muschas", "Wasser"],
  [91, "Austos", "Wasser / Eis"],
  [92, "Nebulak", "Geist / Gift"],
  [93, "Alpollo", "Geist / Gift"],
  [94, "Gengar", "Geist / Gift"],
  [95, "Onix", "Gestein / Boden"],
  [96, "Traumato", "Psycho"],
  [97, "Hypno", "Psycho"],
  [98, "Krabby", "Wasser"],
  [99, "Kingler", "Wasser"],
  [100, "Voltobal", "Elektro"],
  [101, "Lektrobal", "Elektro"],
  [102, "Owei", "Pflanze / Psycho"],
  [103, "Kokowei", "Pflanze / Psycho"],
  [104, "Tragosso", "Boden"],
  [105, "Knogga", "Boden"],
  [106, "Kicklee", "Kampf"],
  [107, "Nockchan", "Kampf"],
  [108, "Schlurp", "Normal"],
  [109, "Smogon", "Gift"],
  [110, "Smogmog", "Gift"],
  [111, "Rihorn", "Boden / Gestein"],
  [112, "Rizeros", "Boden / Gestein"],
  [113, "Chaneira", "Normal"],
  [114, "Tangela", "Pflanze"],
  [115, "Kangama", "Normal"],
  [116, "Seeper", "Wasser"],
  [117, "Seemon", "Wasser"],
  [118, "Goldini", "Wasser"],
  [119, "Golking", "Wasser"],
  [120, "Sterndu", "Wasser"],
  [121, "Starmie", "Wasser / Psycho"],
  [122, "Pantimos", "Psycho"],
  [123, "Sichlor", "Käfer / Flug"],
  [124, "Rossana", "Eis / Psycho"],
  [125, "Elektek", "Elektro"],
  [126, "Magmar", "Feuer"],
  [127, "Pinsir", "Käfer"],
  [128, "Tauros", "Normal"],
  [129, "Karpador", "Wasser"],
  [130, "Garados", "Wasser / Flug"],
  [131, "Lapras", "Wasser / Eis"],
  [132, "Ditto", "Normal"],
  [133, "Evoli", "Normal"],
  [134, "Aquana", "Wasser"],
  [135, "Blitza", "Elektro"],
  [136, "Flamara", "Feuer"],
  [137, "Porygon", "Normal"],
  [138, "Amonitas", "Gestein / Wasser"],
  [139, "Amoroso", "Gestein / Wasser"],
  [140, "Kabuto", "Gestein / Wasser"],
  [141, "Kabutops", "Gestein / Wasser"],
  [142, "Aerodactyl", "Gestein / Flug"],
  [143, "Relaxo", "Normal"],
  [144, "Arktos", "Eis / Flug"],
  [145, "Zapdos", "Elektro / Flug"],
  [146, "Lavados", "Feuer / Flug"],
  [147, "Dratini", "Drache"],
  [148, "Dragonir", "Drache"],
  [149, "Dragoran", "Drache / Flug"],
  [150, "Mewtu", "Psycho"],
  [151, "Mew", "Psycho"]
];

const englishPokemonNames = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
  "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
  "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash",
  "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales",
  "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth",
  "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine",
  "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout",
  "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke",
  "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder",
  "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode",
  "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn",
  "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime",
  "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee",
  "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax",
  "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
];

const pokemon = kantoPokemon.map(([id, name, types], index) => ({
  id,
  name,
  nameEn: englishPokemonNames[index],
  types,
  target: { ...getRecommendedTarget(types, id) }
}));

const pokemonEvYields = {
  1: { spa: 1 }, 2: { spa: 1, spd: 1 }, 3: { spa: 2, spd: 1 }, 4: { spe: 1 }, 5: { spa: 1, spe: 1 },
  6: { spa: 3 }, 7: { def: 1 }, 8: { def: 1, spd: 1 }, 9: { spd: 3 }, 10: { hp: 1 },
  11: { def: 2 }, 12: { spa: 2, spd: 1 }, 13: { spe: 1 }, 14: { def: 2 }, 15: { atk: 2, spd: 1 },
  16: { spe: 1 }, 17: { spe: 2 }, 18: { spe: 3 }, 19: { spe: 1 }, 20: { spe: 2 },
  21: { spe: 1 }, 22: { spe: 2 }, 23: { atk: 1 }, 24: { atk: 2 }, 25: { spe: 2 },
  26: { spe: 3 }, 27: { def: 1 }, 28: { def: 2 }, 29: { hp: 1 }, 30: { hp: 2 },
  31: { hp: 3 }, 32: { atk: 1 }, 33: { atk: 2 }, 34: { atk: 3 }, 35: { hp: 2 },
  36: { hp: 3 }, 37: { spe: 1 }, 38: { spd: 1, spe: 1 }, 39: { hp: 2 }, 40: { hp: 3 },
  41: { spe: 1 }, 42: { spe: 2 }, 43: { spa: 1 }, 44: { spa: 2 }, 45: { spa: 3 },
  46: { atk: 1 }, 47: { atk: 2, def: 1 }, 48: { spd: 1 }, 49: { spa: 1, spe: 1 }, 50: { spe: 1 },
  51: { spe: 2 }, 52: { spe: 1 }, 53: { spe: 2 }, 54: { spa: 1 }, 55: { spa: 2 },
  56: { atk: 1 }, 57: { atk: 2 }, 58: { atk: 1 }, 59: { atk: 2 }, 60: { spe: 1 },
  61: { spe: 2 }, 62: { def: 3 }, 63: { spa: 1 }, 64: { spa: 2 }, 65: { spa: 3 },
  66: { atk: 1 }, 67: { atk: 2 }, 68: { atk: 3 }, 69: { atk: 1 }, 70: { atk: 2 },
  71: { atk: 3 }, 72: { spd: 1 }, 73: { spd: 2 }, 74: { def: 1 }, 75: { def: 2 },
  76: { def: 3 }, 77: { spe: 1 }, 78: { spe: 2 }, 79: { hp: 1 }, 80: { def: 2 },
  81: { spa: 1 }, 82: { spa: 2 }, 83: { atk: 1 }, 84: { atk: 1 }, 85: { atk: 2 },
  86: { spd: 1 }, 87: { spd: 2 }, 88: { hp: 1 }, 89: { hp: 1, atk: 1 }, 90: { def: 1 },
  91: { def: 2 }, 92: { spa: 1 }, 93: { spa: 2 }, 94: { spa: 3 }, 95: { def: 1 },
  96: { spd: 1 }, 97: { spd: 2 }, 98: { atk: 1 }, 99: { atk: 2 }, 100: { spe: 1 },
  101: { spe: 2 }, 102: { def: 1 }, 103: { spa: 2 }, 104: { def: 1 }, 105: { def: 2 },
  106: { atk: 2 }, 107: { spd: 2 }, 108: { hp: 2 }, 109: { def: 1 }, 110: { def: 2 },
  111: { def: 1 }, 112: { atk: 2 }, 113: { hp: 2 }, 114: { def: 1 }, 115: { hp: 2 },
  116: { spa: 1 }, 117: { def: 1, spa: 1 }, 118: { atk: 1 }, 119: { atk: 2 }, 120: { spe: 1 },
  121: { spe: 2 }, 122: { spd: 2 }, 123: { atk: 1 }, 124: { spa: 2 }, 125: { spe: 2 },
  126: { spa: 2 }, 127: { atk: 2 }, 128: { atk: 1, spe: 1 }, 129: { spe: 1 }, 130: { atk: 2 },
  131: { hp: 2 }, 132: { hp: 1 }, 133: { spd: 1 }, 134: { hp: 2 }, 135: { spe: 2 },
  136: { atk: 2 }, 137: { spa: 1 }, 138: { def: 1 }, 139: { def: 2 }, 140: { def: 1 },
  141: { atk: 2 }, 142: { spe: 2 }, 143: { hp: 2 }, 144: { spd: 3 }, 145: { spa: 3 },
  146: { spa: 3 }, 147: { atk: 1 }, 148: { atk: 2 }, 149: { atk: 3 }, 150: { spa: 3 },
  151: { hp: 3 }
};

const evDexEnemies = pokemon.map((entry) => ({
  name: entry.name,
  nameEn: entry.nameEn,
  stat: Object.keys(pokemonEvYields[entry.id])[0],
  ev: Object.values(pokemonEvYields[entry.id])[0],
  yields: pokemonEvYields[entry.id],
  place: "EV-Dex",
  placeEn: "EV Dex",
  note: "Alle Kanto-Pokémon"
}));

const htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

function clampLanguage(value) {
  return value === "en" ? "en" : "de";
}

function clampKnownValue(value, allowedValues, fallback) {
  return allowedValues.includes(value) ? value : fallback;
}

const itemGuide = [
  {
    category: "ev",
    method: "hidden",
    de: { name: "Machoband", location: "Vertania-Arena: nach Giovanni mit dem Itemfinder auf seinem Platz suchen.", effect: "Verdoppelt alle erhaltenen EVs, senkt im Kampf aber die Initiative des Trägers.", note: "Stackt mit Pokérus zu x4 EVs." },
    en: { name: "Macho Brace", location: "Viridian Gym: after Giovanni, use the Itemfinder on the exact spot where he stood.", effect: "Doubles all EVs gained, but lowers the holder's Speed in battle.", note: "Stacks with Pokerus for x4 EVs." }
  },
  {
    category: "ev",
    method: "gift",
    de: { name: "EP-Teiler", location: "Route 15: Professor Eichs Assistent im Obergeschoss, wenn du 50 Pokémon im Pokédex hast.", effect: "Pokémon bekommt EP und dadurch auch die EVs des besiegten Gegners.", note: "Gut, wenn ein schwaches Teammitglied EVs bekommen soll." },
    en: { name: "Exp. Share", location: "Route 15: Professor Oak's aide upstairs after you have 50 Pokemon registered.", effect: "The holder gains EXP and therefore also receives EVs from the defeated enemy.", note: "Good when a weaker team member should receive EVs." }
  },
  {
    category: "vitamin",
    method: "shop",
    stat: "hp",
    de: { name: "KP-Plus", location: "Prismania-Kaufhaus: im Vitamin-Shop kaufen.", effect: "+10 KP-EVs, solange der Stat noch unter der Vitamin-Grenze liegt.", note: "Spart frühes EV-Training." },
    en: { name: "HP Up", location: "Celadon Department Store: buy it in the vitamin shop.", effect: "+10 HP EVs while the stat is still below the vitamin limit.", note: "Saves early EV training time." }
  },
  {
    category: "vitamin",
    method: "shop",
    stat: "atk",
    de: { name: "Protein", location: "Prismania-Kaufhaus: im Vitamin-Shop kaufen.", effect: "+10 Angriffs-EVs, solange der Stat noch unter der Vitamin-Grenze liegt.", note: "Für physische Angreifer." },
    en: { name: "Protein", location: "Celadon Department Store: buy it in the vitamin shop.", effect: "+10 Attack EVs while the stat is still below the vitamin limit.", note: "For physical attackers." }
  },
  {
    category: "vitamin",
    method: "shop",
    stat: "def",
    de: { name: "Eisen", location: "Prismania-Kaufhaus: im Vitamin-Shop kaufen.", effect: "+10 Verteidigungs-EVs, solange der Stat noch unter der Vitamin-Grenze liegt.", note: "Für defensivere Builds." },
    en: { name: "Iron", location: "Celadon Department Store: buy it in the vitamin shop.", effect: "+10 Defense EVs while the stat is still below the vitamin limit.", note: "For bulkier builds." }
  },
  {
    category: "vitamin",
    method: "shop",
    stat: "spa",
    de: { name: "Kalzium", location: "Prismania-Kaufhaus: im Vitamin-Shop kaufen.", effect: "+10 Sp.-Angriffs-EVs, solange der Stat noch unter der Vitamin-Grenze liegt.", note: "Für Spezial-Angreifer." },
    en: { name: "Calcium", location: "Celadon Department Store: buy it in the vitamin shop.", effect: "+10 Sp. Atk EVs while the stat is still below the vitamin limit.", note: "For special attackers." }
  },
  {
    category: "vitamin",
    method: "shop",
    stat: "spd",
    de: { name: "Zink", location: "Prismania-Kaufhaus: im Vitamin-Shop kaufen.", effect: "+10 Sp.-Verteidigungs-EVs, solange der Stat noch unter der Vitamin-Grenze liegt.", note: "Nützlich für Tanks und Wasser/Eis-Matchups." },
    en: { name: "Zinc", location: "Celadon Department Store: buy it in the vitamin shop.", effect: "+10 Sp. Def EVs while the stat is still below the vitamin limit.", note: "Useful for tanks and Water/Ice matchups." }
  },
  {
    category: "vitamin",
    method: "shop",
    stat: "spe",
    de: { name: "Carbon", location: "Prismania-Kaufhaus: im Vitamin-Shop kaufen.", effect: "+10 Initiative-EVs, solange der Stat noch unter der Vitamin-Grenze liegt.", note: "Sehr gut für schnelle Story-Sweeper." },
    en: { name: "Carbos", location: "Celadon Department Store: buy it in the vitamin shop.", effect: "+10 Speed EVs while the stat is still below the vitamin limit.", note: "Very good for fast story sweepers." }
  },
  {
    category: "battle",
    method: "hidden",
    de: { name: "Überreste", location: "Route 12 und Route 16: mit Itemfinder an den Relaxo-Plätzen suchen.", effect: "Heilt jede Runde 1/16 der maximalen KP.", note: "Eines der besten Story-Items für lange Kämpfe." },
    en: { name: "Leftovers", location: "Route 12 and Route 16: use the Itemfinder on the Snorlax spots.", effect: "Restores 1/16 of max HP every turn.", note: "One of the best story items for long battles." }
  },
  {
    category: "utility",
    method: "gift",
    de: { name: "Münzamulett", location: "Route 16: Professor Eichs Assistent, wenn du 40 Pokémon im Pokédex hast.", effect: "Verdoppelt das Preisgeld, wenn der Träger am Kampf teilnimmt.", note: "Sehr gut, um Vitamine zu finanzieren." },
    en: { name: "Amulet Coin", location: "Route 16: Professor Oak's aide after you have 40 Pokemon registered.", effect: "Doubles prize money if the holder joins the battle.", note: "Great for funding vitamins." }
  },
  {
    category: "utility",
    method: "hidden",
    de: { name: "Sanftglocke", location: "Pokémon-Turm: mit Itemfinder an dem Ort suchen, an dem Mr. Fuji stand.", effect: "Erhöht Freundschaft schneller.", note: "Praktisch für Rückkehr." },
    en: { name: "Soothe Bell", location: "Pokemon Tower: use the Itemfinder where Mr. Fuji stood.", effect: "Raises friendship faster.", note: "Useful for Return." }
  },
  {
    category: "build",
    method: "thief",
    de: { name: "Schwarzgurt", location: "Mit Raub/Dieb von bestimmten Trainern, z.B. Kampf-Dojo, Vertania-Arena, Route 15, Kindle Road oder Siegesstraße.", effect: "Verstärkt Kampf-Attacken.", note: "Kein normaler Geschenk-Pickup. Vor dem Trainerkampf Dieb/Raub planen." },
    en: { name: "Black Belt", location: "Steal it with Thief/Covet from specific trainers, e.g. Fighting Dojo, Viridian Gym, Route 15, Kindle Road or Victory Road.", effect: "Boosts Fighting-type moves.", note: "Not a normal gift pickup. Plan Thief/Covet before the trainer battle." }
  },
  {
    category: "build",
    method: "overworld",
    de: { name: "Schattenglas", location: "Rocket-Versteck in Prismania City.", effect: "Verstärkt Unlicht-Attacken.", note: "Nützlich für Biss/Verfolgung-Coverage." },
    en: { name: "BlackGlasses", location: "Rocket Hideout in Celadon City.", effect: "Boosts Dark-type moves.", note: "Useful for Bite/Pursuit coverage." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Bannsticker", location: "Wildes Alpollo im Pokémon-Turm oder Lost Cave kann ihn selten tragen. Mit Raub/Dieb holen.", effect: "Verstärkt Geist-Attacken.", note: "Für Gengar/Alpollo mit Spukball." },
    en: { name: "Spell Tag", location: "Wild Haunter in Pokemon Tower or Lost Cave can rarely hold it. Take it with Thief/Covet.", effect: "Boosts Ghost-type moves.", note: "For Gengar/Haunter with Shadow Ball." }
  },
  {
    category: "build",
    method: "postgame",
    de: { name: "Metallmantel", location: "Eiland 5: Gedenksäule.", effect: "Verstärkt Stahl-Attacken.", note: "Auch wichtig für bestimmte Entwicklungen in späteren Games." },
    en: { name: "Metal Coat", location: "Five Island: Memorial Pillar.", effect: "Boosts Steel-type moves.", note: "Also important for certain evolutions in later games." }
  },
  {
    category: "build",
    method: "shop",
    de: { name: "Holzkohle", location: "Rocket-Spielhalle in Prismania City: gegen Münzen eintauschen.", effect: "Verstärkt Feuer-Attacken.", note: "Sehr passend für Glurak, Vulnona, Arkani und Lavados." },
    en: { name: "Charcoal", location: "Celadon Game Corner: exchange for coins.", effect: "Boosts Fire-type moves.", note: "Great for Charizard, Ninetales, Arcanine and Moltres." }
  },
  {
    category: "build",
    method: "shop",
    de: { name: "Mystikwasser", location: "Rocket-Spielhalle in Prismania City: gegen Münzen eintauschen.", effect: "Verstärkt Wasser-Attacken.", note: "Solide für Turtok, Lapras, Aquana und Starmie." },
    en: { name: "Mystic Water", location: "Celadon Game Corner: exchange for coins.", effect: "Boosts Water-type moves.", note: "Solid for Blastoise, Lapras, Vaporeon and Starmie." }
  },
  {
    category: "build",
    method: "shop",
    de: { name: "Wundersaat", location: "Rocket-Spielhalle in Prismania City: gegen Münzen eintauschen.", effect: "Verstärkt Pflanzen-Attacken.", note: "Gut für Bisaflor, Giflor, Sarzenia und Tangela." },
    en: { name: "Miracle Seed", location: "Celadon Game Corner: exchange for coins.", effect: "Boosts Grass-type moves.", note: "Good for Venusaur, Vileplume, Victreebel and Tangela." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Magnet", location: "Wildes Magneton kann ihn selten tragen.", effect: "Verstärkt Elektro-Attacken.", note: "Mit Raub/Dieb farmen. Stark für Pikachu, Raichu, Blitza und Zapdos." },
    en: { name: "Magnet", location: "Wild Magneton can rarely hold it.", effect: "Boosts Electric-type moves.", note: "Farm with Thief/Covet. Strong for Pikachu, Raichu, Jolteon and Zapdos." }
  },
  {
    category: "build",
    method: "overworld",
    de: { name: "Ewiges Eis", location: "Eiskaskadenhöhle auf Eiland 4; wildes Jugong kann es ebenfalls selten tragen.", effect: "Verstärkt Eis-Attacken.", note: "Gut für Lapras, Austos, Arktos und Eisstrahl-Nutzer." },
    en: { name: "NeverMeltIce", location: "Icefall Cave on Four Island; wild Dewgong can also rarely hold it.", effect: "Boosts Ice-type moves.", note: "Good for Lapras, Cloyster, Articuno and Ice Beam users." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Krummlöffel", location: "Wildes Abra oder Kadabra kann ihn selten tragen.", effect: "Verstärkt Psycho-Attacken.", note: "Sehr gut für Simsala, Starmie, Rossana, Mewtu und Mew." },
    en: { name: "TwistedSpoon", location: "Wild Abra or Kadabra can rarely hold it.", effect: "Boosts Psychic-type moves.", note: "Very good for Alakazam, Starmie, Jynx, Mewtwo and Mew." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Drachenzahn", location: "Wildes Dragonir kann ihn selten tragen.", effect: "Verstärkt Drachen-Attacken.", note: "Nischig, aber passend für Dragoran mit Drachenklaue." },
    en: { name: "Dragon Fang", location: "Wild Dragonair can rarely hold it.", effect: "Boosts Dragon-type moves.", note: "Niche, but fits Dragonite with Dragon Claw." }
  },
  {
    category: "build",
    method: "postgame",
    de: { name: "Seidenschal", location: "Lost Cave auf Eiland 5.", effect: "Verstärkt Normal-Attacken.", note: "Gut für Rückkehr, Stärke und Bodyslam." },
    en: { name: "Silk Scarf", location: "Lost Cave on Five Island.", effect: "Boosts Normal-type moves.", note: "Good for Return, Strength and Body Slam." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Giftstich", location: "Wildes Bibor oder Arbok kann ihn selten tragen.", effect: "Verstärkt Gift-Attacken.", note: "Für Arbok, Nidoking/Nidoqueen oder Giflor mit Matschbombe." },
    en: { name: "Poison Barb", location: "Wild Beedrill or Arbok can rarely hold it.", effect: "Boosts Poison-type moves.", note: "For Arbok, Nidoking/Nidoqueen or Vileplume with Sludge Bomb." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Pudersand", location: "Wildes Sandamer kann ihn selten tragen.", effect: "Verstärkt Boden-Attacken.", note: "Gut für Erdbeben-Nutzer wie Nidoking, Rizeros oder Dragoran." },
    en: { name: "Soft Sand", location: "Wild Sandslash can rarely hold it.", effect: "Boosts Ground-type moves.", note: "Good for Earthquake users like Nidoking, Rhydon or Dragonite." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Granitstein", location: "Wildes Georok oder Onix kann ihn selten tragen.", effect: "Verstärkt Gestein-Attacken.", note: "Passend für Aerodactyl, Rizeros, Geowaz und Kabutops." },
    en: { name: "Hard Stone", location: "Wild Graveler or Onix can rarely hold it.", effect: "Boosts Rock-type moves.", note: "Fits Aerodactyl, Rhydon, Golem and Kabutops." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Hackattack", location: "Wildes Ibitak, Dodri oder Panzaeron kann ihn selten tragen.", effect: "Verstärkt Flug-Attacken.", note: "Gut für Flug-STAB wie Fliegen oder Bohrschnabel." },
    en: { name: "Sharp Beak", location: "Wild Fearow, Dodrio or Skarmory can rarely hold it.", effect: "Boosts Flying-type moves.", note: "Good for Flying STAB like Fly or Drill Peck." }
  },
  {
    category: "build",
    method: "wild",
    de: { name: "Silberstaub", location: "Wildes Smettbo oder Omot kann ihn selten tragen.", effect: "Verstärkt Käfer-Attacken.", note: "Nischig, aber passend für Pinsir, Sichlor oder Omot." },
    en: { name: "SilverPowder", location: "Wild Butterfree or Venomoth can rarely hold it.", effect: "Boosts Bug-type moves.", note: "Niche, but fits Pinsir, Scyther or Venomoth." }
  },
  {
    category: "build",
    method: "postgame",
    de: { name: "Seerauch", location: "Lost Cave auf Eiland 5.", effect: "Verstärkt Wasser-Attacken leicht und wird für Azurill-Zucht genutzt.", note: "Mystikwasser ist für reinen Schaden meist die klarere Option." },
    en: { name: "Sea Incense", location: "Lost Cave on Five Island.", effect: "Slightly boosts Water-type moves and is used for Azurill breeding.", note: "Mystic Water is usually the clearer pure damage option." }
  },
  {
    category: "battle",
    method: "postgame",
    de: { name: "King-Stein", location: "Sevault Canyon auf Eiland 7; international auch als Mixed-Mode-Belohnung im Trainer-Turm.", effect: "Kann bei passenden Attacken Zurückschrecken auslösen.", note: "Der Sevault-Canyon-Fundort braucht Stärke und Zertrümmerer." },
    en: { name: "King's Rock", location: "Sevault Canyon on Seven Island; also an international Trainer Tower Mixed Mode reward.", effect: "Can make compatible damaging moves cause flinching.", note: "The Sevault Canyon pickup requires Strength and Rock Smash." }
  },
  {
    category: "battle",
    method: "postgame",
    de: { name: "Drachenhaut", location: "Water Path auf Eiland 6; international auch als Double-Mode-Belohnung im Trainer-Turm.", effect: "Entwicklungsitem für Seemon in späteren Games.", note: "Der Water-Path-Fundort braucht Surfer." },
    en: { name: "Dragon Scale", location: "Water Path on Six Island; also an international Trainer Tower Double Mode reward.", effect: "Evolution item for Seadra in later games.", note: "The Water Path pickup requires Surf." }
  },
  {
    category: "battle",
    method: "trainerTower",
    de: { name: "Scope-Linse", location: "Japanische Trainer-Turm/e-Reader-Inhalte oder per Tausch aus anderen Gen-3-Spielen.", effect: "Erhöht die Volltrefferquote.", note: "In normalen internationalen FR/BG-Spielständen nicht zuverlässig frei verfügbar." },
    en: { name: "Scope Lens", location: "Japanese Trainer Tower/e-Reader content or trade from other Gen 3 games.", effect: "Raises critical-hit ratio.", note: "Not reliably available in normal international FR/LG saves." }
  },
  {
    category: "battle",
    method: "wild",
    de: { name: "Fokus-Band", location: "Wildes Maschock kann es selten tragen; japanische Trainer-Turm/e-Reader-Inhalte sind eine weitere Spezialquelle.", effect: "Kann den Träger mit 1 KP überleben lassen.", note: "Glücksitem, eher Spielerei als verlässlicher Build." },
    en: { name: "Focus Band", location: "Wild Machoke can rarely hold it; Japanese Trainer Tower/e-Reader content is another special source.", effect: "May let the holder survive with 1 HP.", note: "Luck-based, more gimmick than reliable build." }
  },
  {
    category: "battle",
    method: "trainerTower",
    de: { name: "Blendpuder", location: "Japanische Trainer-Turm/e-Reader-Inhalte oder per Tausch aus anderen Gen-3-Spielen.", effect: "Senkt die gegnerische Genauigkeit leicht.", note: "Nützlich auf defensiven Pokémon, aber nicht einfach normal erhältlich." },
    en: { name: "BrightPowder", location: "Japanese Trainer Tower/e-Reader content or trade from other Gen 3 games.", effect: "Slightly lowers the opponent's accuracy.", note: "Useful on defensive Pokemon, but not normally easy to obtain." }
  },
  {
    category: "utility",
    method: "shop",
    de: { name: "Rauchball", location: "Rocket-Spielhalle in Prismania City: gegen Münzen eintauschen.", effect: "Erlaubt Flucht aus wilden Kämpfen.", note: "Praktisch beim Reisen und Farmen." },
    en: { name: "Smoke Ball", location: "Celadon Game Corner: exchange for coins.", effect: "Allows escape from wild battles.", note: "Useful while traveling and farming." }
  },
  {
    category: "utility",
    method: "overworld",
    de: { name: "Schutzband", location: "Pokémon-Turm.", effect: "Reduziert wilde Begegnungen, wenn der Träger vorne im Team ist.", note: "Gut, wenn du durch Höhlen/Routen willst ohne dauernde Kämpfe." },
    en: { name: "Cleanse Tag", location: "Pokemon Tower.", effect: "Reduces wild encounters if the holder leads the party.", note: "Good when you want to move through caves/routes with fewer battles." }
  },
  {
    category: "utility",
    method: "postgame",
    de: { name: "Laxrauch", location: "Lost Cave auf Eiland 5.", effect: "Senkt die gegnerische Genauigkeit leicht und wird für Isso-Zucht genutzt.", note: "Defensives Utility-Item." },
    en: { name: "Lax Incense", location: "Lost Cave on Five Island.", effect: "Slightly lowers the opponent's accuracy and is used for Wynaut breeding.", note: "Defensive utility item." }
  },
  {
    category: "berry",
    method: "hidden",
    de: { name: "Prunusbeere", location: "Versteckt auf Route 8, im Beerenforst und auf Route 23.", effect: "Heilt jedes große Statusproblem einmal automatisch.", note: "Eine der besten allgemeinen Story-Beeren." },
    en: { name: "Lum Berry", location: "Hidden on Route 8, in Berry Forest, and on Route 23.", effect: "Automatically cures any major status condition once.", note: "One of the best general story Berries." }
  },
  {
    category: "berry",
    method: "hidden",
    de: { name: "Jonagobeere", location: "Versteckt auf Route 8, Route 23 und Eiland 6.", effect: "Stellt 10 AP einer Attacke wieder her.", note: "Nützlich vor Top Vier oder langen Höhlen." },
    en: { name: "Leppa Berry", location: "Hidden on Route 8, Route 23, and Six Island.", effect: "Restores 10 PP to one move.", note: "Useful before the Elite Four or long caves." }
  },
  {
    category: "berry",
    method: "pickup",
    de: { name: "Sinelbeere", location: "Versteckte Beerenstellen auf frühen Routen; außerdem über Mitnahme und wilde Rattikarl/Pummeluff.", effect: "Heilt 10 KP automatisch, wenn die KP niedrig sind.", note: "Frühes Spiel, später eher schwach." },
    en: { name: "Oran Berry", location: "Hidden Berry spots on early routes; also via Pickup and wild Raticate/Jigglypuff.", effect: "Automatically restores 10 HP when HP is low.", note: "Early game item, later rather weak." }
  },
  {
    category: "berry",
    method: "hidden",
    de: { name: "Tsitrubeere", location: "Versteckt auf Route 6, Route 23 und bei der Gedenksäule; wildes Rattikarl kann sie selten tragen.", effect: "Heilt 30 KP automatisch, wenn die KP niedrig sind.", note: "Besser als Sinelbeere für Story-Kämpfe." },
    en: { name: "Sitrus Berry", location: "Hidden on Route 6, Route 23, and Memorial Pillar; wild Raticate can rarely hold it.", effect: "Automatically restores 30 HP when HP is low.", note: "Better than Oran Berry for story battles." }
  },
  {
    category: "berry",
    method: "pickup",
    de: { name: "Maronbeere", location: "Versteckte Beerenstellen, Mitnahme oder wildes Relaxo.", effect: "Heilt Schlaf automatisch.", note: "Gut gegen Schlafpuder/Hypnose." },
    en: { name: "Chesto Berry", location: "Hidden Berry spots, Pickup, or wild Snorlax.", effect: "Automatically cures sleep.", note: "Good against Sleep Powder/Hypnosis." }
  },
  {
    category: "berry",
    method: "pickup",
    de: { name: "Pirsifbeere", location: "Versteckte Beerenstellen oder Mitnahme.", effect: "Heilt Vergiftung automatisch.", note: "Nützlich in Gift-Routen und gegen Team Rocket." },
    en: { name: "Pecha Berry", location: "Hidden Berry spots or Pickup.", effect: "Automatically cures poison.", note: "Useful on poison-heavy routes and against Team Rocket." }
  }
];

const locationGuide = [
  {
    stage: "01",
    tags: ["story", "ev"],
    de: {
      place: "Alabastia -> Route 1 -> Vertania City",
      when: "Start bis erster Besuch in Vertania City.",
      action: "Wenn du schon Initiative-EVs möchtest: Rattfratz auf Route 1 zählen.",
      items: ["Rattfratz: +1 Initiative-EV", "Frühe Route für Training ohne Umwege"],
      tip: "Für die Story kannst du hier einfach normal spielen; gezieltes EV-Training lohnt sich meist erst, wenn du dein Team kennst."
    },
    en: {
      place: "Pallet Town -> Route 1 -> Viridian City",
      when: "Start through your first Viridian City visit.",
      action: "If you already want Speed EVs, count Rattata on Route 1.",
      items: ["Rattata: +1 Speed EV", "Early route for training without detours"],
      tip: "For the story, playing normally is fine here; focused EV training is usually better once your team is decided."
    }
  },
  {
    stage: "02",
    tags: ["story", "ev"],
    de: {
      place: "Route 2 und Vertania-Wald",
      when: "Nach dem Paket für Professor Eich.",
      action: "Raupy ist dein früher KP-Trainingsgegner, bevor du Richtung Marmoria gehst.",
      items: ["Raupy: +1 KP-EV", "Hornliu/Kokuna vermeiden, wenn du nur KP willst"],
      tip: "Nach jedem besiegten Raupy in der App Raupy anklicken, dann bleibt dein EV-Zähler sauber."
    },
    en: {
      place: "Route 2 and Viridian Forest",
      when: "After delivering Oak's Parcel.",
      action: "Caterpie is your early HP training target before Pewter City.",
      items: ["Caterpie: +1 HP EV", "Avoid Weedle/Kakuna if you only want HP"],
      tip: "After each defeated Caterpie, tap Caterpie in the app so your EV count stays clean."
    }
  },
  {
    stage: "03",
    tags: ["story", "ev", "hidden"],
    de: {
      place: "Marmoria City -> Route 3",
      when: "Nach Rocko, auf dem Weg zum Mondberg.",
      action: "Pummeluff ist früh gut für KP, wenn du mehr als +1 pro Kampf willst.",
      items: ["Pummeluff: +2 KP-EVs", "Versteckte frühe Beeren auf Routen mit dem Itemfinder später nachprüfen"],
      tip: "KP-Training hier ist bequem, aber stoppe rechtzeitig, wenn dein Build nur 4 KP-EVs braucht."
    },
    en: {
      place: "Pewter City -> Route 3",
      when: "After Brock, on the way to Mt. Moon.",
      action: "Jigglypuff is good early HP training if you want more than +1 per battle.",
      items: ["Jigglypuff: +2 HP EVs", "Recheck early hidden Berry spots later with the Itemfinder"],
      tip: "HP training is convenient here, but stop early if your build only needs 4 HP EVs."
    }
  },
  {
    stage: "04",
    tags: ["story", "ev"],
    de: {
      place: "Mondberg",
      when: "Vor Azuria City.",
      action: "Zubat für Initiative und Kleinstein für Verteidigung sind hier früh erreichbar.",
      items: ["Zubat: +1 Initiative-EV", "Kleinstein: +1 Verteidigungs-EV"],
      tip: "In Höhlen entstehen schnell falsche EVs. Wenn du exakt trainierst, fliehe vor allem, was nicht dein Zielwert ist."
    },
    en: {
      place: "Mt. Moon",
      when: "Before Cerulean City.",
      action: "Zubat for Speed and Geodude for Defense are available early here.",
      items: ["Zubat: +1 Speed EV", "Geodude: +1 Defense EV"],
      tip: "Caves can add unwanted EVs quickly. If you train precisely, run from anything that is not your target stat."
    }
  },
  {
    stage: "05",
    tags: ["story", "ev", "wild"],
    de: {
      place: "Azuria City -> Nugget-Brücke -> Route 24 / 25",
      when: "Nach Mondberg und vor Bills Haus.",
      action: "Abra ist der frühe Spezial-Angriff-Spot. Später kann Abra/Kadabra auch Krummlöffel tragen.",
      items: ["Abra: +1 Sp.-Angriffs-EV", "Krummlöffel-Farm später mit Raub/Dieb möglich"],
      tip: "Abra flieht gerne. Für EVs zählt nur, wenn du es wirklich besiegst."
    },
    en: {
      place: "Cerulean City -> Nugget Bridge -> Route 24 / 25",
      when: "After Mt. Moon and before Bill's house.",
      action: "Abra is the early Special Attack spot. Later Abra/Kadabra can also hold TwistedSpoon.",
      items: ["Abra: +1 Sp. Atk EV", "TwistedSpoon farm later with Thief/Covet"],
      tip: "Abra likes to flee. EVs only count if you actually defeat it."
    }
  },
  {
    stage: "06",
    tags: ["story", "ev"],
    de: {
      place: "Route 5 / 6 und Orania City",
      when: "Nach Bill, wenn du durch das Haus mit dem gegrabenen Loch kommst.",
      action: "Myrapla ist hier eine weitere frühe Spezial-Angriff-Option.",
      items: ["Myrapla: +1 Sp.-Angriffs-EV", "Route 6 bringt dich direkt Richtung Hafen / M.S. Anne"],
      tip: "Wenn du schon Spezial-Angriff planst, kannst du Route 5 / 6 in deine Story-Routine einbauen."
    },
    en: {
      place: "Route 5 / 6 and Vermilion City",
      when: "After Bill, once you pass through the burgled house.",
      action: "Oddish is another early Special Attack option here.",
      items: ["Oddish: +1 Sp. Atk EV", "Route 6 leads straight toward the harbor / S.S. Anne"],
      tip: "If you already plan Special Attack, build Route 5 / 6 into your story routine."
    }
  },
  {
    stage: "07",
    tags: ["story", "ev"],
    de: {
      place: "Route 11 und Digda-Höhle",
      when: "Vor oder nach Major Bob.",
      action: "Drowzee trainiert Spezial-Verteidigung, Digda gibt Initiative und Digdri starke Initiative.",
      items: ["Drowzee: +1 Sp.-Verteidigungs-EV", "Digda: +1 Initiative-EV", "Digdri: +2 Initiative-EVs"],
      tip: "Route 11 ist praktisch, wenn du Spezial-Verteidigung brauchst, ohne später lange zu suchen."
    },
    en: {
      place: "Route 11 and Diglett's Cave",
      when: "Before or after Lt. Surge.",
      action: "Drowzee trains Special Defense, Diglett gives Speed, and Dugtrio gives strong Speed EVs.",
      items: ["Drowzee: +1 Sp. Def EV", "Diglett: +1 Speed EV", "Dugtrio: +2 Speed EVs"],
      tip: "Route 11 is useful if you need Special Defense without searching much later."
    }
  },
  {
    stage: "08",
    tags: ["story", "ev", "wild"],
    de: {
      place: "Felstunnel und Route 10",
      when: "Auf dem Weg nach Lavandia.",
      action: "Machollo trainiert Angriff, Onix Verteidigung. Georok/Onix können später Granitstein tragen.",
      items: ["Machollo: +1 Angriffs-EV", "Onix: +1 Verteidigungs-EV", "Granitstein-Farm mit Raub/Dieb möglich"],
      tip: "Gut für physische Pokémon, aber mische Angriff und Verteidigung nicht aus Versehen."
    },
    en: {
      place: "Rock Tunnel and Route 10",
      when: "On the way to Lavender Town.",
      action: "Machop trains Attack, Onix trains Defense. Graveler/Onix can later hold Hard Stone.",
      items: ["Machop: +1 Attack EV", "Onix: +1 Defense EV", "Hard Stone farm with Thief/Covet"],
      tip: "Good for physical Pokemon, but do not accidentally mix Attack and Defense."
    }
  },
  {
    stage: "09",
    tags: ["story", "hidden"],
    de: {
      place: "Lavandia -> Route 8 / 7 -> Prismania City",
      when: "Nach dem Felstunnel, bevor du Team Rocket in Prismania angehst.",
      action: "Route 8 hat versteckte Beeren; danach kommst du nach Prismania für Items und Story.",
      items: ["Route 8: versteckte Beeren mit Zerschneider erreichbar", "Übergang nach Prismania"],
      tip: "Lavandia-Turm erst später vollständig machen, weil du das Silph Scope aus Prismania brauchst."
    },
    en: {
      place: "Lavender Town -> Route 8 / 7 -> Celadon City",
      when: "After Rock Tunnel, before handling Team Rocket in Celadon.",
      action: "Route 8 has hidden Berries; then you reach Celadon for items and story.",
      items: ["Route 8: hidden Berries reachable with Cut", "Route into Celadon"],
      tip: "Finish Pokemon Tower later because you need the Silph Scope from Celadon."
    }
  },
  {
    stage: "10",
    tags: ["story", "build", "important"],
    de: {
      place: "Prismania City: Kaufhaus und Rocket-Spielhalle",
      when: "Sobald du Prismania erreichst.",
      action: "Hier bekommst du Vitamine und mehrere Typ-Items gegen Münzen.",
      items: ["KP-Plus / Protein / Eisen / Kalzium / Zink / Carbon", "Holzkohle", "Mystikwasser", "Wundersaat", "Rauchball"],
      tip: "Wenn du Geld hast: Vitamine sparen echte Trainingskämpfe. Typ-Items passen direkt zu deinem STAB."
    },
    en: {
      place: "Celadon City: Department Store and Game Corner",
      when: "As soon as you reach Celadon.",
      action: "This is where you get vitamins and several type-boosting items for coins.",
      items: ["HP Up / Protein / Iron / Calcium / Zinc / Carbos", "Charcoal", "Mystic Water", "Miracle Seed", "Smoke Ball"],
      tip: "If you have money, vitamins save real training battles. Type items fit your STAB directly."
    }
  },
  {
    stage: "11",
    tags: ["story", "build"],
    de: {
      place: "Rocket-Versteck in Prismania",
      when: "Während der Team-Rocket-Story in Prismania.",
      action: "Schattenglas ist hier das wichtige Build-Item für Unlicht-Coverage.",
      items: ["Schattenglas"],
      tip: "Mitnehmen, wenn du Biss oder Verfolgung als Coverage nutzt."
    },
    en: {
      place: "Rocket Hideout in Celadon",
      when: "During the Team Rocket story in Celadon.",
      action: "BlackGlasses is the important build item here for Dark coverage.",
      items: ["BlackGlasses"],
      tip: "Pick it up if you use Bite or Pursuit as coverage."
    }
  },
  {
    stage: "12",
    tags: ["story", "build", "hidden", "wild"],
    de: {
      place: "Pokémon-Turm in Lavandia",
      when: "Nach dem Rocket-Versteck, sobald du das Silph Scope hast.",
      action: "Nebulak ist konstant für Spezial-Angriff. Schutzband liegt im Turm; Sanftglocke ist versteckt bei Mr. Fujis Stelle.",
      items: ["Nebulak: +1 Sp.-Angriffs-EV", "Schutzband", "Sanftglocke versteckt", "Alpollo kann Bannsticker tragen"],
      tip: "Merke dir Mr. Fujis Standpunkt. Mit Itemfinder später exakt dort suchen."
    },
    en: {
      place: "Pokemon Tower in Lavender Town",
      when: "After Rocket Hideout, once you have the Silph Scope.",
      action: "Gastly is consistent Special Attack training. Cleanse Tag is in the tower; Soothe Bell is hidden where Mr. Fuji stood.",
      items: ["Gastly: +1 Sp. Atk EV", "Cleanse Tag", "Hidden Soothe Bell", "Haunter can hold Spell Tag"],
      tip: "Remember Mr. Fuji's exact spot. Use the Itemfinder there later."
    }
  },
  {
    stage: "13",
    tags: ["story", "build"],
    de: {
      place: "Saffronia City: Silph Co. und Kampf-Dojo",
      when: "Nach Pokémon-Turm / Pokéflöte, wenn Saffronia frei wird.",
      action: "Schwarzgurt kann über Raub/Dieb von bestimmten Kampf-Trainern geplant werden.",
      items: ["Schwarzgurt per Raub/Dieb von ausgewählten Trainern", "Story-Fortschritt für Saffronia-Arena"],
      tip: "Wenn du Schwarzgurt willst, plane Raub/Dieb vor dem Trainerkampf, sonst ist die Chance weg."
    },
    en: {
      place: "Saffron City: Silph Co. and Fighting Dojo",
      when: "After Pokemon Tower / Poke Flute, once Saffron opens.",
      action: "Black Belt can be planned with Thief/Covet from specific Fighting-type trainers.",
      items: ["Black Belt via Thief/Covet from selected trainers", "Story progress for Saffron Gym"],
      tip: "If you want Black Belt, plan Thief/Covet before the trainer battle or the chance is gone."
    }
  },
  {
    stage: "14",
    tags: ["story", "ev", "hidden", "important"],
    de: {
      place: "Route 16 / 17 / 18 und Radweg",
      when: "Mit Pokéflöte oder über Prismania-Zugang.",
      action: "Zweiter Relaxo-Platz gibt Überreste. Professor Eichs Assistent auf Route 16 gibt Münzamulett bei 40 Pokédex-Einträgen.",
      items: ["Überreste versteckt bei Relaxo Route 16", "Münzamulett", "Habitak: +1 Initiative-EV"],
      tip: "Das Münzamulett finanziert später Vitamine, also lohnt sich der Abstecher."
    },
    en: {
      place: "Route 16 / 17 / 18 and Cycling Road",
      when: "With the Poke Flute or from the Celadon side.",
      action: "The second Snorlax spot gives Leftovers. Oak's aide on Route 16 gives Amulet Coin at 40 Pokedex entries.",
      items: ["Hidden Leftovers at Route 16 Snorlax spot", "Amulet Coin", "Spearow: +1 Speed EV"],
      tip: "Amulet Coin funds later vitamins, so the detour is worth it."
    }
  },
  {
    stage: "15",
    tags: ["story", "important"],
    de: {
      place: "Fuchsania City und Safari-Zone",
      when: "Nachdem du über den Radweg oder die Küstenroute Fuchsania erreichst.",
      action: "Story-Pflicht für Surfer; danach werden Wasser-Trainingsorte viel besser erreichbar.",
      items: ["Surfer für neue Trainingswege", "Goldzähne", "Quick Claw in der Safari-Zone"],
      tip: "Nach Surfer kannst du Spezial-Verteidigung mit Tentacha auf Wasserwegen sehr bequem trainieren."
    },
    en: {
      place: "Fuchsia City and Safari Zone",
      when: "After reaching Fuchsia via Cycling Road or the coast route.",
      action: "Required for Surf; afterward, water training routes become much easier to reach.",
      items: ["Surf for new training paths", "Gold Teeth", "Quick Claw in the Safari Zone"],
      tip: "After Surf, Tentacool makes Special Defense training on water routes very convenient."
    }
  },
  {
    stage: "16",
    tags: ["story", "hidden", "important", "build"],
    de: {
      place: "Route 12 / 13 / 14 / 15",
      when: "Nach Pokéflöte und Fuchsania, bevor du Richtung Kraftwerk/Meer weitergehst.",
      action: "Am Relaxo-Platz auf Route 12 liegt Überreste versteckt. Route 15 gibt den EP-Teiler.",
      items: ["Überreste versteckt bei Relaxo Route 12", "EP-Teiler auf Route 15 bei 50 Pokédex-Einträgen", "Route 15 kann Schwarzgurt-Dieb-Targets haben"],
      tip: "Bei Relaxo nicht einfach weiterlaufen: nach dem Kampf mit Itemfinder auf dem Platz suchen."
    },
    en: {
      place: "Route 12 / 13 / 14 / 15",
      when: "After the Poke Flute and Fuchsia, before moving toward Power Plant or the sea.",
      action: "The Route 12 Snorlax spot hides Leftovers. Route 15 gives the Exp. Share.",
      items: ["Hidden Leftovers at Route 12 Snorlax spot", "Exp. Share on Route 15 with 50 Pokedex entries", "Route 15 can have Black Belt Thief targets"],
      tip: "Do not just walk away after Snorlax: use the Itemfinder on the exact spot."
    }
  },
  {
    stage: "17",
    tags: ["story", "ev", "build", "wild"],
    de: {
      place: "Kraftwerk, Route 19 / 20 und Seeschauminseln",
      when: "Nach Surfer, vor oder während des Wegs zur Zinnoberinsel.",
      action: "Tentacha ist sehr häufig für Spezial-Verteidigung; im Kraftwerk kannst du später Magnet farmen.",
      items: ["Tentacha: +1 Sp.-Verteidigungs-EV", "Flegmon: +1 KP-EV", "Jurob: +1 Sp.-Verteidigungs-EV", "Magneton kann Magnet tragen"],
      tip: "Wasserwege sind super für Spezial-Verteidigung, aber achte auf gemischte Begegnungen."
    },
    en: {
      place: "Power Plant, Route 19 / 20 and Seafoam Islands",
      when: "After Surf, before or during the route to Cinnabar Island.",
      action: "Tentacool is very common for Special Defense; at Power Plant you can later farm Magnet.",
      items: ["Tentacool: +1 Sp. Def EV", "Slowpoke: +1 HP EV", "Seel: +1 Sp. Def EV", "Magneton can hold Magnet"],
      tip: "Water routes are great for Special Defense, but watch out for mixed encounters."
    }
  },
  {
    stage: "18",
    tags: ["story"],
    de: {
      place: "Zinnoberinsel, Pokémon-Haus und Route 21",
      when: "Vor Pyro und vor der letzten Arena.",
      action: "Story-Ort für Schlüssel und Fortschritt; EV-Training hier nur, wenn es zu deinem Build passt.",
      items: ["Geheimer Schlüssel", "Story-Fortschritt Richtung Vertania-Arena"],
      tip: "Für exakte EVs lieber nicht blind alles besiegen, wenn dein Ziel fast voll ist."
    },
    en: {
      place: "Cinnabar Island, Pokemon Mansion and Route 21",
      when: "Before Blaine and before the final Gym.",
      action: "Story location for the key and progress; train EVs here only if it fits your build.",
      items: ["Secret Key", "Story progress toward Viridian Gym"],
      tip: "For exact EVs, avoid blindly defeating everything if your target is almost done."
    }
  },
  {
    stage: "19",
    tags: ["story", "hidden"],
    de: {
      place: "Eiland 1 / 2 / 3 und Beerenforst",
      when: "Direkt nach Pyro, wenn Bill dich auf die Sevii Islands mitnimmt.",
      action: "Story-Inseltrip und guter Moment, Beerenforst als späteren Beeren-Ort zu merken.",
      items: ["Beerenforst: viele versteckte Beeren", "Kindle Road / Glutberg für Story-Fortschritt"],
      tip: "Der Beerenforst kann nach vielen Schritten wieder Beeren geben, also lohnt sich später ein Kontrollgang."
    },
    en: {
      place: "One Island / Two Island / Three Island and Berry Forest",
      when: "Right after Blaine, when Bill takes you to the Sevii Islands.",
      action: "Story island trip and a good time to remember Berry Forest as a later Berry spot.",
      items: ["Berry Forest: many hidden Berries", "Kindle Road / Mt. Ember for story progress"],
      tip: "Berry Forest can regenerate Berries after many steps, so checking it later is worth it."
    }
  },
  {
    stage: "20",
    tags: ["story", "hidden", "important"],
    de: {
      place: "Vertania-Arena",
      when: "Nach sieben Orden, nach Giovanni.",
      action: "Machoband ist versteckt auf Giovannis Platz. Das ist das wichtigste EV-Item im normalen Durchlauf.",
      items: ["Machoband versteckt mit Itemfinder", "Stackt mit Pokérus zu x4"],
      tip: "Direkt nach Giovanni speichern oder merken: auf seinem exakten Standpunkt Itemfinder benutzen."
    },
    en: {
      place: "Viridian Gym",
      when: "After seven Badges, after Giovanni.",
      action: "Macho Brace is hidden on Giovanni's spot. This is the most important EV item in a normal playthrough.",
      items: ["Hidden Macho Brace with Itemfinder", "Stacks with Pokerus for x4"],
      tip: "Right after Giovanni, remember the exact tile and use the Itemfinder there."
    }
  },
  {
    stage: "21",
    tags: ["story", "build", "hidden"],
    de: {
      place: "Route 22 / 23 und Siegesstraße",
      when: "Nach dem achten Orden, vor der Liga.",
      action: "Letzter Story-Block vor der Top Vier; auf Route 23 liegen nützliche versteckte Beeren, Siegesstraße hat weitere Trainer-Dieb-Chancen.",
      items: ["Versteckte Beeren auf Route 23", "Schwarzgurt per Raub/Dieb bei passenden Trainern möglich"],
      tip: "Vor der Liga EVs kontrollieren: wenn du bei 510 bist, nichts mehr planlos besiegen."
    },
    en: {
      place: "Route 22 / 23 and Victory Road",
      when: "After the eighth Badge, before the League.",
      action: "Last story block before the Elite Four; Route 23 has useful hidden Berries, Victory Road has more trainer Thief chances.",
      items: ["Hidden Berries on Route 23", "Black Belt via Thief/Covet from fitting trainers"],
      tip: "Before the League, check EVs: if you are at 510, stop defeating random Pokemon."
    }
  },
  {
    stage: "22",
    tags: ["postgame", "build", "wild"],
    de: {
      place: "Eiland 4: Eiskaskadenhöhle",
      when: "Postgame auf den Sevii Islands.",
      action: "Ewiges Eis ist hier wichtig für Eis-Builds. Jugong kann es ebenfalls selten tragen.",
      items: ["Ewiges Eis", "Jugong-Farm für Ewiges Eis"],
      tip: "Für Lapras, Austos, Arktos oder Eisstrahl-Nutzer ist das dein Eis-Item-Spot."
    },
    en: {
      place: "Four Island: Icefall Cave",
      when: "Postgame on the Sevii Islands.",
      action: "NeverMeltIce is important here for Ice builds. Dewgong can also rarely hold it.",
      items: ["NeverMeltIce", "Dewgong farm for NeverMeltIce"],
      tip: "For Lapras, Cloyster, Articuno or Ice Beam users, this is your Ice item spot."
    }
  },
  {
    stage: "23",
    tags: ["postgame", "build"],
    de: {
      place: "Eiland 5: Gedenksäule",
      when: "Postgame, wenn Eiland 5 frei ist.",
      action: "Metallmantel ist das relevante Stahl-Item.",
      items: ["Metallmantel"],
      tip: "Gut für Stahl-Coverage wie Metallklaue, auch wenn Stahl in Gen 3 offensiv eher nischig ist."
    },
    en: {
      place: "Five Island: Memorial Pillar",
      when: "Postgame, once Five Island is available.",
      action: "Metal Coat is the relevant Steel item.",
      items: ["Metal Coat"],
      tip: "Good for Steel coverage like Metal Claw, even though Steel is offensively niche in Gen 3."
    }
  },
  {
    stage: "24",
    tags: ["postgame", "build"],
    de: {
      place: "Eiland 5: Lost Cave",
      when: "Postgame auf Eiland 5.",
      action: "Hier liegen mehrere Build-Items auf engem Raum.",
      items: ["Seidenschal", "Seerauch", "Laxrauch", "Bannsticker-Farm über Alpollo/Misdreavus je nach Version"],
      tip: "Lost Cave ist der beste spätere Sammelpunkt, wenn du Normal-, Wasser- oder defensive Utility-Items willst."
    },
    en: {
      place: "Five Island: Lost Cave",
      when: "Postgame on Five Island.",
      action: "Several build items are close together here.",
      items: ["Silk Scarf", "Sea Incense", "Lax Incense", "Spell Tag farm from Haunter/Misdreavus depending on version"],
      tip: "Lost Cave is the best later collection spot for Normal, Water or defensive utility items."
    }
  },
  {
    stage: "25",
    tags: ["postgame", "build", "wild"],
    de: {
      place: "Eiland 6 / Eiland 7 und Trainer-Turm",
      when: "Spätes Postgame.",
      action: "Spezielle Belohnungen und spätere Farm-/Tauschitems gehören hierhin.",
      items: ["King-Stein im Sevault Canyon", "Drachenhaut am Water Path", "Scope-Linse / Blendpuder je nach Version/Spezialinhalt", "Fokus-Band über wildes Maschock"],
      tip: "Trainer-Turm-Items sind versionsabhängig. Die direkten Sevii-Fundorte und Wild-Held-Items sind verlässlicher planbar."
    },
    en: {
      place: "Six Island / Seven Island and Trainer Tower",
      when: "Late postgame.",
      action: "Special rewards and later farm/trade items belong here.",
      items: ["King's Rock in Sevault Canyon", "Dragon Scale on Water Path", "Scope Lens / BrightPowder depending on version/special content", "Focus Band from wild Machoke"],
      tip: "Trainer Tower items are version-dependent. The direct Sevii pickups and wild-held items are easier to plan around."
    }
  },
  {
    stage: "26",
    tags: ["postgame", "wild", "build"],
    de: {
      place: "Späte Wild-Farmen",
      when: "Sobald du Raub/Dieb und die passenden Gebiete hast.",
      action: "Diese Items bekommst du meist nicht als normalen Pokéball-Fund, sondern von wilden Pokémon.",
      items: ["Magneton: Magnet", "Abra/Kadabra: Krummlöffel", "Dragonir: Drachenzahn", "Bibor/Arbok: Giftstich", "Sandamer: Pudersand", "Ibitak/Dodri/Panzaeron: Hackattack", "Smettbo/Omot: Silberstaub"],
      tip: "Vor dem Farmen Itemplatz frei machen und Raub/Dieb auf einem schnellen Pokémon nutzen."
    },
    en: {
      place: "Late wild-held item farms",
      when: "Once you have Thief/Covet and the right areas.",
      action: "You usually do not get these as normal overworld Pokeball pickups; they come from wild Pokemon.",
      items: ["Magneton: Magnet", "Abra/Kadabra: TwistedSpoon", "Dragonair: Dragon Fang", "Beedrill/Arbok: Poison Barb", "Sandslash: Soft Sand", "Fearow/Dodrio/Skarmory: Sharp Beak", "Butterfree/Venomoth: SilverPowder"],
      tip: "Before farming, keep the item slot free and use Thief/Covet on a fast Pokemon."
    }
  }
];

const blankEvs = () => ({ hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 });
const teamDefaultPokemon = [0, 3, 6, 24, 5, 142];

function createTeamSlot(index, overrides = {}) {
  return {
    nickname: "",
    selectedPokemon: teamDefaultPokemon[index] ?? 0,
    selectedNature: "timid",
    shinyActive: false,
    evs: blankEvs(),
    history: [],
    lastAction: null,
    ...overrides
  };
}

const enemies = [
  { name: "Raupy", nameEn: "Caterpie", stat: "hp", ev: 1, place: "Vertania-Wald", placeEn: "Viridian Forest", note: "Early Game KP" },
  { name: "Pummeluff", nameEn: "Jigglypuff", stat: "hp", ev: 2, place: "Route 3", placeEn: "Route 3", note: "Mehr KP pro Kampf" },
  { name: "Flegmon", nameEn: "Slowpoke", stat: "hp", ev: 1, place: "Seeschauminseln", placeEn: "Seafoam Islands", note: "KP-Option im Wasser" },
  { name: "Machollo", nameEn: "Machop", stat: "atk", ev: 1, place: "Felstunnel", placeEn: "Rock Tunnel", note: "Angriff trainieren" },
  { name: "Menki", nameEn: "Mankey", stat: "atk", ev: 1, place: "Route 22", placeEn: "Route 22", note: "Frühe Angriffs-Option" },
  { name: "Krabby", nameEn: "Krabby", stat: "atk", ev: 1, place: "Angeln", placeEn: "Fishing", note: "Wasser-Angriffstraining" },
  { name: "Kleinstein", nameEn: "Geodude", stat: "def", ev: 1, place: "Mondberg", placeEn: "Mt. Moon", note: "Verteidigung trainieren" },
  { name: "Onix", nameEn: "Onix", stat: "def", ev: 1, place: "Felstunnel", placeEn: "Rock Tunnel", note: "Verteidigung in Höhlen" },
  { name: "Muschas", nameEn: "Shellder", stat: "def", ev: 1, place: "Angeln", placeEn: "Fishing", note: "Verteidigung per Wasserroute" },
  { name: "Abra", nameEn: "Abra", stat: "spa", ev: 1, place: "Route 24", placeEn: "Route 24", note: "Early Game Sp. Angriff" },
  { name: "Nebulak", nameEn: "Gastly", stat: "spa", ev: 1, place: "Pokémon-Turm", placeEn: "Pokemon Tower", note: "Konstant für Sp. Angriff" },
  { name: "Myrapla", nameEn: "Oddish", stat: "spa", ev: 1, place: "Route 5 / 6", placeEn: "Route 5 / 6", note: "Pflanzen-Option für Sp. Angriff" },
  { name: "Tentacha", nameEn: "Tentacool", stat: "spd", ev: 1, place: "Surfen", placeEn: "Surfing", note: "Sehr häufig für Sp. Vert." },
  { name: "Drowzee", nameEn: "Drowzee", stat: "spd", ev: 1, place: "Route 11", placeEn: "Route 11", note: "Frühe Sp. Vert.-Option" },
  { name: "Jurob", nameEn: "Seel", stat: "spd", ev: 1, place: "Seeschauminseln", placeEn: "Seafoam Islands", note: "Sp. Vert. im Late Game" },
  { name: "Rattfratz", nameEn: "Rattata", stat: "spe", ev: 1, place: "Route 1", placeEn: "Route 1", note: "Sehr früh für Initiative" },
  { name: "Zubat", nameEn: "Zubat", stat: "spe", ev: 1, place: "Mondberg", placeEn: "Mt. Moon", note: "Gute Höhlen-Option" },
  { name: "Habitak", nameEn: "Spearow", stat: "spe", ev: 1, place: "Route 16 / 17", placeEn: "Route 16 / 17", note: "Initiative im Mid Game" }
];

const state = {
  lang: "de",
  currentView: "trainer",
  selectedItemFilter: "all",
  selectedLocationFilter: "all",
  selectedTeamSlot: 0,
  teamSlots: Array.from({ length: 6 }, (_, index) => createTeamSlot(index)),
  teamRecipients: [true, false, false, false, false, false],
  selectedPokemon: 0,
  selectedVersion: 0,
  selectedNature: "timid",
  pokerusActive: false,
  machoActive: false,
  shinyActive: false,
  trainingSource: "quick",
  selectedStatFilter: "needed",
  history: [],
  lastAction: null,
  evs: blankEvs()
};

const elements = {
  splashScreen: document.querySelector("#splashScreen"),
  splashPresents: document.querySelector("#splashPresents"),
  viewTabs: document.querySelector(".view-tabs"),
  tutorialButton: document.querySelector("#tutorialButton"),
  tutorialModal: document.querySelector("#tutorialModal"),
  tutorialBackdrop: document.querySelector("#tutorialBackdrop"),
  tutorialEyebrow: document.querySelector("#tutorialEyebrow"),
  tutorialTitle: document.querySelector("#tutorialTitle"),
  tutorialCloseButton: document.querySelector("#tutorialCloseButton"),
  tutorialContent: document.querySelector("#tutorialContent"),
  trainerViewButton: document.querySelector("#trainerViewButton"),
  itemsViewButton: document.querySelector("#itemsViewButton"),
  locationsViewButton: document.querySelector("#locationsViewButton"),
  trainerView: document.querySelector("#trainerView"),
  itemsView: document.querySelector("#itemsView"),
  locationsView: document.querySelector("#locationsView"),
  languageButton: document.querySelector("#languageButton"),
  appSubtitle: document.querySelector("#appSubtitle"),
  itemsTitle: document.querySelector("#itemsTitle"),
  itemsIntro: document.querySelector("#itemsIntro"),
  itemSearchLabel: document.querySelector("#itemSearchLabel"),
  itemSearch: document.querySelector("#itemSearch"),
  itemFilters: document.querySelector("#itemFilters"),
  itemCards: document.querySelector("#itemCards"),
  locationsTitle: document.querySelector("#locationsTitle"),
  locationsIntro: document.querySelector("#locationsIntro"),
  locationFilters: document.querySelector("#locationFilters"),
  locationSteps: document.querySelector("#locationSteps"),
  teamTitle: document.querySelector("#teamTitle"),
  resetSlotButton: document.querySelector("#resetSlotButton"),
  exportTeamButton: document.querySelector("#exportTeamButton"),
  importTeamButton: document.querySelector("#importTeamButton"),
  teamSlots: document.querySelector("#teamSlots"),
  teamRecipientsLabel: document.querySelector("#teamRecipientsLabel"),
  teamRecipientsHint: document.querySelector("#teamRecipientsHint"),
  teamActiveOnlyButton: document.querySelector("#teamActiveOnlyButton"),
  teamAllButton: document.querySelector("#teamAllButton"),
  teamRecipientOptions: document.querySelector("#teamRecipientOptions"),
  slotNameLabel: document.querySelector("#slotNameLabel"),
  slotNameInput: document.querySelector("#slotNameInput"),
  teamOverview: document.querySelector("#teamOverview"),
  teamCodeField: document.querySelector("#teamCodeField"),
  searchLabel: document.querySelector("#searchLabel"),
  pokemonSearch: document.querySelector("#pokemonSearch"),
  pokemonSelectLabel: document.querySelector("#pokemonSelectLabel"),
  pokemonSelect: document.querySelector("#pokemonSelect"),
  spriteFrame: document.querySelector("#spriteFrame"),
  pokemonSprite: document.querySelector("#pokemonSprite"),
  pokemonName: document.querySelector("#pokemonName"),
  pokemonTypes: document.querySelector("#pokemonTypes"),
  typeMatchups: document.querySelector("#typeMatchups"),
  evSummary: document.querySelector(".ev-summary"),
  shinyButton: document.querySelector("#shinyButton"),
  activeBuildLabel: document.querySelector("#activeBuildLabel"),
  versionLabel: document.querySelector("#versionLabel"),
  versionSelect: document.querySelector("#versionSelect"),
  natureLabel: document.querySelector("#natureLabel"),
  natureSelect: document.querySelector("#natureSelect"),
  targetEyebrow: document.querySelector("#targetEyebrow"),
  targetTitle: document.querySelector("#targetTitle"),
  buildTitle: document.querySelector("#buildTitle"),
  buildRecommendation: document.querySelector("#buildRecommendation"),
  applyBuildButton: document.querySelector("#applyBuildButton"),
  trainingTitle: document.querySelector("#trainingTitle"),
  pokerusLabel: document.querySelector("#pokerusLabel"),
  machoLabel: document.querySelector("#machoLabel"),
  undoButton: document.querySelector("#undoButton"),
  trainingHelp: document.querySelector("#trainingHelp"),
  trainingSourceButtons: document.querySelector("#trainingSourceButtons"),
  evDexSearch: document.querySelector("#evDexSearch"),
  statFilters: document.querySelector("#statFilters"),
  lastAction: document.querySelector("#lastAction"),
  trainingPlan: document.querySelector("#trainingPlan"),
  statRows: document.querySelector("#statRows"),
  totalBadge: document.querySelector("#totalBadge"),
  currentEvsLabel: document.querySelector("#currentEvsLabel"),
  currentEvsValue: document.querySelector("#currentEvsValue"),
  remainingEvsLabel: document.querySelector("#remainingEvsLabel"),
  remainingEvsValue: document.querySelector("#remainingEvsValue"),
  multiplierLabel: document.querySelector("#multiplierLabel"),
  multiplierValue: document.querySelector("#multiplierValue"),
  enemyButtons: document.querySelector("#enemyButtons"),
  pokerusToggle: document.querySelector("#pokerusToggle"),
  machoToggle: document.querySelector("#machoToggle"),
  resetButton: document.querySelector("#resetButton")
};

function loadState() {
  const saved = localStorage.getItem("pokemonEvTrainerState");
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    state.lang = clampLanguage(parsed.lang);
    state.currentView = ["trainer", "items", "locations"].includes(parsed.currentView) ? parsed.currentView : "trainer";
    state.selectedItemFilter = clampKnownValue(parsed.selectedItemFilter, ["all", "ev", "vitamin", "battle", "build", "utility", "berry", "wild", "thief", "postgame"], "all");
    state.selectedLocationFilter = clampKnownValue(parsed.selectedLocationFilter, ["all", "story", "postgame", "important", "ev", "build", "hidden", "wild"], "all");
    state.selectedPokemon = parsed.selectedPokemon ?? 0;
    state.selectedVersion = parsed.selectedVersion ?? 0;
    state.selectedNature = natures.some((nature) => nature.id === parsed.selectedNature) ? parsed.selectedNature : "timid";
    state.pokerusActive = parsed.pokerusActive ?? false;
    state.machoActive = parsed.machoActive ?? false;
    state.shinyActive = parsed.shinyActive ?? false;
    state.trainingSource = clampKnownValue(parsed.trainingSource, ["quick", "dex"], "quick");
    state.selectedStatFilter = parsed.selectedStatFilter ?? "needed";
    state.history = Array.isArray(parsed.history) ? parsed.history.slice(-20) : [];
    state.lastAction = parsed.lastAction ?? null;
    state.evs = { ...state.evs, ...parsed.evs };
    state.selectedTeamSlot = Math.min(Math.max(Number(parsed.selectedTeamSlot ?? 0), 0), 5);
    state.teamSlots = normalizeTeamSlots(parsed);
    state.teamRecipients = normalizeTeamRecipients(parsed.teamRecipients, state.selectedTeamSlot);
    applyTeamSlot(state.selectedTeamSlot);
  } catch {
    localStorage.removeItem("pokemonEvTrainerState");
  }
}

function normalizeTeamRecipients(value, activeIndex = 0) {
  const recipients = Array.from({ length: 6 }, (_, index) => Boolean(value?.[index]));
  if (!recipients.some(Boolean)) {
    recipients[Math.min(Math.max(Number(activeIndex) || 0, 0), 5)] = true;
  }
  return recipients;
}

function normalizeTeamSlots(parsed) {
  const slots = Array.from({ length: 6 }, (_, index) => createTeamSlot(index));
  const savedSlots = Array.isArray(parsed.teamSlots) ? parsed.teamSlots : [];

  savedSlots.slice(0, 6).forEach((slot, index) => {
    slots[index] = createTeamSlot(index, {
      nickname: sanitizeSlotName(slot.nickname),
      selectedPokemon: clampPokemonIndex(slot.selectedPokemon),
      selectedNature: natures.some((nature) => nature.id === slot.selectedNature) ? slot.selectedNature : "timid",
      shinyActive: Boolean(slot.shinyActive),
      evs: normalizeEvs(slot.evs),
      history: Array.isArray(slot.history) ? slot.history.slice(-20) : [],
      lastAction: slot.lastAction ?? null
    });
  });

  if (savedSlots.length === 0) {
    slots[0] = createTeamSlot(0, {
      nickname: sanitizeSlotName(parsed.nickname),
      selectedPokemon: clampPokemonIndex(parsed.selectedPokemon),
      selectedNature: natures.some((nature) => nature.id === parsed.selectedNature) ? parsed.selectedNature : "timid",
      shinyActive: Boolean(parsed.shinyActive),
      evs: normalizeEvs(parsed.evs),
      history: Array.isArray(parsed.history) ? parsed.history.slice(-20) : [],
      lastAction: parsed.lastAction ?? null
    });
  }

  return slots;
}

function clampPokemonIndex(value) {
  const index = Number(value);
  if (!Number.isFinite(index)) return 0;
  return Math.min(Math.max(index, 0), pokemon.length - 1);
}

function sanitizeSlotName(value) {
  return String(value ?? "").trim().slice(0, 18);
}

function normalizeEvs(evs = {}) {
  const normalized = blankEvs();
  stats.forEach(([key]) => {
    normalized[key] = clampEv(evs[key] ?? 0);
  });
  return normalized;
}

function syncActiveTeamSlot() {
  if (!Array.isArray(state.teamSlots) || !state.teamSlots[state.selectedTeamSlot]) return;
  state.teamSlots[state.selectedTeamSlot] = createTeamSlot(state.selectedTeamSlot, {
    nickname: sanitizeSlotName(state.teamSlots[state.selectedTeamSlot].nickname),
    selectedPokemon: clampPokemonIndex(state.selectedPokemon),
    selectedNature: state.selectedNature,
    shinyActive: state.shinyActive,
    evs: normalizeEvs(state.evs),
    history: Array.isArray(state.history) ? state.history.slice(-20) : [],
    lastAction: state.lastAction
  });
}

function applyTeamSlot(index) {
  const slot = state.teamSlots[index] ?? createTeamSlot(index);
  state.selectedPokemon = clampPokemonIndex(slot.selectedPokemon);
  state.selectedNature = slot.selectedNature;
  state.shinyActive = Boolean(slot.shinyActive);
  state.evs = normalizeEvs(slot.evs);
  state.history = Array.isArray(slot.history) ? slot.history.slice(-20) : [];
  state.lastAction = slot.lastAction ?? null;
}

function saveState() {
  try {
    syncActiveTeamSlot();
    localStorage.setItem("pokemonEvTrainerState", JSON.stringify(state));
  } catch {
    elements.lastAction.textContent = state.lang === "en"
      ? "Could not save locally. Your browser storage may be full or blocked."
      : "Konnte nicht lokal speichern. Dein Browser-Speicher ist eventuell voll oder blockiert.";
  }
}

function t(key) {
  return (i18n[state.lang] ?? i18n.de)[key] ?? i18n.de[key] ?? key;
}

function getStatLabel(key) {
  return statLabels[state.lang][key] ?? key;
}

function getNatureLabel(nature) {
  return nature[state.lang] ?? nature.de;
}

function getNatureEffect(nature) {
  if (!nature.plus || !nature.minus) return t("neutralNature");
  return `+${getStatLabel(nature.plus)} / -${getStatLabel(nature.minus)}`;
}

function getItemCategoryLabel(category) {
  return {
    ev: t("itemCategoryEv"),
    vitamin: t("itemCategoryVitamin"),
    battle: t("itemCategoryBattle"),
    utility: t("itemCategoryUtility"),
    build: t("itemCategoryBuild"),
    berry: t("itemCategoryBerry")
  }[category] ?? category;
}

function getItemMethodLabel(method) {
  return {
    gift: t("itemMethodGift"),
    shop: t("itemMethodShop"),
    hidden: t("itemMethodHidden"),
    overworld: t("itemMethodOverworld"),
    wild: t("itemMethodWild"),
    thief: t("itemMethodThief"),
    postgame: t("itemMethodPostgame"),
    trainerTower: t("itemMethodTrainerTower"),
    pickup: t("itemMethodPickup")
  }[method] ?? method;
}

function formatNatureText(text) {
  if (state.lang === "de") return text;

  return natures.reduce((result, nature) => {
    return result.replaceAll(nature.de, nature.en);
  }, text).replaceAll(" oder ", " or ");
}

function getPokemonName(entry) {
  return state.lang === "en" ? entry.nameEn : entry.name;
}

function getTeamSlotTotal(slot) {
  return Object.values(normalizeEvs(slot.evs)).reduce((sum, value) => sum + value, 0);
}

function isTeamSlotComplete(slot) {
  const entry = pokemon[clampPokemonIndex(slot.selectedPokemon)];
  const evs = normalizeEvs(slot.evs);
  return stats.some(([key]) => entry.target[key] > 0) && stats.every(([key]) => evs[key] >= entry.target[key]);
}

function getSlotDisplayName(slot, entry) {
  return sanitizeSlotName(slot.nickname) || getPokemonName(entry);
}

function renderTeamSlots() {
  state.teamRecipients = normalizeTeamRecipients(state.teamRecipients, state.selectedTeamSlot);
  elements.teamSlots.innerHTML = state.teamSlots
    .map((slot, index) => {
      const entry = pokemon[clampPokemonIndex(slot.selectedPokemon)];
      const total = getTeamSlotTotal(slot);
      const active = index === state.selectedTeamSlot;
      const shiny = slot.shinyActive ? " shiny" : "";
      const recipient = state.teamRecipients[index] ? " recipient" : "";
      const displayName = getSlotDisplayName(slot, entry);
      const pokemonName = getPokemonName(entry);
      const safeDisplayName = escapeHtml(displayName);
      const safePokemonName = escapeHtml(pokemonName);
      const safeSlotLabel = escapeHtml(t("teamSlot"));
      const safeActiveLabel = escapeHtml(t("activeSlot"));

      return `
        <button class="team-slot${active ? " active" : ""}${shiny}${recipient}" type="button" data-team-slot="${index}">
          <span>${safeSlotLabel} ${index + 1}${active ? ` · ${safeActiveLabel}` : ""}</span>
          <strong>${safeDisplayName}</strong>
          <small>${displayName === pokemonName ? `${total} / 510` : `${safePokemonName} · ${total} / 510`}</small>
        </button>
      `;
    })
    .join("");
}

function renderTeamRecipients() {
  state.teamRecipients = normalizeTeamRecipients(state.teamRecipients, state.selectedTeamSlot);
  elements.teamRecipientOptions.innerHTML = state.teamSlots
    .map((slot, index) => {
      const entry = pokemon[clampPokemonIndex(slot.selectedPokemon)];
      const displayName = escapeHtml(getSlotDisplayName(slot, entry));
      const checked = state.teamRecipients[index] ? " checked" : "";
      const active = index === state.selectedTeamSlot ? " active" : "";

      return `
        <label class="team-recipient${active}">
          <input type="checkbox" data-team-recipient="${index}"${checked} />
          <span>${index + 1}</span>
          <strong>${displayName}</strong>
        </label>
      `;
    })
    .join("");
}

function renderTeamTools() {
  const activeSlot = state.teamSlots[state.selectedTeamSlot] ?? createTeamSlot(state.selectedTeamSlot);
  const totalTeamEvs = state.teamSlots.reduce((sum, slot) => sum + getTeamSlotTotal(slot), 0);
  const completeSlots = state.teamSlots.filter(isTeamSlotComplete).length;
  elements.slotNameLabel.textContent = t("slotName");
  elements.slotNameInput.placeholder = t("slotNamePlaceholder");
  elements.slotNameInput.value = sanitizeSlotName(activeSlot.nickname);
  elements.exportTeamButton.textContent = t("exportTeam");
  elements.importTeamButton.textContent = t("importTeam");
  elements.teamCodeField.placeholder = t("teamCodePlaceholder");
  elements.teamOverview.innerHTML = `
    <div>
      <span>${t("teamOverviewTitle")}</span>
      <strong>${completeSlots} / 6</strong>
      <small>${t("teamOverviewDone")}</small>
    </div>
    <div>
      <span>${t("teamOverviewTotal")}</span>
      <strong>${totalTeamEvs}</strong>
      <small>${Math.max(0, 3060 - totalTeamEvs)} ${state.lang === "en" ? "left" : "übrig"}</small>
    </div>
  `;
}

function getTypeText(types) {
  const deToEn = {
    Feuer: "Fire",
    Wasser: "Water",
    Elektro: "Electric",
    Pflanze: "Grass",
    Eis: "Ice",
    Kampf: "Fighting",
    Gift: "Poison",
    Boden: "Ground",
    Flug: "Flying",
    Psycho: "Psychic",
    Käfer: "Bug",
    Gestein: "Rock",
    Geist: "Ghost",
    Drache: "Dragon",
    Normal: "Normal",
    Stahl: "Steel",
    Unlicht: "Dark"
  };

  return types
    .split(" / ")
    .map((type) => (state.lang === "en" ? deToEn[type] ?? type : type))
    .join(" / ");
}

function getTypeKey(germanType) {
  return Object.entries(typeNames.de).find(([, name]) => name === germanType)?.[0] ?? germanType;
}

function getDisplayTypeName(typeKey) {
  return typeNames[state.lang][typeKey] ?? typeKey;
}

function getTypeMultiplier(attackingType, defendingType) {
  return typeChart[attackingType]?.[defendingType] ?? 1;
}

function formatMultiplier(value) {
  const text = Number.isInteger(value) ? String(value) : String(value);
  return `x${state.lang === "de" ? text.replace(".", ",") : text}`;
}

function getMatchupGroups(types) {
  const ownTypes = types.split(" / ").map(getTypeKey);
  const attackStrong = typeKeys.filter((targetType) => {
    return Math.max(...ownTypes.map((ownType) => getTypeMultiplier(ownType, targetType))) > 1;
  });

  const defensive = typeKeys.map((attackingType) => {
    const multiplier = ownTypes.reduce((total, ownType) => total * getTypeMultiplier(attackingType, ownType), 1);
    return { type: attackingType, multiplier };
  });

  return {
    attackStrong,
    weak: defensive.filter((entry) => entry.multiplier > 1),
    resists: defensive.filter((entry) => entry.multiplier > 0 && entry.multiplier < 1),
    immune: defensive.filter((entry) => entry.multiplier === 0)
  };
}

function renderTypeChips(entries, options = {}) {
  if (entries.length === 0) {
    return `<span class="type-chip empty">${t("matchupNone")}</span>`;
  }

  return entries
    .map((entry) => {
      const typeKey = typeof entry === "string" ? entry : entry.type;
      const multiplier = options.showMultiplier && typeof entry !== "string"
        ? `<small>${formatMultiplier(entry.multiplier)}</small>`
        : "";

      return `<span class="type-chip">${getDisplayTypeName(typeKey)}${multiplier}</span>`;
    })
    .join("");
}

function translateText(text) {
  return state.lang === "en" ? buildTextEnglish[text] ?? text : text;
}

function getMoveDisplayName(moveName) {
  return state.lang === "en" ? moveEnglishNames[moveName] ?? moveName : moveName;
}

function getItemDisplayName(itemName) {
  return state.lang === "en" ? itemEnglishNames[itemName] ?? itemName : itemName;
}

function getItemDisplayText(itemText) {
  return itemText
    .split("/")
    .map((name) => getItemDisplayName(name.trim()))
    .join(" / ");
}

function getEnemyName(enemy) {
  return state.lang === "en" ? enemy.nameEn ?? enemy.name : enemy.name;
}

function getEnemyPlace(enemy) {
  return state.lang === "en" ? enemy.placeEn ?? enemy.place : enemy.place;
}

function getEnemyYieldEntries(enemy) {
  if (enemy.yields) return Object.entries(enemy.yields).filter(([, value]) => value > 0);
  return [[enemy.stat, enemy.ev]];
}

function formatEnemyYield(enemy, multiplier = getMultiplier()) {
  return getEnemyYieldEntries(enemy)
    .map(([stat, ev]) => `+${ev * multiplier} ${getStatLabel(stat)} EV`)
    .join(" / ");
}

function enemyMatchesStatFilter(enemy, neededStats) {
  const statsForEnemy = getEnemyYieldEntries(enemy).map(([stat]) => stat);
  if (state.selectedStatFilter === "all") return true;
  if (state.selectedStatFilter === "needed") return statsForEnemy.some((stat) => neededStats.includes(stat));
  return statsForEnemy.includes(state.selectedStatFilter);
}

function getGuideItemText(item) {
  return item[state.lang] ?? item.de;
}

function createExportPayload() {
  syncActiveTeamSlot();
  return {
    app: "pokemon-ev-trainer",
    version: 1,
    selectedTeamSlot: state.selectedTeamSlot,
    teamRecipients: normalizeTeamRecipients(state.teamRecipients, state.selectedTeamSlot),
    teamSlots: state.teamSlots.map((slot) => ({
      nickname: sanitizeSlotName(slot.nickname),
      selectedPokemon: clampPokemonIndex(slot.selectedPokemon),
      selectedNature: slot.selectedNature,
      shinyActive: Boolean(slot.shinyActive),
      evs: normalizeEvs(slot.evs)
    }))
  };
}

function encodeTeamCode(payload) {
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  return `PET1:${btoa(binary)}`;
}

function decodeTeamCode(code) {
  const raw = code.trim();
  const json = raw.startsWith("PET1:")
    ? new TextDecoder().decode(Uint8Array.from(atob(raw.slice(5)), (char) => char.charCodeAt(0)))
    : raw;
  const parsed = JSON.parse(json);
  if (!Array.isArray(parsed.teamSlots)) throw new Error("Invalid team code");
  return parsed;
}

function renderLanguage() {
  document.documentElement.lang = state.lang;
  elements.splashPresents.textContent = t("splashPresents");
  elements.viewTabs.setAttribute("aria-label", state.lang === "en" ? "App navigation" : "App Navigation");
  elements.trainerView.setAttribute("aria-label", state.lang === "en" ? "EV trainer dashboard" : "EV-Trainer-Dashboard");
  elements.teamSlots.setAttribute("aria-label", state.lang === "en" ? "Team slots" : "Team-Slots");
  elements.typeMatchups.setAttribute("aria-label", state.lang === "en" ? "Type matchups" : "Typen-Matchups");
  elements.evSummary.setAttribute("aria-label", state.lang === "en" ? "EV overview" : "EV-Übersicht");
  elements.statFilters.setAttribute("aria-label", state.lang === "en" ? "EV stat filters" : "EV-Stat-Filter");
  elements.itemsView.setAttribute("aria-label", state.lang === "en" ? "Item locations" : "Item-Fundorte");
  elements.itemFilters.setAttribute("aria-label", state.lang === "en" ? "Item filters" : "Item-Filter");
  elements.locationsView.setAttribute("aria-label", state.lang === "en" ? "Location route" : "Orte-Route");
  elements.locationFilters.setAttribute("aria-label", state.lang === "en" ? "Location filters" : "Orte-Filter");
  elements.trainerViewButton.textContent = t("navTrainer");
  elements.itemsViewButton.textContent = t("navItems");
  elements.locationsViewButton.textContent = t("navLocations");
  elements.tutorialButton.textContent = t("tutorialButton");
  elements.tutorialEyebrow.textContent = t("tutorialEyebrow");
  elements.tutorialTitle.textContent = t("tutorialTitle");
  elements.tutorialCloseButton.textContent = t("tutorialClose");
  elements.languageButton.textContent = t("languageButton");
  elements.resetButton.textContent = t("reset");
  elements.appSubtitle.textContent = t("subtitle");
  elements.itemsTitle.textContent = t("itemsTitle");
  elements.itemsIntro.textContent = t("itemsIntro");
  elements.itemSearchLabel.textContent = t("itemSearch");
  elements.itemSearch.placeholder = t("itemSearchPlaceholder");
  elements.locationsTitle.textContent = t("locationsTitle");
  elements.locationsIntro.textContent = t("locationsIntro");
  elements.teamTitle.textContent = t("teamTitle");
  elements.resetSlotButton.textContent = t("resetSlot");
  elements.teamRecipientsLabel.textContent = t("teamRecipients");
  elements.teamRecipientsHint.textContent = t("teamRecipientsHint");
  elements.teamActiveOnlyButton.textContent = t("teamActiveOnly");
  elements.teamAllButton.textContent = t("teamAll");
  elements.searchLabel.textContent = t("search");
  elements.pokemonSearch.placeholder = t("searchPlaceholder");
  elements.pokemonSelectLabel.textContent = t("pokemon");
  elements.activeBuildLabel.textContent = t("activeBuild");
  elements.versionLabel.textContent = t("version");
  elements.natureLabel.textContent = t("nature");
  elements.targetEyebrow.textContent = t("target");
  elements.targetTitle.textContent = t("targetTitle");
  elements.buildTitle.textContent = t("buildTitle");
  elements.applyBuildButton.textContent = t("applyBuild");
  elements.trainingTitle.textContent = t("trainingTitle");
  elements.pokerusLabel.textContent = t("pokerus");
  elements.machoLabel.textContent = t("machoBrace");
  elements.undoButton.textContent = t("undo");
  elements.trainingSourceButtons.querySelector('[data-training-source="quick"]').textContent = t("trainingSourceQuick");
  elements.trainingSourceButtons.querySelector('[data-training-source="dex"]').textContent = t("trainingSourceDex");
  elements.evDexSearch.placeholder = t("evDexSearchPlaceholder");
  elements.currentEvsLabel.textContent = t("currentEvs");
  elements.remainingEvsLabel.textContent = t("remainingEvs");
  elements.multiplierLabel.textContent = t("multiplier");
}

function renderTrainingHelp() {
  elements.trainingHelp.innerHTML = `
    <strong>${t("multiplier")}: x${getMultiplier()}</strong>
    <span>${isTrainingComplete() ? t("trainingComplete") : t("trainingHelp")}</span>
  `;
}

function renderTrainingSourceControls() {
  elements.trainingSourceButtons.querySelectorAll("[data-training-source]").forEach((button) => {
    button.classList.toggle("active", button.dataset.trainingSource === state.trainingSource);
  });
  elements.evDexSearch.hidden = state.trainingSource !== "dex";
}

function renderView() {
  const isItems = state.currentView === "items";
  const isLocations = state.currentView === "locations";
  elements.trainerView.classList.toggle("active", state.currentView === "trainer");
  elements.itemsView.classList.toggle("active", isItems);
  elements.locationsView.classList.toggle("active", isLocations);
  elements.trainerViewButton.classList.toggle("active", state.currentView === "trainer");
  elements.itemsViewButton.classList.toggle("active", isItems);
  elements.locationsViewButton.classList.toggle("active", isLocations);
}

function renderStatFilters() {
  const filters = [
    ["needed", state.lang === "en" ? "Needed" : "Benötigt"],
    ["all", t("allStats")],
    ...stats.map(([key]) => [key, getStatLabel(key)])
  ];

  elements.statFilters.innerHTML = filters
    .map(([key, label]) => `
      <button class="filter-button${state.selectedStatFilter === key ? " active" : ""}" type="button" data-filter="${key}">
        ${label}
      </button>
    `)
    .join("");
}

function renderLastAction() {
  elements.undoButton.disabled = state.history.length === 0;

  if (!state.lastAction) {
    elements.lastAction.textContent = "";
    elements.lastAction.className = "last-action";
    return;
  }

  elements.lastAction.className = `last-action ${state.lastAction.type}`;

  if (state.lastAction.message) {
    elements.lastAction.textContent = state.lastAction.message;
    return;
  }

  const statLabel = getStatLabel(state.lastAction.stat);

  if (state.lastAction.type === "undo") {
    elements.lastAction.textContent = state.lang === "en"
      ? `Undid ${state.lastAction.enemy}: -${state.lastAction.amount} ${statLabel} EV`
      : `${state.lastAction.enemy} rückgängig: -${state.lastAction.amount} ${statLabel} EV`;
    return;
  }

  if (state.lastAction.type === "blocked") {
    elements.lastAction.textContent = state.lang === "en"
      ? `${state.lastAction.enemy} was not added because this stat or the total is already capped.`
      : `${state.lastAction.enemy} wurde nicht eingetragen, weil dieser Stat oder das Gesamtlimit schon voll ist.`;
    return;
  }

  elements.lastAction.textContent = `${t("lastActionPrefix")}: ${state.lastAction.enemy} +${state.lastAction.amount} ${statLabel} EV`;
}

function renderTutorialAppMock(type, guide) {
  const labels = {
    build: [
      [state.lang === "en" ? "Pokemon" : "Pokémon", state.lang === "en" ? "Charmander" : "Glumanda"],
      [t("evGoal"), state.lang === "en" ? "252 Sp. Atk / 252 Speed" : "252 Sp. Ang. / 252 Init."],
      [t("moves"), state.lang === "en" ? "Flamethrower · Dragon Claw" : "Flammenwurf · Drachenklaue"]
    ],
    multiplier: [
      [t("multiplier"), "x4"],
      [t("pokerus"), state.lang === "en" ? "On" : "An"],
      [t("machoBrace"), state.lang === "en" ? "On" : "An"]
    ],
    enemy: [
      [state.lang === "en" ? "Target" : "Ziel", "Abra"],
      [state.lang === "en" ? "Where" : "Ort", state.lang === "en" ? "Route 24" : "Route 24"],
      [state.lang === "en" ? "Now gain" : "Jetzt", state.lang === "en" ? "+1 Sp. Atk" : "+1 Sp. Ang."]
    ],
    click: [
      [state.lang === "en" ? "Button" : "Button", "Abra"],
      [state.lang === "en" ? "Added" : "Eingetragen", guide.appClickText],
      [t("currentEvs"), "1 / 510"]
    ],
    progress: [
      [state.lang === "en" ? "Goal" : "Ziel", state.lang === "en" ? "252 Sp. Atk" : "252 Sp. Ang."],
      [t("currentEvs"), "128"],
      [t("remainingEvs"), "382"]
    ],
    done: [
      [state.lang === "en" ? "Goal" : "Ziel", "510 / 510"],
      [state.lang === "en" ? "Status" : "Status", state.lang === "en" ? "Complete" : "Fertig"],
      [state.lang === "en" ? "Next" : "Nächster Schritt", state.lang === "en" ? "Stop training" : "Training stoppen"]
    ]
  };

  return `
    <div class="website-mini">
      ${labels[type].map(([label, value]) => `
        <div>
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderTutorial() {
  const guide = tutorialGuide[state.lang];
  elements.tutorialContent.innerHTML = `
    <div class="tutorial-hero">
      <div>
        <h3>${guide.heroTitle}</h3>
        <p>${guide.heroText}</p>
      </div>
      <div class="loop-strip" aria-label="${guide.loopTitle}">
        <span>${guide.loopTitle}</span>
        <div>
          ${guide.loop.map((item, index) => `
            <strong>${index + 1}. ${item}</strong>
          `).join("")}
        </div>
      </div>
    </div>
    <div class="tutorial-flow">
      ${guide.steps.map((step, index) => `
        <article class="tutorial-step">
          <div class="step-number">${index + 1}</div>
          <div class="step-body">
            <h3>${step.title}</h3>
            <div class="step-columns">
              <section class="step-side game-side">
                <span>${guide.gameLabel}</span>
                <div class="mini-battle-screen">
                  <div class="mini-battle-row">
                    <img src="${step.gameImage}" alt="" />
                    <div class="mini-hp-box"><strong>${index === 3 ? "Abra" : (state.lang === "en" ? "Target" : "Gegner")}</strong><i></i></div>
                  </div>
                  <div class="mini-battle-text">${index === 3 ? guide.battleText : step.game}</div>
                </div>
                <p>${step.game}</p>
              </section>
              <section class="step-side app-side">
                <span>${guide.appLabel}</span>
                ${renderTutorialAppMock(step.appMock, guide)}
                <p>${step.app}</p>
              </section>
            </div>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="tutorial-split">
      <section class="tutorial-example-box">
        <h3>${guide.examplesTitle}</h3>
        <div class="example-list">
          ${guide.examples.map((example) => `
            <div>
              <span>${example.label}</span>
              <strong>${example.value}</strong>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="tutorial-rule-box">
        <h3>${guide.rulesTitle}</h3>
        <ul>
          ${guide.rules.map((rule) => `<li>${rule}</li>`).join("")}
        </ul>
      </section>
    </div>
    <div class="tutorial-note">
      <strong>${guide.noteTitle}</strong>
      <p>${guide.note}</p>
    </div>
    <div class="guide-section">
      <div class="section-heading compact-heading">
        <div>
          <p class="eyebrow">Guide</p>
          <h3>${t("moveHelpTitle")}</h3>
        </div>
      </div>
      ${renderMoveGlossary()}
    </div>
  `;
}

function openTutorial() {
  elements.tutorialModal.hidden = false;
  renderTutorial();
  elements.tutorialCloseButton.focus();
}

function closeTutorial() {
  elements.tutorialModal.hidden = true;
  elements.tutorialButton.focus();
}

function renderVersionSelect() {
  if (!versions[state.selectedVersion]) state.selectedVersion = 0;
  elements.versionSelect.innerHTML = versions
    .map((version, index) => `<option value="${index}">${version[state.lang]}</option>`)
    .join("");
  elements.versionSelect.value = state.selectedVersion;
}

function renderNatureSelect() {
  if (!natures.some((nature) => nature.id === state.selectedNature)) {
    state.selectedNature = "timid";
  }

  elements.natureSelect.innerHTML = natures
    .map((nature) => `<option value="${nature.id}">${getNatureLabel(nature)} (${getNatureEffect(nature)})</option>`)
    .join("");
  elements.natureSelect.value = state.selectedNature;
}

function totalEvs() {
  return Object.values(state.evs).reduce((sum, value) => sum + value, 0);
}

function getMultiplier() {
  const pokerus = state.pokerusActive ? 2 : 1;
  const macho = state.machoActive ? 2 : 1;
  return pokerus * macho;
}

function clampEv(value) {
  return Math.max(0, Math.min(252, Number(value) || 0));
}

function getActivePokemon() {
  return pokemon[state.selectedPokemon] ?? pokemon[0];
}

function getNeededStats() {
  const active = getActivePokemon();
  return stats
    .filter(([key]) => active.target[key] > state.evs[key])
    .map(([key]) => key);
}

function isTrainingComplete() {
  return getNeededStats().length === 0;
}

function pushHistory(action) {
  state.history.push(action);
  state.history = state.history.slice(-20);
}

function getRecipientIndexes() {
  state.teamRecipients = normalizeTeamRecipients(state.teamRecipients, state.selectedTeamSlot);
  return state.teamRecipients
    .map((selected, index) => selected ? index : -1)
    .filter((index) => index >= 0);
}

function getAppliedEvAmount(evs, stat, gained) {
  const currentTotal = Object.values(evs).reduce((sum, value) => sum + value, 0);
  const roomInStat = 252 - evs[stat];
  const roomTotal = 510 - currentTotal;
  return Math.max(0, Math.min(gained, roomInStat, roomTotal));
}

function formatTeamTrainingMessage(enemyName, changes, statLabel) {
  const totalApplied = changes.reduce((sum, change) => sum + change.amount, 0);
  if (!statLabel) {
    return state.lang === "en"
      ? `${enemyName}: +${totalApplied} EV across ${changes.length} slot${changes.length === 1 ? "" : "s"}`
      : `${enemyName}: +${totalApplied} EV auf ${changes.length} Slot${changes.length === 1 ? "" : "s"}`;
  }
  return state.lang === "en"
    ? `${enemyName}: +${totalApplied} ${statLabel} EV across ${changes.length} slot${changes.length === 1 ? "" : "s"}`
    : `${enemyName}: +${totalApplied} ${statLabel} EV auf ${changes.length} Slot${changes.length === 1 ? "" : "s"}`;
}

function addEnemyEv(enemy) {
  syncActiveTeamSlot();
  const enemyDisplayName = getEnemyName(enemy);
  const yieldEntries = getEnemyYieldEntries(enemy);
  const multiplier = getMultiplier();
  const recipientIndexes = getRecipientIndexes();
  const changes = [];

  if (recipientIndexes.length === 0) {
    state.lastAction = { type: "blocked", message: t("noTeamRecipients") };
    saveState();
    render();
    return;
  }

  recipientIndexes.forEach((slotIndex) => {
    const slot = state.teamSlots[slotIndex] ?? createTeamSlot(slotIndex);
    const previousEvs = normalizeEvs(slot.evs);
    const nextEvs = { ...previousEvs };
    const appliedByStat = {};

    yieldEntries.forEach(([stat, ev]) => {
      const applied = getAppliedEvAmount(nextEvs, stat, ev * multiplier);
      if (applied <= 0) return;
      nextEvs[stat] += applied;
      appliedByStat[stat] = (appliedByStat[stat] ?? 0) + applied;
    });

    const appliedTotal = Object.values(appliedByStat).reduce((sum, value) => sum + value, 0);
    if (appliedTotal <= 0) return;

    changes.push({ slotIndex, previousEvs, amount: appliedTotal, amounts: appliedByStat });
    state.teamSlots[slotIndex] = createTeamSlot(slotIndex, {
      ...slot,
      evs: nextEvs,
      lastAction: {
        type: "enemy",
        enemy: enemyDisplayName,
        stat: yieldEntries[0][0],
        amount: appliedTotal
      }
    });
  });

  if (changes.length === 0) {
    state.lastAction = {
      type: "blocked",
      enemy: enemyDisplayName,
      stat: yieldEntries[0][0],
      amount: 0
    };
    saveState();
    render();
    return;
  }

  const selectedSlot = state.teamSlots[state.selectedTeamSlot] ?? createTeamSlot(state.selectedTeamSlot);
  state.evs = normalizeEvs(selectedSlot.evs);
  state.history = Array.isArray(selectedSlot.history) ? selectedSlot.history.slice(-20) : [];
  const message = formatTeamTrainingMessage(enemyDisplayName, changes, yieldEntries.length === 1 ? getStatLabel(yieldEntries[0][0]) : "");
  pushHistory({
    type: "team-enemy",
    enemy: enemyDisplayName,
    stat: yieldEntries[0][0],
    amount: yieldEntries.reduce((sum, [, ev]) => sum + ev * multiplier, 0),
    slotChanges: changes
  });
  state.lastAction = {
    type: "team-enemy",
    enemy: enemyDisplayName,
    stat: yieldEntries[0][0],
    amount: yieldEntries.reduce((sum, [, ev]) => sum + ev * multiplier, 0),
    message
  };
  saveState();
  render();
}

function undoLastAction() {
  const action = state.history.pop();
  if (Array.isArray(action?.slotChanges)) {
    action.slotChanges.forEach((change) => {
      const slot = state.teamSlots[change.slotIndex] ?? createTeamSlot(change.slotIndex);
      state.teamSlots[change.slotIndex] = createTeamSlot(change.slotIndex, {
        ...slot,
        evs: normalizeEvs(change.previousEvs),
        lastAction: null
      });
    });
    const selectedSlot = state.teamSlots[state.selectedTeamSlot] ?? createTeamSlot(state.selectedTeamSlot);
    state.evs = normalizeEvs(selectedSlot.evs);
    state.lastAction = {
      type: "undo",
      message: state.lang === "en"
        ? `Undid ${action.enemy} for ${action.slotChanges.length} slot${action.slotChanges.length === 1 ? "" : "s"}.`
        : `${action.enemy} für ${action.slotChanges.length} Slot${action.slotChanges.length === 1 ? "" : "s"} rückgängig.`
    };
    saveState();
    render();
    return;
  }

  if (!action?.previousEvs) {
    state.lastAction = { type: "info", message: t("nothingToUndo") };
    saveState();
    render();
    return;
  }

  state.evs = { ...state.evs, ...action.previousEvs };
  state.lastAction = {
    type: "undo",
    enemy: action.enemy,
    stat: action.stat,
    amount: action.amount
  };
  saveState();
  render();
}

function renderPokemonSelect() {
  const searchTerm = elements.pokemonSearch.value.trim().toLowerCase();
  const filteredPokemon = pokemon.filter((entry) => {
    const dexNumber = String(entry.id).padStart(3, "0");
    return `${entry.name} ${entry.nameEn} ${entry.types} ${getTypeText(entry.types)} ${dexNumber}`.toLowerCase().includes(searchTerm);
  });

  elements.pokemonSelect.innerHTML = filteredPokemon
    .map((entry) => {
      const index = pokemon.indexOf(entry);
      const dexNumber = String(entry.id).padStart(3, "0");
      return `<option value="${index}">#${dexNumber} ${getPokemonName(entry)}</option>`;
    })
    .join("");

  if (filteredPokemon.length === 0) {
    elements.pokemonSelect.innerHTML = `<option value="">${t("noResults")}</option>`;
    return;
  }

  const selectedIsVisible = filteredPokemon.some((entry) => pokemon.indexOf(entry) === state.selectedPokemon);
  elements.pokemonSelect.value = selectedIsVisible ? state.selectedPokemon : pokemon.indexOf(filteredPokemon[0]);

  if (!selectedIsVisible) {
    state.selectedPokemon = Number(elements.pokemonSelect.value);
    saveState();
  }
}

function renderPokemon() {
  const active = pokemon[state.selectedPokemon];
  elements.pokemonName.textContent = getPokemonName(active);
  elements.pokemonTypes.textContent = getTypeText(active.types);
  const shinyPath = state.shinyActive ? "/shiny" : "";
  elements.pokemonSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork${shinyPath}/${active.id}.png`;
  elements.pokemonSprite.alt = getPokemonName(active);
  elements.shinyButton.textContent = state.shinyActive ? t("shinyOn") : t("shinyOff");
  elements.shinyButton.classList.toggle("active", state.shinyActive);
  elements.spriteFrame.classList.toggle("shiny", state.shinyActive);
  renderTypeMatchups(active);
}

function renderTypeMatchups(active) {
  const matchups = getMatchupGroups(active.types);
  const sections = [
    [t("matchupStrong"), renderTypeChips(matchups.attackStrong)],
    [t("matchupWeak"), renderTypeChips(matchups.weak, { showMultiplier: true })],
    [t("matchupResists"), renderTypeChips(matchups.resists, { showMultiplier: true })],
    [t("matchupImmune"), renderTypeChips(matchups.immune)]
  ];

  elements.typeMatchups.innerHTML = `
    <div class="type-matchup-header">
      <strong>${t("matchupTitle")}</strong>
      <span>${t("matchupNote")}</span>
    </div>
    <div class="type-matchup-grid">
      ${sections.map(([title, chips]) => `
        <div class="type-matchup-card">
          <span>${title}</span>
          <div>${chips}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function formatEvs(evs) {
  return stats
    .filter(([key]) => evs[key] > 0)
    .map(([key]) => `${evs[key]} ${getStatLabel(key)}`)
    .join(" / ");
}

function getPrimaryType(types, isSpecial) {
  const typeList = types.split(" / ");
  return typeList.find((type) => isSpecial === specialMoveTypes.includes(type)) ?? typeList[0];
}

function getSuggestedMoves(active, isSpecial) {
  if (pveMoveSets[active.id]) return pveMoveSets[active.id];
  const primaryType = getPrimaryType(active.types, isSpecial);
  return moveSuggestions[primaryType] ?? (isSpecial
    ? ["Psychokinese", "Donnerblitz", "Eisstrahl", "Schutzschild"]
    : ["Rückkehr", "Erdbeben", "Durchbruch", "Schutzschild"]);
}

function getSuggestedItem(types, isSpecial) {
  const primaryType = getPrimaryType(types, isSpecial);
  return preferredItems[primaryType] ?? "Typ-verstärkendes Item";
}

function getItemDescription(itemText) {
  const names = itemText.split("/").map((name) => name.trim());
  return names
    .map((name) => {
      const description = itemDescriptions[state.lang][name] ?? itemDescriptions[state.lang]["Typ-verstärkendes Item"];
      return `${getItemDisplayName(name)}: ${description}`;
    })
    .join(" ");
}

function getMoveDescription(moveName) {
  return moveDescriptions[state.lang][moveName] ?? extraMoveDescriptions[state.lang][moveName] ?? (state.lang === "en"
    ? "Useful move for damage, coverage or setup."
    : "PvE-taugliche Attacke für Schaden, Coverage oder Setup.");
}

function getMoveTypeLabel(type) {
  if (!type) return "—";
  if (state.lang === "de") return type;
  const typeKey = Object.entries(typeNames.de).find(([, germanName]) => germanName === type)?.[0];
  return typeKey ? typeNames.en[typeKey] : type;
}

function getMoveCategory(details, moveName) {
  if (!details) return "status";
  if (details.power === null && !variableDamageMoves.has(moveName)) return "status";
  return specialMoveTypes.includes(details.type) ? "special" : "physical";
}

function getMoveCategoryLabel(category) {
  const labels = {
    de: { physical: "Physisch", special: "Spezial", status: "Status" },
    en: { physical: "Physical", special: "Special", status: "Status" }
  };
  return labels[state.lang][category] ?? category;
}

function formatMoveNumber(value, suffix = "") {
  return value === null || value === undefined ? "—" : `${value}${suffix}`;
}

function renderMoveCard(move) {
  const details = moveDetails[move];
  const category = getMoveCategory(details, move);
  const labels = state.lang === "en"
    ? { type: "Type", category: "Cat.", power: "Power", accuracy: "Acc.", pp: "PP" }
    : { type: "Typ", category: "Kat.", power: "Stärke", accuracy: "Genau.", pp: "AP" };

  return `
    <div class="move-card">
      <div class="move-card-header">
        <strong>${getMoveDisplayName(move)}</strong>
        <span>${getMoveTypeLabel(details?.type)}</span>
      </div>
      <div class="move-meta">
        <span><small>${labels.category}</small><b>${getMoveCategoryLabel(category)}</b></span>
        <span><small>${labels.power}</small><b>${formatMoveNumber(details?.power)}</b></span>
        <span><small>${labels.accuracy}</small><b>${formatMoveNumber(details?.accuracy, "%")}</b></span>
        <span><small>${labels.pp}</small><b>${formatMoveNumber(details?.pp)}</b></span>
      </div>
      <p>${getMoveDescription(move)}</p>
    </div>
  `;
}

function renderMoveGlossary() {
  const entries = state.lang === "en"
    ? [
      ["STAB", "Same Type Attack Bonus: same-type moves deal x1.5 damage."],
      ["Coverage", "A move with a different type so you can hit more opponents effectively."],
      ["Physical / Special", "In Gen 3 this depends on the move type, not on the move itself."],
      ["Power", "Base damage. Higher usually means harder hits."],
      ["Accuracy", "Hit chance. — means it does not use a normal accuracy check."],
      ["PP", "How many times you can use the move before healing."],
      ["Status", "Moves that do not directly deal damage, like sleep, paralysis or stat boosts."]
    ]
    : [
      ["STAB", "Same Type Attack Bonus: Attacke mit gleichem Typ macht x1,5 Schaden."],
      ["Coverage", "Attacke mit anderem Typ, damit du mehr Gegner effektiv treffen kannst."],
      ["Physisch / Spezial", "In Gen 3 hängt das vom Attacken-Typ ab, nicht von der einzelnen Attacke."],
      ["Stärke", "Basis-Schaden. Höher heißt meistens: trifft härter."],
      ["Genauigkeit", "Trefferchance. — heißt: keine normale Genauigkeitsprüfung."],
      ["AP", "Wie oft du die Attacke benutzen kannst, bevor du heilen musst."],
      ["Status", "Attacken ohne direkten Schaden, z.B. Schlaf, Paralyse oder Werte-Boosts."]
    ];

  return `
    <div class="move-glossary">
      ${entries.map(([title, text]) => `
        <div>
          <strong>${title}</strong>
          <p>${text}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function getFallbackBuild(active) {
  const evs = { ...getRecommendedTarget(active.types, active.id) };
  const isSpecial = evs.spa >= evs.atk;
  const isBulky = evs.hp >= 252 && evs.spe === 0;

  return {
    role: state.lang === "en"
      ? (isSpecial
        ? (isBulky ? "Bulky Special Attacker" : "Fast Special Attacker")
        : (isBulky ? "Bulky Physical Attacker" : "Physical Attacker"))
      : (isSpecial
        ? (isBulky ? "Bulky Spezial-Angreifer" : "Schneller Spezial-Angreifer")
        : (isBulky ? "Bulky Physischer Angreifer" : "Physischer Angreifer")),
    nature: isSpecial
      ? (state.lang === "en" ? "Timid or Modest" : "Scheu oder Mäßig")
      : (state.lang === "en" ? "Jolly or Adamant" : "Froh oder Hart"),
    ability: state.lang === "en" ? "Best available ability" : "Beste verfügbare Fähigkeit",
    item: getSuggestedItem(active.types, isSpecial),
    evs,
    moves: getSuggestedMoves(active, isSpecial),
    note: state.lang === "en"
      ? "PvE recommendation: story-friendly moves with STAB, coverage, or useful status."
      : "PvE-Empfehlung: Story-taugliche Attacken mit STAB, Coverage oder nützlichem Status."
  };
}

function getActiveBuild() {
  const active = pokemon[state.selectedPokemon];
  const build = buildRecommendations[active.id] ?? getFallbackBuild(active);
  return {
    ...build,
    moves: pveMoveSets[active.id] ?? build.moves
  };
}

function renderBuildRecommendation() {
  const build = getActiveBuild();
  elements.buildRecommendation.innerHTML = `
    <div class="build-summary">
      <strong>${translateText(build.role)}</strong>
      <p class="muted">${translateText(build.note)}</p>
    </div>
    <div class="build-detail-grid">
      <div class="build-chip">
        <span>${t("nature")}</span>
        <strong>${formatNatureText(build.nature)}</strong>
      </div>
      <div class="build-chip">
        <span>${t("evGoal")}</span>
        <strong>${formatEvs(build.evs)}</strong>
      </div>
    </div>
    <div class="item-recommendation">
      <span>${t("item")}</span>
      <strong>${getItemDisplayText(build.item)}</strong>
      <p>${getItemDescription(build.item)}</p>
    </div>
    <div class="move-list">
      <span>${t("moves")}</span>
      <div class="move-grid">
        ${build.moves.map((move) => renderMoveCard(move)).join("")}
      </div>
    </div>
  `;
}

function renderStats() {
  const active = pokemon[state.selectedPokemon];
  const total = totalEvs();
  const remaining = Math.max(0, 510 - total);
  elements.totalBadge.textContent = `${total} / 510`;
  elements.totalBadge.classList.toggle("warning", total >= 510);
  elements.currentEvsValue.textContent = total;
  elements.remainingEvsValue.textContent = remaining;
  elements.multiplierValue.textContent = `x${getMultiplier()}`;
  elements.pokerusToggle.checked = state.pokerusActive;
  elements.machoToggle.checked = state.machoActive;

  elements.statRows.innerHTML = stats
    .map(([key]) => {
      const label = getStatLabel(key);
      const value = state.evs[key];
      const target = active.target[key];
      const progress = target > 0 ? Math.min(100, (value / target) * 100) : Math.min(100, (value / 252) * 100);
      const warning = value > target ? " warning" : "";
      const complete = target > 0 && value === target ? " complete" : "";
      const targetText = value > target
        ? `${t("target")} ${target} · ${t("overTarget")}`
        : target > 0 && value === target
          ? `${t("target")} ${target} · ${t("completeStat")}`
          : `${t("target")} ${target}`;

      return `
        <div class="stat-row${warning}${complete}">
          <strong class="${warning}">${label}</strong>
          <div class="bar" aria-label="${label} ${value} ${state.lang === "en" ? "of" : "von"} ${target}">
            <span data-progress="${progress}"></span>
          </div>
          <span class="target-pill">${targetText}</span>
          <input data-stat="${key}" type="number" min="0" max="252" value="${value}" aria-label="${label} EVs" />
        </div>
      `;
    })
    .join("");

  elements.statRows.querySelectorAll("[data-progress]").forEach((bar) => {
    bar.style.width = `${bar.dataset.progress}%`;
  });
}

function renderEnemies() {
  const multiplier = getMultiplier();
  const neededStats = getNeededStats();
  const sourceEnemies = state.trainingSource === "dex" ? evDexEnemies : enemies;
  const search = elements.evDexSearch.value.trim().toLowerCase();
  const filteredEnemies = sourceEnemies.filter((enemy) => {
    if (!enemyMatchesStatFilter(enemy, neededStats)) return false;
    if (!search || state.trainingSource !== "dex") return true;
    return [enemy.name, enemy.nameEn].some((name) => name.toLowerCase().includes(search));
  });

  elements.enemyButtons.innerHTML = filteredEnemies
    .map((enemy, index) => {
      const enemyIndex = sourceEnemies.indexOf(enemy);
      return `
        <button class="enemy-button" type="button" data-enemy="${enemyIndex}" data-source="${state.trainingSource}">
          <strong>${getEnemyName(enemy)}</strong>
          <span>${formatEnemyYield(enemy, multiplier)} ${t("nowGain")} | ${getEnemyPlace(enemy)}</span>
        </button>
      `;
    })
    .join("") || `<p class="muted">${t("noTrainingOptions")}</p>`;
}

function renderTrainingPlan() {
  const active = pokemon[state.selectedPokemon];
  const multiplier = getMultiplier();
  const rows = stats
    .map(([key]) => {
      const remaining = Math.max(0, active.target[key] - state.evs[key]);
      if (remaining === 0) return null;
      const options = enemies.filter((enemy) => enemy.stat === key);
      if (options.length === 0) return null;
      const bestEnemy = options.reduce((best, enemy) => enemy.ev > best.ev ? enemy : best, options[0]);
      const gain = bestEnemy.ev * multiplier;
      const battles = Math.ceil(remaining / gain);
      return { key, remaining, enemy: bestEnemy, gain, battles };
    })
    .filter(Boolean);

  elements.trainingPlan.innerHTML = `
    <strong>${t("trainingPlanTitle")}</strong>
    ${rows.length === 0
      ? `<span>${t("trainingPlanDone")}</span>`
      : rows.map((row) => `
        <div class="training-plan-row">
          <span>${getStatLabel(row.key)}: ${row.remaining} EV ${t("trainingPlanStep")}</span>
          <b>${row.battles}x ${getEnemyName(row.enemy)}</b>
          <small>+${row.gain} EV · ${getEnemyPlace(row.enemy)} · ${t("trainingPlanBattles")}</small>
        </div>
      `).join("")}
  `;
}

function renderItemFilters() {
  const filters = [
    ["all", t("itemAll")],
    ["ev", t("itemCategoryEv")],
    ["vitamin", t("itemCategoryVitamin")],
    ["battle", t("itemCategoryBattle")],
    ["build", t("itemCategoryBuild")],
    ["utility", t("itemCategoryUtility")],
    ["berry", t("itemCategoryBerry")],
    ["wild", t("itemMethodWild")],
    ["thief", t("itemMethodThief")],
    ["postgame", t("itemMethodPostgame")],
    ["pickup", t("itemMethodPickup")]
  ];

  elements.itemFilters.innerHTML = filters
    .map(([key, label]) => `
      <button class="filter-button${state.selectedItemFilter === key ? " active" : ""}" type="button" data-item-filter="${key}">
        ${label}
      </button>
    `)
    .join("");
}

function renderItemGuide() {
  const searchTerm = elements.itemSearch.value.trim().toLowerCase();
  const filteredItems = itemGuide.filter((item) => {
    const text = getGuideItemText(item);
    const haystack = `${text.name} ${text.location} ${text.effect} ${text.note} ${getItemCategoryLabel(item.category)} ${getItemMethodLabel(item.method)}`.toLowerCase();
    const filterMatches = state.selectedItemFilter === "all"
      || item.category === state.selectedItemFilter
      || item.method === state.selectedItemFilter;
    return filterMatches && haystack.includes(searchTerm);
  });

  elements.itemCards.innerHTML = filteredItems
    .map((item) => {
      const text = getGuideItemText(item);
      const statBadge = item.stat ? `<span class="item-stat-badge">${getStatLabel(item.stat)}</span>` : "";

      return `
        <article class="item-card">
          <div class="item-card-header">
            <div>
              <span>${getItemCategoryLabel(item.category)}</span>
              <h3>${text.name}</h3>
            </div>
            ${statBadge}
          </div>
          <dl>
            <div>
              <dt>${t("itemSource")}</dt>
              <dd><span class="item-source-badge">${getItemMethodLabel(item.method)}</span></dd>
            </div>
            <div>
              <dt>${t("itemLocation")}</dt>
              <dd>${text.location}</dd>
            </div>
            <div>
              <dt>${t("itemEffect")}</dt>
              <dd>${text.effect}</dd>
            </div>
            <div>
              <dt>${t("itemNote")}</dt>
              <dd>${text.note}</dd>
            </div>
          </dl>
        </article>
      `;
    })
    .join("") || `<p class="muted">${t("itemNoResults")}</p>`;
}

function renderLocationFilters() {
  const filters = [
    ["all", t("locationAll")],
    ["story", t("locationStory")],
    ["postgame", t("locationPostgame")],
    ["important", t("locationImportant")],
    ["ev", t("locationEv")],
    ["build", t("locationBuild")],
    ["hidden", t("locationHidden")],
    ["wild", t("locationWild")]
  ];

  elements.locationFilters.innerHTML = filters
    .map(([key, label]) => `
      <button class="filter-button${state.selectedLocationFilter === key ? " active" : ""}" type="button" data-location-filter="${key}">
        ${label}
      </button>
    `)
    .join("");
}

function getLocationText(location) {
  return location[state.lang] ?? location.de;
}

function getLocationTagLabel(tag) {
  return {
    story: t("locationStory"),
    postgame: t("locationPostgame"),
    important: t("locationImportant"),
    ev: t("locationEv"),
    build: t("locationBuild"),
    hidden: t("locationHidden"),
    wild: t("locationWild")
  }[tag] ?? tag;
}

function renderLocationGuide() {
  const filteredLocations = locationGuide.filter((location) => {
    return state.selectedLocationFilter === "all" || location.tags.includes(state.selectedLocationFilter);
  });

  elements.locationSteps.innerHTML = filteredLocations
    .map((location) => {
      const text = getLocationText(location);
      const tags = location.tags
        .map((tag) => `<span>${getLocationTagLabel(tag)}</span>`)
        .join("");
      const items = text.items
        .map((item) => `<li>${item}</li>`)
        .join("");

      return `
        <article class="location-card">
          <div class="location-step">${location.stage}</div>
          <div class="location-card-body">
            <div class="location-card-header">
              <div>
                <span>${t("locationWhen")}</span>
                <h3>${text.place}</h3>
              </div>
              <div class="location-tags">${tags}</div>
            </div>
            <p class="location-when">${text.when}</p>
            <div class="location-detail-grid">
              <div>
                <strong>${t("locationDo")}</strong>
                <p>${text.action}</p>
              </div>
              <div>
                <strong>${t("locationItems")}</strong>
                <ul>${items}</ul>
              </div>
            </div>
            <p class="location-tip"><b>${t("locationTip")}:</b> ${text.tip}</p>
          </div>
        </article>
      `;
    })
    .join("") || `<p class="muted">${t("locationNoResults")}</p>`;
}

function render() {
  renderLanguage();
  renderView();
  renderTeamSlots();
  renderTeamRecipients();
  renderTeamTools();
  renderTutorial();
  renderVersionSelect();
  renderNatureSelect();
  renderPokemonSelect();
  renderPokemon();
  renderBuildRecommendation();
  renderStats();
  renderTrainingHelp();
  renderTrainingSourceControls();
  renderStatFilters();
  renderLastAction();
  renderTrainingPlan();
  renderEnemies();
  renderItemFilters();
  renderItemGuide();
  renderLocationFilters();
  renderLocationGuide();
}

elements.pokemonSelect.addEventListener("change", (event) => {
  if (event.target.value === "") return;
  state.selectedPokemon = Number(event.target.value);
  state.evs = { ...pokemon[state.selectedPokemon].target };
  Object.keys(state.evs).forEach((key) => {
    state.evs[key] = 0;
  });
  state.history = [];
  state.lastAction = null;
  saveState();
  render();
});

elements.pokemonSearch.addEventListener("input", () => {
  render();
});

elements.teamSlots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-team-slot]");
  if (!button) return;
  syncActiveTeamSlot();
  state.selectedTeamSlot = Number(button.dataset.teamSlot);
  applyTeamSlot(state.selectedTeamSlot);
  saveState();
  render();
});

elements.slotNameInput.addEventListener("input", (event) => {
  state.teamSlots[state.selectedTeamSlot].nickname = sanitizeSlotName(event.target.value);
  saveState();
  renderTeamSlots();
  renderTeamRecipients();
  renderTeamTools();
});

elements.teamRecipientOptions.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-team-recipient]");
  if (!checkbox) return;
  const index = Number(checkbox.dataset.teamRecipient);
  state.teamRecipients[index] = checkbox.checked;
  state.teamRecipients = normalizeTeamRecipients(state.teamRecipients, state.selectedTeamSlot);
  saveState();
  renderTeamSlots();
  renderTeamRecipients();
});

elements.teamActiveOnlyButton.addEventListener("click", () => {
  state.teamRecipients = Array.from({ length: 6 }, (_, index) => index === state.selectedTeamSlot);
  saveState();
  renderTeamSlots();
  renderTeamRecipients();
});

elements.teamAllButton.addEventListener("click", () => {
  state.teamRecipients = Array.from({ length: 6 }, () => true);
  saveState();
  renderTeamSlots();
  renderTeamRecipients();
});

elements.exportTeamButton.addEventListener("click", async () => {
  const code = encodeTeamCode(createExportPayload());
  elements.teamCodeField.value = code;
  elements.teamCodeField.hidden = false;
  elements.teamCodeField.select();
  state.lastAction = { type: "info", message: t("exportDone") };

  try {
    await navigator.clipboard?.writeText(code);
    state.lastAction = { type: "info", message: t("exportCopied") };
  } catch {
    // The visible code field is the fallback.
  }

  saveState();
  render();
});

elements.importTeamButton.addEventListener("click", () => {
  try {
    const parsed = decodeTeamCode(elements.teamCodeField.value);
    state.teamSlots = normalizeTeamSlots(parsed);
    state.selectedTeamSlot = Math.min(Math.max(Number(parsed.selectedTeamSlot ?? 0), 0), 5);
    state.teamRecipients = normalizeTeamRecipients(parsed.teamRecipients, state.selectedTeamSlot);
    applyTeamSlot(state.selectedTeamSlot);
    state.lastAction = { type: "info", message: t("importDone") };
    saveState();
    render();
  } catch {
    state.lastAction = { type: "blocked", message: t("importFailed") };
    renderLastAction();
  }
});

elements.resetSlotButton.addEventListener("click", () => {
  const selectedPokemon = state.selectedPokemon;
  state.selectedNature = "timid";
  state.shinyActive = false;
  state.evs = blankEvs();
  state.history = [];
  state.lastAction = { type: "info", message: t("slotResetMessage") };
  state.teamSlots[state.selectedTeamSlot] = createTeamSlot(state.selectedTeamSlot, {
    nickname: "",
    selectedPokemon,
    selectedNature: state.selectedNature,
    shinyActive: state.shinyActive,
    evs: state.evs,
    history: state.history,
    lastAction: state.lastAction
  });
  saveState();
  render();
});

elements.tutorialButton.addEventListener("click", openTutorial);
elements.tutorialCloseButton.addEventListener("click", closeTutorial);
elements.tutorialBackdrop.addEventListener("click", closeTutorial);

const splashFadeMs = 520;
const splashTotalMs = 1600;

function hideSplash() {
  if (!elements.splashScreen || elements.splashScreen.classList.contains("is-hidden")) return;
  elements.splashScreen.classList.add("is-hidden");
  document.body.classList.remove("splash-active");
  window.setTimeout(() => {
    elements.splashScreen.hidden = true;
  }, splashFadeMs);
}

elements.splashScreen.addEventListener("click", hideSplash);
window.setTimeout(hideSplash, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 350 : splashTotalMs - splashFadeMs);

elements.languageButton.addEventListener("click", () => {
  state.lang = state.lang === "de" ? "en" : "de";
  saveState();
  render();
});

elements.trainerViewButton.addEventListener("click", () => {
  state.currentView = "trainer";
  saveState();
  render();
});

elements.itemsViewButton.addEventListener("click", () => {
  state.currentView = "items";
  saveState();
  render();
});

elements.locationsViewButton.addEventListener("click", () => {
  state.currentView = "locations";
  saveState();
  render();
});

elements.itemSearch.addEventListener("input", () => {
  renderItemGuide();
});

elements.trainingSourceButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-training-source]");
  if (!button) return;
  state.trainingSource = button.dataset.trainingSource === "dex" ? "dex" : "quick";
  if (state.trainingSource === "dex" && state.selectedStatFilter === "needed") state.selectedStatFilter = "all";
  saveState();
  renderTrainingSourceControls();
  renderStatFilters();
  renderEnemies();
});

elements.evDexSearch.addEventListener("input", renderEnemies);

elements.itemFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-item-filter]");
  if (!button) return;
  state.selectedItemFilter = button.dataset.itemFilter;
  saveState();
  renderItemFilters();
  renderItemGuide();
});

elements.locationFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-location-filter]");
  if (!button) return;
  state.selectedLocationFilter = button.dataset.locationFilter;
  saveState();
  renderLocationFilters();
  renderLocationGuide();
});

elements.shinyButton.addEventListener("click", () => {
  state.shinyActive = !state.shinyActive;
  saveState();
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.tutorialModal.hidden) {
    closeTutorial();
  }
});

elements.versionSelect.addEventListener("change", (event) => {
  state.selectedVersion = Number(event.target.value);
  saveState();
  render();
});

elements.natureSelect.addEventListener("change", (event) => {
  state.selectedNature = event.target.value;
  saveState();
  render();
});

elements.statFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.selectedStatFilter = button.dataset.filter;
  saveState();
  render();
});

elements.pokerusToggle.addEventListener("change", (event) => {
  state.pokerusActive = event.target.checked;
  saveState();
  render();
});

elements.machoToggle.addEventListener("change", (event) => {
  state.machoActive = event.target.checked;
  saveState();
  render();
});

elements.statRows.addEventListener("input", (event) => {
  const stat = event.target.dataset.stat;
  if (!stat) return;
  pushHistory({
    type: "manual",
    stat,
    amount: 0,
    previousEvs: { ...state.evs }
  });
  state.evs[stat] = clampEv(event.target.value);
  state.lastAction = {
    type: "manual",
    stat,
    amount: state.evs[stat]
  };
  saveState();
  render();
});

elements.enemyButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-enemy]");
  if (!button) return;
  const sourceEnemies = button.dataset.source === "dex" ? evDexEnemies : enemies;
  addEnemyEv(sourceEnemies[Number(button.dataset.enemy)]);
});

elements.resetButton.addEventListener("click", () => {
  pushHistory({
    type: "reset",
    stat: "hp",
    amount: 0,
    previousEvs: { ...state.evs }
  });
  state.evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  state.lastAction = {
    type: "info",
    message: state.lang === "en" ? "EVs reset to 0." : "EVs auf 0 zurückgesetzt."
  };
  saveState();
  render();
});

elements.applyBuildButton.addEventListener("click", () => {
  const build = getActiveBuild();
  pushHistory({
    type: "target",
    stat: "hp",
    amount: 0,
    previousEvs: { ...state.evs }
  });
  pokemon[state.selectedPokemon].target = { ...build.evs };
  state.lastAction = {
    type: "info",
    message: state.lang === "en" ? "Build goal applied." : "Build-Ziel gesetzt."
  };
  saveState();
  render();
});

elements.undoButton.addEventListener("click", undoLastAction);

loadState();
render();
