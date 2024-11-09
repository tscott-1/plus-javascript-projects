let shoppingListItems = ["milk", "eggs", "bread"];
const newItemText = document.getElementById("new-item-text")


const clearInput = () => {
    newItemText.value = ""
}

const updateItems = () => {
    // First we get the list element
let listElement = document.getElementById("shopping-list-items");
    // Then we clear it of any existing items
listElement.innerHTML = "";
    
    // Then we loop through the shopping list items and add them to the list
for (const shoppingItem of shoppingListItems) {
    let itemElement = document.createElement("li");
    itemElement.innerText = shoppingItem;
    listElement.appendChild(itemElement);
}
clearInput()
};



const addItem = () => {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems = [...shoppingListItems, item];
    updateItems();
    // console.log(shoppingListItems);
};

const clearItems = () => {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
}
