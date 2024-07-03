# Grammaire

Notre chère langue française est complexe et bourrée de cas particuliers, il est ainsi parfois difficile de gérer les différentes formes
que peuvent prendre les mots en fonction de leur genre ou nombre.

Ce package a pour but de simplifier les manipulations de chaînes de caractères en proposant diverses fonctions.

## Installation

#### Yarn
```bash
yarn add grammaire
```

#### NPM
```bash
npm install grammaire
```

## Utilisation

### pluralise()
Permet de transformer un mot au pluriel en fonction d'un nombre donné.

```typescript
function pluralise(mot: string, quantite: number, pluriel: string = null): string {}
```

Exemples :
```javascript
Grammaire.pluralise('pomme', 2); // pommes
Grammaire.pluralise('cheval', 2); // chevaux
```

Il est possible de surcharger la méthode en passant un pluriel en paramètre.
```javascript
Grammaire.pluralise('cheval', 2, 'chevals'); // chevals
```

### multiPluralise()
Pluralise plusieurs mots successifs en fonction de la quantité donnée
```typescript
Grammaire.multiPluralise(['chat', 'orange'], 1); // chat orange
Grammaire.multiPluralise(['cheval', 'noir'], 2); // chevaux noirs
Grammaire.multiPluralise(['serval', 'rouge'], 2); // servals rouges
```
Attention : ne fournir que les mots à pluraliser
```typescript
Grammaire.multiPluralise(['cheval', 'pur-sang'], 2); // chevaux pur-sangs => faux
```

### isException()
Permet de vérifier si un mot est une exception (si son pluriel diffère de la règle).

```typescript
function isException(mot: string): boolean {}
```

Exemples :
```javascript
Grammaire.isException('chat'); // false
Grammaire.isException('serval'); // true
```


### getException()
Permet de récupérer le pluriel d'un mot exception.

```typescript
function getException(mot: string): string {}
```

Exemples :
```javascript
Grammaire.getException('serval'); // servals
Grammaire.getException('chat'); // Error: Le mot n'est pas une exception
```

## Tests
```bash
yarn test
```

Cependant les tests sont pétés actuellement.

## Contribuer
Pour contribuer, il suffit de cloner le projet et de créer une pull request.

## License
[ISC](https://opensource.org/licenses/ISC)

## Ressources
[Pluriels irréguliers en français](https://fr.wiktionary.org/wiki/Annexe:Pluriels_irr%C3%A9guliers_en_fran%C3%A7ais)
