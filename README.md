Playwright Automation Training Task

Overview-
This project was completed as part of Playwright Automation Training. The objective was to learn advanced Playwright concepts such as Browser Window handling, Network Mocking, Fixtures, Reporting, Debugging, and Timeout handling.


Project Setup-
1) Install Dependencies- npm install

2) Install Browsers- npx playwright install

3) Run All Tests- npx playwright test

4) Run Tests in Headed Mode- npx playwright test --headed

5) Open HTML Report- npx playwright show-report

6) Generate Trace- npx playwright test --trace on

Project Structure-

TASK2
│
├── tests
│   ├── browser-window.spec.ts
│   ├── network-mocking.spec.ts
│   ├── fixture-demo.spec.ts
│   ├── failures.spec.ts
│   └── timeout.spec.ts
│
├── fixtures
│   └── baseFixture.ts
│
├── utils
│   └── Logger.ts
│
├── playwright.config.ts
├── package.json
└── README.md

Day 1 Tasks

1. Browser Window Handling

Implementation-
- Verify New Tab button opens a new tab
- Verify content of newly opened tab
- Close child tab and switch back to parent tab
- Verify new message window content

Learning
- Handling multiple browser tabs
- Switching between parent and child windows
- Using Browser Context events
- Working with new page events

2. Network Mocking

Implementation-
- Mock Books API with custom data
- Mock empty API response
- Delay API response and observe behavior

Learning-
- API interception using page.route()
- Returning mocked responses
- Simulating backend behavior
- Testing UI without dependency on actual APIs


Day 2 Tasks

1. Custom Fixtures-
To reduce duplicate code and make tests reusable.

Learning-
- Fixture lifecycle
- Shared setup and teardown
- Dependency injection in Playwright

2. Fixture Based Tests-
Implemented test cases using custom fixtures.

Learning-
- Cleaner test design
- Better code reusability
- Easier maintenance

Challenges Faced

- Understanding Browser Context events
- Implementing Network Mocking correctly
- Working with custom fixtures
- Analyzing failures using Trace Viewer
- Understanding timeout behavior

Conclusion

This assignment helped me gain practical experience with advanced Playwright concepts beyond basic UI automation. I learned how to create reusable test frameworks, debug failures effectively, work with mocked APIs, and analyze executions using reports and traces. 