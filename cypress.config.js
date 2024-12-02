import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuración de Allure
      allureCypress(on, config, {
        resultsDir: "allure-results", // Directorio donde se guardarán los resultados
      });
      return config;
    },
    env: {
      allure: true, // Habilita Allure si es necesario
    },
    video: false, // Desactiva grabación de video para ahorrar espacio (opcional)
  },
});
