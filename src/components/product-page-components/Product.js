import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import AppContext from "../../contexts/app-context";
import appService from "../../service/service";
import { Button } from "../../styles/commons/Button";

export default function Product({ id, name, image, description, price, stock }) {
    const { config, userCart, setUserCart, refresh, setRefresh } = useContext(AppContext);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    function increment() {
        setQuantity(quantity + 1);
    };

    function decrement() {
        if(quantity >= 2) {
            setQuantity(quantity -1);
        }
    };

    function addToCart(quantity) {

        const body = {
            productId: Number(id),
            quantity: Number(quantity),
        }

        appService.postCart(body, config)
            .then((res) => {
                setUserCart([
                    ...userCart,
                    res.data,
                ]);
                setRefresh(!refresh)
            })
            .catch((res) => {
                alert(res.response.data.message);
                navigate("/sign-in");
            })
    }

    return (
        <>
            <ProductImage src={image} alt={name}/>
            <ProductInfoContainer>
                <h1>{name}</h1>
                <h1>R${price}</h1>
            </ProductInfoContainer>
            <ProductInfoContainer>
                <DivDisplayColumn>
                    <h2>Descrição:</h2>    
                    <h3>{description}</h3>
                </DivDisplayColumn>
                <DivDisplayColumn>
                    {stock === 0 ? 
                        <h2>Produto indisponível</h2> 
                        : 
                        <div>
                            <h2>{`Quantidade: ${quantity}x`}</h2>
                            <QuantityButtons onClick={increment}>+</QuantityButtons>
                            <QuantityButtons onClick={decrement}>-</QuantityButtons>
                        </div>   
                    }
                    
                    <Button disabled={stock === 0 ? true : false} size="normal" onClick={() => addToCart(quantity)}>Adicionar ao Carrinho</Button>
                    <Button size="normal" onClick={() => navigate("/cart")}>Ir para o Carrinho</Button>
                </DivDisplayColumn>
            </ProductInfoContainer>
        </>
    )
}

const ProductImage = styled.img`
    width: 100%;
    height: 400px;
    object-fit: contain;
    margin-bottom: 70px;
    margin-top: 50px;
    background-color: #FFFFFF;
`;

const ProductInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    h1 {
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 60px;
    }
`;

const DivDisplayColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40%;

    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
        padding-right: 10px;
    }

    h3 {
        font-size: 25px;
    }

    div {
        display: flex;
        gap: 17px;
        margin-bottom: 10px;
    }
`;

const QuantityButtons = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    color: #FFFFFF;
    background-color: #000000;
    padding-top: 3px;
    cursor: pointer;

    :hover {
        background-color: #FFFFFF;
        color: #000000;
    }
`