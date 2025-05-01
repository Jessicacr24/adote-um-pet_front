import styled from 'styled-components';
import animals from '../assets/animals';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimalOverlay from '../components/AnimalOverlay';

function Search() {
    const [type, setType] = useState('');
    const [shelter, setShelter] = useState('');
    const [minWeight, setMinWeight] = useState(0);
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const filteredAnimals = animals.filter(animal =>
        (type ? animal.type === type : true) &&
        (shelter ? animal.shelter === shelter : true) &&
        animal.weight >= minWeight
    );

    const shelters = [...new Set(animals.map(a => a.shelter))];

    const handleCardClick = (animal) => {
        setSelectedAnimal(animal);
    };

    return (
        <>
            <Header />
            <Container>
                <h2>Busque seu novo amigo</h2>
                <Filters>
                    <label>
                        Tipo:
                        <select value={type} onChange={e => setType(e.target.value)}>
                            <option value="">Todos</option>
                            <option value="dog">Cão</option>
                            <option value="cat">Gato</option>
                        </select>
                    </label>
                    <label>
                        Abrigo:
                        <select value={shelter} onChange={e => setShelter(e.target.value)}>
                            <option value="">Todos</option>
                            {shelters.map((s, i) => (
                                <option key={i} value={s}>{s}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Peso mínimo:
                        <input
                            type="number"
                            value={minWeight}
                            onChange={e => setMinWeight(parseFloat(e.target.value) || 0)}
                        />
                    </label>
                </Filters>
                <CardGrid>
                    {filteredAnimals.map((animal, index) => (
                        <SearchCard key={index} onClick={() => handleCardClick(animal)}>
                            <img src={animal.picture} alt={animal.name} />
                            <p><strong>{animal.name}</strong></p>
                            <p>Idade: {animal.age}</p>
                            <p>Peso: {animal.weight}kg</p>
                            <p>Abrigo: {animal.shelter}</p>
                        </SearchCard>
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
    padding: 0 10px;
    margin-top: 10vh;
    margin-bottom: 12vh;
    width: 100vw;

    h2 {
        font-size: 28px;
        font-weight: bold;
        color: #ffcc00;
        margin-top: 10px;
        line-height: 36px;
    }
`;

const Filters = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;

    label {
        font-size: 14px;
        display: flex;
        flex-direction: column;
    }

    select, input {
        padding: 6px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-top: 4px;
    }
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    margin-top: 20px;
`;

const SearchCard = styled.div`
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
`;

export default Search;
