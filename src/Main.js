import { useState } from 'react'
import { Box, Flex, Link, Image } from '@chakra-ui/react'
import { useEffect } from 'react'

const Main = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0])

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAccounts(accounts)
    }
  }
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    script.setAttribute('async', 'true')
    document.body.appendChild(script)
  }, [])

  return (
    <div className="grid">
      <div className="rectangle">
        <h2 className="collections">Collections</h2>
        <iframe
          className="nfts"
          src="https://nftembed.org/embed/collection?customCountOfCards=5&hasCustomCountOfCards=true&hasUserProfile=true&saleSplitAddress=&saleSplitFee=10&showMarket=true&tokenAddress=0xbce6d2aa86934af4317ab8615f89e3f9430914cb"
        ></iframe>

        <iframe
          className="nfts"
          src="https://nftembed.org/embed/collection?customCountOfCards=5&hasCustomCountOfCards=true&hasUserProfile=true&saleSplitAddress=&saleSplitFee=10&showMarket=true&tokenAddress=0x2a81E1Cf399f3E15716c6A07755FC94cC5AB06d6"
        ></iframe>
      </div>

      <div className="squareone">
        <h2 className="benefit-alerts">Benefit alerts </h2>
        <div className="paragraph">
          <iframe
            src="https://e.widgetbot.io/channels/299881420891881473/355719584830980096"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>

      <div className="squaretwo">
        <h2 className="message"> Messages </h2>
        <div className="paragraph">
          <p> Trade offer for ManU PFP</p>
          <p> Trade offer for Vaynersports pass</p>
        </div>
      </div>

      <div className="squarethree">
        <h2 className="floor-price"> Sport NFT FPs</h2>
        <iframe src="https://api.opensea.io/collection/VaynerSports Pass VSP"></iframe>
      </div>

      <div className="squarefour">
        <h2 className="sport-news">Sport NFT News/ Upcoming Mints</h2>
        <div className="twitter-padding">
          <div className="twitter-wrapper">
            <a
              className="twitter-timeline"
              data-theme="light"
              href="https://twitter.com/PitchWeb3?ref_src=twsrc%5Etfw"
            >
              Tweets by PitchWeb3
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main
