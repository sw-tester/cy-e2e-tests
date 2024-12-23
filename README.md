# cy-e2e-tests

**Introduction**

This projects contains automated tests to verify the various features of a [web application](https://text2data.com/Demo) that predicts sentiment analysis of texts, and these tests are built using Cypress, and are being run as part of CI/CD pipeline for every code changes.

[NodeJS](https://nodejs.org/en/download/package-manager)

[Cypress](https://www.cypress.io/)

**Project structure**

- [automated scenarios](cypress/e2e)
- [fixtures](cypress/fixtures) - provides necessary test data to the tests
- [support](cypress/support)
- [config](cypress.config.js)

***Tree-view***
```
.
├── README.md
├── cypress
│   ├── downloads
│   │   └── downloads.html
│   ├── e2e
│   │   ├── core.spec.cy.js
│   │   ├── edge.spec.cy.js
│   │   └── perf.spec.cy.js
│   ├── fixtures
│   │   ├── edge.test.texts.json
│   │   └── test.texts.json
│   ├── screenshots
│   └── support
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package-lock.json
└── package.json

```
**Scenarios automated**

The following 15 scenarios that are automated as part of this task for this app: 
https://text2data.com/Demo/

- **functional tests (8)**
    - should analyze positive sentiment in texts
    - should analyze negative sentiment in texts
    - should analyze neutral sentiment in texts
    - should handle mixed sentiment in texts
    - should detect and ignore emojis or special characters
    - should handle multilingual sentiment detection
    - should handle multilingual sentiment detection
    - should analyze text with sarcasm
- **boundary and edge tests (5)**
    - should handle text with only special characters
    - should display error for empty input
    - should analyze text with minimum length
    - should handle single-word ambiguous input
    - should handle text more than maximum length
- **performance benchmark tests (2)**
    - should handle requests within 1500 ms for simple texts
    - should handle requests within 2000 ms for large texts

**How to execute**
```
  #Setup by cloning  
  git clone https://github.com/okuli/QA-Engineer-Task 
  cd ./cy-e2e-tests
  
  #To install neccessary dependencies
  npm install
  
  #To execute tests locally.
  npx cypress run --headed --browser chrome
  
```

**Contraints**

I chose `https://text2data.com/` to build this tasks, and due to this, this project didn't have dataset built as part of this task to evaluate the model performance, and to assess accuracy. However, in order to infer the prediction quality of the dataset , my approach is to measure metrics such as accuracy, precision, recall and F1 Score by leveraging any of the standard libraries. For instance in case of nodejs environment, we can use library such as `@tensorflow/tfjs` to measure pre-determined metrics.

Moreover, I also emphasis that, though model performance and benchmark which can invariably change based on the business functions/domains, the least as a tester, what I can ensure is that the deployed model is monitored, measured and fine-tuned continuously in order to meet established metrics that business has set a standard.

Best,
Veera.