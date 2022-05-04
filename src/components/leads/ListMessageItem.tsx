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
<Grid container spacing={2} className="message-row">
  <Grid item xs={8}>
     {message._id} {message.firstname} {message.lastname}
  </Grid>
  <Grid item xs={4}>
    <div>
    <Button variant="outlined">
     <FontAwesomeIcon icon={faEllipsisV} />Acciones</Button>
    <Button variant="contained">Crear Orden</Button> 
    </div>
    </Grid>
</Grid>
);
}
export interface ListMessageProps {
    message: MessageI;
}

export default ListMessageItem;