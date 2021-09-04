export async function getStaticPaths() {
    const resposta = await fetch('http://localhost:3000/api/alunos/tutores')
    const ids = await resposta.json()

    const paths = ids.map((id) => {
        return { params: { id: `${id}` } }
    })
    return {
        fallback: true, //404
        paths
    }
}

export async function getStaticProps(contexto) {
    const resposta = await fetch(`http://localhost:3000/api/alunos/${contexto.params.id}`)
    const aluno = await resposta.json()
    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props) {
    const { aluno } = props
    return (
        <div>
            <h1>Detalhes do aluno</h1>
            {
                aluno ? <ul>
                    <li>{aluno.id}</li>
                    <li>{aluno.nome}</li>
                    <li>{aluno.email}</li>
                </ul>
                    : false
            }
        </div>
    )
}