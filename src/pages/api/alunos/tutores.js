export default function handler(requisicao, resposta) {
    resposta.status(200).json([
        100, 200, 300, 400
    ])
}