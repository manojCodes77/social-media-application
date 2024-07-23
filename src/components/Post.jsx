import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post}) => {
    const { deletePost } = useContext(PostList);
    return (
        <div className="card mx-3 my-3 w-96 " >
            <div className="card-body ">
                <h5 className="card-title text-xl font-semibold">{post.title}
                    <span onClick={() => deletePost(post.id)}
                     className="cursor-pointer position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <MdDelete />
                    </span>
                </h5>
                <p className="card-text mb-3 leading-5">{post.body}</p>
                {post.tags.map((tag,index) => (
                    <span key={index} className="badge bg-primary me-1">{tag}</span>
                ))}
                <div className="alert alert-success reactions mt-3" role="alert">
                    This post has been reacted by <strong>{post.reactions}</strong> people!
                </div>
            </div>
        </div>
    )
}
export default Post;    