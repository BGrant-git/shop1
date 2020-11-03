import React, { useState, useEffect } from 'react'
import { Route, Switch,  BrowserRouter as Router} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import products from './products.json'

import MenuAppBar from './Components/MenuAppBar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Results from './Pages/Results'
import Cart from './Pages/Cart'

const App = () => {
  
  const[input, setInput] = useState('')
  const[search, setSearch] = useState('')
  const[results, setResults] = useState([])

  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }
  const[cartItems, setCartItems] = useStickyState('')
  const[cartPrice, setCartPrice] = useState('')

  let numOfItems = cartItems.length
  
  let productsWomens = Object.entries(products.products.womens)
  let productsMens = Object.entries(products.products.mens)
  let productsAll = productsMens.concat(productsWomens)
  
  const handleSearchChange = (event) => {
    setInput(event.target.value)    
  }

  const getAppBarSearch = () => {
    setSearch(input)
  }

  useEffect(() => {
    const result = productsAll.filter(ele => ele[1].name.toLowerCase().indexOf(search.toLowerCase()) > 0)
    setResults(result)
  }, [search]) 

  const addToCart = (event) => {
    setCartItems([...cartItems, event])
    ToastsStore.error("Item added")
  }

  const clearCart = () => {
    setCartItems('')
    setCartPrice(0)
    ToastsStore.error("Cart cleared")
  }
  
  useEffect(() => {
    if (cartItems.length > 0) {
      setCartPrice(cartItems
        .map(items => items.price)
        .reduce((acc, curr) => acc + curr))
    }
  }, [cartItems]);

  return (
    <Grid container direction="column" >
      <Router>
        <Grid item>
          <MenuAppBar 
            handleSearchChange={handleSearchChange} 
            getAppBarSearch={getAppBarSearch} 
            numOfItems={numOfItems} 
            />  
        </Grid>  
        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
        <Switch>          
          <Route exact path='/'>
            <Grid item container>
              <Grid item xs={false} sm={2} />
              <Grid item xs={12} sm={8}>
                <Home />
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Route>
          
          <Route path='/mens' >
            <Grid item container>
              <Grid item xs={false} sm={2} />
              <Grid item xs={12} sm={8}>
                <Mens 
                  productsMens={productsMens}
                  addToCart={addToCart}
                  />
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Route>
          
          <Route path='/womens'>
            <Grid item container>
              <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                  <Womens 
                    productsWomens={productsWomens}
                    addToCart={addToCart}
                    />
                </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Route>  

          <Route path='/results'>
            <Grid item container>
              <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                  <Results results={results} addToCart={addToCart} />
                </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Route>  

          <Route path='/cart'>
            <Grid item container>
              <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                  <Cart 
                    cart={cartItems} 
                    cartPrice={cartPrice}
                    clearCart={clearCart}
                    />
                </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          </Route>  

        </Switch>

        <Grid item>
          <Footer />
        </Grid>
      </Router>
    </Grid>
  )
}

export default App;
