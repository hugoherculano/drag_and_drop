let items = document.querySelectorAll('.items');
let titles = document.querySelectorAll('.title');

let id = null;

const listTitle = ['To Do', 'In Progress', 'Done'];

const listItems = [
    { id: 1, text: 'Draggable 1', list: 0 },
    { id: 2, text: 'Draggable 2', list: 0 },
    { id: 3, text: 'Draggable 3', list: 0 }
]

titles.forEach(item => {
    item.addEventListener('dragover', (e) => e.preventDefault());
    item.addEventListener('drop', onDrop);
});

function buildlist() { 
    listTitle.forEach((item, index) => {
        titles[index].innerText = item;
    })
    listItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'example-draggable';
        div.innerText = item.text;
        div.draggable = "true";
        div.addEventListener('dragstart', () => id = item.id);
        items[item.list].appendChild(div);
    });
}

buildlist();

function onDrop(event) {
    const listIndex = listTitle.findIndex(item => event.target.innerText.includes(item));
    console.log(listIndex);
    const itemIndex = listItems.findIndex(item => item.id === id);
    listItems[itemIndex].list = listIndex;
    items.forEach(item => item.innerHTML = '') 
    buildlist();
}