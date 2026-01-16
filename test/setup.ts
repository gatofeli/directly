vi.stubGlobal("chrome", {
  storage: {
    local: {
      get: vi.fn(),
      set: vi.fn(),
    },
  },
});
