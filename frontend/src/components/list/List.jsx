import './list.scss'
import Card from"../card/Card"
import { useState } from "react";

// function List({posts}){
  
//   return (
//     <div className='list'>
//       {posts.map(item=>(
//         <Card key={item.id} item={item}/>
//       ))}
//     </div>
//   )
// }
function List({ posts }) {
  const [currentPosts, setCurrentPosts] = useState(posts);

  const handleDelete = async (postId) => {
    try {
     
      setCurrentPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== postId)
      );
    } catch (error) {
      console.error("Failed to delete the post:", error);
    }
  };

  return (
    <div className="list">
      {currentPosts.map((item) => (
        <Card key={item.id} item={item} onDelete={ handleDelete} />
      ))}
    </div>
  );
}


export default List
