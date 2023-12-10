


/*
  --------------------------------------------------------------------------------------
  Chamada da função para limpar todas as linhas da tabela
  --------------------------------------------------------------------------------------
*/
const clearTable = () => {
  const rows = document.querySelectorAll('#tablePaciente>tbody tr')
  rows.forEach(row => row.parentNode.removeChild(row))
}

/*
    ----------------------------------------------------------------------------------------------------------------
    Função para popular a tabela
    ----------------------------------------------------------------------------------------------------------------
*/
const createRow = (paciente, index) => {
  const newRow = document.createElement('tr')
  
  if (paciente.outcome) {
    outcome = 'Doente'
  } else {
    outcome = 'Normal'
  }
  if (paciente.sex) {
    sex = 'M'
  } else {
    sex = 'F'
  }
  var numero = paciente.trestBPS;
  var unidade = "mmHg";
  var trestBPS = `${numero} ${unidade}`;

  var numero = paciente.chol;
  var unidade = "mg/dL";
  var chol = `${numero} ${unidade}`;


  var numero = paciente.thalach;
  var unidade = "beats per minute";
  var thalach = `${numero} ${unidade}`;
  
  

  // Criação das linhas da tabela 
  newRow.innerHTML = `
      <td id="tdName">${paciente.name}</td>
      <td id="tdAge">${paciente.age}</td>
      <td id="tdSex">${sex}</td>
      <td id="tdCa">${paciente.ca}</td>
      <td id="tdCp">${paciente.cp}</td>
      <td id="tdExang">${paciente.exang}</td>
      <td id="tdFbs">${paciente.fbs}</td>
      <td id="tdOldpeak">${paciente.oldpeak}</td>
      <td id="tdRestECG">${paciente.restECG}</td>
      <td id="tdSlope">${paciente.slope}</td>
      <td id="tdThal">${paciente.thal}</td>
      <td id="tdThalach">${thalach}</td>
      <td id="tdTrestBPS">${trestBPS}</td>
      <td id="tdChol">${chol}</td>
      <td id="tdChol">${outcome}</td>
      
      <td>
          <button class="button-excluir" type="button" id="excluir-${index}">excluir</button>
      </td> 
  `
  document.querySelector('#tablePaciente>tbody').appendChild(newRow)
}

/*
    ----------------------------------------------------------------------------------------------------------------
    Leitura da lista de pacientes 
    Função para obter a lista existente do servidor via requisição GET
    ----------------------------------------------------------------------------------------------------------------
*/
const updateTable = async () => {
  let url = 'http://127.0.0.1:5000/pacientes'
  fetch(url, {method: 'get'})
    .then((response) => response.json())
    .then((data) => {
      clearTable()
      data.pacientes.forEach(createRow)
    })
  .catch((error) => {
    console.error('Error:', error);
  });

}

/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputName, inputAge, inputSex, inputCp,
                        inputTrestBPS, inputChol, inputFbs,
                        inputRestECG, inputThalch, inputExang,
                        inputOldpeak, inputSlope, inputCa, 
                        inputThal) => {
    
  const formData = new FormData();
  formData.append('name', inputName);
  formData.append('age', inputAge);
  formData.append('sex', inputSex);
  formData.append('cp', inputCp);
  formData.append('trestBPS', inputTrestBPS);
  formData.append('chol', inputChol);
  formData.append('fbs', inputFbs);
  formData.append('restECG', inputRestECG);
  formData.append('thalach', inputThalch);
  formData.append('exang', inputExang);
  formData.append('oldpeak', inputOldpeak);
  formData.append('slope', inputSlope);
  formData.append('ca', inputCa);
  formData.append('thal', inputThal);

  let url = 'http://127.0.0.1:5000/paciente';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

updateTable()



/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo pacinte
  --------------------------------------------------------------------------------------
*/
const newPaciente = async () => {
  let inputName = document.getElementById("inputName").value;
  let inputAge = document.getElementById("inputAge").value;
  let inputSex = document.getElementById("inputSex").value;
  let inputCp = document.getElementById("inputCp").value;
  let inputTrestBPS = document.getElementById("inputTrestBPS").value;
  let inputChol = document.getElementById("inputChol").value;
  let inputFbs = document.getElementById("inputFbs").value;
  let inputRestECG = document.getElementById("inputRestECG").value;
  let inputThalch = document.getElementById("inputThalch").value;
  let inputExang = document.getElementById("inputExang").value;
  let inputOldpeak = document.getElementById("inputOldpeak").value;
  let inputSlope = document.getElementById("inputSlope").value;
  let inputCa = document.getElementById("inputCa").value;
  let inputThal = document.getElementById("inputThal").value;
  
  if (inputName === '') {
        alert("O nome do paciente não pode ser vazio!");
      
      } else if (inputAge <= 0) {
        alert("Inserir a idade do paciente!");
      
      } else if (inputSex === '') {
        alert("Selecionar o sexo do paciente!");
      
      } else if (inputCp === '') {
        alert("Selecionar o Chest Pain!");
      
      } else if (inputTrestBPS <= 0) {
        alert("Inserir o Resting Blood pressure!");

      } else if (inputChol <= 0) {
        alert("Inserir o Serun cholesterol!");

      } else if (inputFbs === '') {
        alert("Selecionar o Fasting blood sugar!");
      
      } else if (inputRestECG === '') {
        alert("Selecionar o Resting electrocardiogram results!");

      } else if (inputThalch <= 0) {
        alert("Inserir o Greatest number of beats per minute!");
      
      } else if (inputExang === '') {
        alert("Selecionar o ST depression induced by exercise relative to rest!");

      } else if (inputOldpeak <= 0) {
        alert("Inserir o Greatest number of beats per minute!");
      
      } else if (inputSlope === '') {
        alert("Selecionar o The slope of the peak exercise ST segment!");

      } else if (inputCa === '') {
        alert("Selecionar o Number of major vessels (0-3) colored by fluoroscopy!");

      } else if (inputThal === '') {
        alert("Selecionar o Absorb thallium!");
 
      } else {
        
        postItem(inputName, inputAge, inputSex, inputCp,
                   inputTrestBPS, inputChol, inputFbs,
                   inputRestECG, inputThalch, inputExang,
                   inputOldpeak, inputSlope, inputCa, 
                   inputThal);
        

        alert("Paciente adicionado!");

      }
    
}

/*
  --------------------------------------------------------------------------------------
  Chamada da função que verifica qual botão EDITAR ou DELETAR foi clicado.
  --------------------------------------------------------------------------------------
*/
const deletePaciente = (event) => {
  if (event.target.type == 'button'){
      const [action, index] = event.target.id.split('-')
      const paciente = readPaciente(index)
      const response = confirm(`Deseja realmente excluir o projeto ${paciente.name}`)
      if (response) {
            let url = 'http://127.0.0.1:5000/paciente?name=' + paciente.name;
            fetch(url, {
                method: 'delete'
              })
                .then((response) => response.json())
                .catch((error) => {
                  console.error('Error:', error);
                });
            clearFields()
            updateTable()
      }
  }
}

/*
  --------------------------------------------------------------------------------------
  Busca todos os nomes da tabela no HTML e retorna o paciente da linha informada.
  --------------------------------------------------------------------------------------
*/

const readPaciente = (RowIndex) => {
  var names = document.querySelectorAll("#tdName");
  const paciente = {
      name: names[RowIndex].innerHTML
  }
  return paciente
}


//Limpa campos
const clearFields = () => {
      // Obtém todos os elementos de input no formulário
    var inputs = document.querySelectorAll('input');

    // Itera sobre os elementos e define o valor como vazio
    inputs.forEach(function (input) {
        input.value = '';
    });

    // Define o valor inicial 
    var valorInicial = "";

    // Seleciona todos os elementos select na página
    var selects = document.querySelectorAll('select');

    selects.forEach(function(select) {
        select.value = valorInicial;
    });
}


//EVENTOS

document.getElementById('btDiagnosticar')
    .addEventListener('click', newPaciente)

document.querySelector('#tablePaciente>tbody')
    .addEventListener('click', deletePaciente)






