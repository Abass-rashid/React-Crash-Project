import { useState } from "react";
import MainHeader from "./Components/MainHeader";
import PostList from "./Components/PostList";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const handleModalHide = () => {
    setModalIsVisible(false)
  }

  const handleModalShow = () => {
    setModalIsVisible(true)
  }
  return ( 
    <> 
    <MainHeader onCreatePost={handleModalShow} />
    <main>
    <PostList isPosting={modalIsVisible}  onStopPosting={handleModalHide}/>
    </main></>
   
   
   );
}
 
export default App;