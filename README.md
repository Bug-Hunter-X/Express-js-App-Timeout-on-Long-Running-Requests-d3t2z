# Express.js App Timeout on Long-Running Requests

This repository demonstrates a common issue in Node.js Express.js applications where requests can hang or time out if they involve long-running asynchronous operations.  The `bug.js` file showcases the problem, while `bugSolution.js` provides a solution using asynchronous request handling.

## Problem

The problem arises when an Express.js route handler performs an asynchronous operation (like fetching data from a database or external API) that takes longer than the client's request timeout.  If the response isn't sent before the timeout, the client receives an error.

## Solution

The solution involves employing appropriate techniques for handling asynchronous requests, preventing request timeouts.