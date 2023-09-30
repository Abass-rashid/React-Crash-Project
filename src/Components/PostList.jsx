import {useState} from "react"
import Post from "./Post";
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredAuther, setEnteredAuther] = useState("");
  const handleChange = (event) => {
    setEnteredBody(event.target.value)
}
  const handleAuther = (event) => {
    setEnteredAuther(event.target.value)
}
const handleModalHide = () => {
  setModalIsVisible(false)
}
  return ( 
    <>
    {modalIsVisible && (
     <Modal onModal={handleModalHide}>
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