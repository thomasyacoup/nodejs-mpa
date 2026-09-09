# Simple MPA APP

Basic Node.js MPA using `http` and `fs/promises`, no framework.

## Routes

- `/` → `views/home.html`
- `/contact` → `views/contact.html`
- anything else → `views/404.html`

## Run

```bash
node server.js
```

Then open `http://localhost:8080`

## Structure

```
project/
├── server.js
└── views/
    ├── home.html
    ├── contact.html
    └── 404.html
```