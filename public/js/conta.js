function trazerTodos() {
    tabela.innerHTML = '';

    fetch(`/usuarios/trazerTodos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        resposta.json().then(json => {
            json.forEach(user => {
                if (!user.isDeletedUser) {
                    const linha = tabela.insertRow();
                    linha.innerHTML = `
                    <td>${usuario.idUsuario}</td>
                    <td>${usuario.nomeUsuario}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.nomeCargo || 'Não definido'}</td>
                    <td>${usuario.nomeEmpresa || 'Não definida'}</td>
                    <td><a onclick=""></a></td>
                    <td><a onclick=""></a></td>
                `;
                }
            });
        })
    }).catch(function (error) {
        console.log("error: ", error);
    });
}