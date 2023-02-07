import {
  Flex,
  Image,
  Link,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import Opensea from './assets/opensea_button.png'
import Discord from './assets/discord_button.png'
import Twitter from './assets/twitter_button.png'
import Pitchlogo from './assets/pitch_soccer_logo.png'
import { ethers } from 'ethers'
import { useState } from 'react'

function NavBar({ accounts, setAccounts }) {
  const isConnected = Boolean(accounts[0])

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAccounts(accounts)
    }
  }

  return (
    <nav>
      <div className="PitchLogo">
        <Image src={Pitchlogo} h="80%" />
      </div>

      <Flex padding="1px" marginRight="0.7%">
        <Link href="https://opensea.io/collection/pitch-og-pass">
          <Image className="SocialLogo" src={Opensea} />
        </Link>
        <Link href="http://discord.gg/HhJNjZjupz">
          <Image className="SocialLogo" src={Discord} />
        </Link>
        <Link href="https://twitter.com/pitchweb3">
          <Image className="SocialLogo" src={Twitter} />
        </Link>
        {isConnected ? (
          <Box className="connect-button">
            {accounts[0].slice(0, 5)}...
            {accounts[0].slice(accounts.length - 4)}
          </Box>
        ) : (
          <Button className="connect-button" onClick={connectAccount}>
            Connect
          </Button>
        )}
      </Flex>
    </nav>
  )
}

export default NavBar
