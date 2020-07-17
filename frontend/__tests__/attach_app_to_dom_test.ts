jest.mock("../util", () => ({
  attachToRoot: jest.fn(),
  // Incidental mock. Can be removed if errors go away.
  trim: jest.fn(x => x),
  urlFriendly: jest.fn(),
}));

jest.mock("../redux/store", () => {
  return { store: { dispatch: jest.fn() } };
});

jest.mock("../settings/dev/dev_support", () => ({
  DevSettings: { futureFeaturesEnabled: () => false }
}));

jest.mock("../config/actions", () => {
  // Stubbing this to make testing easier.
  return { ready: () => ({ type: "YES_IT_WAS_CALLED" }) };
});

import { attachAppToDom, RootComponent } from "../routes";
import { attachToRoot } from "../util";
import { store } from "../redux/store";
import { ready } from "../config/actions";

describe("attachAppToDom", () => {
  it("Attaches RootComponent to the DOM", () => {
    attachAppToDom();
    const expectedArg2 = { store };
    expect(attachToRoot).toHaveBeenCalledWith(RootComponent, expectedArg2);
    expect(store.dispatch).toHaveBeenCalledWith(ready());
  });
});
