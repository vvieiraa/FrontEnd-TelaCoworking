import * as S from './styles'
import Logo from '../../../assets/brand.png'

const Brand = () =>{
    return(
        <S.Container>
            <img src={Logo} alt="" />
            <p>Interactive Brand</p>
        </S.Container>
    );
}

export default Brand;