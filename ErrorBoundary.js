// ==============Error Boundary============

// super(props) is used to call the constructor of the parent class, which in this case is React.Component.
// It's necessary to call super(props) before you can use this in the constructor.
// It passes props to the Component constructor so that you can access this.props later on in your component.

// this.state = { hasError: false, error: null, errorInfo: null };
// initializes the component's state.
// In this ErrorBoundary component, it's setting up the initial state with three properties:

// hasError is a boolean flag that indicates whether an error has occurred.
// error holds the error that was caught.
// errorInfo can contain additional information about the error, such as stack traces.
// By setting these initial values in the state, the ErrorBoundary component is prepared to catch and handle any errors that occur within its child components.

// The constructor method in React is used for initializing state, binding event handlers, or performing any other setup required before the component is mounted.
// In this case, it's initializing the state properties that will be used to manage errors within the ErrorBoundary component.

// The componentDidCatch lifecycle method in React is used specifically within error boundaries to catch errors that occur within their child components.
// When an error is caught by this method, it allows the component to handle the error gracefully.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Component stack trace: {this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    // Render children normally
    return this.props.children;
  }
}
