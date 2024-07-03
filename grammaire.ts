import ExceptionsPluriel from "./ExceptionsPluriel";
import Assess from "./assess";

export default class Grammaire {

    /** Pluralise un mot en fonction de la quantité donnée<br>
     * ```typescript
     * Grammaire.pluralise('chat', 1); // chat
     * Grammaire.pluralise('cheval', 2); // chevaux
     * Grammaire.pluralise('cheval', 2, 'chevals'); // chevals
     * ```*/
    static pluralise(mot: string, quantite: number, pluriel: string|null = null): string {
        Assess.isPositiveOrZero(quantite);

        // Si la quantité est ingérieure ou égale à 2, on renvoie le mot sans modification
        if (quantite < 2) {
            return mot;
        }

        // Si un pluriel est fourni (surcharge de la méthode)
        if (pluriel !== null) {
            return pluriel;
        }

        const lastChar = mot.slice(-1);

        // mots en -s, -x, -z
        if (lastChar === 's' || lastChar === 'x' || lastChar === 'z') {
            if (this.isException(mot)) {
                return this.getException(mot);
            }

            return mot;
        }

        const last2Chars = mot.slice(-2);

        // mots en -eu ou -au
        if (last2Chars === 'au' || last2Chars === 'eu') {
            if (this.isException(mot)) {
                return this.getException(mot);
            }

            return mot + 'x';
        }

        // mots en -ou
        if (last2Chars === 'ou') {
            if (this.isException(mot)) {
                return this.getException(mot);
            }

            return mot + 's';
        }

        // mots en -al
        if (last2Chars === 'al') {
            if (this.isException(mot)) {
                return this.getException(mot);
            }

            return mot.slice(0, -2) + 'aux';
        }

        // cas général
        return mot + 's';
    }

    /** Pluralise plusieurs mots successifs en fonction de la quantité donnée<br>
     * ```typescript
     * Grammaire.multiPluralise(['chat', 'orange'], 1); // chat orange
     * Grammaire.multiPluralise(['cheval', 'noir'], 2); // chevaux noirs
     * Grammaire.multiPluralise(['serval', 'rouge'], 2); // servals rouges
     * ```
     * Attention : ne fournir que les mots à pluraliser<br>
     * ```typescript
     * Grammaire.multiPluralise(['cheval', 'pur-sang'], 2); // chevaux pur-sangs => faux
     * ```*/
    static multiPluralise(mots: string[], quantite: number): string {
        mots.forEach((mot, index) => {
            mots[index] = this.pluralise(mot, quantite);
        });

        return mots.join(' ');
    }

    /** Détermine si le mot figure dans la liste des exceptions<br>
     * ```typescript
     * Grammaire.isException('chat'); // false
     * Grammaire.isException('serval'); // true
     * ```*/
    static isException(mot: string): boolean {
        return Object.keys(ExceptionsPluriel).includes(mot);
    }

    /** Renvoie le pluriel du mot SI celui-ci est une exception<br>
     * ```typescript
     * Grammaire.getException('serval'); // servals
     * Grammaire.getException('chat'); // Error: Le mot n'est pas une exception
     * ```*/
    static getException(mot: string): string {
        if (!this.isException(mot)) {
            throw new Error('Le mot n\'est pas une exception');
        }

        return ExceptionsPluriel[mot];
    }
}
