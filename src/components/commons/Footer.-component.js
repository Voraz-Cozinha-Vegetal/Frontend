import styled from "styled-components"

export default function Footer() {

    return (
        <FooterWrapper>
            <FooterContainer>
                <h1>Footer</h1>
            </FooterContainer>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    width: 100%;
    height: 50vh;
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
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    position: absolute;
    bottom: 0px;
    left: 0px;
`;