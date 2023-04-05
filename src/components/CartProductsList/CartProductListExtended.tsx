import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'

type Props = {
    product: Product

    removeProductFromCart: (id: number) => void
}

const CartProductListExtended = ({ product, removeProductFromCart }: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: '22px' }}>
                        {product.title}
                    </div>
                    <p>
                        Price car:{' '}
                        <span
                            style={{
                                color: 'red',
                                fontSize: '30px',
                                fontWeight: 'bold',
                            }}
                        >
                            ${product.price}.00
                        </span>
                    </p>
                    <Button onClick={() => removeProductFromCart(product.id)}>
                        <DeleteSweepIcon
                            fontSize="large"
                            sx={{ color: '#bd162d' }}
                        />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListExtended
