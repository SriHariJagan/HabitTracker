# HabitTracker


## Description
This is a full-stack habit tracker application built using Node.js and EJS. It allows users to define habits and track them on a daily basis. Users can mark habits as done, not done, or none for each day. The application provides views to display all current habits, as well as a detailed view showing the status of each habit for the past 7 days.

## Features
- Add multiple habits to track
- Track each habit daily with statuses: Done, Not Done, None
- View to show all current habits with an option to add new habits
- Detailed view displaying 7 days of each habit, allowing users to mark today's status and change statuses for previous days
- Data storage in a database

  ## Installation
  1. git clone:
     - https://github.com/SriHariJagan/HabitTracker.git
  2. Navigate to the project directory:
     - cd habit-tracker
  3. Install dependencies:
     - npm install
  4. Start the server:
     - npm start
  5. Access the application:
     - Visit http://localhost:8000 in your browser.

  ## Usage
  - Create new habits by clicking on the "Add Habit" button in the main view.
  - Track the status of each habit daily by navigating to the weekly view.
  - In the weekly view, mark today's status and change statuses for previous days as needed.

  ## Technologies Used
    - Node.js
    - Express.js
    - EJS (Embedded JavaScript)
    - MongoDB

  ## Directory Structure

          │   app.js
          │   package-lock.json
          │   package.json
          │
          ├───assets/
          │   └───css/
          │           home.css
          │           welcom.css
          │
          ├───config/
          │       mongoose.js
          │       passport-local.js
          │
          ├───controllers/
          │       index.js
          │       user.js
          │
          ├───models/
          │       HabitSchema.js
          │       userSchema.js
          │
          ├───routes/
          │       index.js
          │       user.js
          │
          └───views/
                  homePage.ejs
                  layout.ejs
                  signinPage.ejs
                  signupPage.ejs
                  welcomePage.ejs

## Live Demo:
  - https://habittracker-7sbl.onrender.com

![image](https://github.com/SriHariJagan/HabitTracker/assets/100404902/09006c98-74cc-4c9c-bbdf-ebb3419fe061)


  
 
    




