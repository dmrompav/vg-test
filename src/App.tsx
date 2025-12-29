import { AppThemeProvider } from "./app/providers/AppThemeProvider.tsx";
import { KanbanPage } from "./pages/kanban/KanbanPage.tsx";

export const App = () => {
  return (
    <AppThemeProvider>
      <KanbanPage />
    </AppThemeProvider>
  );
};
