# weather-forecast

React 19 + TypeScript 6 + Vite 8 app using Chakra UI v3, TanStack Query v5, Zustand, and next-themes for dark mode.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | `tsc -b && vite build` (typecheck then bundle) |
| `npm run lint` | `eslint .` (flat config, v10) |
| `npm run preview` | Vite preview of built output |

No test framework, no CI, no pre-commit hooks.

## Architecture

- **Entry**: `src/main.tsx` → mounts `<Provider>` (Chakra + next-themes) → `<QueryClientProvider>` → `<App />`
- **Store**: `src/store.ts` — Zustand store, holds current `city` string (set by search input)
- **Data**: `src/services/apiClients.ts` / `forecastApi.ts` — Axios clients → OpenWeatherMap API (baseURL differs per service)
- **Hooks**: `src/hooks/useWeather.ts` / `useForcast.ts` — TanStack Query wrappers, keyed by `["weather"/"forecast", city]`, enabled only when `city` is truthy
- **Components** (10 in `src/components/`): NavBar (search + color toggle), CurrentWeather, Forecast, and UI primitives under `ui/`
- **Theme**: `src/theme.ts` — Chakra v3 `createSystem` with custom blue palette + semantic tokens (`pageBg`, `textColor`); `ui/provider.tsx` wires `system` + `next-themes`
- **Icons**: `react-icons` (LuMoon, LuSun, TbTemperatureSun, MdOutlineAir, BsSearch)

## TypeScript quirks

- `verbatimModuleSyntax: true` — use `import type` for type-only imports
- `erasableSyntaxOnly: true` — no enums, no namespaces, no parameter properties
- `noUnusedLocals` + `noUnusedParameters` — both on
- Path alias `@/*` → `./src/*`

## Data flow

1. User types city in `SearchInput` → Zustand `setcity()`
2. `useWeather` / `useForecast` React Query hooks fire (enabled: `!!city`)
3. Axios GET to `api.openweathermap.org/data/2.5/weather` or `.../forecast` with `?q={city}&units=metric&appid=API_KEY`
4. Response rendered by `Weather` / `WeatherDetails` / `ForeCastBox`

## Notes

- API key is hardcoded in `src/services/apiClients.ts:6` and `src/services/forecastApi.ts:6` (already committed)
- `globalIgnores(['dist'])` in ESLint config
- Component naming is inconsistent: `Forcast` / `Forecast` / `ForeCast` — keep existing convention in each file
- Night icons from OpenWeatherMap are replaced with day icons (`n` → `d` suffix)
