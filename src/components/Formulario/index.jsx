import { useState , useEffect} from "react"

const Formulario = () => {
    const [mateiraA, setMateriaA] = useState(0); //useState uma maneira de armazenar dados que podem mudar ao longo do te
    const [mateiraB, setMateriaB] = useState(0);
    const [mateiraC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("O componente finalizoou")
        }
    }, [])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado =() => {
        const soma  = mateiraA + mateiraB + mateiraC;
        const media = soma / 3;

        if (media >= 7){
            return(
                <p>Olá {nome}, foi  <b> APROVADO </b></p>
            )
        }
        else {
            return(
                <p>Olá {nome} foi reprovado</p>
            )
        }
    }

    
    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                <li key = {item}> {item} </li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A"  onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario