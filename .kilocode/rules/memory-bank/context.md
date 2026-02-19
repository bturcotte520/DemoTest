# Active Context: Next.js Starter Template

## Current State

**Template Status**: 🚀 Project Dashboard App with Light/Dark Mode

The template has been expanded into a modern project dashboard application with a sidebar navigation, task board with status columns (To Do, In Progress, Done), task cards with priority/tags/assignees, a stats bar showing progress, drag-and-drop to move tasks between columns, and **light mode/dark mode toggle** with localStorage persistence.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] Project dashboard with sidebar navigation
- [x] Task board with 3 status columns (To Do, In Progress, Done)
- [x] Task cards with priority badges, tags, and assignee avatars
- [x] Stats bar with progress ring and task counts
- [x] Search bar and Add Task button in header
- [x] Functional search bar — filters tasks by title or assignee in real-time
- [x] Dark theme with violet accent color
- [x] Custom scrollbar styling
- [x] Drag-and-drop task movement between columns (HTML5 DnD API)
- [x] Live stats updates when tasks are moved
- [x] Visual drop zone feedback (ring highlight, pulse animation)
- [x] DashboardContent client component for interactive state
- [x] Light mode/dark mode toggle with localStorage persistence
- [x] ThemeProvider client component for theme context
- [x] /credits page with QR code linking to https://kilo.codes/devWeek (react-qr-code)
- [x] Fixed ThemeProvider lint error — replaced setState-in-effect with lazy useState initializer
- [x] CSS custom properties for theming (--bg-primary, --bg-secondary, --text-primary, --text-secondary, --border-color, --accent)
- [x] Toggle button with sun/moon icons in header

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Dashboard page with sidebar + DashboardContent | ✅ Ready |
| `src/app/layout.tsx` | Root layout with Taskflow branding | ✅ Ready |
| `src/app/globals.css` | Global styles + custom scrollbar + theme variables | ✅ Ready |
| `src/lib/types.ts` | TypeScript types (Task, Project, etc.) | ✅ Ready |
| `src/lib/data.ts` | Sample project data and nav items | ✅ Ready |
| `src/components/layout/Sidebar.tsx` | Sidebar with nav, logo, user profile | ✅ Ready |
| `src/components/ui/TaskCard.tsx` | Draggable task card (client component) | ✅ Ready |
| `src/components/ui/TaskColumn.tsx` | Drop-target status column (client component) | ✅ Ready |
| `src/components/sections/TaskBoard.tsx` | Board layout with state management (client) | ✅ Ready |
| `src/components/sections/DashboardContent.tsx` | Main content with live stats (client) | ✅ Ready |
| `src/components/providers/ThemeProvider.tsx` | Theme context provider (client component) | ✅ Ready |
| `src/app/credits/page.tsx` | Credits page with QR code (react-qr-code) | ✅ Ready |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

The dashboard has drag-and-drop and theme toggle working. Potential next steps:

1. Add task CRUD (add, edit, delete tasks)
2. Add database persistence (use add-database recipe)
3. Add more pages (Projects list, Calendar, Team, Settings)
4. Add responsive/mobile layout
5. Add task detail modal

## Quick Start Guide

### To add a database:

Follow `.kilocode/recipes/add-database.md` to persist tasks with Drizzle + SQLite.

### To add new pages:

Create files in `src/app/[route]/page.tsx` and update sidebar navigation.

## Available Recipes

| Recipe | File | Use Case |
|--------|------|----------|
| Add Database | `.kilocode/recipes/add-database.md` | Data persistence with Drizzle + SQLite |

## Pending Improvements

- [ ] Task CRUD operations (add, edit, delete)
- [ ] Database persistence
- [ ] Responsive/mobile layout
- [ ] Task detail modal/drawer
- [ ] More pages (Projects, Calendar, Team, Settings)
- [ ] Add more recipes (auth, email, etc.)
- [ ] Add testing setup recipe

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-02-19 | Built project dashboard with sidebar, task board, status columns, task cards, stats bar |
| 2026-02-19 | Added drag-and-drop between columns with live stats updates and visual feedback |
| 2026-02-19 | Added light/dark mode toggle with ThemeProvider, localStorage persistence, and CSS custom properties |
| 2026-02-19 | Wired up search bar to filter tasks by name or assignee using useMemo |
| 2026-02-19 | Added /credits page with react-qr-code QR code linking to https://kilo.codes/devWeek; fixed ThemeProvider lint error |
