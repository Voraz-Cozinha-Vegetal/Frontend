import { FormContainer } from "../styles/commons/FormContainer";
import logo from "../assets/logo.white.png";
import { Form } from "../styles/commons/Form";
import { useState } from "react";
import { Button } from "../styles/commons/Button";
import { Margin } from "../styles/commons/Margin";
import { useNavigate } from "react-router-dom";
import appService from "../service/service";
import { AuthWrapper } from "../styles/authentication-styles/AuthWrapper";
import { Text } from "../styles/authentication-styles/Text";
import { Logo } from "../styles/authentication-styles/Logo";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disabledInput, setDisabledInput] = useState(false);
    const navigate = useNavigate();

    function createUser(e) {
        e.preventDefault();
        setDisabledInput(true);

        const body = {
            email,
            password,
            confirmPassword,
        }

        appService.postSignUp(body)
            .then((res) => {
                setDisabledInput(false);
                navigate("/sign-in");
            })
            .catch((res) => {
                if(res.response.data.name === "ExistingEmailError") {
                    alert("Já existe um usuário com este email.")
                }
                if(res.response.data[0]) {
                    alert("Sua confirmação da senha deve ser igual a senha.")
                }
                setDisabledInput(false);
            })
    }

    return (
        <AuthWrapper>
            <FormContainer>
                <Logo src={logo} alt="logo" onClick={() => navigate("/")}></Logo>
                <Text>Crie a sua conta, e venha ser Voraz!</Text>
                <Form color={true} onSubmit={createUser}>
                    <label>Email:</label>
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        disabled={disabledInput}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    ></input>

                    <label>Senha:</label>
                    <input
                        placeholder="Senha"
                        type="password"
                        value={password}
                        disabled={disabledInput}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    ></input>
                    
                    <label>Confirme a senha:</label>
                    <input
                        placeholder="Confirme a senha"
                        type="password"
                        value={confirmPassword}
                        disabled={disabledInput}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    ></input>
                    <Margin></Margin>
                    <Button color={true}>Criar conta</Button>
                </Form>
                <Text>
                    <h5 onClick={() => navigate("/sign-in")}>
                        Já possui uma conta? Clique aqui para fazer o login!
                    </h5>    
                </Text>
            </FormContainer>
        </AuthWrapper>
    )
}

