import {Gr} from '../Grammaire.ts';

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

/////// cas particuliers
test('serval > servals', () => {
    expect(Gr.pluralise('serval', 2)).toBe('servals');
});

test('récital > récitals', () => {
    expect(Gr.pluralise('récital', 2)).toBe('récitals');
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
