import React from 'react';
import Posts from './Posts.js';

const MyPosts = (props) => {
    
    let allposts = props.profilePage.postsData.map(p => <Posts post={p.post} likesCount={p.likesCount} />);
    let text = props.profilePage.newPostText;
    return (

        <div>

            <textarea onChange={props.onPostChange}
                      value={text}
            />
            <button onClick={props.addPost}>Отправить</button>
            {allposts}

        </div>
    );
    
};

export default MyPosts;

