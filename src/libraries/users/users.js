import React from "react";
import { NavLink } from "react-router-dom";
import s from './users.module.css'
import userPhoto from '../../assets/userphoto.png'


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
    pages.push(1);

    for (let i = 2; i < pagesCount; i++) {
        if (i <= props.currentPage + 5) {
            if (i >= props.currentPage - 5) {

                pages.push(i)
            }
        }
    }
    pages.push(pagesCount);

    return (
        <div>
            <div>
                {pages.map(p => {

                    return (
                        <button onClick={(_e) => { props.onPageChanged(p); }}
                            className={props.currentPage === p && s.selectedPage}>
                            {p}</button>)
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                            </div>
                        </NavLink>
                        {u.name}
                        <div>
                            {u.followed ?                            
                                <button onClick={() => {
                                    debugger
                                    props.unFollowUser(u.id)
                                }}>unfollow</button>
                                :
                                <button onClick={() => {
                                    debugger
                                    props.followUser(u.id)
                                }}>follow</button>
                            }
                        </div>
                    </span>
                </div>)
            }
        </div>
    );
};


export default Users;