import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import Header from '../components/layout/header/Header'
import InfoUser from '../components/leads/InfoUser'
import Grid from '@mui/material/Grid';

import InfoTab from '../components/leads/InfoTab'
import MessageMain from '../components/leads/MessageMain';




const Main = styled(Container)(() => ({
    paddingTop: 138,
}));

function MainLayout({ children }: MainLayoutProps) {

    return (
        <>
            <Header />,
            <InfoUser/>,
          <InfoTab/>
          

        </>
       

        
        
    );
}
export interface MainLayoutProps {
    children: ReactNode;
}

export default MainLayout;

