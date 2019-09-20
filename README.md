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

15.  




Interview Questions

What does export default do?
Diff between yarn and npm?
Diff between Functional and Class Components, scenarions where we use each fo them




