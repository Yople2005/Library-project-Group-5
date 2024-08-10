document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrCanvas = document.getElementById('qr-canvas');
    const downloadBtn = document.getElementById('download-btn');

    const qr = new QRious({
        element: qrCanvas,
        size: 200
    });

    generateBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text) {
            qr.value = text;
            qrCanvas.style.display = 'block';
            downloadBtn.style.display = 'block';
        } else {
            qrCanvas.style.display = 'none';
            downloadBtn.style.display = 'none';
        }
    });

    downloadBtn.addEventListener('click', () => {
        const dataURL = qrCanvas.toDataURL('image/png');
        downloadBtn.href = dataURL;
    });
});
