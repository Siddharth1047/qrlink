function generateQRCode() {
    // Get the input link 
    var linkInput = document.getElementById('linkInput');
    var link = linkInput.value;

    // Generate QR code only if the input link is not empty
    if (link.trim() !== '') {
        // Clear previous QR code if any
        var qrCodeContainer = document.getElementById('qrCodeContainer');
        qrCodeContainer.innerHTML = '';

        // Create a new QR code element
        var qrCode = document.createElement('img');

        // Set the QR code source with the input link
        qrCode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(link);

        // Append the QR code element to the QR code container
        qrCodeContainer.appendChild(qrCode);
    }
}

function clearQRCode() {
    var qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = '';

    var linkInput = document.getElementById('linkInput');
    linkInput.value = '';
}
