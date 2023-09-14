import React from 'react';
import useCheckBoxes from '../hooks/useCheckBox';

function YourComponent() {
    const totalCheckboxes = 12;
    const initialCheckedState = new Array(totalCheckboxes).fill(false);


    const { checkedState, toggleCheckBox } = useCheckBoxes(initialCheckedState);

    return (
        <div>
            <h1>Checkboxes</h1>
            {checkedState.map((isChecked, index) => (
                <label key={index}>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCheckBox(index)}
                    />
                    Checkbox {index + 1}
                </label>
            ))}
        </div>
    );
}

export default YourComponent;