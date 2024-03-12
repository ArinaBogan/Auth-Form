import Header from "../../Components/Header/Header";
import style from './style.module.scss';

function HomePage() {
    return (<>
        <Header></Header>
        <div className={style.img}>
        <div className={style.wrapper}>
            <h2>Woohoo!</h2>
            <p>You have successfully logged into the system, and a token has been assigned to you.
                 To log out, please click on 'Sign Out'.</p>
        </div>
        </div>
    </>);
}

export default HomePage;