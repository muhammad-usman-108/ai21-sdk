declare class Paraphrase {
    access_token: string;
    constructor(access_token: string);
    getParaphrase: (text: string) => Promise<any>;
}
export default Paraphrase;
