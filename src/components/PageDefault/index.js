import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';


//estilizando este componente criado main com a ajuda da lib 'styled-components'
const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;
    
//fazendo um 'sanduiche' dos componentes para uma pagina default personalizada

function PageDefault({ children }) {
    return (
        //tag morta - fragmento pro react <></>
        //ou utilizar <React.fragment>
        <>
            <Menu />
                <Main>
                    {children}
                </Main>    
            <Footer />
        </>    
    );
}

export default PageDefault;