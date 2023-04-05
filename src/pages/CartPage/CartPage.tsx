import { Grid, Typography } from '@mui/material'
import CartProductListExtended from 'components/CartProductsList/CartProductListExtended'
import CartProductList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    autoInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}

const CartPage = ({ autoInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <Typography component="h1" variant="h4">
                Cart
            </Typography>
            <Grid container spacing={4} sx={{ margin: '0' }}>
                <CartProductList
                    autoInCart={autoInCart}
                    CartItem={CartProductListExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>
            <CartTotal autoInCart={autoInCart} />
        </div>
    )
}

export default CartPage
