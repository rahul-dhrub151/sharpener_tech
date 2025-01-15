function form_submit(event){
    event.preventDefault();
    var form = event.target;
    var expense_amount = form.expense_amount.value;
    var des = form.des.value;
    var choose_category = form.choose_category.value;

    if(expense_amount == "" || des == "" || choose_category == ""){
        alert("Please fill all the fields");
    }else{
        const obj = {
            expense_amount: expense_amount,
            des: des,
            choose_category: choose_category
        }
        const stored_list= localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")): [];
        stored_list.push(obj);
        localStorage.setItem("list", JSON.stringify(stored_list));

        const listItem = document.createElement('li');
        const list= document.getElementById('list');
        listItem.innerText =expense_amount + "-" + choose_category + "-" + des;
        const delete_exp = document.createElement('button');
        delete_exp.innerText = "Delete Expense";
        delete_exp.addEventListener('click', function(){
            list.removeChild(listItem);
            stored_list.splice(stored_list.indexOf(obj), 1);
            localStorage.setItem("list", JSON.stringify(stored_list));
        });
        const edit_exp = document.createElement('button');
        edit_exp.innerText = "Edit Expense";
        edit_exp.addEventListener('click', function(){
            const form = document.getElementById('main_form');
            form.expense_amount.value = obj.expense_amount;
            form.des.value = obj.des;
            form.choose_category.value = obj.choose_category;
            stored_list.splice(stored_list.indexOf(obj), 1);
            localStorage.setItem("list", JSON.stringify(stored_list));
            listItem.remove();
        });
        listItem.appendChild(delete_exp);
        listItem.appendChild(edit_exp);
        list.appendChild(listItem);
        // form.reset();
    }
}

window.onload = function(){
    const stored_list= localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")): [];
    stored_list.forEach(function(obj){   
        const listItem = document.createElement('li');
        const list= document.getElementById('list');
        listItem.innerText =    obj.expense_amount + "-" + obj.choose_category + "-" + obj.des;

        const delete_exp = document.createElement('button');
        delete_exp.innerText = "Delete Expense";
        delete_exp.addEventListener('click', function(){
            list.removeChild(listItem);
            stored_list.splice(stored_list.indexOf(obj), 1);
            localStorage.setItem("list", JSON.stringify(stored_list));
        });
        const edit_exp = document.createElement('button');
        edit_exp.innerText = "Edit Expense";
        edit_exp.addEventListener('click', function(){
            const form = document.getElementById('main_form');
            form.expense_amount.value = obj.expense_amount;
            form.des.value = obj.des;
            form.choose_category.value = obj.choose_category;
            stored_list.splice(stored_list.indexOf(obj), 1);
            localStorage.setItem("list", JSON.stringify(stored_list));
            listItem.remove();
        });
        listItem.appendChild(delete_exp);
        listItem.appendChild(edit_exp);
        list.appendChild(listItem);
    });
}