import { makeStyles, Typography, Button, Grid } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles({
	root: {
		overflow: 'hidden',
		border: '1px solid #dcdcdc',
		display: 'flex',
		marginBottom: '-1px'
	},
	infoContainer: {
		display: 'flex'
	},
	image: {
		height: 120
	},
	info: {
		padding: 5
	},
	qty: {
		
	},
	btns: {
		borderRadius: 0
	}
})

const CartItem = ({ element }) => {
	const classes = useStyles()
	
	return (
			<Grid container 
				className={classes.root} 
				direction='row' 
				alignItems='center'>
				<Grid item xs={12} sm={8} className={classes.infoContainer}>
					<img src={element.img} className={classes.image} />
					<div className={classes.info}>
						<Typography variant='h6'>
							{element.name.toUpperCase()}
						</Typography>
						<Typography>
							£{element.price}
						</Typography>
					</div>
				</Grid>
				<Grid item xs={5} sm={2} className={classes.qty} direction='column'>
					<Typography>
						QTY: 1
					</Typography>
				</Grid>
				<Grid item xs={5} sm={2} direction='column'>
					<Button 
						variant='contained' 
						color='primary' 
						disableElevation 
						className={classes.btns} 
						>+</Button>
					<Button 
						variant='contained' 
						color='secondary' 
						disableElevation 
						className={classes.btns} 
						>-</Button>
				</Grid>
			</Grid>
	);
}
 
export default CartItem;