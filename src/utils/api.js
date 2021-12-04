const { baseUrl } = 'https://rickandmortyapi.com/api';

export const getCharacter = (id) => {
    return fetch(`${ baseUrl }/character/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((character) => checkResult(character));
}

export const getAllCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((character) => checkResult(character));
}

const checkResult = (res) => {
    if (res.ok) {
        return res.json;
    }
    return Promise.reject(`Ошибка ${res.status}`);
}
