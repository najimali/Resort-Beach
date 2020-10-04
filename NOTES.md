# Resort Beach

Download the setup files - [files](https://github.com/john-smilga/setup-files-react-beach-resort)

Add \_redirects file in public folder

## React Router [Quick start](https://reactrouter.com/web/guides/quick-start)

`import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";`

### **Primary Components of Router**

1. Routers like BrowserRouter
2. Route Matchers like Route & Switch
3. Navigation, like Link, NavLink, and Redirect

A **BrowserRouter** uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router.

**Note** - To use a router, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level `<App>` element in a router, like this:

**Route Matchers** - Switch and Route.

- **`<Switch>`** is rendered,it searches through its children Route elements to find whose path is matches the current URL.if find - render it & ignore all others else renders nothing (null).Use a Switch any time you have multiple routes, but you want only one of them to render at a time.

Note - we use exact keyword in the Route so that only the correct path matches is render

### URL Parameters

we use colon(:) & changing variable name to make url dynamic.

We can use the `useParams` hook here to access
the dynamic pieces of the URL.

eg
`<Switch> <Route path="/:id" children={<Child />} /> </Switch> let {id } = useParams(); `

[more details](https://reactrouter.com/web/example/url-params)

### Context API [docs](https://reactjs.org/docs/context.html)

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

**Diagram**
![alt context picture](./images/Contex.png)

As you can see in the daigram above App Component is passinf user naem & it is to be only used by Component A,D, F but Problem we face in react is to pass the value from higher level to lower level we need to pass props at each level(or props drilling ).So to avoid props drilling we use context api so that we can consume our props at the level we want.

**Note -**

1. Component can only be consumed value if its parent component is provider.
2. Wrap the **Root Component**( generally it is App Component) with the Context Provider so that any component can be consumed value form context provider.

i.e `<RoomProvider> <Router> <App></App> </Router> </RoomProvider>`
**Steps**

1. Create a Context
   `const MyContext = React.createContext(defaultValue);`
2. Provide a context value
   `<MyContext.Provider value={/* some value */}>`
3. Consume the context value
   `<UserConsumer> {username => { return <div>Hello {username}</div> }} </UserConsumer>`

#### [Watch the explanation](https://www.youtube.com/watch?v=j3j8St50fNY)
