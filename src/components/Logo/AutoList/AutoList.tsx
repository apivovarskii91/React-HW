import { Grid, Typography } from '@mui/material'
import AutoListItem from './AutoListItem'
import productsArray from 'utils/productsArray'

type Props = {}
const AutoList = (props: Props) => {
    return (
        <>
            <Typography
                component={'h2'}
                variant="h4"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Auto List
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        mileage,
                        transmission,
                        engine,
                        color,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <AutoListItem
                                title={title}
                                mileage={mileage}
                                transmission={transmission}
                                engine={engine}
                                color={color}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default AutoList
