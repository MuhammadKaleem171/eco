
import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../Asset/crown.svg.svg'
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './Header.style.scss'
import {auth} from '../../Firebase/firebase.utils'
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'
const Header=({currentUser,hidden})=>{

return(
<div className='header'>
<Link className='logo-container' to ="/">
<Logo className='logo'/>
</Link>
<div className='options'>
    <Link className='option' to='/shop'>
        SHOP
    </Link>
    <Link className='option' to='/shop'>
        CONTACT
    </Link>
    <Link className='option' to='/additem'>
        Additem
    </Link>
    { currentUser ?(
     <div className='option' onClick={()=>auth.signOut()}> Sign Out</div>
    ):(
    <Link className='option' to='/signin'>
        SIGN In
    </Link>
    )}
     <CartIcon />
</div>
{
    hidden ? null:<CartDropdown />
}

</div>
)
}
const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
  });
export default connect(mapStateToProps)(Header);