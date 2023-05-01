import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    autoInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ autoInCart }: Props) => {
    return (
        <div>
            <CartTotal autoInCart={autoInCart} />
        </div>
    )
}
export default CartHeader
