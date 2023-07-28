import Award from "./Award";

import { useEffect, useState } from 'react'
const AwardList = ({helpID}) => {

  const [awards, setAwards] = useState([]) 
  useEffect(() => {
    const getData = async () => {
      
        const response = await fetch(`https://steam-clone-zf6a.onrender.com/award_reviews/${helpID}`, {
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
 if(awards !== undefined)
 {
       return (
         <div className='SideBySide'>
          {awards.map((test) => {
            return (
            test["award_ids"].map((award) => { 
                return (
              <Award id={award}/> /** sorted by total Points awarded(quantity *value) */
            )
            
          })
          )
        })
      }
         
         </div> 
       );
     };
}
     export default AwardList;
     