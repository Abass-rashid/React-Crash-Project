
import Post from "./Post";
import classes from "./PostList.module.css"
import NewPost from "./NewPost";

const PostList = () => {
  
  return ( 
    <>
        
    <NewPost/>
    <ul className={classes.posts}>
         
   <Post name ="Abasss rashid"  value="am learning React!"  /> 
   <Post name ="Jafar Ibrahim" value= "am learning React!"  />    
   <Post name ="Hussein Osman"  value="I love Python js"  />   
     
   </ul></>

   );
}
 
export default PostList;