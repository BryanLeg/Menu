import React from 'react';
import Button from './Button';

const Buttons = ({ categories, categoryFilter }) => {
    return (
        <header className='header'>
            <h1>Our Menus</h1>
            <div className="color"></div>
            <nav>{categories.map(category => {
                return <Button key={categories.indexOf(category)} category={category} categoryFilter={categoryFilter} />
            })}</nav>
        </header>
    )
};

export default Buttons;
