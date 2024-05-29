class Paraphrase {
  access_token: string;

  constructor(access_token: string) {
    this.access_token = access_token;
  }

  getParaphrase = async (text:string) => {
    try {
        // Make the GET request using fetch
        const response = await fetch("https://api.ai21.com/studio/v1/paraphrase", {
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

export default Paraphrase;

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
