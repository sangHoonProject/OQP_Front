import { error } from "console";
import { stringify } from "querystring";
import { toast } from "react-hot-toast";

const apiAddress = process.env.REACT_APP_API_ADRESS;
interface IsignUp {
    "nickname": string,
    "email": string,
    "password": string,
    "auth_code": string,
}

interface ISignIn  {
    email: string,
    password: string
}

class Auth {

    static sendEmail = async (email: { email: string }) => {
        try {
		let response = await fetch(`${apiAddress}/api/v1/mail/send`, {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
			body: JSON.stringify(email),
		});
        const data = response.json()
        if(response.ok) {
            return '성공적으로 이메일을 보냈습니다.'
        } else if(response.status == 404) {
            throw new Error('404')
        }else {
            throw new Error('404')
        }
	} catch (error) {
        throw new Error('error')
    }
}

    static SignUp = async (datas:IsignUp) => {
        try {
            let response = await fetch(`${apiAddress}/api/v1/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(datas)
            })
            const data = response
            if (response.ok) {
                return toast.success('회원가입 성공!')
            } else if (response.status == 404){
                return toast.error('올바르지 않은 이메일 인증코드')
            } else {
                return toast.error('회원가입 중 오류발생')
            }
                
            }
         catch (error) {
            return toast.error('회원가입 중 오류발생')
        }
    }

    static SignIn = async (userInfo: ISignIn) => {
        try {
            let response = await fetch(`${apiAddress}/api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(userInfo)
            })
            let data = await response.json()
            if (response.ok) {
                localStorage.setItem('nickname',data.nickname);
                localStorage.setItem('access_token',data.access_token);
                localStorage.setItem('refresh_token',data.refresh_token);
                window.location.href = './'
                return;
            } else if (response.status == 400) {
                throw new Error('이메일 또는 비밀번호가 잘못되었을 경우')
            } else if (response.status == 404) {
                throw new Error('이메일 또는 비밀번호가 잘못되었을 경우')
            }
        }
            catch (error) {
                throw new Error('이메일 또는 비밀번호가 잘못되었을 경우')
            }
        
        } 
    }



export default Auth;