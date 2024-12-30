import { Box, Button, Card, CardContent, CardMedia, Container, Fab, FormControl, Input, Paper, Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';

const Login: FC = () => {

    return (
        <Stack
            direction='row'
            spacing={2}
            sx={{
                height: '100%',
                margin: 'auto',
                padding: '2rem 5rem'
            }}
        >
            <Box
                sx={{
                    border: '1px solid #d0d0d0',
                    width: '50%',
                    height: '100%',
                    padding: '3rem',
                    borderRadius: '30px'
                }}
            >
                <Typography variant='h5' color='#4f3a99' fontWeight='750'>
                    Inicia sesión <br />
                    Con tu cuenta <br />
                    Inicia sesión
                </Typography>

                <TextField variant='filled' margin='normal' label='Usuario' fullWidth />
                <TextField variant='filled' margin='normal' label='Contraseña' fullWidth type='password' />

                <Button variant='contained' sx={{ margin: 'auto', display: 'block', backgroundColor: '#80FF81', color: '#4f3a99', fontWeight: 'bolder' }}> Iniciar Sesión </Button>
            </Box>

            <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
                sx={{
                    border: '1px solid #d0d0d0',
                    padding: '3rem',
                    borderRadius: '30px',
                    backgroundColor: '#7E4CEA'
                }}
            >
                <Box
                    component='img'
                    src='https://tiendasalitremagico.com.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin-nobg.1f9cbdc9.png&w=256&q=75'
                    width='50%'
                    maxWidth='250px'
                />

                <Stack>
                    <Typography variant='h6' color='white' fontWeight='bolder' margin='10px 0px'> Inicia sesión para acceder a tu portal. </Typography>
                    <Typography variant='h6' color='white' fontWeight='bolder'> Aquí también podrás descargar tus códigos QR y las facturas de tus compras. </Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default Login;