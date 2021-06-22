class Tables {
  init(connection) {
    this.connection = connection;

    this.criarAtendimentos();
    this.criarServicos();
  }

  criarAtendimentos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Surveys (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))";

    this.connection.query(sql, (erro) => {
      if (erro) {
        console.log("erro", erro);
      } else {
        console.log("Tabela surveys criada com sucesso");
      }
    });
  }
  criarServicos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Services (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, value int NOT NULL, PRIMARY KEY(id))";

    this.connection.query(sql, (erro) => {
      if (erro) {
        console.log("erro", erro);
      } else {
        console.log("Tabela services criada com sucesso");
      }
    });
  }
}

module.exports = new Tables();
