import styled from 'styled-components';
import shelters from '../assets/shelters';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Partners() {
    return (
        <>
            <Header />
            <Container>
                <h2>Conheça nossos abrigos parceiros</h2>
                <ShelterList>
                    {shelters.map((shelter, index) => (
                        <ShelterCard key={index}>
                            <img src={shelter.picture} alt={shelter.name} />
                            <p><strong>{shelter.name}</strong></p>
                            <p>Endereço: {shelter.address}</p>
                            <p>Telefone: {shelter.phone}</p>
                        </ShelterCard>
                    ))}
                </ShelterList>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
    padding: 10px;
    width: 100vw;

    h2 {
        font-size: 24px;
        font-weight: bold;
        color: #332a05;
        margin-bottom: 20px;
    }
`

const ShelterList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ShelterCard = styled.div`
    background: white;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;

    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    p {
        margin: 4px 0;
        font-size: 14px;
    }

    p:first-of-type {
        font-weight: bold;
        font-size: 16px;
    }
`

export default Partners;
