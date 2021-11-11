import React from 'react';
import Posts from './Posts.js';

const MyPosts = (props) => {
    let allposts = props.profilePage.postsData.map(p => <Posts id={p.id} post={p.post} likesCount={p.likesCount} />);
    let newtext = props.profilePage.newPostText;
    return (

        <div>

            <textarea onChange={props.updateNewPostText}
                      value={newtext}
            />
            <button onClick={props.addPost}>Отправить</button>
            {allposts}

        </div>
    );
    
};

export default MyPosts;

