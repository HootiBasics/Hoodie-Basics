# Hooti Basics - Streetwear E-commerce

## Overview

Hooti Basics is an immersive e-commerce website for an exclusive hoodie/streetwear brand. The site features a dark, brutalist aesthetic with parallax scrolling effects, product showcases, and WhatsApp-based ordering. Built as a full-stack TypeScript application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom dark theme configuration
- **UI Components**: Shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for parallax effects and scroll animations
- **Typography**: Montserrat (display) and Poppins (body) fonts

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **Development**: tsx for TypeScript execution
- **API Pattern**: RESTful endpoints defined in shared/routes.ts with Zod validation

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in shared/schema.ts
- **Migrations**: Drizzle Kit (db:push command)
- **Session Store**: connect-pg-simple for session management

### Key Design Patterns
- **Shared Code**: Types, schemas, and API contracts in /shared directory accessible by both client and server
- **Path Aliases**: @/ for client/src, @shared/ for shared code
- **Static Configuration**: Product catalog stored in shared/config.ts (static data, not database-driven)
- **Form Validation**: Zod schemas with drizzle-zod integration, react-hook-form on frontend

### Build Configuration
- Frontend builds to dist/public via Vite
- Server bundles to dist/index.cjs via esbuild
- Development uses Vite middleware for HMR

## External Dependencies

### Database
- **PostgreSQL**: Primary database via DATABASE_URL environment variable
- **Drizzle ORM**: Database queries and schema management

### Third-Party Services
- **WhatsApp Business**: Order flow via wa.me deep links (no API integration, just URL generation)
- **Google Fonts**: Montserrat and Poppins font families

### UI Libraries
- **Radix UI**: Full suite of accessible UI primitives
- **Framer Motion**: Animation library for parallax and transitions
- **Embla Carousel**: Touch-friendly product image carousels
- **Lucide React**: Icon library

### Development Tools
- **Replit Plugins**: vite-plugin-runtime-error-modal, cartographer, dev-banner for Replit environment