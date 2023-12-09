# Testify CLI

Testify CLI is a command-line tool designed to streamline the testing process for developers working on problem-solving tasks. Much like platforms such as HackerRank, Testify CLI focuses on validating code and testing cases directly in your development environment.

## Features

- **Problem Testing:** Verify your solutions to coding problems with comprehensive test cases.
- **Development Environment Setup:** Quickly set up a problem folder environment to facilitate focused work on problem-solving.

## Installation

1. Clone the repository: `git clone https://github.com/udonna-cell/testify-cli.git`
2. Navigate to the project directory: `cd testify-cli`
3. Install dependencies: `npm install` or `yarn install`

## Usage

### Testing a Problem

```bash
testify test <problem-name>
```

This command runs test cases for the specified problem, allowing you to validate your solution.

### Setting Up a Problem Environment

```bash
testify setup <problem-name>
```

Use this command to create a dedicated folder environment for a specific problem. This helps you focus on solving the problem without distractions.

## Getting Started

1. Run `testify setup <problem-name>` to create a problem folder.
2. Write your solution in the designated files.
3. Execute `testify test <problem-name>` to validate your solution against test cases.

## Contributing

We welcome contributions! If you have ideas for new features, bug fixes, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
