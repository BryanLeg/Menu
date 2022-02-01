import React from 'react';

const Menu = ({ title, price, img, desc }) => {
    return (
        <article>
            <img src={img} alt={title} />
            <div className="text">
                <header className="articleHeader">
                    <h4>{title}</h4>
                    <h4>$ {price}</h4>
                </header>
                <p>
                    {desc}
                </p>
            </div>
        </article>
    )
};

export default Menu;