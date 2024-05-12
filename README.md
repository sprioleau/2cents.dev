![Social Card][social-card-url]

# 2cents.dev

_Share your thoughts, whims and opinions with humanity_

## 📸 Screenshots

![Homepage Screenshot][homepage-screenshot-url]

## 💿 Installation

### System Requirements

[Node.js](https://nodejs.org/en/download) version 18 or later

### Steps to Run Application

#### Clone this repo

```bash
git clone https://github.com/sprioleau/2cents.dev.git
```

#### Insall Dependencies

From the root directory, run the following command to install server dependencies.

```shell
npm install
```

#### Seed Database (optional)

I wrote a database seeding script (`server/seed.js`) that you can run with the following command. This will add a few messages to the UI for testing out the application.

```shell
npm run db:seed
```

#### Start Application

Next, run the application locally with the following command. The application will run on port `3000`.

```shell
npm run dev
```

### Run the application test suite

Run the tests and view results in terminal. Note that this test script runs the application on port `3000` and performs test using a headless browser. So, this script should only be used when the application is not already running on port `3000`.

```shell
npm run test
```

Run the tests and view the results in an interactive UI.

```shell
npm run test:ui
```

## ✨ Feature Summary

- [x] 🟦 Built with TypeScript
- [x] ⚛️ Uses React Hooks to encapsulate logic
- [x] 🎨 Fully custom design inspired by [MailChimp brand colors](https://ux.mailchimp.com/patterns/color)
- [x] ⚡️ Performant sorting of messages at database level
- [x] 💫 Subtle animations
- [x] 🧪 Fully configured end-to-end test suite
- [x] 🏗️ Semantic HTML
- [x] 📱 Mobile responsive design

## 📈 Improvement Ideas

With more time given to this project, I would consider the following ideas and features.

1. Bring in [Framer Motion](https://www.framer.com/motion/) for tasteful animations that add delight
2. Use newly created comment and append it to UI instead of fetching entire list after a new comment is created
   1. Consider implementing optimistic UI if database queries slow with scale ([React's `useOptimistic` hook](https://react.dev/reference/react/useOptimistic#use) is one option)
3. Add a `users` table secured with a user authentication strategy and data access controls
4. Break out code into small commits/PRs to better explain intention
5. Convert all server code to TypeScript
6. Update message timestamps (`created` field) on a recurring interval so that UI updates without interaction
   1. Use [TanStack Query](https://tanstack.com/query/latest) for fetching on window focus and add polling interval
7. Add ability to edit messages
8. Implement better error handling strategy and add toast messages
9. Imhanced testing strategy
   1. Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for individual component tests where valuable
   2. Consider adding unit tests for utility functions
   3. Consider using [Mock Service Worker (MSW)](https://mswjs.io/) to test API without needing to spin up a headless browser via Playwright
   4. Add tests to CI pipeline via GitHub actions
10. Revisit button styles and states
11. Check application with assistive technologies
12. Fully deploy API

### ❇️ Possible Features

1. Simple emoji reactions with a count
2. Add ability to reply to a comment (consider maximum level of nesting)

## 🎨 Figma Design

A link to the Figma design file for this application is below.

[2cents.dev Figma Design](https://www.figma.com/file/ZFFZbfFd1zVtgqFHJmmVhL/2cents.dev?type=design&node-id=5%3A147&mode=design&t=LJoLGkr6Tt3zbesd-1)

## 🛠 Built With

| Technology | Used For          |
| :--------- | :---------------- |
| TypeScript | -                 |
| Express    | API routing       |
| React      | Building UI       |
| Playwright | End-toend Testing |
| Zod        | Schema validation |

<!-- Project Details -->

[social-card-url]: https://www.2cents.dev/images/social-card.png "Social Card"
[homepage-screenshot-url]: https://www.2cents.dev/images/homepage-screenshot.png "Homepage Screenshot"
