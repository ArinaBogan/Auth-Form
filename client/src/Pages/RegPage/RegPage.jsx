import Header from "../../Components/Header/Header";
import style from './style.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function RegPage() {
    return (<>
        <Header></Header>
        <div className={style.wrapper}>
            <h1>Welcome, let's create an account</h1>
            <p>Create an account to keep track of your customers, and contributors.
                Once your account has been created then don’t forget to verify your account through mail.</p>
            <div className={style.name}>
                <TextField style={{ width: '100%' }}
                    disabled
                    id="outlined-disabled"
                    label="name"
                    defaultValue="Your name"
                />
                <TextField style={{ width: '100%' }}
                    disabled
                    id="outlined-disabled"
                    label="surname"
                    defaultValue="Your surname"
                />
            </div>
            <div>
                <TextField style={{ width: '100%' }}
                    disabled
                    id="outlined-disabled"
                    label="email"
                    defaultValue="Your email"
                />
            </div>
            <div>
                <TextField style={{ width: '100%' }}
                    disabled
                    id="outlined-disabled"
                    label="password"
                    defaultValue="Must be at least 8 characters."
                />
            </div>
            <Button style={{ width: '15%', marginLeft: 'auto' }} variant="contained">Continue</Button>
            <p style={{ textAlign: 'end' }}>
                Already registered?
                <Link to={'/'}>Sign In</Link>
            </p>
        </div>

    </>);
}

export default RegPage;