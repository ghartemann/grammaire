import exceptions from "./exceptions";

class Grammaire {
    static pluraliser(mot: string, quantite: number): string {
        if (typeof mot !== 'string') throw new TypeError('Le mot doit être une chaîne de caractères');
        if (typeof quantite !== 'number') throw new TypeError('La quantité doit être un nombre (int)');
        if (quantite <= 0) throw new RangeError('La quantité doit être strictement supérieure à 0');

        const last2Chars = mot.slice(-2);

        if (last2Chars === 'au' || last2Chars === 'eu') {
            if (this.isException(mot)) return this.getException(mot);

            return quantite > 1 ? mot + 'x' : mot;
        }

        if (last2Chars === 'ou') {
            if (this.isException(mot)) return this.getException(mot);

            return quantite > 1 ? mot + 's' : mot;
        }

        if (last2Chars === 'al') {
            if (this.isException(mot)) return this.getException(mot);

            return quantite > 1 ? mot.slice(0, -2) + 'aux' : mot;
        }

        return quantite > 1 ? mot + 's' : mot;
    }

    static isException(mot: string): boolean {
        if (typeof mot !== 'string') throw new TypeError('Le mot doit être une chaîne de caractères');

        return Object.keys(exceptions.pluriel).includes(mot) || Object.keys(exceptions.pluriel).includes(mot);
    }

    static getException(mot: string): string {
        if (typeof mot !== 'string') throw new TypeError('Le mot doit être une chaîne de caractères');

        return exceptions.pluriel[mot];
    }
}

module.exports = Grammaire;
