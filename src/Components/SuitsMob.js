import React from 'react';
import { NavLink }from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles({
	cardContainer: {
		display: 'flex',
		position: 'relative',
		flexDirection: 'column',
		alignItems: 'center'
	},
	img: {
		position: 'relative',
	},
	overlay: {
		position: 'absolute',
		margin: '50% 10px 0 10px',
		padding: 5,
		color: 'white',
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	},
	btn: {
		color: 'white',
		fontWeight: 'bold',
		border: '2px solid white',
		margin: 5,
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.3)'
		}
	},
	link: {
		textDecoration: 'none'
	}
})

const SuitsMob = ({ suitItems, getViewProduct }) => {
	const classes = useStyles()

	return ( 
		<Grid container direction='row'>
				<Grid item>
					<Carousel 
					infiniteLoop
					autoPlay
					interval={4000}
					showThumbs={false}
					showStatus={false}
					>
						{suitItems.map((item, i) => (
							<div className={classes.cardContainer} key={i}>
								<img className={classes.img} src={item[1].img} />
								<div className={classes.overlay}>
									<Typography variant='h5'>NEW SUITS IN</Typography>									
									<Typography variant='h4'>{item[1].name}</Typography>
									<NavLink 
										to='/product' 
										className={classes.link} 
										onClick={() => {getViewProduct(item[1])}}>
										<Button className={classes.btn}>click here</Button>
									</NavLink>
								</div>
							</div>
						))}
					</Carousel>
				</Grid>
			</Grid>
	 );
}
 
export default SuitsMob;