import React from 'react'
import { MdFiberManualRecord, MdInfo } from 'react-icons/md'

function Widgets() {

  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
        <div className="widgets__article--left">
        <MdFiberManualRecord />
        </div>
        <div className="widgets__article--right">
            <h4>{ heading }</h4>
            <p>{ subtitle }</p>
        </div>
    </div>
  }  

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <p><MdInfo /></p>
      </div>
      <div>
        {newsArticle('Heading', 'Subtitle')}
        {/* {newsArticle("US president Kidnapped by Putin","Top News - 50000 Readers")} */}
        {/* {newsArticle("PAPA REACT ain't Back","Street News - 9099 Readers")}
        {newsArticle("Resue Hillary","Politics - 7000")}
        {newsArticle("US ain't Paying No Ransom","Politics - 5677")}
        {newsArticle("Crypto Hits $100K","Crypto Funds - 1292977")} */}
      </div>
    </div>
  )
}

export default Widgets
