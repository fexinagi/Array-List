const arr = ['Apple', 'Pineapple', 'Banana',];
const list = document.createElement("ul");
document.body.appendChild(list);
arr.forEach(element => {
    const item = document.createElement("li");
    item.textContent = element;
    list.appendChild(item);
});