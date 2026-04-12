type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Gal Harel — Software Developer",
    fullName: "Gal Harel",
    email: "galharel23@gmail.com",
  },
  hero: {
    name: "Gal Harel",
    p: ["I build reliable, maintainable,", "and modern AI-driven software"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Get to know me",
      h2: "About Me.",
      content: `I'm a Computer Science student who genuinely enjoys building things — from backend systems that handle real load to AI tools that actually work. I've written production code across military, industry, and academic environments, and lately I've been deep into AI-driven development and blockchain research. I care a lot about clean architecture, and even more about software that solves real problems.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These are projects I built because I found the problems genuinely interesting. They span AI-personalized learning, real-time multiplayer systems, and blockchain research — each one started from scratch and pushed me into new territory.`,
    },
  },
};
