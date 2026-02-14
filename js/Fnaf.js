// BASE CODE FOR ALL THE EXERCISES
const examModel = 'X'; // Change to 'A' or 'B' for different starting sides
let defaultLayer;

if (examModel == 'A') defaultLayer = 'FRONT';
if (examModel == 'B') defaultLayer = 'BACK';

document.getElementById('CURRENT_SIDE').value = defaultLayer;

document.querySelector('.arrow_left').addEventListener('click', () => showThisLayer('FRONT'));
document.querySelector('.arrow_right').addEventListener('click', () => showThisLayer('BACK'));

showThisLayer(defaultLayer);

function showThisLayer(code) {
    if (code == 'BACK') {
        document.querySelector('#front_panel .form').style.display = 'none';
        document.querySelector('#front_panel .card').style.display = 'none';
        document.querySelector('#back_panel .form').style.display = 'block';
        document.querySelector('#back_panel .card').style.display = 'block';
        document.getElementById('CURRENT_SIDE').value = 'BACK';
        document.querySelector('.arrow_left').style.display = 'flex';
        document.querySelector('.arrow_right').style.display = 'none';
    }
    if (code == 'FRONT') {
        document.querySelector('#front_panel .form').style.display = 'block';
        document.querySelector('#front_panel .card').style.display = 'block';
        document.querySelector('#back_panel .card').style.display = 'none';
        document.querySelector('#back_panel .form').style.display = 'none';
        document.getElementById('CURRENT_SIDE').value = 'FRONT';
        document.querySelector('.arrow_left').style.display = 'none';
        document.querySelector('.arrow_right').style.display = 'flex';
    }
}

// Ocultar SEND y BACK al cargar
document.getElementsByClassName('btn_secondary')[0].style.display = 'none';
document.getElementsByClassName('btn_secondary')[1].style.display = 'none';

// Botones principales
document.getElementById('btn_preview').addEventListener('click', doPreview);
document.getElementById('btn_send').addEventListener('click', doSend);
document.getElementById('btn_back').addEventListener('click', doBack);

// BOTÓN NUEVO FNAF 1 / FNAF 2
document.getElementById('btn_toggle_fnaf').addEventListener('click', toggleFnaf);

function doPreview() {
    btn_send.style.display = 'flex';
    btn_back.style.display = 'flex';
    btn_preview.style.display = 'none';
    btn_toggle_fnaf.style.display = 'none';

    document.querySelector('.arrow_left').style.display = 'none';
    document.querySelector('.arrow_right').style.display = 'none';

    document.querySelector('#front_panel .form').style.display = 'none';
    document.querySelector('#front_panel .card').style.display = 'block';
    document.querySelector('#back_panel .form').style.display = 'none';
    document.querySelector('#back_panel .card').style.display = 'block';
}

function doSend() {
    let newDiv = document.createElement('div');
    newDiv.className = 'sent_message';
    newDiv.textContent = 'SENT TO FAZBEAR PIZZA!';
    document.querySelector('h1').appendChild(newDiv);
}

function doBack() {

    // Recuperamos el lado en el que estaba el usuario antes del PREVIEW
    let side = document.getElementById('CURRENT_SIDE').value;

    // Si por alguna razón está vacío, asumimos FRONT
    if (!side) side = 'FRONT';

    // Volvemos a mostrar el panel correcto
    showThisLayer(side);

    // Mostrar FORM y ocultar CARD en ese lado (modo edición)
    if (side === 'FRONT') {
        document.querySelector('#front_panel .form').style.display = 'block';
        document.querySelector('#front_panel .card').style.display = 'block';

        document.querySelector('#back_panel .form').style.display = 'block';
        document.querySelector('#back_panel .card').style.display = 'block';
    } else {
        document.querySelector('#front_panel .form').style.display = 'block';
        document.querySelector('#front_panel .card').style.display = 'block';

        document.querySelector('#back_panel .form').style.display = 'block';
        document.querySelector('#back_panel .card').style.display = 'block';
    }

    // Flechas como al cargar
    document.querySelector('.arrow_left').style.display =
        (side === 'BACK') ? 'flex' : 'flex';
    document.querySelector('.arrow_right').style.display =
        (side === 'FRONT') ? 'flex' : 'flex';

    // Botones como al cargar
    btn_send.style.display = 'none';
    btn_back.style.display = 'none';
    btn_preview.style.display = 'flex';
    btn_toggle_fnaf.style.display = 'flex';

    // Quitar mensaje de SENT si existe
    const sentMessage = document.querySelector('.sent_message');
    if (sentMessage) sentMessage.remove();
}


// EXERCISE 2 FRONT
btn_apply_front1.addEventListener('click', doApply1Front);

function doApply1Front() {
    let name1 = form_firstname.value;
    let name2 = form_lastname.value;
    let resNumber = form_resnumber.value;

    if (!name1 || !name2 || !resNumber) return alert('Please, fill all the fields');
    if ((name1.length + name2.length) >= 40) return alert('Too many characters');

    card_fullname.textContent = name1 + " " + name2;
    card_resnumber.textContent = "Calle " + resNumber;
}

// BACK
btn_apply_back1.addEventListener('click', doApply1Back);

function doApply1Back() {
    let email1 = form_email_user.value;
    let email2 = form_email_domain.value;

    if (!email1 || !email2) return alert('Please, fill all the fields');
    if ((email1.length + email2.length) >= 40) return alert('Too many characters');

    card_email.textContent = email1 + "@" + email2;
}

// EXERCISE 3 FRONT
btn_apply_front2.addEventListener('click', doApply2Front);

function doApply2Front() {
    let access = form_access.value;
    let planet = form_planet.value;

    let textaccess = {
        '307f4a': 'GREEN ACCESS',
        'c9a63a': 'ORANGE ACCESS',
        'd9534f': 'RED ACCESS'
    }[access];

    card_access.textContent = textaccess;
    card_access.style.backgroundColor = "#" + access;
    card_planet.textContent = "Localidad: " + planet;
}

// BACK
btn_apply_back2.addEventListener('click', doApply2Back);

function doApply2Back() {
    let role = form_role.value;
    let shift = form_shift.value;

    let textshift = {
        'c9a63a': 'DAY SHIFT',
        '000000': 'NIGHT SHIFT'
    }[shift];

    card_shift.textContent = textshift;
    card_shift.style.backgroundColor = "#" + shift;
    card_role.textContent = role;
}

// EXERCISE 4 FRONT
form_level.addEventListener('input', doApplyFrontSlider);

function doApplyFrontSlider() {
    card_level.textContent = "NIGHT " + form_level.value;
    form_level.previousElementSibling.textContent = "Night: " + form_level.value;
}

// BACK
form_immuno.addEventListener('input', doApplyBackSlider);

function doApplyBackSlider() {
    card_immuno.textContent = "RISK OF DEATH " + form_immuno.value + "%";
    form_immuno.previousElementSibling.textContent = "Risk of death: " + form_immuno.value + "%";
}

// EXERCISE 5 FRONT
document.querySelectorAll('#front_form .thumbnails_box img').forEach(img => {
    img.addEventListener('click', () => {
        card_zone_img.src = img.src;
        card_zone_name.textContent = img.alt.toUpperCase();
    });
});

// BACK — SELECCIÓN SIN BUCLES
const animImages = document.querySelectorAll('#back_form .thumbnails_box img');

const img1 = animImages[0];
const img2 = animImages[1];
const img3 = animImages[2];
const img4 = animImages[3];

const img5 = animImages[4];
const img6 = animImages[5];
const img7 = animImages[6];
const img8 = animImages[7];
const img9 = animImages[8];
const img10 = animImages[9];
const img11 = animImages[10];

// Mostrar solo las 4 primeras al cargar
img1.style.display = 'block';
img2.style.display = 'block';
img3.style.display = 'block';
img4.style.display = 'none';

img5.style.display = 'none';
img6.style.display = 'none';
img7.style.display = 'none';
img8.style.display = 'none';
img9.style.display = 'none';
img10.style.display = 'block';
img11.style.display = 'block';

// Click en imágenes BACK
animImages.forEach(img => {
    img.addEventListener('click', () => {

        // Cambiar la imagen en la tarjeta
        card_species_img.src = img.src;
        card_species_name.textContent = img.alt.toUpperCase();

        // Guardar según el modo actual
        if (btn_toggle_fnaf.value === "Cambiar a FNAF 2") {
            savedImageFnaf1 = {
                img: img,
                alt: img.alt,
                title: img.title
            };
        } else {
            savedImageFnaf2 = {
                img: img,
                alt: img.alt,
                title: img.title
            };
        }
    });
});

// --- CAMBIO FNAF 1 / FNAF 2 ---
let savedStateFnaf1 = null;
let savedStateFnaf2 = null;

// Guardar la imagen seleccionada en cada modo
let savedImageFnaf1 = { img: null, alt: null, title: null };
let savedImageFnaf2 = { img: null, alt: null, title: null };

const defaultImageFnaf1 = { img: img3, alt: img3.alt, title: img3.title };
const defaultImageFnaf2 = { img: img7, alt: img7.alt, title: img7.title };

const originalState = {
    firstname: "Mike",
    lastname: "Schmidt",
    resnumber: "Montcada",
    planet: "Barcelona",
    access: "d9534f",
    level: "4",
    email_user: "Mikeschmidt",
    email_domain: "gmail.com",
    role: "Waiter/Waitress",
    shift: "000000",
    immuno: "55"
};

function toggleFnaf() {
    const btn = btn_toggle_fnaf;

    // Estamos en FNAF 1 → vamos a FNAF 2
    if (btn.value === "Cambiar a FNAF 2") {

        // 🔥 Guardar el formulario ACTUAL de FNAF 1
        savedStateFnaf1 = readCurrentState();

        // Guardar imagen actual de FNAF 1
        if (!savedImageFnaf1.img) savedImageFnaf1 = defaultImageFnaf1;

        // Si FNAF 2 no tiene estado guardado, usar el original
        if (!savedStateFnaf2) savedStateFnaf2 = originalState;

        // Aplicar imagen FNAF 2
        if (!savedImageFnaf2.img) savedImageFnaf2 = defaultImageFnaf2;

        card_species_img.src = savedImageFnaf2.img.src;
        card_species_img.alt = savedImageFnaf2.alt;
        card_species_img.title = savedImageFnaf2.title;
        card_species_name.textContent = savedImageFnaf2.alt.toUpperCase();

        // 🔥 Aplicar el formulario guardado de FNAF 2
        applyState(savedStateFnaf2);
        updateCardsFromForms();

        showFnaf2Images();
        applyFnaf2Background();

        btn.value = "Cambiar a FNAF 1";
    }

    // Estamos en FNAF 2 → volvemos a FNAF 1
    else {

        // 🔥 Guardar el formulario ACTUAL de FNAF 2
        savedStateFnaf2 = readCurrentState();

        // Guardar imagen actual de FNAF 2
        if (!savedImageFnaf2.img) savedImageFnaf2 = defaultImageFnaf2;

        // Restaurar imagen FNAF 1
        if (!savedImageFnaf1.img) savedImageFnaf1 = defaultImageFnaf1;

        card_species_img.src = savedImageFnaf1.img.src;
        card_species_img.alt = savedImageFnaf1.alt;
        card_species_img.title = savedImageFnaf1.title;
        card_species_name.textContent = savedImageFnaf1.alt.toUpperCase();

        // 🔥 Restaurar el formulario EXACTO que tenía el usuario en FNAF 1
        if (savedStateFnaf1) {
            applyState(savedStateFnaf1);
            updateCardsFromForms();
        }

        showFnaf1Images();
        applyFnaf1Background();

        btn.value = "Cambiar a FNAF 2";
    }
}


function readCurrentState() {
    return {
        firstname: form_firstname.value,
        lastname: form_lastname.value,
        resnumber: form_resnumber.value,
        planet: form_planet.value,
        access: form_access.value,
        level: form_level.value,
        email_user: form_email_user.value,
        email_domain: form_email_domain.value,
        role: form_role.value,
        shift: form_shift.value,
        immuno: form_immuno.value
    };
}

function applyState(s) {
    form_firstname.value = s.firstname;
    form_lastname.value = s.lastname;
    form_resnumber.value = s.resnumber;
    form_planet.value = s.planet;
    form_access.value = s.access;
    form_level.value = s.level;

    form_email_user.value = s.email_user;
    form_email_domain.value = s.email_domain;
    form_role.value = s.role;
    form_shift.value = s.shift;
    form_immuno.value = s.immuno;

    form_level.previousElementSibling.textContent = "Night: " + s.level;
    form_immuno.previousElementSibling.textContent = "Risk of death: " + s.immuno + "%";
}

function updateCardsFromForms() {
    doApply1Front();
    doApply2Front();
    doApplyFrontSlider();

    doApply1Back();
    doApply2Back();
    doApplyBackSlider();
}

function showFnaf1Images() {
img1.style.display = 'block';
img2.style.display = 'block';
img3.style.display = 'block';
img4.style.display = 'none';

img5.style.display = 'none';
img6.style.display = 'none';
img7.style.display = 'none';
img8.style.display = 'none';
img9.style.display = 'none';
img10.style.display = 'block';
img11.style.display = 'block';
}

function showFnaf2Images() {
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'block';

    img5.style.display = 'block';
    img6.style.display = 'block';
    img7.style.display = 'block';
    img8.style.display = 'block';
    img8.style.display = 'block';
    img9.style.display = 'block';
    img10.style.display = 'block';
    img11.style.display = 'block';
}
function applyFnaf1Background() {
    document.body.classList.remove("background2");
    document.body.classList.add("background1");
}

function applyFnaf2Background() {
    document.body.classList.remove("background1");
    document.body.classList.add("background2");
}

const audio = document.getElementById("bg_audio");
audio.volume = 0.2; // 🔥 Volumen inicial al 20%
const btnToggle = document.getElementById("btn_toggle_audio");
const btnBack10 = document.getElementById("btn_back10");
const volumeSlider = document.getElementById("volume_slider");
const volumeIcon = document.getElementById("volume_icon");
// Icono inicial según volumen
if (audio.volume == 0) {
    volumeIcon.textContent = "🔇";
} else if (audio.volume < 0.5) {
    volumeIcon.textContent = "🔉";
} else {
    volumeIcon.textContent = "🔊";
}
const audioPlayer = document.getElementById("audio_player");

// Estado inicial
btnToggle.textContent = "⏸";

// Alternar Play/Pause
btnToggle.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        btnToggle.textContent = "⏸";
    } else {
        audio.pause();
        btnToggle.textContent = "▶";
    }
});

// Retroceder 10 segundos
btnBack10.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

// Volumen
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;

    if (audio.volume == 0) volumeIcon.textContent = "🔇";
    else if (audio.volume < 0.5) volumeIcon.textContent = "🔉";
    else volumeIcon.textContent = "🔊";
});

// Mute al hacer clic en el icono
volumeIcon.addEventListener("click", () => {
    audio.muted = !audio.muted;

    if (audio.muted) {
        volumeIcon.textContent = "🔇";
    } else {
        volumeSlider.value = audio.volume;
        volumeIcon.textContent = audio.volume < 0.5 ? "🔉" : "🔊";
    }
});

// 🔥 Autoplay real: empieza al primer clic en la página
window.addEventListener("click", () => {
    audio.play();
    btnToggle.textContent = "⏸";
}, { once: true });




