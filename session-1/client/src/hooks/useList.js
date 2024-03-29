import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };

    // remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // List is empty ? true | false
    const isEmpty = (value) => value.lenght == 0;

    // TODO: Delop more function for lists.

    
    return {
        value, setValue, push, remove, isEmpty,
    };
};

export default useList;