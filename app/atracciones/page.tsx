import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';
import AttractionCard from '../components/AttractionCard';

const AttractionsGridView : FC = () => {

    const data = [
        {
            name: 'Montaña Rusa',
            state: 'AVAILABLE',
            image_url:  'https://www.las2orillas.co/wp-content/uploads/2023/08/montana-rusa-de-Salitre-Magico-.jpg',
            description: 'Hola soy una descripción',
        },
        {
            name: 'Montaña Rusa',
            state: 'UNDER_MAINTENANCE',
            image_url:  'https://www.las2orillas.co/wp-content/uploads/2023/08/montana-rusa-de-Salitre-Magico-.jpg',
            description: 'Hola soy una descripción',
        },
        {
            name: 'Montaña Rusa',
            state: 'UNDER_MAINTENANCE',
            image_url:  'https://www.las2orillas.co/wp-content/uploads/2023/08/montana-rusa-de-Salitre-Magico-.jpg',
            description: 'Hola soy una descripción',
        },
        {
            name: 'Montaña Rusa',
            state: 'DISABLED',
            image_url:  'https://www.las2orillas.co/wp-content/uploads/2023/08/montana-rusa-de-Salitre-Magico-.jpg',
            description: 'Hola soy una descripción',
        },
    ]

    return(
        <Grid container spacing={ {xs: 1, sm: 2} }>
            {
                data.map( (item, idx) => 
                    <Grid size={ {xs: 12, sm: 4} } key={idx}>
                        <AttractionCard {...item} />
                    </Grid>
                )
            }
      </Grid>
    )
}

export default AttractionsGridView;