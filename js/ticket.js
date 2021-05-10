const sites = document.querySelectorAll('.site')
let a = document.querySelectorAll('.site > a')
let tickets_sum = document.querySelector('.tickets_sum');
let sum_res = document.querySelector('.sum_res');
let row = 0;
let i = 0;
let s = 1;
let place = 0;
let cost;
let id = 1;
let places = [];
let sum = 0;
let tic_sum = 0;
sites.forEach((value)=>{

    function rows (){
        if(i < 6) {
            row = 1;
            place = s;
            cost = 100;
        }else if(i < 16){
            row = 2;
            place = s - 6;
            cost = 90;
        }else if(i < 26){
            row = 3;
            place = s - 16;
            cost = 90;
        }else if(i < 36){
            row = 4;
            place = s - 26;
            cost = 90;
        }else{
            row = 5;
            place = s - 36;
            cost = 120;
        }
        return [row, place, cost]
    }
    let information = rows()
    let p = value.querySelector('p')
    p.textContent= `Ряд ${information[0]}, місце ${information[1]}`
    places.push({
        'id': id,
        "row": information[0],
        "place": information[1],
        "cost": information[2]
    })
    i++
    s++
    id++
})
let id_for_a = 101;
a.forEach((value)=>{
    value.id += `${id_for_a}`;
    id_for_a++
})

function animal(Id) {
    let  a_for_act = document.getElementById(`${+Id +100}`);
    if(a_for_act.classList.contains("active")){
        let cost_el = places[+Id - 1]['cost'];
        sum -= cost_el;
        tic_sum -= 1
        let div_remove = document.getElementById(`${Id}`);
        div_remove.remove()
        tickets_sum.textContent = `${tic_sum} квитка, ${sum} грн`;
        sum_res.textContent = `${sum} грн`;

        let  a_for_act = document.getElementById(`${+Id +100}`);
        a_for_act.classList.remove("active")
    }else {
        let cost_el = places[+Id - 1]['cost'];
        let row_el = places[+Id - 1]['row'];
        let place_el = places[+Id - 1]['place'];

        sum += cost_el
        tic_sum += 1

        tickets_sum.textContent = `${tic_sum} квитка, ${sum} грн`;
        sum_res.textContent = `${sum} грн`;

        let div_ticket = document.createElement("div");
        const div_payment = document.getElementById("payment");
        const parentDiv = div_payment.parentNode;
        parentDiv.insertBefore(div_ticket, div_payment);

        const a_delete = document.createElement("a");
        let span_range = document.createElement("span");
        let span_place = document.createElement("span");
        let span_price = document.createElement("span");

        div_ticket.appendChild(a_delete);
        div_ticket.appendChild(span_range);
        div_ticket.appendChild(span_place);
        div_ticket.appendChild(span_price);

        let img = document.createElement("img");
        img.src = "images/close.png";
        a_delete.appendChild(img);

        div_ticket.className = "ticket";
        div_ticket.id = `${Id}`;
        a_delete.className = "delete_ticket";
        // a_delete.textContent = 'clickme';
        a_delete.setAttribute('href', `javascript:close(${Id})`);
        span_range.className = "ticket_range";
        span_place.className = "ticket_place";
        span_price.className = "ticket_price";
        a_delete.id = `${Id}`;

        span_range.textContent = `${row_el} ряд`;
        span_place.textContent = `${place_el} місце`;
        span_price.textContent = `${cost_el} грн`;

        a_for_act.classList.add("active")
    }
}
function close(Id_close){
    let cost_el = places[+Id_close - 1]['cost'];
    sum -= cost_el;
    tic_sum -= 1
    let div_remove = document.getElementById(`${Id_close}`);
    div_remove.remove()
    tickets_sum.textContent = `${tic_sum} квитка, ${sum} грн`;
    sum_res.textContent = `${sum} грн`;

    let  a_for_act = document.getElementById(`${+Id_close +100}`);
    a_for_act.classList.remove("active")
}
