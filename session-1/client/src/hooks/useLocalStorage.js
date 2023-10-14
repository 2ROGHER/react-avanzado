import { useEffect, useState } from 'react';

//  en type script los genericos. 
//const useLocalStorage = <T>(key:string)=> {

// };

const useLocalStorage = (key, defaultValue = null) => {
    const [value, setValue] = useState(() => {
        // tambien se puede pasar funciones anomias que devuelvan algo.
        try {
            const item = localStorage.getItem(key);
            if (!item) {
                return JSON.parse(item);
            }
            return defaultValue;
        } catch (error) {
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // Aqui retornamos lo que queremos usar en cada uno de los componentes
    return [value, setValue ];
};

export default useLocalStorage;