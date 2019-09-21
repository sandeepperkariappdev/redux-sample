1. Open your VS Code, open a folder where you want your project
2. Create a new app using Create-react-app redux-sample
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
--------------------------------------
--------------------------------------







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


