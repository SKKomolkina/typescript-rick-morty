import React, {FunctionComponent} from 'react';
import {ICharacter} from "../../types/types";

import './CharacterList.scss';

import CharacterItem from "../CharacterItem/CharacterItem";

interface CharacterListProps {
    characters: ICharacter[];
}

const CharacterList:FunctionComponent<CharacterListProps> = ({characters}) => {
    return (
        <section className='character-list'>
            {characters.map(item =>
                <CharacterItem key={item.id} character={item}/>
            )}
        </section>
    );
};

export default CharacterList;
