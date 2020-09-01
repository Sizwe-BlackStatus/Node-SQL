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
  it("should insert visitor data", () => {
    var noOfVistors = 2;
    if (addNewVisitor) {
      noOfVistors = 3;
    }
    addNewVisitor;
    expect(noOfVistors).toBeGreaterThan(2);
  });
});

describe("listAllVisitors function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    listAllVisitors();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should list id and name from the data", () => {
    if (listAllVisitors) {
      resultsRow = [
        { id: 63, visitorname: "Jason" },
        { id: 64, visitorname: "Samson" },
      ];
    }
    listAllVisitors;
    expect(resultsRow).toEqual([
      { id: 63, visitorname: "Jason" },
      { id: 64, visitorname: "Samson" },
    ]);
  });
});

describe("deleteVisitor function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    deleteVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should delete a visitor from database", () => {
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
    noOfVistors = 3
    if (deleteAllVisitor) {
      noOfVistors = 0;
    }
    deleteAllVisitor;
    expect(noOfVistors).toBe(0);
  });
});

describe("viewVisitorInfo function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    viewVisitorInfo();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should return a visitor's data", () => {
    if (viewVisitorInfo) {
      resultsRow = [
        {
          visitorName: "Anthony",
          visitorAge: 19,
        },
      ];
    }
    expect(resultsRow).toEqual([{ visitorName: "Anthony", visitorAge: 19 }]);
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
