import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/abaut">Abaut Us</MenuItem>
            <MenuItem to="/latestsOffers">Latests Offers</MenuItem>
            <MenuItem to="/autoNews">Auto News</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}
export default Menu
