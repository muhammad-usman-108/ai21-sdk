declare class ContextualAnswer {
    access_token: string;
    constructor(access_token: string);
    getContextualAnswer: (context: string, question: string) => Promise<any>;
}
export default ContextualAnswer;
