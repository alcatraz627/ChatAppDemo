import React from 'react'
import { Box, Button, Heading } from 'grommet'
// import { Notification } from 'grommet-icons'

const Sidebar = props => {
    return (
        <Box tag='header' direction='row' align='center' justify='between' background='dark-3' style={{ zIndex: '1' }}
            pad={{ left: 'medium', right: 'small', vertical: 'small' }} elevation='large' {...props}>
            {/* <Heading level="4" margin="none">ChatApp</Heading> */}
            {/* <Button icon={<Notification />} /> */}
        </Box>
    )
}

export default Sidebar