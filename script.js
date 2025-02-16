let texto = document.getElementById("caixaTexto");
let main = document.getElementById("main");
let btnAdd = document.getElementById("btn-add");
let contador = 0;

function enviar() {
  contador++;
  if ((texto !== "") && (texto !== null) && (texto !== undefined)) {
    let valorInput = texto.value;

    let adcLista = `<main id="${contador}" class="item">
      <div class="item" onclick="marcarTarefa(${contador})">
        <!-- Ícone de "radio_button_unchecked" (tarefa não concluída) -->
        <svg height="20px" id="icone_${contador}" class="circle" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g fill="#000000">
              <path d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z"/>
            </g>
          </g>
        </svg>

        <p onclick="marcarTarefa(${contador})" class="itemLista">${valorInput}</p>
        <button onclick="remover(${contador})" class="deletar">
          <span class="material-symbols-outlined">
            delete
          </span>Deletar
        </button>
      </div>
    </main>`;

    main.innerHTML += adcLista;

    texto.value = "";
    texto.focus();
  }
}

function remover(id) {
  var i = document.getElementById(id);
  i.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
console.log(classe);
  var icone = document.getElementById("icone_" + id); // Obtendo o ícone específico

  if (classe == "item") {
    // Tarefa concluída
    item.classList.add("clicado");

    // Alterando o conteúdo do SVG para o ícone de "task_alt" (tarefa concluída)
    icone.innerHTML = `
      <g fill="none" fill-rule="evenodd">
        <g fill="#000000">
          <path d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"/>
        </g>
      </g>
    `;
  } else {
    // Tarefa não concluída (restaurando o ícone original)
    item.classList.remove("clicado");

    // Substituindo o ícone de volta para o "radio_button_unchecked"
    icone.innerHTML = `
      <g fill="none" fill-rule="evenodd">
        <g fill="#000000">
          <path d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z"/>
        </g>
      </g>
    `;
  }
}

texto.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
      event.preventDefault();
      btnAdd.click();
    }
  });