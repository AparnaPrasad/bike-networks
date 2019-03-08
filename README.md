# bike-networks
Uses citybik.es API end point to display list of bike networks

Displays list of all the netwoks grouped by country. The group by option can be changed to city wise grouping or both. On clicking on a bike network, 
it displays list of available stations and free bikes.

Setting up the project:
1. Clone the repository. git clone https://github.com/AparnaPrasad/bike-networks.git
2. npm i
3. npm start
4. to run tests: npm test

Use the latest version of Node. Tested with 10.

This project uses :
1. React/Redux for frontend
2. React-Bootstrap component library
3. Babel transpiler
4. Webpack module bundler
5. Es lint for linting
6. Jest + Enzyme for Unit testing

Possible Improvements:
1. Styling can be imporoved.
2. Need to fix linting errors.

If there are problems reaching API, uncomment line 40-48 and comment line 24-37 in src/Actions/bikes.js to get sample data for the  application
