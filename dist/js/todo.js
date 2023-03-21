let domItem = document.querySelector('#item');
let addBtn = document.querySelector('#add-btn');

let database = {
    schema: 'aaa',
    data: [],
    insert: function(text) {
        database.data.push({
            cheked: false,
            text: text
        })
    },
    updata: function(index, checked) {
        database.data[index].checked = checked;
    },
    save: function() {
        localStorage.setItem(database.schema, JSON.stringify(database.data));
    },
    read() {
        let data = localStorage.getItem(database.schema);
        if(data) {
            data = JSON. parse(data)
        }

        database.data = data
    },
    delete: function(index) {}
}
    
// database.schema = prompt('請輸入帳號');


domItem.addEventListener('keyup', function(e) {
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

    let li = document.createElement('li');
    let status = document.createElement('div');
    status.classList.add('status');
    
    let statusCheckbox = document.createElement('input');
    statusCheckbox.type = 'checkbox';
    let domText = document.createElement('div');
    domText.classList.add('text');
    domText.innerHTML = text;

    status.appendChild(statusCheckbox);
    li.appendChild(status);
    li.appendChild(domText);

    domItemList.appendChild(li);

    database.insert(text);
}

    

    // let html = domItemList.innerHTML;

    // html += `<li>
    //                  <div class="status">
    //                     <input type="checkbox">
    //                 </div>
    //                 <div class="text">
    //                      ${text}
    //                 </div>
    //          <li>`;

    // domItemList.innerHTML = html;

    // database.insert(text);


let domItemList = document.querySelector('#item-list');

domItemList.addEventListener('click', function(e) {
    let el = e.target;

    let tag = el.tagName.toUpperCase();

    let isCheckbox = tag == 'INPUT';
    let isText = tag == 'DIV' && el.classList.contains('text');

    if (isCheckbox || isText) {
        while(el.tagName.toUpperCase() != 'LI') {
            el = el.parentNode;
        }

        let domCheckbox = el.querySelector('div.status input');
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            domCheckbox.checked = false;
        } else {
            el.classList.add('active');
            domCheckbox.checked = true;
        }

        let index = liIndex(el);
        database.updata(index, domCheckbox.ckecked);
        }
});

function liIndex(li) {
    let ul = li.parentNode
    let lists = ul.children;
    return Array.prototype.indexOf.call(lists, li)
}




domItem.focus();
