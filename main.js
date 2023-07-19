function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;
  }

  setInterval(updateTime, 1000);

  function exibirDataAtual() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Lembrando que os meses são indexados de 0 a 11
    var ano = dataAtual.getFullYear();

    // Formatação da data
    var dataFormatada = dia + "/" + mes + "/" + ano;

    // Exibindo a data na página HTML
    document.getElementById("dataAtual").innerHTML = "Data atual: " + dataFormatada;
  }

  // Chamando a função para exibir a data atual
  exibirDataAtual();