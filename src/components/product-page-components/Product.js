import { useState } from "react";
import styled from "styled-components"

export default function Product({ id, name, image, description, price}) {
    const [quantity, setQuantity] = useState(1);

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

        return body;
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
                    <div>
                        <h2>{`Quantidade: ${quantity}x`}</h2>
                        <QuantityButtons onClick={increment}>+</QuantityButtons>
                        <QuantityButtons onClick={decrement}>-</QuantityButtons>
                    </div>    
                    <Button size="normal" onClick={() => addToCart(quantity)}>Adicionar ao Carrinho</Button>
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

const Button = styled.button`
    width: ${props => props.size === "normal" ? "300px" : "50px"};
    height: 70px;
    border: none;
    outline: none;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 25px;
    cursor: pointer;
    border: 1px solid #000000;

    :hover {
        background-color: #FFFFFF;
        color: #000000;
    }
`