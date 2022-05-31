import React from 'react'
import * as C from './styles';

import Stories from '../Stories';
import NewPost from '../NewPost';
import Posts from '../Posts'

const Feed = () => {
  return (
    <C.Container>
            <Stories />
            <NewPost />
            <Posts />    
             
    </C.Container>
  )
}

export default Feed;