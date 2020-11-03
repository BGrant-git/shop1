import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import CartItem from '../Components/CartItem'
import CheckoutBox from '../Components/CheckoutBox'

const useStyles = makeStyles({
	title: {
		padding: 15,
	},
	itemsList: {
		marginBottom: 30,
		width: '100%'
	},
	checkoutBox: {
		border: '1px solid #DCDCDC',
		marginBottom: 20,
		marginLeft: '-1px',
		minWidth: 150,
		height: 300,
		width: '100%'
	},
	empty: {
		border: '1px solid #DCDCDC',
		padding: 5
	}
})

const Cart = ({ cart, cartPrice, clearCart }) => {
	const classes = useStyles()

	return (
		<div>
			<Grid container direction='row'>
				<Grid item xs={12} className={classes.title}>
					<Typography variant='h4' align='center'>
						CART
					</Typography>
				</Grid>
				<Grid item sm={1} xs={false}></Grid>
				<Grid item md={8} sm={12} className={classes.itemsList}>
					{cart 
					? cart.map((item, i) => <CartItem element={item} key={i} />)
					: <Typography variant='h5' className={classes.empty}>EMPTY!</Typography>}
				</Grid>
				<Grid item md={3} sm={12} className={classes.checkoutBox}>
					<CheckoutBox 
						cart={cart} 
						cartPrice={cartPrice}
						clearCart={clearCart} 
						/>
				</Grid>
			</Grid>
		</div>
	);
}
 
export default Cart;