import { useState } from "react";
import { Link } from "react-router";
import { useSignIn } from "../hooks/useAuth";
import AuthLayout from "../components/ui/AuthLayout";
import GlassCardComponent, { CardTitle, InputGroup, StyledInput, StyledButton, LinkText } from "../components/ui/GlassCard";

function SignIn() {
    const emptyInputValues = {
        username: "",
        password: "",
    };

    const [ inputValues, setInputValues ] = useState(emptyInputValues);

    const signInMutation = useSignIn();

    const handleInputOnChange = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSignInOnClick = () => {
        signInMutation.mutateAsync(inputValues);
        setInputValues(emptyInputValues);
    }


    return (
        <AuthLayout>
            <GlassCardComponent>
                <CardTitle>LOGIN</CardTitle>
                <InputGroup>
                    <StyledInput type="text" name="username" placeholder="사용자이름" value={inputValues.username} onChange={handleInputOnChange} />
                </InputGroup>
                <InputGroup>
                    <StyledInput type="password" name="password" placeholder="비밀번호" value={inputValues.password} onChange={handleInputOnChange} />
                </InputGroup>
                <StyledButton onClick={handleSignInOnClick}>로그인</StyledButton>
                <LinkText>
                    계정이 없으신가요? <Link to={"/auth/signup"}>회원가입</Link>
                </LinkText>
            </GlassCardComponent>
        </AuthLayout>
    )
}

export default SignIn;