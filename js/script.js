document.addEventListener('DOMContentLoaded', function() {

 

            // Definir las subespecialidades
            const subespecialidades = {
                medicina_general: [],
                residente: ['Medicina Familiar','Medicina Interna','Neumonologia','Oftalmologia','Otorrinolaringología','Pediatría'],
                oftalmologia: ['Retina', 'Córnea', 'Glaucoma', 'Oftalmología Pediátrica', 'Estrabismo','Cataratas','Cirugía refractiva','Cirugía pediátrica','Neurooftalmología','Oculoplástia','Segmento Anterior','Segmento Posterior','Retina, vitreo y uveítis','Oculoplastía lagrimal y orbita','Oncología ocular y tumores'],
                otorrinolaringologia: ['Alergia','Audiología','Cirugía De Cabeza Y Cuello', 'Cirugía Plástica Y Reconstructiva Facial','Laringología', 'Otología y Otoneurología', 'Otorrinolaringología Pediátrica', 'Rinología',  'Disfagia', 'Patología de Glándulas Salivales'],
                medicina_interna:['Alergología','Cardiología', 'Endocrinología','Farmacología', 'Gastroenterología','Geriatría', 'Hematología', 'Infectología', 'Intensivista', 'Medicina Crítica','Medicina Del Sueño', 'Nefrología' , 'Neumología','Oncología', 'Reumatología'],
                medicina_familiar: ['Geriatría','Medicina De La Adolescencia','Medicina Paliativa'],
                pediatria: ['Cardiología Pediátrica','Endocrinología Pediátrica','Gastroenterología Pediátrica','Neonatología','Neumonogología Pediátrica'],
                neumonologia: ['Neumonología intervencionista','Neumonología crítica','Neumonología infantil']
            };
            
            // Obtener elementos del DOM
            const especialidadSelect = document.getElementById('especialidad');
            const subespecialidadSelect = document.getElementById('subespecialidad');
            const subespecialidadContainer = document.getElementById('subespecialidad-container');
            const residentCheckboxGroup = document.getElementById('resident-checkbox-group');
            const optionalCheckboxGroup = document.getElementById('optional-checkbox-group');
            const resetButton = document.getElementById('btn-reset');
            
            // Evento cuando cambia la especialidad
            especialidadSelect.addEventListener('change', function() {
                const especialidad = this.value;
                
                // Manejar el campo de subespecialidad
                if (especialidad === 'medicina_general') {
                    // Ocultar subespecialidad para Medicina General
                    subespecialidadContainer.style.display = 'none';
                    subespecialidadSelect.disabled = true;
                    subespecialidadSelect.removeAttribute('required');
                } else {
                    // Mostrar y habilitar subespecialidad para otras especialidades
                    subespecialidadContainer.style.display = 'block';
                    subespecialidadSelect.disabled = false;
                    subespecialidadSelect.setAttribute('required', 'required');
                    
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
                }
                
                // Manejar los checkboxes de residente
                if (especialidad === 'residente') {
                    residentCheckboxGroup.style.display = 'block';
                    optionalCheckboxGroup.style.display = 'none';
                    
                    // Hacer los checkboxes obligatorios
                    document.querySelectorAll('#resident-checkbox-group .form-check-input').forEach(checkbox => {
                        checkbox.setAttribute('required', 'required');
                    });
                } else if (especialidad !== 'medicina_general') {
                    // Mostrar checkboxes opcionales para otras especialidades (excepto medicina general)
                    optionalCheckboxGroup.style.display = 'block';
                    residentCheckboxGroup.style.display = 'none';
                    
                    // Quitar el atributo required de los checkboxes opcionales
                    document.querySelectorAll('#optional-checkbox-group .form-check-input').forEach(checkbox => {
                        checkbox.removeAttribute('required');
                    });
                } else {
                    // Ocultar ambos grupos de checkboxes para medicina general
                    residentCheckboxGroup.style.display = 'none';
                    optionalCheckboxGroup.style.display = 'none';
                }
            });
            
            // Evento para el botón de reinicio
            resetButton.addEventListener('click', function() {
                // Reiniciar selección de especialidad
                especialidadSelect.selectedIndex = 0;
                
                // Reiniciar selección de subespecialidad
                subespecialidadSelect.innerHTML = '';
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = 'Primero seleccione una especialidad';
                defaultOption.disabled = true;
                defaultOption.selected = true;
                subespecialidadSelect.appendChild(defaultOption);
                subespecialidadSelect.disabled = true;
                
                // Mostrar el contenedor de subespecialidad
                subespecialidadContainer.style.display = 'block';
                
                // Ocultar los grupos de checkboxes
                residentCheckboxGroup.style.display = 'none';
                optionalCheckboxGroup.style.display = 'none';
                
                // Desmarcar todos los checkboxes
                document.querySelectorAll('.form-check-input').forEach(checkbox => {
                    checkbox.checked = false;
                    checkbox.removeAttribute('required');
                });
            });
        });

        