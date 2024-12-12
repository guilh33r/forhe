document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.querySelector('textarea').value;

    if (message) {
        alert("Sua mensagem de amor foi enviada com sucesso! ❤️");
        document.querySelector('textarea').value = ''; // Limpar o campo após envio
    }
});
