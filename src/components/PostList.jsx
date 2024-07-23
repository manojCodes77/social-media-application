import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";
import Post from "./Post";
const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData);
    const [fetching,setFetching]= useState(false);
    useEffect(() =>{
        setFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://dummyjson.com/posts', {signal})
            .then(res => res.json())
            .then((data) =>{
                addInitialPosts(data.posts);
                setFetching(false);
            });

            return () => {
                console.log('cleanup');
                controller.abort();
            }
        }, []);
    return (
        <>
            <h1 className="text-center text-3xl text-rose-200 my-2">ALL POSTS</h1>
            {fetching && <LoadingSpinner />}
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            {!fetching && <div className="flex flex-row flex-wrap-reverse justify-center ">
                {postList.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>}
        </>
    )
};
export default PostList;