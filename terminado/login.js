document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const usuario = document.getElementById("usuario").value;  // Tipo de usuário
    const senha = document.getElementById("senha").value;      // Senha digitada
    const documento = document.getElementById("numeroDocumento").value; // Documento (CPF ou CRN)

    // Credenciais corretas para login
    const usuarioCorreto = "admin";
    const senhaCorreta = "admin";

    console.log("Tipo de Usuário inserido: " + usuario);
    console.log("Senha inserida: " + senha);
    console.log("Documento inserido: " + documento);

    if (senha.trim() === senhaCorreta && documento.trim() !== "") {
        // Verifica qual tipo de usuário foi selecionado
        if (usuario === "paciente") {
            console.log("Login bem-sucedido como Paciente! Redirecionando...");
            window.location.href = "paciente.html";  // Redireciona para a página do paciente
        } else if (usuario === "profissional") {
            console.log("Login bem-sucedido como Profissional! Redirecionando...");
            window.location.href = "index.html";  // Redireciona para a página do profissional
        }
    } else {
        console.log("Usuário ou senha incorretos.");
        // Mensagem de erro
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Usuário ou senha incorretos. Tente novamente.";
    }
});
