// material
import { Grid, Stack, Button, Container, Typography } from '@mui/material';
import Iconify from '../components/Iconify';
import AppReferreTableList from '../components/app-dashboard/AppReferreTableList';
import AppStatistics from '../components/app-dashboard/AppStatistics';
import AppSalesGraph from '../components/app-dashboard/AppSalesGraph';
import AppProfileView from '../components/app-dashboard/AppProfileView';
import AppProductVideo from '../components/app-dashboard/AppProductVideo';

export default function DashboardApp() {
  return (
    <div>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Button
            variant="contained"
            endIcon={<Iconify icon="eva:plus-fill" />}
            sx={{ backgroundColor: '#6763E3'}}
          >
            Add Funds
          </Button>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <AppStatistics />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppSalesGraph />
              </Grid>
              <Grid item xs={12}>
                <AppReferreTableList />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                <AppProfileView />
              </Grid>
              <Grid item xs={12}>
                <AppProductVideo />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
