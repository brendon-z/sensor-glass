# sensor-glass
A web-app utility for comparing camera sensor formats with focal length conversions and more

# Roadmap
* Basic backend functionality
  * Sensor database (JSON listing)
* Comparison features
  * Focal length conversions
  * Aperture comparison
* Basic frontend set up
  * Express server to host frontend
* Complex UI features
  * Probably using React
  * Visualisation of sensor sizing and focal length comparison

## Structure
`sensor-glass` uses an Typescript backend which runs an Express server which routes various function calls of the API to the frontend, powered by React.

### HTTP request routing
There are 3 files of concern here: `router.ts`, `routes.ts` and `server.ts`.

`server.ts` initialises the Express server and this is where any loading of persistence data will occur. 

`router.ts` performs the routing of HTTP requests from the frontend to the backend. It references the actual route functions defined in `routes.ts` and calls them to perform the relevant HTTP request action. `routes.ts` holds the actual route logic, which involves calling the backend API as necessary.
