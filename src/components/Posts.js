import React from "react"
import Post from "./Post"

export default ({posts}) => {
    if (!posts.length) {
        return <p className="text-centre">No posts yet</p>
    }
    return posts.map( post => <Post post={post} key={post} />)
}