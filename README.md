# react-docker-todo-list

The purpose of this project was to familarize myself with React properties and concepts such as Props, Funcitonal and Class Components, State, and JSX as well as learn about containerization with Docker, specifically containerization of React apps. 

**Tools Used:**

The application allows the user to input text and submit that text into an array that is displayed on screen:
* `react` for rendering jsx elements
*  `material ui` for desinging css components
* `.yml` for storing configuration data for docker
* `docker` for containerizing the project
* `npm` as a package manager

The application allows the user to input text and submit that text into an array that is displayed on screen, or they can click the close button to delete the entry.

<img width="1078" alt="Screenshot 2023-07-02 at 2 47 17 PM" src="https://github.com/mfkimbell/react-docker-todo-list/assets/107063397/88b65a30-9c9b-4d76-91db-0af8193f941c">

<img width="1027" alt="Screenshot 2023-07-02 at 2 47 32 PM" src="https://github.com/mfkimbell/react-docker-todo-list/assets/107063397/e97e7925-3180-4ba7-ac9f-9234f4ef6585">

<img width="1057" alt="Screenshot 2023-07-02 at 2 47 44 PM" src="https://github.com/mfkimbell/react-docker-todo-list/assets/107063397/e66a8a90-3493-4be7-b889-2f802402a4bd">

<img width="1015" alt="Screenshot 2023-07-02 at 2 47 51 PM" src="https://github.com/mfkimbell/react-docker-todo-list/assets/107063397/483b7902-3a3b-487e-be54-5a2d8b16ae08">


The Todo component has two functions that handle different events for the acutal displayed list of tasks. Checking a task as complete and deleting a task.

![Screenshot 2023-02-23 at 2 36 46 PM](https://user-images.githubusercontent.com/107063397/221024354-3bb8e357-7f0c-4522-871a-5199602ccc96.png)

The TodoForm component handles the addition of tasks into the array of tasks. 

![Screenshot 2023-02-23 at 2 43 37 PM](https://user-images.githubusercontent.com/107063397/221025774-e2b29ef8-33bd-4794-913c-10a798a32251.png)

The TodoList Component adds attributes for each entry in the task array. It stores the value, id, completed state, and removed state.

![Screenshot 2023-02-23 at 2 45 02 PM](https://user-images.githubusercontent.com/107063397/221026058-c95a6f1a-d2c9-4c69-ba58-d1bf002733ba.png)

In App.js, we import all of the components needed to update our display. The useEffect() function allows us to store information in local storage so that when the page is refreshed, the tasks array does not reset to empty.

<img width="821" alt="Screenshot 2023-02-23 at 2 49 11 PM" src="https://user-images.githubusercontent.com/107063397/221026953-2bbe9715-c8a3-4b92-85ba-19e801e14658.png">

App.js implements the functionality of the functions called by the components. addtodo() adds a task to the array. toggleComplete() changes the state to either true or false depending on what it was previously. removeTodo() removes a task from the array by searching for a matching id. The final return passes the JSX elements to update the page. Because React is being used, a Virtual DOM is created, and when changes are made, it is compared against the actual DOM and only the changed elements are updated. 

<img width="753" alt="Screenshot 2023-02-23 at 2 52 02 PM" src="https://user-images.githubusercontent.com/107063397/221027495-dc4954e9-4e3b-438c-8bb0-9b33f20494fd.png">

CSS was taken from @material-ui.

