import React, {FormEvent, FunctionComponent, MouseEventHandler} from 'react';
import {ICharacter} from "../../types/types";

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
        if(id) {
            setReturnCharacter(id.id);
            setCheckedCharacter(true);
        }
    }

    return (
        <form>
            <select onChange={(evt) => choseCharacter(evt)}>
                {characters.map(item =>
                    <option key={item.id}>
                        {item.name}
                    </option>)}
            </select>

            <button onClick={() => findByName(value)} type='button'/>
        </form>
    );
};

export default SearchForm;
