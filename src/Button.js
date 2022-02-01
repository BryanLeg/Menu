import React from 'react';

const Button = ({ category, categoryFilter }) => {

    return (
        <button className={`${category}, btn`} onClick={() => categoryFilter(category)}>{category}</button>
    )
};

export default Button;
