export default class Assess {
    static isPositiveOrZero(value: number): void {
        if (value < 0) {
            throw new RangeError('La quantité doit être supérieure ou égale à 0');
        }
    }

    static isNotEmptyString(value: string): void {
        if (value === '') {
            throw new RangeError('La chaîne de caractères ne doit pas être vide');
        }
    }

    static isInArray(value: any, array: any[]): void {
        if (!array.includes(value)) {
            throw new RangeError(`La valeur ${value} n'est pas dans le tableau [${array.join(', ')}]`);
        }
    }
}
