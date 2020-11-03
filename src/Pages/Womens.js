import React from 'react'
import Grid from '@material-ui/core/Grid'

import WomensBanner from '../Components/WomensBanner'
import SearchBar from '../Components/SearchBar'
import WomensClothesItems from '../Components/WomensClothesItems'



const Womens = ({ productsWomens, addToCart }) => {

	return (
		<div>
			<Grid container direction='column'>
				<Grid item><WomensBanner /></Grid>
				<Grid item><SearchBar /></Grid>
				<Grid container>
					{productsWomens.map((item, i) => (
						<Grid item md={4} sm={6} xs={12} key={i}>
							<WomensClothesItems 
								addToCart={addToCart}
								element={item[1]}
								/>
						</Grid>
					))}
					</Grid>
				</Grid>
		</div>
	)
}
 
export default Womens;