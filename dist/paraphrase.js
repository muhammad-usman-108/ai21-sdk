"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Paraphrase {
    constructor(access_token) {
        this.getParaphrase = (text) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Make the GET request using fetch
                const response = yield fetch("https://api.ai21.com/studio/v1/paraphrase", {
                    headers: {
                        "Authorization": `Bearer ${this.access_token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "text": text
                    }),
                    method: "POST"
                });
                // Parse the JSON response
                const data = yield response.json();
                // Return the data
                return data;
            }
            catch (error) {
                // Handle errors that occurred during the fetch call
                console.error('An error occurred while fetching data');
                return 'An error occurred while fetching data';
            }
        });
        this.access_token = access_token;
    }
}
exports.default = Paraphrase;
// import requests
// fetch("https://api.ai21.com/studio/v1/paraphrase", {
//   headers: {
//     "Authorization": "Bearer YOUR_API_KEY",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     "text": "Throughout this page, we will explore the advantages and features of the Paraphrase API."
//   }),
//   method: "POST"
// });
