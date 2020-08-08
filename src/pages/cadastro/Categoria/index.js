import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault'; 
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  const [categorias, setCategorias] = useState([]);  
  const [values, setValues] = useState(valoresIniciais);

  function setValue (chave, valor){
    //chave: nome, descricao, cor
    setValues({
      ...values,
      [chave]: valor //nome: 'valor'
    })
  }

  function handleChange(infoEvento){
    //const { getAttribute, value } = infoEvento.target
    setValue(
      infoEvento.target.getAttribute('name'), 
      infoEvento.target.value
    );      
  }
    
  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form  onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          console.log('Você tentou enviar o form')
          setCategorias([
            ...categorias,
            values
          ]);  
          setValues(valoresIniciais);
        }}>

        <FormField 
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}/>

        <FormField
          label="Descrição" 
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}/>

        <FormField
          label="Cor" 
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}/>      

        <button>Cadastrar</button>
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
            Ir para home
        </Link>
      </PageDefault>
    )
  }
export default CadastroCategoria;