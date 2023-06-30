const html = document.querySelector('.html textarea');
const css = document.querySelector('.css textarea');
const javascript= document.querySelector('.javascript textarea');
const result = document.querySelector('#result');

function run() {
    
    localStorage.setItem('html', html.value);
    localStorage.setItem('css', css.value);
    localStorage.setItem('javascript', javascript.value);

   
    result.contentDocument.body.innerHTML = `<style>${localStorage.css}</style>` + localStorage.html;
    result.contentWindow.eval(localStorage.javascript);
}


html.onkeyup = () => run();
css.onkeyup = () => run();
javascript.onkeyup = () => run();


html.value = localStorage.html;
css.value = localStorage.css;
javascript.value = localStorage.javascript;
