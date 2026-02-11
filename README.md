# Bun Hono Drizzle BetterAuth

A modern, full-stack web application starter template combining cutting-edge technologies for rapid development with type safety and authentication built-in.

## 🚀 Tech Stack

- **Runtime:** [Bun](https://bun.sh) - Fast JavaScript/TypeScript runtime
- **Web Framework:** [Hono](https://hono.dev) - Lightweight, ultrafast web framework
- **ORM:** [Drizzle ORM](https://orm.drizzle.team) - TypeScript-first ORM with zero dependencies
- **Authentication:** [BetterAuth](https://www.better-auth.com) - Comprehensive, flexible auth framework
- **Database:** PostgreSQL
- **Validation:** [Zod](https://zod.dev) - TypeScript-first schema validation
- **Code Quality:** [Biome](https://biomejs.dev) - Fast formatter and linter
- **Database Seeding:** [Drizzle Seed](https://orm.drizzle.team/docs/seed)

## ✨ Features

- ✅ Type-safe development with TypeScript
- ✅ Built-in authentication system with BetterAuth
- ✅ PostgreSQL database with Drizzle ORM
- ✅ API validation with Zod schemas
- ✅ Containerized PostgreSQL with Docker Compose
- ✅ Comprehensive code linting and formatting with Biome
- ✅ Database migrations and seeding capabilities
- ✅ Hot-reload development environment
- ✅ Path aliases for cleaner imports

## 📋 Prerequisites

- [Bun](https://bun.sh) (Latest version)
- Docker & Docker Compose (for PostgreSQL)
- Node.js (if using other package managers)

## 🔧 Setup

### 1. Clone the Repository

```bash
git clone https://github.com/m3h3d1ha2an/bun-hono-drizzle-betterauth.git
cd bun-hono-drizzle-betterauth
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/testDB
```

Reference: See `.env.example` for all available configuration options.

### 4. Start PostgreSQL

```bash
bun run db:up
```

This starts the PostgreSQL container using Docker Compose.

### 5. Set Up Database

Generate and apply migrations:

```bash
bun run db:gen    # Generate migrations
bun run db:push   # Apply migrations to database
```

### 6. Generate Auth Schema

Sync BetterAuth configuration to generate auth schema:

```bash
bun run auth:sync
```

### 7. Start Development Server

```bash
bun run dev
```

The server will start at `http://localhost:3000` with hot-reload enabled.

## 📚 Available Scripts

### Development

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with hot-reload |
| `bun run lint` | Lint code with Biome |
| `bun run fmt` | Format code with Biome |
| `bun run fix` | Fix linting issues automatically |
| `bun run tsc` | Type-check without emitting |

### Database

| Command | Description |
|---------|-------------|
| `bun run db:up` | Start PostgreSQL container |
| `bun run db:down` | Stop PostgreSQL container |
| `bun run db:logs` | View database logs |
| `bun run db:gen` | Generate new migrations |
| `bun run db:push` | Apply migrations to database |
| `bun run db:mig` | Run pending migrations |

### Authentication

| Command | Description |
|---------|-------------|
| `bun run auth:sync` | Generate auth schema from BetterAuth config |
| `bun run auth:secret` | Generate a new authentication secret |

## 📁 Project Structure

```
├── src/
│   ├── index.ts              # Application entry point
│   ├── auth/                 # Authentication configuration
│   │   └── index.ts          # BetterAuth setup
│   ├── db/
│   │   ├── schema/           # Database schemas
│   │   │   ├── index.ts      # Main schema exports
│   │   │   └── auth.ts       # Auto-generated auth schema
│   │   └── migrations/       # Database migrations (generated)
│   └── env.ts                # Environment variables
├── docker-compose.yaml       # PostgreSQL container setup
├── drizzle.config.ts         # Drizzle ORM configuration
├── tsconfig.json             # TypeScript configuration
├── biome.json                # Code formatter/linter config
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🔐 Authentication Setup

BetterAuth is pre-configured for email/password authentication. To customize:

1. Edit `src/auth/index.ts` to configure plugins and providers
2. Run `bun run auth:sync` to regenerate the schema
3. Run `bun run db:push` to apply schema changes

## 🗄️ Database Management

### Creating a New Migration

After modifying schema files in `src/db/schema/`:

```bash
bun run db:gen
```

This generates migration files in `src/db/migrations/`.

### Applying Migrations

```bash
bun run db:push
```

### Viewing Logs

```bash
bun run db:logs
```

### Resetting Database

```bash
bun run db:down
bun run db:up
bun run db:push
```

## 🎨 Code Quality

This project uses **Biome** for lightning-fast code formatting and linting.

### Configuration

- **Formatter:** Tab indentation with double quotes
- **Linter:** Recommended rules enabled
- **VCS Integration:** Git-aware with `.gitignore` support
- **Import Organization:** Automatic import sorting

### Running Tools

```bash
bun run lint     # Check for issues
bun run fmt      # Format code
bun run fix      # Fix all issues
bun run tsc      # TypeScript type checking
```

## 🔑 Type Safety

TypeScript is configured with:
- Strict mode enabled
- JSX support via Hono
- Path aliases (`@/*` → `./src/*`)
- Full type checking before deployment

## 📦 Dependencies

### Core Dependencies

- **hono** (v4.11.8) - Web framework
- **drizzle-orm** (v0.45.1) - ORM
- **better-auth** (v1.4.18) - Authentication
- **zod** (v4.3.6) - Schema validation
- **drizzle-seed** (v0.3.1) - Database seeding

### Development Dependencies

- **@biomejs/biome** (v2.3.14) - Formatter & linter
- **drizzle-kit** (v0.31.8) - ORM CLI
- **TypeScript** - Type safety

## 🚀 Deployment

This project is ready to deploy to any Bun-compatible hosting:

- [Railway](https://railway.app)
- [Render](https://render.com)
- [Fly.io](https://fly.io)
- [Heroku](https://heroku.com)
- Self-hosted VPS

### Pre-deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Code passes linting (`bun run fix`)
- [ ] TypeScript compiles without errors (`bun run tsc`)
- [ ] Tests pass (if applicable)

## 🐛 Troubleshooting

### PostgreSQL Connection Issues

**Error:** `connection refused on localhost:5432`

**Solution:**
```bash
bun run db:up
# Wait a few seconds for container startup
bun run db:push
```

### Migration Conflicts

**Error:** `Migration not found`

**Solution:**
```bash
bun run db:gen
bun run db:push
```

### Port Already in Use

**Error:** `EADDRINUSE: address already in use :::3000`

**Solution:**
```bash
# Change the port in src/index.ts or use environment variable
PORT=3001 bun run dev
```

### BetterAuth Schema Out of Sync

**Error:** Schema mismatch errors

**Solution:**
```bash
bun run auth:sync
bun run db:gen
bun run db:push
```

## 📖 Documentation Links

- [Hono Documentation](https://hono.dev)
- [Drizzle ORM Docs](https://orm.drizzle.team)
- [BetterAuth Docs](https://www.better-auth.com)
- [Zod Documentation](https://zod.dev)
- [Biome Documentation](https://biomejs.dev)
- [Bun Documentation](https://bun.sh/docs)

## 💡 Tips & Best Practices

1. **Always generate migrations after schema changes** - Run `bun run db:gen` whenever you modify database schemas
2. **Keep auth config DRY** - Centralize authentication logic in `src/auth/index.ts`
3. **Validate early** - Use Zod schemas for all API inputs
4. **Type everything** - Leverage TypeScript's strict mode for safety
5. **Test migrations locally** - Always test DB changes on the dev environment first

## 🤝 Contributing

Contributions are welcome! Please ensure code passes linting before submitting:

```bash
bun run fix
bun run tsc
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

[m3h3d1ha2an](https://github.com/m3h3d1ha2an)

## 🙏 Acknowledgments

Built with the amazing open-source community. Special thanks to:
- The Bun team for an incredible runtime
- Hono for a lightweight framework
- Drizzle for a modern ORM
- BetterAuth for flexible authentication
```

Perfect! Now you have the entire README in one copyable block. Just click the copy icon in the top-right corner of the code block and paste it directly into your repository's `README.md` file.
