import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {
    autoInCart: {
        [id: number]: number
    }
}

const Header = ({ autoInCart }: Props) => {
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'white',
                    boxShadow: 'none',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2, color: 'black' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Logo />
                        <Menu />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header
