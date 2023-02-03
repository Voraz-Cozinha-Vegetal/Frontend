import styled from "styled-components"
import logo from "../../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/app-context";
import { useNavigate } from "react-router-dom";
import appService from "../../service/service";

export function NavBar () {
    const [hover, setHover] = useState(false);
    const { userData, userCart, setUserCart, refresh } = useContext(AppContext);
    const navigate = useNavigate();
    const token = { headers: { Authorization: `Bearer ${userData.token}` } }; //mudar depois

    useEffect(() => {
        appService.getUserCart(token)
            .then((res) => {
                setUserCart(res.data);
            })
            .catch((res) => {
                alert(res.response.data.message)
            })
    }, [refresh, setUserCart])

    return (
        <NavBarWrapper>
            <NavBarConatiner>
               <NavBarText>A EMPRESA</NavBarText>
               <NavBarText>A CHEF</NavBarText>
               <NavBarText>CONTATO</NavBarText>
               <img src={logo} alt="Voraz Cozinha Vegetal"></img>
                <CartWrapper
                    hover={hover} 
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HiOutlineShoppingBag onClick={() => navigate("/cart")}
                        style={{
                            color: hover ? "#FFFFFF" : "#000000",
                            cursor: "pointer",
                            margin: "0px 0px 8px 0px",
                        }}
                        size={30}
                    />
                    <h2 onClick={() => navigate("/cart")}>{`(${userCart.length})`}</h2>
                </CartWrapper>
               <NavBarText>CADASTRO</NavBarText>
               <NavBarText>LOGIN</NavBarText>
            </NavBarConatiner>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #FAE057;
`

const NavBarConatiner = styled.div`
    width: 60%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    font-weight: 700;
    

    & img {
        cursor: pointer;
        width: 200px;
        margin: 0px 0px 20px 0px;
    }
`
const NavBarText = styled.h1`
    cursor: pointer;
    padding: 15px;

    :hover {
        color: #FFFFFF;
    }
`
const CartWrapper = styled.div`
    display: flex;
    cursor: pointer;

    :hover {
        color: ${(props) => (props.hover ? "white" : "black")};
    }

    & h2 {
        margin-top: 8px;
    }
`
