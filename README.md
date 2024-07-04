# Grammaire

La langue française est complexe et plutôt pénible vis-à-vis des cas particuliers. Elle rend parfois difficile les
manipulations de chaînes de caractères, surtout quand les données sont dynamiques.

Ce package a pour but de simplifier ces manipulations en fournissant des méthodes pour gérer les pluriels en français.

Explication pratique : remplacez
```vue
{{ user.contrats.length }} contrat{{ user.contrats.length > 1 ? 's' : '' }}
<!--7 contrats-->
```
par
```javascript
{{ user.contrats.length }} {{ Gr.pluralise('contrat', user.contrats.length) }}
<!--7 contrats-->
```

D'autres fonctionnalités seront ajoutées par la suite, dans le but de simplifier l'usage du masculin/féminin (notamment
l'usage de l'écriture inclusive), la gestion des "au", "à le", "aux", "du", "des", etc.

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

### Import
```javascript
import Gr from 'grammaire';
```


### pluralise()
Permet de transformer un mot au pluriel en fonction d'un nombre donné.

```typescript
function pluralise(mot: string, quantite: number, pluriel: string = null): string {}
```

Exemples :
```javascript
Gr.pluralise('pomme', 2); // pommes
Gr.pluralise('cheval', 2); // chevaux
```

Il est possible de surcharger la méthode en passant un pluriel en paramètre.
```javascript
Gr.pluralise('cheval', 2, 'chevals'); // chevals
```

### mPluralise()
Pluralise plusieurs mots successifs en fonction de la quantité donnée.

```typescript
function mPluralise(mots: Array, quantite: number): string {}
```

Exemples :

```javascript
Gr.mPluralise(['chat', 'orange'], 1); // chat orange
Gr.mPluralise(['cheval', 'noir'], 2); // chevaux noirs
Gr.mPluralise(['serval', 'rouge'], 2); // servals rouges
```
Attention : ne fournir que les mots à pluraliser
```javascript
Gr.mPluralise(['cheval', 'pur-sang'], 2); // chevaux pur-sangs => faux
```


## Tests
```bash
yarn test
```


## Contribuer
Pour contribuer, il suffit de cloner le projet et de créer une pull request.

## License
[ISC](https://opensource.org/licenses/ISC)

## Ressources
[Pluriels irréguliers en français](https://fr.wiktionary.org/wiki/Annexe:Pluriels_irr%C3%A9guliers_en_fran%C3%A7ais)
