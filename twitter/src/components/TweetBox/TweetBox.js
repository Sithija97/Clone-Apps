import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'

function TweetBox() {
    return (
        <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/120949464_2667999066834394_4728770985596586303_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=sdDgLjncdKIAX8pHbr8&_nc_ht=scontent.fcmb4-1.fna&oh=694ce18fd0324c10dd51c9a2eb8009ea&oe=605A4FA3"/>
          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          type="submit"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
    )
}

export default TweetBox
