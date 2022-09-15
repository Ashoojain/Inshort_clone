import React from 'react'
import {Container} from '@material-ui/core'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'
function NewsContent({newsArray,loadMore,setLoadMore,newsResults}) {
  return (
    <div>
      <Container maxWidth='md'>
        <div className='content'>
          {
            newsArray.map(newsItem=> <NewsCard 
              newsItem={newsItem} key={newsItem.title} />)
          }
          {
            loadMore <=newsResults && (
              
              <>
              <hr />
              <button className='loadMore' onClick={()=>{setLoadMore(loadMore+20)}}>
                Load More
              </button>
              </>
            )
          }
        </div>
      </Container>
    </div>
  )
}

export default NewsContent
