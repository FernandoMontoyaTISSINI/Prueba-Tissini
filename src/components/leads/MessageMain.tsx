import Message from './message';
import {TextField,Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function MessageMain() {




return (
<>
  <h1>Mis emprendedoras Tissini</h1>
  <Box component="form" sx={{ display: 'flex', alignItems: 'flex-end',
        '& > :not(style)': { mb: 5, width: '100%', background:'#fff'  },
      }} noValidate autoComplete="off">
    <TextField id="outlined-basic" margin="normal" label="Buscar emprendedoras" variant="outlined"  />
  </Box>
  <Message />
</>
);
}

export default MessageMain;