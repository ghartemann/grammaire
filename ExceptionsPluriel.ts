import {GrammaireException} from "./GrammaireException";
import {IGrammaireException} from "./IGrammaireException";

export class ExceptionsPluriel extends GrammaireException {
    static liste = {
        // Les noms terminés par -eu ou -au au singulier prennent un -x au pluriel, sauf
        'pneu': 'pneus',
        'landau': 'landaus',
        'bleu': 'bleus',
        'émeu': 'émeus',
        'lieu': 'lieus', // euh celui-là c'est la merde

        // Les noms terminés par -ou au singulier prennent un -s au pluriel, sauf
        'bijou': "bijoux",
        'caillou': "cailloux",
        'chou': "choux",
        'genou': "genoux",
        'hibou': "hiboux",
        'joujou': "joujoux",
        'pou': "poux",

        // Les noms terminés par -al au singulier ont un pluriel en -aux, sauf
        'acétal': "acétals",
        'ammonal': 'ammonals',
        'aval': 'avals',
        'bal': "bals",
        'barbital': 'barbitals',
        'cal': 'cals',
        'cantal': 'cantals',
        'caracal': 'caracals',
        'captal': 'captals',
        'carnaval': 'carnavals',
        'cérémonial': 'cérémonials',
        'chacal': 'chacals',
        'chloral': 'chlorals',
        'chrysocal': 'chrysocals',
        'copal': 'copals',
        'corral': 'corrals',
        'deal': 'deals',
        'dial': 'dials',
        'dispersal': 'dispersals',
        'emmental': 'emmentals',
        'emmenthal': 'emmenthals',
        'éthanal': 'éthanals',
        'festival': 'festivals',
        'foiral': 'foirals',
        'furfural': 'furfurals',
        'futal': 'futals',
        'gal': 'gals',
        'galgal': 'galgals',
        'gardénal': 'gardénals',
        'gavial': 'gavials',
        'gayal': 'gayals',
        'goal': 'goals',
        'graal': 'graals',
        'joual': 'jouals',
        'kraal': 'kraals',
        'kursaal': 'kursaals',
        'matorral': 'matorrals',
        'mescal': 'mescals',
        'mezcal': 'mezcals',
        'méthanal': 'méthanals',
        'metical': 'meticals',
        'minerval': 'minervals',
        'mistral': 'mistrals',
        'nopal': 'nopals',
        'narval': 'narvals',
        'pal': 'pals',
        'pascal': 'pascals',
        'hecopascal': 'hectopascals',
        'kilopascal': 'kilopascals',
        'penthotal': 'penthotals',
        'phénobarbital': 'phénobarbitals',
        'pipéronal': 'pipéronals',
        'quetzal': 'quetzals',
        'raval': 'ravals',
        'récital': 'récitals',
        'régal': 'régals',
        'rétinal': 'rétinals',
        'revival': 'revivals',
        'rial': 'rials',
        'rital': 'ritals',
        'riyal': 'riyals',
        'roberval': 'robervals',
        'rorqual': 'rorquals',
        'roseval': 'rosevals',
        'ryal': 'ryals',
        'salcional': 'salcionals',
        'sal': 'sals',
        'sandal': 'sandals',
        'santal': 'santals',
        'saroual': 'sarouals',
        'serial': 'serials',
        'serval': 'servals',
        'sial': 'sials',
        'sisal': 'sisals',
        'sonal': 'sonals',
        'spiritual': 'spirituals',
        'tagal': 'tagals',
        'tefal': 'tefals',
        'tergal': 'tergals',
        'thiopental': 'thiopentals',
        'tical': 'ticals',
        'tincal': 'tincals',
        'trial': 'trials',
        'véronal': 'véronals',
        'zicral': 'zicrals',


        // Les noms terminés par -ail au singulier ont un pluriel en -aux, sauf
        'bail': "baux",
        'corail': "coraux",
        'émail': "émaux",
        'soupirail': "soupiraux",
        'travail': "travaux",
        'fermail': "fermaux",
        'gemmail': "gemmaux",
        'ventail': "ventaux",
        'vantail': "vantaux",
        'vitrail': "vitraux"
    };
}
