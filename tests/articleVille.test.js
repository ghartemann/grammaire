import {Gr} from '../src/Grammaire.ts';

const method = 'articleVille';

test('de le Havre > du Havre', () => {
    expect('Le port ' + Gr[method]('de', 'Le Havre')).toBe('Le port du Havre');
});

test('à le Lavandou > au Lavandou', () => {
    expect('En vacances ' + Gr[method]('à', 'Le Lavandou')).toBe('En vacances au Lavandou');
});

test('à la Nouvelle-Orléans > à la Nouvelle-Orléans', () => {
    expect('Bienvenue ' + Gr[method]('à', 'La Nouvelle-Orléans')).toBe('Bienvenue à la Nouvelle-Orléans');
});

test('de les Andelys > des Andelys', () => {
    expect('Le château ' + Gr[method]('de', 'Les Andelys')).toBe('Le château des Andelys');
});

test('à les Ulis > aux Ulis', () => {
    expect('Voyage ' + Gr[method]('à', 'Les Ulis')).toBe('Voyage aux Ulis');
});

test('de le Touquet > du Touquet', () => {
    expect('Les plages ' + Gr[method]('de', 'Le Touquet')).toBe('Les plages du Touquet');
});

test('à le Mans > au Mans', () => {
    expect('La course ' + Gr[method]('à', 'Le Mans')).toBe('La course au Mans');
});

test('La-Chapelle with hyphen > à La-Chapelle', () => {
    expect(Gr[method]('à', 'La-Chapelle')).toBe('à La-Chapelle');
});

test('Saint-Jean-de-Luz compound name > à Saint-Jean-de-Luz', () => {
    expect(Gr[method]('à', 'Saint-Jean-de-Luz')).toBe('à Saint-Jean-de-Luz');
});

test('NYC as an acronym > à NYC', () => {
    expect(Gr[method]('à', 'NYC')).toBe('à NYC');
});

test('L\'Haÿ-les-Roses with apostrophe > à L\'Haÿ-les-Roses', () => {
    expect(Gr[method]('à', 'L\'Haÿ-les-Roses')).toBe('à L\'Haÿ-les-Roses');
});

test('Invalid preposition "sous" > throws error', () => {
    expect(() => Gr[method]('sous', 'Paris')).toThrow(Error);
});

test('123 as city name > à 123', () => {
    expect(Gr[method]('à', '123')).toBe('à 123');
});

test('A as a city name > à A', () => {
    expect(Gr[method]('à', 'A')).toBe('à A');
});

test('Mars as a common noun and city name > à Mars', () => {
    expect(Gr[method]('à', 'Mars')).toBe('à Mars');
});

test('Undefined city name > throws error', () => {
    expect(() => Gr[method]('à', undefined)).toThrow(Error);
});
