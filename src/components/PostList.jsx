import { useContext,useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Post from "./Post";
const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData);
    const [dataFetched, setDataFetched] = useState(false);
    if (!dataFetched) {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => addInitialPosts(data.posts));
        setDataFetched(true);
    }
    return (
        <>
            <h1 className="text-center text-3xl text-rose-200 my-2">ALL POSTS</h1>
            {postList.length === 0 && <WelcomeMessage />}
            <div className="flex flex-row flex-wrap-reverse">
                {postList.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        </>
    )
};
export default PostList;