import translatte, { TranslateResult } from 'translatte';

// Function to translate text to English
export async function translateMessage(text: string) {
    try {
        const res = await translatte(text, { from: 'auto', to: 'en' });
        return res.text;
    } catch (error) {
        console.error('Error translating:', error);
        return 'Translation error';
    }
}