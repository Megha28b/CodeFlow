import React from 'react'
import { AppBar,Toolbar, styled } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

const Container = styled(AppBar)`
background: #3CACAE;
height:9vh;
`

export default function Navbar() {
  return (
    <Container position='static'>
        <Toolbar>
            <FontAwesomeIcon icon={faWandMagicSparkles} style={{marginRight: '10px'}}/>
            <h2>CodeFlow</h2>
        </Toolbar >
    </Container>
  )
}
