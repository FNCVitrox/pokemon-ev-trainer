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
    languageButton: "EN",
    reset: "Reset",
    subtitle: "Plane Builds, tracke EVs und trainiere schneller in Feuerrot / Blattgrün.",
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
    tutorialButton: "Tutorial",
    tutorialEyebrow: "Guide",
    tutorialTitle: "EV-Training verstehen",
    tutorialClose: "Schließen",
    allStats: "Alle",
    undo: "Undo",
    nothingToUndo: "Noch nichts zum Rückgängig machen.",
    noTrainingOptions: "Für diesen Zielwert sind aktuell keine Trainingsgegner eingetragen.",
    trainingHelp: "Aktiviere Pokérus oder Machoband, dann ändern sich Multiplikator und EV-Werte sofort.",
    trainingComplete: "Ziel erreicht. Stoppe das Training für diesen Build.",
    lastActionPrefix: "Eingetragen",
    overTarget: "über Ziel",
    completeStat: "fertig",
    shinyOn: "Shiny: An",
    shinyOff: "Shiny: Aus"
  },
  en: {
    languageButton: "DE",
    reset: "Reset",
    subtitle: "Plan builds, track EVs, and train faster in FireRed / LeafGreen.",
    search: "Search",
    searchPlaceholder: "e.g. Charizard, Pikachu, Mewtwo...",
    pokemon: "Pokémon",
    activeBuild: "Active build",
    version: "Version",
    nature: "Nature",
    target: "Goal",
    targetTitle: "EV spread",
    buildTitle: "Recommended playstyle",
    applyBuild: "Set build goal",
    trainingTitle: "Defeated Pokémon",
    noResults: "No results",
    complete: "All goal values reached.",
    moves: "Moves",
    role: "Role",
    item: "Item",
    evGoal: "EV goal",
    defeated: "Defeated Pokémon",
    neutralNature: "neutral",
    currentEvs: "Current",
    remainingEvs: "Remaining",
    multiplier: "Multiplier",
    nowGain: "now",
    tutorialButton: "Tutorial",
    tutorialEyebrow: "Guide",
    tutorialTitle: "Understanding EV training",
    tutorialClose: "Close",
    allStats: "All",
    undo: "Undo",
    nothingToUndo: "Nothing to undo yet.",
    noTrainingOptions: "No training enemies are entered for this goal yet.",
    trainingHelp: "Toggle Pokérus or Macho Brace and the multiplier plus EV gains update immediately.",
    trainingComplete: "Goal reached. Stop training for this build.",
    lastActionPrefix: "Added",
    overTarget: "over goal",
    completeStat: "done",
    shinyOn: "Shiny: On",
    shinyOff: "Shiny: Off"
  }
};

const tutorialSteps = {
  de: [
    {
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      title: "1. Wähle dein Pokémon und den Build",
      text: "Der Build legt fest, welche Stats du trainieren willst. Bei Glumanda sind Sp. Ang. und Initiative sinnvoll, weil Feuer-Attacken in Gen 3 speziell sind."
    },
    {
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
      title: "2. Besiege passende Pokémon",
      text: "Jedes besiegte Pokémon gibt EVs. Abra gibt zum Beispiel Sp. Ang.-EVs. Tippe in der App auf den Gegner, den du im Spiel besiegt hast."
    },
    {
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
      title: "3. Nutze Multiplikatoren",
      text: "Machoband verdoppelt EVs. Pokérus verdoppelt EVs ebenfalls. Zusammen wird aus +1 also +4. Die Gegnerbuttons zeigen dir direkt den aktuellen Wert."
    },
    {
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      title: "4. So erkennst du EV-Fortschritt",
      text: "Feuerrot/Blattgrün zeigt EV-Zahlen nicht direkt. Du erkennst es indirekt: Die Stats steigen beim Level-up stärker, und diese App hilft dir, die besiegten Pokémon mitzuzählen."
    }
  ],
  en: [
    {
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      title: "1. Choose your Pokémon and build",
      text: "The build defines which stats you want to train. For Charmander, Sp. Atk and Speed make sense because Fire moves are special in Gen 3."
    },
    {
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
      title: "2. Defeat matching Pokémon",
      text: "Every defeated Pokémon gives EVs. Abra gives Sp. Atk EVs, for example. Tap the enemy in the app after defeating it in-game."
    },
    {
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
      title: "3. Use multipliers",
      text: "Macho Brace doubles EVs. Pokérus doubles EVs too. Together, +1 becomes +4. The enemy buttons show the current value directly."
    },
    {
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      title: "4. How to notice EV progress",
      text: "FireRed/LeafGreen does not show EV numbers directly. You notice it indirectly: stats grow more on level-up, and this app helps you count defeated Pokémon."
    }
  ]
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
    item: "Holzkohle / Scope-Linse",
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
    item: "Psycho-verstärkendes Item",
    evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
    moves: ["Psychokinese", "Gedankengut", "Genesung", "Donnerschlag"],
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
    item: "Scope-Linse / Psycho-verstärkendes Item",
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
    item: "Mystikwasser",
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
    item: "Drachenzahn",
    evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ["Drachentanz", "Erdbeben", "Fliegen", "Rückkehr"],
    note: "Nach Drachentanz kann Dragoran viele Kämpfe alleine drehen."
  },
  150: {
    role: "Legendärer Spezial-Sweeper",
    nature: "Scheu oder Mäßig",
    ability: "Erzwinger",
    item: "Psycho-verstärkendes Item",
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
    "Typ-verstärkendes Item": "boosts your most important attack type."
  }
};

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
  [29, "Nidoran w", "Gift"],
  [30, "Nidorina", "Gift"],
  [31, "Nidoqueen", "Gift / Boden"],
  [32, "Nidoran m", "Gift"],
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
  "Nidoran F", "Nidorina", "Nidoqueen", "Nidoran M", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales",
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

const enemies = [
  { name: "Raupy", stat: "hp", ev: 1, place: "Vertania-Wald", note: "Early Game KP" },
  { name: "Pummeluff", stat: "hp", ev: 2, place: "Route 3", note: "Mehr KP pro Kampf" },
  { name: "Flegmon", stat: "hp", ev: 1, place: "Seeschauminseln", note: "KP-Option im Wasser" },
  { name: "Machollo", stat: "atk", ev: 1, place: "Felstunnel", note: "Angriff trainieren" },
  { name: "Menki", stat: "atk", ev: 1, place: "Route 22", note: "Frühe Angriffs-Option" },
  { name: "Krabby", stat: "atk", ev: 1, place: "Angeln", note: "Wasser-Angriffstraining" },
  { name: "Kleinstein", stat: "def", ev: 1, place: "Mondberg", note: "Verteidigung trainieren" },
  { name: "Onix", stat: "def", ev: 1, place: "Felstunnel", note: "Verteidigung in Höhlen" },
  { name: "Muschas", stat: "def", ev: 1, place: "Angeln", note: "Verteidigung per Wasserroute" },
  { name: "Abra", stat: "spa", ev: 1, place: "Route 24", note: "Early Game Sp. Angriff" },
  { name: "Nebulak", stat: "spa", ev: 1, place: "Pokémon-Turm", note: "Konstant für Sp. Angriff" },
  { name: "Myrapla", stat: "spa", ev: 1, place: "Route 5 / 6", note: "Pflanzen-Option für Sp. Angriff" },
  { name: "Tentacha", stat: "spd", ev: 1, place: "Surfen", note: "Sehr häufig für Sp. Vert." },
  { name: "Drowzee", stat: "spd", ev: 1, place: "Route 11", note: "Frühe Sp. Vert.-Option" },
  { name: "Jurob", stat: "spd", ev: 1, place: "Seeschauminseln", note: "Sp. Vert. im Late Game" },
  { name: "Rattfratz", stat: "spe", ev: 1, place: "Route 1", note: "Sehr früh für Initiative" },
  { name: "Zubat", stat: "spe", ev: 1, place: "Mondberg", note: "Gute Höhlen-Option" },
  { name: "Dodu", stat: "spe", ev: 1, place: "Route 16 / 17", note: "Initiative im Mid Game" }
];

const state = {
  lang: "de",
  selectedPokemon: 0,
  selectedVersion: 0,
  selectedNature: "timid",
  pokerusActive: false,
  machoActive: false,
  shinyActive: false,
  selectedStatFilter: "needed",
  history: [],
  lastAction: null,
  evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 }
};

const elements = {
  tutorialButton: document.querySelector("#tutorialButton"),
  tutorialModal: document.querySelector("#tutorialModal"),
  tutorialBackdrop: document.querySelector("#tutorialBackdrop"),
  tutorialEyebrow: document.querySelector("#tutorialEyebrow"),
  tutorialTitle: document.querySelector("#tutorialTitle"),
  tutorialCloseButton: document.querySelector("#tutorialCloseButton"),
  tutorialContent: document.querySelector("#tutorialContent"),
  languageButton: document.querySelector("#languageButton"),
  appSubtitle: document.querySelector("#appSubtitle"),
  searchLabel: document.querySelector("#searchLabel"),
  pokemonSearch: document.querySelector("#pokemonSearch"),
  pokemonSelectLabel: document.querySelector("#pokemonSelectLabel"),
  pokemonSelect: document.querySelector("#pokemonSelect"),
  spriteFrame: document.querySelector("#spriteFrame"),
  pokemonSprite: document.querySelector("#pokemonSprite"),
  pokemonName: document.querySelector("#pokemonName"),
  pokemonTypes: document.querySelector("#pokemonTypes"),
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
  undoButton: document.querySelector("#undoButton"),
  trainingHelp: document.querySelector("#trainingHelp"),
  statFilters: document.querySelector("#statFilters"),
  lastAction: document.querySelector("#lastAction"),
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
    state.lang = parsed.lang ?? "de";
    state.selectedPokemon = parsed.selectedPokemon ?? 0;
    state.selectedVersion = parsed.selectedVersion ?? 0;
    state.selectedNature = parsed.selectedNature ?? "timid";
    state.pokerusActive = parsed.pokerusActive ?? false;
    state.machoActive = parsed.machoActive ?? false;
    state.shinyActive = parsed.shinyActive ?? false;
    state.selectedStatFilter = parsed.selectedStatFilter ?? "needed";
    state.history = Array.isArray(parsed.history) ? parsed.history.slice(-20) : [];
    state.lastAction = parsed.lastAction ?? null;
    state.evs = { ...state.evs, ...parsed.evs };
  } catch {
    localStorage.removeItem("pokemonEvTrainerState");
  }
}

function saveState() {
  try {
    localStorage.setItem("pokemonEvTrainerState", JSON.stringify(state));
  } catch {
    elements.lastAction.textContent = state.lang === "en"
      ? "Could not save locally. Your browser storage may be full or blocked."
      : "Konnte nicht lokal speichern. Dein Browser-Speicher ist eventuell voll oder blockiert.";
  }
}

function t(key) {
  return i18n[state.lang][key] ?? i18n.de[key] ?? key;
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

function formatNatureText(text) {
  if (state.lang === "de") return text;

  return natures.reduce((result, nature) => {
    return result.replaceAll(nature.de, nature.en);
  }, text).replaceAll(" oder ", " or ");
}

function getPokemonName(entry) {
  return state.lang === "en" ? entry.nameEn : entry.name;
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

function renderLanguage() {
  document.documentElement.lang = state.lang;
  elements.tutorialButton.textContent = t("tutorialButton");
  elements.tutorialEyebrow.textContent = t("tutorialEyebrow");
  elements.tutorialTitle.textContent = t("tutorialTitle");
  elements.tutorialCloseButton.textContent = t("tutorialClose");
  elements.languageButton.textContent = t("languageButton");
  elements.resetButton.textContent = t("reset");
  elements.appSubtitle.textContent = t("subtitle");
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
  elements.undoButton.textContent = t("undo");
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

function renderTutorial() {
  elements.tutorialContent.innerHTML = `
    <div class="tutorial-grid">
      ${tutorialSteps[state.lang]
        .map((step) => `
          <article class="tutorial-card">
            <div class="tutorial-image">
              <img src="${step.image}" alt="" />
            </div>
            <div>
              <h3>${step.title}</h3>
              <p>${step.text}</p>
            </div>
          </article>
        `)
        .join("")}
    </div>
    <div class="tutorial-note">
      <strong>${state.lang === "en" ? "Important" : "Wichtig"}</strong>
      <p>${state.lang === "en"
        ? "EVs are hidden in FireRed/LeafGreen. The app is your counter: only tap enemies you actually defeated or gained EXP from."
        : "EVs sind in Feuerrot/Blattgrün versteckt. Die App ist dein Zähler: Tippe nur Gegner an, die du wirklich besiegt hast oder von denen du EP bekommen hast."}</p>
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

function addEnemyEv(enemy) {
  const gained = enemy.ev * getMultiplier();
  const currentTotal = totalEvs();
  const roomInStat = 252 - state.evs[enemy.stat];
  const roomTotal = 510 - currentTotal;
  const applied = Math.max(0, Math.min(gained, roomInStat, roomTotal));

  if (applied <= 0) {
    state.lastAction = {
      type: "blocked",
      enemy: enemy.name,
      stat: enemy.stat,
      amount: 0
    };
    saveState();
    render();
    return;
  }

  pushHistory({
    type: "enemy",
    enemy: enemy.name,
    stat: enemy.stat,
    amount: applied,
    previousEvs: { ...state.evs }
  });
  state.evs[enemy.stat] += applied;
  state.lastAction = {
    type: "enemy",
    enemy: enemy.name,
    stat: enemy.stat,
    amount: applied
  };
  saveState();
  render();
}

function undoLastAction() {
  const action = state.history.pop();
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

function getSuggestedMoves(types, isSpecial) {
  const primaryType = getPrimaryType(types, isSpecial);
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
      return `${name}: ${description}`;
    })
    .join(" ");
}

function getFallbackBuild(active) {
  const evs = { ...getRecommendedTarget(active.types, active.id) };
  const isSpecial = evs.spa >= evs.atk;
  const isBulky = evs.hp >= 252 && evs.spe === 0;

  return {
    role: isSpecial
      ? (isBulky ? "Bulky Spezial-Angreifer" : "Schneller Spezial-Angreifer")
      : (isBulky ? "Bulky Physischer Angreifer" : "Physischer Angreifer"),
    nature: isSpecial
      ? (state.lang === "en" ? "Timid or Modest" : "Scheu oder Mäßig")
      : (state.lang === "en" ? "Jolly or Adamant" : "Froh oder Hart"),
    ability: "Beste verfügbare Fähigkeit",
    item: getSuggestedItem(active.types, isSpecial),
    evs,
    moves: getSuggestedMoves(active.types, isSpecial),
    note: "Basis-Empfehlung: schnell trainieren, Hauptangriff maximieren und danach mit Moves feinjustieren."
  };
}

function getActiveBuild() {
  const active = pokemon[state.selectedPokemon];
  return buildRecommendations[active.id] ?? getFallbackBuild(active);
}

function renderBuildRecommendation() {
  const build = getActiveBuild();
  elements.buildRecommendation.innerHTML = `
    <div class="build-summary">
      <strong>${build.role}</strong>
      <p class="muted">${build.note}</p>
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
      <strong>${build.item}</strong>
      <p>${getItemDescription(build.item)}</p>
    </div>
    <div class="move-list">
      <span>${t("moves")}</span>
      <div class="move-grid">
        ${build.moves.map((move) => `<strong>${move}</strong>`).join("")}
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
          <div class="bar" aria-label="${label} ${value} von ${target}">
            <span style="width: ${progress}%"></span>
          </div>
          <span class="target-pill">${targetText}</span>
          <input data-stat="${key}" type="number" min="0" max="252" value="${value}" aria-label="${label} EVs" />
        </div>
      `;
    })
    .join("");
}

function renderEnemies() {
  const multiplier = getMultiplier();
  const neededStats = getNeededStats();
  const filteredEnemies = enemies.filter((enemy) => {
    if (state.selectedStatFilter === "all") return true;
    if (state.selectedStatFilter === "needed") return neededStats.includes(enemy.stat);
    return enemy.stat === state.selectedStatFilter;
  });

  elements.enemyButtons.innerHTML = filteredEnemies
    .map((enemy, index) => {
      const label = getStatLabel(enemy.stat);
      const gained = enemy.ev * multiplier;
      const enemyIndex = enemies.indexOf(enemy);
      return `
        <button class="enemy-button" type="button" data-enemy="${enemyIndex}">
          <strong>${enemy.name}</strong>
          <span>+${gained} ${label} EV ${t("nowGain")} | ${enemy.place}</span>
        </button>
      `;
    })
    .join("") || `<p class="muted">${t("noTrainingOptions")}</p>`;
}

function render() {
  renderLanguage();
  renderTutorial();
  renderVersionSelect();
  renderNatureSelect();
  renderPokemonSelect();
  renderPokemon();
  renderBuildRecommendation();
  renderStats();
  renderTrainingHelp();
  renderStatFilters();
  renderLastAction();
  renderEnemies();
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

elements.tutorialButton.addEventListener("click", openTutorial);
elements.tutorialCloseButton.addEventListener("click", closeTutorial);
elements.tutorialBackdrop.addEventListener("click", closeTutorial);

elements.languageButton.addEventListener("click", () => {
  state.lang = state.lang === "de" ? "en" : "de";
  saveState();
  render();
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
  addEnemyEv(enemies[Number(button.dataset.enemy)]);
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
