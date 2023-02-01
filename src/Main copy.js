import './App.css'
import { useEffect, useState } from 'react'
import AssetCards from './AssetCards'

function Main({ accounts, setAccounts }) {
  const [data, setData] = useState([])
  const [collections, setCollections] = useState([])
  const isConnected = Boolean(accounts[0])

  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
  //   script.setAttribute('async', 'true')
  //   document.body.appendChild(script)
  // }, [])

  useEffect(() => {
    const getData = (_account) => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': process.env.REACT_APP_OPENSEA_API,
        },
      }

      fetch(
        `https://api.opensea.io/api/v1/assets?owner=${_account}&order_direction=desc&limit=20&include_orders=false`,
        options,
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response.assets)
          console.log(response)
        })
        .catch((err) => console.error(err))
    }

    if (isConnected) {
      getData(accounts[0])
    }
  }, [accounts, isConnected])

  useEffect(() => {
    const getCollection = (_account, slug) => {
      const options = { method: 'GET', headers: { accept: 'application/json' } }

      return fetch(`https://api.opensea.io/api/v1/collection/${slug}`, options)
        .then((response) => response.json())
        .then((response) => response.collection)
        .catch((err) => console.error(err))
    }
    if (isConnected) {
      const slugs = [
        'vaynersports-pass-vsp',
        'pitch-og-pass',
        'wagmiunited',
        'cool-cats-fc',
        'mpl-official',
        'metasoccer-youth-scouts',
        'firstevernft',
        'footium-football-clubs',
        'rtfkt-x-nike-football-jersey',
        'sorare-football-national-series',
        'draftkings-primetime-nft-series',
        'artofbasketball',
        'sportsbots',
        'lion-club',
        'the-internets-team',
      ]

      Promise.all(
        slugs.map((element) => {
          return getCollection(accounts[0], element)
        }),
      ).then((collections) => {
        console.log(collections)
        setCollections(collections)
      })
    }
  }, [accounts, isConnected])

  return (
    <div className="grid">
      <div className="rectangle">
        <div className="wrap-text">
          <h2 className="collections">Collections</h2>
        </div>
        {isConnected ? (
          <AssetCards assets={data}></AssetCards>
        ) : (
          <h2 className="please-connect">Please connect wallet</h2>
        )}
      </div>

      <div className="squareone">
        <h2 className="benefit-alerts">Benefit alerts </h2>
        <div className="paragraph">
          {/* <iframe
              src="https://e.widgetbot.io/channels/299881420891881473/355719584830980096"
              height="100%"
              width="100%"
            ></iframe> */}
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
        <div className="wrap-text">
          <h2 className="floor-price"> Sport NFT FPs</h2>
        </div>

        {isConnected ? (
          <div className="fp-list">
            {collections
              .sort(function (collectionA, collectionB) {
                return (
                  collectionB.stats.floor_price - collectionA.stats.floor_price
                )
              })
              .map((collection) => {
                return (
                  <div className="collection-watchlist">
                    <div className="floor-price-box">
                      <div className="col1">
                        <p>{collection.name}:</p>
                      </div>
                      <div className="col2">
                        <p>
                          {Intl.NumberFormat('en-GB', {
                            maximumFractionDigits: 2,
                          }).format(collection.stats.floor_price)}
                          &nbsp; ETH
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        ) : (
          <h2></h2>
        )}
      </div>

      <div className="squarefour">
        <h2 className="sport-news">Upcoming News</h2>
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
