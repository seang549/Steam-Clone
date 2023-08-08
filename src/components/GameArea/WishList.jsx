import {Link} from 'react-router-dom'
import { useAuthData } from '../../AuthContext';
const WishList = () => {
  
  let authenticated = useAuthData()
  console.log(authenticated)

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
      <div className="auth-wishList">
        <button className='wishlist-btn communityHub'>Add to your wishlist</button>
        <button className="wishlist-btn communityHub">Follow</button>
        <button className="wishlist-btn communityHub">Ignore</button>
        <button className='wishlist-btn communityHub'><img src='	https://store.cloudflare.steamstatic.com/public/images/v6/btn_arrow_down_padded.png'></img></button>
        <button className='wishlist-btn-view communityHub'>View Your Queue	
        <div className="arrow_next"></div>
        </button>
      </div>
    );
  }
};

export default WishList;
