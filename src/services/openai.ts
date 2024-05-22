import fetch from 'node-fetch';

export class OpenAI {
    private apiKey: string;
    private baseUrl: string = 'https://api.openai.com/v1';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private async fetchWrapper(endpoint: string, payload: object): Promise<any> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }

    public async chat(messages: string[]): Promise<any> {
        return this.fetchWrapper('chat/completions', {
            model: "gpt-4o",
            messages: messages.map(message => ({ role: 'user', content: message })),
        });
    }

    public async createImage(prompt: string): Promise<any> {
        return this.fetchWrapper('images/generations', {
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024"
        });
    }
}