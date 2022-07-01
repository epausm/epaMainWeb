//Courses offered for each semesters
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { useState, useEffect } from "react";
//import Button from 'react-bootstrap/Button';

function createData(name, calories, carbs, protein) {
  return { name, calories, carbs, protein };
}

const rows = [
  createData('Year 1','Update' , 'Delete'),
  createData('Year 2','Update' , 'Delete'),
  createData('Year 3','Update' , 'Delete'),
  createData('Year 4', 'Update' , 'Delete'),
];



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [newName, setNewName] = useState("");
  const [newCode, setNewCode] = useState(0);

  const [course, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "course");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { coursename: newName, coursecode: newCode });
  };

  const updateUser = async (id, coursecode) => {
    const userDoc = doc(db, "course", id);
    const newFields = { coursecode: setNewCode };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "course", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  //
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ePenasihat Akademik
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <nav aria-label="main mailbox folders">
        <List>
          <Link underline='none' href='/dashboard'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="General Information" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link underline='none' href='/course'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ImportContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Course" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link underline='none' href='/advisor'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary="Advisor" />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
        <List>
          <Link underline='none' href='/logout'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
        </nav>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/dashboard">
                Dashboard
            </Link>
        <Typography color="text.primary">Course</Typography>
            <Link underline="hover" color="inherit" href="/advisor">
                Advisor
            </Link>
        </Breadcrumbs>
        
        <Typography paragraph>
          List of Courses
        </Typography>

        <Stack spacing={2} direction="row">
          <Button variant="contained" align="left" startIcon={<AddIcon />}>Add</Button>
        </Stack>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="center">Course Code</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {course.map((row) => (
            <TableRow
              key={row.coursename}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.coursename}
              </TableCell>
              <TableCell align="center">{row.coursecode}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <EditIcon onClick={() => {
                updateUser(row.id, row.coursecode);
              }}>
                  </EditIcon>
                </IconButton>
              </TableCell>
              {/*<TableCell align="right"><Button variant="warning" onClick={() => {
                updateUser(user.id, user.coursecode);
              }}>Update</Button></TableCell>*/}
              <TableCell align="right">
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => {
                deleteUser(row.id);
              }}>
                  </DeleteIcon>
                </IconButton>
              </TableCell>

              {/*<TableCell align="right"><Button variant="danger" onClick={() => {
                deleteUser(user.id);
              }}>Delete</Button></TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Main>
    </Box>
  );
}

