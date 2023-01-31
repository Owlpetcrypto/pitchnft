import './AssetCards.css'

function AssetCards({ assets }) {
  const filtered = assets.filter((asset) => {
    const collection = [
      'broadside-episodes',
      'ens',
      'h4h-unilever',
      'pixel-beanz-v3',
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

    return collection.includes(asset.collection.slug)
  })

  const sorted = filtered.sort((assetA, assetB) => {
    return assetB.collection.name - assetA.collection.name
  })

  const groups = sorted.reduce((acc, asset) => {
    if (!acc[asset.collection.name]) {
      acc[asset.collection.name] = []
      acc[asset.collection.name].push(asset)
    } else {
      acc[asset.collection.name].push(asset)
    }
    return acc
    //always return acc
  }, {})

  return Object.entries(groups)
    .sort((a, b) => {
      return b[1].length - a[1].length
    })
    .map(([name, assets]) => {
      return (
        <div className="group">
          <div className="collect-name">{name}</div>
          <div className="group-assets">
            {assets.map((nft) => (
              <div className="collection-card">
                <a href={nft.permalink} target="_blank">
                  <img className="asset-image" src={nft.image_url} />
                </a>
                <div className="nft-name-block">
                  <p className="style-name">{nft.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    })
}

export default AssetCards
