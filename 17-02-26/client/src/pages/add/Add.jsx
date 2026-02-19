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
    console.log("e.target.name",e.target.name);
    console.log("e.target.value",e.target.value);

    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    })





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
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="desc" onChange={handleChange} id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" name="shortTitle" onChange={handleChange} placeholder="e.g. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea name=""  id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Revision Number</label>
            <input type="number" name="revisionNumber" onChange={handleChange} />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Price</label>
            <input type="number" name="price" onChange={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
