import exceptions from "./exceptions";

export default class Grammaire {
    /** Pluralise un mot en fonction de la quantité donnée<br>
     * Exemple :<br>
     * ```typescript
     * Grammaire.pluraliser('chat', 1); // chat
     * Grammaire.pluraliser('cheval', 2); // chevaux
     * ```
     */
    static pluralise(mot: string, quantite: number): string {
        if (typeof mot !== 'string') throw new TypeError('Le mot doit être une chaîne de caractères');
        if (typeof quantite !== 'number') throw new TypeError('La quantité doit être un nombre (int)');
        if (quantite <= 0) throw new RangeError('La quantité doit être strictement supérieure à 0');

        const lastChar = mot.slice(-1);

        if (lastChar === 's' || lastChar === 'x' || lastChar === 'z') {
            if (this.isException(mot, 'pluriel')) return this.getException(mot, 'pluriel');

            return mot;
        }

        const last2Chars = mot.slice(-2);

        if (last2Chars === 'au' || last2Chars === 'eu') {
            if (this.isException(mot, 'pluriel')) return this.getException(mot, 'pluriel');

            return quantite > 1 ? mot + 'x' : mot;
        }

        if (last2Chars === 'ou') {
            if (this.isException(mot, 'pluriel')) return this.getException(mot, 'pluriel');

            return quantite > 1 ? mot + 's' : mot;
        }

        if (last2Chars === 'al') {
            if (this.isException(mot, 'pluriel')) return this.getException(mot, 'pluriel');

            return quantite > 1 ? mot.slice(0, -2) + 'aux' : mot;
        }

        return quantite > 1 ? mot + 's' : mot;
    }

    static isException(mot: string, type: string): boolean {
        if (typeof mot !== 'string') throw new TypeError('Le mot doit être une chaîne de caractères');
        if (typeof type !== 'string') throw new TypeError('Le type doit être une chaîne de caractères');

        return Object.keys(exceptions[type]).includes(mot);
    }

    static getException(mot: string, type: string): string {
        if (typeof mot !== 'string') throw new TypeError('Le mot doit être une chaîne de caractères');
        if (typeof type !== 'string') throw new TypeError('Le type doit être une chaîne de caractères');

        return exceptions[type][mot];
    }
}

module.exports = Grammaire;
