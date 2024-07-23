import { createContext } from "react";
import { useReducer } from "react";
export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPosts: () => { },
});
const reducer = (state, action) => {
    if (action.type === "ADD_POST") {
        return [...state, action.payload];
    } else if (action.type === "ADD_INITIAL_POSTS") {
        return action.payload;
    }
    else if (action.type === "DELETE_POST") {
        return state.filter((post) => post.id !== action.payload);
    } else {
        return state;
    }
};
const PostListProvider = (props) => {
    const addPost = (post) => {
        dispatch({ type: "ADD_POST", payload: post });
    }
    const deletePost = (postId) => {
        console.log(postId);
        dispatch({ type: "DELETE_POST", payload: postId });
    }
    const addInitialPosts = (posts) => {
        dispatch({ type: "ADD_INITIAL_POSTS", payload: posts });
    }
    const [postList, dispatch] = useReducer(reducer, []);
    return <PostList.Provider value={
        {
            postList: postList,
            addPost: addPost,
            deletePost: deletePost,
            addInitialPosts: addInitialPosts
        }
    }>
        {props.children}
    </PostList.Provider>;
}
export default PostListProvider;