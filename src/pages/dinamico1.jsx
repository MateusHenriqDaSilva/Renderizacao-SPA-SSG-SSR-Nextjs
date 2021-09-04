export function getServerSideProps() {
    console.log("[Server] passando pelo servidor gerando props para o componente")
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props) {
    return (
        <h1>
            <h1>Exemplo</h1>
            <h2>{props.numero}</h2>
        </h1>
    )
}