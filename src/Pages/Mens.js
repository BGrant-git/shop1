import React from 'react';
import Grid from '@material-ui/core/Grid'

import MensBanner from '../Components/MensBanner'
import SearchBar from '../Components/SearchBar'
import MensClothesItem from '../Components/MensClothesItem'

const Mens = ({ productsMens, addToCart }) => {
	return (
		<div>
			<Grid container direction='column'>
				<Grid item><MensBanner /></Grid>
				<Grid item><SearchBar /></Grid>
				<Grid container>
					{productsMens.map((item, i) => (
						<Grid item md={4} sm={6} xs={12} key={i}>
						<MensClothesItem 
							element={item[1]}
							addToCart={addToCart}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</div>
	)
}
 
export default Mens;