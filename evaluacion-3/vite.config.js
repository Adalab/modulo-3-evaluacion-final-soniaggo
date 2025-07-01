// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base: "./modulo-3-evaluacion-final-soniaggo/",
//   plugins: [react()],
//   server: {
//     open: "/",
//     watch: {
//       usePolling: true
//     }
//   }
// });
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ¡CORRECCIÓN CLAVE AQUÍ!
  // Usamos la ruta base completa de tu repositorio.
  // Asegúrate de que este sea el nombre exacto de tu repositorio en GitHub.
  base: '/modulo-3-evaluacion-final-soniaggo/', // Ruta base para el despliegue

  build: {
    // Esto asegura que los nombres de los archivos de assets (CSS, JS, imágenes)
    // incluyan la ruta base correcta al ser generados.
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Si el asset es CSS, asegúrate de que su ruta sea correcta.
          if (assetInfo.name.endsWith('.css')) {
            return `assets/[name]-[hash].css`;
          }
          // Para otros assets (JS, imágenes), usa la ruta por defecto de assets.
          return `assets/[name]-[hash][extname]`;
        },
        entryFileNames: 'assets/[name]-[hash].js', // Para los archivos JS de entrada
      },
    },
  },
});