#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const program = new commander_1.Command();
program
    .name("ai-code-review")
    .description("Get AI code review on your staged git changes")
    .version("1.0.0")
    .action(async () => {
    try {
        await (0, index_1.reviewStagedChanges)();
    }
    catch (err) {
        console.error("Error:", err.message);
        process.exit(1);
    }
});
program.parse();
