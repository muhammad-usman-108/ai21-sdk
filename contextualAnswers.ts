class ContextualAnswer {
    access_token: string;
  
    constructor(access_token: string) {
      this.access_token = access_token;
    }
  
    getContextualAnswer = async (context:string, question: string) => {
      try {
          // Make the GET request using fetch
          const response = await fetch("https://api.ai21.com/studio/v1/answer", {
            headers: {
              "Authorization": `Bearer ${this.access_token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "context": context,
              "question": question
            }),
            method: "POST"
          });
  
          // Parse the JSON response
          const data = await response.json();
          // Return the data
          return data;
  
      } catch (error) {
          // Handle errors that occurred during the fetch call
          console.error('An error occurred while fetching data');
          return 'An error occurred while fetching data';
      }
  };
  }
  
  export default ContextualAnswer;