var codigos = document.getElementById("Codigos");
var exibir = document.getElementById("botaoFim");
var codificar = document.getElementById("Codificar");
var decodificar = document.getElementById("Decodificar");




codigos.addEventListener("change", function(){
  var opcoes = document.getElementById("Cifras").value;
  var InputChave = document.getElementById("InputChave");

  if(opcoes == "Cesar")
  {
    InputChave.style.display = "block";
    console.log("Aparece o Input")
  }
  else
  {
    InputChave.style.display = "none";
    console.log("Some o Input")  
  }

})

codificar.addEventListener("click", function(){
  console.log("Cliquei codificar")
  document.getElementById("exibeFim").innerHTML = "Codificar Mensagem!"
})


decodificar.addEventListener("click", function(){
  console.log("cliquei decodificar");
  document.getElementById("exibeFim").innerHTML = "Decodificar Mensagem!"
})

exibir.addEventListener("click", function()
{
  console.log("abre a func")
  var opcoes = document.getElementById("Cifras").value;
  var entrada = document.getElementById("Entrada").value;
  var chave = document.getElementById("Chave").value;

  if(codificar.checked)
  {
    console.log("abre codificar")
    if(opcoes == "Cesar")
    {
        var resultado = "";
        for(i=0; i<entrada.length; i++)
        {
          var NumeroChar = entrada.charCodeAt(i);
          var transicao = NumeroChar + parseInt(chave);
          var reverteTransicao = String.fromCharCode(transicao);
          var resultado = resultado + reverteTransicao;  
        }
      document.getElementById("Resultado").innerHTML = resultado
    }
    else if(opcoes == "Base")
    {
      var binarioBase = btoa(entrada);
      
    document.getElementById("Resultado").innerHTML = binarioBase
      
    }
    else
    {
      document.getElementById("Resultado").innerHTML = "Insira uma codificação válida!"
    }
  } 
  else if(decodificar.checked)
  {
      if(opcoes == "Cesar")
    {
      var resultado = "";
        for(i=0; i<entrada.length; i++)
        {
          var NumeroChar = entrada.charCodeAt(i);
          var transicao = NumeroChar - parseInt(chave);
          var reverteTransicao = String.fromCharCode(transicao);
          var resultado = resultado + reverteTransicao;  
        }
      document.getElementById("Resultado").innerHTML = resultado
    }
    else if(opcoes == "Base")
    {
      var baseBinario = atob(entrada)
      document.getElementById("Resultado").innerHTML = baseBinario
    }
    else
    {
      console.log("Escolha uma cifra")
    }
  } 
})





