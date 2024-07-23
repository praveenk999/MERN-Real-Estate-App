// import { Link } from "react-router-dom";
// import "./card.scss";

// function Card({ item }) {
//   console.log(item);
//   return (
//     <div className="card">
//       <Link to={`/${item.id}`} className="imageContainer">
//         <img src={item.images[0]} alt="" />
//       </Link>
//       <div className="textContainer">
//         <h2 className="title">
//           <Link to={`/${item.id}`}>{item.title}</Link>
//         </h2>
//         <p className="address">
//           <img src="/pin.png" alt="" />
//           <span>{item.address}</span>
//         </p>
//         <p className="price">$ {item.price}</p>
//         <div className="bottom">
//           <div className="features">
//             <div className="feature">
//               <img src="/bed.png" alt="" />
//               <span>{item.bedroom} bedroom</span>
//             </div>
//             <div className="feature">
//               <img src="/bath.png" alt="" />
//               <span>{item.bathroom} bathroom</span>
//             </div>
//           </div>
//           <div className="icons">
//             <div className="icon">
//               <img src="/delete.png" alt="" />
//             </div>
//             {/* <div className="icon">
//               <img src="/chat.png" alt="" />
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import { useContext } from "react";
import { Link } from "react-router-dom";
import "./card.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function Card({ item, onDelete }) {
  const { currentUser } = useContext(AuthContext);

  const handleDelete = async () => {
    if (!currentUser) {
      alert("You need to be logged in to delete a post.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      try {
        await apiRequest.delete(`/posts/${item.id}`);
         onDelete(item.id);
      } catch (error) {
        console.error("Failed to delete the post:", error);
      }
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">Rs. {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
           {  item.userId==currentUser?.userInfo?.id && <div className="icon" onClick={handleDelete}>
             <img src="/delete.png" alt="Delete" />
            </div>}
            {/* <div className="icon">
              <img src="/chat.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
