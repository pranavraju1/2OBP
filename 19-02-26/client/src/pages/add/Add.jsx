import React, { useReducer, useState } from "react";
import "./Add.css";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";





const Add = () => {


  // to handle single file upload
  const [singleFile, setSingleFile] = useState(undefined);

  // to handle multiple file upload
  const [files, setFiles] = useState([]);

  // to track uploading process, initiall false and when start uploading it will be true
  const [uploading, setUplaoding] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    e.preventDefault();
    // console.log("e.target.name",e.target.name);
    // console.log("e.target.value",e.target.value);

    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    })
  };

  const addFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUplaod = async()=>{
    setUplaoding(true);
    try{
      const cover = await upload(singleFile);
      const images = await Promise.all([...files].map(async(file)=>{
        const url = await upload(file);
        return url
      }));
      
      setUplaoding(false);
      
      dispatch({
        type: "ADD_IMAGES",
        payload: {
          cover, images
        }
      })

    }catch(err){
      console.log(err)
    }
  }

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig)=>{
      console.log(gig)
      return newRequest.post("/gigs", gig)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    console.log(state)
    e.preventDefault();
    mutation.mutate(state);
    // navigate("/mygigs")
  }







  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              name="title"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" onChange={(e)=>setSingleFile(e.target.files[0])} />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple onChange={(e)=>setFiles(e.target.files)} />
            <button onClick={handleUplaod} style={{"width" : "50%"}}>
              {uploading ? "Uploading" : "Upload"}
            </button>
            <label htmlFor="">Description</label>
            <textarea name="desc" onChange={handleChange} id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
            <button onClick={handleSubmit}>
              Create
            </button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" name="shortTitle" onChange={handleChange} placeholder="e.g. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea name="shortDesc" onChange={handleChange}  id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Revision Number</label>
            <input type="number" name="revisionNumber" onChange={handleChange} />

            <label htmlFor="">Add Features</label>
            <form action="" className="add" onSubmit={addFeature}>
              <input type="text" placeholder="e.g. page design" />
              <button type="submit">add</button>
            </form>
            <div className="addFeatures">
              {state?.features?.map((f)=>(
                <div className="item" key={f}>
                  <button onClick={()=> dispatch({
                    type: "REMOVE_FEATURE",
                    payload: f,
                  })}>{f} <span>X</span>
                  </button>
                </div>
              ))}
            </div>

            <label htmlFor="">Price</label>
            <input type="number" name="price" onChange={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
