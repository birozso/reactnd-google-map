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

## Run in Production Mode
Install Phython ( Py > 3.x).
Download the repository to your local machine.<br>
Open a terminal and navigate to project folder
Run in the console:
`npm run build`
<br>Navigate to the build directory
Run Phython localhost server:
`python -m http.server 8080`
<br>Navigate in your browser to [http://localhost:8000](http://localhost:8000)
<br>Start using the application.

## Accessibility:

Used accessibility improvement technics. Audit passed above 92% .
There are some option to improve the accessibility. For this demonstration
these were commented out. See remarks in CSS.

### Keyboard control

To hide the menu or clear search fields etc, just use the ESC button or simple click on anywhwere on the map.
The Hamburger menu button hide and display the menu by clicking.

### Service Worker
The application uses Service Worker feature, that means in case of weak or no internet access, it uses the cache area of the browser to load the data. *Some browser do not support this feature*

## Use the App

To get more details about a windmill marker just click on

a marker on the map or
a choosen name on the menu list (after displayed it by clicking on Hamburger menu button).<br>
Filter Windmills by name by using the input search field on the right upline.
To get info on the nearest hotel or restaurant, just click on the appeared infoWindow.

## Checking Google Map API Errors in Your Browser

The Maps JavaScript API writes error messages to window.console. This section explains how you can check the window.console output in Google Chrome. If you are using any other browsers, please check the developer documentation for your browser. For your reference, this is a list of tools to check window.console output in some other browsers.

Console for Internet Explorer.
Web Console for Firefox.
Remote debugging for Android.
Web Inspector for iOS.
In Chrome, you can use the JavaScript Console to check window.console output as follows.

To open the Developer Tools, select the menu icon > More Tools > Developer Tools.
To open the JavaScript Console, press the ESC key on your keyboard. The ESC key will toggle the JavaScript Console. If you close the console, press the ESC key again to open it.
If any errors or warnings occurred when loading the Maps JavaScript API, they appear as one or more lines in the console. An error or warning message has the following format:

Google Maps API error: ```[ERROR CODE] [Link to API document]``` 
<br> or <br>
Google Maps API warning: ```[ERROR CODE] [Link to API document]```


## Special thanx to 
MDN web docs (MediaQueryList)<br>
google-map-react documentation and examples

