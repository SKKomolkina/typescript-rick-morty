import React, {FunctionComponent} from 'react';
import {useHistory} from "react-router-dom";

import './StartPage.scss';
import portal from '../../images/portal.gif';

interface StartPageProps {
    setStartPage: React.Dispatch<React.SetStateAction<boolean>>,
}

const StartPage:FunctionComponent<StartPageProps> = ({setStartPage}) => {
    const [imageAnimation, setImageAnimation] = React.useState(false);
    const history = useHistory();

    const handlePushPage = () => {
        setImageAnimation(true);
        setTimeout(() => {
            history.push('/main');
            setStartPage(false);
        }, 2000);
    }

    return (
        <section className='start-page'>
            <img
                onClick={handlePushPage}
                className={imageAnimation ? 'start-page__portal start-page__portal-animation' : 'start-page__portal'}
                alt='Go!'
                src={portal}/>
        </section>
    );
};

export default StartPage;
