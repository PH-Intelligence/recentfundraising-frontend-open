import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DataGrid from '../components/DataGrid';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Home = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <Hero className="illustration-section-01" />
      <Container maxWidth="md">
        <Box sx={{
            '.MuiTablePagination-displayedRows': {
              'margin-top': '1em',
              'margin-bottom': '1em'
            },
            '.MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel': {
              'margin-top': '1em',
              'margin-bottom': '1em'
            }
            
            }}>
            <Typography variant="h4" component="h1" gutterBottom>
            </Typography>
            <DataGrid></DataGrid>
            {/* <BasicTable></BasicTable> */}
        </Box>
      </Container>
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
      </ThemeProvider>
    </>
  );
}

export default Home;