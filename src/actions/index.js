import jsonPlaceholder from "../api/jsonPlaceholder";
import { dispatch } from "rxjs/internal/observable/range";

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
    
        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        });
    }
