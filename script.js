function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

$(document).ready(function () {})

function updateColor(){}

var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){})
