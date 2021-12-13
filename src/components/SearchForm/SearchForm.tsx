import React, {FormEvent, FunctionComponent, MouseEventHandler} from 'react';
import {ICharacter} from "../../types/types";

import './SearchForm.scss';

interface SearchFormProps {
    characters: ICharacter[],
    selectedCharacter: object,
    setSelectedCharacter: React.Dispatch<React.SetStateAction<object>>,
    setReturnCharacter: React.Dispatch<React.SetStateAction<number>>,
    setCheckedCharacter: React.Dispatch<React.SetStateAction<boolean>>,
}

const SearchForm: FunctionComponent<SearchFormProps> = (
    {characters, setCheckedCharacter, setReturnCharacter}
) => {
    const [value, setValue] = React.useState('');

    const choseCharacter = ((evt: FormEvent<HTMLSelectElement>) => {
        setValue(evt.currentTarget.value);
    });

    const findByName = (inputName: string): void => {
        const id = characters.find(item => item.name === inputName);
        console.log(id);
        if (id) {
            setReturnCharacter(id.id);
            setCheckedCharacter(true);
        }
    }

    return (
        <div className='search-form'>
            <form className='search-form__form'>
                <select
                    className='search-from__select'
                    aria-placeholder='chose character!'
                    onChange={(evt) => choseCharacter(evt)}
                >
                    <option>Select person...</option>
                    {characters.map(item =>
                        <option key={item.id}>
                            {item.name}
                        </option>)}
                </select>

                <button className='search-form__button' onClick={() => findByName(value)} type='button'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
