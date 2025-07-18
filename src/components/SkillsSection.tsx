import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Skill icons - using SVG for better performance and consistency
const skillIcons = {
  react: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),
  nextjs: (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064m-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"
      />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path
          fill="url(#skillIconsPythonDark0)"
          d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716a8.71 8.71 0 0 1-8.716-8.716a8.71 8.71 0 0 1 8.716-8.717"
        />
        <path
          fill="url(#skillIconsPythonDark1)"
          d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716a8.71 8.71 0 0 1 8.717-8.717a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716"
        />
        <defs>
          <linearGradient
            id="skillIconsPythonDark0"
            x1="47.22"
            x2="146.333"
            y1="46.896"
            y2="145.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#387EB8" />
            <stop offset="1" stop-color="#366994" />
          </linearGradient>
          <linearGradient
            id="skillIconsPythonDark1"
            x1="108.056"
            x2="214.492"
            y1="109.905"
            y2="210.522"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFE052" />
            <stop offset="1" stop-color="#FFC331" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-3.032.284-7.076.675-9.555-.84.685-2.473.984-2.473.984s-.446-1.382.743-2.566c.985-.982 2.274-1.762 3.065-2.313.897-.627 1.743-1.436 2.378-2.582.635-1.147.97-2.441 1.052-3.767l.093-.72z" />
    </svg>
  ),
};

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Languages';
  icon: keyof typeof skillIcons;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: 'React',
    category: 'Frontend',
    icon: 'react',
    level: 'Expert',
    description: 'Building complex, scalable web applications with modern React patterns',
    color: 'text-cyan-400'
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    icon: 'javascript',
    level: 'Expert',
    description: 'ES6+, async/await, functional programming, and modern JS patterns',
    color: 'text-yellow-400'
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: 'nextjs',
    level: 'Advanced',
    description: 'Full-stack React framework with SSR, API routes, and optimization',
    color: 'text-foreground'
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    icon: 'typescript',
    level: 'Advanced',
    description: 'Type-safe development with interfaces, generics, and advanced types',
    color: 'text-blue-400'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'tailwind',
    level: 'Expert',
    description: 'Utility-first CSS framework for rapid UI development',
    color: 'text-cyan-300'
  },
  {
    name: 'Python',
    category: 'Languages',
    icon: 'python',
    level: 'Intermediate',
    description: 'Backend development, automation, and data processing',
    color: 'text-green-400'
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: 'mongodb',
    level: 'Advanced',
    description: 'NoSQL database design, aggregation pipelines, and performance optimization',
    color: 'text-green-500'
  }
];

const additionalSkills = [
  { name: 'Material UI', category: 'Frontend' },
  { name: 'Radix UI', category: 'Frontend' },
  { name: 'Shadcn/ui', category: 'Frontend' },
  { name: 'Styled Components', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'SQL', category: 'Database' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'Stripe', category: 'Tools' },
  { name: 'Vercel', category: 'Tools' },
  { name: 'React Query', category: 'Frontend' },
  { name: 'React Router', category: 'Frontend' }
];

const SkillsSection = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Beginner': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and beautiful web applications
          </p>
        </div>

        {/* Primary Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="card-glow hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Icon */}
                <div className="mx-auto w-16 h-16 glow-effect group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-full h-full ${skill.color}`}>
                    {skillIcons[skill.icon]}
                  </div>
                </div>

                {/* Skill Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                    <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`} />
                    <span className="text-sm text-muted-foreground">{skill.level}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 delay-300`}
                    style={{ 
                      width: skill.level === 'Expert' ? '95%' : 
                            skill.level === 'Advanced' ? '80%' : 
                            skill.level === 'Intermediate' ? '65%' : '40%' 
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Additional Technologies</h3>
            <p className="text-muted-foreground">Other tools and technologies I work with</p>
          </div>

          <Card className="card-glow">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {additionalSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="bg-muted/30 rounded-xl p-4 text-center hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="font-medium text-sm text-foreground mb-1">{skill.name}</div>
                    <div className="text-xs text-muted-foreground">{skill.category}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      
      </div>
    </section>
  );
};

export default SkillsSection;