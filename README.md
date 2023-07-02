# react-docker-todo-list

The purpose of this project was to familarize myself with React properties and concepts such as Props, Funcitonal and Class Components, State, and JSX as well as learn about containerization with Docker, specifically containerization of React apps. 

**Tools Used:**

* `react` for rendering jsx elements
*  `material ui` for desinging css components
* `.yml` for storing configuration data for docker
* `docker` for containerizing the project
* `npm` as a package manager



The application allows the user to input text and submit that text into an array that is displayed on screen, or they can click the close button to delete the entry.

<img width="500" alt="Screenshot 2023-07-02 at 2 47 17 PM" src="https://github.com/mfkimbell/todo-list-graphical-interface/assets/107063397/da53a6ca-5454-44e5-b1a7-b44d758530d6">

<img width="500" alt="Screenshot 2023-07-02 at 2 47 32 PM" src="https://github.com/mfkimbell/todo-list-graphical-interface/assets/107063397/6598ada7-0290-4bb1-8f61-c78f72bf58c1">

<img width="500" height="380"  alt="Screenshot 2023-07-02 at 2 47 44 PM" src="https://github.com/mfkimbell/todo-list-graphical-interface/assets/107063397/355d5456-1139-48a3-a1a7-598d24aed875">

<img width="500" alt="Screenshot 2023-07-02 at 2 47 51 PM" src="https://github.com/mfkimbell/todo-list-graphical-interface/assets/107063397/6b08305d-3357-40d3-964f-46542eed1e21">

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

