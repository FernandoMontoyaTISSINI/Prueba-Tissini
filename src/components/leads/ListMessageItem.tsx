import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { MessageI } from '../../core/interfaces/message.interface';
import { ClassNames } from '@emotion/react';

const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary,
}));


function ListMessageItem({ message }: ListMessageProps) {

return (
<Grid container spacing={2} className="message-row colorcard" mr={20} marginTop={5}>
  <Grid item xs={3}>
    <p><strong>Número de destino:</strong></p>
    {message.numDestino}

     {/* {message._id} {message.firstname} {message.lastname} */}
  </Grid>
  <Grid item xs={3}>
    
    <p><strong>Fecha y hora:</strong></p>
    {message.date}

   
  </Grid>
  <Grid item xs={6}>
  <p><strong>Mensaje:</strong></p>
  {message.mensaje}
  </Grid>
</Grid>
);
}
export interface ListMessageProps {
    message: MessageI;
}

export default ListMessageItem;