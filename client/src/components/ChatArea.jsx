import React, { useState, useEffect } from 'react'
import { Box, Button, Heading, Text, Paragraph, TextInput } from 'grommet'
// import { Notification } from 'grommet-icons'

const ChatArea = props => {
    const { username, messages } = props;
    return (
        <Box direction='row' align='baseline' justify='start' background='light-5' style={{ zIndex: '1' }}
            pad={{ left: 'medium', right: 'small', vertical: 'small' }} elevation='large' {...props}>
            {/* <Heading level="4" margin="none">ChatApp</Heading> */}
            {/* <Button icon={<Notification />} /> */}
            <Paragraph margin="none">
                <Text  className="italic" color="dark-3">Logged in as <Text color="brand">{username}</Text> </Text><br />
                {messages.length == 0 && <Text  className="italic" color="dark-5">Chat messages will show here</Text>}
                {messages.map((m, i) => (
                    m.isinfo ?
                        <span key={i}>

                            <Text className="italic"><Text color="brand">{m.user} </Text>has joined</Text>
                            <br />
                        </span>
                        :
                        <span key={i}>
                            <Text color="brand">{m.user}: </Text>
                            <Text>{m.message}</Text>
                            <br />
                        </span>

                )
                )}
            </Paragraph>
            {/* <pre>{JSON.stringify(messages)}</pre> */}
        </Box>
    )
}

export default ChatArea