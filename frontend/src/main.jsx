import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, ArrowRight, CheckCircle2, HeartPulse, Info, RotateCcw, ShieldAlert, Sparkles } from 'lucide-react';
import './styles.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const initial = {
  age: 52, sex: 1, cp: 0, trestbps: 130, chol: 230, fbs: 0, restecg: 1,
  thalach: 150, exang: 0, oldpeak: 1, slope: 1, ca: 0, thal: 2,
};

const fields = [
  ['age', 'Age', 'years'], ['trestbps', 'Resting blood pressure', 'mmHg'], ['chol', 'Cholesterol', 'mg/dL'],
  ['thalach', 'Maximum heart rate', 'bpm'], ['oldpeak', 'ST depression', ''],
];

function App() {
  const [form, setForm] = useState(initial);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const score = useMemo(() => result?.probability ?? 0, [result]);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  async function predict(e) {
    e.preventDefault();
    setLoading(true); setError(''); setResult(null);
    try {
      const body = Object.fromEntries(Object.entries(form).map(([k, v]) => [k, Number(v)]));
      const res = await fetch(`${API_BASE}/predict`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Prediction service unavailable');
      setResult(data);
    } catch (err) {
      setError(err.message || 'Unable to connect to the API.');
    } finally { setLoading(false); }
  }

  function reset() { setForm(initial); setResult(null); setError(''); }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><div className="brand-mark"><HeartPulse size={22}/></div><div><div className="brand-name">CardioLens</div><div className="brand-sub">Heart disease prediction</div></div></div>
        <div className="status-pill"><span className="status-dot"/> ML model ready</div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <div className="eyebrow"><Sparkles size={14}/> AI-ASSISTED HEALTH SCREENING</div>
            <h1>Understand your heart-health risk <span>in seconds.</span></h1>
            <p>Enter the clinical measurements below. Our trained Logistic Regression model estimates the likelihood of heart disease from the same 13-feature schema used in this project.</p>
          </div>
          <div className="hero-card"><Activity size={20}/><div><strong>Educational screening</strong><p>Designed to support learning and awareness — not replace professional medical advice.</p></div></div>
        </section>

        <div className="workspace">
          <form className="card form-card" onSubmit={predict}>
            <div className="section-head"><div><div className="kicker">STEP 01</div><h2>Patient profile</h2></div><span className="mini-tag">5 measurements</span></div>
            <div className="field-grid">
              {fields.map(([key, label, unit]) => <label className="field" key={key}><span>{label}</span><div className="input-wrap"><input type="number" step={key === 'oldpeak' ? '0.1' : '1'} value={form[key]} onChange={(e) => update(key, e.target.value)} required/><em>{unit}</em></div></label>)}
            </div>

            <div className="section-head second"><div><div className="kicker">STEP 02</div><h2>Clinical indicators</h2></div></div>
            <div className="choice-grid">
              <Choice label="Sex" value={form.sex} onChange={(v) => update('sex', v)} options={[[1,'Male'],[0,'Female']]} />
              <Choice label="Chest pain type" value={form.cp} onChange={(v) => update('cp', v)} options={[[0,'Typical angina'],[1,'Atypical'],[2,'Non-anginal'],[3,'Asymptomatic']]} />
              <Choice label="Fasting blood sugar > 120 mg/dL" value={form.fbs} onChange={(v) => update('fbs', v)} options={[[0,'No'],[1,'Yes']]} />
              <Choice label="Resting ECG" value={form.restecg} onChange={(v) => update('restecg', v)} options={[[0,'Normal'],[1,'ST-T abnormality'],[2,'LV hypertrophy']]} />
              <Choice label="Exercise-induced angina" value={form.exang} onChange={(v) => update('exang', v)} options={[[0,'No'],[1,'Yes']]} />
              <Choice label="ST slope" value={form.slope} onChange={(v) => update('slope', v)} options={[[0,'Upsloping'],[1,'Flat'],[2,'Downsloping']]} />
              <Choice label="Major vessels (ca)" value={form.ca} onChange={(v) => update('ca', v)} options={[[0,'0'],[1,'1'],[2,'2'],[3,'3'],[4,'4']]} />
              <Choice label="Thalassemia" value={form.thal} onChange={(v) => update('thal', v)} options={[[0,'Normal'],[1,'Fixed defect'],[2,'Reversible defect'],[3,'Other']]} />
            </div>

            <button className="primary-btn" disabled={loading}>{loading ? 'Analysing…' : <>Run prediction <ArrowRight size={18}/></>}</button>
            {error && <div className="error-box"><ShieldAlert size={17}/>{error}</div>}
            <div className="privacy"><Info size={15}/><span>Your inputs are sent only to the configured prediction API to calculate this result.</span></div>
          </form>

          <aside className="card result-card">
            {!result ? <div className="empty-state"><div className="pulse-icon"><HeartPulse size={34}/></div><h3>Your result will appear here</h3><p>Complete the form and run the model to see the predicted class, probability, and a plain-language summary.</p><div className="feature-row"><CheckCircle2 size={16}/><span>Fast local inference</span></div><div className="feature-row"><CheckCircle2 size={16}/><span>13-feature ML schema</span></div><div className="feature-row"><CheckCircle2 size={16}/><span>Clear risk communication</span></div></div> : <div className="result-content">
              <div className={`result-badge ${result.prediction === 1 ? 'risk' : 'safe'}`}>{result.prediction === 1 ? <ShieldAlert size={18}/> : <CheckCircle2 size={18}/>} {result.prediction === 1 ? 'Higher likelihood' : 'Lower likelihood'}</div>
              <div className="score-ring" style={{'--score': `${Math.min(score,100)}%`}}><div><strong>{score.toFixed(1)}%</strong><span>estimated probability</span></div></div>
              <h3>{result.label}</h3><p className="result-copy">This is a model-generated screening estimate based on the information provided. It should be interpreted with the full clinical picture by a qualified healthcare professional.</p>
              <button type="button" className="ghost-btn" onClick={reset}><RotateCcw size={16}/> Start over</button>
              <div className="disclaimer"><Info size={15}/><span>{result.disclaimer}</span></div>
            </div>}
          </aside>
        </div>
      </main>
      <footer>CardioLens · Machine Learning demo · Logistic Regression · Not a diagnostic device</footer>
    </div>
  );
}

function Choice({ label, value, onChange, options }) {
  return <label className="choice-block"><span>{label}</span><select value={value} onChange={(e) => onChange(Number(e.target.value))}>{options.map(([v,t]) => <option value={v} key={v}>{t}</option>)}</select></label>
}

createRoot(document.getElementById('root')).render(<App />);
