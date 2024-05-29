declare class GrammaticalCorrection {
    access_token: string;
    constructor(access_token: string);
    getGrammaticalCorrection: (text: string) => Promise<any>;
}
export default GrammaticalCorrection;
