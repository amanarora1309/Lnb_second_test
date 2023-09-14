import { useState, useEffect } from 'react';

function useCheckBoxes(initialState) {
    const [checkedState, setCheckedState] = useState(initialState);

    useEffect(() => {
        const allChecked = checkedState.every((isChecked) => isChecked);
        console.log('All checkboxes checked:', allChecked);
    }, [checkedState]);

    const toggleCheckBox = (index) => {
        const newCheckedState = [...checkedState];
        newCheckedState[index] = !newCheckedState[index];
        setCheckedState(newCheckedState);
    };

    return { checkedState, toggleCheckBox };
}

export default useCheckBoxes;