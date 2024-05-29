import Paraphrase from './paraphrase';

const access_token = 'xxxxxxxxxxxxxxxx';
// Usage example
const tf = new Paraphrase(access_token);

tf.getParaphrase('I am Muhammad Usman and I am 30 years old from Pakistan').then( result => console.log(result));