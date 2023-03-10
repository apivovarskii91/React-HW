import Typography from '@mui/material/Typography'
import logo from 'assets/logo1.png'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} width="115px" height="70px" alt="Fake-shop logo" />
        </Typography>
    )
}
export default Logo
