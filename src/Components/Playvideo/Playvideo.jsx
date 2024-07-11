import React, { useEffect, useState } from 'react'
import './Playvideo.css'
// import video1 from '../../assets/videos/learn CSS.mp4'
import account from '../../assets/videos/account.svg'
import dislike from '../../assets/videos/dislink.svg'
import share from '../../assets/videos/share.svg'
import like from '../../assets/videos/like.svg'
import moment from 'moment'
import { API_KEY } from '../../API'
import { value_Converter } from '../../valueConverter'
import { useParams } from 'react-router-dom'


const Playvideo = () => {

  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);


  const fetchVideoData = async () => {
    // fetching videos data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
  }

  const fetchOtherData = async () => {
    // fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

    // fetching Comment Data
    const comment_url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))

  }

  useEffect(() => {
    fetchVideoData();
  }, [videoId])

  useEffect(() => {
    fetchOtherData();
  }, [apiData])


  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted ></video>
      width="999" height="562"
      */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_Converter(apiData.statistics.viewCount) : "16k"} Views &bull;  {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
        <div>
          <span><img src={like} alt='' /> {apiData ? value_Converter(apiData.statistics.likeCount) : 122}</span>
          <span><img src={dislike} alt='' /> </span>
          <span><img src={share} alt='' /> Share</span>
          <span><img src={like} alt='' /> saved</span>

        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt='' />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>{channelData ? value_Converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <div className="description">
          <p>{apiData ? apiData.snippet.description.slice(0, 250) : "description here"}</p>
        </div>
        <hr />
        <h4>{apiData ? value_Converter(apiData.statistics.commentCount) : 123} Comments</h4>

        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user_profile" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{value_Converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>

          )
        })}



      </div>
    </div>
  )
}

export default Playvideo