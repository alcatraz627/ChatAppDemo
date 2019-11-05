import React, { useState } from 'react'
import { Grommet, Box, Button, Text, TextInput, Heading } from 'grommet'

const Login = props => {
    const { handleSetUsername } = props;
    const [username, setUsername] = useState("")

    const handleFormSubmit = e => {
        e.preventDefault();
        if (username) {
            handleSetUsername(username)
        } else alert("Invalid Username")
    }

    return (
        <Box width="medium" margin="auto" justify="start">
            <Heading >ChatApp demo</Heading>
            <Text color="dark-4" style={{ fontWeight: 100 }}>This is a demo of a chat application. You can view the people online and join the chatroom with a username.</Text>
            <br /><br /><br />
            <form onSubmit={handleFormSubmit}>
                <Text color="brand">Enter Username</Text>
                <TextInput placeholder="Enter username" value={username} name="username" onChange={({ target: { value } }) => { setUsername(value) }}
                />
            </form>
        </Box>
    )
}

export default Login