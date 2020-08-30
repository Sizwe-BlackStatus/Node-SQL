const {
  addNewVisitor,
  listAllVisitors,
  deleteVisitor,
  deleteAllVisitor,
  viewVisitorInfo,
  updateVisitor,
  pool,
} = require("../src/node_sql");
describe("addVisitor function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    addNewVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should add data", () => {
    expect(
      addNewVisitor("Jason", 21, "01-03-2020", "09:15:16", "Zulu", "Inspiring")
    ).not.toBeNull();
  });
});
describe("listAllVisitors function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    listAllVisitors();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should list selected data", () => {
    expect(listAllVisitors).not.toBeNull();
  });
});
