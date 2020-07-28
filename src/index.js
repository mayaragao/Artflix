import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';

import { BrowserRouter , Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//criar rapidamente uma pagina de erro
const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component= {Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')

  /* basicamente, o switch vai trocar a rota dos componentes, de acordo com o que
    foi estabelecido no Route, com o caminho delimitado. Estamos fazendo a troca 
    de componentes do browser a mao de acordo com os caminhos. */

  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
*/
  );