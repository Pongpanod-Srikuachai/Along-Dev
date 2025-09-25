document.addEventListener('DOMContentLoaded', () => {
    const commandsInput = document.getElementById('commands');
    const calculateBtn = document.getElementById('calculate-btn');
    const gridContainer = document.getElementById('grid');
    const resultText = document.getElementById('result-text');
    const currentPosition = document.getElementById('current-position');

    calculateBtn.addEventListener('click', () => {
        const commands = commandsInput.value.toUpperCase();
        if (commands.trim() === '') {
            gridContainer.innerHTML = '';
            resultText.style.display = 'none';
            currentPosition.textContent = '';
            return;
        }
      
        resultText.style.display = 'block';

        let x = 0;
        let y = 0;
        let direction = 0; // 0: Up (+Y), 1: Right (+X), 2: Down (-Y), 3: Left (-X)
        const path = new Set(['0,0']);

        for (const command of commands) {
            switch (command) {
                case 'L':
                    direction = (direction - 1 + 4) % 4;
                    break;
                case 'R':
                    direction = (direction + 1) % 4;
                    break;
                case 'W':
                    switch (direction) {
                        case 0: // Up
                            y += 1;
                            break;
                        case 1: // Right
                            x += 1;
                            break;
                        case 2: // Down
                            y -= 1;
                            break;
                        case 3: // Left
                            x -= 1;
                            break;
                    }
                    path.add(`${x},${y}`);
                    break;
            }
        }

        renderGrid(path, x, y);
        currentPosition.textContent = `ตำแหน่งปัจจุบัน (${x}, ${y})`;
    });

    function renderGrid(path, finalX, finalY) {
        gridContainer.innerHTML = '';
        
        // Define fixed grid dimensions
        const rows = 8;
        const cols = 9;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 25px)`;
        gridContainer.style.gridTemplateColumns = `repeat(${cols}, 25px)`;

        // Adjust coordinate system to fit the fixed grid
        const centerX = Math.floor(cols / 2);
        const centerY = Math.floor(rows / 2);

        for (let y = rows; y >= 0; y--) {
            for (let x = 0; x < cols; x++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                
                // Calculate actual grid coordinates
                const gridX = x - centerX;
                const gridY = y - centerY;
                const coordString = `${gridX},${gridY}`;
                
                if (gridX === 0 && gridY === 0) {
                    cell.classList.add('start');
                } else if (gridX === finalX && gridY === finalY) {
                    cell.classList.add('end');
                } else if (path.has(coordString)) {
                    cell.classList.add('path');
                }

                gridContainer.appendChild(cell);
            }
        }
    }
});