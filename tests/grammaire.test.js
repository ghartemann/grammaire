const Grammaire = require('./../grammaire.ts');

//////////// MOTS EN -S, -Z ET -X //////////////
test('brebis > brebis', () => {
    expect(Grammaire.pluralise('brebis', 2)).toBe('brebis');
});

test('héros > héros', () => {
    expect(Grammaire.pluralise('héros', 2)).toBe('héros');
});

test('nez > nez', () => {
    expect(Grammaire.pluralise('nez', 2)).toBe('nez');
});

test('gaz > gaz', () => {
    expect(Grammaire.pluralise('gaz', 2)).toBe('gaz');
});

test('lynx > lynx', () => {
    expect(Grammaire.pluralise('lynx', 2)).toBe('lynx');
});

test('prix > prix', () => {
    expect(Grammaire.pluralise('prix', 2)).toBe('prix');
});


//////////// MOTS EN -EU //////////////
/////// cas normaux
test('pneu > pneus', () => {
    expect(Grammaire.pluralise('pneu', 2)).toBe('pneus');
});


//////////// MOTS EN -AL //////////////
/////// cas normaux
test('normal > normaux', () => {
    expect(Grammaire.pluralise('normal', 2)).toBe('normaux');
});

test('cheval > chevaux', () => {
    expect(Grammaire.pluralise('cheval', 2)).toBe('chevaux');
});

/////// cas particuliers
test('serval > servals', () => {
    expect(Grammaire.pluralise('serval', 2)).toBe('servals');
});

test('récital > récitals', () => {
    expect(Grammaire.pluralise('récital', 2)).toBe('récitals');
});


//////////// MOTS EN -OU //////////////
/////// cas normaux
test('bisou > bisous', () => {
    expect(Grammaire.pluralise('bisou', 2)).toBe('bisous');
});

test('trou > trous', () => {
    expect(Grammaire.pluralise('trou', 2)).toBe('trous');
});

/////// cas particuliers
test('hibou > hiboux', () => {
    expect(Grammaire.pluralise('hibou', 2)).toBe('hiboux');
});

test('caillou > cailloux', () => {
    expect(Grammaire.pluralise('caillou', 2)).toBe('cailloux');
});
