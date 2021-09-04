export default function handler(requisicao, resposta) {
    const id = +requisicao.query.id
    resposta.status(200).json({
        id: id,
        nome: `João Almeida ${id}`,
        email: `jajajajajaja${id}@gmail.com`
    })
}