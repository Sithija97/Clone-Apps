import { Avatar } from '@material-ui/core'
import { VerifiedUser } from '@material-ui/icons'
import React from 'react'

function Post() {
    return (
        <div className='post'>
            <div className="post_avatar">
            <Avatar src="https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/120949464_2667999066834394_4728770985596586303_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=sdDgLjncdKIAX8pHbr8&_nc_ht=scontent.fcmb4-1.fna&oh=694ce18fd0324c10dd51c9a2eb8009ea&oe=605A4FA3"/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Sithija Shehara <span>
                                <VerifiedUser className='post_badge'/>
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>I'm working on the twitter clone 🐦 </p>
                    </div>
                </div>
                <img src="https://hiring.monster.com/employer-resources/empres-resources/uploads/sites/2/2019/02/0b9a484e73ce137bf015e0dde595f466-700x525.jpg" alt=''/>
            </div>
        </div>
    )
}

export default Post
