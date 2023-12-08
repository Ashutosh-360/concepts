import "./App.css";
import { lazy, Suspense } from "react";
import LazyLoading from "./Concepts/LazyLoading";
// const LazyLoading = lazy(() => import("./Concepts/LazyLoading"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <LazyLoading />
      </Suspense>
    </div>
  );
}

export default App;

// react normally makes bundle.js file in sources,but for lazy loaded components it creates its own js file in sources for bundling

// Code Splitting: React.lazy allows you to split your code into smaller chunks, loading only the necessary components when they're required. This significantly improves initial load times by reducing the size of the bundle that needs to be downloaded by the user's browser.

// Improved Performance: By splitting components and loading them asynchronously, the initial rendering of your application becomes faster. Users can see the main content of the page while other components load in the background.

// Better User Experience: Suspense enables you to handle loading states more gracefully. Instead of displaying blank placeholders or loading spinners, you can show fallback content (like loading indicators or placeholders) while the desired component is being fetched.

// Simplified Code Structure: Code splitting with React.lazy and Suspense allows you to organize your codebase more effectively. Instead of bundling all components together, you can separate and load them on demand, making the codebase more manageable and maintainable.

// Optimized Resource Utilization: Loading components only when needed reduces the initial load time and saves unnecessary resource consumption. This can be particularly beneficial for larger applications with numerous components.

// Dynamic Loading: These features enable you to dynamically load components based on user interactions or certain conditions. This dynamic loading enhances the responsiveness and interactivity of your application.





// Disadvantages
// Increased Bundle Size: While code splitting helps reduce the initial bundle size, 
// improper use or excessive splitting might result in an increased number of smaller chunks being fetched, 
// potentially impacting performance due to additional HTTP requests.



// In React, Suspense is a component that allows you to define a fallback content to display while waiting for some asynchronous operation to complete,
// such as data fetching or lazy loading components.It's particularly useful in scenarios where components or data might take some time to load.