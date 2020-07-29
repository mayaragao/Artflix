import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {Link} from 'react-router-dom';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    
    const [ categorias, setCategorias ] = useState([]);
    const [ values, setValues ] = useState(valoresIniciais);
    
    function setValue(chave, valor) {
        setValues({
            ...values,
            //chave: nome, descricao,cor
            [chave]: valor, //nome:'valor'
        })
    }

    function handleChange(infosDoEvento) {
        //const { getAttribute, value} = infosDoEvento.target ;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
        {/* 
            State - Estado guarda um valor /
            Vai conter dados, basicamente é uma variavel de controle como true e false no menu,
            -> há uma separacao dos dados da nossa tela e os dados que serao apresentados na tela do usuario       
        */}      
            <h1>Nome da Categoria: {values.nome} </h1>
            <form 
                onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values 
                ]);

                setValues(valoresIniciais);

            }}>


           {/* <div>
                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                        name= "nome"
                        value = {values.nome}
                        onChange={HandleChange}
                    />
                </label>
                </div>
                
                <div>
                    <label>
                        Descrição:
                        <input
                            type="date"
                            name= "descricao"
                            value = {values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                
            <div>
                <label>
                    Cor:
                    <input
                        type="color"
                        name= "cor"
                        value = {values.cor}
                        onChange={handleChange}
                    />
                </label>                    
            </div>
        */}

            <FormField 
                label="Nome da categoria"
                type= "text"
                name= "nome"
                value={values.nome}
                onChange={handleChange}
            />
            <FormField 
                label="Descrição"
                type= "textarea"
                name= "descricao"
                value={values.descricao}
                onChange={handleChange}
            />
            <FormField 
                label="Cor"
                type= "color"
                name= "cor"
                value={values.cor}
                onChange={handleChange}
            />
            

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                          {categoria.nome}  
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;