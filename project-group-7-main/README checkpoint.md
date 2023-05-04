[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10783008&assignment_repo_type=AssignmentRepo)
**Report**
Our codebase is provided by Michelle and her INFO340 team. This is a React app. The website is about endangered animals. The aim of this project is to spread awareness of animals that are endangered. Pulling data from various sources we have prepared graphs that will give people answers to what is going with these animals.

**P1 checkpoint #2: structure diagrams**

UML Class Diagram

<img
  src="images/UML-Class-Diagram.jpg"
  alt="Alt text"
  title="UML Class Diagram"
  style="display: inline-block; margin: 0 auto; max-width: 500px">

UML Sequence Diagram

<img
  src="images/uml sequence diagram.jpg"
  alt="Alt text"
  title="UML sequence Diagram"
  style="display: inline-block; margin: 0 auto; max-width: 500px">

**P3 checkpoint #3: Automated Tests**
This Jest test suite is created for a React Search component. The suite comprises tests for three major functions: hitting the 'Go!' button, picking an item from the drop-down menu, and checking the 'Data Type' checkbox.
The first test series determines if the 'Go!' button is visible on the screen and whether it invokes the 'applyFilterCallback' method with the appropriate parameters. The second set of tests verifies that the drop-down menu is shown correctly and that it displays no choices when the passed array is empty. The last set of tests determines if the 'Data Type' checkbox is unchecked by default and whether clicking it affects the 'applyFilterCallback' function.
All tests use the '@testing-library/react' library to render the Search component. Interact with the Search component using user events like 'click' and 'change,' to see if the anticipated results have been returned. Jest has assertions for determining if the predicted output of functions corresponds to the actual output.
These tests are designed to ensure that the Search component renders the necessary UI components, that user interactions function as anticipated, and that state changes caused by these interactions are handled effectively. The tests assist developers in detecting and correcting errors before release, resulting in higher-quality software with fewer defects.
<img
  src="images/test.jpg"
  alt="Alt text"
  title="test"
  style="display: inline-block; margin: 0 auto; max-width: 500px">
