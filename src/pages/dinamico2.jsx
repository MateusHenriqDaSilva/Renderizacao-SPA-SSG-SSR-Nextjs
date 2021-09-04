export async function getServerSideProps() {
    const resposta = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resposta.json()

    return {
        props: {
            produtos
        }
    }
}

export default function dinamico2(props) {
    console.log('[Cliente] renderizando o componente...')

    function renderizarProdutos() {
        return props.produtos.map((produto) => {
            return (
                <li key={produto.id}>id: {produto.id} nome: {produto.nome} tem preço de R${produto.preco}</li>
            )
        })
    }

    return (
        <div>
            <h1>Estatico 04</h1>
            {renderizarProdutos()}
        </div>
    )
}