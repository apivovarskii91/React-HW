import BackgroundCategori from 'components/BackgroundMobile/BackgroundСategories'
import BackgroundMobile from 'components/BackgroundMobile/BackgroundMobile'
import BackgroundСategories from 'components/BackgroundMobile/BackgroundСategories'

type Props = {}
const AbautPage = (props: Props) => {
    return (
        <>
            <div
                style={{
                    position: 'relative',
                    top: '30px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '34px',
                    fontWeight: 'bold',
                    zIndex: '1',
                }}
            >
                {' '}
                AbautPage
            </div>
            <div>
                <BackgroundСategories />
            </div>
        </>
    )
}
export default AbautPage
