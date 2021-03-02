import React from 'react'
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
        </div>
    )
}

export default Feed
