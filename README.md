![Social Card][social-card-url]

# 2¢cents.dev

_Share your thoughts, whims and opinions with humanity_

## Screenshots

![Homepage Screenshot][homepage-screenshot-url]

## Installation

### System Requirements

[Node.js](https://nodejs.org/en/download) version 18 or later

Clone this repo

```bash
git clone https://github.com/sprioleau/2cents.dev.git
```

From the root directory, run the following command to install server dependencies.

```shell
npm install
```

I wrote a database seeding script (`server/seed.js`) that you can run with the following command. This will add a few messages to the UI for testing out the application.

```shell
npm run db:seed
```

From the `client` directory, run the following command to install client dependencies.

```shell
cd client; npm install
```

From the root directory, run the application

This will run the frontend on port `3000` and the backend server on port `3001`.

```shell
npm run dev
```

Run the application test suite

```shell
npm run test:ui # or simply "npm run test" if you don't want the playwright UI
```

## Feature Summary

- [x] 🎨 Fully custom design inspired by MailChimp brand colors
- [x] ⚡️ Performant sorting of messages at database level
- [x] ⚛️ React Hooks
- [x] 💫 Subtle animations
- [x] 🧪 Fully configured end-to-end test suite
- [x] 🏗️ Semantic HTML

## Improvement Ideas

With more time given to this project, I would consider the following ideas and features.

- Bring in Framer Motion for tasteful animations that add delight
- Add a users table secured with a user authentication strategy and data access controls
- Break out code into small commits and use PRs to explain intention
- Update message timestamps (`created` field) on an interval so that UI updates without interaction
- Use TanStack Query for fetching on window focus and add polling interval
- Add ability to edit messages
- Better error handling with toast messages
- Add unit tests for utility functions
- Revisit button styles and states
- Check application with assistive technologies

## Findings

### Cross-origin Resource Sharing (CORS)

I needed to add the express `cors` middleware in order to allow the frontend running at `http://localhost:3000` to communicate with the backend at `http://localhost:3001`.

## Considerations

### Framework

When thinking about this craft assignment, I considered using a full-stack framework with which I am comfortable working. For me, that is Next.js. However, the testing story for end-to-end tests is still a work in progress, so I stuck with a React frontend and an Express.js backend.

<!-- Project Details -->

[social-card-url]: https://github.com/sprioleau/2cents.dev/blob/main/client/public/images/social-card.png?raw=true "Social Card"
[homepage-screenshot-url]: https://github.com/sprioleau/2cents.dev/blob/main/client/public/images/homepage-screenshot.png?raw=true "Homepage Screenshot"
