import styled from "styled-components";
import { Button } from "../../styles/commons/Button";

export default function AdminAllProducts({image, name, price, stock, available}) {
    return (
        <AdminProducts>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <h2>{`Estoque: ${stock}`}</h2>
            <h2>{`Preço: ${(price/100).toFixed(2)}`}</h2>
            <h2>{available ? "Disponível: Sim" : "Disponível: Não"}</h2>
            <Button size="normal">Editar</Button>
        </AdminProducts>
    );
}

const AdminProducts = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid #000000;
    margin-bottom: 5px;
    display: flex;
    font-size: 16px;
    justify-content: space-around;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
        object-fit: contain;
    }
`;