# Pokemon Database Project

This project is an example of how to use Express.js with TypeScript to create a simple web API that interfaces with a PostgreSQL database. The project uses Sequelize as the ORM. Docker is used to start the PostgreSQL database. The Express server exposes an endpoint to which you can send JSON data for a Pokemon and its properties, and it will store this data in the PostgreSQL database.

## Getting Started

Follow these steps to get the project up and running.

### Prerequisites

- Install [Docker](https://docs.docker.com/get-docker/) on your machine.
- Install [Node.js](https://nodejs.org/en/download/) on your machine.

### Starting the PostgreSQL Database

1. Navigate to the directory where the `docker-compose.yml` file is located.
2. Run the following command to start the PostgreSQL container:

    ```
    docker-compose up
    ```

### Starting the Express Server

1. Install dependencies by running:

    ```
    npm install
    ```

2. Start the server by running:

    ```
    npm start
    ```

The server will start on `http://localhost:3000`.

### Sending Data to the Server

Send a POST request to the `/pokemon` route with JSON data for a Pokemon and its properties. 

For example:

```json
{
    "name": "pikachu",
    "speed": 30,
    "electricity": 40
}