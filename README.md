# TicketFlow - React (Next.js) Implementation

This is the React version of the TicketFlow application, a multi-framework ticket management web app.

## Frameworks and Libraries

*   **Framework:** [Next.js](https://nextjs.org/) (A React framework)
*   **UI Components:** [Mantine](https://mantine.dev/)
*   **Icons:** [Tabler Icons](https://tabler-icons.io/), [React Icons](https://react-icons.github.io/react-icons/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Linting:** [ESLint](https://eslint.org/)
*   **Mock API:** [JSON Server](https://github.com/typicode/json-server)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/ticket-flow-react.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

You need to run two commands in separate terminals:

1.  **Start the mock API:**
    ```sh
    npm run json-server
    ```
    This will start a server on `http://localhost:3001`.

2.  **Start the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication

You can sign up with any email and password. The application uses `localStorage` for user and session management, so no real authentication is performed.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `.next` folder.
*   `npm run start`: Starts a Next.js production server.
*   `npm run lint`: Runs ESLint to find and fix problems in your code.
*   `npm run json-server`: Starts the mock JSON server.
