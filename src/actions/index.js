import jsonPlaceholder from "../api/jsonPlaceholder";
import { dispatch } from "rxjs/internal/observable/range";

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
    
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    };

export const fetchUser = id => async dispatch => {
    const response  = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({ type: 'FETCH_USER', payload: response.data})
};
