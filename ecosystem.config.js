module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        // First application
        {
            name: "PF",
            script: "./bin/www",
            // instances: 0,
            // "exec_mode": "cluster",
            env: {
                COMMON_VARIABLE: "true",
            },
            env_development: {
                NODE_ENV: "development"
            },
            env_staging: {
                NODE_ENV: "staging"
            },
            env_production: {
                NODE_ENV: "production"
            },
            watch: true,
            ignore_watch: ["node_modules", "public", "views", "log", ".git", ".gitignore",  "README.md"],
            merge_logs: true,
            error_file: "log/err.log",
            out_file: "log/out.log"
        }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: "ubuntu",
            host: "0.0.0.0",
            key: "/home/company-name/Documents/keys/prod/express-angular.pem",
            ref: "origin/master",
            repo: "https://github.com/gokul-t/express-angular.git",
            path: '/home/ubuntu/express-angular',
            "post-deploy": "npm install && sudo pm2 startOrRestart /home/ubuntu/express-angular/ecosystem.config.js --log --env production",
            env: {
                NODE_ENV: "production"
            }
        },
        staging: {
            user: "ubuntu",
            host: "0.0.0.0",
            key: "/home/company-name/Documents/keys/staging/express-angular.pem",
            ref: "origin/develop",
            repo: "https://github.com/gokul-t/express-angular.git",
            path: '/home/ubuntu/express-angular',
            "post-deploy": "npm install && sudo pm2 startOrRestart /home/ubuntu/express-angular/ecosystem.config.js --log  --env staging",
            env: {
                NODE_ENV: "staging"
            }
        },
        testing: {
            user: "ubuntu",
            host: "0.0.0.0",
            key: "/home/company-name/Documents/keys/testing/express-angular.pem",
            ref: "origin/develop",
            repo: "https://github.com/gokul-t/express-angular.git",
            path: '/home/ubuntu/express-angular',
            "post-deploy": "npm install && sudo pm2 startOrRestart /home/ubuntu/express-angular/ecosystem.config.js --log",
            env: {
                NODE_ENV: "testing"
            }
        },
        dev: {
            user: "node",
            host: "0.0.0.0",
            ref: "origin/master",
            repo: "git@github.com:repo.git",
            path: "/var/www/development",
            "post-deploy": "npm install && pm2 startOrRestart ecosystem.json --env dev",
            env: {
                NODE_ENV: "development"
            }
        }
    }
}
