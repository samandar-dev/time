let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let contentBox = document.querySelector('.content');

btn.addEventListener('click', fun)

function fun(e) {
  if (input.value != '') {
    let span = document.createElement('span');
    span.className = "conspan";
    span.append(document.createTextNode(input.value));
    contentBox.appendChild(span);

    let n = input.value

    setInterval(() => {
      setTimeout(() => {
        n--;
        span.textContent = n;
        if (n === 0) {
          span.style.display = "none";
        }
      })
    }, 1000);
    input.value = "";
  }
}