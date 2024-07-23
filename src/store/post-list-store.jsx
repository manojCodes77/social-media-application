import { createContext } from "react";
import { useReducer } from "react";
export const PostList = createContext( {
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});
const reducer = (state, action) => {
    if (action.type === "ADD_POST") {
        return [...state, action.payload];
    } else if (action.type === "DELETE_POST") {
        return state.filter((post) => post.id !== action.payload);
    } else {
        return state;
    }
};
const PostListProvider = (props) => {
    const addPost = (post) => {
        dispatch({ type: "ADD_POST" , payload: post });
    }
    const deletePost = (postId) => {
        console.log(postId);
        dispatch({ type: "DELETE_POST", payload: postId });
    }
    const [postList, dispatch] = useReducer(reducer, DEFAULT_POST_LIST);
    return <PostList.Provider value={
        {
            postList: postList,
            addPost: addPost,
            deletePost: deletePost
        }
    }>
        {props.children}
    </PostList.Provider>;
}
const DEFAULT_POST_LIST = [
    {
        id: 1,
        title: 'Going to uttarakhand',
        body: 'jai shree ram, mein abhi uttarakhand ja raha hoon',
        reactions: 0,
        userId: 'msr',
        tags: ['uttarakhand', 'travel'],
    },{
        id: 2,
        title: 'pass ho gaye',
        body: 'in 4 saal mein bahut maza aaya , now i am going to london to join my new job as a software engineer ',
        reactions: 12,
        userId: 'jsr',
        tags: ['pass', 'job'],
    }
]
export default PostListProvider;