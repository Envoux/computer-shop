import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const Layout: React.FC = (props) => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' noWrap component='div'>
            <Link href='http://localhost:3000/'>Sklep-komputerowy</Link>
          </Typography>
          <Typography variant='h6' textAlign='center' marginLeft={5}>
            <Link href='http://localhost:3000/komputer/dodaj'>
              Dodaj komputer
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};

export default Layout;
