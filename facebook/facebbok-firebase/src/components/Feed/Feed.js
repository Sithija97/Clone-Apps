import React from 'react'
import { useStateValue } from '../../StateProvider';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel'

function Feed() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post profilePic={user.photoURL} username={user.displayName} />
        </div>
    )
}

export default Feed
