import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSignUp } from "../hooks/useAuth";
import AuthLayout from "../components/ui/AuthLayout";
import GlassCardComponent, { CardTitle, InputGroup, StyledInput, ErrorText, StyledButton, LinkText } from "../components/ui/GlassCard";

function SignUp() {
    const REGEX = {
        // 영문 소문자/숫자/언더스코어, 4~20자, 첫 글자는 영문
        username: /^[a-z][a-z0-9_]{3,19}$/,

        // 영문 대소문자 + 숫자 + 특수문자 각 1개 이상, 8~20자
        password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,

        // 한글 2~10자 또는 영문 2~30자 (공백 일부 허용)
        name: /^[가-힣]{2,10}$|^[a-zA-Z\s]{2,30}$/,

        // 표준 이메일
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    };

    const emptyInputs = {
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
        email: "",
    };

    const [ inputValues, setInputValues ] = useState(emptyInputs);
    const [ inputErrors, setInputErrors ] = useState(emptyInputs);
    const [ signUpDisabled, setSignUpDisabled ] = useState(true);

    const signUpMutation = useSignUp();

    const handleInputOnChange = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSignUpOnClick = async () => {
        await signUpMutation.mutateAsync(inputValues);
        setInputValues(emptyInputs);
    }

    const validate = ({username, password, confirmPassword, name, email}) => {
        const errors = {};

        if (!REGEX.username.test(username) && !!username) {
            errors.username = "영문 소문자로 시작, 4~20자 (숫자, 특수문자 -, _ 포함 가능)";
        }
        if (!REGEX.password.test(password) && !!password) {
            errors.password = "영문, 순자, 특수문자 포함 8~20자";
        }
        if (password !== confirmPassword && !!confirmPassword) {
            errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
        }
        if (!REGEX.name.test(name) && !!name) {
            errors.name = "이름을 정확히 입력해 주세요.";
        }
        if (!REGEX.email.test(email) && !!email) {
            errors.email = "올바른 이메일 형식이 아닙니다.";
        }

        return errors;
    }

    useEffect(() => {
        setInputErrors(validate(inputValues));
    }, [inputValues]);

    useEffect(() => {
        const inputEmptyValuesEntries = Object.values(inputValues).filter(value => !value);
        const inputErrosEntries = Object.entries(inputErrors);
        setSignUpDisabled(inputEmptyValuesEntries.length > 0 || inputErrosEntries.length > 0);
    }, [inputErrors]);

    return (
        <AuthLayout>
            <GlassCardComponent>
                <CardTitle>SIGN UP</CardTitle>
                <InputGroup>
                    <StyledInput type="text" name="username" placeholder="사용자이름" value={inputValues.username} onChange={handleInputOnChange} />
                    <ErrorText>{inputErrors.username}</ErrorText>
                </InputGroup>
                <InputGroup>
                    <StyledInput type="password" name="password" placeholder="비밀번호" value={inputValues.password} onChange={handleInputOnChange} />
                    <ErrorText>{inputErrors.password}</ErrorText>
                </InputGroup>
                <InputGroup>
                    <StyledInput type="password" name="confirmPassword" placeholder="비밀번호 확인" value={inputValues.confirmPassword} onChange={handleInputOnChange} />
                    <ErrorText>{inputErrors.confirmPassword}</ErrorText>
                </InputGroup>
                <InputGroup>
                    <StyledInput type="text" name="name" placeholder="이름" value={inputValues.name} onChange={handleInputOnChange} />
                    <ErrorText>{inputErrors.name}</ErrorText>
                </InputGroup>
                <InputGroup>
                    <StyledInput type="text" name="email" placeholder="이메일" value={inputValues.email} onChange={handleInputOnChange} />
                    <ErrorText>{inputErrors.email}</ErrorText>
                </InputGroup>
                <StyledButton disabled={signUpDisabled} onClick={handleSignUpOnClick}>가입하기</StyledButton>
                <LinkText>
                    이미 계정이 있으신가요? <Link to={"/auth/signin"}>로그인</Link>
                </LinkText>
            </GlassCardComponent>
        </AuthLayout>
    )
}

export default SignUp;