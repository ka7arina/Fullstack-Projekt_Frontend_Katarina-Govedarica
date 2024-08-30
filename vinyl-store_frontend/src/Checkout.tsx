import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, TextField, Typography } from '@mui/material';
import AppBar from './Components/AppBar/AppBar';


const Checkout: React.FC = () => {

  return (
    <div>
           <AppBar />
    <Card sx={{ display: 'flex', width: '50%', marginTop: 5, marginLeft: 5}}>
        <CardContent>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <form>
      <Typography variant="h5"> Personal Details</Typography><br></br>
      <label><TextField required id="outlined-basic" label="Firstname" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField required id="outlined-basic" label="Lastname" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField required id="outlined-basic" label="Password" type="password" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField id="outlined-basic" label="Telephone" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField required id="outlined-basic" label="Address" variant="outlined"/>
      </label><br></br><br></br>
      <label> <TextField required id="outlined-basic" label="Postcode" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField required id="outlined-basic" label="City" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField required id="outlined-basic" label="Country" variant="outlined"/>
      </label><br></br><br></br>
      <Typography variant="h5"> Payment</Typography><br></br>
      <label><TextField required id="outlined-basic" label="Card Number" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField required id="outlined-basic" label="Expiry Date" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField required id="outlined-basic" label="CVV" type="password" variant="outlined"/>
      </label><br></br><br></br>
      <label><TextField id="outlined-basic" label="Name on Card" variant="outlined"/>
      </label><br></br><br></br>

      <input type="submit" value="Submit"></input>
      </form>
    </Box>
    </CardContent>
    </Card>
    <Card><CardContent>
      </CardContent></Card>
    </div>
  );
};

export default Checkout;