<h1 align="center">Welcome to Indoor Plants Water Tacking App 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

## Table of contents

- [General info](#general-info)
- [Install](#Install)
- [Technologies](#technologies)
- [Code Overview](#Code-Overview)
- [Deployment](#Deployment)
- [Beck-end Server Route Sequence Diagram](#Beck-end-Server-Route)

##General info

<h5>
This is a water traking app for indoor house plants. User able to seach the plants by the plants name or by picture of suggesting plants. Once the user found their plant, the app will allow user to add it into their collection of plants.
</h5>

## Install

Start by installing front and backend dependencies. While in this directory, run the following command:

```sh
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on http://localhost:3000. The Express server should intercept any AJAX requests from the client.

```sh
npm run start
```

## Technologies

Project is created with:

- [JavaScript](https://www.javascript.com/)
- Mongodb
- [Express.js](https://expressjs.com/)
- React.js
- [Node.js](https://nodejs.org/)
- [moment.js](https://momentjs.com/)

## Code Overview

### Summary

####React Router Pass props to Component

When user click on the card Discovery Main page, the a link href address match the APP.js route and pass along the props to DisvoceryListItemsPage

```
<Card as="a" href="/easy-to-grow"
style={{ margin: "auto" }}>
```

On APP.js

```
<Route exact path={"/easy-to-grow"}
component={() => <DiscoverListItemsPage category={"easy-to-grow"} />} />
```

On DiscoverListItemsPages pass the props category, DiscoverListItemsPages make api call to server and setState for plants data

```
getPlants = () => {
API.getPlants(this.props.category)
.then(res =>
this.setState({
plants: res.data
})
)
.catch(err => console.log(err));
};
```

Pass the plants data to ListItems Component

```
 <ListItems
 key={plant._id}
 commonName={plant.commonName}
 scientificName={plant.scientificName}
 images={plant.image}
 description={plant.description}
 title={plant.title}
 id={plant._id} />

```

####React Router Pass Param to Component

On APP.js set path to "/:plantName" for any variable that match the route and render DetailPlant component

```
<Route path={"/:plantName"} component={DetailPlant} />
```

On listItems component button add a link path with the plant id, when user click on the button, it pass the prop.id to APP.js and render the DetailPlant page

```
<Button>
<Link className="text-white" to={"/" + props.id}>
 See detail
</Link>
```

On PlantDetail page, we access the "/:plantName" props.id by this.props.match.params.plantName

```
  getPlantsbyID = () => {
    API.getPlantsbyID(this.props.match.params.plantName)
      .then(res => {
        // res.data is an array of plants
        // this should only have 1 plant because we are
        // querying by name
        if (res.data.length > 0) {
          // only get the first plant and keep it
          this.setState({
            plant: res.data[0]
          });
        }
        console.log(this.state.plant);
      })
      .catch(err => console.log(err));
```

## Deployment

### 🏠 [Homepage](https://indoor-plants.herokuapp.com/)

## Author

- Github: [@elvykiung](https://github.com/elvykiung), [@Jing](https://github.com/redbubble-ash), [@Viktoryia](https://github.com/Victoriaspurlieu), [@karmitage](https://github.com/karmitage)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

```

```
