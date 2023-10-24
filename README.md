# boat-fullstack-owt

A web application that enables users to efficiently manage and track boat records, allowing for the creation, retrieval, updating, and deletion of boat information.


# Technology Stack
- Frontend: [React](https://github.com/facebook/create-react-app) with [Material UI](https://material-ui.com/)
- Backend: [Java Spring Boot](https://spring.io/projects/spring-boot) with [H2 Database](https://www.h2database.com/html/main.html)

# Frontend - Use Cases

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

# Backend - CRUD Endpoints

- **GET /boats**: Retrieve a list of all boats.
- **GET /boats/{id}**: Retrieve a specific boat by ID.
- **POST /boats**: Create a new boat.
  - **Request Body**: JSON representation of the Boat object to be created.
- **PUT /boats/{id}**: Update an existing boat.
  - **Request Body**: JSON representation of the Boat object with updated information.
- **DELETE /boats/{id}**: Delete a boat.

## Data Model

- `id` (Long, auto-generated): Unique identifier for the boat.
- `name` (String): The name of the boat.
- `description` (String): The description of the boat.

## Response Codes

- 200 OK: Successful request.
- 201 Created: Boat created.
- 204 No Content: Boat deleted.
- 400 Bad Request: Invalid request data.
- 404 Not Found: Boat not found.


### Security aspects. (optional- todo)

Authentication / Authorization (only authenticated user can access to the resources )