// material
import { IconButton, Typography, Hidden } from '@mui/material';
// component
import { IconSearch } from '../../components/Icons'

export default function Searchbar() {
  return (
      <div>
          <IconButton>
            <IconSearch />
          </IconButton>
          <Hidden mdDown>
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
              Search transactions, invoices or help
            </Typography>
          </Hidden>
      </div>
  );
}
