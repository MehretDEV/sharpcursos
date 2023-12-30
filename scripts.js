document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Aqui você poderia verificar as credenciais (usuário/senha) em um sistema real
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Verificação simples para este exemplo
    if (username === 'curso' && password === '123') {
      alert('Login bem-sucedido! Redirecionando para o conteúdo do curso.');
      window.location.href = 'conteudo_curso.html'; // Redirecionamento após login
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  });
  