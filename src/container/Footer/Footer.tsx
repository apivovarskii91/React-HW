import { Grid, Typography } from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import logo from 'assets/logo3.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import CopyrightIcon from '@mui/icons-material/Copyright'

type Props = {}
const Footer = (props: Props) => {
    return (
        <>
            <Typography sx={{ backgroundColor: '#081b36' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    sx={{
                        padding: '30px 0',
                    }}
                >
                    <span
                        style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >
                        <CallIcon fontSize="medium" />
                        Call (202)1155-909
                    </span>
                    <img
                        src={logo}
                        width="115px"
                        height="70px"
                        alt="Fake-shop logo"
                        style={{ margin: '0 100px 0 0' }}
                    />

                    <Typography>
                        <InstagramIcon
                            fontSize="large"
                            sx={{
                                color: 'white',
                                backgroundColor: '#3f729b',
                                borderRadius: '4px',
                            }}
                        />
                        <FacebookIcon
                            fontSize="large"
                            sx={{
                                backgroundColor: '#3b5998',
                                color: 'white',
                                borderRadius: '4px',
                                marginLeft: '5px',
                            }}
                        />
                        <TwitterIcon
                            fontSize="large"
                            sx={{
                                color: 'white',
                                backgroundColor: '#55acee',
                                borderRadius: '4px',
                                marginLeft: '5px',
                            }}
                        />
                        <YouTubeIcon
                            fontSize="large"
                            sx={{
                                color: 'white',
                                backgroundColor: '#cd201f',
                                borderRadius: '4px',
                                marginLeft: '5px',
                            }}
                        />
                    </Typography>
                </Grid>
                <hr style={{ width: '90%' }} />
                <div
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        padding: '30px 0',
                    }}
                >
                    <span>
                        {' '}
                        <CopyrightIcon sx={{ marginBottom: '-5px' }} />
                        Copyright 2012 – 2023
                    </span>
                </div>
            </Typography>
        </>
    )
}
export default Footer
