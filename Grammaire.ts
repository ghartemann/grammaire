import ExceptionsPluriel from "./ExceptionsPluriel";
import Assess from "./assess";

export class Gr {

    /** Pluralise un mot en fonction de la quantité donnée<br>
     * ```typescript
     * Gr.pluralise('chat', 1); // chat
     * Gr.pluralise('cheval', 2); // chevaux
     * Gr.pluralise('cheval', 2, 'chevals'); // chevals
     * ```*/
    static pluralise(
        mot: string,
        quantite: number,
        pluriel: string | null = null,
        seuil: number = 2
    ): string {
        Assess.isPositiveOrZero(quantite);

        // Si la quantité est ingérieure ou égale au seuil (par défaut 2), on renvoie le mot sans modification
        if (quantite < seuil) {
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
        mots.forEach((mot, index) => {
            mots[index] = this.pluralise(mot, quantite, null, seuil);
        });

        return mots.join(' ');
    }

    /** PRIVATE: Détermine si le mot figure dans la liste des exceptions */
    private static isException(mot: string): boolean {
        return Object.keys(ExceptionsPluriel).includes(mot);
    }

    /** PRIVATE: Renvoie le pluriel du mot SI celui-ci est une exception */
    private static getException(mot: string): string {
        if (!this.isException(mot)) {
            throw new Error('Le mot n\'est pas une exception');
        }

        return ExceptionsPluriel[mot];
    }
}
