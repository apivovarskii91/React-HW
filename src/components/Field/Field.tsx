import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

type Props = {}
const Field = (props: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '20px',
            }}
        >
            <TextField
                sx={{ width: '250px' }}
                label="Car Make / Model / Keyword"
            />
            <TextField sx={{ width: '250px' }} label="New Cars/Used Cars" />
            <TextField sx={{ width: '250px' }} label="Any type body" />

            <Button
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                    backgroundColor: '#bd162d',
                    height: '55px',
                    width: '250px',
                }}
            >
                SEARCH
            </Button>
        </Box>
    )
}
export default Field
