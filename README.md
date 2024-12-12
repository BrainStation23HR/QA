# Playwright API Testing

This project is configured to test APIs using [Playwright](https://playwright.dev). It uses `https://jsonplaceholder.typicode.com` as the base URL for all API tests. Follow the instructions below to set up, test, and view reports for the project.

## Installation

To set up the project, run the following command to install the necessary dependencies:

```bash
npm install
```

## Running Tests

To execute the API tests, use the following command:

```bash
npm run test
```

This will run all the tests defined in the project.

## Viewing Test Reports

After running the tests, you can generate and view an HTML report in your browser by executing:

```bash
npm run report
```

This command will open the report, giving you a detailed view of test results, including pass/fail statuses and error details.

## Configuration

The project is pre-configured with the base URL:

```
https://jsonplaceholder.typicode.com
```

You can modify this in the Playwright configuration file (`playwright.config.js`) if needed.

## Project Structure

- **tests/**: Contains all API test cases.
- **playwright.config.js**: Configuration file for Playwright, including the base URL and other settings.
- **playwright-report/**: Stores generated HTML reports.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
