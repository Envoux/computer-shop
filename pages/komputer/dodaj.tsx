import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';

const AddComputer = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      cpu: '',
      ram: '',
    },
    onSubmit: (values) => {
      const computer = {
        name: values.name,
        description: values.description,
        price: values.price,
        details: {
          cpu: values?.cpu,
          ram: values?.ram,
        },
      };
      axios.post('http://localhost:3000/api/computer/', computer, {
        headers: { 'Content-Type': 'application/json' },
      });
    },
  });
  return (
    <div style={{ width: 600, margin: '50px auto' }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            Nazwa:
          </Grid>
          <Grid item xs={8}>
            <TextField
              name='name'
              variant='standard'
              placeholder='Asus'
              type='text'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={4}>
            Opis:
          </Grid>
          <Grid item xs={8}>
            <TextField
              name='description'
              variant='standard'
              placeholder='Laptop do gier'
              type='text'
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={4}>
            Cena:
          </Grid>
          <Grid item xs={8}>
            <TextField
              name='price'
              variant='standard'
              placeholder='1000'
              type='number'
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={4}>
            Procesor:
          </Grid>
          <Grid item xs={8}>
            <TextField
              name='cpu'
              variant='standard'
              placeholder='2.4'
              type='text'
              value={formik.values.cpu}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={4}>
            Ram:
          </Grid>
          <Grid item xs={8}>
            <TextField
              name='ram'
              variant='standard'
              placeholder='8'
              type='number'
              value={formik.values.ram}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <Button variant='contained' type='submit'>
              Dodaj
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddComputer;
