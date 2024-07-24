import { createContext, useCallback, useReducer } from "react";

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
    } else if (action.type === "DELETE_POST") {
        return state.filter((post) => post.id !== action.payload);
    } else {
        return state;
    }
};

const PostListProvider = (props) => {
    const [postList, dispatch] = useReducer(reducer, []);

    const addPost = useCallback((post) => {
        dispatch({ type: "ADD_POST", payload: post });
    }, [dispatch]);

    const deletePost = useCallback((postId) => {
        dispatch({ type: "DELETE_POST", payload: postId });
    }, [dispatch]);

    const addInitialPosts = useCallback((posts) => {
        dispatch({ type: "ADD_INITIAL_POSTS", payload: posts });
    }, [dispatch]);

    return (
        <PostList.Provider value={{
            postList,
            addPost,
            deletePost,
            addInitialPosts
        }}>
            {props.children}
        </PostList.Provider>
    );
};

export default PostListProvider;
