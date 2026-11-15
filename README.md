# 🩷 She Leads Tech — Practice

Build confidence by solving problems independently, then compare your approach with the reference solutions.

[🧡 Theory](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Theory) → **🩷 Practice** → [💚 Review](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Review)

## Get started

1. [Fork this repository](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Practice/fork) to save your own solutions.
2. Open the [Data structure series](Data%20structure%20series/) and choose a topic.
3. Attempt the problems, test edge cases and note the time and space complexity before checking the solutions.

## Run TypeScript locally

The [Stacks and Queues practice](Data%20structure%20series/Stacks%20and%20Queues/) runs directly with [Node.js](https://nodejs.org/en/download). Install Node.js 24 or newer. Open a terminal and check your version.

```sh
node --version
```

If the terminal cannot find `node` after installation, open a new terminal and try again. If you already cloned the repository, open its root folder and skip these two commands.

```sh
git clone https://github.com/Unlock-Her-Tech/She-Leads-Tech-Practice.git
cd She-Leads-Tech-Practice
```

If you forked the repository, use the clone URL from your fork's **Code** menu in the first command. The root folder contains this README and the `Data structure series` folder.

1. Open a starter such as [Valid Parentheses](Data%20structure%20series/Stacks%20and%20Queues/Stack/level1/20-isValid.ts).
2. Replace the `throw new Error("TODO: ...")` line with your implementation.
3. Remove the `/*` and `*/` around the example at the bottom of the file, then save.
4. Run this command from the repository root. Keep the quotes around the file path because it contains spaces.

```sh
node "Data structure series/Stacks and Queues/Stack/level1/20-isValid.ts"
```

The example should print `true` and `false` on separate lines. For another exercise, replace the path with that file's path. Add your own `console.log(...)` calls to try more inputs.

- **No output?** Make sure the example is uncommented and the file is saved.
- **Cannot find the file?** Run the command from the repository root and check the spelling, case and quotes in the path.
- **TypeScript syntax error?** Check that your terminal is using Node.js 24 or newer. Node runs the type syntax used here by stripping types at runtime, so use your editor to check TypeScript errors. [Node.js TypeScript documentation](https://nodejs.org/api/typescript.html)
- **Running the Array Lists and Linked Lists tests?** Follow that session's [test setup](Data%20structure%20series/Array%20Lists%20and%20Linked%20Lists/Setup.md).

## Fork the repository

Select **Fork** → choose your GitHub account → **Create fork**. Use **Sync fork** to get updates.

## Contribute

For sessions that publish reference solutions, add your contribution to the matching session's `Solutions/` folder, test it and open a pull request from your fork. Use your own fork to save your Stack and Queue attempts.

## Join a session

[See upcoming sessions and register](https://luma.com/sheleadstechpractice).

---

Part of [Unlock Her Tech](https://github.com/Unlock-Her-Tech).
