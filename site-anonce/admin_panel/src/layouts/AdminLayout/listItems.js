import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { Link, useLocation  } from "react-router-dom";

export function MainListItems () {
  const location = useLocation();
 
  return (
  <React.Fragment>
    <ListItemButton  component={Link} selected={location.pathname === '/admin'} to="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton   component={Link} selected={location.pathname === '/admin/marques'} to="/admin/marques">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Marques" />
    </ListItemButton>

   

   
    
  </React.Fragment>
)};

export const secondaryListItems = (
  <React.Fragment>
    
  </React.Fragment>
);