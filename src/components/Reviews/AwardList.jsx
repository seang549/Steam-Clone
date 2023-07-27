import Award from "./Award";

import { useEffect, useState } from 'react'
const AwardList = ({help}) => {

  const [awards, setAwards] = useState([]) 
  useEffect(() => {
    const getData = async () => {
      
        const response = await fetch(`https://steam-clone-zf6a.onrender.com/award_reviews/${help["award_reviews_table"]}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json();
        setAwards(data)
    }
    getData()
}, [])
       return (
         <div className='SideBySide'>
           <Award id={awards["award_ids"]}/> {/** sorted by total Points awarded(quantity *value) */}
         </div> 
       );
     };
     
     export default AwardList;
     