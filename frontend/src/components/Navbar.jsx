import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1} className="!bg-white/80 !backdrop-blur-md">
      <Toolbar className="max-w-7xl w-full mx-auto px-4 flex justify-between">
        <Link to="/" className="flex items-center text-indigo-600 no-underline gap-2">
          <PetsIcon fontSize="large" />
          <Typography variant="h6" className="font-bold tracking-tight">
            PetStore
          </Typography>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium no-underline transition-colors">
            Home
          </Link>
          <Link to="/catalog" className="text-slate-600 hover:text-indigo-600 font-medium no-underline transition-colors">
            Catalog
          </Link>
          
          <div className="h-6 w-px bg-slate-200"></div>
          
          <IconButton color="primary">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
