import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import styled from "styled-components"

function Saves() {
    const [savedAnimals, setSavedAnimals] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("savedAnimals")) || []
        setSavedAnimals(saved)
    }, [])

    return (
        <>
            <Header />
            <SavesContainer>
                <h2>Animais Salvos</h2>
                {savedAnimals.length === 0 ? (
                    <p>Você ainda não salvou nenhum animal.</p>
                ) : (
                    <CardGrid>
                        {savedAnimals.map((animal, index) => (
                            <Card key={index}>
                                <img src={animal.picture} alt={animal.name} />
                                <p><strong>{animal.name}</strong></p>
                                <p>Idade: {animal.age}</p>
                                <p>Peso: {animal.weight}kg</p>
                                <p>Abrigo: {animal.shelter}</p>
                            </Card>
                        ))}
                    </CardGrid>
                )}
            </SavesContainer>
            <Footer />
        </>
    )
}

const SavesContainer = styled.div`
    padding: 12vh 10px 12vh;
    width: 100vw;

    h2 {
        font-size: 28px;
        font-weight: bold;
        color: #ffcc00;
        margin-bottom: 20px;
    }
`

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
`

const Card = styled.div`
    background: white;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;

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

export default Saves