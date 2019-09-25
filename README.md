# Installing Application and Dependencies

- NPM -> run `npm install`, this will install the application along with all of its dependencies

- Yarn -> run `yarn install`, this will install the application along with all of its dependencies

## Setup

You will need to add a `config.js` file in the `src` directory, this will contain your API key for the Flickr API. Set up the file as such:

```
const apiKey = 'YOUR API KEY';
export default apiKey;
```

Make sure to add this file to your `.gitignore` file before uploading it to github or any other git hosting server.

I currently have my own logos set at the favicon and app logo's, you can change these to your own, keep the names the same or edit them in the `package.json` file

## Use Case

There are three searches preloaded by default and contained in the `data` directory with all of their respective JSON information. You can use this information to customize the application how you like.

- Beaches
- Parks
- Sunsets

The application uses Flickr's search API to gather image data from its database, you can customize this how you like. The application is already set up to do so, you will just need your own API key to do this.

App Garden link for queries -> https://www.flickr.com/services/api/explore/flickr.photos.search

Documentation about what query parameters mean -> https://www.flickr.com/services/api/flickr.photos.search.html


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
