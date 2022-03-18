import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
    const repository = {
        name: 'Unform',
        description: 'Form',
        link: 'https://github.com/unform/unform'
    }
    return(
        <section className="respository-list">
            <h1>Lista de repositórios</h1>
        <ul>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
        </ul>
        </section>
    );
}