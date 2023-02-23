import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import Home from '@mui/icons-material/Home'
import CollectionsIcon from '@mui/icons-material/Collections'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

const ResponsiveAppBar = () => {
  const [userMenuState, setUserMenuState] = React.useState<null | HTMLElement>(
    null
  )
  const [drawerState, setDrawerState] = React.useState(false)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuState(event.currentTarget)
  }

  const handleClose = () => {
    setUserMenuState(null)
  }

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setDrawerState(open)
    }

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Image
            src="/icon.png"
            alt="Portfolio Icon"
            width={100}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home></Home>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="gallery" disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <CollectionsIcon></CollectionsIcon>
            </ListItemIcon>
            <ListItemText primary="Gallery" />
          </ListItemButton>
        </ListItem>
        <ListItem key="architecture" disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <ArchitectureIcon></ArchitectureIcon>
            </ListItemIcon>
            <ListItemText primary="Architecture" />
          </ListItemButton>
        </ListItem>
        <ListItem key="blog" disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <HistoryEduIcon></HistoryEduIcon>
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="about" disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <InfoIcon></InfoIcon>
            </ListItemIcon>
            <ListItemText primary="About me" />
          </ListItemButton>
        </ListItem>
        <ListItem key="contact" disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <ContactsIcon></ContactsIcon>
            </ListItemIcon>
            <ListItemText primary="Contact me" />
          </ListItemButton>
        </ListItem>
        <ListItem key="todo" disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <CheckIcon></CheckIcon>
            </ListItemIcon>
            <ListItemText primary="To-do list" />
          </ListItemButton>
        </ListItem>
        <ListItem key="change" disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <TrackChangesIcon></TrackChangesIcon>
            </ListItemIcon>
            <ListItemText primary="Change log" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App drawer */}
      <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          {/* Drawer button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {/* App Bar title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Andy Portfolio
          </Typography>
          {/* User Icon */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt="User" src="" />
          </IconButton>
          {/* User menu */}
          <Menu
            sx={{ mt: '48px' }}
            id="menu-appbar"
            anchorEl={userMenuState}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(userMenuState)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disabled>
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
              Sign in/Sign up
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
              Sign out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default ResponsiveAppBar
