# Node.js Server Port Already in Use

This example demonstrates a common error in Node.js: attempting to start a server on a port that is already in use.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a robust solution.

## Problem

The `server.listen(8080)` method will throw an error if port 8080 is already occupied by another process. This typically results in the server failing to start.

## Solution

The solution involves using the `'listening'` event and error handling to gracefully manage port conflicts.