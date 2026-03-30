document.addEventListener('DOMContentLoaded', function () {
    // 1. Skroll - 'Smooth'
    const navLinks = document.querySelectorAll('.main-meni a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Forma - Kontrola unosa
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const phone = form.querySelector('#phone');
        const message = form.querySelector('#message');

        let isValid = true;
        let errorMsg = '';

        if (name.value.trim() === '') {
            isValid = false;
            errorMsg += 'Ime je obavezno.\n';
        }
        if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
            isValid = false;
            errorMsg += 'Email nije validan.\n';
        }
        if (!/^\+?[0-9\s\-]{6,20}$/.test(phone.value.trim())) {
            isValid = false;
            errorMsg += 'Telefon nije validan.\n';
        }
        if (message.value.trim() === '') {
            isValid = false;
            errorMsg += 'Poruka ne može biti prazna.\n';
        }

        if (!isValid) {
            alert(errorMsg);
            e.preventDefault();
        }
    });

    // 3. Selektovanje plana - Automatsko popunjavanje forme
    const orderButtons = document.querySelectorAll('.pricing-plan a');
    orderButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const planName = this.closest('.pricing-plan').querySelector('h4').textContent.trim();
            const messageField = form.querySelector('#message');

            const text = `Poštovani,\nZainteresovan sam za plan: ${planName}.`;
            messageField.value = text;

            // 4. Auto skroll
            form.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
