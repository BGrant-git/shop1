import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  root: {
    width: '110',
		borderRadius: 0,
		margin: '5px 5px'
  },
  media: {
    height: 350,
	},
	btn: {
    backgroundColor: "lightGrey",
    color: 'black',
    '&:hover': {
      color:'white'
    }
	}
});

const MensClothesItem = ({ element, addToCart }) => {
  const classes = useStyles();

  // creat logic for tags
  
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={element.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {element.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p" >
            {element.description}
					</Typography>
					<Typography variant="body2" color="textPrimary" component="p">
						£{element.price}<br />
						Tags: {element.tags}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
				<Button 
					className={classes.btn}
					size="small" 
					color="primary"
          onClick={() => {addToCart(element)}}
          variant='contained'
          >
          <ShoppingCartIcon />
        </Button>
        <Button 
					className={classes.btn}
					size="small" 
          color="primary"
          variant='contained'
          >
          <ShareIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default MensClothesItem