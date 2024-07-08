import {Gr} from '../src/Grammaire.ts';

// Au cas où le nom de la méthode change
const method = 'pluralise';

//////////// MOTS EN -S, -Z ET -X //////////////
test('brebis > brebis', () => {
    expect(Gr[method]('brebis', 2)).toBe('brebis');
});

test('héros > héros', () => {
    expect(Gr[method]('héros', 2)).toBe('héros');
});

test('nez > nez', () => {
    expect(Gr[method]('nez', 2)).toBe('nez');
});

test('gaz > gaz', () => {
    expect(Gr[method]('gaz', 2)).toBe('gaz');
});

test('lynx > lynx', () => {
    expect(Gr[method]('lynx', 2)).toBe('lynx');
});

test('prix > prix', () => {
    expect(Gr[method]('prix', 2)).toBe('prix');
});

test('eau > eaux', () => {
    expect(Gr[method]('eau', 2)).toBe('eaux');
});

test('bijou > bijoux', () => {
    expect(Gr[method]('bijou', 2)).toBe('bijoux');
});

test('festival > festivals (exception to -al rule)', () => {
    expect(Gr[method]('festival', 2)).toBe('festivals');
});

test('corail > coraux', () => {
    expect(Gr[method]('corail', 2)).toBe('coraux');
});

test('chou > choux', () => {
    expect(Gr[method]('chou', 2)).toBe('choux');
});

test('chat > chat (quantity 1)', () => {
    expect(Gr[method]('chat', 1)).toBe('chat');
});

test('pomme > error (negative quantity)', () => {
    expect(() => Gr[method]('pomme', -1)).toThrow(Error);
});

test('ordinateur > ordinateurs (high quantity)', () => {
    expect(Gr[method]('ordinateur', 1000)).toBe('ordinateurs');
});

test('123 > error (non-string input)', () => {
    expect(() => Gr[method](123, 2)).toThrow(TypeError);
});

test('empty string > error', () => {
    expect(() => Gr[method]('', 2)).toThrow(Error);
});


//////////// MOTS EN -EU //////////////
/////// cas normaux
test('pneu > pneus', () => {
    expect(Gr[method]('pneu', 2)).toBe('pneus');
});


//////////// MOTS EN -AL //////////////
/////// cas normaux
test('normal > normaux', () => {
    expect(Gr[method]('normal', 2)).toBe('normaux');
});

test('cheval > chevaux', () => {
    expect(Gr[method]('cheval', 2)).toBe('chevaux');
});

test('animal > animaux', () => {
    expect(Gr[method]('animal', 2)).toBe('animaux');
});

test('journal > journaux', () => {
    expect(Gr[method]('journal', 2)).toBe('journaux');
});

test('capital > capitaux', () => {
    expect(Gr[method]('capital', 2)).toBe('capitaux');
});

test('cheval > chevaux (confirming rule)', () => {
    expect(Gr[method]('cheval', 2)).toBe('chevaux');
});

test('bocal > bocaux', () => {
    expect(Gr[method]('bocal', 2)).toBe('bocaux');
});

test('signal > signaux', () => {
    expect(Gr[method]('signal', 2)).toBe('signaux');
});

/////// cas particuliers
test('serval > servals', () => {
    expect(Gr[method]('serval', 2)).toBe('servals');
});

test('régal > régals', () => {
    expect(Gr[method]('régal', 2)).toBe('régals');
});

test('récital > récitals', () => {
    expect(Gr[method]('récital', 2)).toBe('récitals');
});

test('carnaval > carnavals (exception to -al rule)', () => {
    expect(Gr[method]('carnaval', 2)).toBe('carnavals');
});

test('festival > festivals (consistent with exception)', () => {
    expect(Gr[method]('festival', 2)).toBe('festivals');
});


//////////// MOTS EN -OU //////////////
/////// cas normaux
test('bisou > bisous', () => {
    expect(Gr[method]('bisou', 2)).toBe('bisous');
});

test('trou > trous', () => {
    expect(Gr[method]('trou', 2)).toBe('trous');
});

/////// cas particuliers
test('hibou > hiboux', () => {
    expect(Gr[method]('hibou', 2)).toBe('hiboux');
});

test('caillou > cailloux', () => {
    expect(Gr[method]('caillou', 2)).toBe('cailloux');
});


//////////// AUTRES //////////////
test('cheval > chevals', () => {
    expect(Gr[method]('cheval', 2, 'chevals')).toBe('chevals');
});
