import HomeTodoLogo from '/home_todo_320.svg'

import Clock from './../../components/Clock/Clock'
import Greeting from '../../components/Greeting/Greeting';

import './HomePage.scss'

function HomePage() {
  return (
    <div className='wrapper'>
      <header className="header">
        <div className="header__title">
          <h1 className='header__title-text'>Home Todo</h1>
        </div>
        <img src={HomeTodoLogo} className="header__logo" alt="Vite logo" />
      </header>
      <div className="greeting">
        <Greeting />
        <Clock />
      </div>
    </div>
  )
}

export default HomePage