import { tutorialCategory1, tutorialCategory2, tutorialCategory3} from '../TextToSpeech/tutorialsMessages'

const selectMessage = (categoryID: number) => {
    let result = "";
    switch (categoryID) {
        case 1:
            result = tutorialCategory1;
            console.log(result);
            break;
        case 2:
            result =  tutorialCategory2;
            console.log(result);
            break;
        case 3:
            result =  tutorialCategory3;
            console.log(result);
            break;
        default:
            result =  "Categoria no encontrada"
            console.log(result);
            break;

    }
    return result;
}

export default selectMessage;