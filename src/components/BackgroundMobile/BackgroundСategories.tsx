import { Typography } from '@mui/material'
import mobile from 'assets/mobile.jpg'
type Props = {}
const BackgroundСategories = (props: Props) => {
    return (
        <Typography component="div">
            <img
                src={mobile}
                width="100%"
                alt=""
                style={{ position: 'relative', top: '-51px' }}
            />
        </Typography>
    )
}
export default BackgroundСategories
