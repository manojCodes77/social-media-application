import WelcomeMessage from "./WelcomeMessage";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
    const postList= useLoaderData();
    return (
        <>
            <h1 className="text-center text-3xl text-rose-200 my-2">ALL POSTS</h1>
            {postList.length === 0 && <WelcomeMessage />}
            <div className="flex flex-row flex-wrap justify-center ">
                {postList.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        </>
    )
};
export const postLoader=()=>{
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) =>{
        return data.posts;
    });
}
export default PostList;