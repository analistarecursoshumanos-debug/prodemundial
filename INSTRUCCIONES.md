# 🏆 Prode Mundial 2026 — Guía de instalación

Esta carpeta tiene todo lo necesario para tener tu **prode online y gratis**.

## ¿Qué incluye?

- **index.html** — La página web del prode (login, fixture, predicciones, tabla)
- **fixture.js** — Los 104 partidos del Mundial 2026
- **firebase-config.js** — Configuración (la completás vos en 5 minutos)
- **firestore-rules.txt** — Reglas de seguridad para pegar en Firebase

---

## Paso 1 — Crear cuenta en Firebase (gratis)

Firebase es de Google y permite manejar usuarios + base de datos sin programar nada. Es 100% gratis para un prode con cientos de participantes.

1. Andá a **https://console.firebase.google.com**
2. Iniciá sesión con tu cuenta de Google
3. Click en **"Crear un proyecto"** (o "Add project")
4. Ponele un nombre, ej: `prode-mundial-2026`
5. Podés desactivar Google Analytics, no hace falta
6. Click en **Crear proyecto**

---

## Paso 2 — Activar autenticación con email

1. En el menú izquierdo: **Build → Authentication**
2. Click en **"Get started"**
3. Pestaña **"Sign-in method"** → click en **"Email/Password"**
4. Activá el switch (el primero, no hace falta el de magic link)
5. Click en **"Save"**

---

## Paso 3 — Activar la base de datos (Firestore)

1. En el menú izquierdo: **Build → Firestore Database**
2. Click en **"Create database"**
3. Elegí **"Start in production mode"**
4. Elegí una ubicación cercana (`southamerica-east1` para Argentina)
5. Click en **"Enable"**

### Pegar las reglas de seguridad

1. Una vez creada, andá a la pestaña **"Rules"**
2. Borrá todo lo que hay
3. Abrí el archivo `firestore-rules.txt` y copiá todo
4. Pegá en Firebase y click en **"Publish"**

---

## Paso 4 — Conectar la app con Firebase

1. En el menú izquierdo arriba, click en el **engranaje ⚙️ → Project settings**
2. Bajá hasta **"Your apps"** y click en el ícono **`</>`** (Web)
3. Ponele un apodo, ej: `prode-web` → **Register app**
4. Te va a mostrar un código así:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "prode-mundial-2026.firebaseapp.com",
  projectId: "prode-mundial-2026",
  ...
};
```

5. **Copiá ESE objeto** y pegalo en `firebase-config.js` reemplazando los valores que están ahí.

---

## Paso 5 — Subir a GitHub Pages (gratis)

1. Andá a **https://github.com** y creá una cuenta (si no tenés)
2. Click en **"New repository"** (arriba a la derecha, ícono +)
3. Ponele un nombre, ej: `prode-mundial`
4. Marcá **"Public"**
5. Click en **"Create repository"**

### Subir los archivos

**Opción fácil (sin Git):**

1. En tu nuevo repositorio, click en **"uploading an existing file"**
2. Arrastrá los 3 archivos: `index.html`, `fixture.js`, `firebase-config.js` (¡el que ya editaste con tus datos!)
3. Click en **"Commit changes"**

### Activar GitHub Pages

1. En el repositorio: **Settings** (arriba a la derecha)
2. Menú izquierdo: **Pages**
3. En **"Source"** elegí **"Deploy from a branch"**
4. Branch: **main** / folder: **/ (root)** → **Save**
5. Esperá 1-2 minutos, te va a aparecer una URL así:
   `https://tuusuario.github.io/prode-mundial/`

¡Esa es la URL que compartís con los participantes!

---

## Paso 6 — Personalizar antes del Mundial

### Cargar los equipos reales (cuando se haga el sorteo)

Editá `fixture.js` y reemplazá `"Equipo A2"`, `"Equipo B3"`, etc. por los nombres reales de los equipos según el sorteo de FIFA.

Subí el archivo modificado a GitHub (arrastrar y soltar reemplaza).

### Configurar quién es el admin (el que carga los resultados oficiales)

En `index.html`, buscá esta línea (cerca del principio del `<script>`):

```js
const ADMIN_EMAIL = "analistarecursoshumanos@elmundodeljuguete.com.ar";
```

Ya está puesto tu email. Esa cuenta es la única que va a ver el botón **"Admin"** para cargar los resultados oficiales.

⚠️ **IMPORTANTE**: también tenés que actualizar tu email en `firestore-rules.txt` (línea con `request.auth.token.email`) y volver a pegarlo en Firebase Console → Rules.

---

## ¿Cómo funciona?

1. **Los participantes** entran a la URL, se registran con email + contraseña
2. Cargan sus pronósticos (resultado de cada partido) y guardan
3. Los pronósticos se **bloquean cuando empieza el partido** (no se pueden modificar)
4. **Vos (admin)**, después de cada partido, entrás a la pestaña "Admin" y cargás el resultado oficial
5. La **tabla de posiciones se actualiza sola** con el cálculo de puntos:
   - 3 pts si acertaron el marcador exacto
   - 1 pt si acertaron el ganador o empate
   - 0 pts si erraron

---

## Costos

- **Firebase**: gratis hasta 50.000 lecturas/día y 1 GB de base de datos. Un prode con 100 participantes está MUY por debajo.
- **GitHub Pages**: 100% gratis sin límite.

---

## ¿Problemas?

- **"No me deja crear cuenta"** → Activaste Email/Password en Authentication?
- **"Permission denied"** → Pegaste las reglas en Firestore?
- **No veo el botón Admin** → ¿Tu email coincide exacto con `ADMIN_EMAIL`?
- **No se ven los partidos** → Revisá la consola del navegador (F12) para ver el error específico.

¡Éxitos con el prode! 🏆
