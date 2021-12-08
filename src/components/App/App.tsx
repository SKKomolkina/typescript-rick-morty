import React, {FunctionComponent} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {Route, Redirect, Switch} from "react-router-dom";
import axios from "axios";

import './App.scss';
import logo from '../../images/logo.png';

import SearchForm from '../SearchForm/SearchForm';
import CharacterList from "../CharacterList/CharacterList";
import {ICharacter} from "../../types/types";
import CharacterPage from "../CharacterPage/CharacterPage";
import StartPage from "../StartPage/StartPage";

const App: FunctionComponent = () => {
    const [startPage, setStartPage] = React.useState(true);
    const [hoverLogo, setHoverLogo] = React.useState(false);

    const [characters, setCharacters] = React.useState<ICharacter[]>([]);
    const [selectedCharacter, setSelectedCharacter] = React.useState<object>({});
    const [returnCharacter, setReturnCharacter] = React.useState<number>(1);
    const [checkedCharacter, setCheckedCharacter] = React.useState(false);

    const history = useHistory();
    const location = useLocation();

    //
    React.useEffect(() => {
        if (location.pathname === '/') {
            setStartPage(true)
        } else {
            setStartPage(false);
        }
        console.log(location);
    }, [location]);

    React.useEffect(() => {
        fetchCharacters();
    }, []);

//
    async function fetchCharacters() {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character')
            let getList = response.data.results;
            console.log(getList)
            setCharacters(getList);
        } catch (e) {
            console.log(e);
        }
    }

//
    return (
        <main className={startPage ? 'application-start' : 'application'}>
            <div>
                {startPage ? null :
                    (<img
                        onMouseEnter={() => setHoverLogo(true)}
                        onMouseOut={() => setHoverLogo(false)}
                        src={logo} alt={logo}
                        className={hoverLogo ? 'application__logo application__logo_hover' :
                            'application__logo'}
                    />)}

                <Switch>
                    <Route exact path='/'>
                        <StartPage setStartPage={setStartPage}/>
                    </Route>

                    <Route path='/main'>
                        <SearchForm
                            characters={characters}

                            selectedCharacter={selectedCharacter}
                            setSelectedCharacter={setSelectedCharacter}
                            setReturnCharacter={setReturnCharacter}

                            setCheckedCharacter={setCheckedCharacter}
                        />

                        <CharacterList characters={characters}/>

                        {checkedCharacter ? <Redirect to={`/character/${returnCharacter.valueOf()}`}/> :
                            null}
                    </Route>

                    <Route path={`/character/${returnCharacter.valueOf()}`}>
                        <CharacterPage returnCharacter={returnCharacter}/>
                    </Route>

                    <Route path='*'>
                        <Redirect to='/main'/>
                    </Route>
                </Switch>
            </div>
        </main>
    );
}

export default App;
