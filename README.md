This is a [React Native](https://reactnative.dev/) project bootstrapped with [`create expo-app`](https://reactnative.dev/docs/environment-setup?package-manager=yarn).

## Getting Started

First, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:8081](http://localhost:8081) with your browser to see the result.

You can start editing the page by modifying `App.js` or pages inside screens folder.

## Feature

### Search Bar

- You can use Search Bar to easily find what Batman movies do you like.
- If inputted Batman movies not exists, a `No movies found.` message will display.

### Load More

- Initially, there are 5 movies rendered in the page, you can click the `Load More` button to see the other items.

### Error Message

- Error message will appear when there's unwanted scenario happen like when the API is down.

### Loading Text

- Loading text will appear when page fetches data.

### Details Page

- When Batman movie item is clicked, details page will display together with its necessary contents.
- You can use the Arrow back button to go back to Home page.

## Something You Need To Know

- The page is not auto-updating so you need to refresh it whenever you have changes.
- The project is bootstrapped with `create expo-app` to smoothly develop the practical exam since I don't have any necessary tools and/or equipments for mobile development.

## Learn More

To learn more about React Native, take a look at the following resources:

- [Learn React Native](https://reactnative.dev/docs/getting-started) - learn the basics of React Native.
- [React Native Documentation](https://reactnative.dev/docs/components-and-apis) - learn about React Native components and API.
