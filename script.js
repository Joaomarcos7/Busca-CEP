

 let numbers=document.getElementById('cep');
 let bairro=document.getElementById('bairro');
 let rua=document.getElementById('rua');
 let cidade=document.getElementById('cidade');
 let estado=document.getElementById('estado');
 let error=document.getElementById('error');


 
 

async function getcep(cep){
    bairro.value=''
    rua.value=''
    cidade.value=''
    estado.value=''
if(cep.length === 8){
const url= 'https://viacep.com.br/ws/' + cep + '/json/'
 const response = await fetch(url)
 const info =  await response.json()
 console.log(info) //fins de teste!!
bairro.value=info.bairro
rua.value=info.logradouro
cidade.value=info.localidade
estado.value=info.uf
error.style.display='none';
  numbers.style.background='';
  numbers.style.border='';
if (info.erro==true){
    error.style.display='block';
    numbers.style.background='pink';
    numbers.style.border='1px solid red';
    error.innerHTML='Esse Cep não existe!';
    bairro.value=''
    rua.value=''
    cidade.value=''
    estado.value=''
  }
}
else{
  error.style.display='block';
  error.innerHTML='Cep inválido!';
  numbers.style.background='pink';
  numbers.style.border='1px solid red';
}
}

