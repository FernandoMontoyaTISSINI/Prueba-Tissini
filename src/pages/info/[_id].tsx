import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import Header from '../../components/layout/header/Header'
import InfoUser from '../../components/leads/InfoUser'
import Grid from '@mui/material/Grid';

import InfoTab from '../../components/leads/InfoTab'
import MessageMain from '../../components/leads/MessageMain';
import { useRouter } from 'next/router'
import LeadsApi from '../../core/api/mock/LeadsApi'
import HeaderSticky from '../../components/HeaderSticky';
import { Card } from '@mui/material';



function InfoLayout() {

    const router = useRouter()
    const { _id } = router.query
    const  lead = LeadsApi.findById(_id);
    return (
        <>
            <Header />,
            <HeaderSticky lead={lead} />
            <Card variant="outlined" className="cardspace">
                <InfoUser/>
            </Card>
          <InfoTab/>
          

        </>
       

        
        
    );
}


export default InfoLayout;

