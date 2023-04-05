import { Typography } from '@mui/material'
import mobile from 'assets/mobile.jpg'
import './BackgroundMobile.scss'

type Props = {}
const BackgroundMobile = (props: Props) => {
    return (
        <Typography component="div" className="text-mobile">
            <div className="text-mobile">
                <h1 className="text-mobile__header">Dreams Come True</h1>
                <span className="text-mobile__content">
                    Buy Your Dream Car Today <br /> Starting From $2,000
                </span>
            </div>
            <img src={mobile} width="100%" alt="" />
        </Typography>
    )
}
export default BackgroundMobile
