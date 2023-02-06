import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NavBarAdmin() {
    const navigate = useNavigate();


    return (
        <AdminNavBar>
            <h1 onClick={() => navigate("/admin")}>GERENCIAR PRODUTOS</h1>
            <h1>ADICIONAR PRODUTOS</h1>
            <h1>GERENCIAR TRANSAÇÕES</h1>
        </AdminNavBar>
    )
}

const AdminNavBar = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 40px;
    border-bottom: 2px solid #000000;
    margin-bottom: 50px;
    background-color: #FAE057;

    h1 {
        cursor: pointer;

        :hover {
            color: #FFFFFF;
        }
    }
`;