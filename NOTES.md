# Resort Beach

Download the setup files - [files](https://github.com/john-smilga/setup-files-react-beach-resort)

Add \_redirects file in the public folder

## React Router [Quick Start](https://reactrouter.com/web/guides/quick-start)

`import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";`

### **Primary Components of Router**

1. Routers like BrowserRouter
2. Route Matchers like Route & Switch
3. Navigation, like Link, NavLink, and Redirect

A **BrowserRouter** uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router.

**Note** - To use a router, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level `<App>` element in a router, like this:

**Route Matchers** - Switch and Route.

**`<Switch>`** is rendered, it searches through its children Route elements to find whose path matches the current URL. if find - render it & ignore all others else renders nothing (null). Use a Switch any time you have multiple routes, but you want only one of them to render at a time.

Note - we use the exact keyword in the Route so that only the correct path matches is render

### URL Parameters [Docs](https://reactrouter.com/web/example/url-params)

We use a colon(:) & changing the variable name to make the URL dynamic. We can use the `useParams` hook here to access the dynamic pieces of the URL.

`<Switch> <Route path="/:id" children={<Child />} /> </Switch> let {id } = useParams(); `

### Context API [Docs](https://reactjs.org/docs/context.html)

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

**[Diagram](https://youtu.be/j3j8St50fNY?t=160)**

As you can see in the diagram above App Component is passing user name & it is to be only used by Component A, D, F but Problem we face in react is to pass the value from a higher level to a lower level we need to pass props at each level(or props drilling ). So to avoid props drilling we use context API so that we can consume our props at the level we want.

**Note -**

1. Component can only be consumed value if its parent component is the provider.
2. Wrap the **Root Component**( generally it is App Component) with the Context Provider so that any component can be consumed value from the context provider.

i.e `<RoomProvider> <Router> <App></App> </Router> </RoomProvider>`

**Steps**

1. Create a Context
   `const MyContext = React.createContext(defaultValue);`
2. Provide a context value
   `<MyContext.Provider value={/* some value */}>`
3. Consume the context value
   `<UserConsumer> {username => { return <div>Hello {username}</div> }} </UserConsumer>`

#### [Watch the explanation](https://www.youtube.com/watch?v=j3j8St50fNY)

### PropTypes [Docs](https://reactjs.org/docs/typechecking-with-proptypes.html)

As your app grows, you can catch a lot of bugs with type checking so React has some built-in type checking abilities. To run type checking on the props for a component, you can assign the special propTypes property:

`import PropTypes from 'prop-types';`

PropTypes exports a range of validators that can be used to make sure the data you receive is valid.

### Component Lifecycle Method [More](https://youtu.be/qnN_FuFNq2g)

When we create the create component, the component goes to several lifecycles & react provides a builtin method that we can override at particular stages in the lifecycle.

1. Mounting Method -
   When an instance of a component is being created & inserted into the DOM

2. Updating Method -
   When a component is being re-rendered as a result of changes to either its props os state.
3. Unmounting Method -
   When a component is being removed from the DOM

4. Error Handling Method -
   When there is an error during rendering in a lifecycle method, or in the constructor of any child component

**Note - These methods do not exist for Functional Component**

#### Mounting Lifecycle Method -

It has four type

1. constructor(props) -
   It is a special function that will get called whenever a new component is created.

   It is perfect for initializing state & binding the event handlers.

   But Never use to cause side effects like don't use it for calling API request for eg HTTP requests.

   You have to call special function super(props) this will call the base class constructor

2. static getDerivedStateFromProps(props,state)
3. render() -
   It is the only required method in the class component.
   We simply read this.state & this.props in this method & return the JSX.
   If a child is present then it will also execute their lifecycle methods.

4. componentDidMount() -
   This method is only called once in the whole life cycle of a given component.
   It invoked immediately after a component and all its children components have been rendered to the DOM.

**Order of Mounting Method execution**

constructor() -> static getDerivedStateFromProps()->render() (& all its children)->componentDidMount()

### Style Component [Docs](https://styled-components.com/)

The motive to use style component is to make dynamic image background in the single room

`import styled from "styled-components";`

`const StyledHero = styled.component_name`

passing props in style component is `props=>props.props_name`

`background: url(${(props) => props.img}) center/cover no-repeat;`

### Higher Order Components [Docs](https://reactjs.org/docs/higher-order-components.html)

When two or more different component have the similar functionality then instead of creating duplicate code we
create a higher order component then pass original component in it.

In short to share common functionality between components we use higher-order components.

HOC - A pattern where a function takes a component as an argument and returns a new component

`const NewComponent = higherOrderComponent(OriginialComponent);`

or

`const IronMan = withSuit(TonyStark);`

### [Watch Explantion](https://www.youtube.com/watch?v=rsBQj6X7UK8&t=4s)
