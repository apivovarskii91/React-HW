import AutoList from 'components/AutoList/AutoList'
import BackgroundMobile from 'components/BackgroundMobile/BackgroundMobile'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addAutoToCart: (id: number, count: number) => void
    productsLike: {
        [id: number]: boolean
    }
    toggleLike: (id: number) => void
}
const Home = ({ addAutoToCart, productsLike, toggleLike }: Props) => {
    return (
        <>
            <BackgroundMobile />

            <AutoList
                addAutoToCart={addAutoToCart}
                productsLike={productsLike}
                toggleLike={toggleLike}
            />
            <Reviews />
        </>
    )
}
export default Home
