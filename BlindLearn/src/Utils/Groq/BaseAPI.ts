
import axios from "axios";

const BASE_URL = 'https://api.groq.com/openai/v1/chat/completions';
const apiKey = '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';


export const NewInstance = axios.create({
	// Configuration
	baseURL: BASE_URL,
    headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
    },
});
