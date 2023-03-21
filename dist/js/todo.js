let domItem = document.querySelector('#item');
let addBtn = document.querySelector('#add-btn');
let saveBtn = document.querySelector('#save-btn');
let autoSaveSwitch = document.querySelector('#auto-save-switch');

let database = {
    schema: '',
    isAutoSave: false,
    data: [],
    insert: function(text) {
        database.data.push({
            checked: false,
            text: text
        })
        database.autoSave();
    },
    update: function(index, checked) {
        database.data[index].checked = checked;
        database.autoSave();
    },
    save: function() {
        localStorage.setItem(database.schema, JSON.stringify(database.data));
    },
    read() {
        let data = localStorage.getItem(database.schema);
        if(data) {
            data = JSON.parse(data);
        } else {
            data =[];
        }
        database.data = data
    },
    delete: function(index) {
        database.data.splice(index, 1);
        database.autoSave();

    },
    autoSave() {
        if (database.isAutoSave) {
            database.save();
        }
    }
}

while (!database.schema) {
    database.schema = prompt('請輸入帳號');
}

restore();

function restore() {
    let domItemList = document.querySelector('#item-list');
    let html = '';

    database.read();
    database.data.forEach(function(item) {
        html += genLi(item.text, item.checked);
    });
    domItemList.innerHTML = html;
}

function genLi(text, status) {
    let checked = status ? 'checked' : '';
    return `<li>
                <div class="status">
                    <input type="checkbox" ${checked}>
                </div>
                <div class="text">
                     ${text}
                </div>
                 <div>
                    <a href="#" class="delete">刪除</a>
                </div>
                </li>`;
}

autoSaveSwitch.addEventListener('click',function() {
    database.isAutoSave = autoSaveSwitch.checked;
});

saveBtn.addEventListener('click', function() {
    database.save();
    alert('已儲存');
});

domItem.addEventListener('keyup', function (e) {
    if (e.code.toUpperCase() == 'ENTER') {
        addBtn.click();
    }
});

addBtn.addEventListener('click', function () {
    let text = domItem.value;
    if (text) {
        addItem(text);
        domItem.value = '';
    }

    domItem.focus();
});

function addItem(text) {
    let domItemList = document.querySelector('#item-list');

    // let li = document.createElement('li');
    // let status = document.createElement('div');
    // status.classList.add('status');

    // let statusCheckbox = document.createElement('input');
    // statusCheckbox.type = 'checkbox';

    // let domText = document.createElement('div');
    // domText.classList.add('text');
    // domText.innerHTML = text;

    // status.appendChild(statusCheckbox);
    // li.appendChild(status);
    // li.appendChild(domText);

    // domItemList.appendChild(li);

    let html = domItemList.innerHTML;

    html += genLi(text);

    domItemList.innerHTML = html;

    database.insert(text);
}

let domItemList = document.querySelector('#item-list');

domItemList.addEventListener('click', function (e) {
    let el = e.target;

    let tag = el.tagName.toUpperCase();

    let isCheckbox = tag == 'INPUT';
    let isText = tag == 'DIV' && el.classList.contains('text');
    let isDelete = tag == 'A' && el.classList.contains('delete');

    if (isCheckbox || isText || isDelete) {
        while (el.tagName.toUpperCase() != 'LI') {
            el = el.parentNode;
        }

        let index = liIndex(el);
        
        if (isDelete) {
            database.delete(index);
            let ul = el.parentNode;
            ul.querySelector(`li:nth-child(${index+1})`).remove();
        } else {
            let domCheckbox = el.querySelector('div.status input');
            if (el.classList.contains('active')) {
                el.classList.remove('active');
                domCheckbox.checked = false;
            } else {
                el.classList.add('active');
                domCheckbox.checked = true;
            }
        
            database.update(index, domCheckbox.checked);
        }
    }
}); 

function liIndex(li) {
    let ul = li.parentNode
    let lists = ul.children;
    return Array.prototype.indexOf.call(lists, li)
}




domItem.focus();

// domItem.focus();----------------練習序列化和反序列化


// localStorage.setItem('name', 'Joes');

// let students = [];
// students.push({name: 'Joes', age: 18});
// students.push({name: 'John', age:20});

// console.log(students[0])

// let studentStr = JSON.stringify(students);

// localStorage.setItem('students', studentStr);

// let response = localStorage.getItem('students');
// let responseObject = JSON.parse(response);
// console.log(responseObject[0]);








