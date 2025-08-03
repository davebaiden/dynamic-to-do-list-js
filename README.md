Form-Creation-Validation
This repository contains several small JavaScript projects that explore form creation, validation, and asynchronous data handling using the Fetch API. One of the featured projects fetches user data from a public API and displays it dynamically on a web page.

📌 Project: Fetch User Data
This mini-project demonstrates how to use JavaScript to asynchronously fetch and display user information from a public API.

🧠 Objective
Fetch user data from https://jsonplaceholder.typicode.com/users and display the names in a list within the web page.

📁 Project Structure
pgsql
Copy code
Form-Creation-Validation/
│
├── fetch-data.html      # HTML structure for displaying the user list
├── fetch-data.css       # Styles for the user list display
└── fetch-data.js        # JavaScript logic to fetch and render data
📜 How It Works
The JavaScript listens for the DOMContentLoaded event.

It calls an asynchronous function fetchUserData() that:

Sends a request to the API

Parses the response as JSON

Clears the loading message

Dynamically creates and appends a list (<ul>) of user names

If an error occurs, a message is shown: "Failed to load user data."

💻 Preview
Initial State:
Loading user data...

After Fetching:

John Doe

Ervin Howell

Clementine Bauch

... (up to 10 users)

🔧 Technologies Used
HTML5

CSS3

JavaScript (ES6+)

Fetch API

🚀 Getting Started
To try the project locally:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/Form-Creation-Validation.git
Open fetch-data.html in your browser:

bash
Copy code
cd Form-Creation-Validation
open fetch-data.html   # Or double-click the file
📌 API Reference
This project uses the JSONPlaceholder Users API, which returns an array of user objects.