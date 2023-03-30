import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import  colors  from 'assets/theme/base/colors';
import borders from 'assets/theme/base/borders';
const ProductCard = () => {
  return (
    <Card
        sx={{
            backgroundColor:"transparent !important",
            border: `1px solid ${colors.dark.main}`,
            borderRadius: borders.borderRadius.lg,
        }}

    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="images/bugatti.jpeg"
          alt="green iguana"
        />
        <CardContent
            sx={{
                backgroundColor:"transparent !important"
            }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Sample Product
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.
          </Typography>

          {/* button */}
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "transparent !important",
                    boxShadow: "none !important",
                    color: colors.text.primary,
                    borderRadius: borders.borderRadius.lg,
                    border: `1px solid white`,
                    width: "100%",
                    marginTop: "1rem",
                    "&:hover": {
                        backgroundColor: colors.dark.focus,
                    },
                }}
            >
                View Details
            </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;