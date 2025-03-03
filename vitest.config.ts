import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.ts",
        include: ['src/**/*.test.{ts,tsx}'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@reducers': path.resolve(__dirname, 'src/reducers'),
        },
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html', 'json-summary'],
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['src/helpers/tests']
        },
    },
    plugins: [react()],
});