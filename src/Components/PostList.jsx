import {useState} from "react"
import Post from "./Post";
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = ({isPosting,onStopPosting}) => {
 
const [post, setPost] = useState([])
  const postHandler = (PostData) => {
    setPost((existingPost)=>[PostData, ...existingPost])
  }
  return ( 
    <>
    {isPosting && (
     <Modal onModal={onStopPosting}>
     <NewPost 
    onCancel={onStopPosting}  onAddPost={postHandler}/>
      </Modal> ) } 
     
      {post.length > 0 && (
         <ul className={classes.posts}> 
        {post.map((item)=><Post key={item.body}  author={item.author} body ={item.body}/> )}
        </ul>)}  
      {post.length === 0 && (
        <div style={{textAlign: "center", color: "white"}}>
          <h2>There are no post yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
   
   
   </>

   );
}
 
export default PostList;