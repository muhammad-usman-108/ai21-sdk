declare class TextSegmentation {
    access_token: string;
    constructor(access_token: string);
    getTextSegmentation: (text: string, type: string) => Promise<any>;
}
export default TextSegmentation;
