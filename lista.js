document.querySelectorAll('#lista-itens li').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('mensagem-item').textContent = this.getAttribute('data-mensagem');
    });0
});
