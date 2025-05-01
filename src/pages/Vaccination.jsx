import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Vaccination() {
    return (
        <>
            <Header />
            <Container>
                <h2>Vacinação, castração e apadrinhamento</h2>
                <p>
                    Todos os abrigos parceiros oferecem vacinação e castração para os pets resgatados. Isso garante que os animais estejam saudáveis e prontos para encontrar um novo lar!
                </p>
                <p>
                    Se você não pode adotar no momento, que tal apadrinhar um pet? Sua ajuda com doações de vacinas ou ração faz toda a diferença na vida desses animais. Entre em contato com um de nossos parceiros!
                </p>
                <CallToAction>
                    💛 Apadrinhe um amigo e transforme vidas!
                </CallToAction>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    padding: 10vh 20px 10vh 20px;
    width: 100vw;
    box-sizing: border-box;

    h2 {
        font-size: 28px;
        font-weight: bold;
        color: #ffcc00;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        margin-bottom: 16px;
        color: #333;
        line-height: 24px;
    }
`

const CallToAction = styled.div`
    margin-top: 20px;
    padding: 16px;
    background-color: #fff7cc;
    border: 1px solid #ffe066;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    color: #665c00;
`

export default Vaccination;