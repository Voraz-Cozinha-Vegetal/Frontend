import styled from "styled-components"
import logo from "../../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/app-context";
import { useNavigate } from "react-router-dom";
import appService from "../../service/service";

export function NavBar () {
    const [hover, setHover] = useState(false);
    const { config, userCart, setUserCart, refresh } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        appService.getUserCart(config)
            .then((res) => {
                setUserCart(res.data);
            })
            .catch((res) => {
                
            })
    }, [refresh, setUserCart, config])

    function LogOut() {
        if(window.confirm("Tem certeza que deseja sair da sua conta?"))
        localStorage.clear();
        window.location.reload();
    }

    return (
        <NavBarWrapper>
            <NavBarConatiner>
                <img onClick={() => navigate("/")} src={logo} alt="Voraz Cozinha Vegetal"></img>
                <NavBarText>A EMPRESA</NavBarText>
                <NavBarText>A CHEF</NavBarText>
                <NavBarText>CONTATO</NavBarText>
                {!userCart ?
                    <>
                        <NavBarText onClick={() => navigate("/sign-up")}>CADASTRO</NavBarText>
                        <NavBarText onClick={() => navigate("/sign-in")}>LOGIN</NavBarText>
                    </>
                    :
                    <>
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
                        <NavBarText onClick={LogOut}>LOGOUT</NavBarText>
                    </>
                }
               
               
            </NavBarConatiner>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #FAE057;
    box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.2);
`

const NavBarConatiner = styled.div`
    width: 100%;
    max-width: 1110px;
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
