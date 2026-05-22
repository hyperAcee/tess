const elementsData = [
    ["H", "Hydrogen", 0, 1, 1], ["He", "Helium", 1, 18, 1],
    ["Li", "Lithium", 2, 1, 2], ["Be", "Beryllium", 3, 2, 2],
    ["B", "Boron", 4, 13, 2], ["C", "Carbon", 0, 14, 2],
    ["N", "Nitrogen", 0, 15, 2], ["O", "Oxygen", 0, 16, 2],
    ["F", "Fluorine", 0, 17, 2], ["Ne", "Neon", 1, 18, 2],
    ["Na", "Sodium", 2, 1, 3], ["Mg", "Magnesium", 3, 2, 3],
    ["Al", "Aluminium", 4, 13, 3], ["Si", "Silicon", 5, 14, 3],
    ["P", "Phosphorus", 0, 15, 3], ["S", "Sulfur", 0, 16, 3],
    ["Cl", "Chlorine", 0, 17, 3], ["Ar", "Argon", 1, 18, 3],
    ["K", "Potassium", 2, 1, 4], ["Ca", "Calcium", 3, 2, 4],
    ["Sc", "Scandium", 6, 3, 4], ["Ti", "Titanium", 6, 4, 4],
    ["V", "Vanadium", 6, 5, 4], ["Cr", "Chromium", 6, 6, 4],
    ["Mn", "Manganese", 6, 7, 4], ["Fe", "Iron", 6, 8, 4],
    ["Co", "Cobalt", 6, 9, 4], ["Ni", "Nickel", 6, 10, 4],
    ["Cu", "Copper", 6, 11, 4], ["Zn", "Zinc", 6, 12, 4],
    ["Ga", "Gallium", 4, 13, 4], ["Ge", "Germanium", 5, 14, 4],
    ["As", "Arsenic", 0, 15, 4], ["Se", "Selenium", 0, 16, 4],
    ["Br", "Bromine", 0, 17, 4], ["Kr", "Krypton", 1, 18, 4],
    ["Rb", "Rubidium", 2, 1, 5], ["Sr", "Strontium", 3, 2, 5],
    ["Y", "Yttrium", 6, 3, 5], ["Zr", "Zirconium", 6, 4, 5],
    ["Nb", "Niobium", 6, 5, 5], ["Mo", "Molybdenum", 6, 6, 5],
    ["Tc", "Technetium", 6, 7, 5], ["Ru", "Ruthenium", 6, 8, 5],
    ["Rh", "Rhodium", 6, 9, 5], ["Pd", "Palladium", 6, 10, 5],
    ["Ag", "Silver", 6, 11, 5], ["Cd", "Cadmium", 6, 12, 5],
    ["In", "Indium", 4, 13, 5], ["Sn", "Tin", 4, 14, 5],
    ["Sb", "Antimony", 5, 15, 5], ["Te", "Tellurium", 0, 16, 5],
    ["I", "Iodine", 0, 17, 5], ["Xe", "Xenon", 1, 18, 5],
    ["Cs", "Caesium", 2, 1, 6], ["Ba", "Barium", 3, 2, 6],
    ["La", "Lanthanum", 7, 3, 6], ["Ce", "Cerium", 7, 4, 6],
    ["Pr", "Praseodymium", 7, 5, 6], ["Nd", "Neodymium", 7, 6, 6],
    ["Pm", "Promethium", 7, 7, 6], ["Sm", "Samarium", 7, 8, 6],
    ["Eu", "Europium", 7, 9, 6], ["Gd", "Gadolinium", 7, 10, 6],
    ["Tb", "Terbium", 7, 11, 6], ["Dy", "Dysprosium", 7, 12, 6],
    ["Ho", "Holmium", 7, 13, 6], ["Er", "Erbium", 7, 14, 6],
    ["Tm", "Thulium", 7, 15, 6], ["Yb", "Ytterbium", 7, 16, 6],
    ["Lu", "Lutetium", 7, 17, 6], ["Hf", "Hafnium", 6, 4, 6],
    ["Ta", "Tantalum", 6, 5, 6], ["W", "Tungsten", 6, 6, 6],
    ["Re", "Rhenium", 6, 7, 6], ["Os", "Osmium", 6, 8, 6],
    ["Ir", "Iridium", 6, 9, 6], ["Pt", "Platinum", 6, 10, 6],
    ["Au", "Gold", 6, 11, 6], ["Hg", "Mercury", 6, 12, 6],
    ["Tl", "Thallium", 4, 13, 6], ["Pb", "Lead", 4, 14, 6],
    ["Bi", "Bismuth", 5, 15, 6], ["Po", "Polonium", 0, 16, 6],
    ["At", "Astatine", 0, 17, 6], ["Rn", "Radon", 1, 18, 6],
    ["Fr", "Francium", 2, 1, 7], ["Ra", "Radium", 3, 2, 7],
    ["Ac", "Actinium", 7, 3, 7], ["Th", "Thorium", 7, 4, 7],
    ["Pa", "Protactinium", 7, 5, 7], ["U", "Uranium", 7, 6, 7],
    ["Np", "Neptunium", 7, 7, 7], ["Pu", "Plutonium", 7, 8, 7],
    ["Am", "Americium", 7, 9, 7], ["Cm", "Curium", 7, 10, 7],
    ["Bk", "Berkelium", 7, 11, 7], ["Cf", "Californium", 7, 12, 7],
    ["Es", "Einsteinium", 7, 13, 7], ["Fm", "Fermium", 7, 14, 7],
    ["Md", "Mendelevium", 7, 15, 7], ["No", "Nobelium", 7, 16, 7],
    ["Lr", "Lawrencium", 7, 17, 7]
];

const scene = document.getElementById('scene');
const sceneContent = document.getElementById('scene-content');
const template = document.getElementById('element');

elementsData.forEach((el, i) => {
    const clone = template.content.cloneNode(true);
    const element = clone.querySelector('.element');
    
    element.querySelector('.element-number').textContent = i + 1;
    element.querySelector('.element-symbol').textContent = el[0];
    element.querySelector('.element-title').textContent = el[1];
    element.dataset.color = el[2];
    
    sceneContent.appendChild(clone);
});

// Mouse Rotation
let isDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;
let rotationX = 20;
let rotationY = -25;

scene.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    scene.setPointerCapture(e.pointerId);
    isDragging = true;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
});

window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - previousMouseX;
    const deltaY = e.clientY - previousMouseY;
    
    rotationY += deltaX * 0.6;
    rotationX -= deltaY * 0.6;
    
    scene.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
});

window.addEventListener('pointerup', () => { isDragging = false; });
window.addEventListener('pointercancel', () => { isDragging = false; });
window.addEventListener('blur', () => { isDragging = false; });

// Layout Controls
const buttons = document.querySelectorAll('.toggle');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        
        const layout = btn.id;
        sceneContent.dataset.layout = layout;
        
        if (layout === 'table') createTable();
        else if (layout === 'sphere') createSphere();
        else if (layout === 'helix') createHelix();
        else if (layout === 'grid') createGrid();
    });
});

function createTable() {
    sceneContent.style.display = 'grid';
    sceneContent.style.gridTemplateColumns = 'repeat(18, 68px)';
    sceneContent.style.gap = '10px';
    sceneContent.style.padding = '30px';
    
    document.querySelectorAll('.element').forEach((el, i) => {
        const data = elementsData[i];
        el.style.transition = 'all 1.6s cubic-bezier(0.23,1,0.32,1)';
        el.style.transform = 'translateZ(30px)';
        el.style.gridColumn = data[3];
        el.style.gridRow = data[4];
    });
}

function createSphere() {
    const els = document.querySelectorAll('.element');
    const radius = 340;
    sceneContent.style.display = 'block';
    els.forEach((el, i) => {
        const phi = Math.acos(-1 + (2 * i) / els.length);
        const theta = Math.sqrt(els.length * Math.PI) * phi;
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi) - 80;
        el.style.transition = 'all 2s cubic-bezier(0.23,1,0.32,1)';
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });
}

function createHelix() {
    const els = document.querySelectorAll('.element');
    sceneContent.style.display = 'block';
    els.forEach((el, i) => {
        const y = (i * 15) - 480;
        const angle = i * 0.78;
        const x = Math.sin(angle) * 300;
        const z = Math.cos(angle) * 300 - 100;
        el.style.transition = 'all 2s cubic-bezier(0.23,1,0.32,1)';
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });
}

function createGrid() {
    const els = document.querySelectorAll('.element');
    sceneContent.style.display = 'block';
    els.forEach((el, i) => {
        const x = (i % 12) * 78 - 430;
        const y = Math.floor(i / 12) * 88 - 340;
        const z = Math.floor(i / 72) * 160 - 160;
        el.style.transition = 'all 1.8s cubic-bezier(0.23,1,0.32,1)';
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });
}


createTable();