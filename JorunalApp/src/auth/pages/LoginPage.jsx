import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <form>
          <Grid container>
            <Grid item sx={{ mt: 2 }} xs={12}>
              <TextField
                label="Correo"
                type="email"
                placeholder="tuemail@gmail.com"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Clave"
                type="password"
                placeholder="tu contraseña"
                fullWidth
              ></TextField>
            </Grid>

              <Grid container spacing="2" sx={{mb:2, mt:4}}>
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth>Login</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth>
                    <Google/><Typography>oogle</Typography>
                  </Button>
                </Grid>
              </Grid>
          </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>

        </form>
    </AuthLayout>

      
  );
};
