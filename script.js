function openLab(lab) {
  let content = document.getElementById("content");
  if (lab === "hooke") {
    content.innerHTML = `
      <h2>Гук заңы</h2>
      <button onclick="showTheory('hooke')">Теория</button>
      <button onclick="startExperiment('hooke')">Лабораторияны бастау</button>
    `;
  } else if (lab === "young") {
    content.innerHTML = `
      <h2>Юнг модулі</h2>
      <button onclick="showTheory('young')">Теория</button>
      <button onclick="startExperiment('young')">Лабораторияны бастау</button>
    `;
  }
}

function showTheory(lab) {
  let content = document.getElementById("content");
  if (lab === "hooke") {
    content.innerHTML = `
      <section>
        <h3>Теория</h3>
        <p>Гук заңы: F = kx</p>
        <button onclick="startExperiment('hooke')">Лабораторияны бастау</button>
      </section>
    `;
  } else if (lab === "young") {
    content.innerHTML = `
      <section>
        <h3>Теория</h3>
        <p>Юнг модулі: E = σ/ε</p>
        <button onclick="startExperiment('young')">Лабораторияны бастау</button>
      </section>
    `;
  }
}

function startExperiment(lab) {
  let content = document.getElementById("content");
  if (lab === "hooke") {
    content.innerHTML = `
      <section>
        <h3>Гук заңы тәжірибе</h3>
        <label>Күш (F, Н): <input id="force" type="number"></label><br>
        <label>Ұзарту (x, м): <input id="elongation" type="number"></label><br>
        <button onclick="calculateK()">Есептеу</button>
        <p id="result"></p>
        <canvas id="graph" width="400" height="200"></canvas>
        <button onclick="showQuestions()">Бақылау сұрақтары</button>
      </section>
    `;
  } else if (lab === "young") {
    content.innerHTML = `
      <section>
        <h3>Юнг модулі тәжірибе</h3>
        <label>Кернеу (σ, Па): <input id="stress" type="number"></label><br>
        <label>Салыстырмалы деформация (ε): <input id="strain" type="number"></label><br>
        <button onclick="calculateE()">Есептеу</button>
        <p id="result"></p>
        <button onclick="showQuestions()">Бақылау сұрақтары</button>
      </section>
    `;
  }
}

function calculateK() {
  let F = parseFloat(document.getElementById("force").value);
  let x = parseFloat(document.getElementById("elongation").value);
  let k = F / x;
  document.getElementById("result").innerText = "Серпімділік коэффициенті k = " + k.toFixed(2) + " Н/м";

  // график салу
  let canvas = document.getElementById("graph");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,400,200);
  ctx.beginPath();
  ctx.moveTo(0,200);
  ctx.lineTo(400,0);
  ctx.strokeStyle = "blue";
  ctx.stroke();
}

function calculateE() {
  let sigma = parseFloat(document.getElementById("stress").value);
  let eps = parseFloat(document.getElementById("strain").value);
  let E = sigma / eps;
  document.getElementById("result").innerText = "Юнг модулі E = " + E.toFixed(2) + " Па";
}

function showQuestions() {
  let content = document.getElementById("content");
  content.innerHTML += `
    <section>
      <h3>Бақылау сұрақтары</h3>
      <textarea id="answers" rows="5" cols="40" placeholder="Жауаптарыңызды жазыңыз"></textarea><br>
      <button onclick="sendToTeacher()">Апайға жіберу</button>
    </section>
  `;
}

function sendToTeacher() {
  let ans = document.getElementById("answers").value;
  alert("Жауаптарыңыз апайға жіберілді:\n" + ans);
}
