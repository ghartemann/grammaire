import {Gr} from '../Grammaire.ts';

/////////////////////////////////////////////////////// PLURIELS ///////////////////////////////////////////////////////
//////////// MOTS EN -S, -Z ET -X //////////////
test('brebis > brebis', () => {
    expect(Gr.pluralise('brebis', 2)).toBe('brebis');
});

test('héros > héros', () => {
    expect(Gr.pluralise('héros', 2)).toBe('héros');
});

test('nez > nez', () => {
    expect(Gr.pluralise('nez', 2)).toBe('nez');
});

test('gaz > gaz', () => {
    expect(Gr.pluralise('gaz', 2)).toBe('gaz');
});

test('lynx > lynx', () => {
    expect(Gr.pluralise('lynx', 2)).toBe('lynx');
});

test('prix > prix', () => {
    expect(Gr.pluralise('prix', 2)).toBe('prix');
});

test('eau > eaux', () => {
    expect(Gr.pluralise('eau', 2)).toBe('eaux');
});

test('bijou > bijoux', () => {
    expect(Gr.pluralise('bijou', 2)).toBe('bijoux');
});

test('festival > festivals (exception to -al rule)', () => {
    expect(Gr.pluralise('festival', 2)).toBe('festivals');
});

test('corail > coraux', () => {
    expect(Gr.pluralise('corail', 2)).toBe('coraux');
});

test('chou > choux', () => {
    expect(Gr.pluralise('chou', 2)).toBe('choux');
});

test('chat > chat (quantity 1)', () => {
    expect(Gr.pluralise('chat', 1)).toBe('chat');
});

test('pomme > error (negative quantity)', () => {
    expect(() => Gr.pluralise('pomme', -1)).toThrow(Error);
});

test('ordinateur > ordinateurs (high quantity)', () => {
    expect(Gr.pluralise('ordinateur', 1000)).toBe('ordinateurs');
});

test('123 > error (non-string input)', () => {
    expect(() => Gr.pluralise(123, 2)).toThrow(TypeError);
});

test('empty string > error', () => {
    expect(() => Gr.pluralise('', 2)).toThrow(Error);
});


//////////// MOTS EN -EU //////////////
/////// cas normaux
test('pneu > pneus', () => {
    expect(Gr.pluralise('pneu', 2)).toBe('pneus');
});


//////////// MOTS EN -AL //////////////
/////// cas normaux
test('normal > normaux', () => {
    expect(Gr.pluralise('normal', 2)).toBe('normaux');
});

test('cheval > chevaux', () => {
    expect(Gr.pluralise('cheval', 2)).toBe('chevaux');
});

test('animal > animaux', () => {
    expect(Gr.pluralise('animal', 2)).toBe('animaux');
});

test('journal > journaux', () => {
    expect(Gr.pluralise('journal', 2)).toBe('journaux');
});

test('capital > capitaux', () => {
    expect(Gr.pluralise('capital', 2)).toBe('capitaux');
});

test('cheval > chevaux (confirming rule)', () => {
    expect(Gr.pluralise('cheval', 2)).toBe('chevaux');
});

test('bocal > bocaux', () => {
    expect(Gr.pluralise('bocal', 2)).toBe('bocaux');
});

test('signal > signaux', () => {
    expect(Gr.pluralise('signal', 2)).toBe('signaux');
});

/////// cas particuliers
test('serval > servals', () => {
    expect(Gr.pluralise('serval', 2)).toBe('servals');
});

test('régal > régals', () => {
    expect(Gr.pluralise('régal', 2)).toBe('régals');
});

test('récital > récitals', () => {
    expect(Gr.pluralise('récital', 2)).toBe('récitals');
});

test('carnaval > carnavals (exception to -al rule)', () => {
    expect(Gr.pluralise('carnaval', 2)).toBe('carnavals');
});

test('festival > festivals (consistent with exception)', () => {
    expect(Gr.pluralise('festival', 2)).toBe('festivals');
});


//////////// MOTS EN -OU //////////////
/////// cas normaux
test('bisou > bisous', () => {
    expect(Gr.pluralise('bisou', 2)).toBe('bisous');
});

test('trou > trous', () => {
    expect(Gr.pluralise('trou', 2)).toBe('trous');
});

/////// cas particuliers
test('hibou > hiboux', () => {
    expect(Gr.pluralise('hibou', 2)).toBe('hiboux');
});

test('caillou > cailloux', () => {
    expect(Gr.pluralise('caillou', 2)).toBe('cailloux');
});


//////////// AUTRES //////////////
test('cheval > chevals', () => {
    expect(Gr.pluralise('cheval', 2, 'chevals')).toBe('chevals');
});

test('[hibou, rouge] > hiboux rouges', () => {
    expect(Gr.mPluralise(['hibou', 'rouge'], 2)).toBe('hiboux rouges');
});



/////////////////////////////////////////////////////// ARTICLES ///////////////////////////////////////////////////////
test('de le Havre > du Havre', () => {
    expect('Le port ' + Gr.articleVille('de', 'Le Havre')).toBe('Le port du Havre');
});

test('à le Lavandou > au Lavandou', () => {
    expect('En vacances ' + Gr.articleVille('à', 'Le Lavandou')).toBe('En vacances au Lavandou');
});

test('à la Nouvelle-Orléans > à la Nouvelle-Orléans', () => {
    expect('Bienvenue ' + Gr.articleVille('à', 'La Nouvelle-Orléans')).toBe('Bienvenue à la Nouvelle-Orléans');
});

test('de les Andelys > des Andelys', () => {
    expect('Le château ' + Gr.articleVille('de', 'Les Andelys')).toBe('Le château des Andelys');
});

test('à les Ulis > aux Ulis', () => {
    expect('Voyage ' + Gr.articleVille('à', 'Les Ulis')).toBe('Voyage aux Ulis');
});

test('de le Touquet > du Touquet', () => {
    expect('Les plages ' + Gr.articleVille('de', 'Le Touquet')).toBe('Les plages du Touquet');
});

test('à le Mans > au Mans', () => {
    expect('La course ' + Gr.articleVille('à', 'Le Mans')).toBe('La course au Mans');
});

test('La-Chapelle with hyphen > à La-Chapelle', () => {
    expect(Gr.articleVille('à', 'La-Chapelle')).toBe('à La-Chapelle');
});

test('Saint-Jean-de-Luz compound name > à Saint-Jean-de-Luz', () => {
    expect(Gr.articleVille('à', 'Saint-Jean-de-Luz')).toBe('à Saint-Jean-de-Luz');
});

test('NYC as an acronym > à NYC', () => {
    expect(Gr.articleVille('à', 'NYC')).toBe('à NYC');
});

test('L\'Haÿ-les-Roses with apostrophe > à L\'Haÿ-les-Roses', () => {
    expect(Gr.articleVille('à', 'L\'Haÿ-les-Roses')).toBe('à L\'Haÿ-les-Roses');
});

test('Invalid preposition "sous" > throws error', () => {
    expect(() => Gr.articleVille('sous', 'Paris')).toThrow(Error);
});

test('123 as city name > à 123', () => {
    expect(Gr.articleVille('à', '123')).toBe('à 123');
});

test('A as a city name > à A', () => {
    expect(Gr.articleVille('à', 'A')).toBe('à A');
});

test('Mars as a common noun and city name > à Mars', () => {
    expect(Gr.articleVille('à', 'Mars')).toBe('à Mars');
});

test('Undefined city name > throws error', () => {
    expect(() => Gr.articleVille('à', undefined)).toThrow(Error);
});
