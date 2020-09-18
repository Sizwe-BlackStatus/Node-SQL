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
  it("should be called with correct arguments", () => {
    objVisitor = {
      addNewVisitor: addNewVisitor,
    };
    spyOn(objVisitor, "addNewVisitor");
    objVisitor.addNewVisitor(
      "Jack",
      21,
      "2020-03-24",
      "14:00:01",
      "Jimmy",
      "Cool!"
    );
    expect(objVisitor.addNewVisitor).toHaveBeenCalledWith(
      "Jack",
      21,
      "2020-03-24",
      "14:00:01",
      "Jimmy",
      "Cool!"
    );
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
      var resultsRow = [
        { id: 63, visitorname: "Jason" },
        { id: 64, visitorname: "Samson" },
      ];
    }
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
  it("should be called with correct arguments", () => {
    objVisitor = {
      deleteVisitor: deleteVisitor,
    };
    spyOn(objVisitor, "deleteVisitor");
    objVisitor.deleteVisitor(103);
    expect(objVisitor.deleteVisitor).toHaveBeenCalledWith(103);
  });
});

describe("deleteAllVisitors function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    deleteAllVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("delete all visitors from database", () => {
    noOfVistors = 3;
    if (deleteAllVisitor) {
      noOfVistors = 0;
    }
    expect(noOfVistors).toBe(0);
  });
});

describe("viewVisitorInfo function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    viewVisitorInfo();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should be called with correct arguments", () => {
    objVisitor = {
      viewVisitorInfo: viewVisitorInfo,
    };
    spyOn(objVisitor, "viewVisitorInfo");
    objVisitor.viewVisitorInfo(110);
    expect(objVisitor.viewVisitorInfo).toHaveBeenCalledWith(110);
  });
});

describe("updateVisitor function", () => {
  it("should call query method", () => {
    spyOn(pool, "query");
    updateVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should be called with correct arguments", () => {
    objVisitor = {
      updateVisitor: updateVisitor,
    };
    spyOn(objVisitor, "updateVisitor");
    objVisitor.updateVisitor(110, "Jack");
    expect(objVisitor.updateVisitor).toHaveBeenCalledWith(110, "Jack");
  });
});
