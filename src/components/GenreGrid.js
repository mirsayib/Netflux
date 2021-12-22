import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

export default function GenreGrid({genres}) {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {genres.map((genre) => (
                    <Grid item xs={4} sm={4} md={4} key={genre.id}>
                        <Item>
                                
                            <div className='genre-card'>
                                <h2>{genre.name}</h2>
                            </div>
                           
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
