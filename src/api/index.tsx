import AsyncStorage from '@react-native-community/async-storage';

const getAuthToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token');
    if (value !== null) {
      return value;
    }
    return '';
  } catch (e) {
    return '';
  }
};

export default async function api(
  path: string,
  params: any,
  method: string,
  token: string,
) {
  token = "2324343434" ; 
  console.log("token", token)
 let options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    method: method,
    ...(params && {body: JSON.stringify(params)}),
  };
  console.log('path', path);
  console.log('options', options);

   let fetch_result =  await fetch(path, options)
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        console.log(responseJson);
       return responseJson
      })
      .catch((error) => {
        //Hide Loader
        console.error(error);
        return error
      });
      console.log("fetch_result",fetch_result)
      return fetch_result;
}
