import Navbar from './components/navbar.js'
import Blogs from './blogs/Blogs.js';
import Login from './pages/login.js';
import Signup from './signup/signup-button.js'
import Tagline from './signup/Tagline.js';

export default function App(){
    return(
        <>
        <div className='nav-colum'>
            <Navbar/>
            <Signup/>
        </div>
        <Tagline/>
        <div className='main-body'>
            <div><Blogs condition= {true}/></div>           
            <div><Login/></div>
        </div>
        <footer></footer>
        </>
    )
}