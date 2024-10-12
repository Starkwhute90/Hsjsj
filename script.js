let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active', 'previous');
        if (i === index) {
            page.classList.add('active');
        } else if (i === index - 1) {
            page.classList.add('previous');
        }
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Initialize the first page
showPage(currentPage);￼Enter
