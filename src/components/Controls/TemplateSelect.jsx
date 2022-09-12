import React, {useEffect, useState} from 'react';
import {SelectItem} from "./SelectItem";

export const CustomSelect = ({onChange}) => {
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || '';
        onChange(regionValue);
    }, [region]);

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
                        placeholder='Выберите регион'
                        isClearable
                        isSearchable={false}
                        value={region} />
        </div>
    );
};

