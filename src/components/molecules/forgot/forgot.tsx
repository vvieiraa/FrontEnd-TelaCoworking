import * as S from './styles'

const Forgot = () =>{
    return(
        <S.Container>
            <div className='Checkbox'>
                <input type="checkbox" />
                <p>Remember for 30 days</p>
            </div>
            <div>
                <a href="#">Forgot Password?</a>    
            </div>
        </S.Container>
    );
}

export default Forgot;