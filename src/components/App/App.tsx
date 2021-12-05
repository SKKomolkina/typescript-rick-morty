import React, {FunctionComponent} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import axios from "axios";

import './App.scss';
import background from '../../images/background2.jpg';
import logo from '../../images/logo.png';

import SearchForm from '../SearchForm/SearchForm';
import CharacterList from "../CharacterList/CharacterList";
import {ICharacter} from "../../types/types";
import CharacterPage from "../CharacterPage/CharacterPage";

const App: FunctionComponent = () => {
    const [characters, setCharacters] = React.useState<ICharacter[]>([]);

    const [selectedCharacter, setSelectedCharacter] = React.useState<object>({});
    const [returnCharacter, setReturnCharacter] = React.useState<number>(0);

    const [checkedCharacter, setCheckedCharacter] = React.useState(false);

    React.useEffect(() => {
        fetchCharacters();
    }, []);

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

    return (
        <main className="application">
            <img className='application__background' src={background} alt='background'/>
            <img src={logo} alt={logo} className='application__logo'/>
            <Switch>
                <Route exact path='/'>
                    <SearchForm
                        characters={characters}

                        selectedCharacter={selectedCharacter}
                        setSelectedCharacter={setSelectedCharacter}
                        setReturnCharacter={setReturnCharacter}

                        setCheckedCharacter={setCheckedCharacter}
                    />

                    <CharacterList characters={characters}/>

                    {checkedCharacter ? <Redirect to='/character'/> : null}
                </Route>

                <Route path='/character'>
                    <CharacterPage returnCharacter={returnCharacter}/>
                </Route>
            </Switch>
        </main>
    );
}

export default App;
