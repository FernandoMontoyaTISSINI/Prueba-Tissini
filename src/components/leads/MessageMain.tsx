import Message from './message';
import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
function MessageMain() {




  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />}>
      Crear nuevo mensaje
      </Button>

      <Message />
    </>
  );
}

export default MessageMain;