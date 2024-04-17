# player-react

A backend like [player-backend](https://github.com/ariym/player-backend) is needed to provide content.

## Development

### Shortcut for `import` path in `/src`

`import from '@/dir_or_filename'` makes is easy to import universal components while inside deeplky nested directories

#### Editing the '@' path

Change ```'@'``` path in ```vite.config.ts```
Also, I think it's in a config file maybe ```components.json```. Also find + replace all instances of '@/' to update file imports.

### Downloading new UI components

1. Find a component on [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)
1. `npx shadcn-ui@latest add component-name`

### Environment Variables

1. Inside of project root run:
    - ```cp env.template .env.development.local```
    - ```cp env.template .env.production.local```
1. Prefix every variable with ```VITE_``` (```VITE_SOMETHING=xxx```)
1. Import with ```import.meta.env.VITE_SOMETHING```

[Vite Documentation](https://vitejs.dev/guide/env-and-mode.html#env-files) on env files.

#### Enviroment MODE

Instead of ```NODE_ENV```, use ```import.meta.env.MODE``` by passing ```vite --mode MODE``` at startup.

**Note to *AVOID*** passing ```NODE_ENV=``` at startup which can get confusing as [documented here](https://vitejs.dev/guide/env-and-mode#node-env-and-modes).

---

This project was originally cloned from [ariym/base-vite-react](https://github.com/ariym/base-vite-react).
