# Drone Delivery Service

Prerequisites:
```
Node 
https://nodejs.org/en/download/
```

Installation:
```
$ npm install
```

To start script:
```
$ npm start
```

Abbreviated Start Script:
```
$ npm run s
```

To run tests:
```
$ npm test
```

To run tests with coverage:
```
$ npm run t
```

To build:
```
$ npm run build 
```

Abbreviated Build Script:
```
$ npm run b
```

### Usage
Navigate to the Drone Delivery Service page by clicking on the "Deliveries" link on the to Navbar.

### Design

There are several layers of abstraction and seperation of concerns implmemented in the application design.  React functional components are used throughout the project and logically seperated to increase maintanability. 

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

The main algorithm for processing the drone deliveries is found in the Backend module and it is called computeDroneSqaudDeliveries. This algorithm takes the drones and the locations as inputs, as well as the trip limit. The computation works such that the algorithm iterates over the given drones and locations from the input file. While iterating over the drones, it checks to see if the drone has already delivered to the given location. If it has not already delivered to the given location, it then checks to see if the drone still has capacity to deliver to that given location. If capacity is available, the drone adds that location and the location weight to the current trips that are scheduled. When the weight capacity has been reached for a given drone, the iterator tries to restock the drone from another trip, unless the number of trips has already exceeded the trip limit. This is to conserve power and limit trips that require more recharging/refueling.  The Validator is responsible for validating all inputs prior to computation. 