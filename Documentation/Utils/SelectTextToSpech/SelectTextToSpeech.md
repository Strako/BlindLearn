```markdown
# selectMessage Function Documentation

## Overview
The `selectMessage` function is designed to select and return tutorial messages based on a given category ID. It is part of a larger system that handles tutorial content delivery in a Text-to-Speech application.

## Dependencies
- Imports `tutorialCategory1`, `tutorialCategory2`, `tutorialCategory3` from `../TextToSpeech/tutorialsMessages`.

## Function Description
`selectMessage` is a function that retrieves a specific tutorial message corresponding to the provided category ID.

### Parameters
- `categoryID` (number): The ID of the tutorial category. This ID determines which tutorial message is returned.

### Return Values
- Returns a string containing the tutorial message. If the provided `categoryID` does not match any known category, it returns "Categoria no encontrada".

### Exceptions
No specific exceptions are raised by this function itself, but it assumes that the category IDs and corresponding messages are correctly defined and imported.

## Usage Example
```javascript
import selectMessage from './pathToFile';

console.log(selectMessage(1)); // Outputs the message from tutorialCategory1
console.log(selectMessage(4)); // Outputs "Categoria no encontrada"
```

## Edge Cases and Assumptions
- Assumes that all input category IDs will be integers.
- The function handles an undefined or unexpected `categoryID` by returning a default message "Categoria no encontrada".
- Assumes that the tutorial messages are predefined and imported correctly from the specified path.

## References
- Tutorial messages are defined in `../TextToSpeech/tutorialsMessages`.
```
This documentation provides a clear and concise overview of the `selectMessage` function, including its usage, parameters, return values, and handling of edge cases.

