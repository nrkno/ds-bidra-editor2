# Bidra Editor version 2

Monorepo for Bidra Editor. Bruker `pnpm`.

## Komme i gang

### Oppsett for å kjøre lokalt mot stage

Opprett filen `api/.env` som må brukernavn/passord til Mongodb Atlas

### Installere avhengigheter for alle pakker:

```sh
pnpm -r i
```

### Starte API og UI

```sh
pnpm run dev
```

Grensesnittet kan nå nås på http://localhost:5173/

### Starte kun API i dev-mode

```sh
pnpm -F "*api" run dev
```

### Starte kun UI i dev mode mot lokalt API

```sh
pnpm -F "*ui" run dev
```
