import React from 'react'
import * as C from './styles';

import Stories from '../Stories';
import NewPost from '../NewPost';

const Feed = () => {
  return (
    <C.Container>
            <Stories />
            <NewPost />
            {/*
            <Posts />    
             */}
    </C.Container>
  )
}

export default Feed;