function GerarQRCode(){
    let inputUsuario = document.querySelector('textarea').value;
    let GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=';
    let conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
}