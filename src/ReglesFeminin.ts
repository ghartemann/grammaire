import {ReglesGrammaire} from "./ReglesGrammaire";
import Assess from "./Assess";

export class ReglesFeminin extends ReglesGrammaire {
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

    static feminise(adjectif: string): string {
        Assess.isNotEmptyString(adjectif);

        // Si le mot est une exception
        if (ReglesFeminin.isException(adjectif)) {
            return ReglesFeminin.getException(adjectif);
        }

        let lettresFin1 = adjectif.slice(-1);
        let lettresFin2 = adjectif.slice(-2);
        let lettresFin3 = adjectif.slice(-3);

        if (lettresFin1 === 's') {
            return adjectif.slice(0, -1) + 'se';
        }

        if (lettresFin1 === 'f') {
            return adjectif.slice(0, -1) + 've';
        }

        if (lettresFin1 === 'x') {
            return adjectif.slice(0, -1) + 'se';
        }

        if (lettresFin1 === 'g') {
            return adjectif.slice(0, -1) + 'gue';
        }

        if (lettresFin1 === 'c') {
            return adjectif.slice(0, -1) + 'ches';
        }

        // mots en -il ou -el (les mots en -al suivent la règle générale)
        if (lettresFin2 === 'il' || lettresFin2 === 'el') {
            return adjectif + 'le';
        }

        // Pour les autres adjectifs terminés en -l, il n'y a pas de règle générale :
        // - nul, nulle ; seul, seule ; gentil, gentille...
        // TODO: du coup on fait quoi ? Dictionnaire ? Au secours

        // mots en -on ou -en (les mots en -in et -un suivent la règle générale)
        if (lettresFin2 === 'on' || lettresFin2 === 'en') {
            return adjectif + 'ne';
        }

        // Pour les adjectifs en -an, il n'y a pas de règle générale :
        // - paysan, paysanne ; persan, persane.
        // TODO: idem ptn

        // mots en -et
        if (lettresFin2 === 'et') {
            return adjectif + 'te';
        }

        // mots en -er
        if (lettresFin2 === 'er') {
            return adjectif.slice(0, -2) + 'ère';
        }

        // mots en -eur
        if (lettresFin3 === 'eur') {
            // TODO: là c'est la merde clairement
        }

        // TODO: check les autres

        return adjectif + 'e';
    }
}
