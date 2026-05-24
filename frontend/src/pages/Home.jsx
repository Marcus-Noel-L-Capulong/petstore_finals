import { Link } from 'react-router-dom';
import { Button, Typography, Container, Grid } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white overflow-hidden py-24 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            alt="Dogs playing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/80 to-transparent"></div>
        </div>
        <Container maxWidth="lg" className="relative">
          <div className="max-w-2xl">
            <Typography variant="h2" component="h1" className="font-extrabold tracking-tight mb-6 lg:text-6xl">
              Find Your New <span className="text-indigo-400">Best Friend</span>
            </Typography>
            <Typography variant="h6" className="text-indigo-100 mb-10 font-normal leading-relaxed">
              We connect loving families with adorable pets. From playful pups to cuddly kittens, 
              your perfect companion is waiting for you at PetStore.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button
                component={Link}
                to="/catalog"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PetsIcon />}
                className="!px-8 !py-3 !text-lg !rounded-full shadow-lg hover:shadow-indigo-500/50"
              >
                Browse Pets
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                className="!px-8 !py-3 !text-lg !rounded-full !border-2 hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-slate-50">
        <Container maxWidth="lg">
          <div className="text-center mb-16">
            <Typography variant="h3" className="font-bold text-slate-800 mb-4">
              Explore by Category
            </Typography>
            <Typography variant="h6" color="text.secondary" className="max-w-2xl mx-auto font-normal">
              Whether you're looking for scales, feathers, or fur, we have a wide variety of pets ready for their forever homes.
            </Typography>
          </div>
          
          <Grid container spacing={4}>
            {[
              { name: 'Dogs', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1' },
              { name: 'Cats', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba' },
              { name: 'Birds', image: 'https://images.unsplash.com/photo-1552728089-571ebd13eb3b' },
              { name: 'Reptiles', image: 'https://images.unsplash.com/photo-1517451330947-7809dead78d5' }
            ].map((category) => (
              <Grid item xs={12} sm={6} md={3} key={category.name}>
                <Link to={`/catalog?category=${category.name}`} className="block group relative rounded-2xl overflow-hidden aspect-square shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl">
                  <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Typography variant="h5" className="text-white font-bold tracking-wide">
                      {category.name}
                    </Typography>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
}
