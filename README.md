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

```javascript
import { pluralise } from 'grammaire';

console.log(pluralise('pomme', 2)); // pommes
console.log(pluralise('cheval', 2)); // chevaux

// Pour indiquer un pluriel spécifique et/ou surcharger le pluriel par défaut
console.log(pluralise('cheval', 2, 'chevals')); // chevals
```

## Ressources
[Pluriels irréguliers en français](https://fr.wiktionary.org/wiki/Annexe:Pluriels_irr%C3%A9guliers_en_fran%C3%A7ais)
