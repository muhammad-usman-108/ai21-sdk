# ai21-sdk (An unofficial NPM package for AI21 Labs)

[![npm version](https://badge.fury.io/js/ai21-sdk.svg)](https://badge.fury.io/js/ai21-sdk) [![created by](https://img.shields.io/badge/created%20by-M.%20Usman-blue.svg?longCache=true&style=flat-square)](https://github.com/muhammad-usman-108) [![star](https://img.shields.io/github/stars/muhammad-usman-108/ai21-sdk.svg?style=flat-square)](https://github.com/muhammad-usman-108/ai21-sdk/stargazers) ![size](https://img.shields.io/github/size/muhammad-usman-108/ai21-sdk/dist/main.js?color=green&style=flat-square) ![npm downloads](https://img.shields.io/npm/d18m/ai21-sdk.svg?color=red&style=flat-square) [![license](https://img.shields.io/github/license/muhammad-usman-108/ai21-sdk.svg?style=flat-square)](https://github.com/muhammad-usman-108/ai21-sdk.js/blob/main/LICENSE)

A npm package designed specializing in Natural Language Processing, which develops AI systems that can understand and generate natural language. AI21’s tools provide robust and flexible solutions for developers looking to integrate advanced language models into their applications.

## About AI21 Labs
AI21 Labs is a leading company in the field of artificial intelligence, specifically in natural language processing (NLP) and generative AI. They develop advanced AI models and tools to assist in various tasks involving text understanding, generation, and manipulation. AI21's models are known for their high performance and capability to generate human-like text.

## Main Functions
1. **Text Generation**: 
AI21 models can generate coherent and contextually relevant text based on a given prompt. This is useful for content creation, creative writing, and other applications requiring natural language generation.

2. **Text Summarization**: The models can summarize long pieces of text into shorter, more concise versions without losing the essential information.

3. **Text Completion**: Given the start of a sentence or paragraph, AI21 models can complete the text in a coherent manner.

4. **Question Answering**: These models can answer questions based on provided context or general knowledge.

## How to Use
1. Create an account and Sign In: https://studio.ai21.com/
2. Go into the Profile and Click on API key. Copy the API key and we will use it to authenticate your account.

## Installation

You can install this package using npm or yarn.

### npm

```npm i ai21-sdk```

### yarn

```yarn add ai21-sdk```

## Usage

// Usage example

```typescript
import Paraphrase from "ai21-sdk/dist/paraphrase";
import GrammaticalCorrection from "ai21-sdk/dist/grammaticalCorrection";
import TextImprovements from "ai21-sdk/dist/textImprovements";
import TextSegmentation from "ai21-sdk/dist/textSegmentation";
import ContextualAnswer from "ai21-sdk/dist/contextualAnswers";

const access_token = 'xxxxxxxxxxxxxxxxxx';

const paraphrase = new Paraphrase(access_token);
const grammaticalCorrection = new GrammaticalCorrection(access_token);
const textImprovements = new TextImprovements(access_token);
const textSegmentation = new TextSegmentation(access_token);
const contextualAnswer = new ContextualAnswer(access_token);

paraphrase.getParaphrase('I am Muhammad Usman & I am 30 years').then( result => console.log(result));
grammaticalCorrection.getGrammaticalCorrection('I Muhammad Usman I 30 years old').then( result => console.log(result));
textImprovements.getTextImprovements('I am Muhammad Usman and I 30 years old  Pakstan', ["fluency"]).then( result => console.log(result));
textSegmentation.getTextSegmentation('https://www.nhs.uk/conditions/carpal-tunnel-syndrome/', 'URL').then( result => console.log(result));
contextualAnswer.getContextualAnswer('Something large text context', 'Did the economy shrink?').then( result => console.log(result));

```

### Functions

| Function | Description |
|---------|---------|
| getParaphrase | Takes a piece of text and returns a list of paraphrases that convey the same meaning using different words. | 
| getGrammaticalCorrection | Detects grammar, spelling, punctuation, and word choice errors in text, and suggests how to correct them. |
| getTextImprovements | Provides rewrite recommendations for improving the fluency, clarity and style of the input text. |
| getTextSegmentation | Takes a document (raw text or URL) and returns segmentation into paragraphs by topic. |
| getContextualAnswer | Receives a document and a question and returns an answer based entirely on the document context. |

## Scripts

### Build

To compile the TypeScript files to JavaScript, run:

```npm run build```

### Test

To run tests, use:

```npm run test```

## Configuration

### TypeScript Configuration

This package uses a `tsconfig.json` file for TypeScript configuration. Here is an example:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
}
```

## Contributing

- [Muhammad Usman](https://github.com/muhammad-usman-108)

## Support

<p><a href="https://buymeacoffee.com/engrmuhammk"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="engrmuhammk" /></a></p><br><br> 


## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://github.com/muhammad-usman-108/ai21-sdk/blob/main/LICENSE) file for details.
