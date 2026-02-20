<script lang="ts">
  const CURRENT_YEAR = new Date().getFullYear();
  const CAREER_START_YEAR = 2011;
  const COPYRIGHT_START_YEAR = 2018;
  const careerYears = Math.max(0, CURRENT_YEAR - CAREER_START_YEAR);
</script>

<svelte:head>
  <title>Jeongbin Cero Choe</title>
  <meta
    name="description"
    content="Jeongbin Cero Choe (최정빈)"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Public+Sans:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="page">
  <header class="header">
    <a href="/"><h1>Jeongbin Cero Choe</h1></a>
    <h2>Anti-Apple</h2>
  </header>

  <section class="summary" aria-label="Career summary">
    <p>
      AI-focused product engineer with {careerYears}+ years of software engineering experience.
    </p>
    <p>
      Building practical AI services across mobile and web.
    </p>
  </section>

  <section class="section" aria-labelledby="skills-title">
    <h2 id="skills-title">Skills</h2>
    <dl class="skills-list">
      <div>
        <dt>Mobile</dt>
        <dd>Swift, Flutter, React Native, Objective-C</dd>
      </div>
      <div>
        <dt>Frontend</dt>
        <dd>React, Next.js, Svelte</dd>
      </div>
      <div>
        <dt>Backend & DB</dt>
        <dd>SvelteKit, Ruby on Rails, MySQL</dd>
      </div>
      <div>
        <dt>Languages & Tools</dt>
        <dd>Python, Ruby, C++, OpenCV, OpenGL, MATLAB</dd>
      </div>
    </dl>
  </section>

  <section class="section" aria-labelledby="interests-title">
    <h2 id="interests-title">Interests</h2>
    <p>
      Large Language Models · Mobile Development · Frontend Development · UI/UX Engineering · Alcohol
    </p>
  </section>

  <section class="section" aria-labelledby="experience-title">
    <h2 id="experience-title">Experience</h2>

    <ol class="timeline">
      <li>
        <p class="period">Apr 2023 - Present</p>
        <div class="content">
          <h3>AIPLE Inc. (acquired by XinobiAI Inc.)</h3>
          <p class="role">Co-Founder</p>
          <p class="services">Wevery · unswt</p>
        </div>
      </li>

      <li>
        <p class="period">Oct 2016 - Apr 2023</p>
        <div class="content">
          <h3>Acciio Inc. (acquired by Kakao Corp.)</h3>
          <p class="role">Software Engineer</p>
          <p class="services">voco · Tappy · Pharmacci · Kakao Home</p>
        </div>
      </li>

      <li>
        <p class="period">Apr 2014 - Oct 2016</p>
        <div class="content">
          <h3>IAMCOMPANY Inc. (acquired by NHN Corp.)</h3>
          <p class="role">Software Engineer</p>
          <p class="services">IAMSCHOOL</p>
        </div>
      </li>

      <li>
        <p class="period">Jun 2012 - Mar 2014</p>
        <div class="content">
          <h3>Kakao Corp.</h3>
          <p class="role">Software Engineer</p>
          <p class="services">Kakao Talk · Kakao Poll</p>
        </div>
      </li>

      <li>
        <p class="period">Mar 2011 - May 2012</p>
        <div class="content">
          <h3>ISEEYOU Co., Ltd. (acquired by Kakao Corp.)</h3>
          <p class="role">Software Engineer</p>
          <p class="services">Viva Game SDK · Alchemist Mobile</p>
        </div>
      </li>

      <li>
        <p class="period">Dec 2009 - Feb 2012</p>
        <div class="content">
          <h3>POSTECH Computer Vision Lab.</h3>
          <p class="role">Undergraduate Research Assistant</p>
          <p class="services">
            Kinect Reality · Tuberculosis-bacilli Recognizer
          </p>
        </div>
      </li>
    </ol>
  </section>

  <section class="section" aria-labelledby="education-title">
    <h2 id="education-title">Education</h2>
    <ol class="timeline">
      <li>
        <p class="period">Mar 2008 - Aug 2016</p>
        <div class="content">
          <h3>Pohang University of Science and Technology (POSTECH)</h3>
          <p class="role">BS in Computer Science</p>
        </div>
      </li>
    </ol>
  </section>

  <footer class="footer">
    <p>&copy; {COPYRIGHT_START_YEAR} - {CURRENT_YEAR} CERO.KR</p>
  </footer>
</main>

<style>
  :global(:root) {
    color-scheme: light dark;
    --bg: #f4f1ea;
    --paper: #fffdf9;
    --text: #171717;
    --muted: #5d5d5d;
    --accent: #8b5e34;
  }

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --bg: #111110;
      --paper: #1a1917;
      --text: #ede7dc;
      --muted: #b5aea2;
      --accent: #d39c66;
    }
  }

  :global(body) {
    margin: 0;
    background: linear-gradient(180deg, var(--bg), var(--paper));
    color: var(--text);
    font-family: "Public Sans", "Noto Sans KR", system-ui, sans-serif;
  }

  .page {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem 3rem;
  }

  .header {
    padding: 0 0 1.2rem;
  }

  .header h1 {
    margin: 0;
    font-family: "Newsreader", serif;
    font-size: clamp(2.05rem, 7vw, 3.7rem);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .header h2 {
    margin: 0.5rem 0 0;
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--muted);
  }

  .summary {
    margin-top: 1.15rem;
    max-width: 68ch;
    color: var(--muted);
    font-size: 0.96rem;
    line-height: 1.6;
  }

  .summary p {
    margin: 0;
  }

  .summary p + p {
    margin-top: 0.34rem;
  }

  .section {
    margin-top: 3.0rem;
  }

  .section h2 {
    margin: 0;
    font-size: 0.84rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
  }

  .section > p,
  .section > .skills-list {
    margin-top: 0.8rem;
  }

  .section > .timeline {
    margin-top: 0;
  }

  .section > p {
    margin-bottom: 0;
    color: var(--muted);
    line-height: 1.55;
    font-size: 0.94rem;
  }

  .skills-list {
    margin-bottom: 0;
    display: grid;
    gap: 0.55rem;
  }

  .skills-list div {
    display: grid;
    gap: 0.15rem;
  }

  .skills-list dt {
    margin: 0;
    color: var(--text);
    font-size: 0.88rem;
    font-weight: 600;
  }

  .skills-list dd {
    margin: 0;
    color: var(--muted);
    line-height: 1.5;
    font-size: 0.92rem;
  }

  .timeline {
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  }

  .timeline li {
    padding: 0.9rem 0;
    display: grid;
    gap: 0.45rem;
  }

  .period {
    margin: 0;
    color: var(--muted);
    font-size: 0.82rem;
    letter-spacing: 0.01em;
  }

  .content h3 {
    margin: 0;
    font-size: 1.04rem;
    line-height: 1.3;
  }

  .role {
    margin: 0.24rem 0 0;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .services {
    margin: 0.46rem 0 0;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (min-width: 740px) {
    .page {
      padding: 3rem 1.4rem 4rem;
    }

    .summary {
      font-size: 1.02rem;
    }

    .section h2 {
      font-size: 0.9rem;
    }

    .section > p {
      font-size: 0.98rem;
    }

    .skills-list dt {
      font-size: 0.92rem;
    }

    .skills-list dd {
      font-size: 0.96rem;
    }

    .skills-list div {
      grid-template-columns: 140px 1fr;
      gap: 0.7rem;
      align-items: start;
    }

    .timeline li {
      grid-template-columns: 160px 1fr;
      gap: 1.1rem;
      align-items: start;
    }

    .period {
      font-size: 0.86rem;
      padding-top: 0.12rem;
    }

    .content h3 {
      font-size: 1.1rem;
    }

    .role,
    .services {
      font-size: 0.95rem;
    }

    .footer p {
      font-size: 0.86rem;
    }
  }

  .footer {
    margin-top: 2.3rem;
  }

  .footer p {
    margin: 0;
    color: var(--muted);
    font-size: 0.82rem;
    line-height: 1.4;
  }
</style>
