import * as S from './styles'
import LogoGoogle from '../../../assets/google.png'

const ButtonGoogle = () =>{
    return(
        <S.Container>
            
            <button>
                <img src={LogoGoogle} alt="Log in with Google" />
                <p>Log in with Google</p>
            </button>
        </S.Container>
    );
}

export default ButtonGoogle;