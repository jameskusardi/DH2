export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	zubat: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 35, spa: 35, spd: 40, spe: 55},
	},
	golbat: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 70, spa: 75, spd: 75, spe: 90},
	},
	paras: {
		inherit: true,
		abilities: {0: "Effect Spore", 1: "Dry Skin", H: "Mycelium Might"},
	},
	parasect: {
		inherit: true,
		abilities: {0: "Effect Spore", 1: "Dry Skin", H: "Mycelium Might"},
	},
	hypno: {
		inherit: true,
		evos: ["Hypsand"],
	},
	cubone: {
		inherit: true,
		otherFormes: ["Cubone-Roovnen"],
		formeOrder: ["Cubone", "Cubone-Roovnen"],
	},
	cuboneroovnen: {
		num: 104,
		name: "Cubone-Roovnen",
		baseSpecies: "Cubone",
		forme: "Roovnen",
		types: ["Ground", "Ice"],
		baseStats: {hp: 50, atk: 60, def: 75, spa: 40, spd: 50, spe: 45},
		abilities: {0: "Rock Head", 1: "Lightning Rod", H: "Hail Force"},
		evos: ["Glacone"],
		heightm: 0.4,
		weightkg: 6.5,
		eggGroups: ["Moster"],
	},
	dratini: {
		inherit: true,
		otherFormes: ["Dratini-Roovnen"],
		formeOrder: ["Dratini", "Dratini-Roovnen"],
	},
	dratiniroovnen: {
		num: 147,
		name: "Dratini-Roovnen",
		baseSpecies: "Dratini",
		forme: "Roovnen",
		types: ["Dragon", "Normal"],
		baseStats: {hp: 51, atk: 54, def: 55, spa: 40, spd: 40, spe: 60},
		abilities: {0: "Shed Skin", H: "Dash Happy"},
		heightm: 1.8,
		weightkg: 3.3,
		evos: ["Dragonair-Roovnen"],
		eggGroups: ["Field", "Dragon"],
	},
	dragonair: {
		inherit: true,
		otherFormes: ["Dragonair-Roovnen"],
		formeOrder: ["Dragonair", "Dragonair-Roovnen"],
	},
	dragonairroovnen: {
		num: 148,
		name: "Dragonair-Roovnen",
		baseSpecies: "Dragonair",
		forme: "Roovnen",
		types: ["Dragon", "Normal"],
		baseStats: {hp: 71, atk: 74, def: 75, spa: 60, spd: 60, spe: 80},
		abilities: {0: "Shed Skin", H: "Dash Happy"},
		heightm: 4,
		weightkg: 16.5,
		prevo: "Dratini-Roovnen",
		evos: ["Dragonite-Roovnen"],
		eggGroups: ["Field", "Dragon"],
	},
	dragonite: {
		inherit: true,
		otherFormes: ["Dragonite-Roovnen"],
		formeOrder: ["Dragonite", "Dragonite-Roovnen"],
	},
	dragoniteroovnen: {
		num: 149,
		name: "Dragonite-Roovnen",
		baseSpecies: "Dragonite",
		forme: "Roovnen",
		types: ["Dragon", "Normal"],
		baseStats: {hp: 101, atk: 124, def: 105, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Inner Focus", H: "Dash Happy"},
		heightm: 2.2,
		weightkg: 210,
		prevo: "Dragonair-Roovnen",
		eggGroups: ["Field", "Dragon"],
	},
	crobat: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 80, spa: 85, spd: 80, spe: 130},
	},
	lanturn: {
		inherit: true,
		evos: ["Laichto"],
	},
	unown: {
		inherit: true,
		evos: ["Uninown"],
	},
	shroomish: {
		inherit: true,
		abilities: {0: "Mycelium Might", 1: "Poison Heal", H: "Quick Feet"},
	},
	breloom: {
		inherit: true,
		abilities: {0: "Mycelium Might", 1: "Poison Heal", H: "Technician"},
	},
	torkoal: {
		inherit: true,
		evos: ["Pauption"],
		otherFormes: ["Torkoal-Roovnen"],
		formeOrder: ["Torkoal", "Torkoal-Roovnen"],
	},
	torkoalroovnen: {
		num: 324,
		name: "Torkoal-Roovnen",
		baseSpecies: "Torkoal",
		forme: "Roovnen",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 70, atk: 65, def: 60, spa: 95, spd: 160, spe: 20},
		abilities: {0: "Early Bird", 1: "Solid Rock", H: "Shell Armor"},
		evos: ["Naturthis", "Kunturthis"],
		heightm: 0.5,
		weightkg: 314.7,
		eggGroups: ["Mineral", "Fairy"],
	},
	vibrava: {
		inherit: true,
		abilities: {0: "Levitate", 1: "Arena Trap", H: "Sheer Force"},
	},
	flygon: {
		inherit: true,
		abilities: {0: "Levitate", 1: "Arena Trap", H: "Sheer Force"},
	},
	lunatone: {
		inherit: true,
		abilities: {0: "Levitate", H: "Shadow Shield"},
		baseStats: {hp: 90, atk: 55, def: 65, spa: 105, spd: 85, spe: 80},
	},
	solrock: {
		inherit: true,
		abilities: {0: "Levitate", H: "Drought"},
		baseStats: {hp: 90, atk: 105, def: 85, spa: 55, spd: 65, spe: 80},
	},
	lileep: {
		inherit: true,
		abilities: {0: "Suction Cups", 1: "Sand Armor", H: "Storm Drain"},
	},
	cradily: {
		inherit: true,
		abilities: {0: "Suction Cups", 1: "Sand Armor", H: "Storm Drain"},
	},
	anorith: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Hardened Shell", H: "Swift Swim"},
	},
	armaldo: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Hardened Shell", H: "Swift Swim"},
	},
	tropius: {
		inherit: true,
		evos: ["Tropalm"],
	},
	drifloon: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 44, spa: 60, spd: 54, spe: 70},
	},
	drifblim: {
		inherit: true,
		baseStats: {hp: 150, atk: 90, def: 64, spa: 90, spd: 64, spe: 80},
	},
	roggenrola: {
		inherit: true,
		otherFormes: ["Roggenrola-Roovnen"],
		formeOrder: ["Roggenrola", "Roggenrola-Roovnen"],
	},
	roggenrolaroovnen: {
		num: 524,
		name: "Roggenrola-Roovnen",
		baseSpecies: "Roggenrola",
		forme: "Roovnen",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 55, atk: 20, def: 90, spa: 80, spd: 20, spe: 15},
		abilities: {0: "Sturdy", 1: "Solar Power", H: "Sand Force"},
		evos: ["Boldore-Roovnen"],
		heightm: 0.4,
		weightkg: 18,
		eggGroups: ["Mineral"],
	},
	boldore: {
		inherit: true,
		otherFormes: ["Boldore-Roovnen"],
		formeOrder: ["Boldore", "Boldore-Roovnen"],
	},
	boldoreroovnen: {
		num: 525,
		name: "Boldore-Roovnen",
		baseSpecies: "Boldore",
		forme: "Roovnen",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 70, atk: 45, def: 110, spa: 110, spd: 35, spe: 20},
		abilities: {0: "Sturdy", 1: "Solar Power", H: "Sand Force"},
		prevo: "Roggenrola-Roovnen",
		evos: ["Gigalith-Roovnen"],
		heightm: 0.9,
		weightkg: 102,
		eggGroups: ["Mineral"],
	},
	gigalith: {
		inherit: true,
		otherFormes: ["Gigalith-Roovnen"],
		formeOrder: ["Gigalith", "Gigalith-Roovnen"],
	},
	gigalithroovnen: {
		num: 526,
		name: "Gigalith-Roovnen",
		baseSpecies: "Gigalith",
		forme: "Roovnen",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 90, atk: 55, def: 135, spa: 140, spd: 75, spe: 25},
		abilities: {0: "Sturdy", 1: "Solar Power", H: "Sand Force"},
		prevo: "Boldore-Roovnen",
		heightm: 1.7,
		weightkg: 260,
		eggGroups: ["Mineral"],
	},
	sewaddle: {
		inherit: true,
		otherFormes: ["Sewaddle-Roovnen"],
		formeOrder: ["Sewaddle", "Sewaddle-Roovnen"],
	},
	sewaddleroovnen: {
		num: 540,
		name: "Sewaddle-Roovnen",
		baseSpecies: "Sewaddle",
		forme: "Sewaddle",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 45, atk: 43, def: 80, spa: 40, spd: 70, spe: 32},
		abilities: {0: "Swarm", 1: "Maternal Guard", H: "Overcoat"},
		evos: ["Swadloon-Roovnen"],
		heightm: 0.3,
		weightkg: 2.5,
		eggGroups: ["Bug", "Fairy"],
	},
	swadloon: {
		inherit: true,
		otherFormes: ["Swadloon-Roovnen"],
		formeOrder: ["Swadloon", "Swadloon-Roovnen"],
	},
	swadloonroovnen: {
		num: 541,
		name: "Swadloon-Roovnen",
		baseSpecies: "Swadloon",
		forme: "Roovnen",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 55, atk: 53, def: 100, spa: 50, spd: 90, spe: 32},
		abilities: {0: "Leaf Guard", 1: "Maternal Guard", H: "Overcoat"},
		prevo: "Sewaddle-Roovnen",
		evos: ["Leavanny-Roovnen"],
		heightm: 0.5,
		weightkg: 7.3,
		eggGroups: ["Bug", "Fairy"],
	},
	leavanny: {
		inherit: true,
		otherFormes: ["Leavanny-Roovnen"],
		formeOrder: ["Leavanny", "Leavanny-Roovnen"],
	},
	leavannyroovnen: {
		num: 542,
		name: "Leavanny-Roovnen",
		baseSpecies: "Leavanny",
		forme: "Roovnen",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 75, atk: 113, def: 70, spa: 70, spd: 70, spe: 102},
		abilities: {0: "Swarm", 1: "Maternal Power", H: "Overcoat"},
		prevo: "Swadloon-Roovnen",
		heightm: 1.2,
		weightkg: 20.5,
		eggGroups: ["Bug", "Fairy"],
	},
	dwebble: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Hardened Shell", H: "Weak Armor"},
	},
	crustle: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Hardened Shell", H: "Weak Armor"},
	},
	foongus: {
		inherit: true,
		abilities: {0: "Effect Spore", 1: "Mycelium Might", H: "Regenerator"},
	},
	amoonguss: {
		inherit: true,
		abilities: {0: "Effect Spore", 1: "Mycelium Might", H: "Regenerator"},
	},
	druddigon: {
		inherit: true,
		baseStats: {hp: 87, atk: 120, def: 90, spa: 70, spd: 90, spe: 48},
	},
	golett: {
		inherit: true,
		evos: ["Goltink"],
		otherFormes: ["Golett-Roovnen"],
		formeOrder: ["Golett", "Golett-Roovnen"],
	},
	golettroovnen: {
		num: 622,
		name: "Golett-Roovnen",
		baseSpecies: "Golett",
		forme: "Roovnen",
		types: ["Rock", "Ghost"],
		gender: "N",
		baseStats: {hp: 59, atk: 35, def: 70, spa: 64, spd: 50, spe: 25},
		abilities: {0: "Sand Armor", 1: "Misty Surge", H: "No Guard"},
		heightm: 1,
		weightkg: 92,
		evos: ["Goltink"],
		eggGroups: ["Mineral"],
	},
	pancham: {
		inherit: true,
		baseStats: {hp: 77, atk: 92, def: 62, spa: 46, spd: 48, spe: 43},
	},
	pangoro: {
		inherit: true,
		baseStats: {hp: 105, atk: 134, def: 78, spa: 69, spd: 71, spe: 58},
	},
	morelull: {
		inherit: true,
		abilities: {0: "Illuminate", 1: "Mycelium Might", H: "Rain Dish"},
	},
	shiinotic: {
		inherit: true,
		abilities: {0: "Illuminate", 1: "Mycelium Might", H: "Rain Dish"},
	},
	bounsweet: {
		inherit: true,
		baseStats: {hp: 32, atk: 50, def: 38, spa: 40, spd: 38, spe: 32},
		abilities: {0: "Natural Cure", 1: "Oblivious", H: "Sweet Veil"},
	},
	steenee: {
		inherit: true,
		baseStats: {hp: 61, atk: 90, def: 58, spa: 50, spd: 58, spe: 62},
		abilities: {0: "Natural Cure", 1: "Oblivious", H: "Sweet Veil"},
	},
	tsareena: {
		inherit: true,
		baseStats: {hp: 72, atk: 130, def: 98, spa: 60, spd: 98, spe: 72},
		abilities: {0: "Natural Cure", 1: "Queenly Majesty", H: "Sweet Veil"},
	},
	sandygast: {
		inherit: true,
		abilities: {0: "Water Compaction", 1: "Sand Armor", H: "Sand Veil"},
	},
	palossand: {
		inherit: true,
		abilities: {0: "Water Compaction", 1: "Sand Armor", H: "Sand Veil"},
	},
	rolycoly: {
		inherit: true,
		otherFormes: ["Rolycoly-Roovnen"],
		formeOrder: ["Rolycoly", "Rolycoly-Roovnen"],
	},
	rolycolyroovnen: {
		num: 837,
		name: "Rolycoly-Roovnen",
		baseSpecies: "Rolycoly",
		forme: "Roovnen",
		types: ["Steel", "Water"],
		baseStats: {hp: 50, atk: 50, def: 45, spa: 35, spd: 50, spe: 20},
		abilities: {0: "Steam Engine", 1: "Heatproof", H: "Water Absorb"},
		evos: ["Carkol-Roovnen"],
		heightm: 0.3,
		weightkg: 12,
		eggGroups: ["Mineral", "Water 3"],
	},
	carkol: {
		inherit: true,
		otherFormes: ["Carkol-Roovnen"],
		formeOrder: ["Carkol", "Carkol-Roovnen"],
	},
	carkolroovnen: {
		num: 838,
		name: "Carkol-Roovnen",
		baseSpecies: "Carkol",
		forme: "Roovnen",
		types: ["Steel", "Water"],
		baseStats: {hp: 100, atk: 70, def: 85, spa: 55, spd: 70, spe: 40},
		abilities: {0: "Steam Engine", 1: "Heatproof", H: "Water Absorb"},
		prevo: "Rolycoly-Roovnen",
		evos: ["Lockossal"],
		heightm: 1.1,
		weightkg: 78,
		eggGroups: ["Mineral", "Water 3"],
	},
	klawf: {
		inherit: true,
		abilities: {0: "Anger Shell", 1: "Hardened Shell", H: "Regenerator"},
	},
	annihilape: {
		inherit: true,
		baseStats: {hp: 105, atk: 115, def: 80, spa: 60, spd: 90, spe: 85},
	},
	gholdengo: {
		inherit: true,
		baseStats: {hp: 87, atk: 60, def: 95, spa: 123, spd: 91, spe: 84},
	},
	wochien: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 100, spa: 100, spd: 135, spe: 70},
	},
	chienpao: {
		inherit: true,
		baseStats: {hp: 80, atk: 130, def: 80, spa: 90, spd: 65, spe: 135},
	},
	tinglu: {
		inherit: true,
		baseStats: {hp: 165, atk: 110, def: 130, spa: 50, spd: 80, spe: 45},
	},
	chiyu: {
		inherit: true,
		baseStats: {hp: 55, atk: 80, def: 80, spa: 145, spd: 120, spe: 100},
	},
	okidogi: {
		inherit: true,
		baseStats: {hp: 88, atk: 133, def: 115, spa: 58, spd: 86, spe: 90},
	},
	munkidori: {
		inherit: true,
		baseStats: {hp: 88, atk: 75, def: 66, spa: 135, spd: 100, spe: 106},
	},
	fezandipiti: {
		inherit: true,
		baseStats: {hp: 88, atk: 101, def: 82, spa: 70, spd: 130, spe: 99},
	},
	ogerpon: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 84, spa: 60, spd: 96, spe: 120},
	},
	ogerponwellspring: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 84, spa: 60, spd: 106, spe: 110},
	},
	ogerponhearthflame: {
		inherit: true,
		baseStats: {hp: 90, atk: 130, def: 84, spa: 60, spd: 96, spe: 110},
	},
	ogerponcornerstone: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 94, spa: 60, spd: 96, spe: 110},
	},
	
	// Roovnen Pokemon
	kunirsch: {
		num: 1018,
		name: "Kunirsch",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 57, atk: 45, def: 45, spa: 68, spd: 55, spe: 40},
		abilities: {0: "Overgrow", H: "Art Portrait"},
		evos: ["Portrenti"],
		heightm: 0.6,
		weightkg: 26,
		eggGroups: ["Grass", "Field"],
	},
	portrenti: {
		num: 1019,
		name: "Portrenti",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 77, atk: 60, def: 60, spa: 88, spd: 75, spe: 60},
		abilities: {0: "Overgrow", H: "Art Portrait"},
		prevo: "Kunirsch",
		evos: ["Elchunst"],
		heightm: 1.3,
		weightkg: 109,
		eggGroups: ["Grass", "Field"],
	},
	elchunst: {
		num: 1020,
		name: "Elchunst",
		types: ["Grass", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 97, atk: 75, def: 75, spa: 108, spd: 95, spe: 80},
		abilities: {0: "Overgrow", H: "Art Portrait"},
		prevo: "Portrenti",
		heightm: 2.2,
		weightkg: 265,
		eggGroups: ["Grass", "Field"],
	},
	poniarc: {
		num: 1021,
		name: "Poniarc",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 54, atk: 71, def: 16, spa: 65, spd: 61, spe: 43},
		abilities: {0: "Blaze", H: "Plot Twist"},
		evos: ["Sizzlorse"],
		heightm: 1.2,
		weightkg: 99,
		eggGroups: ["Field"],
	},
	sizzlorse: {
		num: 1022,
		name: "Sizzlorse",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 74, atk: 86, def: 31, spa: 80, spd: 76, spe: 73},
		abilities: {0: "Blaze", H: "Plot Twist"},
		prevo: "Poniarc",
		evos: ["Klimyross"],
		heightm: 1.5,
		weightkg: 173,
		eggGroups: ["Field"],
	},
	klimyross: {
		num: 1023,
		name: "Klimyross",
		types: ["Fire", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 94, atk: 101, def: 46, spa: 95, spd: 91, spe: 103},
		abilities: {0: "Blaze", H: "Plot Twist"},
		prevo: "Sizzlorse",
		heightm: 1.7,
		weightkg: 300,
		eggGroups: ["Field"],
	},
	synake: {
		num: 1024,
		name: "Synake",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 46, def: 62, spa: 87, spd: 40, spe: 10},
		abilities: {0: "Torrent", H: "Synthony"},
		evos: ["Wavettle"],
		heightm: 0.6,
		weightkg: 12,
		eggGroups: ["Water 2"],
	},
	wavettle: {
		num: 1025,
		name: "Wavettle",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 85, atk: 61, def: 77, spa: 102, spd: 55, spe: 40},
		abilities: {0: "Torrent", H: "Synthony"},
		prevo: "Synake",
		evos: ["Aeskound"],
		heightm: 1.1,
		weightkg: 17,
		eggGroups: ["Water 2"],
	},
	aeskound: {
		num: 1026,
		name: "Aeskound",
		types: ["Water", "Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 105, atk: 76, def: 92, spa: 117, spd: 70, spe: 70},
		abilities: {0: "Torrent", H: "Synthony"},
		prevo: "Wavettle",
		heightm: 1.5,
		weightkg: 25,
		eggGroups: ["Water 2"],
	},
	falicle: {
		num: 1027,
		name: "Falicle",
		types: ["Flying"],
		baseStats: {hp: 30, atk: 29, def: 29, spa: 57, spd: 25, spe: 80},
		abilities: {0: "Keen Eye", H: "Mountaineer"},
		evos: ["Frezalk"],
		heightm: 0.5,
		weightkg: 0.5,
		eggGroups: ["Flying"],
	},
	frezalk: {
		num: 1028,
		name: "Frezalk",
		types: ["Flying", "Ice"],
		baseStats: {hp: 60, atk: 44, def: 49, spa: 77, spd: 40, spe: 100},
		abilities: {0: "Keen Eye", H: "Mountaineer"},
		prevo: "Falicle",
		evos: ["Gletschalk"],
		heightm: 1.2,
		weightkg: 0.8,
		eggGroups: ["Flying"],
	},
	gletschalk: {
		num: 1029,
		name: "Gletschalk",
		types: ["Flying", "Ice"],
		baseStats: {hp: 80, atk: 69, def: 79, spa: 97, spd: 55, spe: 120},
		abilities: {0: "Keen Eye", H: "Mountaineer"},
		prevo: "Frezalk",
		heightm: 1.9,
		weightkg: 1.4,
		eggGroups: ["Flying"],
	},
	nimmaup: {
		num: 1030,
		name: "Nimmaup",
		types: ["Bug", "Normal"],
		baseStats: {hp: 12, atk: 20, def: 12, spa: 40, spd: 76, spe: 45},
		abilities: {0: "Gluttony", H: "Compound Eyes"},
		evos: ["Kokick"],
		heightm: 0.1,
		weightkg: 0.1,
		eggGroups: ["Bug", "Fairy"],
	},
	kokick: {
		num: 1031,
		name: "Kokick",
		types: ["Bug", "Steel"],
		baseStats: {hp: 27, atk: 30, def: 27, spa: 60, spd: 166, spe: 25},
		abilities: {0: "Thick Fat", H: "Compound Eyes"},
		prevo: "Nimmaup",
		evos: ["Schmesatt"],
		heightm: 0.2,
		weightkg: 123.5,
		eggGroups: ["Bug"],
	},
	schmesatt: {
		num: 1032,
		name: "Schmesatt",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 47, atk: 60, def: 47, spa: 130, spd: 136, spe: 95},
		abilities: {0: "Dazzling", H: "Compound Eyes"},
		prevo: "Kokick",
		heightm: 1,
		weightkg: 0.5,
		eggGroups: ["Bug", "Fairy"],
	},
	erinox: {
		num: 1033,
		name: "Erinox",
		types: ["Normal", "Poison"],
		baseStats: {hp: 35, atk: 68, def: 62, spa: 36, spd: 30, spe: 29},
		abilities: {0: "Poison Point", H: "Poison Touch"},
		evos: ["Igloiceus"],
		heightm: 0.7,
		weightkg: 1,
		eggGroups: ["Field"],
	},
	igloiceus: {
		num: 1034,
		name: "Igloiceus",
		types: ["Normal", "Poison"],
		baseStats: {hp: 65, atk: 123, def: 112, spa: 71, spd: 50, spe: 39},
		abilities: {0: "Poison Point", H: "Poison Touch"},
		prevo: "Erinox",
		heightm: 2,
		weightkg: 23,
		eggGroups: ["Field"],
	},
	boltria: {
		num: 1035,
		name: "Boltria",
		types: ["Electric", "Water"],
		baseStats: {hp: 55, atk: 60, def: 55, spa: 41, spd: 56, spe: 53},
		abilities: {0: "Lightning Rod", H: "Strong Jaw"},
		evos: ["Nutriqua"],
		heightm: 0.6,
		weightkg: 21,
		eggGroups: ["Water 3", "Field"],
	},
	nutriqua: {
		num: 1036,
		name: "Nutriqua",
		types: ["Electric", "Water"],
		baseStats: {hp: 70, atk: 110, def: 95, spa: 81, spd: 71, spe: 93},
		abilities: {0: "Lightning Rod", H: "Strong Jaw"},
		prevo: "Boltria",
		heightm: 0.9,
		weightkg: 26,
		eggGroups: ["Water 3", "Field"],
	},
	kalaustry: {
		num: 1037,
		name: "Kalaustry",
		types: ["Fairy", "Ground"],
		baseStats: {hp: 51, atk: 51, def: 52, spa: 49, spd: 22, spe: 55},
		abilities: {0: "Run Away", 1: "Ignorance", H: "Fluffy"},
		evos: ["Ranschaef"],
		heightm: 0.5,
		weightkg: 61,
		eggGroups: ["Fairy", "Field"],
	},
	ranschaef: {
		num: 1038,
		name: "Ranschaef",
		types: ["Fairy", "Ground"],
		baseStats: {hp: 86, atk: 91, def: 92, spa: 94, spd: 67, spe: 80},
		abilities: {0: "Run Away", 1: "Ignorance", H: "Fluffy"},
		prevo: "Kalaustry",
		heightm: 1.4,
		weightkg: 107,
		eggGroups: ["Fairy", "Field"],
	},
	antron: {
		num: 1039,
		name: "Antron",
		types: ["Bug", "Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 22, atk: 40, def: 37, spa: 29, spd: 42, spe: 75},
		abilities: {0: "Swarm", 1: "Corrosion", H: "Steelworker"},
		evos: ["Queant"],
		heightm: 0.1,
		weightkg: 0.1,
		eggGroups: ["Bug"],
	},
	queant: {
		num: 1040,
		name: "Queant",
		types: ["Bug", "Poison"],
		gender: "F",
		baseStats: {hp: 62, atk: 81, def: 77, spa: 66, spd: 85, spe: 109},
		abilities: {0: "Swarm", 1: "Corrosion", H: "Queenly Majesty"},
		prevo: "Antron",
		heightm: 0.4,
		weightkg: 0.9,
		eggGroups: ["Bug", "Fairy"],
	},
	volecz: {
		num: 1041,
		name: "Volecz",
		types: ["Electric", "Dark"],
		gender: "F",
		baseStats: {hp: 33, atk: 31, def: 30, spa: 41, spd: 50, spe: 67},
		abilities: {0: "Dancer", H: "Unaware"},
		evos: ["Lidektro"],
		heightm: 0.8,
		weightkg: 27,
		eggGroups: ["Human-Like"],
	},
	lidektro: {
		num: 1042,
		name: "Lidektro",
		types: ["Electric", "Dark"],
		gender: "F",
		baseStats: {hp: 75, atk: 69, def: 65, spa: 92, spd: 100, spe: 91},
		abilities: {0: "Dancer", H: "Unaware"},
		prevo: "Volecz",
		heightm: 1.7,
		weightkg: 60,
		eggGroups: ["Human-Like"],
	},
	yoar: {
		num: 1043,
		name: "Yoar",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 41, def: 22, spa: 22, spd: 20, spe: 20},
		abilities: {0: "Thick Fat", 1: "Fur Coat", H: "Sharpness"},
		evos: ["Boarax"],
		heightm: 0.7,
		weightkg: 23,
		eggGroups: ["Field"],
	},
	boarax: {
		num: 1044,
		name: "Boarax",
		types: ["Normal"],
		baseStats: {hp: 107, atk: 72, def: 35, spa: 35, spd: 30, spe: 26},
		abilities: {0: "Thick Fat", 1: "Fur Coat", H: "Sharpness"},
		prevo: "Yoar",
		evos: ["Wildaxe"],
		heightm: 1,
		weightkg: 87,
		eggGroups: ["Field"],
	},
	wildaxe: {
		num: 1045,
		name: "Wildaxe",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 150, atk: 116, def: 71, spa: 71, spd: 55, spe: 32},
		abilities: {0: "Thick Fat", 1: "Fur Coat", H: "Sharpness"},
		prevo: "Boarax",
		heightm: 1.4,
		weightkg: 189,
		eggGroups: ["Field"],
	},
	graid: {
		num: 1046,
		name: "Graid",
		types: ["Grass", "Dark"],
		baseStats: {hp: 45, atk: 80, def: 45, spa: 46, spd: 60, spe: 49},
		abilities: {0: "Chlorophyll", H: "Seed Sower"},
		evos: ["Angrain"],
		heightm: 0.6,
		weightkg: 10,
		eggGroups: ["Human-Like", "Grass"],
	},
	angrain: {
		num: 1047,
		name: "Angrain",
		types: ["Grass", "Dark"],
		baseStats: {hp: 65, atk: 120, def: 75, spa: 76, spd: 90, spe: 94},
		abilities: {0: "Chlorophyll", H: "Seed Sower"},
		prevo: "Graid",
		heightm: 1.9,
		weightkg: 47,
		eggGroups: ["Human-Like", "Grass"],
	},
	fevee: {
		num: 1048,
		name: "Fevee",
		types: ["Normal", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 55, def: 50, spa: 45, spd: 55, spe: 55},
		abilities: {0: "Adaptability", H: "Filter"},
		heightm: 0.3,
		weightkg: 6.5,
		evos: ["Pauleon"],
		eggGroups: ["Field"],
	},
	pauleon: {
		num: 1049,
		name: "Pauleon",
		types: ["Normal", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 130, atk: 95, def: 65, spa: 60, spd: 65, spe: 110},
		abilities: {0: "Tough Claws", H: "Prosthesis"},
		heightm: 1,
		weightkg: 34.2,
		prevo: "Fevee",
		eggGroups: ["Field"],
	},
	orkave: {
		num: 1050,
		name: "Orkave",
		types: ["Rock", "Normal"],
		baseStats: {hp: 68, atk: 97, def: 115, spa: 71, spd: 115, spe: 54},
		abilities: {0: "Curing Rocks", 1: "Friend Guard", H: "Solid Rock"},
		heightm: 3.2,
		weightkg: 416.9,
		eggGroups: ["Human-Like", "Monster"],
	},
	taurot: {
		num: 1051,
		name: "Taurot",
		types: ["Flying"],
		gender: "M",
		baseStats: {hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110},
		abilities: {0: "Intimidate", 1: "Energy Body", H: "Aerilate"},
		heightm: 1.3,
		weightkg: 79.3,
		evos: ["Minowing"],
		eggGroups: ["Field"],
	},
	minowing: {
		num: 1052,
		name: "Minowing",
		types: ["Flying"],
		gender: "M",
		baseStats: {hp: 105, atk: 125, def: 85, spa: 60, spd: 60, spe: 100},
		abilities: {0: "Intimidate", 1: "Energy Body", H: "Aerilate"},
		heightm: 2.1,
		weightkg: 97.2,
		prevo: "Taurot",
		eggGroups: ["Field"],
	},
	kramlauf: {
		num: 1053,
		name: "Kramlauf",
		types: ["Flying", "Dark"],
		baseStats: {hp: 100, atk: 77, def: 95, spa: 95, spd: 77, spe: 98},
		abilities: {0: "Serene Grace", 1: "Intimidate", H: "Prankster",},
		heightm: 1.7,
		weightkg: 50,
		eggGroups: ["Flying"],
	},
	ressuredom: {
		num: 1054,
		name: "Ressuredom",
		types: ["Psychic", "Rock"],
		gender: "N",
		baseStats: {hp: 81, atk: 117, def: 120, spa: 100, spd: 45, spe: 43},
		abilities: {0: "Solid Rock", 1: "Steadfast", H: "Sand Armor"},
		heightm: 15,
		weightkg: 999.9,
		eggGroups: ["Mineral"],
	},
	gargion: {
		num: 1055,
		name: "Gargion",
		types: ["Steel", "Flying"],
		gender: "N",
		baseStats: {hp: 122, atk: 122, def: 99, spa: 65, spd: 65, spe: 47},
		abilities: {0: "Tough Claws", H: "Rocky Payload"},
		heightm: 2,
		weightkg: 231.2,
		eggGroups: ["Mineral"],
	},
	manutz: {
		num: 1056,
		name: "Manutz",
		types: ["Fairy", "Normal"],
		baseStats: {hp: 51, atk: 76, def: 130, spa: 90, spd: 76, spe: 100},
		abilities: {0: "Screen Cleaner", 1: "Clean Up", H: "Air Lock"},
		heightm: 1.6,
		weightkg: 76,
		eggGroups: ["Human-Like"],
	},
	decani: {
		num: 1057,
		name: "Decani",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85},
		abilities: {0: "Moody"},
		heightm: 1.8,
		weightkg: 78,
		eggGroups: ["Human-Like"],
	},
	burschuss: {
		num: 1058,
		name: "Burschuss",
		types: ["Fire", "Flying"],
		gender: "M",
		baseStats: {hp: 28, atk: 78, def: 69, spa: 35, spd: 60, spe: 100},
		abilities: {0: "Rattled", 1: "Blaze", H: "Flame Body"},
		evos: ["Phoenuss"],
		heightm: 0.9,
		weightkg: 23,
		eggGroups: ["Flying"],
	},
	phoenuss: {
		num: 1059,
		name: "Phoenuss",
		types: ["Fire", "Flying"],
		gender: "M",
		baseStats: {hp: 78, atk: 108, def: 99, spa: 65, spd: 90, spe: 100},
		abilities: {0: "Rebirth"},
		prevo: "Burschuss",
		heightm: 2,
		weightkg: 91,
		eggGroups: ["Flying"],
	},
	ostarrichi: {
		num: 1060,
		name: "Ostar-Richi",
		types: ["Flying", "Ground"],
		baseStats: {hp: 61, atk: 99, def: 74, spa: 75, spd: 71, spe: 130},
		abilities: {0: "No Guard", H: "Bulletproof"},
		heightm: 1.6,
		weightkg: 68,
		eggGroups: ["Flying", "Field"],
	},
	seganube: {
		num: 1061,
		name: "Seganube",
		types: ["Water", "Flying"],
		baseStats: {hp: 81, atk: 89, def: 60, spa: 107, spd: 88, spe: 100},
		abilities: {0: "Storm Drain", H: "Wind Rider"},
		heightm: 7.2,
		weightkg: 238,
		eggGroups: ["Water 3"],
	},
	jealokais: {
		num: 1062,
		name: "Jealokais",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 64, atk: 91, def: 120, spa: 75, spd: 58, spe: 112},
		abilities: {0: "Shed Skin", H: "Jealous Wrath"},
		heightm: 1.9,
		weightkg: 103,
		eggGroups: ["Dragon"],
	},
	amethiz: {
		num: 1063,
		name: "Amethiz",
		types: ["Rock"],
		baseStats: {hp: 31, atk: 67, def: 68, spa: 36, spd: 42, spe: 56},
		abilities: {0: "Solid Rock", 1: "Shed Skin", H: "Solid Rock"},
		evos: ["Scalethyst"],
		heightm: 0.4,
		weightkg: 2,
		eggGroups: ["Mineral", "Dragon"],
	},
	scalethyst: {
		num: 1064,
		name: "Scalethyst",
		types: ["Rock", "Dragon"],
		baseStats: {hp: 46, atk: 88, def: 91, spa: 52, spd: 54, spe: 74},
		abilities: {0: "Solid Rock", 1: "Shed Skin", H: "Solid Rock"},
		prevo: "Amethiz",
		evos: ["Juwyvern"],
		heightm: 1,
		weightkg: 17,
		eggGroups: ["Mineral", "Dragon"],
	},
	juwyvern: {
		num: 1065,
		name: "Juwyvern",
		types: ["Rock", "Dragon"],
		baseStats: {hp: 68, atk: 101, def: 105, spa: 72, spd: 75, spe: 89},
		abilities: {0: "Solid Rock", 1: "Shed Skin", H: "Solid Rock"},
		prevo: "Scalethyst",
		heightm: 1.4,
		weightkg: 31,
		eggGroups: ["Mineral", "Dragon"],
	},
	patwinis: {
		num: 1066,
		name: "Patwinis",
		types: ["Bug"],
		baseStats: {hp: 56, atk: 70, def: 41, spa: 36, spd: 74, spe: 60},
		abilities: {0: "Rattled", H: "Run Away"},
		evos: ["Rautwinis"],
		heightm: 0.4,
		weightkg: 0.4,
		eggGroups: ["Bug"],
	},
	rautwinis: {
		num: 1067,
		name: "Rautwinis",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 78, atk: 111, def: 70, spa: 66, spd: 124, spe: 88},
		abilities: {0: "Intimidate", H: "Compound Eyes"},
		prevo: "Patwinis",
		heightm: 0.8,
		weightkg: 1,
		eggGroups: ["Bug"],
	},
	volkobil: {
		num: 1068,
		name: "Volkobil",
		types: ["Steel", "Fire"],
		gender: "N",
		baseStats: {hp: 90, atk: 91, def: 89, spa: 72, spd: 51, spe: 133},
		abilities: {0: "Speed Boost", H: "Flame Body"},
		heightm: 1.5,
		weightkg: 632,
		eggGroups: ["Undiscovered"],
	},
	expremoos: {
		num: 1069,
		name: "Expremoos",
		baseForme: "M",
		types: ["Ghost", "Fairy"],
		gender: "M",
		baseStats: {hp: 73, atk: 118, def: 100, spa: 52, spd: 79, spe: 83},
		abilities: {0: "Run Away", H: "Friend Guard"},
		heightm: 0.7,
		weightkg: 2,
		eggGroups: ["Human-Like", "Fairy"],
		otherFormes: ["Expremoos-F"],
		formeOrder: ["Expremoos", "Expremoos-F"],
	},
	expremoosf: {
		num: 1069,
		name: "Expremoos-F",
		baseSpecies: "Expremoos",
		forme: "F",
		types: ["Ghost", "Fairy"],
		gender: "F",
		baseStats: {hp: 83, atk: 52, def: 89, spa: 108, spd: 100, spe: 73},
		abilities: {0: "Run Away", H: "Friend Guard"},
		heightm: 0.6,
		weightkg: 1.7,
		eggGroups: ["Human-Like", "Fairy"],
	},
	seditzel: {
		num: 1070,
		name: "Seditzel",
		types: ["Rock"],
		baseStats: {hp: 89, atk: 117, def: 104, spa: 71, spd: 75, spe: 51},
		abilities: {0: "Rough Skin", 1: "Solid Rock", H: "Happy Meal"},
		heightm: 2.1,
		weightkg: 215,
		eggGroups: ["Mineral"],
	},
	planind: {
		num: 1071,
		name: "Planind",
		types: ["Psychic"],
		baseStats: {hp: 85, atk: 36, def: 25, spa: 62, spd: 56, spe: 26},
		abilities: {0: "Curious Medicine", 1: "Natural Cure", H: "Aroma Veil"},
		evos: ["Ysiogue"],
		heightm: 1.2,
		weightkg: 66,
		eggGroups: ["Human-Like"],
	},
	ysiogue: {
		num: 1072,
		name: "Ysiogue",
		types: ["Psychic", "Poison"],
		baseStats: {hp: 125, atk: 66, def: 50, spa: 109, spd: 87, spe: 53},
		abilities: {0: "Curious Medicine", 1: "Natural Cure", H: "Aroma Veil"},
		prevo: "Planind",
		heightm: 1.9,
		weightkg: 36,
		eggGroups: ["Human-Like"],
	},
	prehuck: {
		num: 1073,
		name: "Prehuck",
		types: ["Ghost"],
		baseStats: {hp: 102, atk: 65, def: 65, spa: 102, spd: 90, spe: 76},
		abilities: {0: "Cursed Body", H: "Heavy Shoulder"},
		heightm: 1.2,
		weightkg: 321,
		eggGroups: ["Human-Like", "Amorphous"],
	},
	musalkas: {
		num: 1074,
		name: "Musalkas",
		types: ["Rock", "Ice"],
		gender: "N",
		baseStats: {hp: 62, atk: 81, def: 209, spa: 55, spd: 106, spe: 8},
		abilities: {0: "Shell Armor", H: "Hardened Shell"},
		heightm: 0.7,
		weightkg: 1,
		eggGroups: ["Mineral"],
	},
	fossgoo: {
		num: 1075,
		name: "Fossgoo",
		types: ["Poison", "Ice"],
		gender: "N",
		baseStats: {hp: 80, atk: 56, def: 99, spa: 91, spd: 184, spe: 11},
		abilities: {0: "Gooey", H: "Hardened Shell"},
		heightm: 0.8,
		weightkg: 1,
		eggGroups: ["Mineral"],
	},
	goltink: {
		num: 1076,
		name: "Goltink",
		types: ["Rock", "Ghost"],
		gender: "N",
		baseStats: {hp: 89, atk: 55, def: 100, spa: 114, spd: 80, spe: 45},
		abilities: {0: "Sand Armor", 1: "Misty Surge", H: "No Guard"},
		heightm: 2.8,
		weightkg: 330,
		prevo: "Golett-Roovnen",
		eggGroups: ["Mineral"],
	},
	tropalm: {
		num: 1077,
		name: "Tropalm",
		types: ["Grass", "Steel"],
		baseStats: {hp: 99, atk: 98, def: 103, spa: 92, spd: 107, spe: 51},
		abilities: {0: "Grassy Surge", 1: "Solar Power", H: "Adapting Tree"},
		prevo: "Tropius",
		heightm: 3.1,
		weightkg: 243.3,
		eggGroups: ["Monster", "Grass"],
	},
	hypsand: {
		num: 1078,
		name: "Hypsand",
		types: ["Psychic", "Ground"],
		baseStats: {hp: 105, atk: 83, def: 80, spa: 98, spd: 120, spe: 57},
		abilities: {0: "Insomnia", 1: "Psychic Surge", H: "Bad Dreams"},
		prevo: "Hypno",
		heightm: 1.9,
		weightkg: 101.8,
		eggGroups: ["Human-Like"],
	},
	laichto: {
		num: 1079,
		name: "Laichto",
		types: ["Water", "Electric"],
		baseStats: {hp: 150, atk: 73, def: 73, spa: 91, spd: 91, spe: 72},
		abilities: {0: "Volt Absorb", 1: "Electric Surge", H: "Water Absorb"},
		heightm: 1.7,
		weightkg: 89.3,
		prevo: "Lanturn",
		eggGroups: ["Water 2"],
	},
	uninown: {
		num: 1080,
		name: "Uninown",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 96, atk: 144, def: 96, spa: 144, spd: 96, spe: 96},
		abilities: {0: "Levitate"},
		prevo: "Unown",
		heightm: 3.2,
		weightkg: 320,
		eggGroups: ["Undiscovered"],
	},
	lockossal: {
		num: 1081,
		name: "Lockossal",
		types: ["Steel", "Water"],
		baseStats: {hp: 130, atk: 90, def: 115, spa: 75, spd: 90, spe: 20},
		abilities: {0: "Steam Engine", 1: "Heatproof", H: "Water Absorb"},
		prevo: "Carkol-Roovnen",
		heightm: 3,
		weightkg: 237.1,
		eggGroups: ["Mineral", "Water1"],
	},
	pauption: {
		num: 1082,
		name: "Pauption",
		types: ["Fire", "Poison"],
		baseStats: {hp: 95, atk: 95, def: 150, spa: 95, spd: 95, spe: 10},
		abilities: {0: "White Smoke", 1: "Drought", H: "Shell Armor"},
		prevo: "Torkoal",
		heightm: 1.2,
		weightkg: 239.4,
		eggGroups: ["Field"],
	},
	naturthis: {
		num: 1083,
		name: "Naturthis",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 95, atk: 120, def: 100, spa: 95, spd: 120, spe: 10},
		abilities: {0: "Early Bird", 1: "Solid Rock", H: "Shell Armor"},
		prevo: "Torkoal-Roovnen",
		heightm: 1.4,
		weightkg: 683.6,
		eggGroups: ["Mineral", "Fairy"],
	},
	kunturthis: {
		num: 1084,
		name: "Kunturthis",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 95, atk: 65, def: 95, spa: 95, spd: 180, spe: 10},
		abilities: {0: "Early Bird", 1: "Solid Rock", H: "Shell Armor"},
		prevo: "Torkoal-Roovnen",
		heightm: 1.4,
		weightkg: 683.6,
		eggGroups: ["Mineral", "Fairy"],
	},
	glacone: {
		num: 1085,
		name: "Glacone",
		types: ["Ground", "Ice"],
		baseStats: {hp: 60, atk: 90, def: 90, spa: 50, spd: 80, spe: 55},
		abilities: {0: "Rock Head", 1: "Lightning Rod", H: "Hail Force"},
		prevo: "Cubone-Roovnen",
		evos: ["Oetzowak"],
		heightm: 1,
		weightkg: 76,
		eggGroups: ["Monster"],
	},
	oetzowak: {
		num: 1086,
		name: "Oetzowak",
		types: ["Ground", "Ice"],
		baseStats: {hp: 80, atk: 110, def: 110, spa: 65, spd: 90, spe: 65},
		abilities: {0: "Rock Head", 1: "Lightning Rod", H: "Hail Force"},
		prevo: "Glacone",
		heightm: 1.9,
		weightkg: 70,
		eggGroups: ["Monster"],
	},
	ferreel: {
		num: 1087,
		name: "Ferreel",
		types: ["Steel"],
		baseStats: {hp: 65, atk: 82, def: 44, spa: 55, spd: 38, spe: 16},
		abilities: {0: "Iron Barbs", 1: "Flash Fire", H: "Ferris Wheel"},
		evos: ["Praspin"],
		heightm: 1.2,
		weightkg: 134,
		eggGroups: ["Dragon", "Monster"],
	},
	praspin: {
		num: 1088,
		name: "Praspin",
		types: ["Steel"],
		baseStats: {hp: 85, atk: 102, def: 64, spa: 85, spd: 63, spe: 21},
		abilities: {0: "Iron Barbs", 1: "Flash Fire", H: "Ferris Wheel"},
		prevo: "Ferreel",
		evos: ["Radriss"],
		heightm: 2,
		weightkg: 319.1,
		eggGroups: ["Dragon", "Monster"],
	},
	radriss: {
		num: 1089,
		name: "Radriss",
		types: ["Steel"],
		baseStats: {hp: 125, atk: 142, def: 104, spa: 125, spd: 78, spe: 26},
		abilities: {0: "Iron Barbs", 1: "Flash Fire", H: "Ferris Wheel"},
		prevo: "Praspin",
		heightm: 2.9,
		weightkg: 999.9,
		eggGroups: ["Dragon", "Monster"],
	},
	sigisin: {
		num: 1090,
		name: "Sigisin",
		types: ["Psychic", "Fire"],
		gender: "N",
		baseStats: {hp: 72, atk: 98, def: 90, spa: 93, spd: 90, spe: 127},
		abilities: {0: "Corruption"},
		heightm: 1.6,
		weightkg: 20,
		tags: ["Corrupt"],
		eggGroups: ["Undiscovered"],
	},
	bredoom: {
		num: 1091,
		name: "Bredoom",
		types: ["Steel", "Fighting"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 80, spa: 130, spd: 80, spe: 100},
		abilities: {0: "Corruption"},
		heightm: 1.7,
		weightkg: 50.4,
		tags: ["Corrupt"],
		eggGroups: ["Undiscovered"],
	},
	frosgross: {
		num: 1092,
		name: "Frosgross",
		types: ["Ice", "Fairy"],
		gender: "N",
		baseStats: {hp: 60, atk: 55, def: 55, spa: 145, spd: 140, spe: 115},
		abilities: {0: "Corruption"},
		heightm: 1.6,
		weightkg: 84,
		tags: ["Corrupt"],
		eggGroups: ["Undiscovered"],
	},
	abomacruel: {
		num: 1093,
		name: "Abomacruel",
		types: ["Grass", "Ghost"],
		gender: "N",
		baseStats: {hp: 90, atk: 97, def: 125, spa: 132, spd: 85, spe: 41},
		abilities: {0: "Corruption"},
		heightm: 2.6,
		weightkg: 156,
		tags: ["Corrupt"],
		eggGroups: ["Undiscovered"],
	},
	porygonv: {
		num: 1094,
		name: "Porygon-V",
		types: ["Normal", "Poison"],
		gender: "N",
		baseStats: {hp: 85, atk: 80, def: 90, spa: 135, spd: 95, spe: 85},
		abilities: {0: "Corruption"},
		heightm: 0.3,
		weightkg: 25,
		tags: ["Corrupt"],
		eggGroups: ["Undiscovered"],
	},
	latakuno: {
		num: 1095,
		name: "Latakuno",
		types: ["Dark", "Dragon"],
		gender: "N",
		baseStats: {hp: 80, atk: 130, def: 130, spa: 70, spd: 70, spe: 110},
		abilities: {0: "Corruption"},
		heightm: 2.4,
		weightkg: 100,
		tags: ["Corrupt"],
		eggGroups: ["Undiscovered"],
	},
	yorlator: {
		num: 1096,
		name: "Yorlator",
		types: ["Fighting", "Fairy"],
		gender: "F",
		baseStats: {hp: 97, atk: 75, def: 91, spa: 125, spd: 82, spe: 100},
		abilities: {0: "Warrior Spirit"},
		heightm: 2,
		weightkg: 78,
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	mranovo: {
		num: 1097,
		name: "Mranovo",
		types: ["Fighting", "Dark"],
		gender: "F",
		baseStats: {hp: 97, atk: 125, def: 91, spa: 75, spd: 82, spe: 100},
		abilities: {0: "Challenger"},
		heightm: 2.3,
		weightkg: 91,
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	curtowal: {
		num: 1098,
		name: "Curtowal",
		types: ["Fighting", "Steel"],
		gender: "M",
		baseStats: {hp: 97, atk: 91, def: 125, spa: 75, spd: 82, spe: 100},
		abilities: {0: "Shielded"},
		heightm: 2.2,
		weightkg: 85,
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	guadock: {
		num: 1099,
		name: "Guadock",
		types: ["Steel", "Ground"],
		gender: "N",
		baseStats: {hp: 131, atk: 117, def: 160, spa: 91, spd: 96, spe: 85},
		abilities: {0: "Protective Will"},
		heightm: 2,
		weightkg: 673,
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
	},
	stoleagle: {
		num: 1100,
		name: "Stoleagle",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 131, atk: 85, def: 91, spa: 117, spd: 160, spe: 96},
		abilities: {0: "Pride Roar"},
		heightm: 1.8,
		weightkg: 291,
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
	},
	adlerz: {
		num: 1101,
		name: "Adlerz",
		types: ["Fighting", "Flying"],
		gender: "N",
		baseStats: {hp: 131, atk: 160, def: 96, spa: 91, spd: 85, spe: 117},
		abilities: {0: "Kind Heart"},
		heightm: 1.9,
		weightkg: 312,
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
	},
	hungurul: {
		num: 1102,
		name: "Hungurul",
		baseForme: "Normal",
		types: ["Fairy", "Flying"],
		gender: "N",
		baseStats: {hp: 111, atk: 81, def: 75, spa: 140, spd: 107, spe: 86},
		abilities: {0: "Dynamic Battle"},
		heightm: 1.7,
		weightkg: 521,
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
		otherFormes: ["Hungurul-Dynamic"],
		formeOrder: ["Hungurul", "Hungurul-Dynamic"],
	},
	hunguruldynamic: {
		num: 1102,
		name: "Hungurul-Dynamic",
		baseSpecies: "Hungurul",
		forme: "Dynamic",
		types: ["Fairy", "Flying"],
		gender: "N",
		baseStats: {hp: 131, atk: 91, def: 85, spa: 160, spd: 117, spe: 96},
		abilities: {0: "Dynamic Battle"},
		heightm: 1.7,
		weightkg: 521,
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
		changesFrom: "Hungurul",
	},
	chasilen: {
		num: 1103,
		name: "Chasilen",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 115, atk: 115, def: 85, spa: 85, spd: 100, spe: 100},
		abilities: {0: "Chaser"},
		heightm: 1,
		weightkg: 20,
		//tags: ["Mythical"],
		eggGroups: ["Undiscovered"],
	},
};