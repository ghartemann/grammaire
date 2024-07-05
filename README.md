# Grammaire

La langue française est complexe et plutôt pénible — notamment à cause des très nombreux cas particuliers.
Les manipulations de chaînes de caractères en sont rendues parfois ardues, surtout quand les mots sont à accorder à des données dynamiques.

Ce package a pour but de simplifier ces manipulations en fournissant diverses méthodes applicables à tous types de projets.

Explication pratique : remplacez
```vue
{{ contrats.length }} contrat{{ contrats.length > 1 ? 's' : '' }}
<!--7 contrats-->
```
par
```vue
{{ contrats.length }} {{ Gr.pluralise('contrat', contrats.length) }}
<!--7 contrats-->
```

Le résultat est un poil plus long mais il est plus lisible et gère tout seul les exceptions.

NB: d'autres fonctionnalités seront ajoutées par la suite, dans le but de simplifier l'usage du masculin/féminin (notamment
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
function pluralise(
    mot: string,
    quantite: number,
    pluriel: string = null, // optionnel
    seuil: number = 2 // optionnel
): string {}
```

Exemples :
```javascript
Gr.pluralise('pomme', 2); // pommes
Gr.pluralise('cheval', 2); // chevaux
```

Il est possible de surcharger la méthode en passant un pluriel en paramètre :
```javascript
Gr.pluralise('cheval', 2, 'chevals'); // chevals
```

Ou en réduisant le seuil à partir duquel le mot est mis au pluriel :
```javascript
Gr.pluralise('kilomètre', 1.5, null, 1); // kilomètres
```

### mPluralise()
Pluralise plusieurs mots successifs en fonction de la quantité donnée.

```typescript
function mPluralise(
    mots: Array,
    quantite: number,
    seuil: number = 2 // optionnel
): string {}
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
- [Pluriels irréguliers en français](https://fr.wiktionary.org/wiki/Annexe:Pluriels_irr%C3%A9guliers_en_fran%C3%A7ais)
- [1,5 gramme ou 1,5 grammes ?](https://www.antidote.info/fr/blogue/enquetes/15-gramme-ou-15-grammes)
