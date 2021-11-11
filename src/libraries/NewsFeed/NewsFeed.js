import s from './avatars.module.css';

const NewsFeed = () => {
        // return (
        //         <div>ss</div>
        //  );

       
return (
        <div className ={s.Avatars}>
                <ul>
                <li className = {s.li}> <img className = {s.img} src='https://natalyland.ru/wp-content/uploads/9/c/d/9cd58859400bca5b473122e3d2dde1e8.jpeg' alt='avatar1' /> </li>
                <li className = {s.li}> <img className = {s.img} src='https://wikipet.ru/wp-content/uploads/2018-04/1524041489_australian-shepherd-health.jpg' alt='avatar2' /> </li>
                </ul>
        </div>
);
}
export default NewsFeed;