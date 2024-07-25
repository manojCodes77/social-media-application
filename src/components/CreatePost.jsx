import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
    return (
        <>
        <h1 className="text-center text-3xl text-rose-200 my-2">CREATE POST</h1>
        <Form method="POST" className="create-post w-96 max-w-full p-4 rounded-xl bg-black text-slate-200">
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter your UserId</label>
                <input type="text" 
                name="userId"
                className="form-control" id="userId" aria-describedby="emailHelp" placeholder="your name"  />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" 
                name="title"
                className="form-control" id="title" aria-describedby="emailHelp" placeholder="How are you feeling today ?" />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea rows={4} type="text" 
                name="body"
                className="form-control" id="title" aria-describedby="emailHelp" placeholder="Tell me something about your self ..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="views" className="form-label">Number of views </label>
                <input type="text"
                name="views"
                className="form-control" id="views" aria-describedby="emailHelp" placeholder="How many people reacted to this post ?"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hashtags here </label>
                <input type="text" 
                name="tags"
                className="form-control" id="tags" aria-describedby="emailHelp" placeholder="please enter tags using space" />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </Form>
        </>
    )
}
export const createPostAction=async (data)=>{
    const formData= await data.request.formData();
    const postData=Object.fromEntries(formData);
    postData.tags=postData.tags.split(" ");
    console.log(postData);
    return redirect("/");
    // fetch('https://dummyjson.com/posts/add', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(postData),
    // });
    // this server is currently not working
}
export default CreatePost;