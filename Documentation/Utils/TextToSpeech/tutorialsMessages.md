```markdown
# Tutorial Constants Documentation

This code file contains a series of exported constants used for displaying tutorial instructions in a learning application. These constants are primarily used to guide the user through different stages of the application, from login to navigating through various categories and taking quizzes.

## Dependencies
No external libraries are specifically required for these constants as they are plain text strings.

## Constants

### `tutorialLogin`
- **Purpose**: Provides instructions for how to enter the username.
- **Usage**:
  ```javascript
  console.log(tutorialLogin);
  ```

### `tutorialHome`
- **Purpose**: Describes the main categories available in the application and how to select them.
- **Usage**:
  ```javascript
  console.log(tutorialHome);
  ```

### `tutorialCategory1`
- **Purpose**: Details the topics under Category 1 and instructions on how to select a topic.
- **Usage**:
  ```javascript
  console.log(tutorialCategory1);
  ```

### `tutorialCategory2`
- **Purpose**: Details the topics under Category 2 and instructions on how to select a topic.
- **Usage**:
  ```javascript
  console.log(tutorialCategory2);
  ```

### `tutorialCategory3`
- **Purpose**: Details the topics under Category 3 and instructions on how to select a topic.
- **Usage**:
  ```javascript
  console.log(tutorialCategory3);
  ```

### `tutorialQuiz`
- **Purpose**: Provides instructions on how to navigate through quiz information, questions, and options, and how to select an answer.
- **Usage**:
  ```javascript
  console.log(tutorialQuiz);
  ```

## Edge Cases and Assumptions
- **Assumptions**: It is assumed that the user interacts with the application through a keyboard, specifically using the spacebar and enter key as per the instructions provided.
- **Edge Cases**: The instructions assume that the user follows the format exactly as stated (e.g., pressing the spacebar before entering a category number). Deviations from this format are not addressed in the provided constants.

## Example Usage
To display the login tutorial in the console:
```javascript
console.log(tutorialLogin);
```
This will output:
```
Para ingresar tu nombre de usuario presiona la barra espaciadora
```
```

