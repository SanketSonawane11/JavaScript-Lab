# Event Loop Prediction Lab

This lab was created to deeply understand how the JavaScript event loop actually works, beyond surface level explanations.

## What this covers

- Synchronous execution vs async scheduling
- How `async / await` really behaves under the hood
- Microtask queue behavior
  - `Promise.then`
  - `await` continuations
  - `queueMicrotask`
- Macrotask queue behavior
  - `setTimeout`
- Why microtasks always run before the next timer

## Key takeaways

- All synchronous code finishes first. No async construct can interrupt it.
- Every `await` splits a function and resumes later as a microtask.
- Microtasks are FIFO. A microtask that schedules another microtask goes to the back of the queue.
- After **every** macrotask, the engine drains the entire microtask queue before running the next macrotask.

## Mental model

Run sync code
→ Drain all microtasks
→ Run one macrotask
→ Drain microtasks again
→ Repeat


## Goal of the exercise

The goal was not to memorize output order, but to build a reliable mental model that allows predicting execution flow confidently in real systems.

If you can explain *why* something runs when it does, you understand the event loop.
