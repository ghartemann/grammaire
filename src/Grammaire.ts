import Assess from "./Assess";
import {ReglesPluriel} from "./ReglesPluriel";
import {ReglesFeminin} from "./ReglesFeminin";
import {ReglesVilles} from "./ReglesVilles";

export class Gr {

    /** Pluralise un nom commun en fonction de la quantité indiquée<br>
     * ```typescript
     * Gr.pluralise('chat', 1); // chat
     * Gr.pluralise('cheval', 2); // chevaux
     * Gr.pluralise('cheval', 2, 'chevals'); // chevals
     * ```*/
    static pluralise(
        nom: string,
        quantite: number,
        pluriel: string | null = null,
        seuil: number = 2
    ): string {
        return ReglesPluriel.pluralise(nom, quantite, pluriel, seuil);
    }


    /** Pluralise un adjectif en fonction de la quantité indiquée<br>
     * ```typescript
     * Gr.pluraliseAdj('beau', 1, 'm'); // beau
     * Gr.pluraliseAdj('beau', 2, 'm'); // beaux
     * Gr.pluraliseAdj('beau', 2, 'f'); // belles
     */
    static pluraliseAdj(adjectif: string, quantite: number, genre: string, seuil: number = 2): string {
        return ReglesPluriel.pluraliseAdj(adjectif, quantite, genre, seuil);
    }


    /** Pluralise plusieurs mots successifs en fonction de la quantité donnée<br>
     * ```typescript
     * Gr.mPluralise(['chat', 'orange'], 1); // chat orange
     * Gr.mPluralise(['cheval', 'noir'], 2); // chevaux noirs
     * Gr.mPluralise(['serval', 'rouge'], 2); // servals rouges
     * ```
     * Attention : ne fournir que les mots à pluraliser<br>
     * ```typescript
     * Gr.mPluralise(['cheval', 'pur-sang'], 2); // chevaux pur-sangs => faux
     * ```*/
    static mPluralise(
        mots: string[],
        quantite: number,
        seuil: number = 2
    ): string {
        return ReglesPluriel.mPluralise(mots, quantite, seuil);
    }


     /** Féminise un adjectif en tenant compte des exceptions<br>
     * ```typescript
     * Gr.feminise('beau'); // belle
     * Gr.feminise('veuf'); // veuve
     * ```*/
    static feminise(adjectif: string): string {
        return ReglesFeminin.feminise(adjectif);
    }


    /** Renvoie l'article (défini ou indéfini) correspondant à un nom de ville<br>
     * ```typescript
     * Gr.articleVille('Le Havre', 'de'); // du Havre
     * Gr.articleVille('Les Sables-d\'Olonne', 'de'); // des Sables-d'Olonne
     * Gr.articleVille('La Rochelle', 'de'); // de la Rochelle
     * Gr.articleVille('Lille', 'à'); // à Lille
     * ```*/
    static articleVille(preposition: string, nomVille: string): string {
        return ReglesVilles.articleVille(preposition, nomVille);
    }


    // static articleDep(preposition: string, nomDepartement: string): string {
    //     Assess.isNotEmptyString(preposition);
    //     Assess.isNotEmptyString(nomDepartement);
    //     Assess.isInArray(preposition, ['à', 'de'])
    //
    //     if (preposition === 'de') {
    //         // TODO
    //     }
    // }
}
