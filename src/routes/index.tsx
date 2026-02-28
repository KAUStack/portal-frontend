import { createFileRoute } from '@tanstack/react-router'
import {
    Zap,
    SaudiRiyal,
    Download,
    GitBranch,
    RefreshCw,
    KeyRound,
    Cloudy,
    TrendingUp,
    Megaphone,
    Sigma,
    Calculator,
    Plus,
    LogIn, Send,

} from 'lucide-react'

import { ArrowRight, Layers, Code2, Users, Rocket, Search, Calendar, BookOpen, GraduationCap, ExternalLink } from 'lucide-react';
import LightRays from '../components/LightRays';

import { Sparkles } from '../components/animate-ui/icons/sparkles';
import {Particles} from "@/components/ui/particles.tsx";
import {TopographyBackground} from "@/components/ui/topography.tsx";

export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Simplified */}
      <section className="relative py-32 md:py-20">
        {/* Light Rays from react bits background, hidden in white mode */}
        <div className="absolute inset-0 dark:block hidden">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00a63e"
            raysSpeed={1}
            lightSpread={1.2}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.05}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1.1}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 z-10">

          {/* Main headline with glow effect */}
          <div className="text-center max-w-5xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Your Academic
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                Ecosystem
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Access all your student services in one unified platform
            </p>
          </div>
        </div>
      </section>

      {/* Official KAUStack Services */}
      <section className="relative py-16 border-t border-primary/10">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-8 h-8 text-primary drop-shadow-[0_0_12px_rgba(0,255,136,0.5)]" />
              <h2 className="text-3xl md:text-4xl font-bold">Official Stack Services</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Core services built and maintained by the KAUStack team
            </p>
          </div>

          {/* Service cards - Large, accessible */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'KAUIndex',
                tagline: 'Course & Section Search',
                desc: 'Find courses and sections with advanced filtering for a powerful searching experience',
                icon: Search,
                status: 'Live',
                link: 'https://kauindex.com',
                color: 'primary',
              },
              {
                name: 'KAUPlanner',
                tagline: 'Schedule Builder',
                desc: 'Plan your semester with visual conflict detection',
                icon: Calendar,
                status: 'Live',
                link: 'https://kauindex.com/planner',
                color: 'accent',
              },
              {
                name: 'KAUGroups',
                tagline: 'Student Communities',
                desc: 'Find Whatsapp groups based on your own schedule with ease',
                icon: Users,
                status: 'Beta',
                link: '#',
                color: 'primary',
              },

              {
                name: 'KAUDevs',
                tagline: 'Developer Resources',
                desc: 'Learn how to build on the stack, access documentation, and learn for free',
                icon: Code2,
                status: 'Coming Soon',
                link: '#',
                color: 'primary',
              },

              {
                name: 'KAUSubjects',
                tagline: 'Subject Explorer',
                desc: 'Explore subjects, rate, and review them with the community',
                icon: BookOpen,
                status: 'Coming Soon',
                link: '#',
                color: 'primary',
              },
            ].map((service, index) => (
              <a
                key={index}
                href={service.link}
                className={`group relative block p-8 bg-card from-card/90 to-card/70 backdrop-blur-xl border-2 border-primary/20 rounded-sm hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-primary/20 ${
  service.status === 'Live'
    ? 'border-primary/40 hover:border-primary/60'
    : service.status === 'Beta'
    ? 'border-primary/40 hover:border-accent/60'
    : service.status === 'Coming Soon'
    ? 'border-dashed border-muted/30 opacity-95'
    : ''
}`}
              >

                <div className="relative">
                  {/* Status badge */}
                  <div className="absolute -top-4 -right-4">
                    <div className={`px-3 py-1 ${service.status === 'Live' ? 'hidden bg-primary/20 border-primary/40' : service.status === 'Beta' ? 'bg-accent/20 border-accent/40' : 'bg-muted/20 border-border'} border rounded-sm`}>
                      <span className={`text-xs font-bold ${service.status === 'Live' ? 'text-primary' : service.status === 'Beta' ? 'text-accent' : 'text-muted-foreground'}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ">
                    <service.icon className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" />
                  </div>

                  <div className="mb-6 ">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-center">{service.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3 text-center">{service.tagline}</p>
                    <p className="text-muted-foreground text-center">{service.desc}</p>
                  </div>
                  {/* Access button */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <span className="text-sm font-semibold text-primary">
                      {service.status === 'Coming Soon' ? 'Launching Soon' : 'Open Service'}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by KAUStack */}
      <section className="relative py-16 border-t border-primary/10">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-accent drop-shadow-[0_0_12px_rgba(10,77,46,0.5)]" />
              <h2 className="text-3xl md:text-4xl font-bold">Powered by KAUStack</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Student projects sponsored and supported by our infrastructure
            </p>
          </div>

          {/* Community project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Schedly',
                desc: 'Generate all possible class schedules and pick the best one, using the raw power of algorithms.',
                author: 'Yasir Alghamdi',
                icon: Sigma,
                link: 'http://schedly.y-tools.xyz/',
              },
              {
                name: 'GPA Calculator',
                desc: 'Calculate your GPA and FCIT acceptance grades.',
                author: 'Yasir Alghamdi',
                icon: Calculator,
                link: 'https://fcit-calc.y-tools.xyz/',
              },
              {
                name: 'Grade Calculator',
                desc: 'GPA and grade prediction tool',
                author: 'Math Society',
                icon: GraduationCap,
                link: '#',
              },
              {
                name: 'Your Project Here',
                desc: 'The stack is incomplete without you. Build the next essential tool and claim this spot.',
                author: '???',
                icon: Plus,
                link: '#',
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                className={`group relative block p-6 bg-card/60 backdrop-blur-xl border border-border rounded-2xl hover:border-accent/40 hover:scale-[1.02] transition-all duration-300 ${project.name === 'Your Project Here' ? 'border-dashed border-2 opacity-80 hover:opacity-100' : 'border-solid'}`}
              >
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
                    <project.icon className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>

                  {/* Author */}
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-sm2 text-muted-foreground">by {project.author}</p>
                  </div>

                </div>
              </a>
            ))}
          </div>

          {/* Call to action for developers */}
          <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-xl border border-accent/20 rounded-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Want to build with us?</h3>
                <p className="text-muted-foreground">Get your project featured here with free hosting, infrastructure, and tech support</p>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('developers');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                aria-label="Scroll to Developers section"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-sm hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg whitespace-nowrap cursor-pointer"
              >
                <span className="font-semibold">Read More! </span>
                <Rocket className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Solution Section - Mind Blowing */}
      <section className=" relative py-32 border-t border-primary/10">

          <TopographyBackground
              className="absolute inset-0 z-0 pointer-events-none hidden dark:absolute dark:block"
              lineColor="#001a0d"
              backgroundColor="#000000"
          />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">


            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The only
              <span className="from-primary to-accent bg-clip-text text-transparent bg-gradient-to-r mx-3">
                Stack
              </span>
              you need
            </h2>

            <p className="text-xl text-muted-foreground">
                Open source by design. Student-first by mission. The infrastructure KAU Students deserve.            </p>
          </div>

          {/* Feature List - Clean & Minimal */}
          <div className="max-w-5xl mx-auto mb-20 space-y-8">
            {[
              {
                icon: GitBranch,
                title: 'Open Source First',
                desc: 'KAUStack is built in the open, we have nothing to hide, and everything to show, every line of code is readable, auditable, and improvable.',
                metric: 'For The Greater Good'
              },
              {
                icon: SaudiRiyal,
                title: 'Truly Free, Forever',
                desc: 'Education support shouldn’t have a paywall. All services are free, forever.',
                metric: 'You Can Never Beat Free'
              },
              {
                icon: RefreshCw,
                title: 'Smart Sync',
                desc: 'Schedules, preferences, and data flow seamlessly across the entire KAUStack ecosystem in real time. Update once, reflect everywhere.',
                metric: 'Live Updates'
              },
              {
                icon: Users,
                title: 'A Community Effort',
                desc: 'This isn\'t a corporate project, It’s built by your peers who face the same challenges you do every day.',
                metric: '1000+ Users'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-8 p-8 border-l-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:pl-10"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <feature.icon className="w-8 h-8 text- drop-shadow-[0_0_12px_rgba(0,255,136,0.5)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Central Value Proposition, will be used and added for the login sign in page */}
          <div className="max-w-5xl mx-auto">
            <div className="relative p-12 bg-background from-card/90 to-card/60 backdrop-blur-xl border-2 border-primary/30 rounded-3xl shadow-2xl shadow-primary/10">

              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl mb-6 shadow-lg shadow-primary/20">
                    <Layers className="w-10 h-10 text-primary drop-shadow-[0_0_16px_rgba(0,255,136,0.6)]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Single Sign-On for Everything</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    One account. One password. Instant access to every service in the ecosystem.
                  </p>
                </div>

                {/* Visual representation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'KAUIndex', icon: Search },
                    { name: 'KAUPlanner', icon: Calendar },
                    { name: 'KAUGroups', icon: Users },
                    { name: 'More...', icon: Sparkles },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="p-4 bg-card/80 border border-primary/20 rounded-xl text-center hover:border-primary/40 transition-all"
                    >
                      <service.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">{service.name}</p>
                    </div>
                  ))}
                </div>


                  <div className="flex justify-center items-center mt-12 w-full gap-10">
                      <button
                          onClick={() => {
                              const el = document.getElementById('developers');
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                          aria-label="Scroll to Developers section"
                          className="px-8 py-4 bg-accent text-accent-foreground rounded-sm hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg whitespace-nowrap cursor-pointer"
                      >
                          <span className="font-semibold">Log in / Sign in </span>
                          <LogIn className="w-5 h-5" />
                      </button>
                  </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      {/* For Developers Section - Epic */}
      <section id='developers' className="relative py-32 border-t border-primary/10 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 border border-accent/40 rounded-full mb-8">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wide">For Student Developers</span>
              </div>

              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Build the Future
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  With Us
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8">
                We provide world-class infrastructure, hosting, technical support, and visibility for ambitious student projects.
              </p>

              <div className='inline-flex gap-6'>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                  <span className="font-semibold">Contact Us</span>
                  <Send className="w-5 h-5" />
                </button>

                <a href='/KAUStack-1-1.pdf' target="_blank" rel="noopener noreferrer"
                className="px-8 pointer-events-auto py-4 bg-foreground text-primary-foreground rounded-sm hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                  <span className="font-semibold">Download The Booklet</span>
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Cloudy, label: 'Free Hosting', desc: 'Spin up containers, host APIs, ship apps without the overhead, and pay absolutely nothing.' },
                { icon: KeyRound, label: 'Unified Auth', desc: 'Stop rebuilding login screens. Use our secure, pre-built student authentication and APIs to ship your features faster.' },
                { icon: TrendingUp, label: 'Skill Stacking', desc: 'Don’t just code for grades. Ship production software, contribute to open source, and build a portfolio that gets you hired.' },
                { icon: Megaphone, label: 'Instant Audience', desc: 'Skip the marketing struggle. Stack your app on our ecosystem and reach thousands of students Immediately.' },
              ].map((feature, index) => (
                <div key={index} className="p-8 bg-card/80 backdrop-blur-xl border border-primary/20 rounded-sm hover:border-primary/40 hover:scale-105 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary mb-4 drop-shadow-[0_0_12px_rgba(0,255,136,0.4)]" />
                  <h3 className="text-lg font-semibold mb-1">{feature.label}</h3>
                  <p className="text-md text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Grand */}
      <section className="relative py-32 border-t border-primary/10">

        <div className="absolute inset-0" />

          <div className="absolute inset-0 z-0 hidden dark:absolute dark:block">
              <Particles className="absolute inset-0" quantity={200} staticity={30} />
          </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">


          <div className="max-w-4xl mx-auto">


            <Sparkles animateOnView animateOnViewOnce={false} animation="path-loop" animateOnViewMargin="0px" className="w-26 h-26 text-primary mx-auto mb-8 drop-shadow-[0_0_20px_rgba(0,255,136,0.5)]" />

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Just the Beginning
            </h2>

            <p className="text-2xl text-muted-foreground mb-12">
              Our ecosystem is expanding. More services. More features. More possibilities.
              <br />
              <span className="text-foreground font-medium">Join us on this journey.</span>
            </p>

          </div>
        </div>
      </section>

      {/* Footer - Sleek */}
      <footer className="relative py-10 border-t border-primary/10 bg-card/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
						{<img
							src="/kaustack_logo.svg"
							alt="KAU Logo"
							className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
						/>}
              <div>
                <div className="font-bold text-xl">KAUStack</div>
                <div className="text-xs text-muted-foreground">Student-Powered Innovation</div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground text-center">
              Built by students, for students at King Abdulaziz University
            </p>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a href="https://github.com/KAUStack" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://x.com/KauIndex" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-primary/10">
            <p className="text-sm text-muted-foreground">
              © 2026 KAUStack. Built with <span className="text-primary">❤</span> in Jeddah.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
