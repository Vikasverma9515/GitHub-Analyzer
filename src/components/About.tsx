// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa';

// const About = () => {
//   return (
//     <div className="min-h-screen py-16 flex flex-col items-center text-center px-6">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-12"
//       >
//         <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
//           About Me
//         </h1>
//         <p className="text-lg text-gray-500 max-w-2xl">
//           Full Stack Developer | Open Source Enthusiast | Tech Explorer
//         </p>
//       </motion.div>

//       {/* Profile Section */}
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.2 }}
//       className="glass-card p-8 rounded-2xl flex flex-col items-center mb-16 w-full max-w-3xl"
//     >
//       <motion.img
//         initial={{ scale: 0.5 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.3 }}
//         src="/img.JPEG"
//         alt="Vikas Verma"
//         className="w-32 h-32 rounded-full border-4 border-purple-500/30 mb-4"
//       />
//       <h2 className="text-3xl font-bold">Vikas Verma</h2>
//       <p className="text-gray-600 mt-4 max-w-lg">
//         Passionate Full Stack Developer with expertise in modern web technologies.
//         Building tools that make developers' lives easier and contributing to open-source.
//       </p>
//       <div className="flex gap-4 mt-6">
//         <SocialLink href="https://github.com/vikasverma9515" icon={<FaGithub />} />
//         <SocialLink href="your-linkedin-url" icon={<FaLinkedin />} />
//         <SocialLink href="your-twitter-url" icon={<FaTwitter />} />
//         <SocialLink href="mailto:your-email" icon={<FaEnvelope />} />
//       </div>
//     </motion.div>

//       {/* Skills Section */}
//       <Section title="Technical Skills">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <SkillCard icon={<FaCode />} title="Frontend" skills={['React', 'TypeScript', 'Tailwind CSS']} />
//           <SkillCard icon={<FaServer />} title="Backend" skills={['Node.js', 'Express', 'Django']} />
//           <SkillCard icon={<FaDatabase />} title="Database" skills={['PostgreSQL', 'MongoDB']} />
//           <SkillCard icon={<FaTools />} title="Tools" skills={['Git', 'Docker', 'AWS']} />
//         </div>
//       </Section>

//       {/* Contact Me Section */}
//       <Section title="Contact Me">
//         <p className="text-gray-500 mb-4">Let's connect and build something amazing!</p>
//         <a
//           href="mailto:your-email"
//           className="bg-purple-600 text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-purple-700 transition"
//         >
//           Say Hello
//         </a>
//       </Section>
//     </div>
//   );
// };

// const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.4 }}
//     className="mb-16 w-full max-w-4xl"
//   >
//     <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
//     {children}
//   </motion.div>
// );

// const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
//   <motion.a
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-gray-600 hover:text-purple-600 text-2xl transition-colors"
//   >
//     {icon}
//   </motion.a>
// );

// const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => (
//   <motion.div whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl text-center">
//     <div className="text-purple-600 text-3xl mb-4">{icon}</div>
//     <h4 className="text-xl font-semibold mb-2">{title}</h4>
//     <ul className="text-gray-600 space-y-1">
//       {skills.map((skill, index) => (
//         <li key={index}>{skill}</li>
//       ))}
//     </ul>
//   </motion.div>
// );

// export default About;


// pages/About.tsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Full Stack Developer | Tech Explorer
        </p>
      </motion.div>

      {/* Profile Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 rounded-2xl mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              src="./img.JPEG" // Add your image URL
              alt="Vikas Verma"
              className="w-48  rounded-full border-4 border-purple-500/30"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Vikas Verma</h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate Full Stack Developer with expertise in modern web technologies.
                I love building tools that make developers' lives easier and contribute to the
                open-source community.
              </p>
              <div className="flex gap-4 justify-center">
                <SocialLink href="https://github.com/vikasverma9515" icon={<FaGithub />} />
                <SocialLink href="https://www.linkedin.com/in/vikas-verma-264103275/" icon={<FaLinkedin />} />
                {/* <SocialLink href="your-twitter-url" icon={<FaTwitter />} /> */}
                <SocialLink href="mailto:vikasverma951582@gmail.com" icon={<FaEnvelope />} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={<FaCode />}
              title="Frontend Development"
              skills={['React', 'TypeScript', 'Tailwind CSS', 'Next.js']}
            />
            <SkillCard
              icon={<FaServer />}
              title="Backend Development"
              skills={['Node.js', 'Express', 'Python']}
            />
            <SkillCard
              icon={<FaDatabase />}
              title="Database"
              skills={['PostgreSQL', 'Firebase', 'Supabase', 'OracleDB']}
            />
            {/* <SkillCard
              icon={<FaTools />}
              title="DevOps"
              skills={['Kubernetes', 'Terraform', 'Jenkins', 'Azure DevOps']}
            />
            <SkillCard
              icon={<FaTools />}
              title="Tools & Others"
              skills={['Git', 'Docker', 'AWS', 'CI/CD']}
            /> */}
            <SkillCard
              icon={<FaCode />}
              title="Programming & Concepts"
              skills={['C++', 'C', 'Python', 'Operating Systems', 'OOP']}
            />
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard
                icon={<FaTools />}
                title="Communication"
                skills={['Public Speaking', 'Team Collaboration', 'Active Listening']}
              />
              <SkillCard
                icon={<FaTools />}
                title="Problem Solving"
                skills={['Critical Thinking', 'Analytical Skills', 'Creativity']}
              />
              <SkillCard
                icon={<FaTools />}
                title="Leadership"
                skills={['Team Management', 'Mentorship', 'Conflict Resolution']}
              />
              <SkillCard
                icon={<FaTools />}
                title="Adaptability"
                skills={['Flexibility', 'Quick Learning', 'Resilience']}
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="GitHub Profile Analyzer"
              description="A tool to analyze GitHub profiles and visualize repository statistics."
              tech={['React', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'supabase']}
              link="https://github.com/vikasverma9515/github-analyzer"
            />

            <ProjectCard
              title="LinkMe"
              description="A website that helps to save important links and notes which can be accessed from anywhere."
              tech={['HTML', 'CSS', 'JavaScript']}
              link="https://github.com/vikasverma9515/github-analyzer"
            />
            <ProjectCard
              title="JobNest"
              description="A website where you can find jobs and apply for them."
              tech={['React', 'Node.js', 'Express', 'javascript', 'shadcn']}
              link="https://github.com/vikasverma9515/github-analyzer"
            />
            {/* Add more project cards */}
          </div>
        </motion.div>

        {/* Experience Section */} 
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="text-center text-gray-600">
            <p>I currently don't have any professional experience, but I'm actively learning and building projects to enhance my skills. Check out my projects above to see what I've been working on!</p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

// Helper Components
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-purple-600 text-2xl transition-colors"
  >
    {icon}
  </motion.a>
);

const SkillCard = ({ 
  icon, 
  title, 
  skills 
}: { 
  icon: React.ReactNode; 
  title: string; 
  skills: string[] 
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-xl"
  >
    <div className="text-purple-600 text-3xl mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </motion.div>
);

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  link 
}: { 
  title: string; 
  description: string; 
  tech: string[]; 
  link: string 
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-xl"
  >
    <h4 className="text-xl font-semibold mb-3">{title}</h4>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
        >
          {t}
        </span>
      ))}
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 hover:text-purple-700 font-medium"
    >
      View Project →
    </a>
  </motion.div>
);

// const ExperienceCard = ({ 
//   title, 
//   company, 
//   period, 
//   description 
// }: { 
//   title: string; 
//   company: string; 
//   period: string; 
//   description: string 
// }) => (
//   <motion.div
//     whileHover={{ x: 5 }}
//     className="glass-card p-6 rounded-xl"
//   >
//     <h4 className="text-xl font-semibold mb-2">{title}</h4>
//     <div className="text-purple-600 font-medium mb-2">{company}</div>
//     <div className="text-gray-500 text-sm mb-3">{period}</div>
//     <p className="text-gray-600">{description}</p>
//   </motion.div>
// );

export default About;