import Assess from "./assess";
import {ExceptionsPluriel} from "./ExceptionsPluriel";
import {ExceptionsFeminin} from "./ExceptionsFeminin";

export class Gr {

    /** Pluralise un nom commun en fonction de la quantité indiquée<br>
     * ```typescript
     * Gr.pluraliseNom('chat', 1); // chat
     * Gr.pluraliseNom('cheval', 2); // chevaux
     * Gr.pluraliseNom('cheval', 2, 'chevals'); // chevals
     * ```*/
    static pluraliseNom(
        nom: string,
        quantite: number,
        pluriel: string | null = null,
        seuil: number = 2
    ): string {
        Assess.isPositiveOrZero(quantite);
        Assess.isNotEmptyString(nom);

        // Si la quantité est ingérieure ou égale au seuil (par défaut 2), on renvoie le mot sans modification
        if (quantite < seuil) {
            return nom;
        }

        // Si un pluriel est fourni (surcharge de la méthode)
        if (pluriel !== null) {
            return pluriel;
        }

        // Si le mot est une exception
        if (ExceptionsPluriel.isException(nom)) {
            return ExceptionsPluriel.getException(nom);
        }

        // Sinon, on détermine le pluriel :

        // On premd la dernière lettre
        let lettresFin = nom.slice(-1);

        // mots en -s, -x, -z
        if (lettresFin === 's' || lettresFin === 'x' || lettresFin === 'z') {
            return nom;
        }

        // On prend les deux dernières lettres
        lettresFin = nom.slice(-2);

        // mots en -eu ou -au
        if (lettresFin === 'au' || lettresFin === 'eu') {
            return nom + 'x';
        }

        // mots en -ou
        if (lettresFin === 'ou') {
            return nom + 's';
        }

        // mots en -al
        if (lettresFin === 'al') {
            return nom.slice(0, -2) + 'aux';
        }

        // Si on ne passe dans aucune condition, on retourne le cas général
        return nom + 's';
    }

    static pluraliseAdj(adjectif: string, quantite: number, genre: string, seuil: number = 2): string {
        Assess.isPositiveOrZero(quantite);
        Assess.isNotEmptyString(adjectif);

        if (quantite < seuil) {
            return adjectif;
        }

        if (genre === 'f') {
            adjectif = this.feminise(adjectif);
        }

        return this.pluraliseNom(adjectif, quantite, null, seuil);
    }

    static feminise(adjectif: string): string {
        Assess.isNotEmptyString(adjectif);

        // Si le mot est une exception
        if (ExceptionsFeminin.isException(adjectif)) {
            return ExceptionsFeminin.getException(adjectif);
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

        // TODO langue de cons : Pour les autres adjectifs terminés en -l, il n'y a pas de règle générale :
        // - nul, nulle ; seul, seule ; gentil, gentille...

        // mots en -on ou -en (les mots en -in et -un suivent la règle générale)
        if (lettresFin2 === 'on' || lettresFin2 === 'en') {
            return adjectif + 'ne';
        }

        // TODO langue de cons : Pour les adjectifs en -an, il n'y a pas de règle générale :
        // - paysan, paysanne ; persan, persane.

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
    // TODO: gérer le féminin (je suis idiot)
    static mPluralise(
        mots: string[],
        quantite: number,
        seuil: number = 2
    ): string {
        mots.forEach((mot, index) => {
            Assess.isNotEmptyString(mot);
            mots[index] = this.pluraliseNom(mot, quantite, null, seuil);
        });

        return mots.join(' ');
    }

    /** Renvoie l'article (défini ou indéfini) correspondant à un nom de ville<br>
     * ```typescript
     * Gr.articleVille('Le Havre', 'de'); // du Havre
     * Gr.articleVille('Les Sables-d\'Olonne', 'de'); // des Sables-d'Olonne
     * Gr.articleVille('La Rochelle', 'de'); // de la Rochelle
     * Gr.articleVille('Lille', 'à'); // à Lille
     * ```*/
    static articleVille(preposition: string, nomVille: string): string {
        Assess.isNotEmptyString(preposition);
        Assess.isNotEmptyString(nomVille);
        Assess.isInArray(preposition, ['à', 'de'])

        if (preposition === 'à') {
            if (nomVille.startsWith('Les ')) {
                return 'aux ' + nomVille.slice(4);
            }

            if (nomVille.startsWith('Le ')) {
                return 'au ' + nomVille.slice(3);
            }

            if (nomVille.startsWith('La ')) {
                return 'à la ' + nomVille.slice(3);
            }

            // TODO: discutable, à checker
            // if (nomVille.startsWith('L\'')) {
            //     return 'à l\'' + nomVille.slice(2);
            // }

            return 'à ' + nomVille;
        } else if (preposition === 'de') {
            if (nomVille.startsWith('Les ')) {
                return 'des ' + nomVille.slice(4);
            }

            if (nomVille.startsWith('Le ')) {
                return 'du ' + nomVille.slice(3);
            }

            if (nomVille.startsWith('La ')) {
                return 'de la ' + nomVille.slice(3);
            }

            if (nomVille.startsWith('L\'')) {
                return 'de l\'' + nomVille.slice(2);
            }

            return 'de ' + nomVille;
        }
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
