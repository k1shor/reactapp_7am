import React from 'react'
import { Typography, Box, TextField, Container, Button } from '@mui/material'
import Nav from '../components/Layout/Nav'
import Footer from '../components/Layout/Footer'

const Contact = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' align='center' sx={{ mt: "10px" }}>
                Contact
            </Typography>
            <Container >
                <Box className='contact-container' display='flex' p={3}>
                    <Box className='contact-address' width='40%'>
                        <Typography variant='h4' fontWeight='bold' sx={{ textDecoration: 'underline' }}>Our Store</Typography>
                        <Typography variant='h6'>Kathmandu, Nepal</Typography>
                        <Typography variant='h6'>Phone: +977 9851012345</Typography>
                        <Typography variant='h6'>email: info@ourstore.com</Typography>
                        <Typography variant='h6'>website: www.ourstore.com</Typography>

                    </Box>
                    <Box className='contact-form' width='60%'>
                        <TextField label='Email' variant='outlined' sx={{mb:'10px'}} fullWidth='true'  required='true'></TextField>
                        <br/>
                        <TextField label='Subject' variant='outlined' sx={{mb:'10px'}} fullWidth='true'></TextField>
                        <br/>
                        <TextField label='Message' multiline maxRows={4} variant='outlined' sx={{mb:'10px'}} fullWidth='true' helperText="enter your message"></TextField>
                        <br/>
                        <Button variant='contained' fullWidth='true'>Submit</Button>
                    </Box>
                </Box>
            </Container>

            <Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240403142384!2d85.31271265024449!3d27.709862782706416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1648174273726!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width='100%' height={'450px'}></iframe>
            </Container>

            <Footer />
        </>
    )
}

export default Contact