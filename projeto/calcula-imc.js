function calculaTodosIMCs(){
	var trsPaciente = document.getElementsByClassName("paciente");

	var i = 0;

	while(i<=trsPaciente.length - 1){
		
		var pacientetr = trsPaciente[i];
		var tdNome = pacientetr.getElementsByClassName("info-nome")[0];
		var tdPeso	=	pacientetr.getElementsByClassName("info-peso")[0];
		var tdAltura =	pacientetr.getElementsByClassName("info-altura")[0];
		
		var paciente = {"nome" : tdNome.textContent, "peso" : tdPeso.textContent, "altura" : tdAltura.textContent};
		
		if(paciente.altura != 0){
		var imc = paciente.peso/(paciente.altura*paciente.altura);
		
		var tdImc = pacientetr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;

		console.log(imc);
	}else{
		console.log("Nao foi executado, porque a altura e igual a 0");
	}
	i++;
	}
}

var botao = document.getElementById("calcula-imcs");

//botao.onclick = calculaTodosIMCs;
botao.addEventListener("click",calculaTodosIMCs);

