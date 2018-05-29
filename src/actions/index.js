import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'creat_post';
export const GET_ID = 'get_id';
export const DELETE_ID = 'delet_id';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?Key=Kalden123'

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}


export function createPost(value, callBack){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, value)
        .then(() => callBack());

    return {
        type: CREATE_POST,
        payload: request
    }
}


export function showPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: GET_ID,
        payload: request
    }
}


export function deletePost(id, callBackWait){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callBackWait());

    return {
        type: DELETE_ID,
        payload: id
    }
}






