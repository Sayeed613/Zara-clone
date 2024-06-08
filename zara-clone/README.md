## Zara Clone Project

This project is a clone of an e-commerce platform with basic functionalities including user authentication, product listing, and shopping bag management. It is built using React, Chakra UI, and React Router.


## Table of Contents

    Getting Started
    Project Structure
    Dependencies
    Running the Project
    Features
    Contributing
    License

## Getting Started

  These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Prerequisites
  Node.js (v14 or later)
  npm (v6 or later)


## Installation

  1. Clone the repository:
  # git clone https://github.com/yourusername/my-clone-page.git

  2. Navigate to the project directory
  # cd my-clone-page

  3. Install the dependencies:

  4. run the server
      json-server --watch db.json

# npm install
    Project Structure
    Zara-clone/
    ├── public/
    │ ├── index.html
    │ └── ...
    ├── src/
    │ ├── components/
    │ │ ├── AllRoutes.jsx
    │ │ ├── Footer.jsx
    │ │ ├── Navbar.jsx
    │ │ └── ...
    │ ├── context/
    │ │ ├── AuthContextProvider.jsx
    │ │ ├── ShoppingBagContext.jsx
    │ │ └── ...
    │ ├── pages/
    │ │ ├── Home.jsx
    │ │ ├── Help.jsx
    │ │ ├── Login.jsx
    │ │ ├── SignIn.jsx
    │ │ ├── Products.jsx
    │ │ ├── ProductsDetails.jsx
    │ │ └── ShoppingBag.jsx
    │ ├── App.jsx
    │ ├── index.jsx
    │ └── ...
    ├── .gitignore
    ├── package.json
    └── README.md

  # Dependencies

    React
    Chakra UI
    React Router
    Axios
    Vite

  # Running the Project
    Start the development server:
    npm run dev
    Open your browser and navigate to http://localhost:3000.

# User Authentication:
 Users can register, log in, and log out. Authentication details are managed using context.

# Product Listing:
  Products are displayed with details such as name, image, price, and size.
# Shopping Bag:
  Users can add items to their shopping bag. The shopping bag state is managed using context and reducer.
# Protected Routes:
  Certain routes are protected and accessible only to logged-in users.
