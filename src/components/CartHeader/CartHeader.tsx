import CartProductList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    autoInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ autoInCart }: Props) => {
    return (
        <div>
            <CartProductList autoInCart={autoInCart} />
            <CartTotal autoInCart={autoInCart} />
        </div>
    )
}
export default CartHeader
