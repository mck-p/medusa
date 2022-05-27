type ID = string | number;
type Slug = string;

export interface PageComponent {
  id: ID;
  name: string;
  props: {
    [x: string]: any;
  };
}

export interface Page {
  id: ID;
  slug: Slug;
  exact?: boolean;
  components: PageComponent[];
}

export interface Redirect {
  id: ID;
  from: Slug;
  to: Slug;
  permanent: boolean;
}

export interface State {
  pages: Page[];
  redirects: Redirect[];
}
