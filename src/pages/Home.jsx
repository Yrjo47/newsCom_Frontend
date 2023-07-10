import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Note from '../components/Note'
import '../styles/Home.css'

const Home = () => {

  const [homeNews, setHomeNews] = useState([]);

  useEffect (() => {
    Axios.get('https://newsCom-api.onrender.com/homeNews').then((response) => {
      console.log(response);
      setHomeNews(response.data);
    });
  }, []);

  return (
    <div className='home'>
        <div className="home_wrapper">
            <div className="home_container">
                {homeNews.map((val) => {

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
                <Link to="/news" className="news_button">All news</Link>
                <Link to="/feedback" className="feedback_button">Send feedback</Link>                
            </div>
        </div>
    </div>
  )
}

export default Home