const usuarios = []; // array para receber os objetos do tipo usuario



function salvarUsuario(){
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const cidade = document.getElementById("cidade").value;
  let id = usuarios.length;
  const usuario = {id: id++,
     nome, endereco, telefone, email, cidade};
  usuarios.push(usuario);
 
  
  Swal.fire({
    
    icon: 'success',
    title: 'Usuário cadastrado com sucesso!!!',
    showConfirmButton: false,
    timer: 1500
  });
  listarUsuarios();
  

  //console.log(usuarios);
  // carregar os usuario na tela
  // let linha = "";
  // usuarios.forEach(usuario => {
  //   row = document.getElementById("tbody");
  //    linha += "<tr>"+
  //             "<td id='tdid'>"+usuario.id +"</td>"+
  //             "<td id='tdnome'>"+usuario.nome +"</td>"+
  //             "<td id='tdendereco'>"+usuario.endereco+"</td>"+
  //             "<td id='tdtelefone'>"+usuario.telefone+"</td>"+
  //             "<td id='tdemail'>"+usuario.email+"</td>"+
  //             "<td id='tdcidade'>"+usuario.cidade+"</td>"+
  //             "<td id='tdacoes'><button class='btn btn-outline-success' onclick='editarUsuario("+usuario.id+")'><i class='fa fa-edit'></i></button>"+
  //             "<button class='btn btn-outline-danger'><i class='fa fa-trash'></i></button></td>"
  //           +"</tr>";
  //   row.innerHTML = linha;        

  
  
  // });
 }

 function apagarUsuario(id){
  Swal.fire({
    title: 'Confirmar a exclusão do Usuário?',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim'
  }).then((result) => {
    if (result.value) {
      const usuarioIndex = usuarios.findIndex(usuario => usuario.id == id);
      usuarios.splice(usuarioIndex,1);
      if(usuarios.length > 0){
       listarUsuarios();
      }else{
       row = document.getElementById("tbody");
       row.innerHTML = "";
      } 
      Swal.fire(
        'Usuário excluído com sucesso',
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




  
 /*const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
    listarUsuarios();
  }
})

Toast.fire({
  icon: 'success',
  title: 'Usuário Cadastrado com Sucesso!!!'
});*/