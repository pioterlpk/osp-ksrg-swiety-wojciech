const reports = [];
buyer,
receiver,
amount,
reason
};

invoices.push(invoice);

updateInvoices();
updateStats();

const webhook = 'https://discord.com/api/webhooks/1505292739590357242/gNYUtGcXjnKbdl4t45SBQVUeDudo5_i7-FT7R5MTRPwPEhZsx8ZcrHWatPRZAO6RycNO';

const payload = {
embeds:[{
title:'💵 Nowa Faktura',
color:65280,
fields:[
{name:'Nabywca',value:buyer},
{name:'Odbiorca',value:receiver},
{name:'NIP',value:nip},
{name:'Adres',value:address},
{name:'Kwota',value:amount + ' PLN'},
{name:'Za co',value:reason}
]
}]
};

try{
await fetch(webhook,{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify(payload)
});
}catch(err){
console.log(err);
}

alert('Faktura wysłana');

}

function updateInvoices(){

const invoiceList = document.getElementById('invoiceList');

invoiceList.innerHTML = '';

invoices.forEach(invoice => {

invoiceList.innerHTML += `
<div class="invoice-item">
💵 ${invoice.reason} — ${invoice.amount} PLN
</div>
`;

});

}

function updateStats(){

const totalMoney = invoices.reduce((sum, invoice) => {
return sum + Number(invoice.amount);
},0);



document.getElementById('reportsToday').innerText = reports.length;
document.getElementById('invoicesToday').innerText = invoices.length;
document.getElementById('invoiceTotal').innerText = totalMoney + ' PLN';

document.getElementById('reportStats').innerText = reports.length;
document.getElementById('invoiceStats').innerText = invoices.length;
document.getElementById('moneyStats').innerText = totalMoney + ' PLN';

}

function managementAction(){

const memberName = document.getElementById('memberName').value;
const actionType = document.getElementById('actionType').value;

if(!memberName){
alert('Podaj nick');
return;
}

alert(actionType + ' wykonano dla ' + memberName);

}