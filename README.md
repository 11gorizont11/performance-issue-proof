This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to reproduce the issue?

 - clone the repo and insall node_modules
 - `npm run server:inspect`
 - go to NODE dev tools
 - open profiler tab and start
 - create a load for app server just run into terminal `ab -k -c 20 -n 200 "http://localhost:3000/"`
 - stop profiling and dig in deep `getCachedId` function

