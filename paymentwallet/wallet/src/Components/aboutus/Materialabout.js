import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './Aboutus.css'
import { Alert } from '@mui/material';

const images = [
    {
        url: '/assets/about1.jpg',
        title: 'Payments',
        width: '33%',
        
    },
    {
        url: '/assets/about2.jpg',
        title: 'Finance',
        width: '34%',
    },
    {
        url: '/assets/about3.jpg',
        title: 'Insaurance',
        width: '33%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 1,
    right: 1,
    top: 1,
    bottom: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 1,
    right: 1,
    top: 1,
    bottom: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 1,
    right: 1,
    top: 1,
    bottom: 1,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
    return (
        <div className="container user-Buttonbases">
            <br />
            <br />            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box>
            <br />
            <Alert severity="success">We’re here to champion your potential</Alert>
            <Alert severity="success">Our purpose is to champion the potential of people, families, and businesses.</Alert>
            <Alert severity="info">From budgeting and saving, to supporting you make more sustainable choices.</Alert>
            <Alert severity="success">We’re here to help you feel more confident about your money today, and in the future.</Alert>
            <Alert severity="info">There is so much more to NatWest beyond our financial products and services.</Alert>
            <Alert severity="success">From our branches to head office, we're transforming the way we work to become climate positive by 2025.</Alert>
            <Alert severity="success">Growing your skills and confidence with money</Alert>
            <Alert severity="info">Helping build your money management skills and confidence is at the heart of what we do.</Alert>
        </div>
    );

}
