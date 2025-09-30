// script.js

/**
 * Función pura que devuelve el string invertido.
 * Preserva espacios y soporta Unicode básico (e.g., tildes).
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  return Array.from(str).reverse().join('');
}

(function init() {
  const input = document.getElementById('textInput');
  const reverseBtn = document.getElementById('reverseBtn');
  const copyBtn = document.getElementById('copyBtn');
  const result = document.getElementById('result');

  function render() {
    const value = input.value;
    result.textContent = value === '' ? 'Nada que invertir' : reverseString(value);
  }

  reverseBtn.addEventListener('click', render);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') render();
  });

  copyBtn.addEventListener('click', async () => {
    const text = result.textContent || '';
    if (!text || text === 'Nada que invertir') return;

    try {
      await navigator.clipboard.writeText(text);
      const original = copyBtn.firstElementChild.textContent;
      copyBtn.firstElementChild.textContent = 'Copied!';
      setTimeout(() => (copyBtn.firstElementChild.textContent = original), 1200);
    } catch {
      // Silencioso: sin alert. Como alternativa, podríamos reflejar un mensaje en #result.
    }
  });
})();
