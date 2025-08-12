import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
    const { url, generator, preferredLocale } = context;
    console.info(`Enviroment: ${url.href}`);
    console.info(`Generator: ${generator}`);

    // Obtain the response from the next middleware
    const response = await next();

    // Adding custom header to all responses
    response.headers.set('x-powered-by', 'astro-middleware');
    return response;
});


