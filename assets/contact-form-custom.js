document.addEventListener('DOMContentLoaded', () => {
    const companyInfoDiv = document.getElementById('companyInfo');
    const contactReason = document.getElementById('contactReason');
    const productNameDiv = document.getElementById('productNameField');
    const orderNumberDiv = document.getElementById('orderNumberField');
    const businessCheckbox = document.getElementById('businessAccount');

    if (businessCheckbox && companyInfoDiv) {
        businessCheckbox.addEventListener('change', (e) => {
            \            companyInfoDiv.classList.toggle('hidden', !businessCheckbox.checked);
        });
    } else {
        console.warn('Missing elements: businessCheckbox or companyInfoDiv');
    }

    if (contactReason && productNameDiv && orderNumberDiv) {
        contactReason.addEventListener('change', (e) => {
            \            productNameDiv.classList.add('hidden');
            orderNumberDiv.classList.add('hidden');

            if (contactReason.value === 'product') {
                productNameDiv.classList.remove('hidden');
            } else if (contactReason.value === 'order') {
                orderNumberDiv.classList.remove('hidden');
            }
        });
    } else {
        console.warn('Missing elements: contactReason, productNameDiv, or orderNumberDiv');
    }
});