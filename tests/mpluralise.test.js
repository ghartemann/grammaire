import {Gr} from '../Grammaire.ts';

const method = 'mPluralise';

test('[hibou, rouge] > hiboux rouges', () => {
    expect(Gr[method](['hibou', 'rouge'], 2)).toBe('hiboux rouges');
});

test('[château, grand] > châteaux grands', () => {
    expect(Gr[method](['château', 'grand'], 2)).toBe('châteaux grands');
});

test('[pomme, rouge] > pommes rouges', () => {
    expect(Gr[method](['pomme', 'rouge'], 2)).toBe('pommes rouges');
});

test('[livre, ancien] > livres anciens', () => {
    expect(Gr[method](['livre', 'ancien'], 2)).toBe('livres anciens');
});

test('[voiture, rapide] > voitures rapides', () => {
    expect(Gr[method](['voiture', 'rapide'], 2)).toBe('voitures rapides');
});

test('[jardin, beau] > jardins beaux', () => {
    expect(Gr[method](['jardin', 'beau'], 2)).toBe('jardins beaux');
});

test('[chat, noir] > chats noirs', () => {
    expect(Gr[method](['chat', 'noir'], 2)).toBe('chats noirs');
});

test('[maison, blanc] > maisons blanches', () => {
    expect(Gr[method](['maison', 'blanc'], 2)).toBe('maisons blanches');
});

test('[arbre, haut] > arbres hauts', () => {
    expect(Gr[method](['arbre', 'haut'], 2)).toBe('arbres hauts');
});

test('[fenêtre, ouvert] > fenêtres ouvertes', () => {
    expect(Gr[method](['fenêtre', 'ouvert'], 2)).toBe('fenêtres ouvertes');
});

test('[chien, fidèle] > chiens fidèles', () => {
    expect(Gr[method](['chien', 'fidèle'], 2)).toBe('chiens fidèles');
});

test('[étoile, brillant] > étoiles brillantes', () => {
    expect(Gr[method](['étoile', 'brillant'], 2)).toBe('étoiles brillantes');
});

test('[robe, élégant] > robes élégantes', () => {
    expect(Gr[method](['robe', 'élégant'], 2)).toBe('robes élégantes');
});

test('[fromage, français] > fromages français', () => {
    expect(Gr[method](['fromage', 'français'], 2)).toBe('fromages français');
});

test('[sac, lourd] > sacs lourds', () => {
    expect(Gr[method](['sac', 'lourd'], 2)).toBe('sacs lourds');
});

test('[mur, épais] > murs épais', () => {
    expect(Gr[method](['mur', 'épais'], 2)).toBe('murs épais');
});

test('[livre, intéressant] > livres intéressants', () => {
    expect(Gr[method](['livre', 'intéressant'], 2)).toBe('livres intéressants');
});

test('[ordinateur, moderne] > ordinateurs modernes', () => {
    expect(Gr[method](['ordinateur', 'moderne'], 2)).toBe('ordinateurs modernes');
});

test('[table, rond] > tables rondes', () => {
    expect(Gr[method](['table', 'rond'], 2)).toBe('tables rondes');
});

test('[verre, plein] > verres pleins', () => {
    expect(Gr[method](['verre', 'plein'], 2)).toBe('verres pleins');
});

test('[oiseau, petit] > oiseaux petits', () => {
    expect(Gr[method](['oiseau', 'petit'], 2)).toBe('oiseaux petits');
});
