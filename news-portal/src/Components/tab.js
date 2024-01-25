import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs({ value, onChange }) {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={onChange} centered>
        <Tab label="News" />
        <Tab label="Dashboard" />
        <Tab label="Profile" />
      </Tabs>
    </Box>
  );
}
