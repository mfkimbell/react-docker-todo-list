This was built following resources from https://medium.com/codex/building-a-to-do-list-app-using-react-hooks-and-styled-component-7e413a16b91e.

The purpose of this project was to familarize myself with React properties and concepts such as Props, Funcitonal and Class Components, State, and JSX.


The application allows the user to input text and submit that text into an array that is displayed on screen:

![Screenshot 2023-02-23 at 2 32 44 PM](https://user-images.githubusercontent.com/107063397/221023485-8b1349ba-b641-4adf-b928-0481abfdc541.png)

![Screenshot 2023-02-23 at 2 33 27 PM](https://user-images.githubusercontent.com/107063397/221023638-e6143045-eba1-419a-a7f7-0c5b705d69a5.png)

The user can then either check the item as completed

![Screenshot 2023-02-23 at 2 33 38 PM](https://user-images.githubusercontent.com/107063397/221023687-d94829b4-2ed4-44b2-9e2c-20c99efeaf80.png)

Or, they can click the close button to delete the entry.

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

