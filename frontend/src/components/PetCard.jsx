import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';

export default function PetCard({ pet }) {
  return (
    <Card className="h-full flex flex-col group transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden aspect-[4/3]">
        <CardMedia
          component="img"
          image={pet.imageUrl || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1'}
          alt={pet.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Chip label={pet.category?.name || 'Unknown'} color="primary" size="small" className="shadow-sm backdrop-blur-md bg-white/90 text-indigo-700 font-semibold" />
        </div>
      </div>
      <CardContent className="flex-grow flex flex-col p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Typography variant="h5" component="div" className="font-bold text-slate-800">
              {pet.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="font-medium">
              {pet.breed} • {pet.age} months old
            </Typography>
          </div>
          <Typography variant="h6" className="font-bold text-indigo-600">
            ${pet.price}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary" className="mt-4 mb-6 line-clamp-2">
          {pet.description}
        </Typography>
        <Box className="mt-auto">
          <Button variant="contained" color="primary" fullWidth className="shadow-md hover:shadow-lg !py-2.5">
            Adopt {pet.name}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
