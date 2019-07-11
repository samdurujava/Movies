var items = [];
function add() {
    var item = prompt("Please enter what you want done:");
    items.push(item);
    var itemlist = document.getElementById("list");
    var details = document.createElement("p");
    var checkbox = document.createElement("Input");
    var label = document.createElement("Label");
    label.innerHTML = "Done";
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    details.innerHTML = items[items.length - 1];
    details.setAttribute("id", items[items.length - 1]);
    details.appendChild(checkbox);
    details.appendChild(label);
    itemlist.appendChild(details);
}
function remove() {
    var i = 0;
    while (i < items.length) {
        var item = document.getElementById(items[i]);
        if (item != null) {
            if (item.children[0].checked) {
                var itemlist = document.getElementById("list");
                itemlist.removeChild(item);
                items.splice(i, 1);
            } else {
                i++;
            }
        } else {
            i++;
        }
    }
}