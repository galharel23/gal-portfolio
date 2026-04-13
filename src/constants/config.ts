type TSection = {
  p: string;
  h2: string;
  content?: string;
  content2?: string;
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
    about: TSection & { content: string; content2: string };
    experience: TSection;
    feedbacks: TSection;
    works: TSection & { content: string };
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
    p: ["Turning complex logic into scalable, production-ready systems"],
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
      content: `I am a Computer Science student at Ben-Gurion University with few years of hands-on experience engineering high-impact software across military, industrial, and academic sectors. From developing mission-critical systems in Unit 9900 to architecting multiplayer blockchain platforms, I specialize in transforming complex logic into clean, production-grade code.`,
      content2: `Beyond the stack, I am a driven team player with a strong desire to contribute to high-performing environments. I thrive on the synergy of collaborative development and am deeply motivated by the challenge of shaping products that solve real-world problems.`,
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
      content: `This section is a look into the problems that keep me curious. These projects represent my journey through different technologies — from architecting RAG-based AI agents and real-time multiplayer systems to exploring the intricacies of blockchain research.\n\nEach project was built from the ground up, driven by a desire to solve complex challenges with clean, efficient code. I view every project as an opportunity to push technical boundaries and build something that truly works.`,
    },
  },
};
