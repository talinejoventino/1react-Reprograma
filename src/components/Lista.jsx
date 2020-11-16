import series from '../components/services/Data'

const Lista = () =>{
    return(
        <div>
            {series.map(serie => 
                <div key={serie.id}>
                    <h2 >{serie.nome} - {serie.ano} </h2>
                    <h3> {serie.temporadas}</h3>
                    <img widht={90} src={serie.imagem} alt='Capa das séries'/>
                    <p>{serie.sinopse}</p>
                </div>
                
            )}
        </div>
    )
}
export default Lista;