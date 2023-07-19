export type NavLinkType = {
  id: string;
  title: string;
};

export type ServiceType = {
  title: string;
  icon: string;
};

export type TechnologyType = {
  name: string;
  icon: string;
};

export type ExperienceType = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type TestimonialType = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

export type ProjectType = {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
};
