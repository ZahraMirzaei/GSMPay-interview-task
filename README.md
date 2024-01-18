# TODO List app

This project is a simple Todo list app that allows users to define and manage their tasks. The application is built using [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). For state management, [Zustand](https://zustand.surge.sh/) is utilized.

## Demo

you can see the app demo at:

[GSMPay.co](https://gsm-pay-interview-task.vercel.app/)

## Features

1. **Add New Tasks:** Users can define a desired number of tasks in the "Add" section. Task names can only consist of Persian letters and numbers.

2. **Task Workflow:**

   - Tasks are initially added to the "In Progress" section upon creation.
   - Clicking or tapping on a task in the "In Progress" section moves it to the "Done" section.
   - Clicking or tapping on a task in the "Done" section returns the task to the "In Progress" section.

3. **Success Chart:**

   - A success chart displays the number of tasks in both the "In Progress" and "Done" sections.

4. **Local Storage:**
   - Task information is stored locally, allowing users to view previous tasks upon returning to the application.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building web applications.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Zustand](https://zustand.surge.sh/): A small, fast, and scaleable state management library for React.

## Design Mockups

Explore the design mockups on Figma to get a better understanding of the visual aspects of the project.

[Figma Project](https://www.figma.com/file/xjGO9zOUQa5238vYtBvEGp/Gsm-Front-Challenge?type=design&node-id=0-1&mode=design&t=E48XMS6XH3EwKs0E-0)

## Getting Started

1. Clone the repository.

   ```bash
   git clone https://github.com/ZahraMirzaei/GSMPay-interview-task
   cd GSMPay-interview-task
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Run the development server.

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Feel free to explore and enhance the application based on your needs!
