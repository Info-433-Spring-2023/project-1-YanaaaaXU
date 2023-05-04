**Code Structure Analysis**

The purpose of our React website is to provide statistical information that helps audiences understand extinct animals and raise awareness to protect them. There are three functions of the website: an interactive dashboard, mini flashcard games, and personal impact quizzes. In addition to three functions, there is an About page that introduces our teammates and the purpose of the project. All of our components were built based on these three functionality of the website.

- **Interactive Dashboard:** This component displays statistical information about extinct animals based on the user’s selection and filter.

- **Mini Flashcard Game:** This component would randomly present an animal card with the number of animal species left. It is built using react components handleClick, card, and props.

- **Personal Impact Quiz:** This component presents a list of multiple choice questions for users to select. It tests users' general habits and how these habits can impact the planet. The component imports two libraries: React and Firebase and functions like “getDatabase”, “ref”, “set”, “onValue”, and “push”, to get access to the database.

- **About page:** This component would introduce the purpose of the project and our mission and a short description of each member. It consists AboutCards.js, with team member’s names and images, and a react library.

In addition to these components, there are other components that work as a part of the website, such as Footer, Header, and Introduction. Additionally, JSON files are used to pass data into the database and modules.

**Relationships/dependencies**

App.js is the root component that serves as the foundation for the entire React application, and all other components are connected.

The HomePage component imports the following components to create a comprehensive landing page:

- Counter component, which further imports:
  -  InfoCards component for a collection of statistics
- Search component for filtering and finding specific endangered species
- Intro component introduces the goal of the website and guides users to take actions
- Counts display a visual representation of the endangered species data


Other components are directly connected to App.js, each serving a specific purpose within the application:
- Header component for displaying the application's title and navigation menu
- MiniGame component for engaging users with interactive games related to endangered species
- PersonalImpact component to educate users on how their actions can affect endangered species
- KnowledgeQuiz component for testing users' knowledge of endangered species and conservation efforts
- Footer component to display additional information


The About component is also connected to App.js and imports the following child components to present more information about the project and the team behind it:

- AboutCards component for displaying details about the project's mission and goals
- Team component to showcase the team members and their roles in the project

UML Class Diagram

<img
  src="./images/UML-Class-Diagram.jpg"
  alt="Alt text"
  title="UML Class Diagram"
  style="display: inline-block; margin: 0 auto; max-width: 500px">

UML Sequence Diagram

<img
  src="./images/uml sequence diagram.jpg"
  alt="Alt text"
  title="UML sequence Diagram"
  style="display: inline-block; margin: 0 auto; max-width: 500px">

**Code's process flows**

The process flows of our React-based website involve a series of interconnected components working together to provide users with an educational and interactive user experience. The main process flows include rendering the HomePage, interacting with the Dashboard, playing the Mini Flashcard Game, taking the Personal Impact Quiz, and visiting the About Page.

**Rendering the HomePage:**
a. App.js serves as the root component and renders the HomePage component.

b. HomePage calles and displays the Counter, Search, Intro, and Counts components.

c. The Counter component further imports and displays InfoCard and InfoCards components.

d. The Header and Footer components are rendered on every page.

**Interacting with the Dashboard:**

a. Users can filter endangered species data using the Search component.

b. The Search component updates the state of the selected country, species, and data type.

c. Once the filter is applied, the Counter component updates the displayed InfoCard and InfoCards components based on user selections.

**Playing the Mini Flashcard Game:**

a. Users access the MiniGame component from the navigation menu.

b. The game presents animal cards with the number of remaining species.

c. Users interact with the game by clicking on cards, which triggers the handleClick event.

**Taking the Personal Impact Quiz:**

a. Users access the PersonalImpact component from the navigation menu.

b. The quiz presents multiple-choice questions related to the user's habits and their potential impact on the environment.

c. Users submit their answers, which are stored in the Firebase database using functions like "getDatabase", "ref", "set", "onValue", and "push".

**Visiting the About Page:**

a. Users access the About component from the navigation menu.

b. The About component imports and displays the AboutCards and Team components.

c. AboutCards provides information about the project's mission and goals, while the Team component showcases individual team members and their roles.

Throughout this process flows, the website maintains a consistent look and feels by rendering the Header and Footer components on every page. The seamless integration of these components ensures an intuitive and engaging user experience while navigating through different sections of the website.
