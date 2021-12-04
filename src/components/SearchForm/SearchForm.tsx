import React, {FormEvent, FunctionComponent, MouseEventHandler} from 'react';
import {ICharacter} from "../../types/types";

interface SearchFormProps {
    characters: ICharacter[],
    selectedName: {},
    setSelectedName: React.Dispatch<React.SetStateAction<object>>,
    setCheckedCharacter: React.Dispatch<React.SetStateAction<boolean>>,
}

const SearchForm: FunctionComponent<SearchFormProps> = ({characters, selectedName, setSelectedName, setCheckedCharacter}) => {
    const [value, setValue] = React.useState('');

    const choseCharacter = ((evt: FormEvent<HTMLSelectElement>) => {
        setValue(evt.currentTarget.value);
    });

    const findByName = (inputName: string): void => {
        setSelectedName(() => characters.find(item => item.name === inputName));
        setCheckedCharacter(true);
    }

    console.log(value);
    console.log(selectedName);

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
