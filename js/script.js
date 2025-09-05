document.addEventListener('DOMContentLoaded', function() {
            // Definir las subespecialidades
    const subespecialidades = {
        oftalmologia: ['Retina', 'Córnea', 'Glaucoma', 'Oftalmología Pediátrica', 'Estrabismo','Cataratas','Cirugía refractiva','Cirugía pediátrica','Neurooftalmología','Oculoplástia','Segmento Anterior','Segmento Posterior','Retina, vitreo y uveítis','Oculoplastía lagrimal y orbita','Oncología ocular y tumores'],
        otorrinolaringologia: ['Otología y Otoneurología', 'Rinología', 'Laringología','oncología', 'Otorrinolaringología Pediátrica', 'Audiología', 'Disfagia', 'Patología de Glándulas Salivales'],
        medicina_interna:['Cardiología', 'Gastroenterología', 'Neumología', 'Nefrología', 'Hematología', 'Endocrinología','Reumatología','Medicina Intensiva', 'Infectología']
    };
            
        // Obtener elementos del DOM
    const especialidadSelect = document.getElementById('especialidad');
    const subespecialidadSelect = document.getElementById('subespecialidad');
    const resetButton = document.getElementById('btn-reset');
            
            // Evento cuando cambia la especialidad
    especialidadSelect.addEventListener('change', function() {
    const especialidad = this.value;
                
                // Habilitar el selector de subespecialidad
    subespecialidadSelect.disabled = false;
                
                // Limpiar opciones actuales
    subespecialidadSelect.innerHTML = '';
                
                // Agregar opción por defecto
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Seleccione una subespecialidad';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    subespecialidadSelect.appendChild(defaultOption);
                
                // Agregar las subespecialidades correspondientes
        if (especialidad && subespecialidades[especialidad]) {
            subespecialidades[especialidad].forEach(function(subespecialidad) {
            const option = document.createElement('option');
            option.value = subespecialidad.toLowerCase().replace(/\s+/g, '-');
            option.textContent = subespecialidad;
            subespecialidadSelect.appendChild(option);
            });
        }
    });
            
            // Evento para el botón de reinicio
    resetButton.addEventListener('click', function() {
        especialidadSelect.selectedIndex = 0;
        subespecialidadSelect.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Primero seleccione una especialidad';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        subespecialidadSelect.appendChild(defaultOption);
        subespecialidadSelect.disabled = true;
    });
});