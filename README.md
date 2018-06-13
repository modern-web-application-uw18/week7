# JScript300-Capstone
Capstone Project for UW JScript 300 for Cliff Johnson

### Title of Project
-------
# *MFP Recipe Assistant*

### Elevator Pitch
-------
If you are a macro counter, you know all too well that one of the most confusing parts of using MyFitnessPal is the receipe section. This simple and easy tool makes it easy to search and find ingredients for your recipe and completes the calculations for you so you can easily add them into MyFitnessPal. 

***simple, fast, straight to the point.***

### An Important Note
------
This project is actually taking an existing tool my wife built for her business (fitness and nutritional consulting) that is currently in Excel and enhancing it and making it web-based. Sadly and unfortunately the dependencies do require paid subscriptions so this will likely never be an actual viable tool to use for the business. 

### Wireframes
------
The application will consist of three main pages

1. Login Page
[https://drive.google.com/open?id=1oyyu-FtUHhKDgT-KcvhmWXxYyymu-mFL]

2. My Recipes
[https://drive.google.com/open?id=1zwyH_2JKiR5BZQidbizT6_FRbjC2MqiK]

3. New Recipe
[https://drive.google.com/file/d/1zexE-4VRSJxQZwnEtbXrpxWVDeGbq-uj/view?usp=sharing]

### Project Dependencies
CSS/Styling
- react-grid-system
- Atlaskit by Atlassian

API for Retrieving Ingredients
- Edamam https://developer.edamam.com/food-database-api 

Database and User Auth
- Firebase

**Note-** Firebase is a feature that would be nice to have. Additionally, for the pages, My Recipes is a desired feature but not necessary for the overall scope of this project. A page that simply is able to make and return the API calls for the ingredients and compute the values would be fine for a first run. 

### Tasks for Completion
1. Bootstrap create-react-app
2. Deploy application
3. Template NewRecipe component with static data to develop overall design and configuration
4. Create functions to handle calculations for NewRecipe component using manual input data for each table element and total calculations. 
** This satisfies minimum requirements for application. **
5. Setup API fetch call to retrieve JSON from Edamam API search
6. Enhance API fetch call to retrieve autosuggestions based on input as typed (i.e. user enters 7 characters, perform call to return list of possibilities given input)
7. If step 5 is successful, work on transitioning API call to microservice
8. If step 6 is successful, deploy microservice
9. Refractor application to use microservice deployed in step 7
10. Implement firebase Google oAuth to login user via Login Page component
11. Implement firebase DB to store New Recipes component
12. Utilize firebase to retrieve stored recipes and display in My Recipes component

### Plan for Completion
##### Week 1
Steps 1-4

##### Week 2 
If steps 1-4 completed successfully, work on as much of steps 5-12 as possible