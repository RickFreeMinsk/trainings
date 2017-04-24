var element = document.querySelectorAll('.date'),
    parent = element[0].parentElement;

function toggleHidden() {
    element[0].classList.toggle('-hidden');
}

if (parent.classList.contains('box-plus')) {
    parent.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleHidden();
        document.querySelector('body').addEventListener('click', function bodyClick() {
            toggleHidden();
            this.removeEventListener('click', bodyClick);
        });
    });
}
