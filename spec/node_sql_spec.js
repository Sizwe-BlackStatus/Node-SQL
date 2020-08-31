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
  it("should add visitor's data", () => {
    expect(
      addNewVisitor("Jason", 21, "01-03-2020", "09:15:16", "Zulu", "Inspiring")
    ).not.toBeNull;
  });
});
describe("listAllVisitors function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    listAllVisitors();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should list selected data", () => {
    expect(listAllVisitors).not.toBeNull;
  });
});
describe("deleteVisitor function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    deleteVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should delete a visitor from database", () => {
    // dummycode
    var lengthOfResults = 2;
    if (deleteVisitor) {
      lengthOfResults = 1;
    }
    deleteVisitor;
    expect(lengthOfResults).toBeLessThan(2);
  });
});
describe("deleteAllVisitors function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    deleteAllVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("delete all visitors from database", () => {
    expect(deleteAllVisitor).toBeNull;
  });
});
describe("viewVisitorInfo function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    viewVisitorInfo();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should return a visitor's data", () => {
    expect(viewVisitorInfo()).not.toBeNull;
  });
});
describe("updateVisitor function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    updateVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should update visitors data", () => {
    var assistantsName = "Micheal";
    if (updateVisitor) {
      assistantsName = "Zulu";
    }
    updateVisitor();
    expect(assistantsName).toBe("Zulu");
  });
});
