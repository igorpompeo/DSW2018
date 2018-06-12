function validarSenha(){
	var dados = document.getElementById("cad");
	var s1 = dados.elements[1].value;
	var s2 = dados.elements[2].value;
	if(s1 == s2){
		alert("Dados Cadastrados");
		return true;
	} else {
		alert("Verifique o valor digitado em senhas");
		return false;
	}
}