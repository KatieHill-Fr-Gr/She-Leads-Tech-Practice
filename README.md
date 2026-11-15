# 🩷 She Leads Tech — Practice

Build confidence by solving problems independently, then compare your approach with the reference solutions.

[🧡 Theory](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Theory) → **🩷 Practice** → [💚 Review](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Review)

## Get started

1. [Fork this repository](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Practice/fork) to save your own solutions.
2. Open the [Data structure series](Data%20structure%20series/) and choose a topic.
3. Attempt the problems, test edge cases and note the time and space complexity before checking the solutions.

## Run TypeScript locally

### Set up your tools

1. Install Node.js 24 LTS or a newer LTS release. The Node.js installer includes npm, which installs packages for sessions that need them. [Download Node.js](https://nodejs.org/en/download)
2. Install [VS Code](https://code.visualstudio.com/download), or use your usual editor. VS Code has built-in TypeScript editing and highlights type errors as you work.
3. Open **Terminal → New Terminal** in VS Code and run these commands. Each should print a version number.

```sh
node --version
npm --version
```

For standalone practice files, Node can run the TypeScript syntax used in the starters directly. To check that you can also use the separate TypeScript compiler (`tsc`) from your terminal, run the command below. The first download needs internet access. If npm prompts you to install TypeScript, enter `y`. [Node.js TypeScript documentation](https://nodejs.org/api/typescript.html)

```sh
npm exec --package=typescript -- tsc --version
```

### Open the repository

If you already cloned the repository, open that folder in VS Code. Otherwise, run the commands below. If you forked the repository, use the clone URL from your fork's **Code** menu.

```sh
git clone https://github.com/Unlock-Her-Tech/She-Leads-Tech-Practice.git
cd She-Leads-Tech-Practice
```

In VS Code, choose **File → Open Folder** and select `She-Leads-Tech-Practice`. Open a terminal there. The repository root is the folder that contains this README and `Data structure series`.

Run standalone exercises directly with `node`. If a session's setup asks you to install dependencies with `npm install`, run it in that session's folder, where its `package.json` lives. [Array Lists and Linked Lists test setup](Data%20structure%20series/Array%20Lists%20and%20Linked%20Lists/Setup.md)

### See console output

To check your setup, create a temporary file called `local-check.ts` in the repository root. Save these two lines in it.

```ts
const message: string = "TypeScript is running!";
console.log(message);
```

Run the file from the VS Code terminal.

```sh
node local-check.ts
```

You should see `TypeScript is running!` in the terminal. You can delete `local-check.ts` after the check.

To try an exercise, implement its starter function. Then uncomment its example or add a `console.log` that calls the function at the bottom of the file, outside the function body. For example, after implementing the recursion exercise `factorial`, add:

```ts
console.log(factorial(5)); // Expected 120
```

Save the file and run it from the repository root. Use quotes around paths with spaces and replace the path below with the exercise you are working on.

```sh
node "Data structure series/recursion/level1/1-factorial.ts"
```

### Troubleshooting

- **`node` or `npm` is missing.** Reopen VS Code after installing Node.js, then check both versions again in a new terminal.
- **Node cannot find the file.** In the terminal, run `ls` on macOS or Linux or `dir` on Windows. If you see `README.md` and `Data structure series`, you are at the repository root. Check the spelling and quotes in the file path.
- **The terminal shows no output.** Save the file, check that the `console.log` line is active, and run the command again.
- **The output is `undefined` or a TODO error.** Finish the starter implementation and return the result before logging it.
- **VS Code flags a type error even though the file runs.** Node strips TypeScript types at runtime. Use VS Code or the TypeScript compiler to check types.

## Fork the repository

Select **Fork** → choose your GitHub account → **Create fork**. Use **Sync fork** to get updates.

## Contribute

For sessions that publish reference solutions, add your contribution to the matching session's `Solutions/` folder, test it and open a pull request from your fork. Use your own fork to save your Stack and Queue attempts.

## Join a session

[See upcoming sessions and register](https://luma.com/sheleadstechpractice).

---

Part of [Unlock Her Tech](https://github.com/Unlock-Her-Tech).
