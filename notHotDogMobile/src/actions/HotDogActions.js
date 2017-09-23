import { API_URL } from './api'
import { LOADING, HOT_DOG, NOT_HOT_DOG, NULL_HOTDOG } from './types'

export const checkHotDog = (image) => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    var data = new FormData();
    data.append('image', { uri: image, name: 'image.jpg', type: 'image/jpg' });
    const config = {
    	method: 'POST',
    	headers: {
      	'Accept': 'application/json',
      	'Content-Type': 'multipart/form-data;'
    	},
    	body: data,
    }
    console.log('POST: ', API_URL)
    return fetch(API_URL, config)
    	.then((response) => {
    	if (response._bodyText === 'true') {
    		console.log('Hot Dog!');
        dispatch({ type: HOT_DOG });
      } else {
    		console.log('Not Hot Dog!');
        dispatch({ type: NOT_HOT_DOG });
      }
    }).catch((error) => {
      console.log(error);
      dispatch({ type: NOT_HOT_DOG });
    });
  }
};

export const setHotDogNull = () => {
	return { type: NULL_HOTDOG };
}