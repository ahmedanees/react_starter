import Api from "../index";
import ApiConstants from "../ApiConstants";

export default function Login(data:any) {
  console.log("from login saga", ApiConstants.BASE_URL + ApiConstants.LOGIN, data)
  //return {email:'asdaas'}
  return Api(ApiConstants.BASE_URL + ApiConstants.LOGIN, data, "POST", null);
}
