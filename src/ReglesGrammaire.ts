import {IReglesGrammaire} from "./IReglesGrammaire";
import Assess from "./Assess";

// TODO: implement the interface
export class ReglesGrammaire {
    static liste: { [key: string]: string } = {};

    /** Détermine si le mot figure dans la liste des exceptions */
    static isException(mot: string): boolean {
        Assess.isNotEmptyString(mot);

        return Object.keys(this.liste).includes(mot);
    }

    /** Renvoie le pluriel du mot SI celui-ci est une exception */
    static getException(mot: string): string {
        Assess.isNotEmptyString(mot);

        if (!this.isException(mot)) {
            throw new Error('Le mot n\'est pas une exception');
        }

        return this.liste[mot];
    }
}
