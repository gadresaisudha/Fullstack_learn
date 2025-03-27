import {useParams, Link} from 'react-router-dom';


const PostPage = ({posts,handleDelete,handleEdit,editBody,editTitle,setEditBody,setEditTitle,callEdit,setCallEdit})=>{
    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString()===id);
    const handleCallEdit = (e)=>{
        e.preventDefault();
        setEditTitle(post.title);
        setEditBody(post.body);
        setCallEdit(true);
    }
    return(
        <main className='PostPage'>
            <article className='post'>
            {post &&

            <>
            {!callEdit &&
            <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button onClick={handleCallEdit}>
                Edit Post
            </button>
            <button onClick={()=>handleDelete(post.id)}>
                Delete Post
            </button>
            </>
            }
            {callEdit &&
            <>

            <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Edit Title"
          />
          <textarea
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            placeholder="Edit Body"
          />
          <button onClick={() => handleEdit(post.id)}>
            Save Edit
          </button>

            </>
            }
            </>

            }

            {
                !post &&
                <>
                 <h2>404! Not Found</h2>
                 <Link to='/'>Visit Home Page</Link>
                </>
            }
            </article>

        </main>
    )
}

export default PostPage;
