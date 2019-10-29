import React from 'react'
import { Box, Button, Heading} from 'grommet'
// import { Notification } from 'grommet-icons'

const Navbar = props => {
    return (
        <Box tag='header' direction='row' align='center' justify='between' background='brand' style={{ zIndex: '1' }}
            pad={{ left: 'medium', right: 'small', vertical: 'small' }} elevation='large' {...props}>
            <Heading level="4" margin="none">Chat App Demo</Heading>
            {/* <Button icon={<Notification />} /> */}
        </Box>
    )
}

export default Navbar