# ai21-sdk (An unofficial NPM package for AI21 Labs)
A npm package designed specializing in Natural Language Processing, which develops AI systems that can understand and generate natural language. AI21’s tools provide robust and flexible solutions for developers looking to integrate advanced language models into their applications.

## About AI21 Labs
AI21 Labs is a leading company in the field of artificial intelligence, specifically in natural language processing (NLP) and generative AI. They develop advanced AI models and tools to assist in various tasks involving text understanding, generation, and manipulation. AI21's models are known for their high performance and capability to generate human-like text.

## Main Functions
1. *Text Generation*: 
AI21 models can generate coherent and contextually relevant text based on a given prompt. This is useful for content creation, creative writing, and other applications requiring natural language generation.

2. *Text Summarization*: The models can summarize long pieces of text into shorter, more concise versions without losing the essential information.

3. *Text Completion*: Given the start of a sentence or paragraph, AI21 models can complete the text in a coherent manner.

4. *Question Answering*: These models can answer questions based on provided context or general knowledge.

## Installation

You can install this package using npm or yarn.

### npm

```npm i ai21-sdk```

### yarn

```yarn add ai21-sdk```

## Usage

// Usage example

```typescript
import { 
    Paraphrase, 
    GrammaticalCorrection, 
    TextImprovements,
    TextSegmentation,
    ContextualAnswer } from 'ai21-sdk';

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

| Function | Description | Output |
|---------|---------| ---------|
| getParaphrase |  |  | 
| getGrammaticalCorrection |  |  |
| getTextImprovements |  |  | 
| getTextSegmentation |  |  |
| getContextualAnswer |  |  | 

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

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://github.com/muhammad-usman-108/ai21-sdk/blob/main/LICENSE) file for details.
