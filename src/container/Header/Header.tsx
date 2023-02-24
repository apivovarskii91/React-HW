import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Logo/Menu/Menu'
import CartHeader from 'components/Logo/CartHeader/CartHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'grey',
                }}
            >
                <Container>
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
                        <CartHeader />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header
