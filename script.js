const heroSectionCVButton = document.querySelector(".hero-section-CV-button")
const aboutSectionCVButton = document.querySelector(".about-section-CV-button")

function showCustomAlert(message) {
    const customAlert = document.getElementById('custom-alert');
    const customAlertMessage = document.getElementById('custom-alert-message');
    const customAlertClose = document.getElementById('custom-alert-close');

    customAlertMessage.textContent = message;
    customAlert.style.display = 'block';

    customAlertClose.onclick = function() {
        customAlert.style.display = 'none';
    };
}

const downloadAlert = () => {
    showCustomAlert("CV Successfully downloaded");
}

heroSectionCVButton.addEventListener("click", downloadAlert)
aboutSectionCVButton.addEventListener("click", downloadAlert)