import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Paper, Typography, Container, Grid, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BoatItem from './components/BoatItem';
import BoatCard from './components/BoatCard';
import AddDialog from './components/AddDialog';
import EditDialog from './components/EditDialog';
import NoBoat from './components/NoBoat';
import ListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const BASE_URL = 'http://localhost:8080/boats';

export default function App() {
  const [boats, setBoats] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleSelect = (event, index) => {
    setSelectedIndex(index);
  }

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/${id}`)
      .then(response => {
        setBoats(boats => boats.filter(boat => boat.id !== id));
        setSelectedIndex(0);
      })
      .catch(error => {
        alert('Error deleting data');
      });
  }

  const handleAdd = (boat) => {
    axios.post(BASE_URL, boat)
      .then(response => {
        setBoats(boats => [...boats, response.data]);
        setSelectedIndex(boats.length);
        setOpenAdd(false);
      })
      .catch(error => {
        alert('Error adding data');
      });
  }

  const handleEdit = (boat) => {
    axios.put(`${BASE_URL}/${boat.id}`, boat)
      .then(response => {
        setBoats(boats => boats.map(b => b.id === boat.id ? boat : b));
        setOpenEdit(false);
      })
      .catch(error => {
        alert('Error editing data');
      });
  }

  /// add 3 boats
  const demo = async () => {
    const newBoats = [];
    for (let i = 1; i < 4; i++) {
      try {
        const response = await axios.post(BASE_URL, { name: `Boat ${i}`, description: `Boat ${i} description` });
        newBoats.push(response.data);

      } catch (error) {
        alert('Error adding data');
      }
    }

    setBoats(boats => [...boats, ...newBoats]);
    setSelectedIndex(boats.length);
  }


  useEffect(() => {
    axios.get(BASE_URL)
      .then(response => {
        setBoats(response.data);
      })
      .catch(error => {
        alert('Error fetching data');
      });
  }, []);

  return (
    <Container sx={{
      marginTop: 8,
      marginBottom: 8,
    }}>

      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', fontStyle: 'italic', color: '#1976D2' }}>
        Boats Manager
      </Typography>
      <AddDialog isOpen={openAdd} onAdd={handleAdd} onClose={() => setOpenAdd(false)} />
      {
        boats.length > 0 && <EditDialog key={selectedIndex} isOpen={openEdit} onClose={() => setOpenEdit(false)} onEdit={handleEdit} boat={boats[selectedIndex]} />
      }


      <Grid container  >
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Paper elevation={3} sx={{ padding: 2, margin: 5, minHeight: '500px' }}>

            <List sx={{ padding: 0, marginTop: 5, marginLeft: '15px', marginRight: '15px' }}>
              {boats.map((boat, index) => (
                <BoatItem key={index} boat={boat} selected={selectedIndex === index} handleClick={(event) => handleSelect(event, index)} handleDelete={(event) => handleDelete(boat.id)} />
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          {boats.length === 0 ? (
            <NoBoat />
          ) : (
            <BoatCard boat={boats[selectedIndex]} handleEditOpen={() => setOpenEdit(true)} />)}
          <Stack direction="row" spacing={3} sx={{
            ml: 5,
          }}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpenAdd(true)}>
              Add Boat
            </Button>
            <Button variant="contained" startIcon={<ListNumberedIcon />} onClick={demo}>
              Demo
            </Button>
          </Stack>

        </Grid>

      </Grid>

    </Container >
  );
}