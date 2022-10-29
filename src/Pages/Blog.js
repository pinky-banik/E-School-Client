import React from 'react';

const Blog = () => {
  return (
    <div className='w-3/4 mx-auto py-10 gap-10 flex-col flex '>
      <h1 className='text-center font-bold text-primary text-4xl py-5 '>Blog</h1>
      <div className='p-5 py-10 shadow-2xl  rounded-xl'>
        <h1 className='text-primary py-5 text-2xl font-bold'>What is the purpose of react router?</h1>
        <p className='text-gray-500'>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
<br />
By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
      </div>
      <div className='p-5 py-10 shadow-2xl  rounded-xl'>
        <h1 className='text-primary py-5 text-2xl  font-bold'>How does Context API works?</h1>
        <p className='text-gray-500'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
        <br />
        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
      </div>
      <div className='p-5 py-10 shadow-2xl rounded-xl'>
        <h1 className='text-primary py-5 text-2xl font-bold'>Tell Us about useRef hook.</h1>
        <p className='text-gray-500'>
        In React components, there are times when frequent changes have to be tracked without enforcing the re-rendering of the component. It can also be that there is a need to re-render the component efficiently. While useState and useReducer hooks are the React API to manage local state in a React component, they can also come at a cost of being called too often making the component to re-render for each call made to the update functions.
 <br />
In this article, I’ll explain why useState is not efficient for tracking some states, illustrate how useState creates too much re-render of a component, how values that are stored in a variable are not persisted in a component, and last but not least, how useRef can be used keep track of variables without causing re-render of the component. And give a solution on how to enforce re-render without affecting the performance of a component.
<br />
After the evolution of functional components, functional components got the ability to have a local state that causes re-rendering of the component once there is an update to any of their local state.
        </p>
      </div>
    </div>
  );
};

export default Blog;