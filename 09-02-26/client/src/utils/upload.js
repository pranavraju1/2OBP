import axios from "axios";

const upload = async(file) => {
    const data = new FormData();
    data.append("file", file);

    // mern-test is my preset name in cloudinary please specify yours from cloudinary
    data.append("upload_preset", "mern-test")

    try{
        // mention your cloud name here
        const res = await axios.post("https://api.cloudinary.com/v1_1/<your cloud name>/image/upload", data);
        const {url} = res.data;
        return url;

    }catch(err){
        console.log(err)
    }
} 
-
export default upload