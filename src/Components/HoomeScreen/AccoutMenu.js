import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import Button from "@mui/material/Button";
// import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
// import { MenuList } from '@mui/material';
// import Fade from '@mui/material/Fade';
import hacker from "../images/hacker.png";
import { useNavigate } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const [anchorOriginVertical, setanchorOriginVertical] = React.useState(null);
  // const click = Boolean(anchorOriginVertical);

  let Navigate = useNavigate();
  const settingsPage = () => {
    Navigate("/Settings");
  };

  const logIn = () => {
    Navigate("/Login");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleOpenMenu = (event) => {
  //     setanchorOriginVertical(event.currentTarget)
  // };

  // const handleMenuClose = e => {
  //     setanchorOriginVertical(null);
  // };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              src={hacker}
              sx={{ width: 32, height: 32, background: "blue" }}
            >
              A
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(125,125,125,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SavedSearchIcon fontSize="small" />
          </ListItemIcon>
          Saved
        </MenuItem>
        <MenuItem>
          <Button variant="text" onClick={settingsPage}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </Button>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SwitchAccountIcon fontSize="small" />
          </ListItemIcon>
          Switch Accounts
        </MenuItem>
        <Divider />
        <MenuItem>
          <Button variant="text" onClick={logIn}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
