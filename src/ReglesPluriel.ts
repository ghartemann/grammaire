import {ReglesGrammaire} from "./ReglesGrammaire";
import {IReglesGrammaire} from "./IReglesGrammaire";
import Assess from "./Assess";
import {ReglesFeminin} from "./ReglesFeminin";

export class ReglesPluriel extends ReglesGrammaire {
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


    static pluralise(
        nom: string,
        quantite: number,
        pluriel: string | null = null,
        seuil: number = 2
    ): string {
        Assess.isPositiveOrZero(quantite);
        Assess.isNotEmptyString(nom);

        // Si la quantité est inférieure ou égale au seuil (par défaut 2), on renvoie le mot sans modification
        if (quantite < seuil) {
            return nom;
        }

        // Si un pluriel est fourni (surcharge de la méthode)
        if (pluriel !== null) {
            return pluriel;
        }

        // Si le mot est une exception
        if (ReglesPluriel.isException(nom)) {
            return ReglesPluriel.getException(nom);
        }

        // Sinon, on détermine le pluriel :

        let lettresFin1 = nom.slice(-1);
        let lettresFin2 = nom.slice(-2);

        // mots en -s, -x, -z
        if (lettresFin1 === 's' || lettresFin1 === 'x' || lettresFin1 === 'z') {
            return nom;
        }

        // mots en -eu ou -au
        if (lettresFin2 === 'au' || lettresFin2 === 'eu') {
            return nom + 'x';
        }

        // mots en -ou
        if (lettresFin2 === 'ou') {
            return nom + 's';
        }

        // mots en -al
        if (lettresFin2 === 'al') {
            return nom.slice(0, -2) + 'aux';
        }

        // Si on ne passe dans aucune condition, on retourne le cas général
        return nom + 's';
    }


    static pluraliseAdj(adjectif: string, quantite: number, genre: string, seuil: number = 2): string {
        Assess.isPositiveOrZero(quantite);
        Assess.isNotEmptyString(adjectif);

        // TODO: voir si on retourne le féminin si quantité < seuil ?

        if (quantite < seuil) {
            return adjectif;
        }

        if (genre === 'f') {
            adjectif = ReglesFeminin.feminise(adjectif);
        }

        return this.pluralise(adjectif, quantite, null, seuil);
    }


    static mPluralise(
        mots: string[],
        quantite: number,
        seuil: number = 2
    ): string {
        mots.forEach((mot, index) => {
            Assess.isNotEmptyString(mot);
            mots[index] = this.pluralise(mot, quantite, null, seuil);
        });

        return mots.join(' ');
    }
}
