import styled from 'styled-components';

function AnimalOverlay({ animal, onClose }) {
    if (!animal) return null;

    const saveAnimal = (animal) => {
        const saved = JSON.parse(localStorage.getItem("savedAnimals")) || [];
        const alreadySaved = saved.find((a) => a.name === animal.name && a.picture === animal.picture);
        if (!alreadySaved) {
          saved.push(animal);
          localStorage.setItem("savedAnimals", JSON.stringify(saved));
        }
    };
      

    return (
        <Overlay onClick={onClose}>
            <OverlayContent onClick={e => e.stopPropagation()}>
                <img src={animal.picture} alt={animal.name} />
                <h2>{animal.name}</h2>
                <p><strong>Idade:</strong> {animal.age}</p>
                <p><strong>Peso:</strong> {animal.weight}kg</p>
                <p><strong>Tipo:</strong> {animal.type}</p>
                <p><strong>Abrigo:</strong> {animal.shelter}</p>
                <p><strong>Descrição:</strong> {animal.description}</p>
                <SaveButton onClick={saveAnimal(animal)}>Salvar ❤️</SaveButton>
            </OverlayContent>
        </Overlay>
    );
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const OverlayContent = styled.div`
    background: white;
    border-radius: 10px;
    padding: 20px;
    width: 80vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
        max-height: 200px;
    }

    h2 {
        font-size: 24px;
        margin: 10px 0;
    }

    p {
        font-size: 14px;
        margin: 4px 0;
    }
`;

const SaveButton = styled.button`
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    background-color: #ffcc00;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default AnimalOverlay;
