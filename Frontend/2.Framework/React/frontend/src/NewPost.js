const NewPost = ({
    handleSubmit, postTitle, postBody, setPostTitle, setPostBody
})=>{
    return(
        <main className="NewPost">
         <h2>New Post</h2>
         <form className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor="title">Post Title</label>
            <input id="title" type='text' placeholder="Title" required value={postTitle} onChange={(e)=>setPostTitle(e.target.value)}></input>
            <label htmlFor="body">Post Body</label>
            <textarea id="body" type='text' placeholder="Body" required value={postBody} onChange={(e)=>setPostBody(e.target.value)}></textarea>
            <button type="submit">Submit</button>
         </form>
        </main>
    )
}

export default NewPost;
