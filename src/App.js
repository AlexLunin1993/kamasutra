import { Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './libraries/Header/HeaderContainer';
import NavBar from './libraries/NavBar/NavBar';
import Sets from './libraries/Settings/Settings';
import NewsFeed from './libraries/NewsFeed/NewsFeed';
import DialogesContainer from './libraries/Dialoges/DialogesContainer';
import ProfileContainer from './libraries/Profile/ProfileContainer';
import UsersContainer from './libraries/users/usersContainer';
import Login from './libraries/users/login';

const App = (props) => {
  return (
    <div className='AppWrapper'>
      <div className='Header'>
        <Route path='/' render={() => <HeaderContainer />} />
      </div>
      <div className='NavBar'><NavBar /></div>
      <div className='Content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/dialoges' render={() => <DialogesContainer />} />
        <Route path='/my_music' render={() => <Sets />} />
        <Route path='/newsfeed' render={() => <NewsFeed />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>
    </div>

  );

}
export default App;
