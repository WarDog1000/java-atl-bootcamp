let preguntaActual;

// Función para cargar el archivo trivia.json
async function fetchTriviaData() {
  try {
    const response = await fetch('../ejercicio-3/trivia.json');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al cargar el archivo trivia.json');
  }
}

// Función para generar una pregunta aleatoria de la trivia
function generateQuestion(triviaData) {
  const preguntaIndex = Math.floor(Math.random() * triviaData.preguntas.length);
  return triviaData.preguntas[preguntaIndex];
}

// Función para mostrar la pregunta en la página
function mostrarPregunta(pregunta) {
  const preguntaElement = document.getElementById('pregunta');
  preguntaElement.textContent = pregunta.pregunta;
}

// Función para procesar la respuesta enviada por el usuario
function procesarRespuesta(respuesta) {
  const respuestaCorrecta = preguntaActual.respuesta.toLowerCase().trim();
  const respuestaUsuario = respuesta.toLowerCase().trim();

  const esCorrecta = respuestaCorrecta === respuestaUsuario;

  const resultadoContainer = document.getElementById('resultado');
  resultadoContainer.textContent = esCorrecta ? '¡Respuesta correcta!' : 'Respuesta incorrecta';
  resultadoContainer.style.display = 'block';

  if (esCorrecta) {
    setTimeout(generarNuevaPregunta, 2000); // Pasar a la siguiente pregunta después de 2 segundos (ajusta el tiempo según tus necesidades)
  } else {
    const loseMessage = {pregunta: "LOSER!"}
    mostrarPregunta(loseMessage)
  }
}

// Función para enviar la respuesta del usuario
function enviarRespuesta() {
  const respuestaInput = document.getElementById('respuesta-input');
  const respuesta = respuestaInput.value;
  procesarRespuesta(respuesta);
}

// Función para generar una nueva pregunta
async function generarNuevaPregunta() {
  const triviaData = await fetchTriviaData();
  preguntaActual = generateQuestion(triviaData);
  mostrarPregunta(preguntaActual);
  document.getElementById('respuesta-input').value = '';
  document.getElementById('resultado').style.display = 'none';
}

// Inicializar la generación de la primera pregunta
generarNuevaPregunta();
