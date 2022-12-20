import * as S from './styles'

const EmailPassword = () =>{
    return(
        <S.Container>
            <input type="text" placeholder='Email' />
            <input type="password" placeholder='Password' className='password' />
        </S.Container>
    );
}

export default EmailPassword;