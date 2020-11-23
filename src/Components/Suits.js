import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, useMediaQuery } from '@material-ui/core'

import SuitsMob from '../Components/SuitsMob'
import SuitsTablet from '../Components/SuitsTablet'
import SuitsDesktop from '../Components/SuitsDesktop';

const useStyles = makeStyles({
	root: {
		margin: '7px 0px',
		borderRadius: 0,
		display: 'flex'
	}
})

const Suits = ({ productsMens, getViewProduct }) => {
	const classes = useStyles()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
	const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	const suitItems = productsMens.filter(ele => ele[1].tags === "suit")

	return (
		<Card className={classes.root}>
			{isMobile ? 
			<SuitsMob suitItems={suitItems} getViewProduct={getViewProduct}/>
			: null} 
			{isTablet && !isDesktop ? 
			<SuitsTablet suitItems={suitItems} />
			: null}
			{isDesktop ?
			<SuitsDesktop suitItems={suitItems} />
			: null}
		</Card>
	);
}
 
export default Suits ;
