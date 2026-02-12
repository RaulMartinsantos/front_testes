test("GET para api/v1/status deve retornar 200", async () => {
  const Response = await fetch("http://localhost:3000/api/v1/status");
  expect(Response.status).toBe(200);
});
