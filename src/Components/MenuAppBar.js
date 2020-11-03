import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Button, Badge } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  root: {
		flexGrow: 1,
		marginBottom: 66
  },
  menuButton: {
    marginRight: theme.spacing(2),
	},
  title: {
		flexGrow: 1,
		marginRight: '5px'
	},
	btns: {
		margin: '5px'
	},
	cartBtn: {		
		color: 'white',
		textDecoration: 'none',
	},
	link: {
		color: 'inherit',
		textDecoration: 'none',
		"&.active": {
			borderBottom: '3px solid #fff'
		},
	},
	search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
	},
	searchBtn: {
		color: 'white',
		marginRight: -10,
		marginTop: 4
	},
  inputRoot: {
		color: 'inherit',
		width: '20vh'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
	},
	cartLink: {
			color: 'inherit',
			textDecoration: 'none',
			borderRadius: 30,
			'&.active': {
				border: '2px solid white'
			}
	}
}));

const MenuAppBar = ({ handleSearchChange, getAppBarSearch, numOfItems }) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const history = useHistory()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
	}

	const handleEnter = (e) => {
		history.push('/results')
		getAppBarSearch()
		e.preventDefault()
	}

  return (
    <div className={classes.root}>
      <AppBar color='primary'>
        <Toolbar>

          <Typography variant="h4" className={classes.title}>
						<Link className={classes.link} to='/'>SHOP</Link>
          </Typography>

					<IconButton 
						onClick={() => {
							getAppBarSearch()
						}}
					>
						<NavLink to='/results'>
							<SearchIcon className={classes.searchBtn} />
						</NavLink>
					</IconButton>

          <div className={classes.search}>
						<form onSubmit={handleEnter}>
            <InputBase
							
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
							inputProps={{ 'aria-label': 'search' }}
							onChange={handleSearchChange}
            />
						</form>
          </div>
           
          
					{isMobile ? (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}
							>
								<NavLink className={classes.link} to='/mens'>
									<MenuItem onClick={handleClose}>
										MEN'S
									</MenuItem>
								</NavLink>
								<NavLink className={classes.link} to='/womens'>
									<MenuItem onClick={handleClose}>
										WOMEN'S
									</MenuItem>
								</NavLink>
							</Menu>
						</div>  
							)
						: (
							<>
							<NavLink className={classes.link} to='/mens'>
								<Button 
									className={classes.btns} 
									variant='contained' color='primary'>
										Men's
								</Button>   
							</NavLink>     
							<NavLink className={classes.link} to='/womens'>
								<Button 
									className={classes.btns} 
									variant='contained' color='primary'>
										Women's
								</Button>   
							</NavLink> 
							</>
						)
					}
					<NavLink to='/cart' className={classes.cartLink}>
						<IconButton  aria-label="shopping cart">
							<Badge 
								badgeContent={numOfItems} 
								color="secondary"
								className={classes.badge}
								>
								<ShoppingCartIcon className={classes.cartBtn} />
							</Badge>
						</IconButton>
					</NavLink>  
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;