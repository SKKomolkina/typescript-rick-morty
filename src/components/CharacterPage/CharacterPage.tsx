import React, {FunctionComponent} from 'react';

interface CharacterPageProps {
    selectedName: object,
}

const CharacterPage:FunctionComponent<CharacterPageProps> = (selectedName) => {

    console.log(selectedName);

    return (
        <section>
            <div>
                <h2>{selectedName}</h2>
                <img/>
                <p></p>
            </div>
        </section>
    );
};

export default CharacterPage;
