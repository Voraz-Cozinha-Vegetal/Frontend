import styled from "styled-components"
import { TiDelete } from "react-icons/ti"
import { useContext, useState } from "react";
import AppContext from "../../contexts/app-context";
import appService from "../../service/service";

export default function ProductCartCard({ id, name, image, price, quantity, cardTotal}) {
    const [hover, setHover] = useState(false);
    const { config, refresh, setRefresh } = useContext(AppContext);
    

    function deleteItem() {

        appService.deleteCartItem(id, config)
            .then(() => {
                setRefresh(!refresh)
            })
            .catch((res) => {
                alert(res);
                console.log(res);
            })
    };

    return (
        <CartCard>
            <img src={image} alt={name}/>
            <CartProductInfo>
                <h1>{name}</h1>
                <h2>{`Quantidade: ${quantity}x`}</h2>
                <div>
                    <h2>{`R$${price}`}</h2>
                    <h2>{`Total: R$${cardTotal}`}</h2>
                </div>
            </CartProductInfo>
            <TiDelete 
                onClick={deleteItem}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                
                style={{
                    color: hover ? "red" : "#000000",
                    cursor: "pointer",
                    position: "absolute",
                    top: "-3px",
                    right: "-10px"
                }}
                size={50}
            />
            
        </CartCard>
    )
}

const CartCard = styled.div`
    width: 100%;
    height: 200px;
    margin: 20px 0px 20px 0px;
    border-bottom: 1px solid #000000;
    display: flex;
    position: relative;

    img {
        width: 30%;
        height: 160px;
        object-fit: contain;
        margin-right: 40px;
    }
`;

const CartProductInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 80%;

    h1 {
        font-size: 30px;
        font-weight: 700;
    }

    h2 {
        font-size: 25px;
        font-weight: 400;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`