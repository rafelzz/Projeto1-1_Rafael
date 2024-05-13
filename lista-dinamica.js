document.getElementById('form-item').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o recarregamento da página
    const itemValue = document.getElementById('item-input').value;
    if (itemValue) {
        const li = document.createElement('li');
        li.textContent = itemValue;
        li.addEventListener('click', function() {
            this.parentNode.removeChild(this);
        });
        document.getElementById('lista-dinamica').appendChild(li);
        document.getElementById('item-input').value = ''; // Limpa o campo de entrada
    }
});
