import {GrammaireException} from "./GrammaireException";

export class ExceptionsFeminin extends GrammaireException {
    static liste = {
        // La terminaison -x au masculin devient -se au féminin, sauf
        'roux': 'rousse',
        'doux': 'douce',
        'faux': 'fausse',
        'vieux': 'vieille',
        'préfix': 'préfixe',
        // TODO: ajouter d'autres exceptions

        // La terminaison -s au masculin devient -se au féminin, sauf
        'bas': 'basse',
        'épais': 'épaisse',
        'exprès': 'exprèsse',
        'gras': 'grasse',
        'gros': 'grosse',
        'las': 'lasse',
        'métis': 'métisse',
        'tiers': 'tierce',
        'frais': 'fraîche',
        'dissous': 'dissoute',
        'absous': 'absoute',

        // La terminaison -et au masculin devient -ette au féminin, sauf
        'complet': 'complète',
        'concret': 'concrète',
        'désuet': 'désuète',
        'discret': 'discrète',
        'indiscret': 'indiscrète',
        'incomplet': 'incomplète',
        'inquiet': 'inquiète',
        'replet': 'replète',
        'secret': 'secrète',

        // La terminaison -ot au masculin devient -ote au féminin, sauf
        'boulot': 'boulotte',
        'pâlot': 'pâlotte',
        'sot': 'sotte',
        'vieillot': 'vieillotte',

        // La terminaison -c au masculin devient -che au féminin, sauf
        'sec': 'sèche',
        'grecc': 'grecque',
        'caduc': 'caduque',
        'public': 'publique',
        'turc': 'turque',

        // adjectifs terminés par une voyelle
        'coi': 'coite',
        'favori': 'favorite',
        'andalou': 'andalouse',
        'fou': 'folle',
        'mou': 'molle',
        'beau': 'belle',
        'jumeau': 'jumelle',
        'nouveau': 'nouvelle',

        // adjectifs qui n'ont qu'une seule forme
        'chic': 'chic',
        'kaki': 'kaki',
        'snob': 'snob',
    };
}
