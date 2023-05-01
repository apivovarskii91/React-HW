import { Grid, TextField, Typography } from '@mui/material' // eslint-disable-line @typescript-eslint/no-unused-vars
import AutoListItem from './AutoListItem'
import productsArray from 'utils/productsArray'
import Field from 'components/Field/Field'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

type Props = {
    
    productsLike: {
        [id: number]: boolean
    }
    toggleLike: (id: number) => void
}
const AutoList = ({  productsLike, toggleLike }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    position: 'relative',
                    bottom: '70px',
                    margin: '0 auto',
                    padding: '20px 0px',
                    fontWeight: 'bold',
                    width: '90%',
                    boxShadow: '0px 0px 32px 15px',
                    backgroundColor: 'white',
                }}
            >
                <SearchRoundedIcon fontSize="large" sx={{ color: '#bd162d' }} />
                Search Vehicle Inventory
                <Field />
            </Typography>
            <Typography
                component={'h2'}
                variant="h3"
                sx={{ margin: '0px 0px 20px 30px', fontWeight: 'bold' }}
            >
                Latest Inventory
            </Typography>
            <Grid container spacing={2} sx={{ margin: '0 auto' }}>
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
                                id={id}
                                title={title}
                                mileage={mileage}
                                transmission={transmission}
                                engine={engine}
                                color={color}
                                price={price}
                                image={image}
                                isLiked={productsLike[id]}
                                toggleLike={toggleLike}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default AutoList
