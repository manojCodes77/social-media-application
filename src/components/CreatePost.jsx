import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
    const { addPost } = useContext(PostList);
    const userId=useRef();
    const title=useRef();
    const body=useRef();
    const views=useRef();
    const tags=useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            id:Date.now(),
            userId: userId.current.value,
            title: title.current.value,
            body: body.current.value,
            views: views.current.value,
            tags: tags.current.value.split(" "),
        }
        addPost(post);
        userId.current.value="";
        title.current.value="";
        body.current.value="";
        views.current.value="";
        tags.current.value="";
    }
    return (
        <>
        <h1 className="text-center text-3xl text-rose-200 my-2">CREATE POST</h1>
        <form className="create-post w-96 max-w-full p-4 rounded-xl bg-black text-slate-200" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter your UserId</label>
                <input type="text" className="form-control" id="userId" aria-describedby="emailHelp" placeholder="your name" ref={userId} />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="How are you feeling today ?" ref={title} />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea rows={4} type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Tell me something about your self ..." ref={body} />
            </div>
            <div className="mb-3">
                <label htmlFor="views" className="form-label">Number of views </label>
                <input type="text" className="form-control" id="views" aria-describedby="emailHelp" placeholder="How many people reacted to this post ?" ref={views} />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hashtags here </label>
                <input type="text" className="form-control" id="tags" aria-describedby="emailHelp" placeholder="please enter tags using space" ref={tags} />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
        </>
    )
}
export default CreatePost;