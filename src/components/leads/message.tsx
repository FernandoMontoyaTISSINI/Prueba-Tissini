
import ListMessageItem from './ListMessageItem'
import { Alert } from '@mui/material';
import { Card } from '@mui/material';
import { MessageI } from '../../core/interfaces/message.interface';
function Message() {

let message:Array<MessageI> = [
  {
    numDestino: "+13474483190",
    date: "04/05/2022 11:38",
    mensaje: "Descarga TISSINI APP Aqui: http://onelink.to/tissiniapp",
  },
  {
    numDestino: "+13474483190",
    date: "04/05/2022 11:38",
    mensaje: "Descarga TISSINI APP Aqui: http://onelink.to/tissiniapp",
  },
  {
    numDestino: "+13474483190",
    date: "04/05/2022 11:38",
    mensaje: "Acceso Directo a tu oficina virtual: https://tissini.app/vwffgpHuOzzG9lEL Informacion solo para ti como Emprendedora TISSINI.",
  },
  {
    numDestino: "+13474483190",
    date: "04/05/2022 11:38",
    mensaje: "otro sms",
  },
  {
    numDestino: "+13474483190",
    date: "04/05/2022 11:38",
    mensaje: "Descarga TISSINI APP Aqui: http://onelink.to/tissiniapp",
  },
  {
    numDestino: "+13474483190",
    date: "04/05/2022 11:38",
    mensaje: "Descarga TISSINI APP Aqui: http://onelink.to/tissiniapp",
  },
  {
    numDestino: "+13474483190",
    date: "04/05/2022 11:38",
    mensaje: "Acceso Directo a tu oficina virtual: https://tissini.app/vwffgpHuOzzG9lEL Informacion solo para ti como Emprendedora TISSINI.",
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