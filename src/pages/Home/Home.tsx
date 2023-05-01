import AutoList from 'components/AutoList/AutoList'
import BackgroundMobile from 'components/BackgroundMobile/BackgroundMobile'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    productsLike: {
        [id: number]: boolean
    }
    toggleLike: (id: number) => void
}
const Home = ({ productsLike, toggleLike }: Props) => {
    return (
        <>
            <BackgroundMobile />

            <AutoList productsLike={productsLike} toggleLike={toggleLike} />
            <Reviews />
        </>
    )
}
export default Home
