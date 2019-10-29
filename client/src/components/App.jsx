import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

import { Grommet, Box, Button, Heading, Grid, TextInput } from 'grommet'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import { Notification } from 'grommet-icons'

const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
    textInput: {
        extend: () => `
        font-size: 1em;
        font-weight: 500;
        color: #333;`
    },
    heading: {
        extend: () => `
        font-weight: 500;
        font-size: 1.3em;
        `
    }
};

const ENDPOINT = 'localhost:3000'

const USER = 'alcatraz627'

const generateMessage = ({ user, message }) => ({ user, message })

const App = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");

    const socket = socketIOClient(ENDPOINT)

    const handleMessageAdd = (data) => {
        console.log(data)
        setMessages(messages => [...messages, generateMessage({ ...data })])
    }

    const handleInputChange = ({ target: { value } }) => {
        setMessageInput(value)
    }

    const handleMessageSend = e => {
        e.preventDefault()
        socket.emit("chat message", { message: messageInput, user: USER })
        setMessageInput("")
    }

    useEffect(() => {
        socket.on("chat message", data => handleMessageAdd(data))
    }, [])


    return (
        <div>
            <Grommet theme={theme}>
                <Grid rows={['5vh', '88.5vh', '5vh']} columns={['300px', 'flex']} gap="xsmall" fill={true}
                    areas={[
                        { name: 'header', start: [0, 0], end: [1, 0] },
                        { name: 'sidebar', start: [0, 1], end: [0, 2] },
                        { name: 'chat', start: [1, 1], end: [1, 1] },
                        { name: 'input', start: [1, 2], end: [1, 2] },
                    ]} >

                    <Navbar gridArea="header" />
                    <Sidebar gridArea="sidebar" />
                    <ChatArea gridArea="chat" messages={messages} />
                    <Box gridArea="input">
                        <form onSubmit={handleMessageSend}>
                            <TextInput placeholder="Enter message here" value={messageInput} name="messageInput" onChange={handleInputChange} />
                        </form>
                    </Box>
                </Grid>
            </Grommet>
        </div>
    )
}

export default App