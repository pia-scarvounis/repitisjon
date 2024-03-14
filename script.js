function findHighestNumber() {
    const numbers = [3, 6, 2, 7, 4];
    const maxNumber = Math.max(...numbers);
  document.getElementById('output').innerHTML = `Det største tallet er: ${maxNumber}`
}
function removeDuplicates() {
    const names = ['Ørjan', 'Torild', 'Pia', 'Marc', 'Marte', 'Pia', 'Anders'];
    const uniqueNames = Array.from(new Set(names));
    document.getElementById('output').innerHTML = `Unike navn: ${uniqueNames.join(', ')}`;
}
function countElements() {
    const fruits = ['eple', 'banan', 'eple', 'apelsin', 'eple', 'druer']
    const countApples = fruits.filter(fruit => fruit === 'eple').length;
    document.getElementById('output').innerHTML = `Antall epler: ${countApples}`
}

function setLocalStorage() {
    const items = ['Item1', 'Item2', 'Item3'];
    localStorage.setItem('Item key', JSON.stringify(items));

    document.getElementById('output').innerHTML = 'Items er lagret i localStorage.';
}

function showLocalStorage() {
    const storedItems = JSON.parse(localStorage.getItem('Item key'));
    if (!storedItems) {
        document.getElementById('output').innerHTML = 'Ingen lagrede elementer i localStorage.'
    } else {
        document.getElementById('output').innerHTML = `Items i localStorage: ${storedItems.join(', ')}`; 
    }
}

function removeLocalStorage() {
    localStorage.removeItem('Item key');
    document.getElementById('output').innerHTML = 'Items er fjernet fra localStorage.';
}

function toggleTheme(){
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark');
    updateButtonText(isDarkMode);
}

function updateButtonText(isDarkMode) {
    const button = document.getElementById('themeButton');

    if (isDarkMode) {
        button.textContent = 'Light Mode'
    } else {
        button.textContent = 'Dark Mode'
    }
}

const hour = new Date().getHours();
const date = new Date();
console.log(date)
if (hour >=19 || hour < 6) {
    document.body.classList.add('dark')
    updateButtonText(true)
} else {
    document.body.classList.remove('dark')
    updateButtonText(false)
}

function moveButton() {
    const button = document.getElementById('magicButton');
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

