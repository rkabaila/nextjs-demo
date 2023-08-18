const Page = () => (
  <div className="h-screen flex flex-col items-center">
    <div className="h-auto">Products</div>
    <form action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Page;
