test("GET para api/v1/status deve retornar 200", async () => {
  const Response = await fetch("http://localhost:3000/api/v1/status");
  expect(Response.status).toBe(200);

  const responseBody = await Response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
});
