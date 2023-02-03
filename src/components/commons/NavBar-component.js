import styled from "styled-components"
import logo from "../../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useState } from "react";

export function NavBar () {
    const [hover, setHover] = useState(false);
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
                    <HiOutlineShoppingBag
                        style={{
                            color: hover ? "#FFFFFF" : "#000000",
                            cursor: "pointer",
                            margin: "0px 0px 8px 0px",
                        }}
                        size={30}
                    />
                    <h2>(0)</h2>
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
