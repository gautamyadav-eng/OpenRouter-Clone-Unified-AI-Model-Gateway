# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Writing





🖥️ Frontend Application
The frontend of OpenRouter Clone – Unified AI Model Gateway is built using React.js and Vite. It provides a modern, responsive, and user-friendly interface that allows users to explore the platform, authenticate their accounts, and interact with available AI models through the playground.
✨ Key Features
1. Home Page
- Hero Section: Introduces the platform and its core purpose.
- Features Section: Highlights the key capabilities of the AI gateway.
- Supported Models: Showcases the AI models supported by the platform.
- How It Works: Explains the basic workflow of the unified AI gateway.
- Developer Section: Provides an overview of the platform for developers.
- Call to Action: Directs users towards getting started with the platform.
2. Navigation
- Responsive navigation bar.
- Platform navigation links.
- Login and Sign Up options.
- Mobile-friendly navigation menu.
3. User Authentication
- User Registration: Allows new users to create an account.
- User Login: Provides account login functionality.
- Forgot Password: Initiates the password recovery process.
- OTP Verification: Verifies users through a 6-digit OTP.
- Password Reset: Allows users to create a new password after OTP verification.
4. AI Playground
- Interactive playground interface for AI model interaction.
- Dynamic model selection using the available models provided by the backend.
- Prompt input for submitting user queries.
- System instruction support for customizing AI responses.
- Integration with the chat API to process prompts.
- Display of AI-generated responses.
🛠️ Technology Stack
Technology	Purpose
React.js	Frontend UI development
Vite	Development and build tool
JavaScript	Application logic
Tailwind CSS	Responsive UI styling
React Router	Client-side routing
Axios	API communication
Lucide React	Icons📸 Frontend Screenshots
The following screenshots showcase the user interface and major functionalities of the frontend application.

Home Page

<!-- Add Home Page screenshot here -->

User Authentication

<!-- Add Login and Registration screenshots here -->

Password Recovery

<!-- Add Forgot Password, OTP Verification and Reset Password screenshots here -->

AI Playground

<!-- Add Playground screenshot here -->
⚙️ Run Frontend Locally
# Clone the repository
git clone https://github.com/gautamyadav-eng/OpenRouter-Clone-Unified-AI-Model-Gateway.git

# Navigate to frontend
cd OpenRouter-Clone-Unified-AI-Model-Gateway/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
Frontend development server:

http://localhost:5173