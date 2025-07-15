
let currentSection = 0;
const totalSections = 4;

function showSection(index, menuItem) {
    // Actualizar progreso
    currentSection = index;
    updateProgress();
    
    // Actualizar menú activo
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    menuItem.classList.add('active');
    
    // Mostrar sección correspondiente
    document.querySelectorAll('.content-section').forEach((section, i) => {
        section.classList.remove('active');
        if (i === index) {
            setTimeout(() => {
                section.classList.add('active');
            }, 50);
        }
    });
}

function updateProgress() {
    const progress = ((currentSection + 1) / totalSections) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (currentSection < totalSections - 1) {
            const nextItem = document.querySelectorAll('.menu-item')[currentSection + 1];
            showSection(currentSection + 1, nextItem);
        }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (currentSection > 0) {
            const prevItem = document.querySelectorAll('.menu-item')[currentSection - 1];
            showSection(currentSection - 1, prevItem);
        }
    }
});