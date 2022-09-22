import React, {useEffect} from 'react';
import {SelectItem} from "./SelectItem";

export const TemplateSelect = ({valueState, setValueState, onChange, options, placeholder}) => {

    useEffect(() => {
        const val = valueState?.value || '';
        onChange(val);
    }, [valueState]);


    return (
        <div>
            <SelectItem options={options}
                        onChange={setValueState}
                        placeholder={placeholder}
                        isClearable
                        isSearchable={false}
                        value={valueState} />
        </div>
    );
};

