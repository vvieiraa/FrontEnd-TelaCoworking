import Subtitulo from '../../atoms/subtitulo/subtitulo';
import Titulo from '../../atoms/titulo/titulo';
import * as S from './styles'

const TituloComSubtitulo = () =>{
    return(
        <S.Container>
            <div className='box-principal'>
                    <Titulo />
                    <Subtitulo />  
            </div>
        </S.Container>
    );
}

export default TituloComSubtitulo;