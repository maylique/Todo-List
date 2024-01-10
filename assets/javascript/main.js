const input = document.getElementById('input');
const output = document.getElementById('output');
let array = []


const inputToArray = () => {
    array.push({ input: input.value, status: false });
    console.log(array);
}

const arrayToDiv = (array) => {
    array.forEach(el => {
        const div = document.createElement('div')
        const checkbox = document.createElement('input')
        const p = document.createElement('p')
        const deleteBtn = document.createElement('button')
    
        checkbox.setAttribute('type', 'checkbox')
        console.log(checkbox);

        if (checkbox.checked) {
            p.style.textDecoration = 'line-through'
        } else {
            
        }

        p.textContent = el.input
        deleteBtn.textContent = 'X'

        deleteBtn.addEventListener('click', function () {
            const div = this.parentNode;
            div.remove();
        });
    
        output.appendChild(div)
        div.appendChild(checkbox)
        div.appendChild(p)
        div.appendChild(deleteBtn)
    });
}

const combine = (x) => {
    output.innerHTML = ''
    inputToArray()
    arrayToDiv(x)
}
