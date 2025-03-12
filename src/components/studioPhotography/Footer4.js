import React from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Link,
    Divider,
} from '@mui/material';
import {
    Facebook,
    Instagram,
} from '@mui/icons-material';


export const Footer4 = () => {
    return (
        <Box
            sx={{
                bgcolor: 'black',
                py: 6,
                borderTop: 1,
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ flex: '1 1 30%' }}>
                        <Typography
                            variant="h4"
                            sx={{
                                background: "#fff",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "bold",
                                textShadow: "2px 2px 10px rgba(189, 145, 155, 0.6)",
                                letterSpacing: "2px",
                            }}
                            gutterBottom
                        >
                            Bokeh
                        </Typography>

                        <Typography variant="body2" color="#fff">
                            Socials
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <IconButton color="primary" href="https://www.facebook.com/black.sheep.al/" target="_blank">
                                <Facebook />
                            </IconButton>
                            <IconButton color="primary" href="https://www.instagram.com/black_sheep.al/" target="_blank">
                                <Instagram />
                            </IconButton>
                        </Box>
                    </div>

                    <div style={{ flex: '1 1 30%' }}>
                        <Typography
                            variant="h4"
                            sx={{
                                background: "#fff",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "bold",
                                textShadow: "2px 2px 10px rgba(189, 145, 155, 0.6)",
                                letterSpacing: "2px",
                            }}
                            gutterBottom
                        >
                            Quick Links
                        </Typography>
                        <Link href="#home" color="##fff" display="block" sx={{ mb: 1 }}>
                            Home
                        </Link>
                        <Link onClick={() => {
                            const formPage = document.getElementById('aboutUs'); // Assuming the FormPage component has this ID
                            if (formPage) {
                                formPage.scrollIntoView({ behavior: 'smooth' });
                            }
                        }} color="#fff" display="block" sx={{ mb: 1 }}>
                            About Us
                        </Link>
                        <Link onClick={() => {
                            const formPage = document.getElementById('projectsStudio'); // Assuming the FormPage component has this ID
                            if (formPage) {
                                formPage.scrollIntoView({ behavior: 'smooth' });
                            }
                        }} color="##fff" display="block" sx={{ mb: 1 }}>
                            Projects
                        </Link>
                        <Link onClick={() => {
                            const formPage = document.getElementById('FormPage'); // Assuming the FormPage component has this ID
                            if (formPage) {
                                formPage.scrollIntoView({ behavior: 'smooth' });
                            }
                        }} color="#fff" display="block">
                            Contact
                        </Link>
                    </div>

                    <div style={{ flex: '1 1 30%' }}>
                        <Typography
                            variant="h4"
                            sx={{
                                background: "#fff",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "bold",
                                textShadow: "2px 2px 10px rgba(189, 145, 155, 0.6)",
                                letterSpacing: "2px",
                            }}
                            gutterBottom
                        >                            Contact Info
                        </Typography>
                        <Typography variant="body2" color="#fff" sx={{ mb: 1 }}>
                            123 Tech Street
                        </Typography>
                        <Typography variant="body2" color="#fff" sx={{ mb: 1 }}>
                            Tirana, Albania
                        </Typography>
                        <Typography variant="body2" color="#fff" sx={{ mb: 1 }}>
                            Phone: +355 68 58 38 485
                        </Typography>
                        <Typography variant="body2" color="#fff">
                            Email: blacksheep@gmail.com
                        </Typography>
                    </div>
                </div>
                <Divider sx={{ my: 4 }} />

                <Typography variant="body2" color="#fff" align="center">
                    © {new Date().getFullYear()} JXSoft. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer4;