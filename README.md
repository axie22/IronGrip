# Iron Grip

IronGrip is a workout tracking application designed to help users record their exercises, monitor progress, and receive exercise suggestions. Built using React and React-Bootstrap, IronGrip provides a user-friendly interface for logging workouts and adding new exercises.

## Table of Contents

- [Iron Grip](#iron-grip)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
  - [API Integration](#api-integration)
  - [Acknowledgements](#acknowledgements)

## Features

- **Workout Logging**: Users can add and record their workouts with details such as exercise name, previous weight, and repetitions.
- **Dynamic Exercise Suggestions**: Integration with the wger API to provide exercise suggestions based on user input.
- **Responsive Design**: User interface designed to work seamlessly on different devices.
- **Exercise Management**: Add, edit, and delete exercises easily within the app.

## Usage

1. Adding a New Exercise:
   - Click the "Add Exercise" button.
   - Enter the exercise name in the modal that appears.
   - Receive exercise suggestions from the wger API as you type.
   - Select an exercise from the suggestions or enter a custom exercise.
   - Click "Add Exercise" to add it to your workout log.

2. Recording Workouts:
   - Each exercise card allows you to input weight and repetitions for each set.
   - Add or delete sets as needed within each exercise card.

3. Deleting an Exercise:
   - Click the "Delete" button on the exercise card to remove it from your workout log.

## API Integration

IronGrip integrates with the wger API for exercise suggestions. To use the API:

- Obtain an API Key from wger.
- Set the API Key in the request headers for exercise suggestions.

Example API request:

``` Javascript
axios.get(`https://wger.de/api/v2/exercise/search/?term=${query}`, {
  headers: {
    'Authorization': `Token YOUR_API_KEY`
  }
});
```

## Acknowledgements

- [WGER API](https://wger.de/en/software/api) for providing exercise data
- [React](https://react.dev/) and [React-Bootstrap](https://react-bootstrap.netlify.app/) for the UI framework
