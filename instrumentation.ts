export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Add your Node.js instrumentation here
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Add your Edge runtime instrumentation here
  }
}
