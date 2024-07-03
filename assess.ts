export default class Assess {
    static isPositiveOrZero(value: number): void {
        if (value < 0) {
            throw new RangeError('La quantité doit être supérieure ou égale à 0');
        }
    }
}
