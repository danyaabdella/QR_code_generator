const form = document.getElementById('form');
const qr = document.getElementById('qrcode');
const spinner = document.getElementById('spinner');

const showSpinner = () => {
    spinner.style.display = 'block';
}
const hideSpinner = () => {
    spinner.style.display = 'none';
}
const onGenerateQR = (e) => {
    e.preventDefault();
    clearUI();
    const size = document.getElementById('size').value;
    const url = document.getElementById('url').value;

    if (url === "") {
        alert('insert URL');
    } else {
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQR(url,size);
        }, 1000);
    }
};

const generateQR=(url,size)=>{
    const qrcode=new QRCode('qrcode',{
        text:url,
        width:size,
        height:size,
    });
};

const clearUI=()=>{
    qr.innerHTML='';
};

hideSpinner();
form.addEventListener('submit', onGenerateQR);
