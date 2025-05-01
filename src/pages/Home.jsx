import styled from 'styled-components';
import animals from '../assets/animals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState } from 'react';
import AnimalOverlay from '../components/AnimalOverlay';

function getRandomAnimals(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function Home() {
    const randomAnimals = getRandomAnimals(animals, 4);
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const handleCardClick = (animal) => {
        setSelectedAnimal(animal);
    };

    return (
        <>
            <Header />
            <Container>
                <h2>Olá! Vamos adotar um novo amigo ou achar um parceiro?</h2>
                <h3>Sugestões do dia</h3>
                <CardGrid>
                    {randomAnimals.map((animal, index) => (
                        <HomeCard key={index} onClick={() => handleCardClick(animal)}>
                            <img src={animal.picture} alt={animal.name} />
                            <p><strong>{animal.name}</strong></p>
                            <p>Idade: {animal.age}</p>
                            <p>Peso: {animal.weight}kg</p>
                            <p>Abrigo: {animal.shelter}</p>
                        </HomeCard>
                    ))}
                </CardGrid>
            </Container>
            <Footer />
            {selectedAnimal && (
                <AnimalOverlay animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
            )}
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10vh;
    padding-bottom: 12vh;
    width: 100vw;

    h2 {
        font-size: 32px;
        font-weight: bold;
        color: #ffcc00;
        margin-top: 10px;
        line-height: 36px;
        text-align: center;
    }

    h3 {
        font-size: 24px;
        font-weight: bold;
        color: #332a05;
        margin-top: 10px;
    }
`

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    margin-top: 20px;
`

const HomeCard = styled.div`
    background: white;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;
    cursor: pointer;

    img {
        width: 100%;
        height: 140px;
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

export default Home;
