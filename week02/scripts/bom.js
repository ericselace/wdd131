
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterBtn');
const list = document.querySelector('#list');


button.addEventListener('click', function () {
    const chapter = input.value.trim();

    if (chapter === '') {
        input.focus();
        return;
}


const li = document.createElement('li');
const deleteBtn = document.createElement('button');

li.textContent = chapter;
deleteBtn.textContent = '❌';
deleteBtn.style.marginLeft = '1rem';


deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
});


li.appendChild(deleteBtn);
list.appendChild(li);
});
