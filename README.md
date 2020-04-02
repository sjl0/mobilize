author: Seth Lauer  
Tech Assessment for MobilizeAmerica  
01-04-2020

This app is written in React

To run:

- Input your Google API Key in Map.js (not required, but it will throw an error if you do not. I can also provide a key)
- Navigate to the root of the project
- npm start
- App will open at localhost:3000

Design decisions:

1. Redux is used for state management across components. Navigation components (i.e. pagination) update the store to only include the events that are being viewed. While this means that we need to make a call every time to the API to fetch the events, we aren't storing unnecessary information
2. Bootstrap is used for styling and other presentation components. Bootstrap comes with more components and simple styling that makes it quick and easy to make this page look beautiful without needing to reinvent the wheel.
3. Google Map React is used for mapping the events. This is the most downloaded package on npm between google-map-react, google-maps, and google-maps-react and is easy to use for the purposes of marking a location on the map. The map itself hold a single event. Users will likely only need a map if they've already decided to attend an event, or if they are deciding between a couple events to attend. Therefore, for this project it is not necessary to implement a map with multiple locations on it, but this project could be easily extended if needed.
