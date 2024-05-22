import fetch from "node-fetch";
export class OpenAI {
    constructor(apiKey){
        this.baseUrl = 'https://api.openai.com/v1';
        this.apiKey = apiKey;
    }
    async fetchWrapper(endpoint, payload) {
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
    async chat(messages) {
        return this.fetchWrapper('chat/completions', {
            model: "gpt-4o",
            messages: messages.map((message)=>({
                    role: 'user',
                    content: message
                }))
        });
    }
    async createImage(prompt) {
        return this.fetchWrapper('images/generations', {
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024"
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXHNlcnZpY2VzXFxvcGVuYWkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9wZW5BSSB7XHJcbiAgICBwcml2YXRlIGFwaUtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXBpS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGZldGNoV3JhcHBlcihlbmRwb2ludDogc3RyaW5nLCBwYXlsb2FkOiBvYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsfS8ke2VuZHBvaW50fWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3RoaXMuYXBpS2V5fWAsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjaGF0KG1lc3NhZ2VzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hXcmFwcGVyKCdjaGF0L2NvbXBsZXRpb25zJywge1xyXG4gICAgICAgICAgICBtb2RlbDogXCJncHQtNG9cIixcclxuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLm1hcChtZXNzYWdlID0+ICh7IHJvbGU6ICd1c2VyJywgY29udGVudDogbWVzc2FnZSB9KSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUltYWdlKHByb21wdDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFdyYXBwZXIoJ2ltYWdlcy9nZW5lcmF0aW9ucycsIHtcclxuICAgICAgICAgICAgbW9kZWw6IFwiZGFsbC1lLTNcIixcclxuICAgICAgICAgICAgcHJvbXB0OiBwcm9tcHQsXHJcbiAgICAgICAgICAgIG46IDEsXHJcbiAgICAgICAgICAgIHNpemU6IFwiMTAyNHgxMDI0XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJmZXRjaCIsIk9wZW5BSSIsImNvbnN0cnVjdG9yIiwiYXBpS2V5IiwiYmFzZVVybCIsImZldGNoV3JhcHBlciIsImVuZHBvaW50IiwicGF5bG9hZCIsInJlc3BvbnNlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjaGF0IiwibWVzc2FnZXMiLCJtb2RlbCIsIm1hcCIsIm1lc3NhZ2UiLCJyb2xlIiwiY29udGVudCIsImNyZWF0ZUltYWdlIiwicHJvbXB0IiwibiIsInNpemUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxhQUFhO0FBRS9CLE9BQU8sTUFBTUM7SUFJVEMsWUFBWUMsTUFBYyxDQUFFO2FBRnBCQyxVQUFrQjtRQUd0QixJQUFJLENBQUNELE1BQU0sR0FBR0E7SUFDbEI7SUFFQSxNQUFjRSxhQUFhQyxRQUFnQixFQUFFQyxPQUFlLEVBQWdCO1FBQ3hFLE1BQU1DLFdBQVcsTUFBTVIsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQyxFQUFFRSxTQUFTLENBQUMsRUFBRTtZQUN4REcsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNQLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxnQkFBZ0I7WUFDcEI7WUFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtRQUN6QjtRQUVBLElBQUksQ0FBQ0MsU0FBU00sRUFBRSxFQUFFO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLENBQUMsb0JBQW9CLEVBQUVQLFNBQVNRLE1BQU0sQ0FBQyxDQUFDO1FBQzVEO1FBQ0EsT0FBT1IsU0FBU1MsSUFBSTtJQUN4QjtJQUVBLE1BQWFDLEtBQUtDLFFBQWtCLEVBQWdCO1FBQ2hELE9BQU8sSUFBSSxDQUFDZCxZQUFZLENBQUMsb0JBQW9CO1lBQ3pDZSxPQUFPO1lBQ1BELFVBQVVBLFNBQVNFLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBWSxDQUFBO29CQUFFQyxNQUFNO29CQUFRQyxTQUFTRjtnQkFBUSxDQUFBO1FBQ3hFO0lBQ0o7SUFFQSxNQUFhRyxZQUFZQyxNQUFjLEVBQWdCO1FBQ25ELE9BQU8sSUFBSSxDQUFDckIsWUFBWSxDQUFDLHNCQUFzQjtZQUMzQ2UsT0FBTztZQUNQTSxRQUFRQTtZQUNSQyxHQUFHO1lBQ0hDLE1BQU07UUFDVjtJQUNKO0FBQ0oifQ==