import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
}
