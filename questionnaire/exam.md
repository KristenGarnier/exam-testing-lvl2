# Questionnaire

### Objectif des tests unitaires

Quel est l'objectif principal des tests unitaires ?

- B) Vérifier le comportement d'une unité de code isolée

### Utilisation de Gherkin

Gherkin est principalement utilisé pour :

- B) Décrire le comportement attendu dans un format compréhensible par tous

### Principe d'isolation

Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.

**Le principe d'isolation consiste en le fait de tester une seule fonction a la fois sans dépendre d'autres services, cela permet de trouver les sources des bugs plus rapidement car bien plus précis dans les batteries de test**

### Origine du BDD

Le BDD est une extension du :

- B) Test Driven Development

### Fonction des tests d'intégration

Les tests d'intégration vérifient principalement :

- B) L'interaction entre différents composants ou modules

### Structure Gherkin

Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.

**Un scénario Gherkin c'est : - Given - When - Then , cela permet dans un langage compréhensible par n'importe qui de déterminer des tests**

```Scénario: Connexion réussie
  Given que l'utilisateur est sur la page de connexion
  When il entre son email et mot de passe correct
  Then il est redirigé vers son tableau de bord
```

### Mocks en tests unitaires

Dans le contexte des tests unitaires, que sont les "mocks" ?

- B) Des objets qui simulent le comportement de dépendances réelles

### Objectif des tests end-to-end

Les tests end-to-end visent à :

- B) Tester l'application de bout en bout du point de vue de l'utilisateur

### Cycle TDD

Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.

**Red : On écrit un test qui échoue
Green : On écrit le code le plus simplement possible pour passer le test
Refactor : On améliore le code (sans casser le test)**

### Caractéristiques d'un bon test unitaire

Quelle est la caractéristique idéale d'un bon test unitaire ? - B) Il doit être rapide à exécuter, isolé et répétable

### Mots-clés de Gherkin

Quels sont les mots-clés principaux de Gherkin ? - C) Feature, Scenario, Given, When, Then

### Tests unitaires vs tests d'intégration

Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?

**Les tests unitaires vérifient une seule fonction de manière isolée, tandis que les tests d'intégration vérifient comment plusieurs composants du système travaillent ensemble.**

### Nom du cycle TDD

Le cycle TDD classique est connu sous le nom de : - B) Red-Green-Refactor

### Focus des tests fonctionnels

Les tests fonctionnels se concentrent sur : - C) Le comportement du système par rapport aux spécifications

### BDD et communication d'équipe

Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?

**Le BDD crée un langage commun entre les équipes techniques et métier, en utilisant des scénarios simples (Given-When-Then). Cela permet à tout le monde de comprendre les enjeux et de collaborer efficacement .**

### Avantage principal du TDD

Quel est l'avantage principal du TDD ? - C) Il favorise un design modulaire et des interfaces claires

### Avantages et défis des tests end-to-end

Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?

**Les tests end-to-end (E2E) vérifient l'application dans son ensemble, du point de vue de l'utilisateur. Ils assurent que tout fonctionne bien alors que les autres types de tests s'occupent de ce qu'il se passe plus du coté back pas forcèment vu par l'utilisateur.**

### Format des scénarios BDD

Quel est le format typique d'un scénario BDD ? - B) Étant donné-Quand-Alors

### Avantages et limites des tests unitaires

Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.

**Les tests unitaires sont rapides, permettent de détecter les erreurs tôt et facilitent le refactoring du code. Par contre, ils ne testent pas les interactions entre composants.**

### Fonctionnalité de réutilisation dans Gherkin

Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ? - B) Background

### Responsabilité des tests fonctionnels

Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ? - C) Les développeurs et les testeurs QA

### Moment d'écriture du code en TDD

Dans le TDD, à quel moment écrit-on le code de production ? - B) Après avoir écrit les tests mais avant de les exécuter

### Outils pour tests end-to-end

Quel outil est couramment utilisé pour les tests end-to-end d'applications web ? - C) Playwright

### Différences entre BDD et TDD

En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?

**Le TDD se concentre sur les tests unitaires avant le code, tandis que le BDD définit des scénarios , en mettant l'accent sur le comportement de l'application.**

### Défis des tests d'intégration

Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ? - D) Toutes les réponses ci-dessus

### Caractéristiques d'un bon test end-to-end

Quelle est la caractéristique d'un bon test end-to-end ? - B) Il doit simuler avec précision le comportement réel des utilisateurs

### Défis de l'adoption du TDD

Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?

**Le TDD peut être lent au début et difficile à apprendre. Il faut commencer petit et former l'équipe, et utilisez des mocks pour tester les composants complexes.**

### Frameworks de tests unitaires

Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ? - C) Selenium

### Rôles dans le processus BDD

Quels rôles sont généralement impliqués dans le processus BDD ? - D) Développeurs, testeurs, product owners et parties prenantes métier

### Maintenance des tests end-to-end

Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?

**Pour gérer la maintenance des tests end-to-end, je mettrais à jour les tests dès qu'une nouvelle fonctionnalité est ajoutée ou modifiée + j'automatiserais les tests pour les exécuter a chaque PR afin de détecter rapidement les régressions.**

### Inconvénients des tests fonctionnels

Quel est le principal inconvénient des tests fonctionnels ? - B) Ils sont généralement lents et coûteux à exécuter

### Intégration de Gherkin en agile

Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?

**J'intégrerais Gherkin en écrivant des scénarios clairs et compréhensibles avec les équipes métier lors des sprint plannings. on aura ainsi des tests automatisés alignés sur les besoins réels. L'avantage : une communication améliorée et une livraison plus précise.**

### Principes du TDD

Lequel des principes suivants n'est PAS associé au TDD ? - D) Écrire tous les tests à la fin du développement

### Différences entre tests fonctionnels et autres tests

En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?

**Les tests fonctionnels vérifient le comportement de l'application dans son ensemble, selon les spécifications. Contrairement aux tests unitaires qui se concentrent sur des fonctions individuelles et aux tests d'intégration qui testent les interactions entre composants.**

### Approche combinant TDD, BDD et Gherkin

Quelle approche combine naturellement TDD, BDD et Gherkin ? - B) Specification By Example

### Organisation des tests fonctionnels

Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.

**Pour une application e-commerce, j'organiserais les tests fonctionnels autour des parcours utilisateurs clés : navigation, ajout au panier, processus de commande, paiement et suivi des commandeschaque fonctionnalité serait testée dans différents scénarios, comme un utilisateur connecté ou invité, pour couvrir toutes les interactions possibles.**

### Pyramide de tests

Quelle est la pyramide de tests classique, du bas vers le haut ? - B) Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E

### Stratégie de test optimale

Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?

**Je commencerais par des tests unitaires pour la base du code, puis des tests d'intégration pour vérifier les interactions. Ensuite, des tests fonctionnels valideraient les comportements, et enfin des tests E2E pour l'expérience utilisateur. L'automatisation serait essentielle à chaque étape.**

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)

A cause de la volatilité des tests e2e notamment de codegen il est possible que certains tests sois faussés a cause d'un changement de version de l'UI de l'app dans quels cas les tests peuvent devenir faux ou alors pire ! : **faux-positifs**

**_PS : Bonne chance pour corriger mon prettier fait n'importe quoi_**
