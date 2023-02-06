import { FormContainer } from "../styles/commons/FormContainer";
import logo from "../assets/logo.white.png";
import { Form } from "../styles/commons/Form";
import { useContext, useState } from "react";
import { Button } from "../styles/commons/Button";
import { Margin } from "../styles/commons/Margin";
import { useNavigate } from "react-router-dom";
import appService from "../service/service";
import AppContext from "../contexts/app-context";
import { setLocalStorageData } from "../utils/local-storage";
import { Text } from "../styles/authentication-styles/Text";
import { Logo } from "../styles/authentication-styles/Logo";
import { AuthWrapper } from "../styles/authentication-styles/AuthWrapper";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabledInput, setDisabledInput] = useState(false);
    const { setUserData, setConfig } = useContext(AppContext);
    const navigate = useNavigate();

    console.log("cheguei");

    function LogIn(e) {
        e.preventDefault();
        setDisabledInput(true);

        const body = {
            email,
            password,
        }

        appService.postSignIn(body)
            .then((res) => {
                setLocalStorageData({
                    email,
                    token: res.data.token,
                });
                setUserData({
                    email,
                    token: res.data.token,
                });
                setConfig({ headers: { Authorization: `Bearer ${res.data.token}` } });
                setDisabledInput(false);
                navigate("/");
            })
            .catch((res) => {
                alert("email e/ou senha inválidos, tente novamente");
                setDisabledInput(false);
            })
    }

    return (
        <AuthWrapper>
            <FormContainer>
                <Logo src={logo} alt="logo" onClick={() => navigate("/")}></Logo>
                <Text>Acesse sua conta e aproveite nossos produtos!</Text>
                <Form color={true} onSubmit={LogIn}>
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
                    
                    <Margin></Margin>
                    <Button color={true}>Login</Button>
                </Form>
                <Text>
                    <h5  onClick={() => navigate("/sign-up")}>
                        Não possui uma conta? Clique aqui para fazer o cadastro!
                    </h5>    
                </Text>
            </FormContainer>
        </AuthWrapper>
    )
}


