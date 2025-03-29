document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[name="tipo_contato"]');

  const elementosEmail = [
    document.getElementById("legenda-email"),
    document.getElementById("campo-email"),
  ];

  const elementosTelefone = [
    document.getElementById("legenda-telefone"),
    document.getElementById("campo-numero"),
  ];

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const selectedValue = event.target.value; // Captura o valor do rádio selecionado

      if (selectedValue === "telefone" || selectedValue === "whatsapp") {
        // Exibe os campos de e-mail e oculta os de telefone

        elementosTelefone.forEach((elemento) =>
          elemento.classList.remove("invisivel")
        );

        elementosEmail.forEach((elemento) =>
          elemento.classList.add("invisivel")
        );
      } else {
        // Exibe os campos de telefone e oculta os de e-mail

        elementosEmail.forEach((elemento) =>
          elemento.classList.remove("invisivel")
        );

        elementosTelefone.forEach((elemento) =>
          elemento.classList.add("invisivel")
        );
      }
    });
  });

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.querySelector('input[name="campo-nome"]').value;
    const tipoContato = document.querySelector(
      'input[name="tipo_contato"]:checked'
    ).value;

    document.getElementById("valor_nome").textContent = nome;
    document.getElementById("valor_tipo_contato").textContent = tipoContato;

    let valor_contato;
    // Captura o valor do campo de contato com base no tipo selecionado
    if (tipoContato === "e-mail") {
      valor_contato = document.querySelector('input[name="campo-email"]').value;
    } else {
      valor_contato = document.querySelector(
        'input[name="campo-numero"]'
      ).value;
    }

    document.getElementById("valor_contato").textContent = valor_contato;

    document.querySelector(".dialog").classList.remove("invisivel");
  });

  document.querySelector(".dialog__botao").addEventListener("click", () => {
    document.querySelector(".dialog").classList.add("invisivel");
  });
});
