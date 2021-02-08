import Api from "../index";
import ApiConstants from "../ApiConstants";

export default function Login(data:any) {
  return Api(ApiConstants.BASE_URL + ApiConstants.LOGIN, data, "POST", null);
}
