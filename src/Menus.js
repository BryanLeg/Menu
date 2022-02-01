import React from 'react';
import Menu from './Menu';

const Menus = ({ menus }) => {
    return (
        <section className='section'>{menus.map(menu => {
            return <Menu key={menu.id} {...menu} />
        })}
        </section>
    )
};

export default Menus;
