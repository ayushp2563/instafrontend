import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ChngPass from './changePass';
import ChnProfile from './changeProfile';
import { Box, styled } from '@mui/material';
import NavBar from './NavBar';


const StyleWrapper = styled(Box)((theme) => ({
  "& .drawerPaper": { width: 'inherit' },
  "& .link": {
    textDecoration: 'none',
    color: "red"
  }
}))

export default function Settings() {
  const [clickItem, setClickItem] = useState("changeprofile")
  // const classes = useStyles();
  return (
    <>
    
    <StyleWrapper sx={{mt:8}}>
      {/* <Router> */}
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px'}}
          variant="persistent"
          anchor="left"
          open={true}
          classes="drawerPaper"
        >
        <NavBar />
          <List sx={{mt:8}} >
            {/* <Link to="/" className="link"> */}
            <ListItem button onClick={() => setClickItem('changeprofile')}>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary={"Change Profile"} />
            </ListItem>
            {/* </Link> */}
            {/* <Link to="/about" className="link"> */}
            <ListItem button onClick={() => setClickItem('changepassword')}>
              <ListItemIcon>
                <ChangeCircleIcon />
              </ListItemIcon>
              <ListItemText primary={"Change Password"} />
            </ListItem>
            {/* </Link> */}
          </List>
        </Drawer>
        {clickItem === "changeprofile" ? (
          <ChnProfile />
        ) : clickItem === 'changepassword' ? (
          <ChngPass />
        ) : null}
        {/* <Routes>
          <Route exact path="/">
            <Container>
              <ChnProfile/>
            </Container>
          </Route>
          <Route exact path="/chnpass">
            <Container>
             <ChnPass/>
            </Container>
          </Route>
        </Routes> */}
     </div> 
    </StyleWrapper>
    </>
  );
}

