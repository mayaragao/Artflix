import React from 'react';

function ButtonLink(props) {
    // props => são objetos passados {className="oque alguem passar", href: "/"} 
    console.log(props);

    return(
        <header>
            <a href={props.href} className={props.className}>
                {props.children}
            </a>
        </header>

    );
}
export default ButtonLink; 