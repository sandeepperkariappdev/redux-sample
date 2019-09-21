1. Open your VS Code, open a folder where you want your project
--------------------------------------
--------------------------------------
2. Create a new app using Create-react-app redux-sample
--------------------------------------
--------------------------------------
3. Run the app using yarn start, check your browser if the app runs
--------------------------------------
--------------------------------------
4. Go to src/App.js file, replace the code inside <header></header>, with "hello" text. Make sure the app loads. 
--------------------------------------
--------------------------------------
5. Now lets add redux to our app, run the commands yarn add redux react-redux redux-saga redux-logger 
--------------------------------------
--------------------------------------
6. Goto src/App.js file, lets change the existing functional component to class component. (Before proceding further learn the diff between functional and class components and hwy do we use class components in place of functional components)
https://github.com/sandeepperkariappdev/redux-sample/commit/a8f10abe80321bf2d5f6aaa8c0394c8a7fcb49e3

--------------------------------------
--------------------------------------
7. Goto src/App.js file, Now lets create a login Component, Add Input fields username, password and a login button. lets add ant-desing to design the screens. 
--------------------------------------
--------------------------------------
8. Add ant-design to the project using the command, yarn add antd
--------------------------------------
--------------------------------------
9. lets import components from antd(bootstrap also work the same way, instead of antd, we will be using bootstrap, this is the onyl diff)
import { Form, Input, Button, Select, Checkbox, Icon } from "antd";
--------------------------------------
--------------------------------------
10. Refer to Ant design documentation on how to use them up,
a.  To use form component refer : https://ant.design/components/form/
b. To use input component refer
https://ant.design/components/input/
c. To use Button refer: https://ant.design/components/button/

--------------------------------------
--------------------------------------
11. Go to src/App.js, Import Form, Input, Button and create the username, password, Login butotn fields. Refer the antd on how to use them.



Note: when we have a form element, if we define a onSubmit function on the form, we can avoid having a onClick function on a Button element, we can use the onSubmit button on the form or we have the onLCick funciotn on the button and avoid onSubmit on the form.
--------------------------------------
--------------------------------------
12. Reload the app to check the UI, Use your css skills to align the content at the center of the page, horizontally and vertically.
--------------------------------------
--------------------------------------
13. We notice that the UI doesnot look like as in the website as we didnot import the ant dsign css file. add the below line in the src/index.js file
import 'antd/dist/antd.css';
--------------------------------------
--------------------------------------
14. Lets write the css classes to the elements align the Input fields correctly. learn about CSS units before proceeding further. 
https://www.w3schools.com/cssref/css_units.asp

a. Go to App.css file, add css for Form element
b. Add padding and margin for Input Fields, by creating css classes for them.
c. Make sure you knwo the specifity of CSS,(order is inlinestyles > elementId > CssClasses(pseudoclasses) > Elements )
d. Check the HTML of the browser by inpect element from the Chrome Dev tools
e. Hit Empty Cache and Hard Reload to see the changes in the browser
--------------------------------------
--------------------------------------
15.  lets add functionality to our Input fields, create handleSubmit button to get called when we hit the login button, create another function to reset the state for the input fields, lets create a component "state" in the "constructor", in the latest versions of react, we can create "state" with no "constructor" created. 

refer to git commit

https://github.com/sandeepperkariappdev/redux-sample/commit/37bc5e4b8371a4070faf686d33bf409844f1be9b

--------------------------------------
--------------------------------------
16. Add validation to the Login screen Inptu fields
https://codeburst.io/how-to-use-html5-form-validations-with-react-4052eda9a1d4
Refer Formik for another way fo additing validations
https://jaredpalmer.com/formik/docs/overview?source=post_page-----4052eda9a1d4----------------------
--------------------------------------
--------------------------------------
17. Show Error message for the failed validations
    a. create a func component to show the error messages
    b. Add a new state property to show the component
    c. create a conditional statement to show the Error Component.
https://github.com/sandeepperkariappdev/redux-sample/commit/4a9c6e84cacc16a79b92c83b3baa6460e00a3b04
--------------------------------------
--------------------------------------
18. REDUX: Now lets start with Redux, since we initally installed the redux dependencies, 
    a. create a redux folder
    b. Create 3 folder inside the redux folder, i. actions ii. reducers iii. store
    c. Create index.js files inside each of the 3 folders create in the above step
    d. create another file called types.js inside actions
--------------------------------------
--------------------------------------
19. TYPES: Write Types for the APP in the actions/types.js file
--------------------------------------
--------------------------------------
20. ACTIONS : Write the actions for the App, 
    Actions are the functions that adds the further functionality to the app
    Go to actions/index.js, add LoginUser Action, actions return an object, once the object is returned, reducers file will be called automatically by redux library. 
    Import types to the action/index.js file
--------------------------------------
--------------------------------------
21. REDUCERS: Write the reducer functions for the App
    Reducers will have the logic and global "state" of the App.
    a. Since we want to write reducers for the login Compoenent, lets create a file called login.js in the reducers folder
    reducers/login.js
    b. Lets create a "state" for the login component inside the reducers/login.js file.
    c. Import the types, create a "state" object for the login screen. the "state" in reducers is callled applicatoin "state", the "state" we create inside the login component is called "component state".
    d. create a function to return the "state" object form the reducer/login.js
    e. The funciton will return the default "state" object that we created at step c, the "state" object will be modified when the action is called
    f. Create and return the "reducers" from the reducers/index.js file, here we will combine the reducers from all the reducers files in the reducers folder.
--------------------------------------
--------------------------------------
22. STORE: Creating a store for the app
    a. Import the createStore function from the redux.
    b. Import the "reducers" from the reducers/index.js files. Store will contain the data of the app, we have the data in the "state" object present in the "reducers". so we will create the "store" from the "reducers".
    c. create the "store" and export the "store" from the file.
--------------------------------------
--------------------------------------
23. SAGAS(MIDDLEWARE) : Adding the SAGA middle ware
    a. create a file inside the store folder by name "sagas", store/sagas.js
    b. import the effects and types to the file.
    c. Write a function to export the "rootsaga" from the file.
    d. Write another function(fetch) to make the services call to login the user.
    e. fetch function uses the funciton imported form the service file  that will be create on step 24. 
    f. fetch function uses types to dipatch the response returned from the service call.  
    g. integrating the "sagas" to the redux or application "store", go to the store/index.js file, import the sagas file, 
    h. create a middleware and apply the middleware to the store.    
--------------------------------------
--------------------------------------
24. SERVICE CALLS: Making services calls and consuming the data.
    PREREQUISITE : learn about sagas effects, that we are going to use in the sagas file.
    a. Create a file to make the service calls. create a folder redux/service/index.js 
    b. Write the function for GET/POSt/DELETE service calls.
    c. Make reference to the service methods in the sagas file
    d. In the sagas file, in the fetch function we make the service calls, once the data is returned from the service we send the data to the reducers by dispatching an action. 
--------------------------------------
--------------------------------------    
25. UPDATING REDUCERS TO CONSUME SERVICE RESPONSE : 
    a. In the fetch function in the Sagas file, server response will be dispatched by actions using the types and effects from sagas. the dispatched actions will be consumed in the reducers to update the store. 
    b. Go to the reducers/login.js file to create functions for types, Login Success and Login Error.
    c. Write the handler functions to update the "state" object in the reducers.
    Note: Make sure we create a new "state" object to return in the functions, if we use the same state object, the component will not get the updated data.
--------------------------------------
--------------------------------------   
26. INTEGRATE REDUX TO REACT:
    a. Go to src/index.js file, import provider from the react-redux
    b. Apply the "provider" component to the App component, Provider will ensure the store is available to all the child components in the App Component.
    c. Import the "store" from the redux/store/index.js file to apply to the provider.
    d. Go to the App component, import connect from react-redux
    e. Now we need to pulll the data from the redux "store" to the component "props", we will write mapStateToProps function to integrate using connect.
    f. The data that we put in to "props" will be available from the "getDerivedStateFromProps" function.
--------------------------------------
--------------------------------------
27.  










Interview Questions

1. What does export default do?
2. Diff between yarn and npm?
3. Diff between Functional and Class Components, 

    a) Functional component is a stateless component. It has only props. But class component has state and props.
    b) Functional component has not any component lifecycle like componentDidMount etc. but class component has Component Lifecycle.

4. scenarions where we use each fo them
5. what the different ways to use the setState 
    a. this.setState({[name]:value})
    b. 


6. why do we write e.preventDefault();  for the functions.
7. 


