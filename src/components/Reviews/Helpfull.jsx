import ReviewReactions from "./ReviewReactions";
import AwardList from "./AwardList";
import { useEffect, useState } from 'react'
const Helpfull = ({review}) => {
  
  const [help, setHelp] = useState([]) 
  
  useEffect(() => {
    const getData = async () => {
        const response = await fetch(`https://steam-clone-zf6a.onrender.com/helpfull/${review["helpfull_table_id"]}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json();
        setHelp(data)
    }
    getData()
}, [])
    return (
        
        <>
        <div className="TopDown">
      <p>Was this review helpful?</p>
      <ReviewReactions/>
      <h1>{help["positive"]} people found this review helpful</h1>
      <h1>{help["funny"]} people found this review funny</h1>
      <div className="Conversations"> BOTTOM LEFT ICON</div>
      <AwardList help={help}/>
     </div>
     </>
    );
  };
  
  export default Helpfull;
  