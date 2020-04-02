author: Seth Lauer  
Tech Assessment for MobilizeAmerica  
April 1, 2020

This app is written in React

To run:

- Input your Google API Key in Map.js (not required, but it will throw an error if you do not. I can also provide a key)
- Navigate to the root of the project
- npm start
- App will open at localhost:3000

Design decisions:

1. Redux is used for state management across components. Navigation components (i.e. pagination) update the store to only include the events that are being viewed. This means that we need to make a call every time to the API to fetch the events. We may want to store events in Redux after they've been fetched to reduce the time it takes to load when navigating between pages (or at the least least, load the "next" and "prev" pages). This optimization is not necessary for now.
2. Bootstrap is used for styling and other presentation components. Bootstrap comes with more components and simple styling that makes it quick and easy to make this page look beautiful without needing to reinvent the wheel.
3. Google Map React is used for mapping the events. This is the most downloaded package on npm between google-map-react, google-maps, and google-maps-react and is easy to use for the purposes of marking a location on the map. Because the current locations are stored in React, it is easy to display them. For now, the locations are marked by their IDs and the map focuses on the first location, but further implementations could create markers which don't display internal IDs and/or make a calculation based on the distance between the events in the list to determine what level of zoom to use.
4. Simple testing is set-up for the Event component. With more time, other tests could check to see if the App behaves as expected for the various loading states, as well as ensuring the the Show map button works
5. The design of the event cards is very simple--some of the events don't have images that work, and other data received back from the API could be shown on an event-specific page, as many of the descriptions are very long.
