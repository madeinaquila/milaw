/* ============================================================
   MI.LAW – Accessibility Widget
   Conforme Legge Stanca n.4/2004 · WCAG 2.1 AA
   ============================================================ */
(function () {

  /* ── 1. Inietta HTML del pannello ── */
  const html = `
  <button id="a11y-trigger" aria-label="Apri impostazioni accessibilità" aria-expanded="false" aria-controls="a11y-panel">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
         stroke="#7fc6bf" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="4" r="1.5"/>
      <path d="M9 9h6M12 9v10M9 19l-2-4M15 19l2-4"/>
    </svg>
  </button>

  <div id="a11y-panel" role="dialog" aria-modal="false" aria-label="Impostazioni di accessibilità">

    <div class="a11y-header">
      <h3>Accessibilità</h3>
      <button class="a11y-close" id="a11y-close" aria-label="Chiudi pannello">✕</button>
    </div>

    <!-- DIMENSIONE TESTO -->
    <span class="a11y-section-label">Dimensione testo</span>
    <div class="a11y-btn-group">
      <button class="a11y-btn" data-action="font" data-value="small"  aria-label="Testo piccolo">A−</button>
      <button class="a11y-btn active" data-action="font" data-value="normal" aria-label="Testo normale">A</button>
      <button class="a11y-btn" data-action="font" data-value="large"  aria-label="Testo grande">A+</button>
      <button class="a11y-btn" data-action="font" data-value="xlarge" aria-label="Testo molto grande">A++</button>
    </div>

    <!-- COLORI -->
    <span class="a11y-section-label">Colori e contrasto</span>
    <div class="a11y-toggle-row">
      <span class="a11y-toggle-label">Alto contrasto</span>
      <label class="a11y-switch">
        <input type="checkbox" id="tog-contrast" aria-label="Attiva alto contrasto">
        <span class="slider"></span>
      </label>
    </div>
    <div class="a11y-toggle-row">
      <span class="a11y-toggle-label">Sfondo scuro</span>
      <label class="a11y-switch">
        <input type="checkbox" id="tog-dark" aria-label="Attiva sfondo scuro">
        <span class="slider"></span>
      </label>
    </div>

    <!-- LETTURA -->
    <span class="a11y-section-label">Leggibilità</span>
    <div class="a11y-toggle-row">
      <span class="a11y-toggle-label">Font per dislessia</span>
      <label class="a11y-switch">
        <input type="checkbox" id="tog-dyslexia" aria-label="Attiva font per dislessia">
        <span class="slider"></span>
      </label>
    </div>
    <div class="a11y-toggle-row">
      <span class="a11y-toggle-label">Interlinea aumentata</span>
      <label class="a11y-switch">
        <input type="checkbox" id="tog-spacing" aria-label="Attiva interlinea aumentata">
        <span class="slider"></span>
      </label>
    </div>
    <div class="a11y-toggle-row">
      <span class="a11y-toggle-label">Evidenzia link</span>
      <label class="a11y-switch">
        <input type="checkbox" id="tog-links" aria-label="Evidenzia tutti i link">
        <span class="slider"></span>
      </label>
    </div>

    <!-- NAVIGAZIONE -->
    <span class="a11y-section-label">Navigazione</span>
    <div class="a11y-toggle-row">
      <span class="a11y-toggle-label">Focus sempre visibile</span>
      <label class="a11y-switch">
        <input type="checkbox" id="tog-focus" aria-label="Mostra sempre indicatore focus">
        <span class="slider"></span>
      </label>
    </div>
    <div class="a11y-toggle-row">
      <span class="a11y-toggle-label">Cursore grande</span>
      <label class="a11y-switch">
        <input type="checkbox" id="tog-cursor" aria-label="Attiva cursore grande">
        <span class="slider"></span>
      </label>
    </div>

    <button class="a11y-reset" id="a11y-reset" aria-label="Ripristina impostazioni predefinite">
      ↺ Ripristina impostazioni
    </button>

    <p style="font-size:0.62rem; color:#aaa; margin-top:1rem; max-width:none; line-height:1.6;">
      Conforme alla Legge Stanca n.4/2004 e alle linee guida WCAG 2.1 Livello AA.
    </p>
  </div>`;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  /* ── 2. Riferimenti ── */
  const trigger  = document.getElementById('a11y-trigger');
  const panel    = document.getElementById('a11y-panel');
  const closeBtn = document.getElementById('a11y-close');
  const resetBtn = document.getElementById('a11y-reset');
  const root     = document.documentElement;

  /* ── 3. Stato (persistente via localStorage) ── */
  const STORE_KEY = 'milaw_a11y';
  const defaults = {
    font: 'normal', contrast: false, dark: false,
    dyslexia: false, spacing: false, links: false,
    focus: false, bigcursor: false
  };

  function load() {
    try { return Object.assign({}, defaults, JSON.parse(localStorage.getItem(STORE_KEY))); }
    catch { return Object.assign({}, defaults); }
  }
  function save(state) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
  }

  let state = load();

  /* ── 4. Applica stato ── */
  const fontSizes = { small: '14px', normal: '16px', large: '19px', xlarge: '22px' };

  function apply() {
    // Font size
    document.body.style.fontSize = fontSizes[state.font] || '16px';

    // Classes on <html>
    root.classList.toggle('a11y-contrast',  state.contrast);
    root.classList.toggle('a11y-dark',       state.dark);
    root.classList.toggle('a11y-dyslexia',   state.dyslexia);
    root.classList.toggle('a11y-spacing',    state.spacing);
    root.classList.toggle('a11y-links',      state.links);
    root.classList.toggle('a11y-focus',      state.focus);
    root.classList.toggle('a11y-bigcursor',  state.bigcursor);

    // Font buttons active state
    document.querySelectorAll('[data-action="font"]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.value === state.font);
    });

    // Toggle checkboxes
    const map = {
      'tog-contrast': 'contrast', 'tog-dark': 'dark',
      'tog-dyslexia': 'dyslexia', 'tog-spacing': 'spacing',
      'tog-links': 'links',       'tog-focus': 'focus',
      'tog-cursor': 'bigcursor'
    };
    Object.entries(map).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) el.checked = state[key];
    });

    save(state);
  }

  /* ── 5. Apri / Chiudi ── */
  function openPanel() {
    panel.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function closePanel() {
    panel.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  }

  trigger.addEventListener('click', () => {
    panel.classList.contains('open') ? closePanel() : openPanel();
  });
  closeBtn.addEventListener('click', closePanel);

  // Chiudi con ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });

  // Chiudi clic fuori
  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && e.target !== trigger) {
      if (panel.classList.contains('open')) closePanel();
    }
  });

  /* ── 6. Font size buttons ── */
  document.querySelectorAll('[data-action="font"]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.font = btn.dataset.value;
      apply();
    });
  });

  /* ── 7. Toggle switches ── */
  const toggleMap = {
    'tog-contrast': 'contrast', 'tog-dark': 'dark',
    'tog-dyslexia': 'dyslexia', 'tog-spacing': 'spacing',
    'tog-links': 'links',       'tog-focus': 'focus',
    'tog-cursor': 'bigcursor'
  };
  Object.entries(toggleMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => { state[key] = el.checked; apply(); });
  });

  /* ── 8. Reset ── */
  resetBtn.addEventListener('click', () => {
    state = Object.assign({}, defaults);
    document.body.style.fontSize = '';
    apply();
  });

  /* ── 9. Applica al caricamento ── */
  apply();

})();
