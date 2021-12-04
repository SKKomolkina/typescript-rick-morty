import React, {FunctionComponent} from 'react';
import {ICharacter} from "../../types/types";

import './CharacterItem.scss';

interface CharacterItemProps {
    character: ICharacter;
}

const CharacterItem:FunctionComponent<CharacterItemProps> = ({character}) => {
    return (
        <article className='character' key={character.id}>
            <img className='character__image' src={character.image} alt={character.name}/>
            <h3 className='character__title'>{character.name}</h3>
            <p className='character__gender'>{character.gender}</p>
        </article>
    );
};

export default CharacterItem;
