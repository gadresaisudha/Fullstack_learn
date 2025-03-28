import Post from './Post'
const Feed = ({posts}) =>{
    return(
        <>
        {
            posts.map(post=>(
                <Post key={post.id} post={post}></Post>
            ))
        }
        </>
    )
}
export default  Feed;
