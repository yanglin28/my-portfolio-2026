export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  year: string;
  category: string;
  summary: string;
  details: string;
  tags: string[];
  links: LinkItem[];
};

export type Award = {
  title: string;
  context: string;
  href: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};
