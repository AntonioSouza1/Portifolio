const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
})


//Validação do formulário
const form = document.getElementById('contact_form');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    //span de erro
    document.getElementById('erro_name').textContent =  '';
    document.getElementById('erro_mail').textContent = '';
    document.getElementById('erro_tel').textContent = '';
    document.getElementById('erro_message').textContent = '';

    const name = document.getElementById('name').value;
    const mail = document.getElementById('mail').value;
    const tel = document.getElementById('tel').value;
    const message = document.getElementById('message').value;

    let formValid = true;

    if (name === '') {
        document.getElementById('erro_name').textContent = 'O campo de nome e obrigatório.';
        formValid = false;
    } else if (name.length < 3){
        document.getElementById('erro_name').textContent = 'Campo nome precisa ter no minimo 3 caracteres';
    }

    if (mail === '') {
        document.getElementById('erro_mail').textContent = 'O campo de e-mail e obrigatório.';
        formValid = false;
    } else if (!validarMail(mail)) {
        document.getElementById('erro_mail').textContent = 'Por favor, insira um e-mail válido.';
        formValid = false;
    }

    if (tel === '') {
        document.getElementById('erro_tel').textContent = 'O campo de telefone e obrigatório.';
        formValid = false;
    }

    if (message === '') {
        document.getElementById('erro_message').textContent = 'O campo de mensagem e obrigatório.';
        formValid = false;
    }

    if (formValid) {
        alert("Formulário enviado com sucesso!");
        form.reset();
    }
})

function validarMail(mail) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(mail);
}

