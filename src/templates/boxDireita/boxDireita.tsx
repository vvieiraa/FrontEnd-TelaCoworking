import Brand from '../../components/atoms/brand/brand';
import ButtonGoogle from '../../components/atoms/buttonGoogle/buttonGoogle';
import ButtonLogin from '../../components/atoms/buttonLogin/buttonLogin';
import SignUp from '../../components/atoms/signUp/signUp';
import EmailPassword from '../../components/molecules/emailPassword/emailPassword';
import Forgot from '../../components/molecules/forgot/forgot';
import Welcome from '../../components/molecules/welcome/welcome';
import * as S from './styles'

const BoxDireita= () =>{
    return(
        <S.Container>
            <div className='Box'>
                    <div className='espaco1'>

                    </div>
                    <div className='espaco2'>
                        <div className='Brand'>
                            <Brand />
                        </div>
                            <div className='Welcome'>
                                <Welcome />
                            </div>
                            <div className='Google'>
                                <ButtonGoogle />
                            </div>
                            <div className='Email'>
                                <EmailPassword />
                            </div>
                            <div className='Forgot'>
                                <Forgot />
                            </div>
                            <div className='ButtonLogin'>
                                <ButtonLogin />
                            </div>
                            <div className='CriarConta'>
                                <SignUp />
                        </div>
                    </div>
                    <div className='espaco3'>
                        
                    </div>
            </div>
        </S.Container>
    );
}

export default BoxDireita;