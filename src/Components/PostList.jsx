import {useState} from "react"
import Post from "./Post";
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = ({isPosting,onStopPosting}) => {
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredAuther, setEnteredAuther] = useState("");
  const handleChange = (event) => {
    setEnteredBody(event.target.value)
}
  const handleAuther = (event) => {
    setEnteredAuther(event.target.value)
}

  return ( 
    <>
    {isPosting && (
     <Modal onModal={onStopPosting}>
     <NewPost  handleChange={handleChange} 
    onAutherChange={handleAuther} />
      </Modal> ) } 
    
      <ul className={classes.posts}>   
   <Post name ="Abasss rashid"  value="am learning React!"  /> 
   <Post name ={enteredAuther} value= {enteredBody}  />    
   <Post name ="Hussein Osman"  value="I love Python js"  />   
     
   </ul></>

   );
}
 
export default PostList;