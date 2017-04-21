(function() {
    var element =  document.querySelectorAll('.date'),
        parent = element[0].parentElement;
    if (parent.classList.contains('box-plus')) {
        parent.addEventListener('click', function() {
           element[0].classList.toggle('-hidden');
        });
    }
})();