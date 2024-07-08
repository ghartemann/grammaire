interface DepartementInfo {
    numero: string;
    nom: string;
    article: string;
}

export class ReglesDepartements {

    static list: { [key: string]: DepartementInfo } = {
        'ain': {
            numero: '01',
            nom: 'Ain',
            article: 'l\''
        },
        'aisne': {
            numero: '02',
            nom: 'Aisne',
            article: 'l\''
        },
        'allier': {
            numero: '03',
            nom: 'Allier',
            article: 'l\''
        },
        'alpes-de-haute-provence': {
            numero: '04',
            nom: 'Alpes-de-Haute-Provence',
            article: 'les'
        },
        'hautes-alpes': {
            numero: '05',
            nom: 'Hautes-Alpes',
            article: 'les'
        },
        'alpes-maritimes': {
            numero: '06',
            nom: 'Alpes-Maritimes',
            article: 'les'
        },
        'ardeche': {
            numero: '07',
            nom: 'Ardèche',
            article: 'l\''
        },
        'ardennes': {
            numero: '08',
            nom: 'Ardennes',
            article: 'les'
        },
        'ariege': {
            numero: '09',
            nom: 'Ariège',
            article: 'l\''
        },
        'aube': {
            numero: '10',
            nom: 'Aube',
            article: 'l\''
        },
        'aude': {
            numero: '11',
            nom: 'Aude',
            article: 'l\''
        },
        'aveyron': {
            numero: '12',
            nom: 'Aveyron',
            article: 'l\''
        },
        'bouches-du-rhone': {
            numero: '13',
            nom: 'Bouches-du-Rhône',
            article: 'les'
        },
        'calvados': {
            numero: '14',
            nom: 'Calvados',
            article: 'le'
        },
        'cantal': {
            numero: '15',
            nom: 'Cantal',
            article: 'le'
        },
        'charente': {
            numero: '16',
            nom: 'Charente',
            article: 'la'
        },
        'charente-maritime': {
            numero: '17',
            nom: 'Charente-Maritime',
            article: 'la'
        },
        'cher': {
            numero: '18',
            nom: 'Cher',
            article: 'le'
        },
        'correze': {
            numero: '19',
            nom: 'Corrèze',
            article: 'la'
        },
        'corse-du-sud': {
            numero: '2A',
            nom: 'Corse-du-Sud',
            article: 'la'
        },
        'haute-corse': {
            numero: '2B',
            nom: 'Haute-Corse',
            article: 'la'
        },
        'cote-d-or': {
            numero: '21',
            nom: 'Côte-d\'Or',
            article: 'la'
        },
        'cotes-d-armor': {
            numero: '22',
            nom: 'Côtes-d\'Armor',
            article: 'les'
        },
        'creuse': {
            numero: '23',
            nom: 'Creuse',
            article: 'la'
        },
        'dordogne': {
            numero: '24',
            nom: 'Dordogne',
            article: 'la'
        },
        'doubs': {
            numero: '25',
            nom: 'Doubs',
            article: 'le'
        },
        'drome': {
            numero: '26',
            nom: 'Drôme',
            article: 'la'
        },
        'eure': {
            numero: '27',
            nom: 'Eure',
            article: 'l\''
        },
        'eure-et-loir': {
            numero: '28',
            nom: 'Eure-et-Loir',
            article: 'l\''
        },
        'finistere': {
            numero: '29',
            nom: 'Finistère',
            article: 'le'
        },
        'gard': {
            numero: '30',
            nom: 'Gard',
            article: 'le'
        },
        'haute-garonne': {
            numero: '31',
            nom: 'Haute-Garonne',
            article: 'la'
        },
        'gers': {
            numero: '32',
            nom: 'Gers',
            article: 'le'
        },
        'gironde': {
            numero: '33',
            nom: 'Gironde',
            article: 'la'
        },
        'herault': {
            numero: '34',
            nom: 'Hérault',
            article: 'l\''
        },
        'ille-et-vilaine': {
            numero: '35',
            nom: 'Ille-et-Vilaine',
            article: 'l\''
        },
        'indre': {
            numero: '36',
            nom: 'Indre',
            article: 'l\''
        },
        'indre-et-loire': {
            numero: '37',
            nom: 'Indre-et-Loire',
            article: 'l\''
        },
        'isere': {
            numero: '38',
            nom: 'Isère',
            article: 'l\''
        },
        'jura': {
            numero: '39',
            nom: 'Jura',
            article: 'le'
        },
        'landes': {
            numero: '40',
            nom: 'Landes',
            article: 'les'
        },
        'loir-et-cher': {
            numero: '41',
            nom: 'Loir-et-Cher',
            article: 'le'
        },
        'loire': {
            numero: '42',
            nom: 'Loire',
            article: 'la'
        },
        'haute-loire': {
            numero: '43',
            nom: 'Haute-Loire',
            article: 'la'
        },
        'loire-atlantique': {
            numero: '44',
            nom: 'Loire-Atlantique',
            article: 'la'
        },
        'loiret': {
            numero: '45',
            nom: 'Loiret',
            article: 'le'
        },
        'lot': {
            numero: '46',
            nom: 'Lot',
            article: 'le'
        },
        'lot-et-garonne': {
            numero: '47',
            nom: 'Lot-et-Garonne',
            article: 'le'
        },
        'lozere': {
            numero: '48',
            nom: 'Lozère',
            article: 'la'
        },
        'maine-et-loire': {
            numero: '49',
            nom: 'Maine-et-Loire',
            article: 'le'
        },
        'manche': {
            numero: '50',
            nom: 'Manche',
            article: 'la'
        },
        'marne': {
            numero: '51',
            nom: 'Marne',
            article: 'la'
        },
        'haute-marne': {
            numero: '52',
            nom: 'Haute-Marne',
            article: 'la'
        },
        'mayenne': {
            numero: '53',
            nom: 'Mayenne',
            article: 'la'
        },
        'meurthe-et-moselle': {
            numero: '54',
            nom: 'Meurthe-et-Moselle',
            article: 'la'
        },
        'meuse': {
            numero: '55',
            nom: 'Meuse',
            article: 'la'
        },
        'morbihan': {
            numero: '56',
            nom: 'Morbihan',
            article: 'le'
        },
        'moselle': {
            numero: '57',
            nom: 'Moselle',
            article: 'la'
        },
        'nievre': {
            numero: '58',
            nom: 'Nièvre',
            article: 'la'
        },
        'nord': {
            numero: '59',
            nom: 'Nord',
            article: 'le'
        },
        'oise': {
            numero: '60',
            nom: 'Oise',
            article: 'l\''
        },
        'orne': {
            numero: '61',
            nom: 'Orne',
            article: 'l\''
        },
        'pas-de-calais': {
            numero: '62',
            nom: 'Pas-de-Calais',
            article: 'le'
        },
        'puy-de-dome': {
            numero: '63',
            nom: 'Puy-de-Dôme',
            article: 'le'
        },
        'pyrenees-atlantiques': {
            numero: '64',
            nom: 'Pyrénées-Atlantiques',
            article: 'les'
        },
        'hautes-pyrenees': {
            numero: '65',
            nom: 'Hautes-Pyrénées',
            article: 'les'
        },
        'pyrenees-orientales': {
            numero: '66',
            nom: 'Pyrénées-Orientales',
            article: 'les'
        },
        'bas-rhin': {
            numero: '67',
            nom: 'Bas-Rhin',
            article: 'le'
        },
        'haut-rhin': {
            numero: '68',
            nom: 'Haut-Rhin',
            article: 'le'
        },
        'rhone': {
            numero: '69',
            nom: 'Rhône',
            article: 'le'
        },
        'haute-saone': {
            numero: '70',
            nom: 'Haute-Saône',
            article: 'la'
        },
        'saone-et-loire': {
            numero: '71',
            nom: 'Saône-et-Loire',
            article: 'la'
        },
        'sarthe': {
            numero: '72',
            nom: 'Sarthe',
            article: 'la'
        },
        'savoie': {
            numero: '73',
            nom: 'Savoie',
            article: 'la'
        },
        'haute-savoie': {
            numero: '74',
            nom: 'Haute-Savoie',
            article: 'la'
        },
        'paris': {
            numero: '75',
            nom: 'Paris',
            article: 'à'
        },
        'seine-maritime': {
            numero: '76',
            nom: 'Seine-Maritime',
            article: 'la'
        },
        'seine-et-marne': {
            numero: '77',
            nom: 'Seine-et-Marne',
            article: 'la'
        },
        'yvelines': {
            numero: '78',
            nom: 'Yvelines',
            article: 'les'
        },
        'deux-sevres': {
            numero: '79',
            nom: 'Deux-Sèvres',
            article: 'les'
        },
        'somme': {
            numero: '80',
            nom: 'Somme',
            article: 'la'
        },
        'tarn': {
            numero: '81',
            nom: 'Tarn',
            article: 'le'
        },
        'tarn-et-garonne': {
            numero: '82',
            nom: 'Tarn-et-Garonne',
            article: 'le'
        },
        'var': {
            numero: '83',
            nom: 'Var',
            article: 'le'
        },
        'vaucluse': {
            numero: '84',
            nom: 'Vaucluse',
            article: 'le'
        },
        'vendee': {
            numero: '85',
            nom: 'Vendée',
            article: 'la'
        },
        'vienne': {
            numero: '86',
            nom: 'Vienne',
            article: 'la'
        },
        'haute-vienne': {
            numero: '87',
            nom: 'Haute-Vienne',
            article: 'la'
        },
        'vosges': {
            numero: '88',
            nom: 'Vosges',
            article: 'les'
        },
        'yonne': {
            numero: '89',
            nom: 'Yonne',
            article: 'l\''
        },
        'territoire-de-belfort': {
            numero: '90',
            nom: 'Territoire de Belfort',
            article: 'le'
        },
        'essonne': {
            numero: '91',
            nom: 'Essonne',
            article: 'l\''
        },
        'hauts-de-seine': {
            numero: '92',
            nom: 'Hauts-de-Seine',
            article: 'les'
        },
        'seine-saint-denis': {
            numero: '93',
            nom: 'Seine-Saint-Denis',
            article: 'la'
        },
        'val-de-marne': {
            numero: '94',
            nom: 'Val-de-Marne',
            article: 'le'
        },
        'val-d-oise': {
            numero: '95',
            nom: 'Val-d\'Oise',
            article: 'le'
        },
        'guadeloupe': {
            numero: '971',
            nom: 'Guadeloupe',
            article: 'la'
        },
        'martinique': {
            numero: '972',
            nom: 'Martinique',
            article: 'la'
        },
        'guyane': {
            numero: '973',
            nom: 'Guyane',
            article: 'la'
        },
        'la-reunion': {
            numero: '974',
            nom: 'La Réunion',
            article: 'la'
        },
        'mayotte': {
            numero: '976',
            nom: 'Mayotte',
            article: 'à'
        },
        'saint-pierre-et-miquelon': {
            numero: '975',
            nom: 'Saint-Pierre-et-Miquelon',
            article: 'à'
        },
        'saint-barthelemy': {
            numero: '977',
            nom: 'Saint-Barthélemy',
            article: 'à'
        },
        'saint-martin': {
            numero: '978',
            nom: 'Saint-Martin',
            article: 'à'
        },
        'wallis-et-futuna': {
            numero: '986',
            nom: 'Wallis-et-Futuna',
            article: 'à'
        },
        'polynesie-francaise': {
            numero: '987',
            nom: 'Polynésie française',
            article: 'en'
        },
        'nouvelle-caledonie': {
            numero: '988',
            nom: 'Nouvelle-Calédonie',
            article: 'en'
        },
        'terres-australes-et-antarctiques-francaises': {
            numero: '984',
            nom: 'Terres australes et antarctiques françaises',
            article: 'aux'
        },
        'clipperton': {
            numero: '989',
            nom: 'Clipperton',
            article: 'à'
        },
        'iles-eparses': {
            numero: '984',
            nom: 'Îles Éparses',
            article: 'aux'
        }
    }

    static getDepartement(departement: string|number): DepartementInfo {
        if (Object.values(this.list).find(d => d.numero === departement)) {
            return Object.values(this.list).find(d => d.numero === departement);
        }

        if (!this.list[departement]) {
            throw new RangeError(`Le département ${departement} n'existe pas`);
        }

        return this.list[departement];
    }
}
