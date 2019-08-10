# indoorplants

# overviews

This is a water traking app for indoor house plants. User able to seach the plants by the plants name or by picture of suggesting plants. Once the user found their plant, the app will allow user to add it into their collection of plants.

- Each plants will have info of the plants, desciption, care tips, propegation tips, vedio and gallary of the plants.
- User able to add specific info about the plants such as price they brought, where they brought, picture of the plant, side of the pots and the plant, location facing in the house.
- Once the plant added, the app will suggest when to water the plant, sent notification when it time to water
- User able to alter the seggestion when to water, set a base line to more accurate perdition

The project eventualy will suggest user using soil moister meter to check if the plants need to water or not. collect data from user to build machine learning app that able to accurately perdict when to water the plants

# Thecnology use

- React.js
- Mongodb
-

# challenge for the app

- cross referance data( most of the plants have server different name, diffrent site have diffrent care tips)
- water perdiction since it is very depend on the user location, house condition, plants size and soil type etc.
  -mobile first design

# Deployment

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
