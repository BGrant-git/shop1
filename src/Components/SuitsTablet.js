import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import { makeStyles } from '@material-ui/core/styles';
import { 
	Card, 
	Grid, 
	Typography,
	Button
	 } from '@material-ui/core'

	 const useStyles = makeStyles({
		items: {
			padding: 10,
			paddingLeft: 0
		},
		suitCard: {
			margin: 5,
			display: 'flex',
			flexDirection: 'row',
			backgroundColor: '#e8e7e5',
			height: '95%',
			alignItems: 'center',
		},
		cardTitle: {
			padding: 10,
			alignItems: 'center'
		},
		cardImg: {
			width: '36.8%',
			height: 'auto'
		},
		cardBtn: {
			backgroundColor: 'white'
		},
		title: {
			paddingTop: 10
		},
		info: {
			display: 'flex',
			flexDirection: 'column',
			padding: 10,
			width: '100%',
			marginTop: -50
		},
		carousel: {
			margin: '15px 0px'
		}
	})

const SuitsTablet = ({ suitItems }) => {
	const classes = useStyles()

	let random = Math.floor((Math.random() * 4) + 1)
	let tabletItems = suitItems.slice(random,random+2)

	return (
		<Grid container direction='row' >
			<Grid item xs={12}>
				<Typography 
					align='center' 
					variant='h4'
					className={classes.title}
					>
					LATEST SUITS IN
				</Typography>
			</Grid>
			<Grid item sm={7} className={classes.items}>
				<Grid container item style={{margin:0}}>
					{tabletItems.map((item, i) => (
						<Grid item sm={12} md={6} key={i}>
							<Card square className={classes.suitCard}>
								<img className={classes.cardImg} src={item[1].img} />									
								<div className={classes.info}>
									<Typography variant='h6' align='center' className={classes.cardTitle}>{item[1].name}</Typography>
									<Typography align='center'>£{item[1].price}</Typography>
									<Button variant='contained' className={classes.cardBtn}>SHOP NOW</Button>
								</div>	
							</Card>
						</Grid>
						))}				
					</Grid>
				</Grid>
			<Grid item sm={5}>
				<Card 
				square
				className={classes.carousel}>
				<Carousel 
				infiniteLoop
				autoPlay
				interval={4000}
				stopOnHover={true}
				showThumbs={false}
				showStatus={false}
				>
					{suitItems.map((item, i) => (
						<img key={i} src={item[1].img} />
					))}
				</Carousel>
				</Card>
			</Grid>
		</Grid>
	);
}
 
export default SuitsTablet;