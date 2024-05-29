import Paraphrase from './paraphrase';
import GrammaticalCorrection from './grammaticalCorrection';
import TextImprovements from './textImprovements';
import TextSegmentation from './textSegmentation';
import ContextualAnswer from './contextualAnswers';

const access_token = 'xxxxxxxxxxxxxxxxxxx';

// Usage example
const paraphrase = new Paraphrase(access_token);
const grammaticalCorrection = new GrammaticalCorrection(access_token);
const textImprovements = new TextImprovements(access_token);
const textSegmentation = new TextSegmentation(access_token);
const contextualAnswer = new ContextualAnswer(access_token);

const context = 'In 2020 and 2021, enormous QE — approximately $4.4 trillion, or 18%, of 2021 gross domestic product (GDP) — and enormous fiscal stimulus (which has been and always will be inflationary) — approximately $5 trillion, or 21%, of 2021 GDP — stabilized markets and allowed companies to raise enormous amounts of capital. In addition, this infusion of capital saved many small businesses and put more than $2.5 trillion in the hands of consumers and almost $1 trillion into state and local coffers. These actions led to a rapid decline in unemployment, dropping from 15% to under 4% in 20 months — the magnitude and speed of which were both unprecedented. Additionally, the economy grew 7% in 2021 despite the arrival of the Delta and Omicron variants and the global supply chain shortages, which were largely fueled by the dramatic upswing in consumer spending and the shift in that spend from services to goods. Fortunately, during these two years, vaccines for COVID-19 were also rapidly developed and distributed.'

paraphrase.getParaphrase('I am Muhammad Usman and I am 30 years old from Pakistan').then( result => console.log(result));
grammaticalCorrection.getGrammaticalCorrection('I am Muhammad Usman and I am 30 years old from Pakistan and Studing in Germay university RWTH aachen').then( result => console.log(result));
textImprovements.getTextImprovements('I am Muhammad Usman and I  30 years old  Pakistan Studing in Germay university RWTH aachen', ["fluency"]).then( result => console.log(result));
textSegmentation.getTextSegmentation('https://www.nhs.uk/conditions/carpal-tunnel-syndrome/', 'URL').then( result => console.log(result));
contextualAnswer.getContextualAnswer(context, 'Did the economy shrink?').then( result => console.log(result));