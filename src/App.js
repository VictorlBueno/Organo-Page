// Importa os JSX/Componentes
import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
    const teams = [
        {
            name: "Front-end",
            primaryColor: "#82CFFA",
            secondaryColor: "#E8F8FF",
        },
        {
            name: "Back-end",
            primaryColor: "#57C278",
            secondaryColor: "#D9F7E9",
        },
        {
            name: "Mobile",
            primaryColor: "#FFBA05",
            secondaryColor: "#FFF5D9",
        },
        {
            name: "DevOps",
            primaryColor: "#E06B69",
            secondaryColor: "#FDE7E8",
        },
    ];

    // Lista de objeto de colaboradores
    const [workers, setWorker] = useState([]);

    const onAddNewWorker = (worker) => {
        // Replica a lista e adiciona worker
        setWorker([...workers, worker]);
    };

    return (
        // Chama os JSX/Componentes
        <div className="App">
            <Banner />

            <Form
                teams={teams.map((team) => team.name)}
                onSubmitNewWorker={(worker) => onAddNewWorker(worker)}
            />
            
            {teams.map((team) => (
                <Team
                    key={team.name}
                    name={team.name}
                    primaryColor={team.primaryColor}
                    secondaryColor={team.secondaryColor}
                    workers={workers.filter(
                        (worker) => worker.team === team.name
                    )}
                />
            ))}
        </div>
    );
}

export default App;
