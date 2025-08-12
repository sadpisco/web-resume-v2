/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
        /** Ejemplo: función disponible en `Astro.locals.welcomeTitle()` */
        welcomeTitle: () => string;
        /** Ejemplo: podrías almacenar info de sesión si la resuelves en el middleware */
        user?: { id: string; name: string } | null;
    }
}


