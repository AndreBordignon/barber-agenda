const connection = require('../infra/connection')

class Service {
    criar(service, res) {
        const clienteEhValido = service.name.length >= 3
        
        const validacoes = [
            {
                nome: 'nome',
                valido: clienteEhValido,
                mensagem: 'Nome deve ter pelo menos três caracteres'
            }
        ]
        
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
        
        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const sql = 'INSERT INTO Services SET ?'
            
            connection.query(sql, service, (erro, results) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json({"message": "Serviço criado com sucesso", data: service})
                }
            })
        }
       
    }

    listAll(res){
        const sql = 'SELECT * FROM Services'

        connection.query(sql, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(results)
            }
        })
    }
    listById(id, res){
        const sql = 'SELECT * FROM Services WHERE ID=?'

        connection.query(sql, id, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
            }else if(results.length > 0){
                res.status(200).json(results[0])
            }else{
                res.status(400).json({"message": "Esse serviço não existe."})
            }
        })
    }

    delete(id, res){
        const sql = 'DELETE FROM Services WHERE ID=?'

        connection.query(sql, id, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({"message": `removido o serviço de id ${id}`})
            }
        })
    }
}
module.exports = new Service