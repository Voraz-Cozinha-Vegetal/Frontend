import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCartCard from "../components/cart-components/Product-cart-card";
import Footer from "../components/commons/Footer.-component";
import { NavBar } from "../components/commons/NavBar-component";
import AppContext from "../contexts/app-context";
import appService from "../service/service";
import { Button } from "../styles/commons/Button";

export default function UserCartPage() {
    const { config, userCart, setUserCart, refresh } = useContext(AppContext);
    const navigate = useNavigate();

    const totalPerProduct = userCart.map((value) => (
        ((value.Product.price/100) * value.quantity)
    ));
    const total = totalPerProduct.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ).toFixed(2);

    useEffect(() => {
        appService.getUserCart(config)
            .then((res) => {
                setUserCart(res.data);
            })
            .catch((res) => {
                alert(res.response.data.message)
            })
    }, [refresh, setUserCart, config]);

    return (
        <>
            <NavBar />
            <CartWrapper>
                <CartContainer>
                    {userCart.length >= 1 ? 
                    userCart.map((value, index) => (
                        <ProductCartCard
                            key={index}
                            id={value.id}
                            name={value.Product.name}
                            image={value.Product.image}
                            price={(value.Product.price/100).toFixed(2)}
                            quantity={value.quantity}
                            cardTotal={((value.Product.price/100) * value.quantity).toFixed(2)}
                        />
                    ))
                    :
                    <h6>{`O seu carrinho está vazio :(`}</h6>
                    }
                    {userCart.length > 0 ? 
                        <>
                            <CartTotal>
                                <h5>Total:</h5>
                                <h5>{`R$${total}`}</h5>
                            </CartTotal>
                            <Button size="large" onClick={() => navigate("/address")}>Seguir para endereço de entrega</Button>
                        </>
                        :
                        <></>
                    }
                    
                </CartContainer>
            </CartWrapper>
            <Footer />
        </>
    )
}

const CartWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const CartContainer = styled.div`
    width: 1110px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;


    h6 {
        font-size: 50px;
        font-weight: 700;
        margin-top: 250px;
        margin-bottom: 200px;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); //mudar depois
    }
`;

const CartTotal = styled.div`
    width: 1110px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    h5 {
        font-size: 30px;
    }
`;