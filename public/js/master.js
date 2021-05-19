
var nome;
var sexo;
var idade;
var telefone;
var cpf;
var i = 0;
var codigo;
var cod;
var mod;
var index;
var d = 0;


function Cadastro() {
  nome = $("#nome").val();
  sexo = $("#sexo").val();
  idade = parseInt($("#idade").val());
  sobrenome = parseInt($("#Sobrenome").val());
  telefone = $("#tel").val();
  cpf = $("#cpf").val();
  cod=Math.random()*10000;
  mod=i;



  var cliente = new Object();

  cliente.nome = nome;
  cliente.idade = idade;
  cliente.sexo = sexo;
  cliente.Sobrenome = sobrenome;
  cliente.telefone = telefone;
  cliente.cpf = cpf;
  caseliente.pospron = 0;
  cliente.id = Math.trunc(cod);
  cliente.data=[];
  lista[i] = cliente;
  i++;

  $("#nome").val("");
  $("#idade").val("");
  $("#sexo").val("");
  $("#Sobrenome").val("");
  $("#tel").val("");
  $("#cpf").val("");


}

function Display() { // função onload do body


  $(".criarctn").css("display","none");
  $("#editBtn").css("display", "none");
  $("#gravarBtn").css("display", "none");
  $("#confirmBtn").css("display", "none");
  $(".pronts").css("display","none");
  $("#mostrarBtn").css("display", "none");


}
function Lista() {
  $("#lista").html("");
  for (var k = 0; k < i; k++) {
    $("#lista").append("<li>"+" - Nome: " + lista[k].nome + " -- " + "ID: " +lista[k].id + "</li><br>");
  }
}


function Pesquisar(){

  codigo = parseInt($("#ID").val());
  $("#resultado").html("");


   for(var c=0;c<i;c++){
     if(codigo == lista[c].id){
       $("#resultado").append("<li> - Nome: "+lista[c].nome + "</li><li> - Idade: " + lista[c].idade + "</li><li> - Sexo:"+lista[c].sexo + "</li><li> - Sobrenome:"+lista[c].sobrenome + "</li><li> - Telefone: " + lista[c].telefone + "</li><li> - CPF: " + lista[c].cpf + "</li><li> - Doenças: " + lista[c].doenca+"<li><input type='date' id='bday' value=''></li>"+"<textarea name='name' rows='8' cols='30' id='texto'></textarea>"+"<br>");
       index=lista[c].vetor;
       var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     $("input[type=date]").val(yyyy+"-"+mm+"-"+dd);
     }
    if (lista[c].id != 0) {
      $("#editBtn").css("display", "block");
      $("#gravarBtn").css("display", "block");
      $("#mostrarBtn").css("display", "block");
    }
  }
}



function Edit() {


  $("#nome").val(lista[index].nome);
  $("#idade").val(lista[index].idade);
  $("#sexo").val(lista[index].sexo);
  $("#Sobrenome").val(lista[index].sobrenome);
  $("#cpf").val(lista[index].cpf);
  $("#tel").val(lista[index].telefone);
  $("#cadastroBtn").css("display","none");
  $("#confirmBtn").css("display","block");
}


function Confirm() {
  nome = $("#nome").val();
  sexo = $("#sexo").val();
  idade = parseInt($("#idade").val());
  altura = parseInt($("sobrenome").val());
  telefone = $("#tel").val();
  cpf = $("#cpf").val();
  var b =lista[index].id;

  var cliente = new Object();

  cliente.nome = nome;
  cliente.idade = idade;
  cliente.sexo = sexo;
  cliente.sobrenome = sobrenome;
  cliente.telefone = telefone;
  cliente.cpf = cpf;
  cliente.id = b ;
  lista[index] = cliente;

  $("#nome").val("");
  $("#idade").val("");
  $("#sexo").val("");
  $("#altura").val("");
  $("#massa").val("");
  $("#sangue").val("");
  $("#etnia").val("");
  $("#alergia").val("");
  $("#historico").val("");
  $("#doenca").val("");
  $("#tel").val("");
  $("#cpf").val("");

  $("#cadastroBtn").css("display","block");
  $("#confirmBtn").css("display","none");
}

var y=0;
var cadastros=[];

function Logout(){
  $(".FichaMedica").css("display","none");
  $(".login").css("display","block");
  $("#usernameField").val("");
  $("#passwordField").val("");
  $("#imagemPUC").css("display","block");
  location.reload();
}

function sing_up(){

  $(".criarctn").css("display","block");
  $(".criarsome").css("display","none");

}

function Voltar() {
  $(".criarctn").css("display","none");
  $(".criarsome").css("display","block");
  $(".erro").css("display", "none");
  $("#newpasswordField").val("");
  $("#newusernameField").val("");
}

function Finalizar(){

  $(".criarctn").css("display","none");
  $(".criarsome").css("display","block");
  var nome=$("#newusernameField").val();
  var senha=$("#newpasswordField").val();
  if(nome == "" || senha == "") { //faz com que usuário e senha vazios não sejam válidos no cadastro

    var nome=$("#newusernameField").val();
    var senha=$("#newpasswordField").val();

    $(".erro").css("display", "block");
    $(".criarsome").css("display","none");
    $(".criarctn").css("display","block");
  }
  else{
    $(".erro").css("display", "none");
    $("#newpasswordField").val("");
    $("#newusernameField").val("");
  }

  var usuario= new Object();
  usuario.name=nome;
  usuario.senha=senha;

  cadastros[y]= usuario;
  y++;
}

var userAdm = "admin";
var pwAdm = "admin";

function sign_in () {
  var aux=0;
  var user=$("#usernameField").val();
  var pw=$("#passwordField").val();
  for(var u=0;u<y;u++){

    if(user==cadastros[u].name && pw==cadastros[u].senha){
      $(".FichaMedica").css("display","block");
      $(".FichaMedica").fadeTo("slow", 1);
      $(".login").css("display","none");
      $("#imagemPUC").css("display","none");
      return(aux=1);
    }
  }

}
