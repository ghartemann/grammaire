import Assess from "./Assess";

export class ReglesVilles {

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
}
