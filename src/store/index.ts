import { configureStore } from "@reduxjs/toolkit";

export interface PageComponent {
  id: string | number;
  name: string;
  props: {
    [x: string]: any;
  };
}

export interface Page {
  id: string | number;
  slug: string;
  exact?: boolean;
  components: PageComponent[];
}

export interface State {
  pages: Page[];
}

export default (initialState?: State) =>
  configureStore({
    reducer: (s) => s,
    preloadedState: initialState,
  });
