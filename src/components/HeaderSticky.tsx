import React from "react";

import AppBar from '@mui/material/AppBar';

import { styled } from '@mui/material/styles';

import { Box, Grid } from "@mui/material";
import { LeadI } from '../core/interfaces/lead.interface';
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";

function HeaderSticky({ lead }: HeaderStickyProps) {

    return (
        <>
            <Box mt={15} ml={10} >
                <Grid container spacing={2} className="leads-row headerinfo">
                    <Grid item xs={8}>
                        <h1><strong>{lead?._id}{lead?.firstname}</strong></h1>
                    </Grid>
                    <Grid item xs={4}>
                        <div>
                            <Button variant="outlined">
                                <FontAwesomeIcon icon={faEllipsisV} />Acciones</Button>
                            <Button variant="contained">Crear Orden</Button>
                        </div>
                    </Grid>
                </Grid>



            </Box>

        </>
    );

}

export interface HeaderStickyProps {
    lead: LeadI | undefined;
}

export default HeaderSticky;