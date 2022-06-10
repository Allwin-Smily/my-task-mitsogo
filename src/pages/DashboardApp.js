import React, { Suspense } from 'react';
// material
import { Grid, Stack, Button, Container, Hidden, Typography } from '@mui/material';
import AppReferreTableList from '../components/app-dashboard/AppReferreTableList';
import AppProfileView from '../components/app-dashboard/AppProfileView';
import AppProductVideo from '../components/app-dashboard/AppProductVideo';
import AddIcon from '@mui/icons-material/Add';

const AppStatistics = React.lazy(() => import('../components/app-dashboard/AppStatistics'));
const AppSalesGraph = React.lazy(() => import('../components/app-dashboard/AppSalesGraph'));

export default function DashboardApp() {

  const desktopLayout = (
    <>
      <Grid item xs={12} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
          <Suspense fallback={<div>Loading ... </div>}>
            <AppStatistics />
          </Suspense>
          </Grid>
          <Grid item xs={12} md={6}>
            <Suspense fallback={<div>Loading ... </div>}>
              <AppSalesGraph />
            </Suspense>
          </Grid>
          <Grid item xs={12}>
            <AppReferreTableList />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppProfileView />
          </Grid>
          <Grid item xs={12}>
            <AppProductVideo />
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  const mobileLayout = (
    <>
      <Grid item xs={12}>
        <AppProfileView />
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<div>Loading ... </div>}>
          <AppStatistics />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<div>Loading ... </div>}>
          <AppSalesGraph />
        </Suspense>
      </Grid>
      <Grid item xs={12}>
        <AppReferreTableList />
      </Grid>
      <Grid item xs={12}>
        <AppProductVideo />
      </Grid>
    </>
  );

  return (
    <div style={{ marginTop: '65px'}}>
      <Container maxWidth="xl"
        sx={{
          width: '100%',
          padding: 0,
          '& .MuiDrawer-paper': {
            marginBottom: '25px'
          }
        }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            sx={{ backgroundColor: '#6763E3' }}
          >
            Add Funds
          </Button>
        </Stack>
        <Grid container spacing={3} sx={{width: '100% !important'}}>
          <Hidden mdDown>
            {desktopLayout}
          </Hidden>
          <Hidden mdUp>
            {mobileLayout}
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}
