import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    autoInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}
const CartTotal = ({
    autoInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Total:
            {Object.keys(autoInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        autoInCart[parseInt(productId)],
                0
            )}
            $
        </div>
    )
}
export default CartTotal
