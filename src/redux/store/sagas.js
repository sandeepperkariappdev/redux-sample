import { takeEvery, call, put, select, take, fork, all, takeLatest } from 'redux-saga/effects';
import * as Types from '../actions/types';

const baseUrl = 'https://sleepy-basin-37644.herokuapp.com';
//const baseUrl2 = 'https://fierce-crag-76882.herokuapp.com';
//const aws = 'http://18.222.167.189:5000';
function* fetchLoginUser(action) {
  try {
    console.log("Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.firstname = "asdfg";//action.code;
    formBody.lastname = "zxcvbb"; //action.provider;
    formBody.age = "34"
    //const reqMethod = "POST";
    const reqMethod = "GET";
    const loginUrl = baseUrl + '/view';
    const response = yield call(GetDataFromServer, loginUrl, '', '');

    const result = yield response.json();
    console.log("ADS" + result.workingdetails);
    console.log("Result ->" + JSON.stringify(result))
    console.log('Result Json' + result);
    if (result.error) {
      yield put({ type: "LOGIN_USER_SERVER_REPONSE_ERROR", error: result.error });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}

export default function* rootSaga(params) {
    yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
     
    console.log("ROOT SAGA");  
  }