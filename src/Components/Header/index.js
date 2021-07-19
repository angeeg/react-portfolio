import React from 'react';

function Header({children}) {


    return (
        <header>
        <h2>
            <a>Angeleena</a>
        </h2>
        {children}
        </header>
    )
};

export default Header;