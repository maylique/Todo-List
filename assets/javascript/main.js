const input = document.getElementById('input');
const output = document.getElementById('output');
let array = []


const inputToArray = () => {
    if (input.value >= 1) {
        array.push({ text: input.value, done: false });
    }
}

const clearInput = () => {
    input.value = ''
}

const arrayToDiv = (array) => {
    array.forEach(el => {
        const div = document.createElement('div')
        const checkbox = document.createElement('input')
        const p = document.createElement('p')
        const deleteBtn = document.createElement('button')
    
        checkbox.setAttribute('type', 'checkbox')

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                p.style.textDecoration = 'line-through'
            } else {
                p.style.textDecoration = 'none'
            }
        });


        p.textContent = el.text
        deleteBtn.textContent = 'X'

        deleteBtn.addEventListener('click', function () {
            const checkbox = this.parentNode.querySelector('input[type="checkbox"]');
            if (!checkbox.checked) {
                alert('Nix da alda');
                return;
            }
            const div = this.parentNode;
            div.remove();
            const index = array.findIndex(item => item.input === el.input);
            array.splice(index, 1);
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
    clearInput()
}


