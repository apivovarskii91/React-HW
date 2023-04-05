import BackgroundСategories from 'components/BackgroundMobile/BackgroundСategories'

type Props = {}
const AutoNewsPage = (props: Props) => {
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
                AutoNewsPage
            </div>
            <div>
                <BackgroundСategories />
            </div>
        </>
    )
}
export default AutoNewsPage
