import { tutorialCategory1, tutorialCategory2, tutorialCategory3} from '../TextToSpeech/tutorialsMessages'

const selectMessage = (categoryID: number) => {
    switch (categoryID) {
        case 1:
            return tutorialCategory1;
            break;
        case 2:
            return tutorialCategory2;
            break;
        case 3:
            return tutorialCategory3;
            break;
        default:
            return "Categoria no encontrada"
            break;

    }
}

export default selectMessage;