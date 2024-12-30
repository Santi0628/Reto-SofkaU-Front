import { Box, Card, CardContent, CardMedia, Fab, Typography } from '@mui/material';
import { FC } from 'react';

interface AttractionCardProps {
    readonly name: string;
    readonly state: string;
    readonly image_url:  string;
    readonly description: string
}

const AttractionCard : FC<AttractionCardProps> = ({name, image_url, description, state}) => {

    return(
        <Card
            variant={state === 'AVAILABLE' ? 'elevation' : 'outlined'}
            sx={{ 
                maxWidth: 345,
                ...(
                    state === 'AVAILABLE' ? {
                        '&:hover': {
                            cursor: 'pointer',
                            WebkitBoxShadow: '0px 0px 8px 2px rgba(184,184,184,1);',
                            MozBoxShadow: '0px 0px 8px 2px rgba(184,184,184,1);',
                            boxShadow: '0px 0px 8px 2px rgba(184,184,184,1);',
                        } 
                    } :
                    {
                        backgroundColor: '#E0E0E0',
                    }
                )
            }}
        >
            <CardMedia
                sx={{ height: 140, position: 'relative' }}
                image={image_url}
                title={name}
                >
                    {
                        state !== 'AVAILABLE' &&
                            <Fab 
                                variant='extended' 
                                sx={{
                                    position: 'absolute',
                                    backgroundColor: '#CD5C5C', 
                                    color: 'white',
                                    right: 0
                                }}
                            > 
                                No Disponible
                            </Fab>
                    }
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AttractionCard;