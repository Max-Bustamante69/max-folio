import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Skill icons - using SVG for better performance and consistency
const skillIcons = {
  react: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5502.0445h-.4908l-.0823-.0516A.3986.3986 0 0 1 8.574 15.847l-.0493-.0735.0063-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5429-.0517.4823 0 .5401.0187.6733.2466.0422.0746 1.2662 1.9135 2.7371 4.0873l2.6686 3.9543 1.9104 2.9046.0985-.0608c.8881-.5592 1.8277-1.3534 2.5849-2.1891 1.8508-2.0421 3.0346-4.6002 3.4397-7.4314.096-.6591.1082-.8531.1082-1.7475s-.012-1.0884-.1082-1.7474c-.652-4.506-3.8591-8.2919-8.2087-9.6945C13.3595.2129 12.5388.0418 11.5725 0z"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-3.032.284-7.076.675-9.555-.84.685-2.473.984-2.473.984s-.446-1.382.743-2.566c.985-.982 2.274-1.762 3.065-2.313.897-.627 1.743-1.436 2.378-2.582.635-1.147.97-2.441 1.052-3.767l.093-.72z"/>
    </svg>
  )
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

        {/* Personal Projects Preview */}
        <div className="mt-16 space-y-8 animate-fade-in-up">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Personal Projects</h3>
            <p className="text-muted-foreground">Side projects showcasing different technologies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Wordle Clone',
                description: 'Word guessing game built with vanilla JavaScript',
                tech: 'Vanilla JS',
                url: 'https://wordle-max.vercel.app/',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                name: 'Professor Evaluation',
                description: 'Rating system for EAFIT University professors',
                tech: 'React',
                url: 'https://4-stars.vercel.app/',
                color: 'from-blue-400 to-purple-500'
              },
              {
                name: 'Conway\'s Game of Life',
                description: 'Interactive cellular automaton simulation',
                tech: 'Canvas API',
                url: 'https://conway-s-game-of-life-js-bice.vercel.app/',
                color: 'from-green-400 to-cyan-500'
              }
            ].map((project, index) => (
              <Card key={project.name} className="card-glow hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.color} mb-4`} />
                  <h4 className="font-semibold text-foreground mb-2">{project.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">{project.tech}</Badge>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow text-sm font-medium link-animated"
                    >
                      View Project →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;