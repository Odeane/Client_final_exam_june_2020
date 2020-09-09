import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Series() {

  const [series, setSeries] = useState([])

  useEffect(() => {
   getSeries()
  }, [])

  const getSeries = async () => {
    let response = await axios.get('https://content.viaplay.se/pc-se/serier/samtliga')
    setSeries(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
  }

  let seriesImages = (
    series.map(serie =>
      <img src={serie.content.images.boxart.url} alt="" className='series__img'/>
    )
  )

  return (
    <div className="series_container">
      {seriesImages}
    </div>
  )
}
export default Series
