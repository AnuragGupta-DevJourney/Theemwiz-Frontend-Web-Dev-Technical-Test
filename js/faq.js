const accordion = document.getElementById('accordion');
const items = accordion.querySelectorAll('.accordion-item');

items.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // Close all items
        items.forEach(i => i.classList.remove('active'));
        // Open clicked item
        item.classList.add('active');
    });
});