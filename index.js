// OpenAi URL and Headers

const OpenAIHeaders = {   
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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`
};


async function createEmbedding(textToEmbed) {
    let response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: OpenAIHeaders,
        body: JSON.stringify({
            'model': 'text-embedding-ada-002',
            'input': textToEmbed
        }),
    });

    if (response.ok) {
        response.json().then(data => {
            console.log(data);
            return data;
        });
    }
}

createEmbedding('Hello, world!');

// You can plug this into your own code to get the embeddings for your text.
// Also you can plug into your own database to store the embeddings for future use.
