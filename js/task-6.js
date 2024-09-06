function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

        function createBoxes(amount) {
            const boxesContainer = document.getElementById('boxes');
            const elements = [];
            let size = 30;

            for (let i = 0; i < amount; i++) {
                const box = document.createElement('div');
                box.style.width = `${size}px`;
                box.style.height = `${size}px`;
                box.style.backgroundColor = getRandomHexColor();
                box.style.margin = '5px';
                elements.push(box);
                size += 10;
            }

            boxesContainer.append(...elements);
        }

        function destroyBoxes() {
            const boxesContainer = document.getElementById('boxes');
            boxesContainer.innerHTML = '';
        }
        document.querySelector('[data-create]').addEventListener('click', () => {
            const input = document.querySelector('input');
            const amount = Number(input.value);

            if (amount >= 1 && amount <= 100) {
                createBoxes(amount);
                input.value = '';
            } else {
                alert('Please enter a number between 1 and 100.');
            }
        });

        document.querySelector('[data-destroy]').addEventListener('click', () => {
            destroyBoxes();
        });
        
        


