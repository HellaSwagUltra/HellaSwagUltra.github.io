const stats = [
  { value: '61', label: 'languages' },
  { value: '163,138', label: 'benchmark items' },
  { value: '2,926', label: 'expert-verified Gold' },
  { value: '62.5%', label: 'top reported Gold score' },
];

const pipeline = [
  {
    number: '01',
    title: 'Find local knowledge',
    text: 'Filter Wikidata and native-language Wikipedia for culturally grounded concepts with real commonsense potential.',
    tag: 'Knowledge extraction',
  },
  {
    number: '02',
    title: 'Structure two hidden facts',
    text: 'Turn each fact into a premise, consequence, and subtle conflict—then pair two logically independent constraints.',
    tag: 'Commonsense generation',
  },
  {
    number: '03',
    title: 'Roll out the story',
    text: 'Weave both premises into a natural context and generate fluent continuations that quietly honor or violate them.',
    tag: 'Test rollout',
  },
];

const modelScores = [
  { model: 'Gemini 2.5 Pro', score: 62.53, kind: 'Proprietary' },
  { model: 'Claude Sonnet 4', score: 60.14, kind: 'Proprietary' },
  { model: 'Claude Opus 4', score: 59.57, kind: 'Proprietary' },
  { model: 'GPT-4o', score: 50.64, kind: 'Proprietary' },
  { model: 'Qwen 2.5 32B', score: 50.22, kind: 'Open · instruct' },
  { model: 'Gemma 3 27B', score: 49.26, kind: 'Open · base' },
];

const goldLanguages = [
  { code: 'EN', name: 'English', count: '766' },
  { code: 'AR', name: 'Arabic', count: '652' },
  { code: 'DE', name: 'German', count: '605' },
  { code: 'FR', name: 'French', count: '568' },
  { code: 'ID', name: 'Indonesian', count: '335' },
];

const languageCloud = [
  '中文', 'Español', 'العربية', 'English', 'Português', 'Русский', '日本語',
  '한국어', 'Deutsch', 'Français', 'Italiano', 'Tiếng Việt', 'Türkçe', 'Bahasa Melayu',
  'اردو', 'Bahasa Indonesia', 'فارسی', 'Polski', 'ไทย', 'Українська', 'Nederlands',
  'Ελληνικά', 'עברית', 'हिन्दी', 'বাংলা', 'தமிழ்', 'Kiswahili', 'Gaeilge',
];

const authors = [
  'Wenhan Han¹', 'Yifan Zhang²', 'Binbin Liu³', 'Mykola Pechenizkiy¹',
  'Yin Zheng³', 'Meng Fang⁴˒¹',
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="HellaSwagUltra home">
          <span>HellaSwag</span><strong>Ultra</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#benchmark">Benchmark</a>
          <a href="#method">Method</a>
          <a href="#results">Results</a>
          <a href="#paper">Paper</a>
        </nav>
        <a className="header-link" href="https://github.com/aialt/hellaswagultra" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A multilingual commonsense benchmark</p>
          <h1>Think you’ve solved commonsense reasoning?</h1>
          <p className="hero-kicker">Try <em>HellaSwagUltra.</em></p>
          <p className="hero-deck">
            61 languages. Local cultural knowledge. Subtle violations that reveal
            gaps in multilingual language understanding.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://github.com/aialt/hellaswagultra" target="_blank" rel="noreferrer">
              Explore the dataset <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="/hellaswagultra-paper.pdf">
              Read the paper <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <article className="sample-card" id="local-example" aria-labelledby="local-example-title">
          <div className="sample-topline">
            <span><b>ZH</b> · Local commonsense · China high-speed rail</span>
            <span className="sample-number">Paper example · 1 of 4</span>
          </div>
          <p className="sample-label">Choose the most plausible continuation</p>
          <h2 className="sample-title" id="local-example-title">Arrival at 10:30</h2>
          <p className="sample-context-zh" lang="zh-CN">
            林悦紧锁眉头，指尖在手机屏幕上划过，对身旁几次欲言又止的陈默置若罔闻。他脚边的礼品袋随着车厢的轻微震动而摇晃。陈默拿出手机，点开那两张电子车票，再次确认了“预定到站时间：上午10点30分”的字样。他收起手机，目光无意识地落在了车厢前方的电子显示屏上，上面滚动的实时时速数字刚刚跳过300。
          </p>
          <p className="sample-context">
            Lin Yue’s brows were tightly furrowed, her fingertips sliding across the
            screen of her phone, ignoring Chen Mo’s several attempts to speak. The
            gift bag at his feet swayed slightly with the faint vibration of the
            carriage. Chen Mo checked their two e-tickets again: “Scheduled arrival
            time: 10:30 a.m.” His gaze drifted to the front display, where the
            scrolling real-time speed had just passed 300 km/h.
          </p>
          <fieldset className="sample-options">
            <legend>Four complete candidate continuations</legend>
            <label className="sample-option">
              <input type="radio" name="local-example-answer" value="A" />
              <span className="option-letter">A</span>
              <span className="option-copy">
                The carriage broadcast began announcing the arrival information,
                and the display changed to 10:30 a.m. The train glided smoothly into
                the station; only when it came to a complete stop did the surface of
                the half-full bottle beside him ripple slightly.
              </span>
            </label>
            <label className="sample-option">
              <input type="radio" name="local-example-answer" value="B" />
              <span className="option-letter">B</span>
              <span className="option-copy">
                The train began to slow, but the full paper cup beside Lin Yue’s
                phone remained perfectly still. As they entered the platform, an
                opposite display showed that a train scheduled to depart at 10:40
                had already “Departed.”
              </span>
            </label>
            <label className="sample-option">
              <input type="radio" name="local-example-answer" value="C" />
              <span className="option-letter">C</span>
              <span className="option-copy">
                A rhythmic “clack-clack” echoed through the carriage. The front
                display changed to 10:30 a.m., the arrival announcement began, and
                the train glided into the platform at the same time.
              </span>
            </label>
            <label className="sample-option">
              <input type="radio" name="local-example-answer" value="D" />
              <span className="option-letter">D</span>
              <span className="option-copy">
                A periodic “clack-clack” echoed through the carriage. As the train
                slowed into the platform, they stepped out to find the opposite
                track empty and an electronic sign displaying “10:40” just going
                dark.
              </span>
            </label>
          </fieldset>
          <details className="sample-answer">
            <summary>Reveal the answer and its two hidden facts</summary>
            <div className="sample-answer-body">
              <p className="answer-key"><strong>A is correct.</strong> It is the only continuation consistent with both local constraints.</p>
              <div className="commonsense-facts">
                <div>
                  <span>Local fact 01 · Track construction</span>
                  <p>China’s high-speed railway tracks are continuously welded, so there is almost no jolting inside the carriage even at high speeds.</p>
                </div>
                <div>
                  <span>Local fact 02 · Timetabling</span>
                  <p>In China, high-speed trains are generally very punctual.</p>
                </div>
              </div>
              <p className="option-audit"><b>B</b> violates punctuality. <b>C</b> violates smooth running. <b>D</b> quietly violates both. Every option remains fluent; the failure is in what it implies.</p>
            </div>
          </details>
        </article>
      </section>

      <section className="stats" aria-label="Benchmark statistics">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section benchmark-section" id="benchmark">
        <div className="section-heading split-heading">
          <div>
            <p className="section-index">01 · The benchmark</p>
            <h2>Simple format.<br/><em>Deceptively hard.</em></h2>
          </div>
          <p className="section-intro">
            HellaSwagUltra keeps the familiar continuation task, but hides two
            commonsense constraints inside every scene. Distractors stay fluent;
            only their implications give them away.
          </p>
        </div>

        <div className="principles-grid">
          <article>
            <span className="principle-mark">A—B</span>
            <h3>Two facts, not one</h3>
            <p>Each item combines two independent pieces of commonsense so shallow cues are less useful.</p>
          </article>
          <article>
            <span className="principle-mark">≠</span>
            <h3>Conflict without negation</h3>
            <p>Wrong answers remain intrinsically plausible while subtly violating one embedded constraint.</p>
          </article>
          <article>
            <span className="principle-mark">地</span>
            <h3>Genuinely local</h3>
            <p>Scenarios reflect language-specific culture, routines, institutions, and social context.</p>
          </article>
        </div>

      </section>

      <section className="method-section" id="method">
        <div className="section method-inner">
          <div className="section-heading method-heading">
            <p className="section-index light">02 · Construction pipeline</p>
            <h2>From local knowledge<br/>to <em>quiet contradiction.</em></h2>
          </div>

          <div className="pipeline-grid">
            {pipeline.map((step) => (
              <article className="pipeline-step" key={step.number}>
                <div className="pipeline-topline"><span>{step.number}</span><small>{step.tag}</small></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="language-section" aria-labelledby="language-title">
        <div className="language-copy">
          <p className="section-index">Coverage</p>
          <h2 id="language-title">Built across the world,<br/><em>not translated from one corner.</em></h2>
          <p>
            Native-language data spans high-, mid-, and low-resource settings. The
            full 61-language collection covers more than 99% of the world when
            second-language speakers are included.
          </p>
        </div>
        <div className="language-cloud" aria-label="A selection of supported languages">
          {languageCloud.map((language, index) => (
            <span className={index % 5 === 0 ? 'accent' : ''} key={language}>{language}</span>
          ))}
        </div>
      </section>

      <section className="section results-section" id="results">
        <div className="section-heading split-heading results-heading">
          <div>
            <p className="section-index">03 · Results on Gold</p>
            <h2>The top model reported<br/>still gets <em>more than 1 in 3 wrong.</em></h2>
          </div>
          <div className="result-callout">
            <strong>62.53%</strong>
            <span>top accuracy among models evaluated in the paper</span>
          </div>
        </div>

        <div className="score-panel">
          <div className="score-scale" aria-hidden="true"><span>0</span><span>25</span><span>50</span><span>75</span><span>100%</span></div>
          {modelScores.map((item) => (
            <div className="score-row" key={item.model}>
              <div className="score-name"><strong>{item.model}</strong><small>{item.kind}</small></div>
              <div className="score-track" aria-label={`${item.model}: ${item.score}%`}>
                <span style={{ width: `${item.score}%` }} />
                <b style={{ left: `${item.score}%` }}>{item.score.toFixed(1)}</b>
              </div>
            </div>
          ))}
          <div className="human-line" style={{ left: '73%' }}><span>Human · no hints 73%</span></div>
        </div>

        <div className="results-notes">
          <p><span>01</span> Larger models improve steadily—the benchmark avoids the abrupt collapse seen with instruction-heavy formats.</p>
          <p><span>02</span> Performance drops on low-resource languages, revealing a gap hidden by English-centric evaluation.</p>
          <p><span>03</span> The Gold subset remains hard after expert correction, so the challenge is not simply annotation noise.</p>
        </div>
      </section>

      <section className="gold-section">
        <div className="gold-copy">
          <p className="section-index light">HellaSwagUltra-Gold</p>
          <h2>Verified by people.<br/><em>Built to keep growing.</em></h2>
          <p>
            Every Gold item is reviewed by two native-language annotators. A third
            adjudicates disagreements before consensus. Gold anchors high-confidence
            comparisons while Silver provides broad diagnostic coverage.
          </p>
        </div>
        <div className="gold-languages">
          <div className="gold-list-head"><span>Language</span><span>Verified items</span></div>
          {goldLanguages.map((language) => (
            <div className="gold-language" key={language.code}>
              <span className="language-code">{language.code}</span>
              <strong>{language.name}</strong>
              <b>{language.count}</b>
            </div>
          ))}
          <div className="gold-total"><span>Total expert-verified</span><strong>2,926</strong></div>
        </div>
      </section>

      <section className="paper-section" id="paper">
        <div className="paper-title">
          <p className="section-index">04 · Paper & code</p>
          <h2>Think you have Solved<br/>Commonsense Reasoning?<br/><em>Try HellaSwagUltra.</em></h2>
        </div>
        <div className="paper-details">
          <div className="author-list">
            {authors.map((author) => <span key={author}>{author}</span>)}
          </div>
          <p className="affiliations">
            ¹ Eindhoven University of Technology · ² Nanjing University ·
            ³ Tsinghua University · ⁴ University of Liverpool
          </p>
          <div className="paper-actions">
            <a className="button button-primary" href="/hellaswagultra-paper.pdf">Download paper <span aria-hidden="true">↓</span></a>
            <a className="button button-ghost" href="https://github.com/aialt/hellaswagultra" target="_blank" rel="noreferrer">Dataset & code <span aria-hidden="true">↗</span></a>
          </div>
          <details className="citation-details">
            <summary>BibTeX citation</summary>
            <pre>{`@inproceedings{han2026hellaswagultra,
  title={Think you have Solved Commonsense Reasoning? Try HellaSwagUltra},
  author={Han, Wenhan and Zhang, Yifan and Liu, Binbin and Pechenizkiy, Mykola and Zheng, Yin and Fang, Meng},
  booktitle={Findings of the Association for Computational Linguistics: EMNLP 2026},
  year={2026},
  url={https://hellaswagultra.github.io/}
}`}</pre>
          </details>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#top"><span>HellaSwag</span><strong>Ultra</strong></a>
        <p>Multilingual commonsense is not solved yet.</p>
        <div><a href="mailto:meng.fang@liverpool.ac.uk">Contact</a><a href="https://github.com/aialt/hellaswagultra">GitHub ↗</a></div>
      </footer>
    </main>
  );
}
