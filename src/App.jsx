// src/App.jsx
import { useCallback, useMemo, useState, useEffect } from 'react';

import {
  decisionTree,
  obligationsCatalog,
  getRequirementChain,
  getNextInRequirementChain,
  validateNextNode,
} from './decisionTreeModel';

// ---------- Styles ----------
const uiCSS = `
.app-root{
  width:100vw;
  height:100vh;
  overflow:hidden;
  background:#f3f4f6;
  color:#111827;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* Header */
.app-header{
  position:fixed;
  top:0; left:0; right:0;
  height:64px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 24px;
  background:#f9fafb;
  border-bottom:1px solid #e5e7eb;
  box-shadow:0 2px 6px rgba(15,23,42,0.04);
  z-index:1000;
}

.app-header-left,
.app-header-center,
.app-header-right{
  display:flex;
  align-items:center;
  gap:8px;
}

.app-header-center{
  flex:1;
  justify-content:center;
}

.app-model-badge{
  padding:2px 8px;
  border-radius:999px;
  border:1px solid #d1d5db;
  background:#e5e7eb;
  font-size:11px;
  font-weight:500;
}

.app-title{
  font-size:18px;
  font-weight:600;
  color:#111827;
  text-align:center;
}

.app-meta{
  font-size:12px;
  color:#6b7280;
}

.app-actions button{
  font-size:12px;
  padding:6px 12px;
  border-radius:999px;
  border:1px solid #d1d5db;
  background:#ffffff;
  cursor:pointer;
}
.app-actions button:not(:last-child){
  margin-right:8px;
}
.app-actions button:hover{
  background:#f3f4f6;
}

/* Main-Container unterhalb des Headers */
.app-body{
  position:absolute;
  top:64px;
  left:0;
  right:0;
  bottom:0;
  display:flex;
  min-height:0;
}

/* Sidebar kannst du lassen wie bisher – Stepper/Historie */
/* Main Content */
.app-main{
  flex:1;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  overflow:auto;
  background:#f3f4f6;
}
.app-main-inner{
  width:100%;
  max-width:960px;
  padding:24px 32px 32px;
}

/* Bestehende Badge-/Tooltip-Styles bitte beibehalten */
.rf-meta{ font-size:11px; opacity:0.8; }
.rf-badge{
  display:inline-block; font-size:11px; padding:2px 8px;
  border:1px solid #cbd5e1; border-radius:999px; background:#f8fafc;
}
.rf-tt{ position:relative; display:inline-block; }
.rf-tt-panel{
  display:none; position:absolute; z-index:9999;
  top:120%; left:0;
  width:360px; padding:10px; border-radius:10px;
  border:1px solid #e2e8f0; background:white;
  box-shadow:0 12px 30px rgba(0,0,0,0.14);
}
.rf-tt:hover .rf-tt-panel{ display:block; }

/* Step-Badge in Cards */
.step-badge{
  position:absolute; top:-10px; right:-10px; background:#111827; color:#fff;
  font-size:11px; font-weight:800; border-radius:999px; width:24px; height:24px;
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 2px 6px rgba(0,0,0,0.14);
}
`;

function WelcomeScreen({ onStart }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <style>{uiCSS}</style>

      <div
        style={{
          maxWidth: 820,
          width: '100%',
          background: '#ffffff',
          borderRadius: 16,
          padding: '28px 32px',
          boxShadow: '0 18px 45px rgba(15,23,42,0.45)',
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 0.06 }}>
            KI-Governance · Finanzunternehmen
          </div>
          <h1 style={{ margin: '6px 0 4px', fontSize: 24 }}>
            Willkommen zum Entscheidungsbaum für die sichere Integration von KI-Systemen
          </h1>
          <p style={{ margin: 0, fontSize: 14, color: '#4b5563' }}>
            Dieser Entscheidungsbaum hilft Finanzunternehmen dabei, die regulatorischen Anforderungen des
            EU AI Act und der DORA-Verordnung (Digital Operational Resilience Act) strukturiert zu prüfen
            und umzusetzen.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 18,
            marginTop: 6,
          }}
        >
          <div style={{ flex: '1 1 260px' }}>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Was Sie erwartet</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: '#374151' }}>
              <li>Geführte Einzelfragen mit dokumentiertem Entscheidungspfad</li>
              <li>Abdeckung von EU AI Act &amp; DORA für Finanzunternehmen</li>
              <li>Automatischer Abgleich mit relevanten regulatorischen Anforderungen</li>
            </ul>
          </div>

          <div style={{ flex: '1 1 260px' }}>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Funktionen</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: '#374151' }}>
              <li>Export des Pfads und offener Anforderungen als PDF</li>
              <li>Möglichkeit, den Pfad zurückzusetzen oder neu zu starten</li>
              <li>Navigation zu beliebigen Schritten im bisherigen Pfad</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            padding: '10px 12px',
            borderRadius: 10,
            border: '1px solid #e5e7eb',
            background: '#f9fafb',
            fontSize: 12,
            color: '#4b5563',
            marginBottom: 18,
          }}
        >
          <strong>Hinweis:</strong> Diese Anwendung dient der internen Vorabprüfung und ersetzt keine juristische
          Beratung. Für verbindliche Bewertungen sollten Sie Ihre Rechtsabteilung und externe Rechtsberatung einbeziehen.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
          <div className="rf-meta">
            Pfad wird während der Nutzung vollständig protokolliert.
          </div>
          <button
            type="button"
            onClick={onStart}
            style={{
              padding: '8px 18px',
              borderRadius: 999,
              border: 'none',
              background: '#0ea5e9',
              color: '#0f172a',
              fontWeight: 600,
              fontSize: 13,
              cursor: 'pointer',
              boxShadow: '0 8px 18px rgba(56,189,248,0.45)',
            }}
          >
            Assessment starten!
          </button>
        </div>
      </div>
    </div>
  );
}

function CreatorScreen({ value, onChange, onBack, onConfirm }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <style>{uiCSS}</style>

      <div
        style={{
          maxWidth: 520,
          width: '100%',
          background: '#ffffff',
          borderRadius: 16,
          padding: '24px 28px',
          boxShadow: '0 18px 45px rgba(15,23,42,0.45)',
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 20 }}>
          Wer erstellt dieses Assessment?
        </h2>
        <p style={{ marginTop: 0, marginBottom: 16, fontSize: 13, color: '#4b5563' }}>
          Bitte geben Sie den Namen oder das Team an, das den Entscheidungsbaum ausfüllt.
          Diese Information wird im Header und im Export ausgewiesen.
        </p>

        <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>
          Ersteller (Vorname Nachname)
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 10px',
            borderRadius: 8,
            border: '1px solid #d1d5db',
            fontSize: 13,
            marginBottom: 18,
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <button
            type="button"
            onClick={onBack}
            style={{
              padding: '6px 12px',
              borderRadius: 999,
              border: '1px solid #d1d5db',
              background: '#ffffff',
              fontSize: 12,
              cursor: 'pointer',
            }}
          >
            Zurück
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={!value.trim()}
            style={{
              padding: '6px 16px',
              borderRadius: 999,
              border: '1px solid #0ea5e9',
              background: value.trim() ? '#0ea5e9' : '#e5e7eb',
              color: value.trim() ? '#0f172a' : '#9ca3af',
              fontSize: 13,
              fontWeight: 600,
              cursor: value.trim() ? 'pointer' : 'not-allowed',
            }}
          >
            Weiter zum Entscheidungsbaum
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Cluster / Layout ----------
const CLUSTER_AI = 'AI Act';
const CLUSTER_DORA = 'DORA';

function getClusterForNodeId(id) {
  if (id.includes('__req__')) {
    const leafId = id.split('__req__')[0];
    return getClusterForNodeId(leafId);
  }
  if (id === 'D0' || id.startsWith('B')) return CLUSTER_DORA;
  return CLUSTER_AI;
}

// ---------- Node Components ----------
function QuestionNode({ data }) {
  const { label, onYes, onNo, disabled, answer, step, cluster, info, examples } = data;

  const [showHints, setShowHints] = useState(false);

  const border =
    answer === 'yes'
      ? '2px solid #16a34a'
      : answer === 'no'
        ? '2px solid #dc2626'
        : '1px solid #888';

  const bg = cluster === CLUSTER_DORA ? '#eff6ff' : '#ffffff';

  const hasHints =
    (typeof info === 'string' && info.trim().length > 0) ||
    (Array.isArray(examples) && examples.length > 0);

  return (
    <div
      style={{
        position: 'relative',
        padding: '16px 20px',
        borderRadius: 10,
        border,
        background: bg,
        minWidth: 420,
        maxWidth: 640,
        boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
        opacity: disabled ? 0.85 : 1,
      }}
    >
      <div className="step-badge">{step}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'baseline' }}>
        <div style={{ fontWeight: 'bold', marginBottom: 8, fontSize: 15 }}>{label}</div>
        <span className="rf-badge">{cluster}</span>
      </div>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 10 }}>
        <button
          onClick={onNo}
          disabled={disabled}
          style={{
            padding: '6px 12px',
            borderRadius: 6,
            border: '1px solid #999',
            background: disabled ? '#f1f5f9' : '#f5f5f5',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontSize: 13,
          }}
        >
          Nein
        </button>
        <button
          onClick={onYes}
          disabled={disabled}
          style={{
            padding: '6px 12px',
            borderRadius: 6,
            border: '1px solid #16a34a',
            background: disabled ? '#e5f9ec' : '#e6fff0',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontSize: 13,
          }}
        >
          Ja
        </button>
      </div>

      {hasHints && (
        <div style={{ marginTop: 14 }}>
          <button
            type="button"
            onClick={() => setShowHints((v) => !v)}
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              border: '1px solid #cbd5e1',
              background: '#f8fafc',
              fontSize: 11,
              cursor: 'pointer',
            }}
          >
            {showHints ? 'Hinweise & Beispiele ausblenden' : 'Hinweise & Beispiele anzeigen'}
          </button>
          {showHints && (
            <div
              style={{
                marginTop: 8,
                padding: 10,
                borderRadius: 8,
                border: '1px dashed #cbd5e1',
                background: '#f9fafb',
                fontSize: 12,
              }}
            >
              {info && info.trim().length > 0 && (
                <p style={{ marginTop: 0, marginBottom: examples?.length ? 8 : 0 }}>{info}</p>
              )}
              {Array.isArray(examples) && examples.length > 0 && (
                <>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Beispiele:</div>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {examples.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LeafNode({ data }) {
  const {
    label,
    obligationKeys = [],
    nextId,
    onContinue,
    continueDisabled,
    onStartCheck,
    checkStarted,
    step,
    cluster,
  } = data;

  const packs = useMemo(
    () =>
      obligationKeys.map((key) => ({
        key,
        label: obligationsCatalog[key]?.label ?? key,
        articles: obligationsCatalog[key]?.articles ?? [],
      })),
    [obligationKeys]
  );

  const btnNextLabel = nextId === 'D0' ? 'Zum DORA-Teil' : nextId === 'END' ? 'Beenden' : 'Weiter';

  return (
    <div
      style={{
        position: 'relative',
        padding: '16px 20px',
        borderRadius: 10,
        border: '1px solid #4a7',
        background: cluster === CLUSTER_DORA ? '#e0f2fe' : '#e9fff1',
        minWidth: 420,
        maxWidth: 640,
        boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
      }}
    >
      <div className="step-badge">{step}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'baseline' }}>
        <div style={{ fontWeight: 'bold', marginBottom: 8, fontSize: 15 }}>{label}</div>
        <span className="rf-badge">{cluster}</span>
      </div>

      {packs.length > 0 && (
        <>
          <div style={{ marginTop: 6, fontSize: 11, fontWeight: 'bold' }}>Pflichtenpakete:</div>
          <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {packs.map((p) => (
              <span key={p.key} className="rf-tt" style={{ marginRight: 4 }}>
                <span className="rf-badge">{p.label}</span>
                <div className="rf-tt-panel">
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Rechtsgrundlagen</div>
                  <ul style={{ margin: 0, paddingLeft: 18 }} className="rf-meta">
                    {p.articles.length ? p.articles.map((a) => <li key={a}>{a}</li>) : <li>–</li>}
                  </ul>
                </div>
              </span>
            ))}
          </div>
        </>
      )}

      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 14 }}>
        {packs.length > 0 && (
          <button
            onClick={onStartCheck}
            disabled={checkStarted}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid #94a3b8',
              background: checkStarted ? '#eef2f7' : '#f8fafc',
              fontSize: 12,
              cursor: checkStarted ? 'not-allowed' : 'pointer',
            }}
          >
            Anforderungen abfragen
          </button>
        )}

        {nextId && (
          <button
            onClick={onContinue}
            disabled={continueDisabled}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid #06b6d4',
              background: continueDisabled ? '#eefbfd' : '#ecfeff',
              fontSize: 12,
              cursor: continueDisabled ? 'not-allowed' : 'pointer',
            }}
          >
            {btnNextLabel}
          </button>
        )}
      </div>
    </div>
  );
}

function ReqQuestionNode({ data }) {
  const { text, pkgLabel, articles = [], onYes, onNo, disabled, answer, step, cluster, info, examples } = data;

  const [showHints, setShowHints] = useState(false);

  const border =
    answer === 'yes'
      ? '2px solid #16a34a'
      : answer === 'no'
        ? '2px solid #dc2626'
        : '1px solid #888';

  const bg =
    answer === 'yes'
      ? '#ecfdf5'
      : answer === 'no'
        ? '#fef2f2'
        : cluster === CLUSTER_DORA
          ? '#eff6ff'
          : '#ffffff';

    const hasHints =
    (typeof info === 'string' && info.trim().length > 0) ||
    (Array.isArray(examples) && examples.length > 0);

  return (
    <div
      style={{
        position: 'relative',
        padding: '16px 20px',
        borderRadius: 10,
        border,
        background: bg,
        minWidth: 420,
        maxWidth: 640,
        boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
        opacity: disabled ? 0.85 : 1,
      }}
    >
      <div className="step-badge">{step}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'baseline' }}>
        <div style={{ fontWeight: 'bold', marginBottom: 4, fontSize: 15 }}>{text}</div>
        <span className="rf-badge">{cluster}</span>
      </div>

      <div className="rf-meta" style={{ marginBottom: 4 }}>
        {pkgLabel}
        {articles?.length ? ` • ${articles.join(', ')}` : ''}
      </div>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 8 }}>
        <button
          onClick={onNo}
          disabled={disabled}
          style={{
            padding: '6px 12px',
            borderRadius: 6,
            border: '1px solid #999',
            background: disabled ? '#f1f5f9' : '#f5f5f5',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontSize: 12,
          }}
        >
          Nein
        </button>
        <button
          onClick={onYes}
          disabled={disabled}
          style={{
            padding: '6px 12px',
            borderRadius: 6,
            border: '1px solid #16a34a',
            background: disabled ? '#e5f9ec' : '#e6fff0',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontSize: 12,
          }}
        >
          Ja
        </button>
      </div>

      {hasHints && (
        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            onClick={() => setShowHints((v) => !v)}
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              border: '1px solid #cbd5e1',
              background: '#f8fafc',
              fontSize: 11,
              cursor: 'pointer',
            }}
          >
            {showHints ? 'Hinweise & Beispiele ausblenden' : 'Hinweise & Beispiele anzeigen'}
          </button>
          {showHints && (
            <div
              style={{
                marginTop: 8,
                padding: 10,
                borderRadius: 8,
                border: '1px dashed #cbd5e1',
                background: '#f9fafb',
                fontSize: 12,
              }}
            >
              {info && info.trim().length > 0 && (
                <p style={{ marginTop: 0, marginBottom: examples?.length ? 8 : 0 }}>{info}</p>
              )}
              {Array.isArray(examples) && examples.length > 0 && (
                <>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Beispiele:</div>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {examples.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ReqSummaryNode({ data }) {
  const { missing = [], onContinue, continueDisabled, nextId, step, cluster } = data;
  const hasMissing = missing.length > 0;

  const disabled = continueDisabled;
  return (
    <div
      style={{
        position: 'relative',
        padding: '16px 20px',
        borderRadius: 10,
        border: `1px solid ${hasMissing ? '#fecdd3' : '#a7f3d0'}`,
        background: hasMissing ? '#fff1f2' : (cluster === CLUSTER_DORA ? '#eff6ff' : '#ecfdf5'),
        minWidth: 420,
        maxWidth: 640,
        boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
      }}
    >
      <div className="step-badge">{step}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'baseline' }}>
        <div style={{ fontWeight: 'bold', marginBottom: 8, fontSize: 15 }}>
          {hasMissing ? 'Fehlende Anforderungen' : 'Alle Anforderungen erfüllt'}
        </div>
        <span className="rf-badge">{cluster}</span>
      </div>

      {hasMissing ? (
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {missing.map((m) => (
            <li key={m.id}>
              {m.text}{' '}
              <span className="rf-meta">
                ({m.pkgLabel}{m.articles?.length ? ` • ${m.articles.join(', ')}` : ''})
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rf-meta">Sie können mit der Integration fortfahren.</div>
      )}

      {nextId && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
          <button
            onClick={onContinue}
            disabled={disabled}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid #06b6d4',
              background: disabled ? '#eefbfd' : '#ecfeff',
              cursor: disabled ? 'not-allowed' : 'pointer',
              fontSize: 12,
            }}
          >
            {nextId === 'D0' ? 'Zum DORA-Teil' : nextId === 'END' ? 'Beenden' : 'Weiter'}
          </button>
        </div>
      )}
    </div>
  );
}


// Konsistenz- & Plausibilitätschecks
// - High-Risk wird NUR über obligations erkannt (wie von dir gewünscht)
// - gibt eine Liste an Violations zurück, die du entweder blockierst oder zu Review umleitest

function validatePathConsistency({ decisionTree, obligationsCatalog, answers, pathIds }) {
  const violations = [];

  const isLeaf = (id) => decisionTree[id]?.type === 'leaf';
  const nodeObligations = (id) => (decisionTree[id]?.obligations || []).filter(Boolean);

  const leafIdsInPath = pathIds.filter((id) => !id.includes('__req__') && isLeaf(id));

  // ---- Fact: "AI High-Risk gelockt" (nur über obligations)
  // Du kannst hier später robust über articles 9–15/26–27 filtern.
  const HIGH_RISK_KEYS = new Set(['AI_HR_PROVIDER_OR_DEPLOYER']); // <- nur obligations, kein Hardcode von Knoten-IDs
  const highRiskLocked = leafIdsInPath.some((leafId) =>
    nodeObligations(leafId).some((k) => HIGH_RISK_KEYS.has(k))
  );

  // ---- Fact: "Prohibited" (nur über obligations)
  const prohibitedLocked = leafIdsInPath.some((leafId) =>
    nodeObligations(leafId).includes('AI_PROHIBITED')
  );

  // ---- Rule 1: Wenn Prohibited erreicht wurde, darf nicht weiter "normal" gearbeitet werden
  // (soll in deinem Baum ohnehin über Gate/Review passieren)
  if (prohibitedLocked) {
    // Falls danach weitere reguläre Fragen beantwortet wurden, ist das ein Widerspruch.
    const afterProhibitedAnswered = Object.keys(answers).some((id) => {
      if (id.includes('__req__')) return false;
      if (id === 'A2') return false; // A2 ist die Quelle
      // grobe Heuristik: weitere AI/DORA Questions nach Prohibited
      const def = decisionTree[id];
      return def?.type === 'question';
    });

    if (afterProhibitedAnswered) {
      violations.push({
        code: 'PROHIBITED_CONTINUED',
        message:
          'Verbotene Praxis wurde erreicht, aber der Pfad wurde ohne Review/Eskalation fortgesetzt.',
        suggestedNodeId: 'W_AI_PROHIBITED_ESCALATION', // falls vorhanden
      });
    }
  }

  // ---- Rule 2: High-Risk darf nicht "heruntergestuft" werden
  // Konkret in deinem Baum: A3 = Hochrisiko-Frage. Wenn High-Risk obligations bereits im Pfad sind,
  // darf A3 nicht mit "no" beantwortet werden bzw. darf nicht in A3_NON_HR landen.
  if (highRiskLocked) {
    if (answers?.A3 === 'no') {
      violations.push({
        code: 'HIGH_RISK_DEESCALATION',
        message:
          'High-Risk Pflichtenpaket wurde bereits erreicht, später wurde High-Risk verneint (Herunterstufung).',
        suggestedNodeId: 'W_AI_CONTRADICTION', // falls vorhanden
      });
    }

    if (pathIds.includes('A3_NON_HR') || pathIds.includes('G_AI_NON_HR_PLAUSIBILITY')) {
      violations.push({
        code: 'HIGH_RISK_PATH_CONTRADICTION',
        message:
          'High-Risk Pflichtenpaket wurde erreicht, aber der Pfad läuft in den Non-High-Risk-Teil.',
        suggestedNodeId: 'W_AI_CONTRADICTION',
      });
    }
  }

  // ---- Rule 3: KI-System verneint → keine AI-Act Klassifikationsfragen später
  if (answers?.A1 === 'no') {
    const aiActLaterAnswered = ['A2', 'A3'].some((qid) => answers[qid] != null);
    if (aiActLaterAnswered) {
      violations.push({
        code: 'NO_AI_BUT_AI_ACT_CONTINUED',
        message:
          'Es wurde verneint, dass ein KI-System vorliegt (A1=no), aber AI-Act-Klassifikationsfragen wurden dennoch beantwortet.',
        suggestedNodeId: 'W_AI_CONTRADICTION',
      });
    }
  }

  // ---- Rule 4 (optional): DORA Start verneint → keine DORA-Fragen danach
  if (answers?.D0 === 'no') {
    const doraQuestionAnswered = Object.keys(answers).some((id) => {
      if (!/^B\d+/.test(id)) return false;
      return answers[id] != null;
    });
    if (doraQuestionAnswered) {
      violations.push({
        code: 'DORA_SKIPPED_BUT_CONTINUED',
        message:
          'DORA-Teil wurde abgelehnt (D0=no), aber danach wurden DORA-Fragen beantwortet.',
        suggestedNodeId: 'END',
      });
    }
  }

  return { violations, facts: { highRiskLocked, prohibitedLocked } };
}


// ---------- Wizard ----------
function Wizard({ createdBy, assessmentId }) {
  const [path, setPath] = useState([{ id: 'A1' }]);
  const [answers, setAnswers] = useState({});
  const exportIncludePkgs = true;
  const [isExporting, setIsExporting] = useState(false);
  const [updatedAt, setUpdatedAt] = useState(() => new Date());

    // Neue Assessment-Version (z. B. „v1.0“)
    const [assessmentVersion, setAssessmentVersion] = useState('v1.0');

    // Beim Start Version aus localStorage holen (falls vorhanden)
    useEffect(() => {
      const stored = window.localStorage.getItem('assessmentVersion');
      if (stored) {
        setAssessmentVersion(stored);
      }
    }, []);
  
    // Helper zum Hochzählen: v1.0 -> v2.0 -> v3.0, etc.
    const bumpVersion = useCallback((current) => {
      const str = current || 'v1.0';
      const m = /^v(\d+)(?:\.(\d+))?$/.exec(str);
      if (!m) return 'v1.0';
      const major = parseInt(m[1] || '1', 10) + 1;
      return `v${major}.0`;
    }, []);

    const resetAssessmentVersion = useCallback(() => {
      const v = 'v1.0';
      setAssessmentVersion(v);
      window.localStorage.setItem('assessmentVersion', v);
    }, []);

  // Gespeicherter Endpunkt (Pfad + Antworten), zu dem man zurückspringen kann
  const [savedState, setSavedState] = useState(null);

  const currentStepIndex = path.length - 1;
  const currentId = path[currentStepIndex]?.id ?? 'A1';

  const descriptor = useMemo(() => {
    if (currentId.includes('__req__summary')) {
      const leafId = currentId.split('__req__')[0];
      const { reqs } = getRequirementChain(leafId);
      const missing = reqs.filter((r) => answers[r.id] !== 'yes');
      const cluster = getClusterForNodeId(leafId);
      const nextId = decisionTree[leafId]?.next;
      return {
        kind: 'summary',
        id: currentId,
        leafId,
        missing,
        nextId,
        cluster,
      };
    }

    if (currentId.includes('__req__')) {
      const [leafId] = currentId.split('__req__');
      const { reqs } = getRequirementChain(leafId);
      const req = reqs.find((r) => r.id === currentId);
      if (!req) {
        return { kind: 'unknown', id: currentId };
      }
      const cluster = getClusterForNodeId(leafId);
      return {
        kind: 'req',
        id: currentId,
        leafId,
        text: req.text,
        pkgLabel: req.pkgLabel,
        articles: req.articles ?? [],
        cluster,
        info: req.info,
        examples: req.examples,
      };
    }

    const def = decisionTree[currentId];
    if (!def) {
      return { kind: 'unknown', id: currentId };
    }
    const cluster = getClusterForNodeId(currentId);
    if (def.type === 'question') {
      return {
        kind: 'question',
        id: currentId,
        label: def.label,
        cluster,
        info: def.info,
        examples: def.examples,
      };
    }
    return {
      kind: 'leaf',
      id: currentId,
      label: def.label,
      obligationKeys: def.obligations ?? [],
      nextId: def.next,
      cluster,
    };
  }, [currentId, answers]);

  // Timeline: zu früherem Schritt springen,
  // ABER alten Endpunkt (Pfad + Antworten) als savedState merken,
  // damit man später wieder dahin zurück kann.
  const jumpToStep = useCallback(
    (index) => {
      setPath((prevPath) => {
        const newPath = prevPath.slice(0, index + 1);

        setAnswers((prevAns) => {
          // Nur einmal speichern: erster "Sprung zurück"
          if (!savedState) {
            setSavedState({ path: prevPath, answers: prevAns });
          }

          const allowed = new Set(newPath.map((s) => s.id));
          const filtered = {};
          for (const [k, v] of Object.entries(prevAns)) {
            if (allowed.has(k)) filtered[k] = v;
          }
          return filtered;
        });

        return newPath;
      });
    },
    [savedState]
  );

  // Zur gespeicherten Endposition zurückspringen
  const restoreSavedPath = useCallback(() => {
    if (!savedState) return;
    setPath(savedState.path);
    setAnswers(savedState.answers);
    setSavedState(null);
  }, [savedState]);

  const handleReset = useCallback(() => {
    setPath([{ id: 'A1' }]);
    setAnswers({});
    setSavedState(null);
    setUpdatedAt(new Date());
  }, []);

  const answerNode = useCallback(
    (id, answer) => {
      if (answers[id]) return;
  
      // Ab hier wird ein neuer Zweig entschieden → gespeicherten Endpunkt verwerfen
      setSavedState(null);
  
      const pathIds = path.map((s) => s.id);
  
      // Requirement-Node (req-chain)
      if (id.includes('__req__')) {
        const { nextReqId, summaryId } = getNextInRequirementChain(id);
        const nextId = nextReqId ?? summaryId;
        if (!nextId) return;
  
        const nextAnswers = { ...answers, [id]: answer };
        const nextPathIds = [...pathIds, nextId];
  
        const { violations } = validatePathConsistency({
          decisionTree,
          obligationsCatalog,
          answers: nextAnswers,
          pathIds: nextPathIds,
        });
  
        if (violations?.length) {
          alert(
            'Plausibilitätsprüfung fehlgeschlagen:\n\n' +
              violations.map((v) => '• ' + v.message).join('\n')
          );
          return; 
        }
  
        setAnswers(nextAnswers);
        setPath((p) => {
          if (p[p.length - 1]?.id === nextId) return p;
          return [...p, { id: nextId }];
        });
        setUpdatedAt(new Date());
        return;
      }
      // Normaler Question-Node
      const def = decisionTree[id];
      if (!def || def.type !== 'question') return;
  
      const rawNextId = answer === 'yes' ? def.yes : def.no;
      if (!rawNextId) return;
  
      const nextAnswers = { ...answers, [id]: answer };
      const nextPathIds = [...pathIds, rawNextId];
  
      const { violations } = validatePathConsistency({
        decisionTree,
        obligationsCatalog,
        answers: nextAnswers,
        pathIds: nextPathIds,
      });
  
      if (violations?.length) {
        alert(
          'Plausibilitätsprüfung fehlgeschlagen:\n\n' +
            violations.map((v) => '• ' + v.message).join('\n')
        );
        return; 
      }
  
      setAnswers(nextAnswers);
      setPath((p) => {
        if (p[p.length - 1]?.id === rawNextId) return p;
        return [...p, { id: rawNextId }];
      });
      setUpdatedAt(new Date());
    },
    [answers, path, decisionTree, obligationsCatalog]
  );
  

  const continueFromLeaf = useCallback((leafId) => {
      const def = decisionTree[leafId];
      const nextId = def?.next;
      if (!nextId) return;
  
      // Konsistenzprüfung: nächster Schritt wird als "geplant" validiert
      const nextPathIds = [...path.map((s) => s.id), nextId];
  
      const { violations } = validatePathConsistency({
        decisionTree,
        obligationsCatalog,
        answers,
        pathIds: nextPathIds,
      });
  
      if (violations?.length) {
        alert(
          'Der nächste Schritt ist aufgrund eines Konsistenzkonflikts nicht möglich:\n\n' +
            violations.map((v) => '• ' + v.message).join('\n')
        );
        return;
      }
  
      setSavedState(null);
      setPath((p) => {
        if (p[p.length - 1]?.id === nextId) return p;
        return [...p, { id: nextId }];
      });
      setUpdatedAt(new Date());
    },
    [answers, path, decisionTree, obligationsCatalog]
  );
  

  const startCheck = useCallback((leafId) => {
    const { reqs } = getRequirementChain(leafId);
    if (!reqs.length) return;
    const firstId = reqs[0].id;
    setSavedState(null);
    setPath((p) => {
      if (p.some((s) => s.id === firstId)) return p;
      return [...p, { id: firstId }];
    });
    setUpdatedAt(new Date());
  }, []);

  const continueFromSummary = useCallback((leafId) => {
      const def = decisionTree[leafId];
      const nextId = def?.next;
      if (!nextId) return;
  
      const nextPathIds = [...path.map((s) => s.id), nextId];
  
      const { violations } = validatePathConsistency({
        decisionTree,
        obligationsCatalog,
        answers,
        pathIds: nextPathIds,
      });
  
      if (violations?.length) {
        alert(
          'Der nächste Schritt ist aufgrund eines Konsistenzkonflikts nicht möglich:\n\n' +
            violations.map((v) => '• ' + v.message).join('\n')
        );
        return;
      }
  
      setSavedState(null);
      setPath((p) => {
        if (p[p.length - 1]?.id === nextId) return p;
        return [...p, { id: nextId }];
      });
      setUpdatedAt(new Date());
    },
    [answers, path, decisionTree, obligationsCatalog]
  );
  

  const buildExportPayload = useCallback((versionForExport) => {
    const pathPayload = path.map((step) => {
      const id = step.id;
      let label = id;
      let kind = 'unknown';

      if (id.includes('__req__summary')) {
        const leafId = id.split('__req__')[0];
        label = `Summary – ${decisionTree[leafId]?.label ?? leafId}`;
        kind = 'summary';
      } else if (id.includes('__req__')) {
        const [leafId] = id.split('__req__');
        const { reqs } = getRequirementChain(leafId);
        const req = reqs.find((r) => r.id === id);
        label = req?.text ?? id;
        kind = 'requirement';
      } else {
        const def = decisionTree[id];
        label = def?.label ?? id;
        kind = def?.type ?? 'node';
      }

      return {
        id,
        label,
        kind,
        answer: answers[id] ?? null,
      };
    });

    const leavesInPath = new Set(
      path
        .filter((s) => !s.id.includes('__req__'))
        .map((s) => s.id)
        .filter((id) => decisionTree[id]?.type === 'leaf')
    );

    const missing = {};
    for (const leafId of leavesInPath) {
      const { reqs } = getRequirementChain(leafId);
      if (!reqs.length) continue;
      const missingReqs = reqs.filter((r) => answers[r.id] !== 'yes');
      if (!missingReqs.length) continue;
      missing[leafId] = missingReqs.map((r) => ({
        id: r.id,
        text: r.text,
        pkgKey: r.pkgKey,
        pkgLabel: r.pkgLabel,
        articles: r.articles ?? [],
      }));
    }

  const packagesByLeaf = {};
  for (const leafId of leavesInPath) {
    const def = decisionTree[leafId];
    if (!def?.obligations?.length) continue;

  packagesByLeaf[leafId] = def.obligations.map((k) => ({
    key: k,
    label: obligationsCatalog[k]?.label ?? k,
    articles: obligationsCatalog[k]?.articles ?? [],
  }));
}
    
    return {
      assessmentId: versionForExport,
      createdBy,
      lastUpdated: updatedAt.toISOString(),
      path: pathPayload,
      missing,
      packagesByLeaf,
    };
  }, [path, answers, exportIncludePkgs, createdBy, updatedAt]);

  const handleExportPDF = useCallback(async () => {
    if (isExporting) return;
  
    setIsExporting(true);
  
    try {
      //Nächste Assessment-Version erzeugen und speichern
      const nextVersion = bumpVersion(assessmentVersion);
      setAssessmentVersion(nextVersion);
      window.localStorage.setItem('assessmentVersion', nextVersion);

      const payload = buildExportPayload(nextVersion); 
  
      const fallbackPrint = () => {
        const win = window.open('', '_blank');
        if (!win) return;
  
        const esc = (s) =>
          String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  
        const missingHtml = Object.entries(payload.missing || {})
          .map(([leafId, reqs]) => {
            const leafLabel = decisionTree[leafId]?.label ?? leafId;
            return `
              <h3>Fehlende Anforderungen – ${esc(leafLabel)}</h3>
              <table style="width:100%; border-collapse:collapse; margin-top:8px;">
                <thead>
                  <tr>
                    <th style="border:1px solid #cbd5e1; padding:6px; text-align:left;">
                      Fehlende Anforderung
                    </th>
                    <th style="border:1px solid #cbd5e1; padding:6px; text-align:left; width:25%;">
                      Durchgeführt durch
                    </th>
                    <th style="border:1px solid #cbd5e1; padding:6px; text-align:left; width:25%;">
                      Geprüft von
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${reqs
                    .map(
                      (r) => `
                      <tr>
                        <td style="border:1px solid #e5e7eb; padding:6px;">
                          ${esc(r.text)}
                          <br/>
                          <small style="color:#64748b;">
                            ${esc(r.pkgLabel)}${r.articles?.length ? ' • ' + esc(r.articles.join(', ')) : ''}
                          </small>
                        </td>
                        <td style="border:1px solid #e5e7eb; padding:6px;">&nbsp;</td>
                        <td style="border:1px solid #e5e7eb; padding:6px;">&nbsp;</td>
                      </tr>`
                    )
                    .join('')}
                </tbody>
              </table>
            `;
          })
          .join('');
  
        const pkgsHtml = payload.packagesByLeaf
          ? Object.entries(payload.packagesByLeaf)
              .map(([leafId, pkgs]) => {
                const leafLabel = decisionTree[leafId]?.label ?? leafId;
                return `
                  <h3>Pakete – ${esc(leafLabel)}</h3>
                  <ul>${pkgs
                    .map(
                      (p) =>
                        `<li>${esc(p.label)}${
                          p.articles?.length ? ` <small>(${esc(p.articles.join(', '))})</small>` : ''
                        }</li>`
                    )
                    .join('')}</ul>
                `;
              })
              .join('')
          : '';
  
        win.document.write(`
          <html><head><title>Decision Tree Export</title>
            <meta charset="utf-8"/>
            <style>
              body{ font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; padding:24px; }
              h1{ margin:0 0 6px 0; } .meta{ color:#64748b; font-size:12px; margin-bottom:18px; }
              ol{ padding-left:18px; } small{ color:#64748b; }
              @media print { button { display:none; } }
            </style>
          </head><body>
            <h1>AI Act & DORA – Entscheidungsbaum</h1>
            <div class="meta"> Assessment-ID: ${esc(payload.assessmentId)} • Ersteller: ${esc(payload.createdBy || 'Unbekannt')} • Bearbeitungszeitpunkt: ${esc(new Date(payload.lastUpdated).toLocaleString('de-DE'))}</div>
            <h2>Pfad</h2>
            <ol>
              ${payload.path
                .map(
                  (p) =>
                    `<li>${esc(p.label)}${
                      p.answer ? ` <small>(${p.answer === 'yes' ? 'Ja' : 'Nein'})</small>` : ''
                    }</li>`
                )
                .join('')}
            </ol>
            ${
              missingHtml
                ? `<h2>Fehlende Anforderungen</h2>${missingHtml}`
                : `<h2>Fehlende Anforderungen</h2><p><small>Keine fehlenden Anforderungen erfasst.</small></p>`
            }
            ${pkgsHtml ? `<h2>Pflichtenpakete</h2>${pkgsHtml}` : ''}
            <button onclick="window.print()">Als PDF drucken…</button>
          </body></html>
        `);
        win.document.close();
        win.focus();
      };
  
      let jsPDF;
      try {
        const m = await import('jspdf');
        jsPDF = m.jsPDF;
      } catch {
        jsPDF = null;
      }
  
      if (!jsPDF) {
        fallbackPrint();
        return;
      }
  
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const margin = 36;
      const width = doc.internal.pageSize.getWidth() - margin * 2;
      let y = margin;
  
      const addLine = (s, size = 11, bold = false) => {
        doc.setFont('helvetica', bold ? 'bold' : 'normal');
        doc.setFontSize(size);
        const lines = doc.splitTextToSize(String(s), width);
        for (const line of lines) {
          if (y > doc.internal.pageSize.getHeight() - margin) {
            doc.addPage();
            y = margin;
          }
          doc.text(line, margin, y);
          y += size + 4;
        }
      };
  
      addLine('AI Act & DORA – Entscheidungsbaum', 16, true);
      addLine(`Assessment-ID: ${(payload.assessmentId)} • Ersteller: ${(payload.createdBy || 'Unbekannt')} • Bearbeitungszeitpunkt: ${(new Date(payload.lastUpdated).toLocaleString('de-DE'))}`, 10, false);
      y += 6;
  
      addLine('Pfad', 13, true);
      payload.path.forEach((p, idx) =>
        addLine(
          `${idx + 1}. ${p.label}${p.answer ? ` (${p.answer === 'yes' ? 'Ja' : 'Nein'})` : ''}`,
          11,
          false
        )
      );
      y += 8;
  
      addLine('Fehlende Anforderungen', 13, true);
      addLine('Anforderung | Durchgeführt durch | Geprüft von', 10, true);
      addLine('------------------------------------------------------------', 10, false);
      const missingEntries = Object.entries(payload.missing || {});
      if (!missingEntries.length) {
        addLine('Keine fehlenden Anforderungen erfasst.', 11, false);
      } else {
        for (const [leafId, reqs] of missingEntries) {
          addLine(`Leaf: ${decisionTree[leafId]?.label ?? leafId}`, 11, true);
          reqs.forEach((r) =>
            addLine(`${r.text} | ____________ | ____________`, 10, false));
          y += 6;
        }
      }
  
      if (payload.packagesByLeaf) {
        y += 6;
        addLine('Pflichtenpakete', 13, true);
        for (const [leafId, pkgs] of Object.entries(payload.packagesByLeaf)) {
          addLine(`Leaf: ${decisionTree[leafId]?.label ?? leafId}`, 11, true);
          pkgs.forEach((p) =>
            addLine(
              `• ${p.label}${p.articles?.length ? ` (${p.articles.join(', ')})` : ''}`,
              10,
              false
            )
          );
          y += 6;
        }
      }
  
      doc.save(`Export_AI_Assessment_${payload.assessmentId}.pdf`);
    } catch (err) {
      console.error('Export failed:', err);
      alert(`Export fehlgeschlagen: ${err?.message ?? err}`);
    } finally {
      setIsExporting(false); 
    }
  }, [isExporting, assessmentVersion, bumpVersion, buildExportPayload]);

  // Center-Card je nach Descriptor
  let centerCard = null;
  const stepNumber = currentStepIndex + 1;
  const cluster = descriptor.cluster ?? getClusterForNodeId(currentId);
  const totalSteps = path.length;

  if (descriptor.kind === 'question') {
    centerCard = (
      <QuestionNode
        data={{
          label: descriptor.label,
          step: stepNumber,
          cluster,
          answer: answers[currentId],
          disabled: !!answers[currentId],
          onYes: () => answerNode(currentId, 'yes'),
          onNo: () => answerNode(currentId, 'no'),
          info: descriptor.info,
          examples: descriptor.examples,
        }}
      />
    );
  } else if (descriptor.kind === 'leaf') {
    centerCard = (
      <LeafNode
        data={{
          label: descriptor.label,
          step: stepNumber,
          cluster,
          obligationKeys: descriptor.obligationKeys,
          nextId: descriptor.nextId,
          onContinue: descriptor.nextId ? () => continueFromLeaf(currentId) : undefined,
          continueDisabled: !descriptor.nextId,
          onStartCheck: () => startCheck(currentId),
          checkStarted: path.some((s) => s.id.startsWith(`${currentId}__req__`)),
        }}
      />
    );
  } else if (descriptor.kind === 'req') {
    centerCard = (
      <ReqQuestionNode
        data={{
          text: descriptor.text,
          pkgLabel: descriptor.pkgLabel,
          articles: descriptor.articles,
          step: stepNumber,
          cluster,
          answer: answers[currentId],
          disabled: !!answers[currentId],
          onYes: () => answerNode(currentId, 'yes'),
          onNo: () => answerNode(currentId, 'no'),
          info: descriptor.info,
          examples: descriptor.examples,
        }}
      />
    );
  } else if (descriptor.kind === 'summary') {
    centerCard = (
      <ReqSummaryNode
        data={{
          step: stepNumber,
          cluster,
          missing: descriptor.missing,
          nextId: descriptor.nextId,
          continueDisabled: !descriptor.nextId,
          onContinue: descriptor.nextId
            ? () => continueFromSummary(descriptor.leafId)
            : undefined,
        }}
      />
    );
  } else {
    centerCard = (
      <div
        style={{
          padding: 16,
          borderRadius: 10,
          border: '1px solid #e5e7eb',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          minWidth: 320,
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: 6 }}>Unbekannter Knoten</div>
        <div className="rf-meta">{currentId}</div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#f3f4f6',
      }}
    >
      <style>{uiCSS}</style>
  
      {/* 🔷 HEADER (neu) */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 2px 6px rgba(15,23,42,0.04)',
          zIndex: 1000,
        }}
      >
        {/* Links: Model Nr. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              padding: '2px 8px',
              borderRadius: 999,
              border: '1px solid #d1d5db',
              background: '#e5e7eb',
              fontSize: 11,
              fontWeight: 500,
            }}
          >
            Assessment-ID: {assessmentVersion}
          </span>
          <span className="rf-meta">Ersteller: {createdBy || 'Unbekannt'}</span>
        </div>
  
        {/* Mitte: App-Name */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#111827',
              textAlign: 'center',
            }}
          >
            Entscheidungsbaum zur sicheren Integration von KI
          </div>
        </div>
  
        {/* Rechts: Bearbeitungszeitpunkt + Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span className="rf-meta">
            {new Date().toLocaleString('de-DE')}
          </span>
  
          {savedState && (
            <button
              onClick={restoreSavedPath}
              title="Zur zuletzt erreichten Endposition zurückkehren"
              style={{
                fontSize: 12,
                padding: '6px 12px',
                borderRadius: 999,
                border: '1px solid #d1d5db',
                background: '#ffffff',
                cursor: 'pointer',
              }}
            >
              Zurück zum Endpunkt
            </button>
          )}
  
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            title="PDF-Zusammenfassung exportieren"
            style={{
              fontSize: 12,
              padding: '6px 12px',
              borderRadius: 999,
              border: '1px solid #d1d5db',
              background: isExporting ? '#e5e7eb' : '#ffffff',
              cursor: isExporting ? 'not-allowed' : 'pointer',
            }}
          >
            {isExporting ? 'Exportiert…' : 'PDF Export'}
          </button>

          <button
            onClick={resetAssessmentVersion}
            title="Setzt die Assessment-ID (Revision) auf v1.0 zurück"
            style={{
              fontSize: 12,
              padding: '6px 12px',
              borderRadius: 999,
              border: '1px solid #d1d5db',
              background: '#ffffff',
              cursor: 'pointer',
            }}
          >
            Version auf v1.0
          </button>

          <button
            onClick={handleReset}
            title="Pfad zurücksetzen"
            style={{
              fontSize: 12,
              padding: '6px 12px',
              borderRadius: 999,
              border: '1px solid #d1d5db',
              background: '#ffffff',
              cursor: 'pointer',
            }}
          >
            Pfad zurücksetzen
          </button>
        </div>
      </header>
  
      {/* 🟦 Hauptlayout (Sidebar + Main) */}
      <div
        style={{
          display: 'flex',
          height: '100%',
          paddingTop: 64, // Platz für Header
        }}
      >
        {/* Links: Pfad / Historie (unverändert) */}
        <div
          style={{
            width: 260,
            borderRight: '1px solid #e2e8f0',
            padding: '16px 12px',
            overflowY: 'auto',
            background: '#f8fafc',
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: 8, fontSize: 13 }}>Pfad / Historie</div>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {path.map((step, idx) => {
              const id = step.id;
              let label = id;
              if (id.includes('__req__summary')) {
                const leafId = id.split('__req__')[0];
                label = `Summary – ${decisionTree[leafId]?.label ?? leafId}`;
              } else if (id.includes('__req__')) {
                const [leafId] = id.split('__req__');
                const { reqs } = getRequirementChain(leafId);
                const req = reqs.find((r) => r.id === id);
                label = req?.text ?? id;
              } else {
                label = decisionTree[id]?.label ?? id;
              }
  
              const isActive = idx === currentStepIndex;
  
              return (
                <li
                  key={id + idx}
                  onClick={() => jumpToStep(idx)}
                  style={{
                    padding: '6px 8px',
                    borderRadius: 6,
                    marginBottom: 4,
                    cursor: idx === currentStepIndex ? 'default' : 'pointer',
                    background: isActive ? '#e0f2fe' : 'transparent',
                    border: isActive ? '1px solid #60a5fa' : '1px solid transparent',
                    fontSize: 12,
                  }}
                >
                  <div style={{ fontWeight: isActive ? 600 : 500, marginBottom: 2 }}>
                    {idx + 1}. {label}
                  </div>
                  {answers[id] && (
                    <div className="rf-meta">
                      Antwort: {answers[id] === 'yes' ? 'Ja' : 'Nein'}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
  
        {/* Mitte: Decision Card (zentriert, etwas breiter) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 24,
            overflow: 'auto',
            background: '#f3f4f6',
          }}
        >
          <div style={{ width: '100%', maxWidth: 960 }}>
            <div className="rf-meta" style={{ marginBottom: 12 }}>
            </div>
            {centerCard}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState('welcome'); // 'welcome' | 'creator' | 'wizard'
  const [creator, setCreator] = useState('');

  if (view === 'welcome') {
    return <WelcomeScreen onStart={() => setView('creator')} />;
  }

  if (view === 'creator') {
    return (
      <CreatorScreen
        value={creator}
        onChange={setCreator}
        onBack={() => setView('welcome')}
        onConfirm={() => {
          if (creator.trim()) {
            setView('wizard');
          }
        }}
      />
    );
  }

  return <Wizard createdBy={creator || 'Unbekannt'} />;
}

