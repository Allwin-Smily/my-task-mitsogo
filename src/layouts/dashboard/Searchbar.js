// material
import { IconButton, Typography } from '@mui/material';
// component
import Iconify from '../../components/Iconify';

export default function Searchbar() {
  return (
      <div>
          <IconButton>
            <Iconify icon="eva:search-fill" width={20} height={20} />
          </IconButton>
          <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
            Search transactions, invoices or help
          </Typography>
      </div>
  );
}
