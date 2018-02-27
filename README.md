# TodoMVC (REACT)

> To do application built using React.

## Resources

- [Website](https://to-do-mvc.herokuapp.com/)

### Articles

- [Adding Preprocessor to Create React App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

## Implementation

The app was created using React and SCSS.  The src folder contains all of the source code. The styles were written in scss and broken down into css. The index.html was placed into the public folder because that's where react scripts expects it to be (This can be changed but becomes an issue if using create react app heroku buildback.)

The layout is as follows

### src
#### components (contains all the views)
* AppView.js
* InputBarView.js
* ListItemView.js
* ListView.js
* TitleBarView.js

#### containers (contains component logic)
* App.js (contains todo item state)
* InputBar.js
* ListItem.js
* ToDoList.js

#### styles
* App.css
* InputBarView.css
* InputBarView.scss
* ListView.css
* ListView.scss
* Style.css
* Style.scss (variable configuration)
* TitleBar.css
* TitleBar.scss

#### tests
* this is where future tests would go

#### utils
* localStorage.js
* registerServiceWorker.js

#### index.js (where react scripts looks for dom render)

## Features

Lots of extra functionality was added from the commented out parts in the readme.

Full list is as follows:

* When no to dos, to do list container is hidden.
* To dos can be added to list with input at top of app
* Mark complete by clicking checkbox that shows on hover (completed items have a slight green background color)
* Remove item by clicking X button that shows on hover
* Edit list item in place by double clicking on item name
* Item counter at bottom of container
* Clear completed items at bottom of container when completed items are present
* Mark all complete at bottom of container
* Local storage persistence
* Routing (/, /active, /completed)

## Dev Steps
* clone down repo
* cd into repo
* npm install
* npm start
## Credit

Created by [Dylan Scheitdt](https://dylansgrandportfolio.herokuapp.com/)
