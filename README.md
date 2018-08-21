This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


Udacity React project solution by birozso.

The project uses the Google map API and Foursquare API.



## Folder Structure


```
reactnd-google-map/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
    szelmalom.gif
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
      Adata/
        API.js
        location.json
      components/
        FoursquareComponent.js
        InfoWindowComponent.js
        InfoWindoStyle.js
        MenuComponent.js
        MyMapComponent.js
        WindmillComponents.js
        WindmillStyle.js

```



## Dependencies

escape-string-regexp 
sort-by
prop-types
google-map-react
Foursquare venues API
All start up pictures are from Wikimedia.

In the project directory, you can run:

### Start the project: `npm start`

Go to the reactnd-google-map folder
Start npm typing: npm start
It will open a browser page in your opened browser window and navigate to 
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Installation of dependencies:

npm install --save escape-string-regexp sort-by
npm install --save google-map-react

## Accessibility:

Used accessibility improvement technics. Audit passed above 92% .
There are some option to improve the accessibility. For this demonstration
these were commented out. See remarks in CSS.

### Keyboard control

To hide the menu or clear search fields etc, just use the ESC button or simple click on anywhwere on the map.
The Hamburger menu button hide and display the menu by clicking.

## Use the App

To get more details about a windmill marker just click on

a marker on the map or
a choosen name on the menu list (after displayed it by clicking on Hamburger menu button)
Filter Windmills by name by using the input search field on the right upline.
To get info on the nearest hotel or restaurant, just click on the appeared infoWindow.


## Special thanx to 
MDN web docs (MediaQueryList)
google-map-react documentation and examples

