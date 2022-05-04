
import ListMessageItem from './ListMessageItem'
import { Alert } from '@mui/material';
import { Card } from '@mui/material';
import { MessageI } from '../../core/interfaces/message.interface';
function Message() {

let message:Array<MessageI> = [
  {
    _id:57457,
    firstname: "Alejandra",
    lastname: "Palacios Hernandez",
    },
    {
    _id:57457,
    firstname: "Alejandra",
    lastname: "Palacios Hernandez",
    },
    {
    _id:57457,
    firstname: "Alejandra",
    lastname: "Palacios Hernandez",
    },
    {
    _id:57457,
    firstname: "Alen ",
    lastname: "Rojas Perez",
    },
    {
    _id:57457,
    firstname: "Alba ",
    lastname: "Mercado Lucero",
    }
  ];


  const dataLength = (message) ? message.length : 0;

  return (
  <>
  <Card variant="outlined">
    {dataLength > 0 ? (


    message.map((messageI: MessageI) => (
    <ListMessageItem message={messageI}/>
    ))


    ) : (
    <Alert variant="filled" severity="info">No se encontraron resultados — Realiza nueva búsqueda!</Alert>

    )}
</Card>
  </>
  );
  }

  export default Message;