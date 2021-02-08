import Api from "../index";
import ApiConstants from "../ApiConstants";

export default function register(data:object) {
  return Api(ApiConstants.BASE_URL + ApiConstants.REGISTER, data, "post", null);
}
