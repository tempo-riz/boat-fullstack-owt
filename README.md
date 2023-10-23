# boat-fullstack-owt

A simple app, where a user can get a quick overview over list of boats

# Technology Stack
- [React](https://github.com/facebook/create-react-app)
- [Java Spring Boot](https://spring.io/projects/spring-boot)

# Use Case

### UC1

- The user opens your app and gets a login screen. 
- He has to login. 
- After a successful login he is navigated to the overview page (UC2).

### UC2
- The user has a list of all boat resources

### UC3
- The user can add or update or delete boat

### UC4
- The user clicks on a boat item and gets a detail view over it.

# Backend
### CRUD endpoint for managing boats. 
A boat should have at least the following attributes and
appropriate validation:

- Name
- Description

### Security aspects. (optional)

Authentication / Authorization (only authenticated user can access to the resources )

# Usage

## Start the backend
.\gradlew.bat bootRun

## Start the frontend
npm start

