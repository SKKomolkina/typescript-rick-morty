import React, {ChangeEvent, FunctionComponent} from 'react';
import {Route, Redirect} from "react-router-dom";
import axios from "axios";

import './App.scss';

import SearchForm from '../SearchForm/SearchForm';
import CharacterList from "../CharacterList/CharacterList";
import {ICharacter, IFormData} from "../../types/types";
import CharacterPage from "../CharacterPage/CharacterPage";


const App: FunctionComponent = () => {
    const [characters, setCharacters] = React.useState<ICharacter[]>([]);

    const [selectedName, setSelectedName] = React.useState({});
    const [chekedCharacter, setCheckedCharacter] = React.useState(false);

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
            <Route path='/'>
                <SearchForm
                    characters={characters}

                    selectedName={selectedName}
                    setSelectedName={setSelectedName}

                    setCheckedCharacter={setCheckedCharacter}
                />

                <CharacterList characters={characters}/>
            </Route>

            {chekedCharacter ? <Redirect to='/character'/> : null}

            <Route path='/character'>
                <CharacterPage selectedName={selectedName}/>
            </Route>
        </main>
    );
}

export default App;
