import React from 'react';

const Blogs = () => {
    return (
      <div className="container shadow-xl rounded-xl mx-auto my-20 pb-20">
        <h1 className="text-xl font-bold text-center">
          Questions And Answeres
        </h1>
        <div className=" w-1/2 flex flex-col  gap-4 p-10   justify-items-center mx-auto shadow-md ">
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              Difference between `javascript` and `nodejs`
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              Javascript is a programming language and node js is just a runtime
              environment for javascript typically javascript run in browser but
              node js made it possible to run javascript in server also. node js
              made programmer life easier. before node js javascript programmer
              had to learn a server side language nowadays its not necessary.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              Differences between `sql` and `nosql` databases.
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              sQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              What is the purpose of `jwt` and how does it work
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed.JWTs can be
              signed using a secret (with the HMAC algorithm) or a
              public/private key pair using RSA or ECDSA.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;