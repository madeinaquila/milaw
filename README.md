# MI.LAW – Legal Network · Sito Web

Sito statico multi-pagina per **MI.LAW Legal Network**, studio legale a Milano.

---

## 📁 Struttura dei file

```
milaw/
├── index.html                  # Home page
├── chi-siamo.html              # Chi Siamo
├── aree.html                   # Aree di Attività
├── team.html                   # Il Team (flip cards)
├── team-simona-nicolosi.html   # Profilo Avv. Simona Nicolosi
├── contatti.html               # Contatti
├── style.css                   # Foglio di stile principale
├── accessibility.js            # Widget accessibilità (Legge Stanca / WCAG 2.1)
├── img/
│   └── logomilaw.png           # Logo MI.LAW
└── README.md                   # Questo file
```

---

## 🚀 Come pubblicare su GitHub Pages

Segui questi passaggi per mettere online il sito su `https://madeinaquila.github.io/milaw/` così i clienti possono vederlo e darti feedback.

### Passo 1 – Crea il repository su GitHub

1. Vai su [github.com](https://github.com) e accedi con il tuo account **madeinaquila**
2. Clicca il pulsante **"New"** (in alto a sinistra, accanto a "Repositories")
3. Compila così:
   - **Repository name:** `milaw`
   - **Description:** `MI.LAW Legal Network – sito web ufficiale`
   - **Visibility:** ✅ **Public** (obbligatorio per GitHub Pages gratuito)
   - **NON** spuntare "Add a README file" (lo abbiamo già)
4. Clicca **"Create repository"**

### Passo 2 – Carica i file (metodo drag & drop, senza terminale)

1. Nella pagina del repository appena creato, clicca **"uploading an existing file"**
2. Trascina **tutti i file** della cartella `milaw/` nella finestra di upload:
   - tutti i file `.html`
   - `style.css`
   - `accessibility.js`
   - `README.md`
   - la cartella `img/` con `logomilaw.png`

   > ⚠️ **Importante:** carica prima i file nella radice, poi crea la cartella `img` separatamente (vedi sotto).

3. Nel campo **"Commit changes"** scrivi: `Primo caricamento sito MI.LAW`
4. Clicca **"Commit changes"**

#### Come caricare la cartella `img/`

Dopo aver caricato i file principali:

1. Nel repository, clicca **"Add file" → "Upload files"**
2. Nel campo del percorso in alto (dove dice il nome del file), digita `img/logomilaw.png` — GitHub creerà automaticamente la cartella
3. Carica il file logo
4. Commit: `Aggiunta cartella img con logo`

### Passo 3 – Attiva GitHub Pages

1. Nel repository, clicca la scheda **"Settings"** (in alto a destra)
2. Nel menu a sinistra, clicca **"Pages"**
3. Nella sezione **"Branch"**, seleziona:
   - Branch: **`main`**
   - Cartella: **`/ (root)`**
4. Clicca **"Save"**
5. Attendi 1–2 minuti e ricarica la pagina

✅ GitHub mostrerà il messaggio:
> **"Your site is live at https://madeinaquila.github.io/milaw/"**

### Passo 4 – Condividi il link

Il link da inviare ai clienti per il feedback è:

```
https://madeinaquila.github.io/milaw/
```

---

## 🔄 Come aggiornare il sito dopo modifiche

Ogni volta che vuoi caricare una versione aggiornata:

1. Vai nel repository su GitHub
2. Clicca sul file da sostituire (es. `style.css`)
3. Clicca l'icona **✏️ matita** in alto a destra
4. Oppure clicca **"Add file" → "Upload files"** per sostituire più file insieme
5. GitHub Pages si aggiorna automaticamente entro pochi minuti

---

## 🌐 Tecnologie utilizzate

| Tecnologia | Uso |
|---|---|
| HTML5 semantico | Struttura delle pagine |
| CSS3 custom (nessun framework) | Layout, animazioni, flip cards |
| JavaScript vanilla | Interazioni, preloader, cookie banner |
| Google Fonts | Cormorant Garamond + DM Sans |
| Unsplash (immagine B&W Milano) | Foto homepage, licenza gratuita |
| CSS 3D transforms | Effetto flip card del team |
| IntersectionObserver API | Animazioni scroll fade-in |

---

## ♿ Accessibilità

Il sito include un widget di accessibilità conforme alla **Legge Stanca n.4/2004** e alle linee guida **WCAG 2.1 Livello AA**:

- Dimensione testo (4 livelli)
- Alto contrasto
- Modalità scura
- Font per dislessia
- Interlinea aumentata
- Evidenziazione link
- Focus sempre visibile
- Cursore grande

---

## 📞 Contatti

**MI.LAW Legal Network**
Corso Vercelli 11 – 20144 Milano
Tel. 02 – 40.70.19.55
[info@milawln.com](mailto:info@milawln.com)
