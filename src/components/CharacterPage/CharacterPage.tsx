import React, {FunctionComponent} from 'react';
import axios from "axios";
import {ICharacter} from "../../types/types";

interface CharacterPageProps {
    returnCharacter: number
}

const CharacterPage:FunctionComponent<CharacterPageProps> = ({returnCharacter}) => {
const [characterItem, setCharacterItem] = React.useState<ICharacter>();

    console.log(returnCharacter);

    React.useEffect(() => {
        getCharacter(returnCharacter);
    }, [returnCharacter]);

    async function getCharacter(id: number) {
        try{
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

            const item = response.data;
            setCharacterItem(item);

        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <section className='character-page'>
            <div key={characterItem?.id} className='character-page__item'>
                <h2>{characterItem?.name}</h2>
                <img src={characterItem?.image} alt={characterItem?.name}/>
                <p>{characterItem?.species}</p>
            </div>
        </section>
    );
};

export default CharacterPage;
