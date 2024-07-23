// import { useEffect, useState } from "react";
// import "./newPostPage.scss";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import apiRequest from "../../lib/apiRequest";
// import UploadWidget from "../../components/uploadWidget/UploadWidget";
// import { useNavigate } from "react-router-dom";

// function NewPostPage() {
//   const [value, setValue] = useState("");
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState("");
//   const [latitudeAuto, setLatitude] = useState(null);
//   const [longitudeAuto, setLongitude] = useState(null);
  

//   useEffect(() => {
//     // Check if Geolocation is supported by the browser
//     if (!navigator.geolocation) {
//       setError('Geolocation is not supported by your browser');
//       return;
//     }

//     // Get the current position
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//         // setLatitude(19.07);
//         // setLongitude(72.0876);
//       },
//       (error) => {
//         setError('Unable to retrieve your location');
//       }
//     );
//   }, []);


//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const inputs = Object.fromEntries(formData);

//     try {
//       const res = await apiRequest.post("/posts", {
//         postData: {
//           title: inputs.title,
//           price: parseInt(inputs.price),
//           address: inputs.address,
//           city: inputs.city,
//           bedroom: parseInt(inputs.bedroom),
//           bathroom: parseInt(inputs.bathroom),
//           type: inputs.type,
//           property: inputs.property,
//           latitude: latitudeAuto.toString(),
//           longitude: longitudeAuto.toString(),
//           images: images,
//         },
//         postDetail: {
//           desc: value,
//           utilities: inputs.utilities,
//           pet: inputs.pet,
//           income: inputs.income,
//           size: parseInt(inputs.size),
//           school: parseInt(inputs.school),
//           bus: parseInt(inputs.bus),
//           restaurant: parseInt(inputs.restaurant),
//         },
//       });
//       navigate("/"+res.data.id)
//     } catch (err) {
//       console.log(err);
//       setError(error);
//     }
//   };

//   return (
//     <div className="newPostPage">
//       <div className="formContainer">
//         <h2>Add New Property</h2>
//         <div className="wrapper">
//           <form onSubmit={handleSubmit}>
//             <div className="item">
//               <label htmlFor="title">Title</label>
//               <input id="title" name="title" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="price">Price</label>
//               <input id="price" name="price" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="address">Address</label>
//               <input id="address" name="address" type="text" />
//             </div>
//             <div className="item description">
//               <label htmlFor="desc">Description</label>
//               <ReactQuill theme="snow" onChange={setValue} value={value} />
//             </div>
//             <div className="item">
//               <label htmlFor="city">City</label>
//               <input id="city" name="city" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="bedroom">Bedroom Number</label>
//               <input min={1} id="bedroom" name="bedroom" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="bathroom">Bathroom Number</label>
//               <input min={1} id="bathroom" name="bathroom" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="latitude">Latitude</label>
//               <input id="latitude" name="latitude" type="text" value={latitudeAuto} />
//             </div>
//             <div className="item">
//               <label htmlFor="longitude">Longitude</label>
//               <input id="longitude" name="longitude" type="text" value={longitudeAuto}/>
//             </div>
//             <div className="item">
//               <label htmlFor="type">Type</label>
//               <select name="type">
//                 <option value="rent" defaultChecked>
//                   Rent
//                 </option>
//                 <option value="buy">Buy</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="type">Property</label>
//               <select name="property">
//                 <option value="apartment">Apartment</option>
//                 <option value="house">House</option>
//                 {/* <option value="condo">Condo</option> */}
//                 <option value="land">Land</option>
//               </select>
//             </div>

//             <div className="item">
//               <label htmlFor="utilities">Utilities Policy</label>
//               <select name="utilities">
//                 <option value="owner">Owner is responsible</option>
//                 <option value="tenant">Tenant is responsible</option>
//                 <option value="shared">Shared</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="pet">Pet Policy</label>
//               <select name="pet">
//                 <option value="allowed">Allowed</option>
//                 <option value="not-allowed">Not Allowed</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="income">Income Policy</label>
//               <input
//                 id="income"
//                 name="income"
//                 type="text"
//                 placeholder="Income Policy"
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="size">Total Size (sqft)</label>
//               <input min={0} id="size" name="size" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="school">School</label>
//               <input min={0} id="school" name="school" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="bus">Bus</label>
//               <input min={0} id="bus" name="bus" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="restaurant">Restaurant</label>
//               <input min={0} id="restaurant" name="restaurant" type="number" />
//             </div>
//             <button className="sendButton">Add</button>
//             {error && <span>error</span>}
//           </form>
//         </div>
//       </div>
//       <div className="sideContainer">
//         {images.map((image, index) => (
//           <img src={image} key={index} alt="" />
//         ))}
//         <UploadWidget
//           uwConfig={{
//             multiple: true,
//             cloudName: "praveen-m",
//             uploadPreset: "estate",
//             folder: "posts",
//           }}
//           setState={setImages}
//         />
//       </div>
//     </div>
//   );
// }

// export default NewPostPage;

import { useEffect, useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [latitudeManual, setLatitudeManual] = useState(""); // State for manual latitude input
  const [longitudeManual, setLongitudeManual] = useState(""); // State for manual longitude input

  useEffect(() => {
    // Check if Geolocation is supported by the browser
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    // Get the current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitudeManual(position.coords.latitude.toString());
        setLongitudeManual(position.coords.longitude.toString());
      },
      (error) => {
        setError('Unable to retrieve your location');
      }
    );
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: latitudeManual || "0",
          longitude: longitudeManual || "0", 
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError("Error adding new property");
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h2>Add New Property</h2>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input id="bedroom" name="bedroom" type="number" min={1} required />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input id="bathroom" name="bathroom" type="number" min={1} required />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                value={latitudeManual}
                onChange={(e) => setLatitudeManual(e.target.value)}
                placeholder="Enter latitude"
                required
              />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                value={longitudeManual}
                onChange={(e) => setLongitudeManual(e.target.value)}
                placeholder="Enter longitude"
                required
              />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" required>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select name="property" required>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" required>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" required>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                required
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input id="size" name="size" type="number" min={0} required />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input id="school" name="school" type="number" min={0} required />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input id="bus" name="bus" type="number" min={0} required />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                id="restaurant"
                name="restaurant"
                type="number"
                min={0}
                required
              />
            </div>
            <button type="submit" className="sendButton">
              Add
            </button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "praveen-m", 
            uploadPreset: "estate", 
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
