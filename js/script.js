// Selecionando elementos
const downloadButton = document.getElementById('download-btn');

// Modal principal (formulário de contato)
const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.querySelector('.close');
const contactForm = document.getElementById('contact-form');

// Modal de sucesso
const successModal = document.getElementById('success-modal');
const closeSuccessModal = document.querySelector('.close-success');

const successNotification = document.getElementById('success-notification');

// Função para mostrar a notificação
function showSuccessNotification() {
    // Mostrar a notificação
    successNotification.classList.add('show');

    // Esconder a notificação após 5 segundos
    setTimeout(() => {
        successNotification.classList.remove('show');
    }, 5000); // 5 segundos
}

// Abrir modal de contato
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Fechar modal de contato
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Envio de formulário via EmailJS
document.addEventListener('DOMContentLoaded', function () {
    // Inicializando o EmailJS com a chave de usuário
    emailjs.init('N5CCxr02C_AVTesSw'); // Substitua pela sua chave de usuário

    // Selecionando o formulário
    const form = document.getElementById('contact-form');

    // Função para enviar o e-mail
    function sendEmail(e) {
        e.preventDefault(); // Evitar o comportamento padrão do formulário

        // Enviar o formulário via EmailJS
        emailjs.sendForm('service_rhr60rn', 'template_lp2jg8a', form)
            .then((result) => {
                console.log('Email enviado com sucesso:', result.text);

                // Mostrar a notificação de sucesso
                showSuccessNotification();
            })
            .catch((error) => {
                console.error('Erro ao enviar email:', error.text);
                alert('Houve um erro ao enviar a mensagem. Tente novamente!');
            });

        // Limpar o formulário após o envio
        form.reset();
    }

    // Adicionar o ouvinte de evento para o envio do formulário
    form.addEventListener('submit', sendEmail);
});

// Fechar o modal de sucesso quando clicar no 'X'
closeSuccessModal.addEventListener('click', () => {
    successModal.style.display = 'none';
});

