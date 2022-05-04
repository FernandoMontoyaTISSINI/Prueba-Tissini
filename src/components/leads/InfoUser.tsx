import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import dynamic from 'next/dynamic';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function Info() {

    return (
        <Box mt={10}>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                    <p>Fecha de creación</p> 
                    <p>3/11/2020 10:15 am</p> 
                </Grid>
                <Grid item xs={6}>
                <p>Customer ID</p>
                <p>884233</p>
                </Grid>
                <Grid item xs={6}>
                <p>Número de entidad</p>
                <p>101661</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p> Nombres </p>
                <p>Sabryna </p>
                </Grid>
                <Grid item xs={6}>
                <p>Apellidos ID</p>
                <p>Scully</p>
                </Grid>
                <Grid item xs={6}>
                <p>Tipo de compra</p>
                <p>PERSONAL</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Asesor </p>
                <p>Fernando Delgado </p>
                </Grid>
                <Grid item xs={6}>
                <p>¿Cómo se enteró de nuestras campañas? ID</p>
                <p>Moda Dulce - Amazon</p>
                </Grid>
                <Grid item xs={6}>
                <p>Nombre de la compañía</p>
                    
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Referida por</p> 
                    <p><u>43577 Silvia Rivera</u> </p>
                </Grid>
                <Grid item xs={6}>
                    <p>Resultado de contacto</p>
                    <p>Hay interés</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Sueño de la emprendedora</p>
                    
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Correo electrónico</p>
                <p>sabrynaLopez@gmail.com </p>
                </Grid>
                <Grid item xs={6}>
                    <p>Teléfono celular</p>
                    <p>347-448-3190</p>
                </Grid>
                <Grid item xs={6}>
                <p>Teléfono fijo</p>
                    
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Zona horaria</p>
                <p>412 Pennsylvania EST </p>
                </Grid>
                <Grid item xs={6}>
                <p>Nacionalidad</p>
                <p>Mexico</p>
                </Grid>
            </Grid>
            <h2>Metas de la emprendedora</h2>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Mes actual</p>
                <p>0.00 </p>
                </Grid>
                <Grid item xs={6}>
                <p>Mes anterior</p>
                <p>0.00</p>
                </Grid>
                <Grid item xs={6}>
                <p>Hace dos meses</p>
                <p>0.00</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Hace tres meses</p>
                <p>46.59 </p>
                </Grid>
                <Grid item xs={6}>
                <p>Total acumulado en los meses</p>
                    <p>46.59</p>
                </Grid>
            </Grid>
            <h2>
            <p>Tissini App</p>
            </h2>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Tissini App Token</p>
                <p><strong>vwffgpHuOzzG9lEL</strong></p> 
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Devoluciones Tissini App" />
                        <FormControlLabel style={{borderColor:'thistle'}} disabled control={<Checkbox />} label="Desactivar restricción venta estado" />
                        
  
                    </FormGroup>
                </Grid>
            </Grid>
            <h2>Clasificación</h2>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Fecha de cumpleaños</p>
                </Grid>
                <Grid item xs={6}>
                <p>Rango de edad</p>
                    
                </Grid>
                <Grid item xs={6}>
                <p>Nombre del primer hijo</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Fecha de nacimiento del primer hijo</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Nombre del segundo hijo</p>
                    
                </Grid>
                <Grid item xs={6}>
                <p>Fecha de nacimiento del segundo hijo</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>¿En qué trabajas?</p>
                </Grid>
            </Grid>
            <h2>Redes sociales</h2>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Instagram</p>
                <p><strong>F</strong></p>
                </Grid>
                <Grid item xs={6}>
                <p>Twitter</p>
                <p><strong>twitter</strong></p>
                    
                </Grid>
                <Grid item xs={6}>
                <p>Pinteres</p>
                    
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Facebook</p>
                    
                </Grid>
            </Grid>

            <h2>Financial</h2>
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <p>Balance</p>
                <p>0.00</p>
                </Grid>
            </Grid>

        </Box>






    );

}

export default Info;