document.getElementById('helloButton').addEventListener('click', function() {
    var toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(function() {
        toast.style.display = 'none';
    }, 3000);
});
