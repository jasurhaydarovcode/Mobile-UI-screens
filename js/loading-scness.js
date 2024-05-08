document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var element = document.querySelector('.loading');
        if (element) {
            element.remove();
        }
    }, 5000);
});