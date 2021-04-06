let k1, k2, unit, hyp;
let start = [380, 150];

let pyt = () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    document.getElementById('lblHyp').innerText = `Hypotenus: ${calcHyp(k1, k2).toFixed(2)}`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgb(0, 0, 200, 0.5)'
    ctx.beginPath();
    ctx.moveTo(...start);
    ctx.lineTo(start[0] + k2 * unit, start[1] + k1 * unit);
    ctx.lineTo(start[0] + (k1 + k2) * unit, start[1] - (k2 - k1) * unit);
    ctx.lineTo(start[0] + k1 * unit, start[1] - k2 * unit);
    ctx.fill();

    ctx.fillStyle = 'rgb(200, 0, 0, 0.5)'
    ctx.fillRect(start[0], start[1] + k1 * unit, k2 * unit, k2 * unit);

    ctx.fillStyle = 'rgb(0, 200, 0, 0.5)'
    ctx.fillRect(...start, -1 * k1 * unit, k1 * unit);
}

let setK1 = () => {
    k1 = Number(document.getElementById("k1").value);
    document.getElementById("lblk1").innerText = `K1: ${k1}`;
    pyt();
}

let setK2 = () => {
    k2 = Number(document.getElementById("k2").value);
    document.getElementById("lblk2").innerText = `K2: ${k2}`;
    pyt();
}

let setScale = () => {
    unit = document.getElementById("scale").value;
    document.getElementById("lblScale").innerText = `Scale: ${unit}`;
    pyt();
}

let calcHyp = (a, b) => {
    return Math.sqrt(a * a + b * b);
}

$(document).ready(() => {
    $("#canvas").css({border: "2px solid black"});
    setK1();
    setK2();
    setScale();
    pyt();
})