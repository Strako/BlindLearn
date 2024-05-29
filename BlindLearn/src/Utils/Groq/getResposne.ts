import { NewInstance } from "./BaseAPI";

const getResponse = async (message: string) => {

    const data =
    {
        'messages': [
            {
                'role': 'user',
                'content': 'Response en Idioma español, responde al siguiente mensaje a manera de charla, con una respuesta no tan larga, al final pregunta si le gustaria hablar de algo mas. Mi mensaje es:  ' + message
            }
        ],
        'model': 'llama3-8b-8192'
    }

    const response = await NewInstance.post('', data);
    console.log(response);
    return response;
};

export default getResponse;