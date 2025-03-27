import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import {Route,Routes,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {format} from 'date-fns';
import api from './api/posts';
import useWindowSize from './hooks/useWindowSize';
function App() {
  const [posts,setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] =useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [callEdit,setCallEdit] = useState(false);
  const navigate = useNavigate();
  const {width} = useWindowSize();

  useEffect(()=>{

    const fetchposts = async () =>{
      try{
        const response = await api.get('/posts');
        setPosts(response.data)
      }
      catch(err){
        if (err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        }
        else{
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchposts();

  },[])

  const handleSubmit = async(e)=>{
   e.preventDefault();
   const postid = posts.length? posts[posts.length-1].id+1 :1;
   const datetime = format(new Date(),'MMMM dd, yyyy pp');
   const newpost = {
      id : postid,
      title : postTitle,
      body: postBody,
      datetime : datetime
    }
    try{
      const response = await api.post('/posts',newpost);
      const allposts = [...posts,response.data]
      setPosts(allposts);
      setPostBody('');
      setPostTitle('');
      navigate('/');
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }

  }
  const handleEdit = async(id)=>{

      const datetime = format(new Date(),'MMMM dd, yyyy pp');
      const updatedPost = {id,title:editTitle,datetime,body:editBody};
      try{
        const response = await api.put(`/posts/${id}`,updatedPost);
        setPosts(posts.map(post=>post.id === id? {...response.data}: post));
        setEditBody(postBody);
        setEditTitle(postTitle);
        navigate('/');
        setCallEdit(false);
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async(id)=>{
    try{
      await api.delete(`/posts/${id}`);
      const postslist = posts.filter(post=>(post.id)!== id);
      setPosts(postslist);
      navigate('/');
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }
  }

useEffect(() =>{
  const filteredposts = posts.filter(post=>(
    ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.title).toLowerCase()).includes(search.toLowerCase())
  ))
  setSearchResults(filteredposts.reverse())
},[posts,search])

  return (
    <div>
      <Header title='ReactJs Blog' width={width}/>
      <Navbar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home posts={searchResults}/>} />
        <Route path='/post' element={<NewPost postTitle={postTitle} postBody={postBody} handleSubmit={handleSubmit} setPostBody={setPostBody} setPostTitle={setPostTitle}/>} />
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} editBody={editBody} setEditBody={setEditBody} editTitle={editTitle} setEditTitle={setEditTitle} callEdit={callEdit} setCallEdit={setCallEdit}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
