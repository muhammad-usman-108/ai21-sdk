"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paraphrase_1 = __importDefault(require("./paraphrase"));
const access_token = 'mFpfyG6h6mj8dUCGYIYjk6iSFG7cyFQ9';
// Usage example
const tf = new paraphrase_1.default(access_token);
tf.getParaphrase('I am Muhammad Usman and I am 30 years old from Pakistan').then(result => console.log(result));
