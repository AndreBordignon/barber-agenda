const connection = require('../infra/connection')

class Survey {
    criar(survey, res) {
        const clienteEhValido = survey.cliente.length >= 5
        
        const validacoes = [
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
        
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
        
        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const sql = 'INSERT INTO Surveys SET ?'
            
            connection.query(sql, survey, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json({message: "atendimento criado com sucesso", data: survey})
                }
            })
        }
       
    }

    listAll(res){
        const sql = 'SELECT * FROM Surveys'

        connection.query(sql, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(results)
            }
        })
    }
    listById(id, res){
        const sql = 'SELECT * FROM Surveys WHERE ID=?'

        connection.query(sql, id, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
            }else if(results.length > 0){
                res.status(200).json(results[0])
            }else{
                res.status(400).json({"message": "Não pudemos listar esse atendimento"})
            }
        })
    }

    delete(id, res){
        const sql = 'DELETE FROM Surveys WHERE ID=?'

        connection.query(sql, id, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({message: `O atendimento de ID ${id} foi apagado`})
            }
        })
    }
}
module.exports = new Survey