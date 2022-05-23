const rock = {
    is: 'r',
    display: '🗿',
    vs: (opp) => {
        if (opp.is === 'r') return 'draw';
        else if (opp.is === 'p') return 'lose';
        else return 'win';
    }
}
const paper = {
    is: 'p',
    display: '📜',
    vs: (opp) => {
        if (opp.is === 'r') return 'win';
        else if (opp.is === 'p') return 'draw';
        else return 'lose';
    }
}
const scissors = {
    is: 's',
    display: '✂️',
    vs: (opp) => {
        if (opp.is === 'r') return 'lose';
        else if (opp.is === 'p') return 'win';
        else return 'draw';
    }
}
const score = new Map()
    .set('win', 0)
    .set('lose', 0)
    .set('draw', 0)

const choices = new Map()
    .set('types', ['r', 'p', 's'])
    .set('r', rock)
    .set('p', paper)
    .set('s', scissors);

function play(userChoice) {
    userChoice ??= prompt("What would you like to choose? R/P/S")?.toLowerCase();
    if (userChoice == null) return; // return on cancel
    const cpuChoice = choices.get('types')[Math.floor(Math.random() * choices.get('types').length)];
    if (!['r', 'p', 's'].includes(userChoice)) {
        alert('Please enter a valid value');
        play();
    } else {
        const user = choices.get(userChoice);
        const cpu = choices.get(cpuChoice);
        const result = user.vs(cpu);
        score.set(result, score.get(result) + 1);

        document.getElementById('user-choice').innerText = user.display;
        document.getElementById('cpu-choice').innerText = cpu.display;
        document.getElementById('result').innerText = firstCaps(result);
        document.getElementById(result).innerText = score.get(result);
    }
}

function firstCaps (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}