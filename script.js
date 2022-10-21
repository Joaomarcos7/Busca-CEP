

 let numbers=document.getElementById('cep');
 let bairro=document.getElementById('bairro');
 let rua=document.getElementById('rua');
 let cidade=document.getElementById('cidade');
 let estado=document.getElementById('estado');


 numbers.value=''
 bairro.value=''
 rua.value=''
 cidade.value=''
 estado.value=''
 

async function getcep(cep){
if(cep.length === 8){
const url= 'https://viacep.com.br/ws/' + cep + '/json/'
 const response = await fetch(url)
 const info =  await response.json()
 console.log(info) //fins de teste!!
bairro.value=info.bairro
rua.value=info.logradouro
cidade.value=info.localidade
estado.value=info.uf

}
else{
    console.log('Seu CEP é inválido!')
    alert('Seu CEP é inválido!')
}
}

