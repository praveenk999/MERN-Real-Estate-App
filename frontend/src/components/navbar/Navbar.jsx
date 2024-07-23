// import { useContext, useState } from "react";
 import "./navbar.scss";
// import { Link } from "react-router-dom";
 import { AuthContext } from "../../context/AuthContext";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const {currentUser} = useContext(AuthContext)

//   // console.log("current in nevbar",currentUser);
//   // const user = true;
//   return (
//     <nav>
//       <div className="left">
//         <a href="/" className="logo">
//           <img src="/realestate.png" alt="" />
//           <span>LamaEstate</span>
//         </a>
//         <a href="/">Home</a>
//         <a href="/list">Buy</a>
//         <a href="/add">Sell</a>
//       </div>
//       <div className="right">
//         {currentUser ? (
//           <div className="user">
//             <img
//               src= {currentUser?.userInfo?.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
//               alt=""
//             />
//             <span>Hello {currentUser?.userInfo?.username}</span>
//             <Link to="/profile" className="profile">
//               {/* <div className="notification">3</div> */}
//               <span>Profile</span>
//             </Link>
//           </div>
//         ) : (
//           <>
//             <a href="/login">Sign in</a>
//             <a href="/register" className="register">
//               Sign up
//             </a>
//           </>
//         )}
//         <div className="menuIcon">
//           <img
//             src="/menu.png"
//             alt=""
//             onClick={() => setOpen((prev) => !prev)}
//           />
//         </div>
//         <div className={open ? "menu active" : "menu"}>
//           <a href="/">Home</a>
//           <a href="/list">Buy</a>
//           <a href="/add">Sell</a>
//           {/* <a href="/">Contact</a> */}
//           {/* <a href="/">Agents</a> */}
//           <a href="/">Sign in</a>
//           <a href="/">Sign up</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    // Update activePage based on current location pathname
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/realestate.png" alt="" />
          <span>RealEstate</span>
        </a>
        <Link to="/" className={activePage === "/" ? "activeLink" : ""}>
          Home
        </Link>
        <Link to="/list" className={activePage === "/list" ? "activeLink" : ""}>
          Buy
        </Link>
        <Link to="/add" className={activePage === "/add" ? "activeLink" : ""}>
          Sell
        </Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={
                currentUser?.userInfo?.avatar ||
                "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
            />
            <span>Hello {currentUser?.userInfo?.username}</span>
            <Link to="/profile" className="profile">
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/" className={activePage === "/" ? "activeLink" : ""}>
            Home
          </Link>
          <Link to="/list" className={activePage === "/list" ? "activeLink" : ""}>
            Buy
          </Link>
          <Link to="/add" className={activePage === "/add" ? "activeLink" : ""}>
            Sell
          </Link>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// import { useContext, useState } from "react";
// import "./navbar.scss";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { useNotificationStore } from "../../lib/notificationStore";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const { currentUser } = useContext(AuthContext);

//   const fetch = useNotificationStore((state) => state.fetch);
//   const number = useNotificationStore((state) => state.number);

//   if (currentUser) fetch();

//   return (
//     <nav>
//       <div className="left">
//         <Link to="/" className="logo">
//           <img src="/logo.png" alt="" />
//           <span>LamaEstate</span>
//         </Link>
//         <Link to="/">Home</Link>
//         <Link to="/add">Sell</Link>
//       </div>
//       <div className="right">
//         {currentUser ? (
//           <div className="user">
//             <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
//             <span>Hello {currentUser.userInfo.username}</span>
//             <Link to="/profile" className="profile">
//               {number > 0 && <div className="notification">{number}</div>}
//               <span>Profile</span>
//             </Link>
//           </div>
//         ) : (
//           <>
//             <Link to="/login">Sign in</Link>
//             <Link to="/register" className="register">
//               Sign up
//             </Link>
//           </>
//         )}
//         <div className="menuIcon">
//           <img
//             src="/menu.png"
//             alt=""
//             onClick={() => setOpen((prev) => !prev)}
//           />
//         </div>
//         <div className={open ? "menu active" : "menu"}>
//           <Link to="/">Home</Link>
//           <Link to="/add">Sell</Link>
//           <Link to="/login">Sign in</Link>
//           <Link to="/register">Sign up</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
