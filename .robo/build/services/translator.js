import translatte from "translatte";
// Function to translate text to English
export async function translateMessage(text) {
    try {
        const res = await translatte(text, {
            from: 'auto',
            to: 'en'
        });
        return res.text;
    } catch (error) {
        console.error('Error translating:', error);
        return 'Translation error';
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaXNjb3JkXFxtYW5pa2luZWtvLWRpc2NvcmRcXGJvdHNcXG1hbmlraW5la28tYm90XFxzcmNcXHNlcnZpY2VzXFx0cmFuc2xhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFuc2xhdHRlLCB7IFRyYW5zbGF0ZVJlc3VsdCB9IGZyb20gJ3RyYW5zbGF0dGUnO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gdHJhbnNsYXRlIHRleHQgdG8gRW5nbGlzaFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlTWVzc2FnZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdHJhbnNsYXR0ZSh0ZXh0LCB7IGZyb206ICdhdXRvJywgdG86ICdlbicgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy50ZXh0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB0cmFuc2xhdGluZzonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuICdUcmFuc2xhdGlvbiBlcnJvcic7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidHJhbnNsYXR0ZSIsInRyYW5zbGF0ZU1lc3NhZ2UiLCJ0ZXh0IiwicmVzIiwiZnJvbSIsInRvIiwiZXJyb3IiLCJjb25zb2xlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGdCQUFxQyxhQUFhO0FBRXpELHdDQUF3QztBQUN4QyxPQUFPLGVBQWVDLGlCQUFpQkMsSUFBWTtJQUMvQyxJQUFJO1FBQ0EsTUFBTUMsTUFBTSxNQUFNSCxXQUFXRSxNQUFNO1lBQUVFLE1BQU07WUFBUUMsSUFBSTtRQUFLO1FBQzVELE9BQU9GLElBQUlELElBQUk7SUFDbkIsRUFBRSxPQUFPSSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3BDLE9BQU87SUFDWDtBQUNKIn0=