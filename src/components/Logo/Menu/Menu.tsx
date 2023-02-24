import Button from '@mui/material/Button'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button sx={{ color: 'black' }}>Home</Button>
            <Button sx={{ color: 'black' }}>Inventory</Button>
            <Button sx={{ color: 'black' }}>Abaut Us</Button>
            <Button sx={{ color: 'black' }}>Latests Offers</Button>
            <Button sx={{ color: 'black' }}>Auto News</Button>
            <Button sx={{ color: 'black' }}>Contact</Button>
        </>
    )
}
export default Menu
