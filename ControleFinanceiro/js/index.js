const usuarios = [];

function salvarUsuario(){
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const cidade = document.getElementById("cidade").value;
  
  let id = usuarios.length;

  const usuario = {id: id++,nome, endereco, telefone, email, cidade};
  usuarios.push(usuario);
  Swal.fire({
   
    icon: 'success',
    title: 'Usuário cadastrado com sucesso!!',
    showConfirmButton: false,
    timer: 1500
  })
  listarUsuarios();

}

function apagarUsuario(id){
  Swal.fire({
    title: 'Confirma a exclusão do usuário?',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim'
  }).then((result) => {
    if (result.value) {
        let usuarioIndex = usuarios.findIndex(usuario => usuario.id == id);
        if(usuarioIndex >=0){
          usuarios.splice(usuarioIndex,1);
          if(usuarios.length > 0){
            listarUsuarios();
          }else{
            row = document.getElementById("tbody");
            row.innerHTML = "";
          }
        } 
      Swal.fire(
        'Usuário Deletado',
        '',
        'success'
      )
    }
  });
}

function listarUsuarios(){
  let linha = "";
  usuarios.forEach(usuario => {
    row = document.getElementById("tbody");
     linha += "<tr>"+
              "<td id='tdid'>"+usuario.id +"</td>"+
              "<td id='tdnome'>"+usuario.nome +"</td>"+
              "<td id='tdendereco'>"+usuario.endereco+"</td>"+
              "<td id='tdtelefone'>"+usuario.telefone+"</td>"+
              "<td id='tdemail'>"+usuario.email+"</td>"+
              "<td id='tdcidade'>"+usuario.cidade+"</td>"+
              "<td id='tdacoes'><button class='btn btn-outline-success' onclick='editarUsuario("+usuario.id+")'><i class='fa fa-edit'></i></button>"+
              "<button class='btn btn-outline-danger'onclick='apagarUsuario("+usuario.id+")'><i class='fa fa-trash'></i></button></td>"
            +"</tr>";
    row.innerHTML = linha;        

  
  
  });
 }
