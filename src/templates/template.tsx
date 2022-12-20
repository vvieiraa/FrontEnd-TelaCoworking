
import Brand from '../components/atoms/brand/brand';
import ButtonGoogle from '../components/atoms/buttonGoogle/buttonGoogle';
import Subtitulo from '../components/atoms/subtitulo/subtitulo';
import EmailPassword from '../components/molecules/emailPassword/emailPassword';
import Forgot from '../components/molecules/forgot/forgot';
import TituloComSubtitulo from '../components/molecules/tituloComSubtitulo/tituloComSubtitulo';
import Welcome from '../components/molecules/welcome/welcome';
import BoxDireita from './boxDireita/boxDireita';
import BoxEsquerda from './boxEsquerda/boxEsquerda';
import * as S from './styles'

const Template = () => {
    return(
        <S.Container>
            <div className='box'>
                <div className='box-esquerda'>
                    <BoxEsquerda />
                </div>
                <div className='box-direita'>
                    <BoxDireita />
                </div>
            </div>
        </S.Container>
    );
}

export default Template;