import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Note from '../components/Note'
import '../styles/News.css'

const News = () => {

  const [newsList, setNews] = useState([]);

  useEffect (() => {
    Axios.get('http://localhost:3001/news').then((response) => {
      console.log(response);
      setNews(response.data);
    });
  }, []);

  return (
    <div className=' news'>
      <a href='/' className="home_button">Home</a>
      <div className="news_wrapper">
        <div className="news_container">
          {newsList.reverse().map((val) => {
            
            let date = new Date(val.date);

            const options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };
            date = date.toLocaleString("en-US", options);

            return <Note key={val.id} title={val.title} text={val.body} date={date}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default News