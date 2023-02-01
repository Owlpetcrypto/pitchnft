import './CollectionFP.css'

function CollectionFP({ collections }) {
  return collections
    .sort(function (collectionA, collectionB) {
      return collectionB.stats.floor_price - collectionA.stats.floor_price
    })
    .map((collection) => {
      return (
        <div className="collection-watchlist">
          <div className="floor-price-box">
            <div className="col1">
              <p>{collection.name}:</p>
            </div>
            <div className="col1">
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
    })
}

export default CollectionFP
