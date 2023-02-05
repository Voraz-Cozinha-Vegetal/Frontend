import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { NavBar } from "../components/commons/NavBar-component";
import AppContext from "../contexts/app-context";
import appService from "../service/service";
import { Button } from "../styles/Button";

export default function AddressPage() {
    const state = "RJ"
	const city = "Niteroi"
	const [neighborhood, setNeighborhood] = useState("");
	const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState(null);
    const [disabledInput, setDisabledInput] = useState(false);
    const [refreshAddress, setRefreshAddress] = useState(false);
    const [userAddress, setUserAddress] = useState({});
    const { userData } = useContext(AppContext);
    const token = { headers: { Authorization: `Bearer ${userData.token}` } } //MUDAR DEPOIS

    useEffect(() => {

        appService.getUserAddress(token)
            .then((res) => {
                if(res.data) {
                    setUserAddress(res.data);
                    setNeighborhood(res.data.neighborhood);
                    setStreet(res.data.street);
                    setNumber(res.data.number);
                    setComplement(res.data.complement);
                }
            })
            .catch((res) => {
                alert(res.response.data.message)
            })

    }, [refreshAddress])

    function createAddress(e) {
        e.preventDefault();
        setDisabledInput(true);

        const body = {
            state,
            city,
            neighborhood,
            street,
            number,
            complement
        }

        appService.postUserAddress(body, token)
            .then((res) => {
                setRefreshAddress(!refreshAddress);
                setDisabledInput(false);
                alert("Endereço salvo com sucesso"); //mudar depois
            })
            .catch((res) => {
                alert("preencha os campos corretamente") //mudar depois
                setDisabledInput(false)
            })
    }

    function editAddress(e) {
        e.preventDefault();
        setDisabledInput(true);

        const body = {
            state,
            city,
            neighborhood,
            street,
            number,
            complement
        }

        appService.editUserAddress(body, token)
            .then((res) => {
                setRefreshAddress(!refreshAddress);
                setDisabledInput(false);
                console.log("SUCESSO");
            })
            .catch((res) => {
                alert(res) //mudar depois
                setDisabledInput(false)
            })
    }

    return (
        <>
            <NavBar />
            <FormWrapper>
                <FormContainer>
                    <h1>Preencha o seu endereço de entrega:</h1>
                    <Form onSubmit={userAddress ? editAddress : createAddress}>
                    <h2>*Entregas apenas para Niteroi-RJ</h2>
                        <label>Estado:</label>
                        <input
                            placeholder="Estado"
                            type="text"
                            value={state}
                            disabled={true}
                            required
                        ></input>

                        <label>Cidade:</label>
                        <input
                            placeholder="Cidade"
                            type="text"
                            value={city}
                            disabled={true}
                            required
                        ></input>

                        <label>Bairro:</label>
                        <input
                            placeholder="Bairro"
                            type="text"
                            value={neighborhood}
                            disabled={disabledInput}
                            onChange={(e) => setNeighborhood(e.target.value)}
                            required
                        ></input>

                        <label>Rua:</label>
                        <input
                            placeholder="Rua"
                            type="text"
                            value={street}
                            disabled={disabledInput}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                        ></input>

                        <label>Número:</label>
                        <input
                            placeholder="Número"
                            type="text"
                            min="1"
                            value={number}
                            disabled={disabledInput}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        ></input>

                        <label>{"Complemento(opcional):"}</label>
                        <input
                            placeholder="Complemento"
                            type="text"
                            value={complement}
                            disabled={disabledInput}
                            onChange={(e) => setComplement(e.target.value)}
                        ></input>

                        <Last></Last>
                        <Button size="large">Salvar endereço de entrega</Button>
                        <Last></Last>
                    </Form>	
                </FormContainer>
            </FormWrapper>
            
			
        </>
    );
}

const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    h1 {
        font-size: 50px;
        text-align: center;
        margin: 60px 0px 50px 0px;
    }
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 1110px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 800px;

    input {
        height: 50px;
        width: 100%;
        border: none;
        font-size: 25px;
        border-bottom: 2px solid grey;
    }

    input:disabled {
        background-color: lightgrey;
    }

    label {
        font-size: 30px;
        margin-top: 30px;
    }

    h2 {
        font-size: 18px;
        color: red;
    }
`;

const Last = styled.div`
    margin-bottom: 70px;
`;
