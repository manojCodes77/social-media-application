import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Post from "./Post";
const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData);
    const handleGetPostsClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => addInitialPosts(data.posts));
    };
    return (
        <>
            <h1 className="text-center text-3xl text-rose-200 my-2">ALL POSTS</h1>
            {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick} />}
            <div className="flex flex-row flex-wrap-reverse">
                {postList.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        </>
    )
};
export default PostList;