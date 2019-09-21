import * as Types from "../actions/types";

// Some of the properties are redundant.
const initialUserObj = {
    "signUpUsersList": [],
    "pending": false,
    "loggedIn": false,
    "isValidToken": false,
    "isBusiness": false,
    "empDetails": {},
    "result": {},
    "user": {
      "email": "",
      "displayName": "",
      "registered": false,
      "refreshToken": "",
      "expiresIn": "",
      "emailVerified": false,
      "validSince": "",
      "disabled": false,
      "lastLoginAt": "",
      "createdAt": ""
    }
  
  };

  export default (state = initialUserObj, action) => {
    switch (action.type) {
      case Types.LOGIN_USER:
        return Object.assign({}, state, { "loggedIn": false, "isValidToken": false, "pending": true });        
      default:
        return state;
    }
  }