it("should have hmr flag in loader context", function() {
	expect(require("./loader!")).toBe(Boolean(module.hot));
});
