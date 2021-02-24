"use strict";
// Update with your config settings.
module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "blog",
            user: "postgres",
            password: "Password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            loadExtensions: ['.ts'],
            extension: 'ts',
        },
        seeds: {
            loadExtensions: ['.ts'],
        },
    },
    staging: {
        client: "postgresql",
        connection: {
            database: "blog",
            user: "postgres",
            password: "Password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            loadExtensions: ['.ts'],
            extension: 'ts',
        },
        seeds: {
            loadExtensions: ['.ts'],
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "blog",
            user: "postgres",
            password: "Password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            loadExtensions: ['.ts'],
            extension: 'ts',
        },
        seeds: {
            loadExtensions: ['.ts'],
        },
    }
};
//# sourceMappingURL=knexfile.js.map