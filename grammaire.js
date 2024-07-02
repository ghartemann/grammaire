import exceptions from "./exceptions";

module.exports = pluraliser(mot, quantite)

function pluraliser(mot, quantite) {
    if (typeof mot !== 'string') throw new TypeError('Le mot doit être une chaîne de caractères');
    if (typeof quantite !== 'number') throw new TypeError('La quantité doit être un nombre (int)');
    if (quantite <= 0) throw new RangeError('La quantité doit être strictement supérieure à 0');

    return quantite > 1 ? mot + 's' : mot;
}
