import styled from "styled-components"

export default function Footer() {

    return (
        <FooterWrapper>
            <FooterContainer>
                <Policies>
                    <h6>{`POLÍTICAS DE ENTREGAS  `}</h6>
                    <h5>|</h5>
                    <h6>POLÍTICAS DE PRIVACIDADE</h6>
                </Policies>
                <Policies>
                    <h6>POLÍTICAS DE REEMBOLSO</h6>
                    <h5>|</h5>
                    <h6>POLÍTICAS DE DEVOLUÇÃO</h6>
                </Policies>
                <CompanyInfo>
                    <h4>@2022 - Voraz Cozinha Vegetal</h4>
                    <h4>email: contato@vorazcozinhavegetal.com</h4>
                    <h4>Cel: (21) 9 9999 9999</h4>
                    <h4>Instagram: @vorazcozinha</h4>
                    <h4>cnpj: 00.000.000/0000-00</h4>
                </CompanyInfo>
            </FooterContainer>
        </FooterWrapper>
    )
}




const FooterWrapper = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: center;
    background-color: #FAE057;
    box-shadow: 5px -4px 5px 3px rgba(0, 0, 0, 0.2);
    position: relative;
    margin-top: 150px;
`

const FooterContainer = styled.div`
    width: 100%;
    max-width: 1110px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    position: absolute;
    bottom: 0px;

    h4 {
        font-size: 16px;
    }
`;

const Policies = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 15px;

    h6 {
        cursor: pointer;

        :hover {
            color: #FFFFFF;
        }

        :active {
            color: #000000;
        }
    }
`;

const CompanyInfo = styled.div`
    margin-top: 30px;
`;