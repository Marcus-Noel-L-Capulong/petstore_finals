import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Grid, Typography, CircularProgress, Box, Tabs, Tab } from '@mui/material';
import PetCard from '../components/PetCard';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [pets, setPets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories([{ id: null, name: 'All' }, ...response.data]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        let url = 'http://localhost:8080/api/pets';
        const categoryObj = categories.find(c => c.name === selectedCategory);
        if (categoryObj && categoryObj.id) {
          url += `?categoryId=${categoryObj.id}`;
        }
        const response = await axios.get(url);
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (categories.length > 0) {
      fetchPets();
    }
  }, [selectedCategory, categories]);

  const handleTabChange = (event, newValue) => {
    setSelectedCategory(newValue);
    if (newValue === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', newValue);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <Container maxWidth="lg">
        <div className="mb-10 text-center">
          <Typography variant="h3" component="h1" className="font-bold text-slate-800 mb-4">
            Our Pets
          </Typography>
          <Typography variant="h6" color="text.secondary" className="max-w-2xl mx-auto font-normal">
            Browse our selection of adorable animals waiting for a loving home.
          </Typography>
        </div>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }} className="flex justify-center">
          <Tabs 
            value={selectedCategory} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {categories.map((category) => (
              <Tab 
                key={category.name} 
                label={category.name} 
                value={category.name}
                className="font-semibold text-base !px-6" 
              />
            ))}
          </Tabs>
        </Box>

        {loading ? (
          <div className="flex justify-center py-20">
            <CircularProgress size={60} />
          </div>
        ) : pets.length > 0 ? (
          <Grid container spacing={4}>
            {pets.map((pet) => (
              <Grid item key={pet.id} xs={12} sm={6} md={4}>
                <PetCard pet={pet} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <Typography variant="h5" color="text.secondary">
              No pets found in this category.
            </Typography>
          </div>
        )}
      </Container>
    </div>
  );
}
