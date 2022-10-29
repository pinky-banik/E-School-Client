import React from 'react';

const Blog = () => {
  return (
    <div className='w-3/4 mx-auto py-10 gap-10 flex-col flex '>
      <h1 className='text-center font-bold text-primary text-4xl py-5 '>Blog</h1>
      <div className='p-5 py-10 shadow-2xl  rounded-xl'>
        <h1 className='text-primary py-5 text-2xl font-bold'>what is cors?</h1>
        <p className='text-gray-500'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
      </div>
      <div className='p-5 py-10 shadow-2xl  rounded-xl'>
        <h1 className='text-primary py-5 text-2xl  font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h1>
        <p className='text-gray-500 text-start'><strong>Why I am using firebase : </strong> <br />
        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
        <br />
        <br />
        <strong className='my-5'>The other options I have to implement Authentication : </strong><br />
        <ul className='list-disc px-5'>
          <li>STYTCH</li>
          <li>Ory</li>
          <li>Supabase</li>
          <li>Okta</li>
          <li>PingIdentity</li>
          <li>Keycloak</li>
          <li>Frontegg </li>
          <li>Authress</li>
          <li>Auth0</li>
          <li>Amazon Cognito</li>
          <li>OneLogin</li>
          <li>Etc..</li>
        </ul>
        </p>
      </div>
      <div className='p-5 py-10 shadow-2xl rounded-xl'>
        <h1 className='text-primary py-5 text-2xl font-bold'>How does the private route work?</h1>
        <p className='text-gray-500'>
        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
<br />
The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
        </p>
      </div>
      <div className='p-5 py-10 shadow-2xl rounded-xl'>
        <h1 className='text-primary py-5 text-2xl font-bold'>What is Node? How does Node work?</h1>
        <p className='text-gray-500'>
        What is this node?
Image result for What is Node? How does Node work?
Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
<br />
<br />
Node.js is the JavaScript runtime environment which is based on Google’s V8 Engine i.e. with the help of Node.js we can run the JavaScript outside of the browser. Other things that you may or may not have read about Node.js is that it is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.
        </p>
      </div>
    </div>
  );
};

export default Blog;