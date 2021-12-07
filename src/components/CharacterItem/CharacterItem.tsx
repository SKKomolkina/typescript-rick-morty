import React, {FunctionComponent, MouseEventHandler} from 'react';
import {ICharacter} from "../../types/types";

import './CharacterItem.scss';

interface CharacterItemProps {
    character: ICharacter;
}

const CharacterItem: FunctionComponent<CharacterItemProps> = ({character}) => {
    const [hoverImage, setHoverImage] = React.useState(false);

    return (
        <article className='character' key={character.id}>
            <img
                onMouseEnter={() => setHoverImage(true)}
                onMouseLeave={() => setHoverImage(false)}
                className={hoverImage ? 'character__image character__image_hover' : 'character__image'}
                src={character.image}
                alt={character.name}
            />
            <h3
                onMouseEnter={() => setHoverImage(true)}
                onMouseLeave={() => setHoverImage(false)}
                className='character__title'
            >
                {character.name}
            </h3>
        </article>
    );
};

export default CharacterItem;
