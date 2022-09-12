import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

export const SelectItem = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#A6DF58',
            border: 'none',
            color: '#000000'

        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            backgroundColor: '#A6DF58',
        }),
    },
})`
    width: 300px;
    border: none;
    backgroundColor: '#A6DF58';
    color: '#000000';        
`;
