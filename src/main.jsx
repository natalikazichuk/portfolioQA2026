import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import projects from './data/projects.json';
import skills from './data/skills.json';
import profile from './data/profile.json';
import experience from './data/experience.json';

const projectLinks = {
  'veteran-job-portal': 'https://github.com/natalikazichuk/veteran-jobs-portal-testing',
  navkolo: 'https://github.com/natalikazichuk/portfolioQA2026/blob/main/docs/navkolo/README.md',
  guru99: 'https://github.com/natalikazichuk/portfolioQA2026/blob/main/docs/guru99/README.md',
  'snake-eye': 'https://github.com/natalikazichuk/Snake-Eye',
  // демо-версія (1 клас, без реєстрації); повний код — natalikazichuk/schoolkingdoms
  schoolkingdoms: 'https://natalikazichuk.github.io/schoolkingdoms-demo/',
  rozklad: 'https://natalikazichuk.github.io/rozklad/'
};

const projectTitle = Object.fromEntries(projects.map(p => [p.id, p.title]));
const jobShort = Object.fromEntries(experience.jobs.map(j => [j.id, j.short]));
const softSkills = skills.soft.map(s => s.name);
const skillsFromJob = id => [...skills.hard, ...skills.soft].filter(s => s.background.includes(id)).map(s => s.name);

function SkillLinks({ projects: ids, background, caseLink }) {
  if (!ids.length && !background.length) return <div className="skill-links"><span className="chip-soon">Case study coming soon</span></div>;
  return <div className="skill-links">
    {ids.map(id => projectLinks[id]
      ? <a className="chip-project" key={id} href={projectLinks[id]} target="_blank" rel="noopener noreferrer">{projectTitle[id]} ↗</a>
      : <b className="chip-project" key={id}>{projectTitle[id]}</b>)}
    {background.map(id => <a className="chip-job" key={id} href="#background">{jobShort[id]}</a>)}
    {caseLink && <a className="chip-project" href={caseLink.href} target="_blank" rel="noopener noreferrer">{caseLink.title} ↗</a>}
  </div>;
}

const checklists = [
  { id: 'login-form', title: 'Login form testing', fields: 'Email · Password · Confirm password · Forgot password / No account / Need help links · Remember me · Logout',
    meta: '77 checks · 10 sections · priority & severity · test data', pages: 4 }
];

const getView = () => (window.location.hash === '#recruiter' ? 'recruiter' : 'home');

function useView() {
  const [view, setView] = useState(getView);
  useEffect(() => {
    const onChange = () => setView(getView());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  useEffect(() => window.scrollTo(0, 0), [view]);
  return view;
}

function Header({ view }) {
  return (
    <header className="topbar">
      <a className="brand" href="#">
        <span className="brand-mark">QA</span>
        <span>NK</span>
      </a>
      <nav aria-label="Main navigation">
        {view === 'home' ? <>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#checklists">Checklists</a>
          <a href="#background">Background</a>
          <a href="#evidence">Evidence</a>
          <a href="#about">About</a>
        </> : <a href="#">← Portfolio</a>}
      </nav>
      <div className="header-actions">
        <span className="availability"><i /> AVAILABLE</span>
        <button type="button" className="header-print" onClick={()=>window.print()} aria-label="Print one-page summary (A4)">Print</button>
        <a className="header-cta" href="#recruiter">Recruiter <span>↗</span></a>
      </div>
    </header>
  );
}

function Metric({value,label}) {
  return <div className="metric"><strong>{value}</strong><span>{label}</span></div>;
}

function ProjectCard({p,index}) {
  const href = projectLinks[p.id];
  const style = p.image ? {'--shot': `url(${import.meta.env.BASE_URL}${p.image})`, '--shot-pos': p.imagePosition || 'center top'} : undefined;
  const cls = 'project-card'+(p.image?' has-shot':'')+(href?'':' is-disabled');
  const Tag = href ? 'a' : 'div';
  const linkProps = href
    ? { href, target:'_blank', rel:'noopener noreferrer', 'aria-label':'Open ' + p.title + ' project' }
    : { 'aria-disabled':'true' };
  return (
    <Tag className={cls} style={style} {...linkProps}>
      <div className="project-top">
        <span className="project-number">0{index+1}</span>
        <span className="status">{p.status}</span>
      </div>
      <div className="project-content">
        <h3>{p.title}</h3>
        <p>{p.type}</p>
      </div>
      <div className="project-link">{href ? <>OPEN PROJECT <span>↗</span></> : 'DEMO COMING SOON'}</div>
    </Tag>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> QA ENGINEER PORTFOLIO</div>
          <h1>Find bugs.<br /><em>Build quality.</em></h1>
          <p className="hero-lead">Manual QA · API Testing · AI / LLM Evaluation</p>
          <p className="hero-text">{profile.summary}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">EXPLORE PROJECTS <span>↗</span></a>
            <a className="btn btn-ghost" href="#recruiter">RECRUITER MODE · 60 SEC</a>
          </div>
          <div className="hero-proof">
            <span>✓ User stories</span><span>✓ Test cases</span><span>✓ Bug reports</span><span>✓ API checks</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-glow" />
          <div className="panel-head"><span>QA STATUS</span><b>LIVE</b></div>
          <div className="terminal">
            <div><span className="dot green" /> SYSTEM CHECK <small>PASS</small></div>
            <div><span className="dot cyan" /> API VALIDATION <small>PASS</small></div>
            <div><span className="dot gold" /> BUG HUNT <small>ACTIVE</small></div>
            <div><span className="dot purple" /> AI EVALUATION <small>READY</small></div>
          </div>
          <div className="panel-score"><strong>QA</strong><span>evidence-driven<br />testing mindset</span></div>
        </div>
      </section>

      <section className="metrics" aria-label="Portfolio metrics">
        <Metric value={projects.length} label="PRODUCTS TESTED" />
        <Metric value="100+" label="TEST CASES" />
        <Metric value="20+" label="ISSUES FOUND" />
        <Metric value="50+" label="API CHECKS" />
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <div><div className="eyebrow">01 / EXPERIENCE</div><h2>QA Projects</h2></div>
          <p>Hands-on testing across web applications, a business SaaS, a banking app, data projects and an educational platform.</p>
        </div>
        <div className="project-grid">{projects.map((p,i)=><ProjectCard p={p} index={i} key={p.id}/>)}</div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <div><div className="eyebrow">02 / CAPABILITIES &amp; BACKGROUND</div><h2>QA Skills</h2></div>
          <p>Each skill is linked to the projects where I used it and to the job before QA where it comes from.</p>
        </div>
        <div className="skill-legend">
          <span><b className="chip-project">Project</b> applied in</span>
          <span><b className="chip-job">Job</b> comes from</span>
        </div>
        <div className="skill-groups">
          <div className="skill-group">
            <div className="skill-group-head"><span className="eyebrow">HARD / TECH SKILLS</span><small>{skills.hard.length}</small></div>
            {skills.hard.map(s=><div className="skill-card" key={s.name}>
              <div className="skill-head"><span>{s.icon} {s.name}</span>{s.level && <b>{s.level}%</b>}</div>
              {s.level && <div className="bar"><i style={{width:s.level+'%'}} /></div>}
              <p className="skill-note">{s.note}</p>
              <SkillLinks projects={s.projects} background={s.background} caseLink={s.caseLink} />
            </div>)}
          </div>
          <div className="skill-group">
            <div className="skill-group-head"><span className="eyebrow">SOFT SKILLS</span><small>{skills.soft.length}</small></div>
            {skills.soft.map(s=><div className="skill-card soft" key={s.name}>
              <div className="skill-head"><span>{s.name}</span></div>
              <dl className="skill-trace">
                <dt>Before QA</dt><dd>{s.from}</dd>
                <dt>In QA</dt><dd>{s.qa}</dd>
              </dl>
              <SkillLinks projects={s.projects} background={s.background} />
            </div>)}
          </div>
        </div>

        <div id="background" className="background-sub">
          <div className="sub-heading">
            <div><div className="eyebrow">WHERE IT COMES FROM</div><h3>Before QA</h3></div>
            <p>Banking, B2B sales and retail: working with customers, documents and processes is where my QA instincts come from.</p>
          </div>
          <div className="job-list">
            {experience.jobs.map(j=><article className="job-card" key={j.id}>
              <div className="job-meta"><span>{j.place}</span></div>
              <h3>{j.role}</h3>
              <p className="job-company">{j.company}</p>
              <p className="job-did">{j.did}</p>
              <div className="job-qa-label">USEFUL FOR QA</div>
              <ul>{j.qa.map(q=><li key={q.tag}><b className="qa-tag">{q.tag}</b><span>{q.text}</span></li>)}</ul>
              <div className="job-skills">
                <span>Skills it built</span>
                <div className="skill-links">{skillsFromJob(j.id).map(n=><b className="chip-skill" key={n}>{n}</b>)}</div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="checklists" className="section checklists-section">
        <div className="section-heading">
          <div><div className="eyebrow">03 / CHECKLISTS</div><h2>My Checklists</h2></div>
          <p>Printable A4 checklists I use for manual testing. Click a page to open it full size.</p>
        </div>
        {checklists.map(c => <article className="checklist-card" key={c.id}>
          <div className="checklist-head">
            <h3>{c.title}</h3>
            <p>{c.fields}</p>
            <span>{c.meta}</span>
          </div>
          <div className="a4-grid">
            {Array.from({ length: c.pages }, (_, i) => {
              const src = `${import.meta.env.BASE_URL}checklists/${c.id}/page-${i + 1}.webp`;
              return <a className="a4-page" key={i} href={src} target="_blank" rel="noopener noreferrer" aria-label={`${c.title}, A4 page ${i + 1} of ${c.pages}`}>
                <img src={src} alt={`${c.title} checklist, A4 page ${i + 1} of ${c.pages}`} loading="lazy" width="1240" height="1754" />
                <span>A4 · {i + 1}/{c.pages}</span>
              </a>;
            })}
          </div>
        </article>)}
      </section>

      <section id="evidence" className="section evidence-section">
        <div className="evidence-card">
          <div className="evidence-copy">
            <div className="eyebrow">04 / PROOF OF WORK</div>
            <h2>One bug can change the whole story.</h2>
            <p>{profile.highlights[0]}</p>
            <div className="bug-row">
              <span className="severity">HIGH</span>
              <span>Guest → Application → Recruiter</span>
              <span className="verified">✓ FIX VERIFIED</span>
            </div>
          </div>
          <div className="bug-mark">BUG<br />FOUND</div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div><div className="eyebrow">05 / ABOUT</div><h2>Quality is not an accident.</h2></div>
        <div>
          <p>{profile.summary}</p>
          <div className="about-points">
            {profile.highlights.slice(1).map((h,i)=><div key={h}><span>0{i+1}</span><p>{h}</p></div>)}
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div><div className="eyebrow">READY TO TALK?</div><h2>Let's build better software.</h2></div>
        <a className="btn btn-primary" href="#recruiter">VIEW RECRUITER MODE <span>↗</span></a>
      </section>
    </>
  );
}

const PORTFOLIO_URL = 'natalikazichuk.github.io/portfolioQA2026';
const contacts = [
  ['Email', 'natalikazichuk@gmail.com', 'mailto:natalikazichuk@gmail.com'],
  ['Portfolio', PORTFOLIO_URL, 'https://' + PORTFOLIO_URL + '/'],
  ['GitHub', 'github.com/natalikazichuk', 'https://github.com/natalikazichuk'],
  ['LinkedIn', 'linkedin.com/in/natali-kazichuk-960153249', 'https://www.linkedin.com/in/natali-kazichuk-960153249']
];
const resumeProjects = [
  ['veteran-job-portal', 'Job platform · 3 roles', 'Test plan, 24 user stories, 69 scenarios, 40 test cases, RTM 24/24. Found a High bug: guest applications not visible to the recruiter; fix verified.'],
  ['navkolo', 'Business SaaS · accounting & trade', 'Exploratory and API testing (Postman, DevTools) without a spec. 9 defects, 2 High: e.g. registration accepted a mismatched password confirmation.'],
  ['guru99', 'Banking web app', '30 test cases for the New Customer form (17 pass / 13 fail), Jira bug reports, retest on v2.0. Found a raw DB error exposing the DB user.'],
  ['schoolkingdoms', 'Gamified learning platform', 'QA + product owner. Test automation in CI on every PR: Playwright smoke of every page, 7 e2e flows with a stubbed backend, unit tests, mutation checks; bug report SK-BUG-143 fixed.']
];

/* Резюме: на екрані в Recruiter mode і на друк (одна сторінка A4). */
function Resume({ view }) {
  const onScreen = view === 'recruiter';
  return <article className={'resume' + (onScreen ? ' on-screen' : '')} aria-hidden={onScreen ? undefined : 'true'}>
    <header className="rs-head">
      <div>
        <h1>Natali Kazichuk</h1>
        <p className="rs-role">{profile.role} · API Testing · Test Design</p>
      </div>
      <ul className="rs-contacts">
        {contacts.map(([label, text, href]) => <li key={label}><span>{label}</span> <a href={href} target="_blank" rel="noopener noreferrer" tabIndex={onScreen ? undefined : -1}>{text}</a></li>)}
      </ul>
    </header>
    <p className="rs-summary">{profile.summary}</p>

    <div className="rs-cols">
      <div className="rs-main">
        <section>
        <h2>QA experience</h2>
        {resumeProjects.map(([id, type, text]) => <div className="rs-item" key={id}>
          <div className="rs-item-head"><b>{projectTitle[id]}</b><span>{type}</span></div>
          <p>{text}</p>
        </div>)}
        </section>

        <section>
        <h2>Work experience before QA</h2>
        {experience.jobs.map(j => <div className="rs-item" key={j.id}>
          <div className="rs-item-head"><b>{j.role}</b><span>{j.company} · {j.place}</span></div>
          <p>{j.brief}</p>
          <p className="rs-muted">Useful for QA: {j.qa.map(q => q.tag).join(' · ')}</p>
        </div>)}
        </section>
      </div>

      <aside className="rs-side">
        <h2>Hard skills</h2>
        <ul className="rs-list">{skills.hard.map(s => <li key={s.name}>{s.name}</li>)}</ul>
        <h2>Tools</h2>
        <p>{[...profile.tools, 'Jira'].join(' · ')}</p>
        <h2>QA artifacts</h2>
        <p>Test plans · user stories &amp; acceptance criteria · test cases · checklists · RTM · bug reports</p>
        <h2>Soft skills</h2>
        <ul className="rs-list">{softSkills.map(s => <li key={s}>{s}</li>)}</ul>
      </aside>
    </div>
  </article>;
}

function Recruiter() {
  return <div className="recruiter-bar">
    <span className="eyebrow">RECRUITER MODE · CV</span>
    <div className="recruiter-actions">
      <button type="button" className="btn btn-primary" onClick={() => window.print()}>PRINT / SAVE PDF (A4)</button>
      <a className="btn btn-ghost" href="#">← FULL PORTFOLIO</a>
    </div>
  </div>;
}

function App() {
  const view=useView();
  return <div className="site">
    <a className="skip" href="#content">Skip to content</a>
    <Header view={view}/>
    <main id="content">{view==='recruiter'?<Recruiter/>:<Home/>}</main>
    <Resume view={view}/>
    <footer><span>QA NK</span><span>Manual QA · API · AI Evaluation</span><span>Quality is not an accident.</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
