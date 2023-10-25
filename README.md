# boat-fullstack-owt

A web application that enables users to efficiently manage and track boat records, allowing for the creation, retrieval, updating, and deletion of boat information.


# Technology Stack
- Frontend: [React](https://github.com/facebook/create-react-app) with [Material UI](https://material-ui.com/)
- Backend: [Java Spring Boot](https://spring.io/projects/spring-boot) with [H2 Database](https://www.h2database.com/html/main.html)

# Frontend - Use Cases

- The user has a list of all boat resources
- The user can add or update or delete boat
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
