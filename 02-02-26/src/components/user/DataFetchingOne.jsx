import axios from "axios";
import { useEffect, useState } from "react";

const DataFetchingOne = () => {

    const[loading, setLoading] = useState(true);
    const[post, setPost] = useState([]);
    const[error, setError] = useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setLoading(false);
            setPost(res.data);
            setError('');
        })
        .catch(error=>{
            setLoading(false);
            setPost([]);
            setError('Something went wrong');
        })
    },[])

  return (
    <div>
      {loading ? 'Loading' : post.title }
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne
