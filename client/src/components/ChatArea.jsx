import React, { useState, useEffect } from 'react'
import { Box, Button, Heading, Text, Paragraph, TextInput } from 'grommet'
// import { Notification } from 'grommet-icons'

const ChatArea = props => {

    return (
        <Box tag='header' direction='row' align='baseline' justify='start' background='light-5' style={{ zIndex: '1' }}
            pad={{ left: 'medium', right: 'small', vertical: 'small' }} elevation='large' {...props}>
            {/* <Heading level="4" margin="none">ChatApp</Heading> */}
            {/* <Button icon={<Notification />} /> */}
            <Paragraph margin="none">
                {props.messages.length == 0 && <Text style={{fontStyle: 'italic'}} color="dark-5">Chat messages will show here</Text>}
                {props.messages.map((m, i) =>
                    <span key={i}>
                        <Text color="brand">{m.user}: </Text>
                        <Text>{m.message}</Text>
                        <br />
                    </span>
                )}
            </Paragraph>
            {/* <pre>{JSON.stringify(messages)}</pre> */}
        </Box>
    )
}

export default ChatArea