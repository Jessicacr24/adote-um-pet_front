import styled from 'styled-components';
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <HeaderWrapper>
                <FaUserCircle />
                <IoReorderThree onClick={toggleMenu} />
            </HeaderWrapper>
            {isMenuOpen && (
                <Overlay onClick={toggleMenu}>
                    <Menu onClick={e => e.stopPropagation()}>
                        <MenuItem onClick={() => navigate("/home")}>Home</MenuItem>
                        <MenuItem onClick={() => navigate("/")}>Sair</MenuItem>
                    </Menu>
                </Overlay>
            )}
        </>
    );
}

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    background-color: lightgray;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 20px;
    z-index: 10;

    svg {
        font-size: 50px;
        cursor: pointer;
    }
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
    display: flex;
    justify-content: flex-end;
`

const Menu = styled.div`
    background: white;
    width: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export default Header;

