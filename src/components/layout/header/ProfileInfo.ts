import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Status = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:before': {
    content: '""',
    height: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: theme.palette.success.main,
    display: 'inline-block',
    borderRadius: theme.spacing(999),
    marginRight: theme.spacing(1),
  },
}));

function Profileinfo({
  height,
  width,
  showGreetings = true,
  spacing = 3,
}: ProfileInfoProps) {
  



  
}

export interface ProfileInfoProps {
  height: number;
  width: number;
  spacing?: number;
  showGreetings?: boolean;
}

export default Profileinfo;
