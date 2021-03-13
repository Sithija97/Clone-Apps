import React from 'react'
import Post from '../Post/Post'
import TweetBox from '../TweetBox/TweetBox'
import './Feed.css'

function Feed() {
    return (
        <div className="feed">
            {/* Heder */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/* Tweet box */}
            <TweetBox/>
            {/* Tweets */}
            <Post/>
        </div>
    )
}

export default Feed
