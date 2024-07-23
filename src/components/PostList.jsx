import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
const PostList = () => {
    const { postList } = useContext(PostListData)
    return (
        <>
            <div>
                <h1 className="text-center text-3xl text-rose-200 my-2">ALL POSTS</h1>
                {
                    postList.map((post) => {
                        return <Post key={post.id} post={post} />;
                    })
                }
            </div>
        </>
    )
};
export default PostList;