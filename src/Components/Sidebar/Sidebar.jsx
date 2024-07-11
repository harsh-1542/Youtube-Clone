import React from 'react'
import './Sidebar.css'
import Home from '../../assets/svgs/Sidebar/Home.svg'
import Shorts from '../../assets/svgs/Sidebar/Shorts.svg'
import Courses from '../../assets/svgs/Sidebar/Courses.svg'
import Fashion from '../../assets/svgs/Sidebar/Fashion.svg'
import Films from '../../assets/svgs/Sidebar/Films.svg'
import Gaming from '../../assets/svgs/Sidebar/Gaming.svg'
import History from '../../assets/svgs/Sidebar/History.svg'
import LikedVideo from '../../assets/svgs/Sidebar/Liked video.svg'
import Live from '../../assets/svgs/Sidebar/Live.svg'
import Music from '../../assets/svgs/Sidebar/Music.svg'
import News from '../../assets/svgs/Sidebar/News.svg'
import Playlist from '../../assets/svgs/Sidebar/Playlist.svg'
import Podcast from '../../assets/svgs/Sidebar/Podcast.svg'
import Shopping from '../../assets/svgs/Sidebar/Shopping.svg'
import Sport from '../../assets/svgs/Sidebar/Sport.svg'
import Subscriptions from '../../assets/svgs/Sidebar/Subscriptions.svg'
import Trending from '../../assets/svgs/Sidebar/Trending.svg'
import WatchLater from '../../assets/svgs/Sidebar/Watch later.svg'
import you from '../../assets/svgs/Sidebar/you.svg'
import YourChannel from '../../assets/svgs/Sidebar/Your channel.svg'
import yourVideo from '../../assets/svgs/Sidebar/your video.svg'

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
          <img src={Home} alt='' /><p>Home</p>
        </div>
        <div className="side-link">
          <img src={Shorts} alt='' /><p>Shorts</p>
        </div>
        <div className="side-link">
          <img src={Subscriptions} alt='' /><p>Subscriptions</p>
        </div>
{/* 
        <hr /> 
        

        <div className='youraccount'>


          <div className="side-link you">
            <h3>You</h3>
            <p>

              <img src={you} className='your' alt='you' />
            </p>
          </div>
           <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={YourChannel} alt='' /><p>Your Channel</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={History} alt='' /><p>History</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={Playlist} alt='' /><p>Playlist</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={yourVideo} alt='' /><p>Your Video</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={WatchLater} alt='' /><p>Watch Later</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={LikedVideo} alt='' /><p>Liked Videos</p>
          </div> 
        </div> */}

        <hr />

        <div className="Explore">
          <h3 className='you'>Explore</h3>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={Trending} alt='' /><p>Trending</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={Shopping} alt='' /><p>Shopping</p>
          </div>
          <div className={`side-link ${category === 10 ? "active" : ""} `} onClick={() => setCategory(10)}>
            <img src={Music} alt='' /><p>Music</p>
          </div>
          <div className={`side-link ${category === 1 ? "active" : ""} `} onClick={() => setCategory(1)}>
            <img src={Films} alt='' /><p>Films</p>
          </div>
          <div className={`side-link ${category === 23 ? "active" : ""} `} onClick={() => setCategory(23)}>
            <img src={Live} alt='' /><p>Comedy</p>
          </div>
          <div className={`side-link ${category === 20 ? "active" : ""} `} onClick={() => setCategory(20)}>
            <img src={Gaming} alt='' /><p>Gaming</p>
          </div>
          <div className={`side-link ${category === 25 ? "active" : ""} `} onClick={() => setCategory(25)}>
            <img src={News} alt='' /><p>News</p>
          </div>
          <div className={`side-link ${category === 17 ? "active" : ""} `} onClick={() => setCategory(17)}>
            <img src={Sport} alt='' /><p>Sports</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={Courses} alt='' /><p>Courses</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={Fashion} alt='' /><p>Fashion</p>
          </div>
          <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
            <img src={Podcast} alt='' /><p>Podcast</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar