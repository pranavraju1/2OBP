import axios from "axios";
import dotenv from 'dotenv'

const upload = async(file) => {
    const data = new FormData();
    data.append("file", file);

    // mern-test is my preset name in cloudinary please specify yours from cloudinary
    data.append("upload_preset", "mern-test")

    try{
        // dyb8gufr0 is my cloude name please specify yours from cloudinary
        const res = await axios.post("https://api.cloudinary.com/v1_1/dyb8gufr0/image/upload", data);
        const {url} = res.data;
        return url;

    }catch(err){
        console.log(err)
    }
} 
-
export default upload