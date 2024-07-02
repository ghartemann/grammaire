const Grammaire = require('./../grammaire.ts');

test('Mots en -eu : normaux', () => {
    expect(Grammaire.pluraliser('pneu', 2)).toBe('pneus');
});

test('Mots en -eu : exceptions', () => {
    expect(Grammaire.pluraliser('serval', 2)).toBe('servals');
});

test('Exceptions mots en -ou', () => {
    expect(Grammaire.pluraliser('hibou', 2)).toBe('hiboux');
});
