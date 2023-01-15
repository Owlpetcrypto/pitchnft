import { useState } from 'react'
import { Box, Flex, Link, Image } from '@chakra-ui/react'

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

  return (
    <div class="grid">
      <div class="rectangle">
        <h2 className="collections">Collections</h2>
        <scrip>
          <iframe
            class="nfts"
            src="https://nftembed.org/embed/collection?customCountOfCards=5&hasCustomCountOfCards=true&hasUserProfile=true&saleSplitAddress=&saleSplitFee=10&showMarket=true&tokenAddress=0xbce6d2aa86934af4317ab8615f89e3f9430914cb"
          ></iframe>
        </scrip>
        <scrip>
          <iframe
            class="nfts"
            src="https://nftembed.org/embed/collection?customCountOfCards=5&hasCustomCountOfCards=true&hasUserProfile=true&saleSplitAddress=&saleSplitFee=10&showMarket=true&tokenAddress=0x2a81E1Cf399f3E15716c6A07755FC94cC5AB06d6"
          ></iframe>
        </scrip>
      </div>

      <div class="squareone">
        <h2 class="benefit-alerts">Benefit alerts </h2>
        <div class="paragraph">
          <scrip>
            <iframe
              src="https://e.widgetbot.io/channels/299881420891881473/355719584830980096"
              height="100%"
              width="100%"
            ></iframe>
          </scrip>
        </div>
      </div>

      <div class="squaretwo">
        <h2 class="message"> Messages </h2>
        <div class="paragraph">
          <p> Trade offer for ManU PFP</p>
          <p> Trade offer for Vaynersports pass</p>
        </div>
      </div>

      <div class="bottomsquares">
        <div class="squarethree">
          <h2 class="floor-price"> Sport NFT FPs</h2>
          <iframe src="https://api.opensea.io/collection/VaynerSports Pass VSP"></iframe>
        </div>

        <div class="squarefour">
          <h2 class="sport-news">Sport NFT News/ Upcoming Mints</h2>
          <a
            class="twitter-timeline"
            href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
          >
            Tweets by TwitterDev
          </a>
          <script
            async
            src="https://syndication.twimg.com"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </div>
  )
}
export default Main
