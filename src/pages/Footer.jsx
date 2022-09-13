import { Box, Container, Grid } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
              {<br />}
                <Link to="/" color="inherit"></Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">
                Phone: +01932111976
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">Email :
                   mtrailers@nub.com
                </Link>
              </Box>
              <Box>
                <Link to="/" color="inherit">Address :
                House# 99, Apt# B2, Road# 4/25, Block# A, Dhaka 1213
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Follow Us</Box>
              <Box>
              {<br />}
                <Link to="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
              
                <Link to="/" color="inherit">
                  FAQ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>About Us</Box>
              <Box>
                {<br />}
              </Box>
              <Box>
                <Link to="/" color="inherit">
                  We are the Student of Northern University Bangladesh. This Website, Created For our Final Project.
                  {<br />}
                  {<br />}
                  Supervisor: Naznim Islam
                  {<br />}
                  {<br />}
                  Group Member:{<br/>} Shajib Hasan (Leader) ,
                  {<br/>}
                  Md.Adnan Chowdhury Aunkan , {<br/>}MD.Jubiyed Hasan Riyad , {<br/>} Sharmin Aktar Sumi .
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            mTraliars &copy; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
