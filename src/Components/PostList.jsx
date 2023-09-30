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
      <ul className={classes.posts}>   
      {post.map((item)=><Post author={item.author} body ={item.body}/>,
      console.log(post))}
   </ul>
   
   </>

   );
}
 
export default PostList;