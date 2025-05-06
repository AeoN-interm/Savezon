# Web3 E-Commerce App //savezon

This is a simple e-commerce web application built with React, TypeScript, Tailwind CSS, and integrated with Web3 (MetaMask + Ethereum via ethers.js) for payment functionality. The app supports product listings, sorting by category, wishlist management, and blockchain-based ETH payments.

## Features

- 🛍️ Browse products with a clean, responsive UI
- 🔍 Sort products by category
- ❤️ Add or remove items from a wishlist
- 🧺 Add products to the cart
- 🧾 View cart total and initiate payment
- 🌐 Web3 integration for making payments in Ethereum
- 🔐 Wallet connect (MetaMask)
- 💸 ETH payment to a specified address (via ethers.js)

## Tech Stack

- **React.js** – UI framework
- **TypeScript** – Static typing
- **Tailwind CSS** – Utility-first styling
- **ShadCN UI** – Prebuilt React UI components
- **React Query** – Data fetching and caching
- **ethers.js** – Web3 Ethereum wallet interaction
- **MetaMask** – For wallet connection and transaction signing
- **Hardhat** – Local blockchain environment (for testing if needed)

## Web3 Feature

The app's Web3 features allow users to interact with the Ethereum blockchain for making payments:

1. **Connect to MetaMask**: Users can connect their MetaMask wallet to the app. The app detects whether MetaMask is installed and requests account access.
2. **Make Payment**: The `makePayment` function utilizes `ethers.js` to process Ethereum transactions. Users can send ETH to a specified address, and the app handles converting the price to Wei (the smallest unit of Ether).
3. **Error Handling**: The app provides clear feedback on any errors (e.g., insufficient funds or transaction cancellation by the user).

## File Structure

Here’s the structure of the project directory:
/shopping-app
│
├── /src
│ ├── /components # All React components (Navbar, ProductCard, Wishlist, etc.)
│ ├── /pages # Page-level components (Home, Cart, Wishlist)
│ ├── /types # TypeScript type definitions
│ ├── /lib # Utility functions and helpers
│ ├── /styles # Tailwind/global CSS (if any)
│ ├── App.tsx # Main app component
│ ├── main.tsx # ReactDOM entry
│ ├── PaymentButton.tsx # MetaMask ETH payment logic
│ └── api.ts # (optional) local API setup
│
├── proxyServer.js # Optional backend proxy or stub
├── package.json
├── tsconfig.json
└── README.md


## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Additional Commands

To run the application and perform specific blockchain-related operations, you can use the following commands:

- **Start the Proxy Server**:  
  If you're running a proxy server to interact with a blockchain or other external services, run the following command:
  ```bash
  node proxyServer.js
**Generate MetaMask Wallet Keys:**
To generate wallet keys for MetaMask, run the following command:
--npx hardhat node
**Start the React Development Server:**
BASH- npm run dev

**To Learn More**

## React Docs https://react.dev/ 

## Tailwind CSS https://tailwindcss.com/

## ethers.js Docs https://docs.ethers.org/v6/

## MetaMask https://metamask.io/

## Create React App https://create-react-app.dev/

## Hardhat https://hardhat.org/
## Connect with Me

## You can check out my profile and projects on [GitHub](https://github.com/AeoN-interm).


This `README.md` includes the complete structure, descriptions of the technologies used, the available scripts for starting the app, and the necessary commands to interact with the Ethereum blockchain. It also includes the additional features and setup for the Web3 payment functionality.

Let me know if you need any further adjustments!
