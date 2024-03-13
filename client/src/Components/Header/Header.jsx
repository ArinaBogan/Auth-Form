import Button from '@mui/material/Button';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (<>
        <div className={style.wrapper}>
            <Link to={'/'}><Button variant="text">Sign In</Button></Link>
            <Link to={'/reg'}><Button variant="text">Sign Up</Button></Link>
        </div>
    </>);
}

export default Header;