import { Route } from 'react-router-dom';
import './App.css';
import Header from './libraries/Header/Header.js';
import NavBar from './libraries/NavBar/NavBar';
import Sets from './libraries/Settings/Settings';
import NewsFeed from './libraries/NewsFeed/NewsFeed';
import DialogesContainer from './libraries/Dialoges/DialogesContainer';
import Profile from './libraries/Profile/Profile';

const App = (props) => {
  return (
    <div className='AppWrapper'>
      {/* <div className='Header'><Header /></div> */}
      <div className='Header'>
        <Route path='/' render={() => <Header />} />
      </div>
      <div className='NavBar'><NavBar /></div>
      <div className='Content'>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialoges' render={() => <DialogesContainer />} />
        <Route path='/my_music' render={() => <Sets />} />
        <Route path='/newsfeed' render={() => <NewsFeed />} />
      </div>
    </div>

  );

}
export default App;
