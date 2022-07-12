# Drone Delivery Service

### Prerequisites:

```
Node 
https://nodejs.org/en/download/
```

### Installation:

```
$ npm install
```

### Running the application

To start script:
```
$ npm start
```

Abbreviated Start Script:
```
$ npm run s
```

### Running Unit Tests:

To run tests:
```
$ npm test
```

To run tests with coverage:
```
$ npm run t
```

### Building the application for deployment:

To build:
```
$ npm run build 
```

Abbreviated Build Script:
```
$ npm run b
```
### Design
Architectually, this application was designed to use the latest React features, such as: useState, useEffect, reduce, map, and more. Modern conventions were used in the code for this project: async/await.

Drone Delivery Service is a React application. The project is organized by seperating the concerns of the visual components from the backend api components. The backend is a virtual backend that is within the project that simulates remote calls to an api. The backend layer consists of the following components: Backend.js, Endpoints.js, and Validator.js. The purpose of the backend structure is to simulate a remote api thats intent is to process the drone delivery algorithm. This was implemented such that the same method would be used to interact remote api endpoint. The Endpoints component is used to simulate the remote endpoint, abstracting away the acutal computation from the endpoint interface. The Backend component is responsible for the acutal computation of drone delivery algorithm. The Backend component is also responsible for ingesting the data from the data file that contains the drones and the locations data.  The data is abstracted from the backend component in the 001 data file within the data folder. The Validator is used to validate the inputs prior to computing the drone delivery data.

The visual components consist of the following React functions: DeliveryService.js, Drones.js, Drone.js, and the Header.js. DeliveryService is the top-level component in the visual structure. This higher order component performs the call to the virtual api to fetch the drone delivery data. There is a seperation of concern, that seperates the UI from the API. Rendering of the data is was accomplished using MUI - Material UI library. MUI Table was used to render the drone deliveries in expandable and collapsable rows. The data is structured so that the deliveries can be visualized in an expandable table. Nested MUI Tables are used to achieve this UX design.

Styling was implemented using CSS. Styling concerns were seperated in CSS files for the UI components. One component: Drone.js, demonstrates inline styling approach. 


Unit Tests were implemented using Jest, React-Testing-Library, and Jest-Dom.  Also, the @babel/preset-env module was used to allow async/await calls in the unit tests.


### Problem Description

A squad of drones have been tasked with delivering packages for a major online reseller in a world where time and distance do not matter.  Each drone can carry a specific weight, and can make multiple deliveries before returning to home base to pick up additional loads; however the goal is to make the fewest number of trips as each time the drone returns to home base it is extremely costly to refuel and reload the drone.

The purpose of the written software will be to accept input which will include the name of each drone and the maximum weight it can carry, along with a series of locations and the total weight needed to be delivered to that specific location.  The software should highlight the most efficient deliveries for each drone to make on each trip.

Assume that time and distance to each drop off location do not matter, and that size of each package is also irrelevant.  It is also assumed that the cost to refuel and restock each drone is a constant and does not vary between drones.  The maximum number of drones in a squad is 100, and there is no maximum number of deliveries which are required.

### Given Input
```
Line 1: [Drone #1 Name], [#1 Maximum Weight], [Drone #2 Name], [#2 Maximum Weight], etc.
Line 2: [Location #1 Name], [Location #1 Package Weight]
Line 3: [Location #2 Name], [Location #2 Package Weight]
Line 4: [Location #3 Name], [Location #3 Package Weight]
Etc.
```
### Expected Output
```
[Drone #1 Name]
Trip #1
[Location #2 Name], [Location #3 Name]
Trip #2
[Location #1 Name]

[Drone #2 Name]
Trip #1
[Location #4 Name], [Location #7 Name]
Trip #2
[Location #5 Name], [Location #6 Name]
```

### Additional Guidance
- All instructions are followed 
- Correct input/output  
- Good documentation 
- Separation of concerns 
- Input validation 
- Reasonably efficient 
- Good comments about why 
- At least a few good unit tests 


### Solution

The main algorithm for processing the drone deliveries is found in the Backend module and it is called computeDroneSqaudDeliveries. This algorithm takes the drones and the locations as inputs, as well as the trip limit. The Validator is responsible for validating all inputs prior to computation. The computation works such that the algorithm iterates over the given drones and locations from the input file. While iterating over the drones, it checks to see if the drone has already delivered to the given location. If it has not already delivered to the given location, it then checks to see if the drone still has capacity to deliver to that given location. If capacity is available, the drone adds that location and the location weight to the current trips that are scheduled. When the weight capacity has been reached for a given drone, the iterator tries to restock the drone from another trip, unless the number of trips has already exceeded the trip limit. This is to conserve power and limit trips that require more recharging/refueling. The algorithm takes all of the drones and applies the trips made by the drone into a resultset. The resultsets are normalized and combined into a final result that is returned by the compute function. 