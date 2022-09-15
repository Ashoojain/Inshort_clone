import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent/NewsContent';
import API_KEY from './keys';
function App() {
  const [newsArray , setnewArray]=useState([]);
  const [newsResults ,setnewResults]= useState();
  const [Category ,setCategory] =useState('general');
 const [loadMore , setloadMore]=useState(20);
  const newsApi =async()=>{
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${Category}&apiKey=${API_KEY}&pageSize=${loadMore}`
      );
      
      setnewArray(news.data.articles);
      setnewResults(news.data.totalResults);
    } catch(err) {
    console.log(err)
    }
  }

  useEffect(()=>{
     newsApi();
  },[newsResults,loadMore,Category])
  return (
    <div>
   <Navbar setCategory={setCategory} />
   {
    newsResults && (
      <NewsContent newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setLoadMore={setloadMore} />
    )
   }
    </div>
  );
}

export default App;
