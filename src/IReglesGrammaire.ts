export interface IReglesGrammaire {
    liste: { [key: string]: string };
    isException(mot: string): boolean;
    getException(mot: string): string;
}
