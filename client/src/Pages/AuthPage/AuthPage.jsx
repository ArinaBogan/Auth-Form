import Header from "../../Components/Header/Header";
import style from './style.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function AuthPage() {
    return (<>
        <Header></Header>
        <div className={style.wrapper}>
            <h1>Sign In</h1>
            <p>Log in to access your account or create one. Verify your email for seamless access.</p>

            <TextField style={{ width: '100%' }}
                disabled
                id="outlined-disabled"
                label="email"
                defaultValue="Your email"
            />
            <TextField style={{ width: '100%' }}
                disabled
                id="outlined-disabled"
                label="password"
                defaultValue="Must be at least 8 characters."
            />

            <Button style={{ width: '15%',marginLeft:'auto' }} variant="contained">Continue</Button>
            <p style={{textAlign:'end'}}>Not registered yet?
            <Link to={'/reg'}>Sign Up</Link> 
             </p>
        </div>

    </>);

}

export default AuthPage;