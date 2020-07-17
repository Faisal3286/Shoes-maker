import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const Footer = ()=>{
    return(
        <Grid container  justify='center' style={{marginTop:10, backgroundColor:'#5F4C4C',color:'white'}}>
            <Grid item>
                <Typography variant='h6'>Copyright &copy; Faisal Nabeel <a href='https://github.com/Faisal3286'><GitHubIcon/></a>{' '}
                <a href='https://www.linkedin.com/in/faisal-nabeel-95a75b177/'><LinkedInIcon/></a></Typography>
            </Grid>
        </Grid>
    )
}