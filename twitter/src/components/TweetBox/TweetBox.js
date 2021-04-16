import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from "../Feed/firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
      displayName:'W.A Nayana',
      username:'nayana@gmail.com',
      verified:true,
      text:tweetMessage,
      avatar:'https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/14479659_136128056846884_5880104691633357055_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=cBBmqdyIRdQAX_7K6ky&_nc_oc=AQmOZ6jk5lVEbKe6zs0pKCj9LUpdg0wdRFThI-OSwqwRENlMgJwOnsS2vOnpWIDDGG0&_nc_ht=scontent.fcmb4-1.fna&oh=18f046def2d60a25bc768cbf8935d5e9&oe=60783299',
      image:tweetImage
    })
    setTweetMessage('')
    setTweetImage('')
  }
    return (
        <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/120949464_2667999066834394_4728770985596586303_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=sdDgLjncdKIAX8pHbr8&_nc_ht=scontent.fcmb4-1.fna&oh=694ce18fd0324c10dd51c9a2eb8009ea&oe=605A4FA3"/>
          <input
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
            onChange={(e)=>setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetImage}
          onChange={(e)=>setTweetImage(e.target.value)}
        />

        <Button
          type="submit"
          className="tweetBox_tweetButton"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
    )
}

export default TweetBox
