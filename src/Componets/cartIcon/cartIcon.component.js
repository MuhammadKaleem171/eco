import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector}from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../Asset/shopping-bag.svg.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateTOProps=createStructuredSelector({
itemCount:selectCartItemsCount

});
export default connect(
  mapStateTOProps,
  mapDispatchToProps
)(CartIcon);