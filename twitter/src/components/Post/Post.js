import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, PublishOutlined, RepeatOutlined, VerifiedUser } from '@material-ui/icons'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React, {forwardRef} from 'react'
import './Post.css'

const Post = forwardRef (({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className="post_avatar">
            <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName} <span>
                                {verified && <VerifiedUser className='post_badge'/>} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=''/>
                <div className="post_footer">
                    <ChatBubbleOutline fontSize='small'/>
                    <RepeatOutlined fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishOutlined fontSize='small'/>
                </div>
            </div>
        </div>
    )
})

export default Post
