declare class TextImprovements {
    access_token: string;
    constructor(access_token: string);
    getTextImprovements: (text: string, types: Array<string>) => Promise<any>;
}
export default TextImprovements;
