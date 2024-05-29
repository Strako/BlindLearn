import { NewInstance } from "./BaseAPI";

const getResponse = async (message: string) => {

    const data =
    {
        'messages': [
            {
                'role': 'user',
                'content': message
            }
        ],
        'model': 'llama3-8b-8192'
    }

    const response = await NewInstance.post('', data);
    console.log(response);
    return response;
};

export default getResponse;