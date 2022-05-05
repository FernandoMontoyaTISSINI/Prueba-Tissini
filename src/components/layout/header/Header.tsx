import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Tissini from '../../../assets/icons/Tissini';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import dynamic from 'next/dynamic';

const Container = styled(AppBar)(({ theme }) => {
  
  return {
    backgroundColor: theme.palette.neutrals.white,
      justifyContent: 'center',
        position: 'fixed',
          height: 78,
            borderRadius: theme.spacing(0, 0, 4, 4),
              padding: theme.spacing(0, 68 / 6),
                boxShadow: '0px 6px 12px 0px #E2E8EE',
  }
});

const LogoContainer = styled('div')(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(0),
  justifyContent: 'flex-start',
}));

const TissiniIcon = styled(Tissini)(({ theme }) => ({
  height: 46,
  width: 164,
  fill: theme.palette.primary.main,
}));

function Header() {

  return (
    <Container>
      <Toolbar>
        <Link href="/" passHref>
          <LogoContainer>
            <Button variant="text">
              <TissiniIcon />
            </Button>
          </LogoContainer>
        </Link>

        <Link href="/" passHref>

          <Box component="form" sx={{
            '& > :not(style)': { ml: 2, background: '#fff' },
          }}>

            <Button color='inherit' variant="text">
              <HistoryIcon color="disabled" />

            </Button >

          </Box>

        </Link>
        <Link href="/home" passHref>
          <Box component="form" sx={{
            '& > :not(style)': { ml: 2, background: '#fff' },
          }} >
            <Button color='inherit' variant="text">
              <NotificationsNoneIcon color="disabled" />

            </Button>
          </Box>
        </Link>


        <Button variant="text" color='inherit'>
          <strong> pepitta perez</strong>
        </Button>



        <Link href="/home" passHref>

          <Box
            color='primary'
            ml={35}>
            <Button>
              <MenuIcon />
            </Button>
          </Box>
        </Link>

      </Toolbar>

    </Container >
  );


}

export default Header;