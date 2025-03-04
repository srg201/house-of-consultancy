import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light", // Начальное значение
  setTheme: (theme: Theme) => {
    set(() => {
      // Сохраняем в localStorage
      localStorage.setItem("theme", theme);
      // Обновляем класс HTML
      document.documentElement.classList.toggle("dark", theme === "dark");
      return { theme };
    });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return { theme: newTheme };
    }),
}));
