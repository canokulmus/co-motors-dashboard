import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DashboardLayout from "pageLayouts/DashboardLayout";
import ProductCard from "components/Card";

const Products = () => {

  return (
    <DashboardLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl = {3}>
            <ProductCard />
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Products;
