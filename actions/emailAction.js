import axios from 'axios'
import {
    EMAIL_REQUEST,
    EMAIL_SUCCESS,
    EMAIL_FAIL
} from '../constants/emailConstants' 

export const emailAction = (name, email, subject, message) => async (dispatch) => {
    try {
        dispatch({type: EMAIL_REQUEST})
  
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
  
        const { data } = await axios.post(
        '/api/contact', 
        {name, email, subject, message}, 
        config
        )
        dispatch({ 
            type: EMAIL_SUCCESS, payload: data 
        })
    
    } catch (error) {
        dispatch({
            type: EMAIL_FAIL,
            payload: error.response && error.response.message
            ? error.response.data.message 
            : error.message
        })
    }
}