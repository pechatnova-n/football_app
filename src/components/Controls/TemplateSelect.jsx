/*
import React, {useEffect, useState} from 'react';
import {SelectItem} from "./SelectItem";

export const CustomSelect = ({value, setValue, onChange, options, placeholder}) => {
   /!* const [region, setRegion] = useState('');*!/

    useEffect(() => {
        const val = value?.value || '';
        onChange(val);
    }, [value]);

    const options = [
        { value: 'Asia', label: 'Азия' },
        { value: 'Africa', label: 'Африка' },
        { value: 'Australia', label: 'Австралия' },
        { value: 'Europe', label: 'Европа' },
        { value: 'World', label: 'Мир' },
        { value: 'Oceania', label: 'Океания' },
        { value: 'N/C America', label: 'Северная Америка' },
        { value: 'South America', label: 'Южная Америка' },
    ]

    return (


        <div>
            <SelectItem options={options}
                        onChange={setRegion}
                        placeholder={placeholder}
                        isClearable
                        isSearchable={false}
                        value={region} />
        </div>
    );
};

*/
