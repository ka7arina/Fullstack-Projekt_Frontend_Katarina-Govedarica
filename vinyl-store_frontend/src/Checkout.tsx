import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppBar from './Components/AppBar/AppBar';

interface FormState {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  postcode: string;
  phone: string;
  city: string;
  country: string;
}

interface FormErrors {
  address?: string;
  firstname?: string;
  email?: string;
  lastname?: string;
  postcode?: string;
  phone?: string;
  city?: string;
  country?: string;
}

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ firstname: '', email: '', lastname: '', address:'', postcode: '', phone: '', city: '', country: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validate = () => {
    let errors: FormErrors = {};

    if (!formData.firstname) {
      errors.firstname = 'Firstname is required';
    }

    if (!formData.lastname) {
      errors.lastname = 'Lastname is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.address) {
      errors.address = 'Address is required';
    }

    if (!formData.postcode) {
      errors.postcode = 'Postcode is required';
    } else if (formData.postcode.length > 4) {
      errors.postcode = 'Postcode is invalid';
    }

    if (!formData.city) {
      errors.city = 'City is required';
    }

    if (!formData.country) {
      errors.country = 'Country is required';
    }

    if (!formData.phone) {
      errors.phone = 'Phone is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <AppBar />
      <Card sx={{ width: '50%', marginTop: 5, marginLeft: 5, padding: 2 }}>
        <CardContent>
          <Typography variant="h5">Personal Details</Typography>
          <form onSubmit={handleSubmit}>
            <div>
              <br></br>
              <label htmlFor="firstname"><Typography variant="body1">Firstname:</Typography></label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                style={{ marginLeft: '10px', padding: '5px' }} 
              />
              {formErrors.firstname && <p style={{ color: 'red' }}>{formErrors.firstname}</p>}
            </div>

            <div style={{ marginTop: '15px' }}>
              <label htmlFor="lastname"> <Typography variant="body1">Lastname:</Typography></label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                style={{ marginLeft: '10px', padding: '5px' }} 
              />
              {formErrors.lastname && <p style={{ color: 'red' }}>{formErrors.lastname}</p>}
            </div>

            <div style={{ marginTop: '15px' }}>
              <label htmlFor="email"> <Typography variant="body1">Email:</Typography></label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                style={{ marginLeft: '10px', padding: '5px' }} 
              />
              {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
            </div>

            <div style={{ marginTop: '15px' }}>
              <label htmlFor="phone"> <Typography variant="body1">Phone:</Typography></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                style={{ marginLeft: '10px', padding: '5px' }} 
              />
              {formErrors.phone && <p style={{ color: 'red' }}>{formErrors.phone}</p>}
            </div>

            <div style={{ marginTop: '15px' }}>
              <label htmlFor="address"> <Typography variant="body1">Address:</Typography></label>
              <input
                id="address"
                name="address"
                type="address"
                value={formData.address}
                onChange={handleChange}
                style={{ marginLeft: '10px', padding: '5px' }} 
              />
              {formErrors.address && <p style={{ color: 'red' }}>{formErrors.address}</p>}
            </div>

            <div style={{ marginTop: '15px' }}>
              <label htmlFor="postcode"> <Typography variant="body1">Postcode:</Typography></label>
              <input
                id="postcode"
                name="postcode"
                type="text"
                value={formData.postcode}
                onChange={handleChange}
                style={{ marginLeft: '10px', padding: '5px' }} 
              />
              {formErrors.postcode && <p style={{ color: 'red' }}>{formErrors.postcode}</p>}
            </div>

            <div style={{ marginTop: '15px' }}>
              <label htmlFor="city"> <Typography variant="body1">City:</Typography></label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                style={{ marginLeft: '10px', padding: '5px' }} 
              />
              {formErrors.city && <p style={{ color: 'red' }}>{formErrors.city}</p>}
            </div>

            <div style={{ marginTop: '15px' }}>
              <label htmlFor="country"> <Typography variant="body1">Country:</Typography></label>
              <input
                id="country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                style={{ marginLeft: '10px', padding: '5px' }} 
              />
              {formErrors.country && <p style={{ color: 'red' }}>{formErrors.country}</p>}
            </div>

            <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
              Submit
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutForm;
