import {Link} from 'react-router-dom'
import { useAuthData } from '../../AuthContext';
const WishList = () => {
  
  let authenticated = useAuthData()

  if(!authenticated) {
    return (
      <div id='wishList'>
        <p>
          <Link to ='login'><a>Sign in</a></Link> to add this item to your wishlist, follow it, or
          mark it as ignored
        </p>
      </div>
    )
  }
  else {
    return (
      <p>authenitcated boiii</p>
    );
  }
};

export default WishList;
