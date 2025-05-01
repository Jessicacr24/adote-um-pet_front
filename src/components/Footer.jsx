import styled from 'styled-components';
import { FaSearch, FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiMedicalPack } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()
    return (
        <FooterWrapper>
            <FooterButton onClick={() => navigate("/search")}>
                <FaSearch />
                <h4>Busque um amigo</h4>
            </FooterButton>
            <FooterButton onClick={() => navigate("/saves")}>
                <FaHeart />
                <h4>Salvos e Doações</h4>
            </FooterButton>
            <FooterButton onClick={() => navigate("/partners")}>
                <FaStar />
                <h4>Parceiros</h4>
            </FooterButton>
            <FooterButton onClick={() => navigate("/vaccination")}>
                <GiMedicalPack />
                <h4>Vacinações e Castrações</h4>
            </FooterButton>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    background-color: lightgray;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const FooterButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20vw;

    svg {
        font-size: 30px;
    }

    h4 {
        font-size: 12px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 24px;
    }
`;

export default Footer;