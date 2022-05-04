
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import MessageMain from '../leads/MessageMain'
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Direcciones" {...a11yProps(0)} />
                    <Tab label="Llamadas" {...a11yProps(1)} />
                    <Tab label="Mensajes de texto" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div>
                    <Button variant="outlined" startIcon={<AddIcon />}>
                        Agregar dirección
                    </Button>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="La dirección por defecto es un Walgreens" />
                    </FormGroup>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={6}>
                            <Box>
                            <p><strong>Dirección Principal</strong></p> 
                            <p>Katy Fwy Harris County TX 7895</p>
                            <p><u>Editar dirección</u> </p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                            <p><strong>Dirección 2</strong> </p>
                            <p>1015 BALSAM DR Hastings MI 49058</p>
                            <p><u>Editar dirección</u> </p>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box>
                            <p><strong>Dirección 3</strong> </p>
                            <p>Main St Summit County UT 84060</p>
                            <p><u>Editar dirección</u> </p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                            <p><strong>Dirección 4</strong> </p>
                            <p>Astor Pl New York County NY 10003</p>
                            <p><u>Editar dirección</u> </p>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                    <Button variant="outlined" startIcon={<AddIcon />}>
                        <p>Agregar llamada</p>
                    </Button>
                    <Box>
                        
                    <p><strong> Asunto:</strong> Asunto</p>
                        
                        <Grid container spacing={2} columns={20}>
                            <Grid item xs={4}>
                            <p><strong>Número de contacto:</strong></p>
                            <p>3474483190</p>
                            </Grid>
                            <Grid item xs={4}>
                            <p><strong>Fecha:</strong></p>
                            <p>2022-04-07</p>
                            </Grid>
                            <Grid item xs={4}>
                            <p><strong>Estado:</strong> </p>
                            <p>Programado</p>
                            </Grid>
                            <Grid item xs={4}>
                            <p><strong> Organizada por:</strong></p>
                            <p>Fernando Delgado</p>
                            </Grid>
                            <Grid item xs={4}>
                            <p>Editar llamada</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        
                            <p><strong> Asunto:</strong> Aedfsdfdsf</p>
                        
                        <Grid container spacing={2} columns={20}>
                            <Grid item xs={4}>
                            <p><strong>Número de contacto:</strong></p> 
                            <p>3474483190</p>
                            </Grid>
                            <Grid item xs={4}>
                            <p><strong>Fecha:</strong></p>
                            <p>2022-04-08</p>
                            </Grid>
                            <Grid item xs={4}>
                            <p><strong>Estado:</strong> </p>
                            <p>Programado</p>
                            </Grid>
                            <Grid item xs={4}>
                            <p><strong> Organizada por:</strong></p>
                            <p>Fernando Delgado</p>
                            </Grid>
                            <Grid item xs={4}>
                            <p>Editar llamada</p>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <MessageMain/>
            </TabPanel>
        </Box>
    );
}