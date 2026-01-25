// src/decisionTreeModel.js

export const EU_AI_ACT_LINKS = {
  ART_3: 'https://ai-act-law.eu/de/artikel/3/',
  ART_5: 'https://ai-act-law.eu/de/artikel/5/',
  ART_6: 'https://ai-act-law.eu/de/artikel/6/',
  ART_9: 'https://ai-act-law.eu/de/artikel/9/',
  ART_10: 'https://ai-act-law.eu/de/artikel/10/',
  ART_11: 'https://ai-act-law.eu/de/artikel/11/',
  ART_12: 'https://ai-act-law.eu/de/artikel/12/',
  ART_13: 'https://ai-act-law.eu/de/artikel/13/',
  ART_14: 'https://ai-act-law.eu/de/artikel/14/',
  ART_15: 'https://ai-act-law.eu/de/artikel/15/',
  ART_16: 'https://ai-act-law.eu/de/artikel/16/',
  ART_26: 'https://ai-act-law.eu/de/artikel/26/',
  ART_27: 'https://ai-act-law.eu/de/artikel/27/',
  ART_43: 'https://ai-act-law.eu/de/artikel/43/',
  ART_48: 'https://ai-act-law.eu/de/artikel/48/',
  ART_49: 'https://ai-act-law.eu/de/artikel/49/',
  ART_50: 'https://ai-act-law.eu/de/artikel/50/',
  ART_60: 'https://ai-act-law.eu/de/artikel/60/',
  ART_72: 'https://ai-act-law.eu/de/artikel/72/',
  ART_73: 'https://ai-act-law.eu/de/artikel/73/',
  ANHANG_3: 'https://ai-act-law.eu/de/anhang/3/',
  ANHANG_4: 'https://ai-act-law.eu/de/anhang/4/',
}

export const DORA_LINKS = {
  ART_5: 'https://digitale-operationale-resilienz.de/artikel-5-dora/',
  ART_6: 'https://digitale-operationale-resilienz.de/artikel-6-dora/',
  ART_8: 'https://digitale-operationale-resilienz.de/artikel-8-dora/',
  ART_9: 'https://digitale-operationale-resilienz.de/artikel-9-dora/',
  ART_11: 'https://digitale-operationale-resilienz.de/artikel-11-dora/',
  ART_12: 'https://digitale-operationale-resilienz.de/artikel-12-dora/',
  ART_13: 'https://digitale-operationale-resilienz.de/artikel-13-dora/',
  ART_14: 'https://digitale-operationale-resilienz.de/artikel-14-dora/',
  ART_16: 'https://digitale-operationale-resilienz.de/artikel-16-dora/',
  ART_17: 'https://digitale-operationale-resilienz.de/artikel-17-dora/',
  ART_18: 'https://digitale-operationale-resilienz.de/artikel-18-dora/',
  ART_19: 'https://digitale-operationale-resilienz.de/artikel-19-dora/',
  ART_20: 'https://digitale-operationale-resilienz.de/artikel-20-dora/',
  ART_23: 'https://digitale-operationale-resilienz.de/artikel-23-dora/',
  ART_24: 'https://digitale-operationale-resilienz.de/artikel-24-dora/',
  ART_25: 'https://digitale-operationale-resilienz.de/artikel-25-dora/',
  ART_26: 'https://digitale-operationale-resilienz.de/artikel-26-dora/',
  ART_27: 'https://digitale-operationale-resilienz.de/artikel-27-dora/',
  ART_28: 'https://digitale-operationale-resilienz.de/artikel-28-dora/',
  ART_29: 'https://digitale-operationale-resilienz.de/artikel-29-dora/',
  ART_30: 'https://digitale-operationale-resilienz.de/artikel-30-dora/',
  ART_31: 'https://digitale-operationale-resilienz.de/artikel-31-dora/',
  }

//export type EuAiActReferenceId = keyof typeof EU_AI_ACT_LINKS;


// -------------------- Obligations Catalog --------------------
// articles = "Paragraphen/Artikel" (Anzeige in Tooltips + Export)
// items = konkrete Anforderungen (Requirement-Chain)
export const obligationsCatalog = {

// decisionTreeModel.js (nur obligationsCatalog-Ausschnitt)
// Ergänzung: items bekommen optional { info, examples }
AI_ACT_NICHT_ZUTREFFEND: {
  label: 'EU AI Act: Nicht anwendbar – Basis-Hinweise',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 3 (Definition KI-System)'],
  items: [
    {
      id: 'KI_NZ_KLASSIFIZIERUNGSHINWEIS',
      question:
        'Ist die Einstufung „kein KI-System“ dokumentiert und begründet (Geltungsbereich, Systembeschreibung, Abgrenzung)?',
      todo: 'Einstufung „kein KI-System“ dokumentieren und nachvollziehbar begründen (Geltungsbereich, Systembeschreibung, Abgrenzung).',
      reference: 'EU AI Act (2024), Art. 3',
      referenceId: 'ART_3',
      referenceUrl: EU_AI_ACT_LINKS.ART_3,
      evidence: 'Nachweis: Klassifikationsmemo, Systembeschreibung, formale Freigabe/Review',
      info:
        'Die Begründung sollte nachvollziehbar erklären, warum die Definition nach Art. 3 EU AI Act nicht erfüllt ist (z. B. kein Inferenz-/Lernmechanismus, keine modellbasierte Ausgabe).',
      examples: [
        'Memo enthält Abgrenzung zu regelbasierten Entscheidungstabellen ohne Modell.',
        'Systembeschreibung nennt Inputs/Outputs und begründet fehlende KI-Definitionselemente.',
      ],
    },
    {
      id: 'KI_NZ_GOVERNANCE_BASIS',
      canonicalId: 'KI_GOV_FREIGABEPROZESS',
      question:
        'Sind trotz Nicht-Anwendbarkeit des EU AI Act interne Governance- und Freigabekontrollen für das System definiert?',
      todo: 'Interne Governance- und Freigabekontrollen für das System festlegen und dokumentieren (trotz Nicht-Anwendbarkeit des EU AI Act).',
      reference: 'EU AI Act (2024) – Governance-Basis (intern)',
      evidence: 'Nachweis: Freigabeprozess, RACI, Richtlinie/Checkliste',
      info:
        'Auch wenn der EU AI Act nicht anwendbar ist, reduzieren Basis-Kontrollen Risiken (z. B. IT-Sicherheit, Datenschutz, Modell-/Datenänderungen).',
      examples: [
        'Es gibt einen dokumentierten Freigabeprozess mit Verantwortlichen und Prüfschritten.',
        'RACI ist festgelegt (Verantwortlicher, IT-Sicherheit, Datenschutz, Compliance).',
      ],
    },
  ],
},

KI_VERBOTENE_PRAKTIKEN: {
  label: 'EU AI Act: Verbotene Praktiken – Sofortmaßnahmen & Eskalation',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 5 (Verbotene Praktiken)'],
  items: [
    {
      id: 'KI_VERB_STOPP_INBETRIEBNAHME',
      question:
        'Wurde die Nutzung bzw. (geplante) Inbetriebnahme des Systems gestoppt und als Maßnahme dokumentiert?',
      todo: 'Nutzung/Inbetriebnahme des Systems stoppen und den Stopp als Maßnahme nachvollziehbar dokumentieren.',
      reference: 'EU AI Act (2024), Art. 5',
      referenceId: 'ART_5',
      referenceUrl: EU_AI_ACT_LINKS.ART_5,
      evidence: 'Nachweis: Stopp-Entscheidung, Ticket/Änderung, Betriebsfreigabe entzogen',
      info:
        'Der Stopp sollte technisch und organisatorisch wirksam sein (z. B. Feature deaktiviert, Zugriff gesperrt, Rücksetzung/Deaktivierung im Betrieb).',
      examples: [
        'Ticket-ID dokumentiert Deaktivierung und Zeitpunkt.',
        'Betriebsfreigabe entzogen und im Freigabegremium protokolliert.',
      ],
    },
    {
      id: 'KI_VERB_ESKALATION',
      question:
        'Wurde eine formale Eskalation an Recht/Compliance/Risikomanagement durchgeführt und dokumentiert?',
      todo: 'Formale Eskalation an Recht/Compliance/Risikomanagement durchführen und als Fallakte (z. B. Fall-ID) dokumentieren.',
      reference: 'EU AI Act (2024), Art. 5',
      referenceId: 'ART_5',
      referenceUrl: EU_AI_ACT_LINKS.ART_5,
      evidence: 'Nachweis: Eskalationsmail/Fall-ID, Review-Protokoll, Entscheidungsgremium',
      info:
        'Die Eskalation sollte eine eindeutige Fallakte haben (Fall-ID) und die Entscheidungskompetenz (z. B. Compliance/Recht/Risikomanagement Committee) muss klar geregelt sein.',
      examples: [
        'Eskalationsmail mit Fall-ID und Zusammenfassung der verbotenen Praxis.',
        'Review-Protokoll dokumentiert Entscheidung und Verantwortliche.',
      ],
    },
    {
      id: 'KI_VERB_ENTSCHEID_SANIERUNG',
      question:
        'Liegt eine dokumentierte Entscheidung vor, ob das Vorhaben abgebrochen oder regelkonform neu zugeschnitten wird?',
      todo: 'Dokumentierte Entscheidung herbeiführen und festhalten: Vorhaben abbrechen oder regelkonform neu zuschneiden (inkl. Maßnahmenplan).',
      reference: 'EU AI Act (2024), Art. 5',
      referenceId: 'ART_5',
      referenceUrl: EU_AI_ACT_LINKS.ART_5,
      evidence: 'Nachweis: Managemententscheidung, Maßnahmenplan',
      info:
        'Wenn „neu zuschneiden“: klarer neuer Geltungsbereich, aktualisierte Anforderungen, erneute Einstufung und formale Freigabe.',
      examples: [
        'Managemententscheidung: Abbruch inkl. Begründung und Lessons Learned.',
        'Maßnahmenplan beschreibt neue Systemgrenzen und erneute Klassifikation.',
      ],
    },
  ],
},

KI_HR_ANBIETER: {
  label: 'EU AI Act: Hochrisiko-KI – Kernpflichten (Anbieter)',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 9–15'],
  items: [
    {
      id: 'KI_HR_RM_PROZESS',
      question:
        'Gibt es einen dokumentierten KI-Risikomanagementprozess, der Risiken identifiziert, bewertet und Maßnahmen festlegt?',
      todo: 'KI-Risikomanagementprozess definieren, dokumentieren und in Kraft setzen (Identifikation, Bewertung, Maßnahmen, Verantwortlichkeiten).',
      reference: 'EU AI Act (2024), Art. 9',
      referenceId: 'ART_9',
      referenceUrl: EU_AI_ACT_LINKS.ART_9,
      evidence: 'Nachweis: Prozessbeschreibung, Risiko-Register, Freigabeprotokoll',
      info:
        'Der Prozess sollte KI-spezifische Risiken (z. B. Fehlklassifikation, Bias, Datenqualität, (Modell-)Drift als Leistungs-/Datenverschiebung) abdecken und Verantwortlichkeiten klar zuweisen.',
      examples: [
        'Risiko-Register enthält KI-Risiken, Bewertung und Maßnahmen inkl. Verantwortlichen.',
        'Freigabeprotokoll dokumentiert akzeptierte Restrisiken.',
      ],
    },
    {
      id: 'KI_HR_RM_LEBENSZYKLUS',
      question:
        'Werden KI-Risiken vor der Produktivsetzung bewertet und während des Betriebs bei relevanten Änderungen regelmäßig überprüft?',
      todo: 'Regelmäßige Risiko-Reviews vor Produktivsetzung und im Betrieb etablieren (inkl. Review bei relevanten Änderungen).',
      reference: 'EU AI Act (2024), Art. 9',
      referenceId: 'ART_9',
      referenceUrl: EU_AI_ACT_LINKS.ART_9,
      evidence: 'Nachweis: Risiko-Reviews, Überwachungsberichte',
      info:
        '„Relevante Änderungen“ sind z. B. Modellwechsel, Neutraining/Feinabstimmung, neue Datenquellen, neue Nutzergruppe oder Prozessänderungen.',
      examples: [
        'Überwachungsbericht zeigt regelmäßige Reviews (z. B. monatlich/quartalsweise).',
      ],
    },
    {
      id: 'KI_HR_DATENHERKUNFT_RECHTE',
      question:
        'Sind Datenquellen, Datenherkunft und Nutzungsrechte für Training und Test dokumentiert?',
      todo: 'Datenquellen, Datenherkunft und Nutzungsrechte für Training und Test vollständig dokumentieren und nachvollziehbar nachweisen.',
      reference: 'EU AI Act (2024), Art. 10',
      referenceId: 'ART_10',
      referenceUrl: EU_AI_ACT_LINKS.ART_10,
      evidence: 'Nachweis: Datenherkunft (Data Lineage)/Datasheets, Verträge/Lizenzen, Datenkatalog',
      info:
        'Dokumentation sollte Herkunft, Erhebung, Zweckbindung, Rechtsgrundlage und Lizenz-/Vertragslage abdecken.',
      examples: [
        'Datenkatalogeintrag mit Quelle, Zweck, Eigentümer, Rechtsgrundlage.',
        'Verträge/Lizenzen sind versioniert im Repository abgelegt.',
      ],
    },
    {
      id: 'KI_HR_DATENQUALITAET_KRITERIEN',
      question:
        'Gibt es definierte Kriterien zur Datenqualität und werden diese vor Einsatz des Modells nachweisbar geprüft?',
      todo: 'Kriterien zur Datenqualität festlegen und die Datenqualität vor Modell-Einsatz nachweisbar prüfen.',
      reference: 'EU AI Act (2024), Art. 10',
      referenceId: 'ART_10',
      referenceUrl: EU_AI_ACT_LINKS.ART_10,
      evidence: 'Nachweis: Datenqualitätsbericht, Prüfprotokoll, Freigabeentscheidung',
      info:
        'Kriterien umfassen typischerweise Vollständigkeit, Aktualität, Konsistenz, Repräsentativität sowie Umgang mit fehlenden Werten und Ausreißern.',
      examples: [
        'Datenqualitätsbericht enthält definierte Schwellenwerte und Ergebnisse.',
        'Freigabeentscheidung referenziert Prüfprotokoll und Abweichungen.',
      ],
    },
    {
      id: 'KI_HR_BIAS_MINDERUNG',
      question:
        'Sind Maßnahmen zur Erkennung und Reduktion von Bias in Trainings- und Testdaten dokumentiert und umgesetzt?',
      todo: 'Maßnahmen zur Bias-Erkennung und -Reduktion definieren, dokumentieren und umsetzen (Trainings- und Testdaten).',
      reference: 'EU AI Act (2024), Art. 10',
      referenceId: 'ART_10',
      referenceUrl: EU_AI_ACT_LINKS.ART_10,
      evidence: 'Nachweis: Bias-Checks, Fairness-Bericht, Maßnahmenplan',
      info:
        'Bias-Checks sollten für relevante Gruppen/Segmente nachvollziehbar sein (z. B. Equal Opportunity, Disparate Auswirkungen – je nach Anwendungsfall).',
      examples: [
        'Fairness-Bericht vergleicht Metriken zwischen Gruppen und dokumentiert Maßnahmen.',
        'Maßnahmenplan beschreibt Sampling, Feature-Review oder Nachbearbeitung.',
      ],
    },
    {
      id: 'KI_HR_TECH_DOKU_AKTUELL',
      canonicalId: 'KI_DOK_TECH_AKTUELL',
      question: 'Wurde eine technische Dokumentation erstellt und wird sie bei Änderungen aktuell gehalten?',
      todo: 'Technische Dokumentation erstellen und bei Änderungen konsequent aktuell halten (versioniert, nachvollziehbar).',
      reference: 'EU AI Act (2024), Art. 11',
      referenceId: 'ART_11',
      referenceUrl: EU_AI_ACT_LINKS.ART_11,
      evidence: 'Nachweis: Dokumentationspaket, Versionshistorie, Änderungs-Links',
      info:
        'Technische Dokumentation sollte Modell, Daten, Schnittstellen, Betrieb, Tests, Risiken und Governance abdecken und versioniert sein.',
      examples: [
        'Versionshistorie verknüpft Releases mit Änderungsanträgen.',
        'Dokumentationspaket enthält Architekturdiagramm und Modellbeschreibung.',
      ],
    },
    {
      id: 'KI_HR_PROTOKOLLIERUNG_FAEHIGKEIT',
      canonicalId: 'KI_PROTOKOLLIERUNG_PRUEFPFAD',
      question:
        'Sind Protokollierungsfunktionen für relevante Systemereignisse vorgesehen und technisch möglich (audit-tauglich)?',
      todo:
        'Protokollierungsfähigkeit für relevante Systemereignisse sicherstellen und dokumentieren (Audit-Tauglichkeit, Felder, Modellversion, IDs).',
      reference: 'EU AI Act (2024), Art. 12',
      referenceId: 'ART_12',
      referenceUrl: EU_AI_ACT_LINKS.ART_12,
      evidence: 'Nachweis: Protokollierungskonzept, Feldliste, technische Spezifikation',
      info:
        'Protokolle sollten für Audit- und Vorfallanalyse geeignet sein (z. B. Modellversion, Eingabe-/Ausgabe-Referenzen, Nutzer-/Systemaktionen) unter Beachtung des Datenschutzes.',
      examples: [
        'Spezifikation definiert Pflichtfelder (Zeitstempel, Request-ID, Modellversion).',
        'Architektur beschreibt, wo Protokolle erzeugt/weitergeleitet werden (z. B. an ein SIEM).',
      ],
    },
    {
      id: 'KI_HR_INFO_FUER_BETREIBER_BEREITGESTELLT',
      question:
        'Werden Betreibern ausreichende Informationen zur sicheren Nutzung bereitgestellt (Zweck, Grenzen, Betriebsvoraussetzungen)?',
      todo:
        'Betriebs-/Nutzungsinformationen für eine sichere Nutzung bereitstellen (Zweck, Grenzen, Betriebsvoraussetzungen, Do/Don’t).',
      reference: 'EU AI Act (2024), Art. 13',
      referenceId: 'ART_13',
      referenceUrl: EU_AI_ACT_LINKS.ART_13,
      evidence: 'Nachweis: Nutzer-/Betriebsdokumentation, Handbuch, Versionshinweise',
      info:
        'Mindestens: Zweckbestimmung, bekannte Grenzen, erforderliche Datenqualität, geeignete Nutzerrollen, Fehlerszenarien und sichere Betriebsparameter.',
      examples: [
        'Handbuch enthält Abschnitt „Zweck & Grenzen“ sowie sichere Betriebsparameter.',
        'Versionshinweise nennen Änderungen und Risiken pro Release.',
      ],
    },
    {
      id: 'KI_HR_MENSCHLICHE_AUFSICHT_MECHANISMEN',
      question:
        'Sind Mechanismen zur menschlichen Aufsicht im Systemdesign vorgesehen (z. B. manuelle Prüfung, Override, Abschaltmöglichkeit)?',
      todo:
        'Mechanismen für menschliche Aufsicht im Systemdesign vorsehen und dokumentieren (Eingriff, manuelle Prüfung, Abschalt-/Override-Möglichkeit).',
      reference: 'EU AI Act (2024), Art. 14',
      referenceId: 'ART_14',
      referenceUrl: EU_AI_ACT_LINKS.ART_14,
      evidence: 'Nachweis: Aufsichtskonzept, Architektur/UX, Bedien-/Abschaltverfahren',
      info:
        'Aufsicht muss praktisch durchführbar sein (z. B. Override-Prozess, klare Kriterien für Eingriffe, Zuständigkeiten und Schulung).',
      examples: [
        'Override-/Stopp-Funktion ist beschrieben und technisch vorgesehen.',
        'UX/Prozess zeigt, wie ein Mensch Entscheidungen prüfen/übersteuern kann.',
      ],
    },
    {
      id: 'KI_HR_LEISTUNGSTESTS',
      question:
        'Sind messbare Leistungskennzahlen definiert und durch Tests vor der Produktivsetzung belegt?',
      todo:
        'Leistungskennzahlen definieren und durch Tests vor der Produktivsetzung nachweisbar belegen (inkl. Akzeptanzkriterien).',
      reference: 'EU AI Act (2024), Art. 15',
      referenceId: 'ART_15',
      referenceUrl: EU_AI_ACT_LINKS.ART_15,
      evidence: 'Nachweis: Testbericht, Akzeptanzkriterien, Freigabeprotokoll',
      info:
        'Kennzahlen müssen Anwendungsfall-spezifisch sein (z. B. Precision/Recall, Fehlerquote, SLA/SLO) und Akzeptanzkriterien enthalten.',
      examples: [
        'Testbericht zeigt Metriken vs. Akzeptanzkriterien und Freigabe.',
        'Freigabeprotokoll enthält Risikobewertung bei Grenzfällen.',
      ],
    },
    {
      id: 'KI_HR_ROBUSTHEITSTESTS',
      question:
        'Wurde Robustheit gegen typische Stör- und Fehlerszenarien getestet und dokumentiert?',
      todo:
        'Robustheitstests gegen typische Stör- und Fehlerszenarien durchführen und dokumentieren (inkl. Maßnahmen bei Feststellungen).',
      reference: 'EU AI Act (2024), Art. 15',
      referenceId: 'ART_15',
      referenceUrl: EU_AI_ACT_LINKS.ART_15,
      evidence: 'Nachweis: Robustheitstestplan, Testergebnisse, Maßnahmenplan',
      info:
        'Typisch: fehlerhafte Eingaben, Ausreißer, fehlende Daten, Verteilungsänderung (Drift), Systemausfälle, Rate Limits.',
      examples: [
        'Testplan enthält negative Tests und Abbruch-/Rueckfall-Verhalten.',
        'Maßnahmenplan adressiert gefundene Schwachstellen.',
      ],
    },
    {
      id: 'KI_HR_SICHERHEITSBEWERTUNG',
      question:
        'Wurde eine Cybersecurity-/Sicherheitsbewertung für die KI-Komponente durchgeführt und dokumentiert?',
      todo:
        'Sicherheitsbewertung (Cybersecurity) der KI-Komponente durchführen, dokumentieren und Maßnahmen (Härtung) nachverfolgen.',
      reference: 'EU AI Act (2024), Art. 15',
      referenceId: 'ART_15',
      referenceUrl: EU_AI_ACT_LINKS.ART_15,
      evidence: 'Nachweis: Sicherheitsbewertung, Penetrationstest/Bedrohungsmodell, Härtungsplan',
      info:
        'Umfang: Bedrohungsmodell, Zugriffspfade, Datenabfluss, Lieferkette, Modellangriffe (z. B. Prompt-Injection bei LLM-Anwendungsfälle).',
      examples: [
        'Bedrohungsmodell und Maßnahmen (Härtung) sind dokumentiert und umgesetzt.',
        'Penetrationstest umfasst relevante Schnittstellen und Rollen.',
      ],
    },
  ],
},

KI_HR_BETREIBER: {
  label: 'EU AI Act: Hochrisiko-KI – Pflichten (Betreiber) inkl. Art. 26',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 26 (Betreiberpflichten) i. V. m. Art. 12–14'],
  items: [
    {
      id: 'KI_HR_BETRIEB_GEMAESS_ZWECKBESTIMMUNG',
      canonicalId: 'KI_HR_BETRIEB_GEMAESS_ZWECKBESTIMMUNG',
      question:
        'Wird das Hochrisiko-KI-System gemäß Zweckbestimmung und Betriebsanleitung eingesetzt (Zweckbestimmung, Grenzen, Voraussetzungen)?',
      todo:
        'Sicherstellen und dokumentieren, dass das System gemäß Zweckbestimmung/Betriebsanleitung eingesetzt wird (zulässige Nutzung, Grenzen, Voraussetzungen). Abweichungen nur nach formaler Prüfung/Freigabe.',
      reference: 'EU AI Act (2024), Art. 26 i. V. m. Art. 13',
      referenceId: 'ART_26',
      referenceUrl: EU_AI_ACT_LINKS.ART_26,
      evidence: 'Nachweis: SOP/Betriebshandbuch, Betriebsfreigabe, Schulungsnachweis, Abweichungsfreigaben',
      info:
        'Art. 26 ist im Audit der Kern: Betrieb „wie vorgesehen“ plus dokumentierte Abweichungen (inkl. Kontrollen/Gates).',
      examples: [
        'SOP beschreibt zulässige Anwendungsfälle, Inputs, Schwellenwerte, Grenzen und Eskalation.',
        'Nutzung außerhalb des Geltungsbereichs ist verboten oder erfordert formale Freigabe.',
      ],
    },
    {
      id: 'KI_HR_BETRIEB_MENSCHLICHE_AUFSICHT',
      canonicalId: 'KI_HR_BETRIEB_MENSCHLICHE_AUFSICHT',
      question:
        'Ist menschliche Aufsicht im Betrieb umgesetzt (Rollen, Eingriffskriterien, Schulung, Override/Stopp/Degrade)?',
      todo:
        'Menschliche Aufsicht im Betrieb umsetzen und nachweisen: Rollen/RACI, Eingriffskriterien, Schulung, Override-/Abschaltprozess sowie Kriterien für Stopp/Degrade-Entscheidungen.',
      reference: 'EU AI Act (2024), Art. 26 i. V. m. Art. 14',
      referenceId: 'ART_14',
      referenceUrl: EU_AI_ACT_LINKS.ART_14,
      evidence: 'Nachweis: RACI, Schulungsunterlagen, Betriebsprozesse, Override-/Stopp-Prozess, Entscheidungsprotokoll',
      info:
        '„Human in the loop“ muss im Betrieb wirksam sein – nicht nur als Richtlinie. Besonders wichtig bei Automatisierungs-Bias.',
      examples: [
        'Definierte Rolle darf Empfehlungen überstimmen und dokumentiert Abweichungen.',
        'Klare Stopp-/Degrade-Regeln bei Drift, Datenfehlern und Ausfällen.',
      ],
    },
    {
      id: 'KI_HR_BETRIEB_PROTOKOLLIERUNG_AKTIV',
      canonicalId: 'KI_HR_BETRIEB_PROTOKOLLIERUNG_AKTIV',
      question:
        'Sind Protokollierung/Logs im Betrieb aktiviert (soweit unter eurer Kontrolle) und werden sie angemessen aufbewahrt/ausgewertet?',
      todo:
        'Protokollierung aktivieren (soweit unter eurer Kontrolle), Aufbewahrung festlegen und Auswertung für Betrieb/Vorfälle sicherstellen. Zugriff auf Protokolle regeln.',
      reference: 'EU AI Act (2024), Art. 26 (Betriebsüberwachung) i. V. m. Art. 12',
      referenceId: 'ART_12',
      referenceUrl: EU_AI_ACT_LINKS.ART_12,
      evidence: 'Nachweis: Protokollierungskonzept, Aufbewahrungsfrist, SIEM/Überwachung, Beispiel-Protokolle, Zugriffskontrollen',
      info:
        'Auditfähig wird es erst, wenn Protokolle tatsächlich verfügbar sind (Kontrolle, Aufbewahrungsfrist, Zugriff) und zur Überwachung genutzt werden.',
      examples: [
        'Protokolle enthalten Inputs/Outputs, Versionen, Overrides und Fehlerzustände.',
        'SIEM-Regeln/Alarme für Anomalien, Ausfälle und Richtlinienverstöße.',
      ],
    },
    {
      id: 'KI_HR_BETRIEB_UEBERWACHUNG',
      canonicalId: 'KI_HR_BETRIEB_UEBERWACHUNG',
      question:
        'Gibt es eine laufende Überwachung im Betrieb (Qualität/Drift/Vorfälle) inkl. klarer Reaktions- und Eskalationsprozesse?',
      todo:
        'Betriebsüberwachung definieren und umsetzen (Qualität, Drift als Leistungs-/Datenverschiebung, Verfügbarkeit, Datenanomalien, Vorfallprozess). Reaktionszeiten, Eskalation und Abhilfemaßnahmen dokumentieren.',
      reference: 'EU AI Act (2024), Art. 26',
      referenceId: 'ART_26',
      referenceUrl: EU_AI_ACT_LINKS.ART_26,
      evidence: 'Nachweis: Überwachungs-Dashboard, Alarmierung, Vorfall-Betriebshandbuch, Postmortem-Berichte, KPI/SLO',
      info:
        'Art. 26 verlangt „Betrieb unter Kontrolle“. Ohne Überwachung ist der Nachweis im Audit schwach.',
      examples: [
        'Drift-Checks mit Schwellenwerten plus automatischem Stopp/Degrade.',
        'Vorfall-Betriebshandbuch inkl. Kommunikation an Anbieter/Stakeholder.',
      ],
    },
    {
      id: 'KI_HR_BETRIEB_VORFAELLE_BEHOERDEN_ZUSAMMENARBEIT',
      canonicalId: 'KI_HR_BETRIEB_VORFAELLE_BEHOERDEN_ZUSAMMENARBEIT',
      question:
        'Sind Prozesse zur Behandlung schwerwiegender Vorfälle und zur Zusammenarbeit mit Behörden/Anbieter definiert (inkl. Eskalation/Informationen)?',
      todo:
        'Prozess für schwerwiegende Vorfälle definieren (Klassifikation, Eskalation, Informationsweitergabe an Anbieter, ggf. Behördenkommunikation) und im Betrieb üben. Verantwortlichkeiten und Fristen festlegen.',
      reference: 'EU AI Act (2024), Art. 26 (Betrieb) – i. V. m. Vorfall-Prozesse',
      referenceId: 'ART_26',
      referenceUrl: EU_AI_ACT_LINKS.ART_26,
      evidence: 'Nachweis: Vorfallsrichtlinie, Melde-/Eskalationsmatrix, Übungsprotokolle, Kommunikationsvorlagen',
      info:
        'Auch wenn Art. 73 primär Anbieter betrifft: als Betreiber braucht ihr auditfähige Eskalation und eine klare Lieferanten-Schnittstelle.',
      examples: [
        'Eskalationsmatrix (kritisch/hoch/mittel) plus Kontaktpunkte beim Anbieter.',
      ],
    },
    {
      id: 'KI_HR_BETRIEB_DSFA_GRFA_VERZAHNUNG',
      canonicalId: 'KI_HR_BETRIEB_DSFA_GRFA_VERZAHNUNG',
      question:
        'Ist die Governance-Verzahnung zu DSFA/GRFA/Risiko-Reviews dokumentiert (falls einschlägig, z. B. Finanz-Anwendungsfälle)?',
      todo:
        'Verzahnung dokumentieren: Datenschutz-Folgenabschätzung (DSFA), ggf. Grundrechte-/Risikoanalysen, Freigaben/Reviews und Auflagen im Betrieb (inkl. Tracking).',
      reference: 'EU AI Act (2024), Art. 26',
      referenceId: 'ART_26',
      referenceUrl: EU_AI_ACT_LINKS.ART_26,
      evidence: 'Nachweis: DSFA-Zusammenfassung, Risiko-Review-Protokolle, Auflagen-Tracking, Freigaben',
      info:
        'In der Praxis erwarten Prüfer eine konsistente Kette: Risikoanalyse → Freigabe → Betriebskontrollen → Überwachung/Vorfälle.',
      examples: [
        'Feststellungen aus DSFA/Reviews sind als Auflagen im Betriebshandbuch verankert.',
        'Regelmäßige Reviews inkl. Änderungen, Drift und Vorfällen.',
      ],
    },
  ],
},

KI_TRANSPARENZ_ART_50: {
  label: 'EU AI Act: Transparenzpflichten',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 50'],
  items: [
    {
      id: 'KI_TP_INTERAKTIONSHINWEIS',
      question:
        'Erhalten Nutzende einen klaren Hinweis, dass sie mit einem KI-System interagieren (z. B. Hinweistext in der Benutzeroberfläche)?',
      todo: 'Einen klaren, sichtbaren Hinweis zur KI-Interaktion in der Benutzeroberfläche bereitstellen und formal freigeben lassen.',
      reference: 'EU AI Act (2024), Art. 50',
      referenceId: 'ART_50',
      referenceUrl: EU_AI_ACT_LINKS.ART_50,
      evidence: 'Nachweis: Screenshot/UI-Text, freigegebene Hinweise/Disclaimer',
      info:
        'Der Hinweis sollte verständlich, sichtbar und kontextnah sein (nicht nur in Fußnoten).',
      examples: [
        'UI zeigt deutlich „KI-gestützt“/„KI-System“ beim relevanten Schritt.',
        'Freigabe des Hinweistexts ist dokumentiert (z. B. Recht/Compliance).',
      ],
    },
    {
      id: 'KI_TP_GENERATIVE_OUTPUTS',
      question:
        'Erzeugt das System Inhalte (Text, Bild, Audio oder Video), die an Nutzende ausgegeben werden?',
      todo: 'Prüfen und dokumentieren, ob das System Inhalte generiert, die an Nutzende ausgegeben werden (Text/Bild/Audio/Video).',
      reference: 'EU AI Act (2024), Art. 50',
      referenceId: 'ART_50',
      referenceUrl: EU_AI_ACT_LINKS.ART_50,
      evidence: 'Nachweis: Anwendungsfall-Beschreibung, UI-Flows',
      info:
        'Relevant sind sowohl vollständig generierte Inhalte als auch KI-unterstützte Zusammenfassungen/Umformulierungen.',
      examples: [
        'Chatbot generiert Antworttexte für Kundinnen/Kunden.',
        'System erzeugt automatisch Zusammenfassungen aus Dokumenten.',
      ],
    },
    {
      id: 'KI_TP_INHALTSKENNZEICHNUNG',
      question:
        'Werden KI-generierte Inhalte in den relevanten Fällen eindeutig gekennzeichnet?',
      todo: 'Kennzeichnung für KI-generierte Inhalte definieren und in allen relevanten Fällen konsistent umsetzen.',
      reference: 'EU AI Act (2024), Art. 50',
      referenceId: 'ART_50',
      referenceUrl: EU_AI_ACT_LINKS.ART_50,
      evidence: 'Nachweis: UI/Vorlagen, Inhaltsrichtlinie, Freigabe',
      info:
        'Kennzeichnung sollte konsistent sein (Vorlagen/Richtlinien) und die Fälle definieren, in denen Labeling erforderlich ist.',
      examples: [
        'Output enthält Label „KI-generiert“ im UI/Export.',
        'Inhaltsrichtlinie beschreibt Ausnahmen und Kennzeichnungsregeln.',
      ],
    },
    {
      id: 'KI_TP_ZWECKINFO',
      question: 'Ist der Zweck des KI-Systems für Nutzende dokumentiert und verfügbar?',
      todo: 'Zweck des KI-Systems für Nutzende dokumentieren und leicht zugänglich bereitstellen (UI/Handbuch/Intranet).',
      reference: 'EU AI Act (2024), Art. 50',
      referenceId: 'ART_50',
      referenceUrl: EU_AI_ACT_LINKS.ART_50,
      evidence: 'Nachweis: Nutzerinformation/Handbuch, Intranet-Seite',
      info:
        'Der Zweck sollte nicht nur intern beschrieben sein, sondern dort verfügbar sein, wo Nutzende Entscheidungen treffen.',
      examples: [
        'Kurzbeschreibung im UI plus detaillierter Abschnitt im Handbuch.',
        'Intranet-Seite mit Zweck, Kontakt und Verantwortlichen.',
      ],
    },
    {
      id: 'KI_TP_GRENZEN_INFO',
      question: 'Sind bekannte Grenzen und Limitierungen des Systems dokumentiert und verfügbar?',
      todo: 'Bekannte Grenzen und Limitierungen des Systems dokumentieren und für Nutzende verfügbar machen (inkl. Aktualisierung bei Änderungen).',
      reference: 'EU AI Act (2024), Art. 50',
      referenceId: 'ART_50',
      referenceUrl: EU_AI_ACT_LINKS.ART_50,
      evidence: 'Nachweis: Abschnitt „Einschränkungen“, Versionshinweise, Liste „Bekannte Probleme“',
      info:
        'Einschränkungen sollten praktisch nutzbar sein (z. B. „nicht für X geeignet“, „nur bei Y zuverlässig“).',
      examples: [
        'Abschnitt „Bekannte Einschränkungen“ im Handbuch und in Versionshinweisen.',
        'Dokumentierte Fehlertypen/Edge Cases und empfohlene Kontrollen.',
      ],
    },
    {
      id: 'KI_TP_ZULAESSIGE_NUTZUNG',
      question: 'Sind Vorgaben zur zulässigen Nutzung (erlaubt/unzulässig) dokumentiert und verfügbar?',
      todo: 'Vorgaben zur zulässigen und unzulässigen Nutzung dokumentieren und für Nutzende bereitstellen (inkl. Beispiele/Do/Don’t).',
      reference: 'EU AI Act (2024), Art. 50',
      referenceId: 'ART_50',
      referenceUrl: EU_AI_ACT_LINKS.ART_50,
      evidence: 'Nachweis: Nutzungsrichtlinie, Schulungsunterlagen',
      info:
        '„Erlaubt/unzulässig“ sollte konkrete Beispiele enthalten (z. B. Datenarten, Nutzerrollen, Entscheidungsarten).',
      examples: [
        'Richtlinie listet erlaubte Datenquellen und verbotene Inhalte.',
        'Schulung enthält Fallbeispiele und Prüf-/Freigabeschritte.',
      ],
    },
  ],
},

KI_KONFORMITAET_UND_DOKU: {
  label: 'EU AI Act: Konformitätsbewertung & Technische Dokumentation',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 16 ff., Art. 43 ff., Anhang IV'],
  items: [
    {
      id: 'KI_KONF_PFLICHT_GEPRUEFT',
      question:
        'Wurde dokumentiert festgestellt, ob für das System eine Konformitätsbewertung erforderlich ist?',
      todo: 'Erforderlichkeit einer Konformitätsbewertung prüfen, begründen und dokumentieren (inkl. Verweis auf relevante Artikel/Anhänge).',
      reference: 'EU AI Act (2024), Art. 43 ff.',
      referenceId: 'ART_43',
      referenceUrl: EU_AI_ACT_LINKS.ART_43,
      evidence: 'Nachweis: Klassifikationsmemo, Recht/Compliance-Notiz',
      info:
        'Die Entscheidung sollte die Einstufung (z. B. Hochrisiko) und die einschlägigen Artikel/Anhänge referenzieren.',
      examples: [
        'Memo enthält Verweis auf relevante Artikel/Anhang und Begründung.',
        'Recht/Compliance-Freigabe ist nachvollziehbar dokumentiert.',
      ],
    },
    {
      id: 'KI_KONF_DURCHGEFUEHRT',
      question:
        'Wurde die Konformitätsbewertung durchgeführt und liegt ein dokumentiertes Ergebnis vor?',
      todo: 'Konformitätsbewertung durchführen, Ergebnis dokumentieren und formale Freigabeentscheidung festhalten.',
      reference: 'EU AI Act (2024), Art. 43 ff.',
      referenceId: 'ART_43',
      referenceUrl: EU_AI_ACT_LINKS.ART_43,
      evidence: 'Nachweis: Konformitätsbewertungsbericht, Freigabeentscheidung',
      info:
        'Der Bericht sollte Umfang, Methodik, Ergebnisse, Abweichungen und Maßnahmen enthalten.',
      examples: [
        'Konformitätsbericht ist versioniert und freigegeben.',
        'Abweichungen sind mit Maßnahmen und Verantwortlichen hinterlegt.',
      ],
    },
    {
      id: 'KI_KONF_PLAN_FALLS_OFFEN',
      question:
        'Gibt es einen datierten Plan mit Verantwortlichen, falls die Konformitätsbewertung noch aussteht?',
      todo: 'Datieren und dokumentieren: Plan zur ausstehenden Konformitätsbewertung erstellen (Meilensteine, Verantwortliche, Freigabegates).',
      reference: 'EU AI Act (2024), Art. 43 ff.',
      referenceId: 'ART_43',
      referenceUrl: EU_AI_ACT_LINKS.ART_43,
      evidence: 'Nachweis: Projektplan, RACI, Meilensteine',
      info:
        'Der Plan sollte konkrete Meilensteine und Verantwortliche enthalten und ein Risiko- bzw. Go/No-Go-Kriterium definieren.',
      examples: [
        'Projektplan mit Terminen, Verantwortlichen, Abhängigkeiten und Freigabegates.',
        'RACI definiert Entscheidungsgremium und Prüffunktionen.',
      ],
    },
    {
      id: 'KI_DOK_ANHANG_IV_MINDESTUMFANG',
      canonicalId: 'KI_DOK_TECH_VOLLSTAENDIGKEIT',
      question:
        'Deckt die technische Dokumentation mindestens Zweck, Modellbeschreibung, Daten, Tests, Risiken und Betriebsvoraussetzungen ab?',
      todo: 'Technische Dokumentation gemäß Mindestanforderungen (Anhang IV) erstellen/prüfen und Vollständigkeit dokumentieren.',
      reference: 'EU AI Act (2024), Anhang IV',
      referenceId: 'ANHANG_4',
      referenceUrl: EU_AI_ACT_LINKS.ANHANG_4,
      evidence: 'Nachweis: Anhang-IV-Indexliste, Dokumentationspaket',
      info:
        'Praktisch hilft eine Indexliste, die Anhang-IV-Punkte auf konkrete Dokumente/Abschnitte abbildet.',
      examples: [
        'Indexliste verlinkt auf Doku-Abschnitte/Dateien pro Anhang-IV-Punkt.',
        'Dokumentationspaket enthält Testberichte, Risikoanalyse und Betriebsanforderungen.',
      ],
    },
    {
      id: 'KI_ROLLEN_DEFINIERT',
      canonicalId: 'KI_GOV_ROLLEN_VERANTWORTLICHKEITEN',
      question:
        'Sind Rollen (Anbieter/Betreiber) und Verantwortlichkeiten im Dokumentationspaket eindeutig beschrieben?',
      todo: 'Rollen (Anbieter/Betreiber) und Verantwortlichkeiten eindeutig definieren und im Dokumentationspaket nachvollziehbar festhalten.',
      reference: 'EU AI Act (2024), Art. 16 ff.',
      referenceId: 'ART_16',
      referenceUrl: EU_AI_ACT_LINKS.ART_16,
      evidence: 'Nachweis: Rollenbeschreibung, RACI, Vertrag/Leistungsbeschreibung (falls extern)',
      info:
        'Bei externen Parteien sollten Verantwortlichkeiten auch vertraglich klar geregelt sein (z. B. Leistungsbeschreibung, SLAs).',
      examples: [
        'RACI nennt Anbieter/Betreiber und deren Pflichten.',
        'Vertrag beschreibt Verantwortlichkeiten und Liefergegenstände.',
      ],
    },
    {
      id: 'KI_AENDERUNGSMANAGEMENT_DOKU',
      question:
        'Gibt es einen dokumentierten Änderungsprozess, der Modelländerungen (Neutraining/Feinabstimmung) vor der Produktivsetzung freigibt?',
      todo: 'Änderungsmanagement für Modelländerungen etablieren und dokumentieren (Auswirkungsanalyse, Re-Tests, Freigabe, Rücksetzung/Überwachung).',
      reference: 'EU AI Act (2024), Art. 11–12 (i. V. m. Governance)',
      referenceId: 'ART_11',
      referenceUrl: EU_AI_ACT_LINKS.ART_11,
      evidence: 'Nachweis: Änderungsrichtlinie, CAB-Protokolle, Versionshinweise',
      info:
        'Der Änderungsprozess sollte Risiko-/Auswirkungsanalyse, Re-Tests, Freigabe sowie Rücksetzung und Überwachung beinhalten.',
      examples: [
        'CAB-Protokoll dokumentiert Freigabe der Modelländerung.',
        'Versionshinweise referenzieren Tests/Auswirkungen und Freigabe.',
      ],
    },
  ],
},

KI_REGISTRIERUNG_UND_KENNZEICHNUNG: {
  label: 'EU AI Act: Registrierung & Kennzeichnung',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 49 ff., Art. 60'],
  items: [
    {
      id: 'KI_REG_PFLICHT_GEPRUEFT',
      question:
        'Wurde geprüft und dokumentiert, ob das System registrierungspflichtig ist (z. B. Hochrisiko-KI mit Registerpflicht)?',
      todo: 'Registerpflicht des Systems prüfen, begründen und dokumentieren (inkl. Entscheidung zur Registrierungspflicht).',
      reference: 'EU AI Act (2024), Art. 60',
      referenceId: 'ART_60',
      referenceUrl: EU_AI_ACT_LINKS.ART_60,
      evidence: 'Nachweis: Klassifikationsmemo, Registerpflicht-Entscheidung',
      info:
        'Die Entscheidung sollte die Einstufung und die Kriterien zur Registerpflicht nachvollziehbar dokumentieren.',
      examples: [
        'Memo enthält Entscheidung inkl. Begründung und Quellen.',
        'Registerpflicht-Entscheidung ist freigegeben und versioniert.',
      ],
    },
    {
      id: 'KI_REG_DURCHGEFUEHRT',
      question:
        'Wurde die Registrierung durchgeführt und ist die Registrierungs-ID nachvollziehbar dokumentiert?',
      todo: 'Registrierung durchführen und Registrierungs-ID inkl. Ablageort revisionssicher dokumentieren.',
      reference: 'EU AI Act (2024), Art. 60',
      referenceId: 'ART_49',
      referenceUrl: EU_AI_ACT_LINKS.ART_49,
      evidence: 'Nachweis: Register-ID, Screenshot/PDF, Ablageort',
      info:
        'Der Ablageort sollte zugriffsgeschützt und revisionssicher sein (inkl. Zeitpunkt der Registrierung).',
      examples: [
        'Screenshot/PDF der Registrierung liegt im Repository/Records-Ordner.',
        'Registrierungs-ID ist in Systemdokumentation und Freigabeakte referenziert.',
      ],
    },
    {
      id: 'KI_REG_EU_DB_URL',
      canonicalId: 'KI_REG_EU_DB_URL',
      question: 'Ist die EU-Datenbank-Referenz (URL/Eintrag) für das System dokumentiert und auffindbar?',
      todo: 'EU-DB-URL bzw. Referenz auf den Registereintrag dokumentieren (inkl. Ablageort/Verantwortliche) und in der Systemdokumentation verlinken.',
      reference: 'EU AI Act (2024), Art. 60',
      referenceId: 'ART_49',
      referenceUrl: EU_AI_ACT_LINKS.ART_49,
      evidence: 'Nachweis: Registereintrag-URL, Screenshot/PDF, Verweis in Systemdokumentation',
      info:
        'Die Referenz muss eindeutig sein (URL oder Eintrags-ID) und der Ablageort muss revisionssicher definiert sein.',
      examples: [
        'Systemdokumentation enthält einen Link auf den EU-Registereintrag inkl. Datum des Abrufs.',
        'Ablageort und Verantwortliche für Pflege/Updates sind dokumentiert.',
      ],
    },
    {
      id: 'KI_REG_GRFA_ZUSAMMENFASSUNG_VERFUEGBAR',
      canonicalId: 'KI_REG_GRFA_ZUSAMMENFASSUNG_VERFUEGBAR',
      question: 'Ist (falls erforderlich) eine GRFA-Zusammenfassung als bereitstellbare Information erstellt und abgelegt?',
      todo: 'GRFA-Zusammenfassung erstellen (falls GRFA erforderlich) und bereitstellbar ablegen (Ablageort, Version, Freigabe).',
      reference: 'EU AI Act (2024), Art. 27 (i. V. m. Register-/Anhang-Informationen)',
      referenceId: 'ART_27',
      referenceUrl: EU_AI_ACT_LINKS.ART_27,
      evidence: 'Nachweis: GRFA-Zusammenfassung, Freigabe/Review, Ablageort',
      info:
        'Die Zusammenfassung sollte den Freigabestatus, die Version und den Bereitstellungsweg eindeutig nennen.',
      examples: [
        'Dokument enthält Version, Datum und Freigabevermerk.',
        'Ablagepfad ist dokumentiert und zugriffsgeschützt.',
      ],
    },
    {
      id: 'KI_REG_DSFA_ZUSAMMENFASSUNG_VERFUEGBAR',
      canonicalId: 'KI_REG_DSFA_ZUSAMMENFASSUNG_VERFUEGBAR',
      question: 'Ist (falls anwendbar) eine DSFA-/DPIA-Zusammenfassung als bereitstellbare Information erstellt und abgelegt?',
      todo: 'DSFA/DPIA-Zusammenfassung (falls erforderlich) erstellen und bereitstellbar ablegen (Ablageort, Version, Freigabe).',
      reference: 'EU AI Act (2024), Art. 27/26 (i. V. m. Datenschutz-Folgenabschätzung, falls erforderlich)',
      referenceId: 'ART_27',
      referenceUrl: EU_AI_ACT_LINKS.ART_27,
      evidence: 'Nachweis: DSFA/DPIA-Zusammenfassung, Datenschutz-Freigabe, Ablageort',
      info:
        'Die Zusammenfassung muss bereitstellbar sein und darf keine sensiblen Details enthalten, die nicht herausgegeben werden dürfen.',
      examples: [
        'Zusammenfassung ist freigegeben und enthält nur erforderliche Kernaussagen.',
        'Bereitstellungsweg (z. B. Records-Ordner) ist dokumentiert.',
      ],
    },
    {
      id: 'KI_KENNZEICHNUNG_PFLICHT_PRUEFUNG',
      question:
        'Wurde geprüft und dokumentiert, ob eine Kennzeichnung (z. B. CE) erforderlich ist?',
      todo: 'Prüfen und dokumentieren, ob eine Kennzeichnung (z. B. CE) erforderlich ist.',
      reference: 'EU AI Act (2024), Art. 49 ff.',
      referenceId: 'ART_49',
      referenceUrl: EU_AI_ACT_LINKS.ART_49,
      evidence: 'Nachweis: Recht/Compliance-Notiz, Konformitätsunterlagen',
      info:
        'Bei integrierten Systemen sollte die Produktkonformität/CE-Logik mitbetrachtet werden.',
      examples: [
        'Recht/Compliance-Notiz beschreibt Bewertung der Kennzeichnungspflicht.',
        'Konformitätsunterlagen sind abgelegt und referenziert.',
      ],
    },
    {
      id: 'KI_UNTERLAGEN_REPOSITORY',
      canonicalId: 'KI_DOK_UNTERLAGEN_REPO_VERSIONIERUNG',
      question:
        'Sind Registrierungs- und Kennzeichnungsunterlagen versioniert, zugriffsgeschützt und auffindbar abgelegt?',
      todo: 'Registrierungs- und Kennzeichnungsunterlagen versioniert, zugriffsgeschützt und eindeutig auffindbar ablegen.',
      reference: 'EU AI Act (2024), Art. 49 ff.',
      referenceId: 'ART_49',
      referenceUrl: EU_AI_ACT_LINKS.ART_49,
      evidence: 'Nachweis: Repository-Link, Zugriffskonzept, Versionshistorie',
      info:
        'Auffindbarkeit heißt: klarer Ablagepfad plus eindeutige Namenskonvention plus Zugriffskonzept.',
      examples: [
        'Repository-Link ist im Klassifikationsmemo referenziert.',
        'Versionshistorie zeigt Änderungen an Unterlagen über die Zeit.',
      ],
    },
  ],
},

KI_GRFA_PFLICHTPRUEFUNG_ART_27: {
  label: 'EU AI Act: GRFA – Pflichtprüfung (Art. 27) – Nachweis',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 27'],
  items: [
    {
      id: 'KI_GRFA_PFLICHT_GEPRUEFT_UND_ABGEGRENZT',
      canonicalId: 'KI_GRFA_PFLICHT_GEPRUEFT_UND_ABGEGRENZT',
      question:
        'Wurde geprüft und dokumentiert, ob GRFA erforderlich ist (inkl. Geltungsbereich/Begründung, z. B. Anhang-3-Anwendungsfälle)?',
      todo:
        'GRFA-Pflicht prüfen und dokumentieren (inkl. Geltungsbereich/Begründung, betroffene Gruppen, Prozesskontext, Anhang-3-Zuordnung).',
      reference: 'EU AI Act (2024), Art. 27',
      referenceId: 'ART_27',
      referenceUrl: EU_AI_ACT_LINKS.ART_27,
      evidence: 'Nachweis: GRFA-Pflichtprüfung/Memo, Geltungsbereich, Anhang-Mapping',
      info:
        'Die Prüfung sollte Kriterien, Geltungsbereich und Zuordnung zu Anhang 3 nachvollziehbar festhalten. ' +
        'Wichtig: GRFA ist nicht auf Finanzfälle beschränkt; sie ist kontextabhängig zu prüfen.',
      examples: [
        'Memo dokumentiert Entscheidung zur GRFA-Pflicht inkl. Anhang-3-Bezug.',
        'Geltungsbereich benennt betroffene Gruppen und Prozesskontext.',
      ],
    },
  ],
},

KI_HR_GRUNDRECHTE_FOLGENABSCHAETZUNG_ART_27: {
  label: 'EU AI Act: Hochrisiko – Grundrechts-Folgenabschätzung (GRFA) im Betrieb',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 27'],
  items: [
    {
      id: 'KI_GRFA_PFLICHT_GEPRUEFT_UND_ABGEGRENZT',
      canonicalId: 'KI_GRFA_PFLICHT_GEPRUEFT_UND_ABGEGRENZT',
      question:
        'Wurde geprüft und dokumentiert, ob GRFA erforderlich ist (inkl. Geltungsbereich/Begründung, z. B. Anhang 3-Finanz-Anwendungsfälle)?',
      todo:
        'GRFA-Pflicht prüfen und dokumentieren (inkl. Geltungsbereich/Begründung, betroffene Gruppen, Prozesskontext, Anhang 3-Zuordnung).',
      reference: 'EU AI Act (2024), Art. 27',
      referenceId: 'ART_27',
      referenceUrl: EU_AI_ACT_LINKS.ART_27,
      evidence: 'Nachweis: GRFA-Pflichtprüfung/Memo, Geltungsbereich, Anhang-Mapping',
      info:
        'Die Prüfung sollte Kriterien, Geltungsbereich und Zuordnung zu Anhang 3 nachvollziehbar festhalten.',
      examples: [
        'Memo dokumentiert Entscheidung zur GRFA-Pflicht inkl. Anhang 3-Bezug.',
        'Geltungsbereich benennt betroffene Gruppen und Prozesskontext.',
      ],
    },
    {
      id: 'KI_GRFA_DOKUMENTIERT',
      canonicalId: 'KI_GRFA_DOKUMENTIERT',
      question: 'Liegt eine GRFA dokumentiert vor (Risiken, Betroffenheit, Maßnahmen, Restrisiko)?',
      todo:
        'GRFA durchführen und dokumentieren (Risiken/Betroffenheit, Maßnahmen, Restrisiko, Verantwortlichkeiten, Umsetzungsplan).',
      reference: 'EU AI Act (2024), Art. 27',
      referenceId: 'ART_27',
      referenceUrl: EU_AI_ACT_LINKS.ART_27,
      evidence: 'Nachweis: GRFA-Dokument, Maßnahmenplan, Risiko-/Kontrollmapping',
      info:
        'Dokument muss Risiken, betroffene Grundrechte, Kontrollen und Restrisiko klar darstellen.',
      examples: [
        'GRFA enthält Maßnahmenplan mit Verantwortlichen und Terminen.',
        'Risiko-/Kontrollmapping verlinkt auf konkrete Kontrollen im Betrieb.',
      ],
    },
    {
      id: 'KI_GRFA_UEBERPRUEFUNG_UND_FREIGABE',
      canonicalId: 'KI_GRFA_UEBERPRUEFUNG_UND_FREIGABE',
      question: 'Wurde die GRFA reviewed und formal freigegeben (Risikomanagement/Compliance/Recht/Management)?',
      todo:
        'GRFA-Review und formale Freigabe durchführen (Rollen/RACI, Entscheidung, Auflagen, Abhilfemaßnahmen) und versioniert ablegen.',
      reference: 'EU AI Act (2024), Art. 27',
      referenceId: 'ART_27',
      referenceUrl: EU_AI_ACT_LINKS.ART_27,
      evidence: 'Nachweis: Review-Protokoll, Freigabe, Ticket/Approval-Log, RACI',
      info:
        'Freigabe muss Rollen, Entscheidung und Auflagen eindeutig dokumentieren.',
      examples: [
        'Review-Protokoll dokumentiert Entscheidung, Auflagen und Verantwortliche.',
        'Approval-Log enthält Datum, Version und Freigabevermerk.',
      ],
    },
    {
      id: 'KI_GRFA_MASSNAHMEN_NACHVERFOLGT',
      canonicalId: 'KI_GRFA_MASSNAHMEN_NACHVERFOLGT',
      question: 'Werden GRFA-Maßnahmen im Betrieb nachverfolgt (Kontrollen, Beschwerden/Feedback, Wirksamkeit)?',
      todo:
        'GRFA-Maßnahmen operationalisieren und nachverfolgen (Kontrollen, Überwachung, Beschwerde-/Feedback-Kanal, Wirksamkeitsreview).',
      reference: 'EU AI Act (2024), Art. 27',
      referenceId: 'ART_27',
      referenceUrl: EU_AI_ACT_LINKS.ART_27,
      evidence: 'Nachweis: Kontrollnachweise, Überwachungsberichte, Beschwerdeprotokoll, Wirksamkeitsreview',
      info:
        'Nachverfolgung muss Status, Wirksamkeit und offene Punkte nachvollziehbar zeigen.',
      examples: [
        'Maßnahmen-Tracking enthält Status, Verantwortlicher, Termin und Wirksamkeitskriterium.',
        'Beschwerde-/Feedback-Kanal ist dokumentiert und wird ausgewertet.',
      ],
    },
  ],
},

KI_UEBERWACHUNG_NACH_INVERKEHRBRINGEN_ART_72: {
  label: 'EU AI Act: Überwachung nach dem Inverkehrbringen (Überwachung nach dem Inverkehrbringen) – Plan, KPIs, Review-Zyklen',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 72'],
  items: [
    {
      id: 'KI_UEBERWACHUNGS_PLAN',
      canonicalId: 'KI_UEBERWACHUNGS_PLAN',
      question: 'Gibt es einen dokumentierten Plan zur Überwachung nach dem Inverkehrbringen (Datenquellen, KPIs, Rollen, Frequenz)?',
      todo:
        'Plan zur Überwachung nach dem Inverkehrbringen erstellen (Datenquellen, KPIs, Rollen/RACI, Review-Frequenz, Eskalationspfade, Maßnahmenlogik).',
      reference: 'EU AI Act (2024), Art. 72',
      referenceId: 'ART_72',
      referenceUrl: EU_AI_ACT_LINKS.ART_72,
      evidence: 'Nachweis: Überwachungs-Plan, RACI, KPI-Definitionen, Review-Kalender',
      info:
        'Der Plan sollte Datenquellen, KPIs, Schwellenwerte, Verantwortlichkeiten und Review-Zyklen konkret benennen.',
      examples: [
        'Überwachungs-Plan enthält Review-Frequenz und Eskalationspfade.',
        'KPI-Definitionen sind versioniert und freigegeben.',
      ],
    },
    {
      id: 'KI_UEBERWACHUNGS_KPIS_UND_SCHWELLENWERTE',
      canonicalId: 'KI_UEBERWACHUNGS_KPIS_UND_SCHWELLENWERTE',
      question: 'Sind KPIs/Schwellenwerte definiert (Drift, Qualität, Fehler, Bias/Robustheit) inkl. Triggern?',
      todo:
        'KPIs und Schwellenwerte definieren (z. B. Drift, Fehlerquote, Abdeckung, Robustheit, Bias-Indikatoren) inkl. Trigger/Eskalation.',
      reference: 'EU AI Act (2024), Art. 72',
      referenceId: 'ART_72',
      referenceUrl: EU_AI_ACT_LINKS.ART_72,
      evidence: 'Nachweis: KPI-Katalog, Schwellenwerte, Trigger-Matrix',
      info:
        'Schwellenwerte müssen messbar sein und klare Trigger für Eskalation, Maßnahmen oder Stopp/Degrade enthalten.',
      examples: [
        'Trigger-Matrix verknüpft KPI-Schwellen mit Eskalationsstufen.',
        'KPI-Katalog enthält Definition, Datenquelle, Frequenz und Verantwortlicher.',
      ],
    },
    {
      id: 'KI_PMM_UEBERPRUEFUNGEN_DURCHGEFUEHRT',
      canonicalId: 'KI_PMM_UEBERPRUEFUNGEN_DURCHGEFUEHRT',
      question: 'Werden Reviews tatsächlich durchgeführt und dokumentiert (inkl. Feststellungen & Maßnahmen)?',
      todo:
        'PMM-Reviews durchführen, Feststellungen dokumentieren, Maßnahmen ableiten und Nachverfolgung sicherstellen (inkl. Verantwortlichkeiten/Fristen).',
      reference: 'EU AI Act (2024), Art. 72',
      referenceId: 'ART_72',
      referenceUrl: EU_AI_ACT_LINKS.ART_72,
      evidence: 'Nachweis: Review-Protokolle, Überwachungsberichte, Feststellungen, Änderungsunterlagen',
      info:
        'Reviews müssen Datum, Teilnehmer, Feststellungen, Entscheidungen und Maßnahmen inklusive Tracking enthalten.',
      examples: [
        'Review-Protokoll enthält Feststellungen, Verantwortlicher, Termin und Status.',
        'Änderungsunterlagen verlinken auf Reviews und Monitoring-Reports.',
      ],
    },
  ],
},

KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73: {
  label: 'EU AI Act: Meldung schwerwiegender Vorfälle – Trigger, Prozess, Nachweis',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 73'],
  items: [
    {
      id: 'KI_SVV_TRIGGER_DEFINIERT',
      canonicalId: 'KI_SVV_TRIGGER_DEFINIERT',
      question: 'Sind Trigger für „schwerwiegende Vorfälle“ definiert (inkl. Beispiele) und organisatorisch verankert?',
      todo:
        'Triggerdefinition für „schwerwiegende Vorfälle“ erstellen (Beispiele, Schweregrade, Abgrenzung zu normalen Vorfällen) und kommunizieren.',
      reference: 'EU AI Act (2024), Art. 73',
      referenceId: 'ART_73',
      referenceUrl: EU_AI_ACT_LINKS.ART_73,
      evidence: 'Nachweis: Trigger-Richtlinie, Beispielkatalog, Schulungs-/Kommunikationsnachweis',
      info:
        'Trigger müssen klar abgrenzen, wann ein Vorfall als „schwerwiegend“ gilt, und wer entscheidet.',
      examples: [
        'Beispielkatalog enthält typische Fälle und Schweregrade.',
        'Schulungsnachweis dokumentiert Kommunikation an relevante Rollen.',
      ],
    },
    {
      id: 'KI_SVV_PROZESS_UND_ROLLEN',
      canonicalId: 'KI_SVV_PROZESS_UND_ROLLEN',
      question: 'Gibt es einen dokumentierten Meldeprozess (Rollen, Timings, Behördenkontakt, Eskalation)?',
      todo:
        'Meldeprozess definieren (Rollen/RACI, Timings/Fristen, Behördenkontakt, Eskalation, Zusammenarbeit mit Anbieter/Betreiber) und testen.',
      reference: 'EU AI Act (2024), Art. 73',
      referenceId: 'ART_73',
      referenceUrl: EU_AI_ACT_LINKS.ART_73,
      evidence: 'Nachweis: Prozessdokumentation, RACI, Kontaktliste, Test-Protokoll',
      info:
        'Der Prozess sollte Kontaktpunkte, Fristen, Informationsumfang und Eskalationsstufen konkret festlegen.',
      examples: [
        'Kontaktliste enthält Rollen, Stellvertretung und Erreichbarkeit.',
        'Test-Protokoll belegt getestete Abläufe und identifizierte Lücken.',
      ],
    },
    {
      id: 'KI_SVV_PROTOKOLLIERUNG_UND_UNTERLAGEN',
      canonicalId: 'KI_SVV_PROTOKOLLIERUNG_UND_UNTERLAGEN',
      question: 'Werden Vorfälle/Meldungen revisionssicher protokolliert (inkl. Ursachenanalyse & Korrekturmaßnahmen)?',
      todo:
        'Vorfallsregister inkl. Ursachenanalyse, Maßnahmen und Abschlussdokumentation etablieren (auditfähig, versioniert, nachvollziehbar).',
      reference: 'EU AI Act (2024), Art. 73',
      referenceId: 'ART_73',
      referenceUrl: EU_AI_ACT_LINKS.ART_73,
      evidence: 'Nachweis: Vorfallsregister, Ursachenanalyse (RCA), Maßnahmenlog, Abschlussfreigabe',
      info:
        'Revisionssicherheit heißt: unveränderbare Historie, klare Versionen und nachvollziehbarer Abschluss je Vorfall.',
      examples: [
        'RCA dokumentiert Ursachen, Beitragende Faktoren und Kontrollen.',
        'Maßnahmenlog enthält Verantwortliche, Termine und Wirksamkeitsprüfung.',
      ],
    },
  ],
},

KI_NICHT_HOCHRISIKO_GOVERNANCE_BASIS: {
  label: 'EU AI Act: Nicht-Hochrisiko – Governance-Basis',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 50 (falls anwendbar)'],
  items: [
    {
      id: 'KI_BASIS_FREIGABEPROZESS',
      canonicalId: 'KI_GOV_FREIGABEPROZESS',
      question:
        'Gibt es einen dokumentierten Freigabeprozess für KI-Anwendungsfälle?',
      todo: 'Dokumentierten Freigabeprozess für KI-Anwendungsfälle definieren und einführen.',
      reference: 'EU AI Act (2024) – Governance-Basis (intern)',
      evidence: 'Nachweis: Prozessbeschreibung, RACI, Gremienprotokoll',
      info:
        'Auch für nicht-hochriskante Systeme hilft ein standardisierter Freigabeprozess, Risiken früh zu erkennen und Entscheidungen zu dokumentieren.',
      examples: [
        'Prozess beschreibt Rollen, Schritte und Freigabegates.',
        'Gremienprotokoll dokumentiert Freigabe und Auflagen.',
      ],
    },
    {
      id: 'KI_BASIS_VERANTWORTLICHKEITEN',
      canonicalId: 'KI_GOV_ROLLEN_VERANTWORTLICHKEITEN',
      question:
        'Sind Zuständigkeiten für Compliance, Risikomanagement und IT-Sicherheit im KI-Freigabeprozess festgelegt?',
      todo: 'Zuständigkeiten für Compliance, Risikomanagement und IT-Sicherheit im KI-Freigabeprozess verbindlich festlegen.',
      reference: 'EU AI Act (2024) – Governance-Basis (intern)',
      evidence: 'Nachweis: RACI, Rollenbeschreibung, Organigramm',
      info:
        'Zuständigkeiten sollten auch Stellvertretungen und Eskalationswege abdecken.',
      examples: [
        'RACI nennt Verantwortliche und Prüffunktionen inkl. Eskalationspfad.',
        'Organigramm/Rollenbeschreibung verlinkt auf konkrete Personen/Teams.',
      ],
    },
    {
      id: 'KI_BASIS_MINDESTKONTROLLEN',
      question:
        'Gibt es definierte Mindestkontrollen für nicht-hochriskante KI?',
      todo: 'Risikobasierte Mindestkontrollen für nicht-hochriskante KI definieren, dokumentieren und in den Betrieb übernehmen.',
      reference: 'EU AI Act (2024) – Governance-Basis (intern)',
      evidence: 'Nachweis: Kontroll-Basis, Checkliste, Freigabekriterien',
      info:
        'Mindestkontrollen sollten risikobasiert sein und mindestens IT-Sicherheit, Datenschutz, Protokollierung und Änderungsmanagement abdecken.',
      examples: [
        'Checkliste ist Bestandteil des Freigabeprozesses.',
        'Freigabekriterien enthalten Mindestanforderungen an Protokollierung und Zugriff.',
      ],
    },
    {
      id: 'KI_NICHT_HR_BEGRUENDUNG',
      question:
        'Ist die Nicht-Hochrisiko-Einstufung inklusive Geltungsbereich, Nutzerkreis und Begründung dokumentiert?',
      todo: 'Nicht-Hochrisiko-Einstufung inkl. Geltungsbereich, Nutzerkreis und Begründung dokumentieren und formal freigeben lassen.',
      reference: 'EU AI Act (2024), Art. 6 (Klassifikation)',
      referenceId: 'ART_6',
      referenceUrl: EU_AI_ACT_LINKS.ART_6,
      evidence: 'Nachweis: Klassifikationsmemo, Geltungsbereich',
      info:
        'Die Begründung sollte nachvollziehbar machen, warum kein Hochrisiko-Fall vorliegt.',
      examples: [
        'Memo dokumentiert Nutzerkreis, Zweck, betroffene Prozesse und Begründung.',
        'Abgleich mit Hochrisiko-Katalog ist dokumentiert.',
      ],
    },
    {
      id: 'KI_BASIS_ZUGRIFFSKONTROLLEN',
      question:
        'Sind Zugriffskontrollen für Daten, Modelle und Outputs umgesetzt?',
      todo: 'Zugriffskontrollen für Daten, Modelle und Outputs nach Least-Privilege-Prinzip umsetzen und nachweisen.',
      reference: 'Governance/IT-Security Basis',
      evidence: 'Nachweis: IAM-Konzept, Rollenmatrix, Berechtigungsnachweise',
      info:
        'Least Privilege sollte für Daten, Modelle, Prompt-/Konfigurationen und Output-Kanäle gelten.',
      examples: [
        'Rollenmatrix zeigt getrennte Rechte für Betrieb, Entwicklung und Review.',
        'Berechtigungsnachweise belegen technische Umsetzung.',
      ],
    },
    {
      id: 'KI_BASIS_PRUEFPFAD',
      canonicalId: 'KI_PROTOKOLLIERUNG_PRUEFPFAD',
      question: 'Ist ein Prüfpfad für Nutzung und Änderungen am System aktiviert und aufbewahrt?',
      todo: 'Prüfpfad für Nutzung und Änderungen aktivieren, aufbewahren und für Prüfungen nachvollziehbar bereitstellen.',
      reference: 'Governance/IT-Security Basis',
      evidence: 'Nachweis: Protokollierungskonfiguration, Aufbewahrungsfristen, Beispiel-Protokolle',
      info:
        'Prüfpfad sollte mindestens Änderungen an Modell/Konfiguration, Nutzung (wer/was/wo/wann) und Freigaben nachvollziehbar machen.',
      examples: [
        'Beispiel-Protokolle zeigen Modellversion, Actor, Zeit und Änderungstyp.',
        'Aufbewahrung ist dokumentiert und technisch erzwungen.',
      ],
    },
    {
      id: 'KI_BASIS_DLP',
      question:
        'Sind Maßnahmen gegen Datenabfluss (z. B. DLP-Regeln) definiert und aktiv, sofern relevante Kanäle genutzt werden?',
      todo:
        'Maßnahmen gegen Datenabfluss (z. B. DLP-Regeln) für relevante Kanäle definieren, aktivieren, testen und dokumentieren.',
      reference: 'Governance/IT-Security Basis',
      evidence: 'Nachweis: DLP-Richtlinie, Regelsets, Testprotokoll',
      info:
        'Relevant sind insbesondere Exportkanäle (E-Mail, Downloads, APIs) und Prompt-/Input-Kanäle bei externen KI-Systemen.',
      examples: [
        'DLP-Regelset blockiert/warnt bei sensiblen Datenmustern.',
        'Testprotokoll dokumentiert Wirksamkeit (True/False Positives).',
      ],
    },
  ],
},

//========================================================
//          DORA Anforderungen
//========================================================

DORA_BASIS: {
  label: 'DORA: IKT-Risikomanagement – Basis',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 5–16'],
  items: [
    {
      id: 'DORA_GOV_ROLLEN',
      question:
        'Sind IKT-Governance und Verantwortlichkeiten für die KI-relevanten Systeme definiert und dokumentiert?',
      todo:
        'IKT-Governance sowie Verantwortlichkeiten für die KI-relevanten Systeme verbindlich definieren und dokumentieren (inkl. Vertretungen und Eskalationswege).',
      reference: 'DORA (2022), Art. 5',
      referenceUrl: DORA_LINKS.ART_5,
      evidence: 'Nachweis: Governance-Dokument, RACI, Rollenbeschreibung',
      info:
        'Die Governance sollte klar machen, wer fachlich, technisch und risikoseitig verantwortlich ist (inkl. Vertretungen, Eskalation und Entscheidungswegen).',
      examples: [
        'RACI benennt Verantwortlicher, IT-Betrieb, IT-Sicherheit, Risikomanagement/Compliance und Datenschutz.',
        'Governance-Dokument beschreibt Gremien, Freigaben und Eskalationspfade.',
      ],
    },
    {
      id: 'DORA_IKT_RMF',
      question:
        'Gibt es ein dokumentiertes IKT-Risikomanagement-Rahmenwerk inklusive Rollen, Kontrollen und Risikoappetit?',
      todo:
        'IKT-Risikomanagement-Rahmenwerk dokumentieren und verabschieden (Rollen, Kontrollen, Risikoappetit) und KI-relevante Risiken explizit abdecken.',
      reference: 'DORA (2022), Art. 6',
      referenceUrl: DORA_LINKS.ART_6,
      evidence: 'Nachweis: Rahmenwerk, Richtlinien, Kontrollkatalog',
      info:
        'Das Rahmenwerk sollte KI-relevante Risiken explizit abdecken (z. B. Modellbetrieb, Datenpipelines, externe KI-Dienste, Abhängigkeiten von Drittanbietern).',
      examples: [
        'Kontrollkatalog enthält IKT-Kontrollen für Modellbetrieb, Überwachung und Änderungsmanagement.',
        'Risikomethodik und Risikoappetit sind dokumentiert und genehmigt.',
      ],
    },
    {
      id: 'DORA_JAHRESBERICHT_IKT_AN_LEITUNGSORGAN',
      canonicalId: 'DORA_JAHRESBERICHT_IKT_AN_LEITUNGSORGAN',
      question:
        'Wird dem Leitungsorgan mindestens jährlich ein Bericht zum IKT-Risikomanagement und Resilienzstatus vorgelegt (inkl. wesentlicher Vorfälle, Risiken, Maßnahmen)?',
      todo:
        'Jährliches Reporting an das Leitungsorgan etablieren und dokumentieren: Status IKT-Risikolage, wesentliche Vorfälle, KPI/KRI, Top-Risiken, Maßnahmen/Roadmap, Wirksamkeit der Kontrollen. Bericht/Präsentation versioniert ablegen.',
      reference: 'DORA (2022), Art. 6(5)',
      referenceUrl: DORA_LINKS.ART_6,
      evidence:
        'Nachweis: Jahresbericht/Board-Unterlagen, Agenda/Präsentation, Protokoll, Beschlüsse/Nachverfolgung',
      info:
        'Audit-Hebel: Es geht nicht nur um „es gibt Berichte“, sondern um nachvollziehbare Information des Leitungsorgans und ggf. Beschlüsse/Nachverfolgung.',
      examples: [
        'Board-Unterlagen enthalten KPI/KRI (Vorfälle, Wiederherstellungszeiten, Feststellungen, Patch-/Schwachstellenstatus, Anbieter-Risiken).',
        'Protokoll dokumentiert Diskussion/Entscheidungen und Nachverfolgung.',
      ],
    },
    {
      id: 'DORA_SCHULUNGS_AWARENESS_PROGRAMM',
      canonicalId: 'DORA_SCHULUNGS_AWARENESS_PROGRAMM',
      question:
        'Gibt es ein regelmäßiges Schulungs-/Awareness-Programm zu IKT-Risiken und operativer Resilienz (zielgruppenspezifisch, inkl. Teilnahme-/Wirksamkeitsnachweis)?',
      todo:
        'Schulungs-/Awareness-Programm definieren und durchführen: Zielgruppen (Management, IT, Fachbereich, Vorfall/BCM), Inhalte (Rollen, Meldewege, Krisenkommunikation, sicherer Betrieb), Frequenz, Pflichtquoten, Wirksamkeitskontrolle (z. B. Quiz/Phishing).',
      reference: 'DORA (2022), Art. 13–14',
      referenceUrl: DORA_LINKS.ART_13,
      evidence:
        'Nachweis: Trainingsplan, Inhalte/Material, Teilnahmequote, Wirksamkeitsnachweise (Tests/Quiz), Kommunikationskampagnen',
      info:
        'Damit verhindern Sie reine Papierkontrollen: Awareness muss messbar sein (Teilnahme, Tests, Wiederholung).',
      examples: [
        'Pflichttraining jährlich plus rollenspezifische Vertiefungen (Vorfallsmanager, BCM, Cloud-Betrieb).',
        'Teilnahmequote >X% und dokumentierte Nachschulungen.',
      ],
    },
    {
      id: 'DORA_TECHNOLOGIE_BEOBACHTUNGSPROZESS',
      canonicalId: 'DORA_TECHNOLOGIE_BEOBACHTUNGSPROZESS',
      question:
        'Gibt es einen dokumentierten Prozess zur Technologiebeobachtung, der neue Bedrohungen/Technologien bewertet und Richtlinien/Kontrollen regelmäßig aktualisiert?',
      todo:
        'Prozess zur Technologiebeobachtung etablieren: Quellen (CERT/ISAC/Herstellerwarnungen), Bewertungsmethodik, Verantwortliche, Entscheidungs- und Update-Zyklus (Richtlinien/Standards/Kontrollen), Änderungsprotokoll und Kommunikation an betroffene Teams.',
      reference: 'DORA (2022), Art. 6(5) i. V. m. Art. 13',
      referenceUrl: DORA_LINKS.ART_6,
      evidence:
        'Nachweis: Technologiebeobachtungsprotokoll, Risiko-/Bewertungsnotizen, Richtlinien-/Standard-Updates, Änderungsnachweise, Kommunikationsnachweise',
      info:
        'Auditfähig wird es durch geschlossene Nachweiskette: Beobachtung → Bewertung → Entscheidung → Update → Kommunikation → Nachweis.',
      examples: [
        'Monatliches Review von Warnmeldungen (CVE/Herstellerwarnungen) mit dokumentierten Entscheidungen.',
        'Richtlinien-Updates sind versioniert und kommuniziert (z. B. Update-Richtlinie, Cloud-Basiss).',
      ],
    },
    {
      id: 'DORA_IKT_ASSET_INVENTAR',
      question:
        'Gibt es ein aktuelles Inventar der IKT-Assets, die für das KI-System genutzt werden?',
      todo:
        'Inventar der KI-relevanten IKT-Assets vollständig erfassen, aktuell halten und nachvollziehbar dokumentieren (inkl. Datenquellen, Modelle, Pipelines, Schnittstellen).',
      reference: 'DORA (2022), Art. 6-9 (i. V. m. Governance)',
      referenceUrl: DORA_LINKS.ART_6,
      evidence: 'Nachweis: Asset-Register/CMDB-Auszug, Architekturdiagramm',
      info:
        'Wichtig ist, dass nicht nur Server/Cloud-Ressourcen, sondern auch Datenquellen, Modellartefakte, Pipelines, Schnittstellen und Betriebswerkzeuge erfasst sind.',
      examples: [
        'CMDB/Asset-Register listet Modellservice, Datenpipeline, Storage, Secrets, Protokollierung/SIEM.',
        'Architekturdiagramm verlinkt auf die zugehörigen Asset-IDs.',
      ],
    },
    {
      id: 'DORA_SEC_IAM_MINIMALE_RECHTE',
      canonicalId: 'DORA_SEC_IAM_MINIMALE_RECHTE',
      question:
        'Sind Zugriffe auf KI-relevante Komponenten nach dem Prinzip minimaler Rechte umgesetzt (Rollen, Berechtigungen, Trennung von Aufgaben)?',
      todo:
        'Prinzip minimaler Rechte umsetzen und nachweisen: Rollen- und Rechtekonzept definieren, privilegierte Konten minimieren, Trennung von Aufgaben (Entwicklung/Betrieb/Review) etablieren, regelmäßige Rezertifizierung durchführen.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence:
        'Nachweis: Rollen-/Rechtekonzept, IAM-Exporte, Rezertifizierungsprotokolle, Matrix zur Trennung von Aufgaben',
      info:
        'Auditfähig wird das erst durch nachvollziehbare Rollenmodelle, Rezertifizierung und klare Trennung von Aufgaben.',
      examples: [
        'Rezertifizierung der Rollenrechte mindestens quartalsweise dokumentiert.',
        'Keine geteilten Admin-Konten; Notfallzugriff ist definiert und protokolliert.',
      ],
    },
    {
      id: 'DORA_SEC_UPDATE_SCHWACHSTELLENMANAGEMENT',
      canonicalId: 'DORA_SEC_UPDATE_SCHWACHSTELLENMANAGEMENT',
      question:
        'Gibt es ein wirksames Schwachstellen- und Update-Management für KI-relevante Systeme (OS, Container, Bibliotheken, Modelle/Artefakte)?',
      todo:
        'Schwachstellen- und Update-Management etablieren: regelmäßige Scans, Priorisierung (CVSS/Ausnutzbarkeit), Update-SLAs, Ausnahmen dokumentieren, Abhilfemaßnahmen nachverfolgen.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence:
        'Nachweis: Scan-Reports, Update-Compliance-Reports, Tickets/Feststellungen-Tracking, Ausnahmen-Register',
      info:
        '„Update-Management“ umfasst auch Container-Images, Drittbibliotheken und KI-Abhängigkeiten (z. B. Inferenz-Services).',
      examples: [
        'Kritische Feststellungen werden innerhalb definierter SLAs behoben.',
        'Ausnahmen sind befristet, begründet und genehmigt.',
      ],
    },
    {
      id: 'DORA_SEC_HAERTUNG_BASIS',
      canonicalId: 'DORA_SEC_HAERTUNG_BASIS',
      question:
        'Gibt es eine Sicherheitsbasis/Härtung für KI-relevante Komponenten (Konfigurationen, Netzwerk, Compute, Storage) und wird sie geprüft?',
      todo:
        'Härtungsbasis definieren und durchsetzen: sichere Konfigurationen (z. B. CIS/BSI), Netzwerksegmentierung, restriktive Ingress-/Egress-Regeln, regelmäßige Konfigurationsprüfungen.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence:
        'Nachweis: Basis-Dokument, IaC-Policies, Konfigurations-Compliance-Reports, Firewall/SG-Regeln',
      info:
        'Auditfähig wird es durch eine definierte Basis plus regelmäßige Compliance-Messung (nicht nur „einmal umgesetzt“).',
      examples: [
        'IaC-Policy verhindert öffentliche Buckets und ungeprüfte Images.',
        'Konfigurations-Drift wird erkannt und behoben.',
      ],
    },
    {
      id: 'DORA_SEC_GEHEIMNISSE_MANAGEMENT',
      canonicalId: 'DORA_SEC_GEHEIMNISSE_MANAGEMENT',
      question:
        'Sind Geheimnisse/Keys/Tokens für KI-relevante Systeme sicher verwaltet (Vault, Rotation, Zugriffskontrollen)?',
      todo:
        'Management von Geheimnissen umsetzen: zentrale Ablage (Vault/KMS), Rotation, kurze Laufzeiten, Zugriff nach Need-to-know, kein Hardcoding in Code/Konfigurationen, Protokollierung für Zugriffe auf Geheimnisse.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence:
        'Nachweis: Vault/KMS-Konfiguration, Rotationsprotokolle, Zugriffsprotokolle für Geheimnisse, Repository-Scans',
      info:
        'Management von Geheimnissen ist ein häufiger Audit-Fund: Rotation und Zugriffsnachweise sind entscheidend.',
      examples: [
        'Rotation für API-Keys mindestens alle X Tage (richtlinienbasiert) dokumentiert.',
        'Repository-Scans verhindern Leaks von Geheimnissen.',
      ],
    },
    {
      id: 'DORA_SEC_PROTOKOLLIERUNG_SIEM',
      canonicalId: 'DORA_SEC_PROTOKOLLIERUNG_SIEM',
      question:
        'Sind sicherheitsrelevante Protokolle für KI-relevante Systeme vollständig, manipulationsgeschützt und zentral auswertbar (SIEM/Überwachung)?',
      todo:
        'Protokollierung/SIEM sicherstellen: Authentifizierungs- und Admin-Aktionen, Datenzugriffe, Modell- und Konfigurationsänderungen protokollieren, Aufbewahrungsfristen definieren, zentrale Korrelation/Alarmierung, Zugriffsschutz auf Protokolle.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence:
        'Nachweis: Protokollierungskonzept, Alarmregeln, Aufbewahrungsrichtlinien',
      info:
        'Für Audit zählt: „Was wird protokolliert?“, „Wie lange?“, „Wer wertet aus?“ und „Welche Alarme gibt es?“.',
      examples: [
        'Admin-Aktionen und Modellbereitstellungen sind nachvollziehbar (wer/wann/was).',
        'Alarme für ungewöhnliche Datenabflüsse und fehlgeschlagene Logins sind aktiv.',
      ],
    },
    {
      id: 'DORA_SEC_SDLC_AENDERUNGSGATES',
      canonicalId: 'DORA_SEC_SDLC_AENDERUNGSGATES',
      question:
        'Gibt es sichere Freigabegates im Änderungsmanagement für KI-relevante Änderungen (Code, Modelle, Datenpipelines) inkl. Vier-Augen-Prinzip?',
      todo:
        'Freigabegates definieren: Code-Reviews, Freigaben für Bereitstellungen, Trennung von Entwicklung/Produktion, Nachvollziehbarkeit (Tickets), Notfallprozess („Notfallzugriff“) geregelt.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence:
        'Nachweis: SDLC-/Änderungsrichtlinie, Review-Protokolle, Release-Freigaben, Bereitstellungsprotokolle, RACI',
      info:
        'Gerade bei KI ist „Änderung“ nicht nur Code: Modellversionen, Features, Datenquellen und Prompt-/Policy-Änderungen gehören dazu.',
      examples: [
        'Jede Bereitstellung hat Ticket-Referenz und Freigabe.',
        'Bereitstellungen in Produktion sind nur durch freigegebene Rollen möglich.',
      ],
    },
    {
      id: 'DORA_RESILIENZ_MASSNAHMEN',
      question:
        'Sind Resilienzmaßnahmen für die KI-relevanten Komponenten definiert (z. B. Redundanz, Failover/Umschaltung, Kapazität)?',
      todo:
        'Resilienzmaßnahmen für KI-relevante Komponenten festlegen und dokumentieren (Redundanz, Umschaltung/Failover, Kapazitätsplanung, definierte Rückfalls).',
      reference: 'DORA (2022), Art. 11–12',
      referenceUrl: DORA_LINKS.ART_11,
      evidence: 'Nachweis: Architektur, DR-Konzept, Failover-Tests',
      info:
        'Resilienz umfasst auch definierte Rückfalls (z. B. Degradationsmodus, manuelle Prozesse) und Kapazitätsplanung bei Lastspitzen.',
      examples: [
        'DR-Konzept beschreibt RTO/RPO, Wiederanlauf und Zuständigkeiten.',
        'Failover-/Umschalt-Testprotokoll dokumentiert Erfolg und Lessons Learned.',
      ],
    },
    {
      id: 'DORA_BACKUP_WIEDERHERSTELLUNG_TESTS',
      question:
        'Werden Sicherungs- und Wiederherstellungsverfahren (Backup/Recovery) für die KI-relevanten Systeme regelmäßig getestet und dokumentiert?',
      todo:
        'Backup- und Wiederherstellungsverfahren für KI-relevante Systeme regelmäßig testen und dokumentieren (inkl. Daten, Modellartefakte, Konfigurationen und Schlüssel/Secrets).',
      reference: 'DORA (2022), Art. 11–12',
      referenceUrl: DORA_LINKS.ART_12,
      evidence: 'Nachweis: Testbericht, RTO/RPO, Protokolle',
      info:
        'Tests sollten die Wiederherstellung der relevanten Komponenten umfassen (Daten, Modellartefakte, Konfigurationen, Schlüssel/Secrets) und nicht nur Storage-Snapshots.',
      examples: [
        'Testbericht zeigt Wiederherstellung von Modellartefakten und Konfiguration auf Staging.',
        'Protokolle dokumentieren Testdatum, Ergebnis, Abweichungen und Maßnahmen.',
      ],
    },
  ],
},

DORA_KRITISCHE_FUNKTION_SCOPE: {
  label: 'DORA: Kritische/wichtige Funktion – Scope-Nachweis (Art. 8)',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 8'],
  items: [
    {
      id: 'DORA_KF_SCOPE_IMPACT_ANALYSE',
      canonicalId: 'DORA_KF_SCOPE_IMPACT_ANALYSE',
      question:
        'Liegt eine Auswirkungsanalyse vor, die begründet, warum der Prozess als kritisch/wichtig gilt (inkl. betroffene Services/Outputs)?',
      todo:
        'Auswirkungsanalyse erstellen/aktualisieren: betroffene Geschäftsprozesse/Services, Kundenauswirkungen, regulatorische Pflichten, Schwellenwerte und Begründung der Kritikalität.',
      reference: 'DORA (2022), Art. 8',
      referenceUrl: DORA_LINKS.ART_8,
      evidence:
        'Nachweis: Auswirkungsanalyse, Service-/Prozessbeschreibung, Risikoanalyse, Management-/Gremienunterlage',
      info:
        'Die Analyse muss Kritikalität nachvollziehbar begründen (Auswirkungen, Schwellenwerte, betroffene Services/Outputs).',
      examples: [
        'Dokument nennt betroffene Services, Kundenauswirkungen und relevante Schwellenwerte.',
        'Gremienunterlage dokumentiert die Einstufung und den Review-Zyklus.',
      ],
    },
    {
      id: 'DORA_KF_ABHAENGIGKEITEN_KARTE',
      canonicalId: 'DORA_KF_ABHAENGIGKEITEN_KARTE',
      question:
        'Sind Abhängigkeiten (Systeme, Datenflüsse, Anbieter, Up-/Downstream) für den kritischen/wichtigen Prozess dokumentiert?',
      todo:
        'Abhängigkeitskarte erstellen/aktualisieren: Systeme, Datenflüsse, Schnittstellen, Drittanbieter, gemeinsame Ausfall-Domänen, manuelle Schritte.',
      reference: 'DORA (2022), Art. 8',
      referenceUrl: DORA_LINKS.ART_8,
      evidence:
        'Nachweis: Architektur-/Datenflussdiagramme, CMDB/Inventar, Anbieter-Landkarte, Schnittstellenliste',
      info:
        'Abhängigkeiten müssen End-to-End nachvollziehbar sein (Systeme, Datenflüsse, Schnittstellen, Drittanbieter, manuelle Schritte).',
      examples: [
        'Datenflussdiagramm zeigt Upstream/Downstream-Schnittstellen inkl. Drittanbietern.',
        'Schnittstellenliste ist versioniert und referenziert die betroffenen Systeme.',
      ],
    },
    {
      id: 'DORA_KF_TOLERANZEN_RTO_RPO',
      canonicalId: 'DORA_KF_TOLERANZEN_RTO_RPO',
      question:
        'Sind Stoßtoleranzen und Wiederanlaufziele (RTO/RPO bzw. MTPD) definiert, abgestimmt und konsistent mit BCM?',
      todo:
        'Stoßtoleranzen und RTO/RPO definieren und mit BCM verknüpfen (inkl. Annahmen, Messmethodik, Abnahmekriterien).',
      reference: 'DORA (2022), Art. 8',
      referenceUrl: DORA_LINKS.ART_8,
      evidence:
        'Nachweis: BCM-Dokumente, RTO/RPO-Katalog, Stoßtoleranz-Definitionen, Testprotokolle',
      info:
        'Definitionen müssen messbar sein und mit BCM konsistent bleiben (Annahmen, Messmethodik, Abnahmekriterien).',
      examples: [
        'RTO/RPO sind im Katalog dokumentiert und auf den Prozess gemappt.',
        'Testprotokolle belegen, dass Ziele erreichbar sind oder Abweichungen adressiert werden.',
      ],
    },
    {
      id: 'DORA_KF_FORMALE_FREIGABE',
      canonicalId: 'DORA_KF_FORMALE_FREIGABE',
      question:
        'Ist die Einstufung inkl. Geltungsbereich/Abhängigkeiten/Toleranzen formal freigegeben (Verantwortlicher, Risikomanagement/BCM, ggf. Leitungsorgan) und versioniert abgelegt?',
      todo:
        'Formale Freigabe einholen und versioniert dokumentieren (Verantwortlicher, Risikomanagementk/BCM, ggf. Leitungsorgan/Gremium) inkl. Auflagen und Review-Zyklus.',
      reference: 'DORA (2022), Art. 8',
      referenceUrl: DORA_LINKS.ART_8,
      evidence:
        'Nachweis: Freigabeprotokoll, Entscheidungsprotokoll, Gremienprotokolle, RACI-Matrix',
      info:
        'Freigabe muss Entscheidung, Version, Verantwortliche und Auflagen eindeutig dokumentieren.',
      examples: [
        'Freigabeprotokoll enthält Version, Datum, Teilnehmende und Auflagen.',
        'Entscheidungsprotokoll verlinkt auf Geltungsbereich, Abhängigkeiten und Toleranzen.',
      ],
    },
  ],
},

DORA_DRITTANBIETER_STANDARD: {
  label: 'DORA: IKT-Drittanbieter – Standardanforderungen',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 28–30'],
  items: [
    {
      id: 'DORA_ANBIETER_REGISTER_RISIKO',
      question:
        'Werden IKT-Drittanbieter in einem Register geführt und risikobasiert bewertet?',
      todo:
        'IKT-Drittanbieter in einem Register führen, KI-relevante Leistungen eindeutig abbilden und risikobasierte Bewertungen regelmäßig durchführen und dokumentieren.',
      reference: 'DORA (2022), Art. 28',
      referenceUrl: DORA_LINKS.ART_28,
      evidence:
        'Nachweis: Drittanbieter-Register, Risikobewertung, Review-Protokolle',
      info:
        'Das Register sollte die KI-relevanten Leistungen eindeutig abbilden (Service, Datenzugriff, Kritikalität) und regelmäßig aktualisiert werden.',
      examples: [
        'Register enthält Servicebeschreibung, Kritikalität, Verantwortlicher, Datenarten, Region/Hosting.',
        'Review-Protokoll dokumentiert die (Neu-)Bewertung und Maßnahmen.',
      ],
    },
    {
      id: 'DORA_VERTRAGSREGISTER_MINDESTFELDER',
      question:
        'Enthält das Vertragsregister Mindestangaben zu Service, Kritikalität, Datenzugriff, Subdienstleistern und Laufzeiten?',
      todo:
        'Vertragsregister um verbindliche Mindestfelder ergänzen und sicherstellen, dass alle KI-relevanten Services vollständig gepflegt sind (Service, Kritikalität, Datenzugriff, Subdienstleister, Laufzeiten).',
      reference: 'DORA (2022), Art. 28–29',
      referenceUrl: DORA_LINKS.ART_28,
      evidence: 'Nachweis: Register-Auszug, Datenmodell/Vorlage',
      info:
        'Mindestfelder helfen, Abhängigkeiten und Risiken schnell zu identifizieren (z. B. Datenlokation, Unterbeauftragte, Exit-Optionen).',
      examples: [
        'Vorlage enthält Felder zu Datenzugriff, Subdienstleistern und Vertragslaufzeiten.',
        'Register-Auszug zeigt vollständige Einträge für KI-relevante Services.',
      ],
    },
    {
      id: 'DORA_VERTRAG_MINDESTKLAUSELN',
      question:
        'Enthalten Drittanbieter-Verträge Mindestklauseln zu Sicherheit, Audit-Rechten und Vorfallmeldung?',
      todo:
        'Drittanbieter-Verträge um Mindestklauseln zu Sicherheit, Audit-/Prüfrechten und Vorfallmeldungen ergänzen und die Durchsetzbarkeit (Fristen/Geltungsbereich/Ansprechpartner) sicherstellen.',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence:
        'Nachweis: Vertragsanhang, Musterklauseln, Leistungsbeschreibung',
      info:
        'Klauseln sollten praktisch durchsetzbar sein (Fristen, Ansprechpartner, Nachweispflichten, Audit-Umfang, Unterauftragnehmer-Regeln).',
      examples: [
        'Vertragsanhang regelt Audit-Rechte, Sicherheitsanforderungen und Meldefristen.',
        'Leistungsbeschreibung definiert Betriebs- und Sicherheitsleistungen.',
      ],
    },
    {
      id: 'DORA_EXIT_STRATEGIE',
      canonicalId: 'DORA_EXIT_STRATEGIE_MIGRATION_DATEN_RUECKGABE',
      question:
        'Gibt es eine dokumentierte Ausstiegsstrategie inklusive Datenrückgabe/-löschung und Übergangsplan?',
      todo:
        'Ausstiegsstrategie dokumentieren und testbar machen (Datenrückgabe/-löschung, Übergangsplan, Migration/Portabilität, „Plan B“ für Anbieterwechsel).',
      reference: 'DORA (2022), Art. 28–30',
      referenceUrl: DORA_LINKS.ART_28,
      evidence: 'Nachweis: Exit-Plan, Migrations-Betriebshandbuch, Vertrag',
      info:
        'Der Exit sollte testbar sein (z. B. Migration/Portabilität) und einen „Plan B“ für kritische Ausfälle oder Anbieterwechsel beinhalten.',
      examples: [
        'Exit-Plan beschreibt Datenexportformat, Löschbestätigung und Übergangsfristen.',
        'Migrations-Betriebshandbuch enthält Schritte, Verantwortliche und Abhängigkeiten.',
      ],
    },
  ],
},

DORA_DRITTANBIETER_ERWEITERT: {
  label: 'DORA: (Pot.) kritischer IKT-Drittanbieter – Erweiterte Anforderungen',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 31–44'],
  items: [
    {
      id: 'DORA_KONZENTRATIONSRISIKO',
      question:
        'Wurde das Konzentrationsrisiko (Single Point of Failure) für den Anbieter bewertet und dokumentiert?',
      todo:
        'Konzentrationsrisiko (Single Point of Failure) für den Anbieter bewerten, dokumentieren und eine Risikoentscheidung (inkl. Restrisiken/Auflagen) festhalten.',
      reference: 'DORA (2022), Art. 28–29 (i. V. m. Governance)',
      referenceUrl: DORA_LINKS.ART_29,
      evidence: 'Nachweis: Konzentrationsanalyse, Risikoentscheidung',
      info:
        'Konzentrationsrisiko umfasst technische, organisatorische und marktbezogene Abhängigkeiten (z. B. ein Cloud-Anbieter für mehrere kritische Services).',
      examples: [
        'Analyse zeigt Abhängigkeiten (Region, Service-Tier, Subdienstleister) und Auswirkung.',
        'Risikoentscheidung dokumentiert akzeptierte Restrisiken und Auflagen.',
      ],
    },
    {
      id: 'DORA_KONZENTRATIONSRISIKO_MINDERUNG',
      question:
        'Gibt es eine dokumentierte Strategie zur Reduktion des Konzentrationsrisikos (z. B. Zweitanbieter/Exit)?',
      todo:
        'Strategie zur Reduktion des Konzentrationsrisikos definieren, dokumentieren und freigeben (z. B. Multi-Region/Multi-Anbieter, Zweitanbieter, Exit-Optionen).',
      reference: 'DORA (2022), Art. 28–30',
      referenceUrl: DORA_LINKS.ART_29,
      evidence: 'Nachweis: Multi-Anbieter-/Ausstiegsstrategie, Management-Freigabe',
      info:
        'Strategie sollte konkrete Maßnahmen enthalten (z. B. Multi-Region, Multi-Anbieter, Vertragsoptionen, standardisierte Schnittstellen).',
      examples: [
        'Multi-Anbieter-Strategie definiert Kriterien und Zielbild (z. B. mindestens zwei Anbieter).',
        'Management-Freigabe dokumentiert Budget, Zeitplan und Verantwortliche.',
      ],
    },
    {
      id: 'DORA_SUBDIENSTLEISTER',
      question:
        'Sind Subdienstleister identifiziert, vertraglich geregelt und werden sie risikobasiert überprüft?',
      todo:
        'Subdienstleister identifizieren, vertraglich regeln und risikobasiert regelmäßig überprüfen (inkl. Transparenz zu Zugriff/Standort/Wechseln).',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: Subdienstleister-Liste, Vertragsklauseln, Reviews',
      info:
        'Wichtig ist Transparenz über Unterauftragnehmer und deren Zugriff auf Daten/Systeme sowie Wechsel- und Zustimmungspflichten.',
      examples: [
        'Subdienstleister-Liste nennt Leistungen, Standort/Region und Datenzugriff.',
        'Review dokumentiert Risikobewertung und ggf. Maßnahmen.',
      ],
    },
    {
      id: 'DORA_ANBIETER_UEBERWACHUNG',
      question:
        'Werden Anbieter anhand definierter KPIs/SLAs regelmäßig überwacht (Sicherheit, Verfügbarkeit, Resilienz)?',
      todo:
        'Anbieter regelmäßig anhand definierter KPIs/SLAs überwachen und Eskalation bei Schwellenwertverletzungen sicherstellen (Leistung und Sicherheit).',
      reference: 'DORA (2022), Art. 28–30',
      referenceUrl: DORA_LINKS.ART_28,
      evidence: 'Nachweis: SLA-Reports, Sicherheitsberichte, Review-Protokolle',
      info:
        'Überwachung sollte sowohl Leistungs- als auch Sicherheitskennzahlen umfassen, inklusive Schwellenwerten und Eskalationsprozess.',
      examples: [
        'SLA-Report zeigt Verfügbarkeit, Reaktionszeiten und Ticket-Taktung.',
        'Sicherheitsbericht zeigt Update-/Schwachstellenstatus und Feststellungen.',
      ],
    },
    {
      id: 'DORA_AUFSICHTS_BEREITSCHAFT',
      question:
        'Sind interne Prozesse definiert, um Aufsichtsanforderungen zu kritischen IKT-Drittanbietern zu erfüllen (Anfragen, Audits, Auskünfte)?',
      todo:
        'Interne Prozesse für Aufsichtsanforderungen zu kritischen IKT-Drittanbietern definieren und operationalisieren (Anfragen, Audits, Auskünfte, Fristen, Artefakte).',
      reference: 'DORA (2022), Art. 31–44',
      referenceUrl: DORA_LINKS.ART_31,
      evidence: 'Nachweis: Prozessbeschreibung, Ansprechpartner, Audit-Betriebshandbuch',
      info:
        'Es sollte klar sein, wer Anfragen koordiniert, welche Unterlagen vorzuhalten sind und wie Fristen/Schnittstellen gehandhabt werden.',
      examples: [
        'Prozessbeschreibung definiert Rollen, Freigaben und Ablageorte für Nachweise.',
        'Audit-Betriebshandbuch enthält Checkliste und Standardantworten/Artefakte.',
      ],
    },
  ],
},

DORA_KRITISCHE_IKT_DRITTANBIETER_AUFSICHTSREGIME: {
  label: 'DORA: Kritische IKT-Drittanbieter – Aufsichtsregime (Benennungsbewusstsein)',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 31–44'],
  items: [
    {
      id: 'DORA_CTPP_STATUS_UEBERWACHUNG',
      canonicalId: 'DORA_CTPP_STATUS_UEBERWACHUNG',
      question:
        'Wird der Status des Dienstleisters als (potenziell) „kritischer IKT-Drittanbieter“ fortlaufend überwacht (z. B. Beobachtungsliste/Anbieterstatus) und in Procurement/Outsourcing berücksichtigt?',
      todo:
        'Benennungsbewusstsein operationalisieren: Anbieterstatus/Beobachtungsliste pflegen (inkl. Verantwortliche, Datenquellen, Review-Zyklus) und in Outsourcing-/Procurement-Kontrollen verankern (z. B. Trigger für Eskalation, Re-Assessment, Vertrags-/Exit-Checks).',
      reference: 'DORA (2022), Art. 31–44',
      referenceUrl: DORA_LINKS.ART_31,
      evidence:
        'Nachweis: Anbieter-Beobachtungsliste/Statuslog, Outsourcing-/Procurement-Kontrollen, Review-Protokolle, Eskalations-Tickets',
      info:
        'Ziel: nicht nur „kritisch ja/nein“, sondern laufend nachhalten, ob ein Anbieter als kritischer IKT-Drittanbieter benannt ist/werden könnte – und welche internen Kontrollen dadurch ausgelöst werden.',
      examples: [
        'Regelmäßiger (z. B. quartalsweiser) Review einer Anbieter-Beobachtungsliste durch Outsourcing/Risikomanagement.',
      ],
    },
    {
      id: 'DORA_CTPP_AUFSICHTS_INTERAKTION_BETRIEBSHANDBUCH',
      canonicalId: 'DORA_CTPP_AUFSICHTS_INTERAKTION_BETRIEBSHANDBUCH',
      question:
        'Gibt es ein Betriebshandbuch für Aufsichtsinteraktionen bei (kritischen) IKT-Drittanbietern (Ansprechpartner, Datenbereitstellung, Fristen, Freigaben, Kommunikationswege)?',
      todo:
        'Betriebshandbuch erstellen: Rollen/Ansprechpartner (inkl. Stellvertretung), Daten-/Dokumentenbereitstellung (wo liegt was, wer liefert), interne Freigaben (Recht/Compliance), Zeitvorgaben, Kommunikationskanäle; in Übungen validieren.',
      reference: 'DORA (2022), Art. 31–44',
      referenceUrl: DORA_LINKS.ART_31,
      evidence:
        'Nachweis: Betriebshandbuch/Ablaufplan, RACI, Datenbereitstellungsprozess, Kontaktliste, Übungs-Protokolle',
      info:
        'Damit vermeiden Sie Audit-Lücken: „Anbieter ist kritisch (oder wird kritisch)“, aber Rollen, Fristen und Dokumentenwege sind nicht operationalisiert.',
      examples: [
        'Kontaktliste enthält interne Verantwortlicher (Outsourcing, Risikomanagement, Recht, Sicherheit) plus externe Anbieter-Kontakte.',
        'Dokumentenliste: Verträge, DD-Reports, Exit-Plan, Konzentrationsanalyse, BCM-Mapping – inkl. Ablageort.',
      ],
    },
  ],
},

DORA_DATENUEBERMITTLUNG_EXTERNE_KI_SCHUTZ: {
  label: 'DORA: Datenübermittlung an externe KI – Schutzmaßnahmen',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 5–16 (i. V. m. IKT-Kontrollen)'],
  items: [
    {
      id: 'DORA_DATENKLASSIFIKATION_UND_FREIGABE',
      question:
        'Gibt es eine Datenklassifizierung und eine dokumentierte Freigabe für die Übermittlung an externe KI-Dienste?',
      todo:
        'Datenklassifizierung anwenden und eine dokumentierte Freigabe für die Übermittlung an externe KI-Dienste einholen (Datenarten, Zweck, Empfänger, Schutzmaßnahmen, Kanäle).',
      reference: 'DORA (2022), Art. 6–9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Klassifizierungsrichtlinie, Freigabeprotokoll',
      info:
        'Freigabe sollte Datenarten, Zweck, Empfänger, Schutzmaßnahmen und zulässige Übermittlungskanäle abdecken.',
      examples: [
        'Freigabeprotokoll nennt Klassifizierung (z. B. vertraulich) und erlaubte Kanäle.',
        'Richtlinie beschreibt, welche Daten niemals an externe KI übertragen werden.',
      ],
    },
    {
      id: 'DORA_VERSCHLUESSELUNG',
      question:
        'Werden Daten bei Übertragung und Speicherung für externe KI-Dienste verschlüsselt?',
      todo:
        'Verschlüsselung für Datenübertragung und Speicherung bei externen KI-Diensten umsetzen und dokumentieren (TLS, Verschlüsselung ruhender Daten, Schlüsselmanagement).',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence:
        'Nachweis: Kryptografie-Konfiguration, Architektur, Schlüsselmanagement',
      info:
        'Wichtig sind Transportverschlüsselung (TLS), Verschlüsselung ruhender Daten sowie geregeltes Schlüsselmanagement (Rotation/Zugriff).',
      examples: [
        'Architekturdiagramm zeigt TLS-Endpunkte und Verschlüsselung im Storage.',
        'Schlüsselmanagement-Dokumentation beschreibt Rotation und Rollenrechte.',
      ],
    },
    {
      id: 'DORA_PSEUDONYMISIERUNG',
      question:
        'Werden sensible Daten vor Übermittlung an externe KI-Dienste pseudonymisiert oder tokenisiert, sofern erforderlich?',
      todo:
        'Sensible Daten vor Übermittlung an externe KI-Dienste pseudonymisieren oder tokenisieren (sofern erforderlich) und die Umsetzung im Datenfluss dokumentieren.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Pseudonymisierungskonzept, Datenflussdiagramm',
      info:
        'Pseudonymisierung/Tokenisierung sollte nachvollziehbar sein (Mapping-/Schlüsselschutz) und im Datenfluss berücksichtigt werden.',
      examples: [
        'Datenflussdiagramm zeigt, wo Tokenisierung erfolgt und wo Klartext verhindert wird.',
        'Konzept beschreibt Mapping-/Schlüsselschutz und Zugriffskontrollen.',
      ],
    },
    {
      id: 'DORA_DLP_KONTROLLEN',
      question:
        'Sind DLP-Kontrollen für relevante Kanäle aktiv, um Datenabfluss bei Nutzung externer KI zu verhindern?',
      todo:
        'DLP-Kontrollen für relevante Kanäle aktivieren, testen und überwachen, um Datenabfluss bei Nutzung externer KI zu verhindern (inkl. Ausnahmen/Freigaben).',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: DLP-Richtlinie, Regelsets, Testprotokoll',
      info:
        'DLP sollte insbesondere Upload-/Prompt-Kanäle, Exporte (E-Mail/Download/API) und Ausnahmen/Freigaben berücksichtigen.',
      examples: [
        'Regelsets blockieren/warnen bei sensiblen Datenmustern (z. B. IBAN, Kundendaten).',
        'Testprotokoll dokumentiert Wirksamkeit inkl. False Positives/Negatives.',
      ],
    },
    {
      id: 'DORA_VERTRAG_DATENLOKATION',
      question:
        'Ist Datenlokation oder Hostingregion für externe KI-Dienste vertraglich festgelegt?',
      todo:
        'Datenlokation/Hostingregion für externe KI-Dienste vertraglich festlegen und Änderungen zustimmungspflichtig regeln.',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: Vertrag/Anhang, Hosting-Addendum',
      info:
        'Vertrag sollte Regionen klar benennen und Änderungen (z. B. neue Regionen) zustimmungspflichtig machen.',
      examples: [
        'Hosting-Addendum listet Regionen und Subdienstleister-Standorte.',
        'Vertrag enthält Änderungsklausel für Region/Location.',
      ],
    },
    {
      id: 'DORA_VERTRAG_LOESCHUNG_RUECKGABE',
      question:
        'Sind Datenrückgabe und Löschung nach Vertragsende vertraglich geregelt?',
      todo:
        'Datenrückgabe und Löschung nach Vertragsende vertraglich regeln (Fristen, Nachweise/Löschbestätigung, Rückgabeformate) und ein Löschkonzept dokumentieren.',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: Vertrag/Anhang, Löschkonzept',
      info:
        'Regelung sollte Fristen, Nachweise (Löschbestätigung) und Formate für Datenrückgabe umfassen.',
      examples: [
        'Vertrag beschreibt Löschfristen und verpflichtende Löschbestätigung.',
        'Löschkonzept beschreibt Datenklassen, Speicherorte und Verantwortliche.',
      ],
    },
    {
      id: 'DORA_VERTRAG_AUDIT_RECHTE',
      canonicalId: 'DORA_VERTRAG_AUDIT_UND_ZUGRIFFSRECHTE',
      question:
        'Sind Audit- und Prüfrechte gegenüber dem Anbieter vertraglich geregelt?',
      todo:
        'Audit- und Prüfrechte gegenüber dem Anbieter vertraglich regeln (Geltungsbereich, Fristen, Bericht, Abhilfemaßnahmen, Unterauftragnehmer) und Nachweispflichten definieren.',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: Vertrag/Anhang, Audit-Klausel',
      info:
        'Audit-Rechte sollten Umfang, Frequenz, Fristen, Berichtsrechte und Unterauftragnehmer einschließen.',
      examples: [
        'Audit-Klausel regelt Vorankündigung, Geltungsbereich, Nachweise und Abhilfemaßnahmen.',
        'Anhang definiert Zutritts-/Einsichtsrechte oder Alternativen (z. B. Reports) je nach Modell.',
      ],
    },
    {
      id: 'DORA_VERTRAG_SUBPROZESSOREN',
      question:
        'Sind Subprozessoren transparent benannt und ist deren Einsatz vertraglich geregelt (z. B. Zustimmungspflicht)?',
      todo:
        'Subprozessoren transparent benennen und deren Einsatz vertraglich regeln (Informationsfristen, Zustimmung/Widerspruch, gleichwertige Sicherheitsstandards).',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: Subprozessoren-Liste, Vertragsklauseln',
      info:
        'Transparenz umfasst auch Änderungen (Wechsel/Neuaufnahme) und die Verpflichtung, gleichwertige Sicherheitsstandards sicherzustellen.',
      examples: [
        'Subprozessoren-Liste ist versioniert und wird bei Änderungen aktualisiert.',
        'Vertrag regelt Zustimmungs-/Widerspruchsrechte und Informationsfristen.',
      ],
    },
  ],
},

DORA_GENERATIVE_KI_LLM_ALS_DIENST_KONTROLLEN: {
  label: 'DORA: Generative KI/LLM als Dienst – Zusätzliche Kontrollen (Daten, Versionen, Protokollierung)',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 9', 'DORA (2022), Art. 28–30'],
  items: [
    {
      id: 'DORA_GENAI_DATENMINIMIERUNG_SCHWAERZUNG',
      question:
        'Werden Eingaben an den LLM-Dienst nach dem Prinzip der Datenminimierung gestaltet (Schwärzung/Maskierung sensibler Daten, nur erforderliche Daten)?',
      todo:
        'Datenminimierung und Schwärzung/Maskierung vor LLM-Aufrufen umsetzen und dokumentieren.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Schwärzungs-/Maskierungsregeln, Richtlinie, Datenflussdiagramm, Beispiel-Protokolle (maskiert), Tests',
      info:
        'Ziel: keine unnötigen sensiblen Daten an externe Dienste für generative KI übertragen; Schwärzung/Maskierung muss technisch erzwungen und testbar sein.',
      examples: [
        'Maskierung personenbezogener Daten vor Prompt-Versand; Klartext ist in Protokollen/Exporten unterbunden.',
        'Positivliste: Nur definierte, freigegebene Felder dürfen in Prompts eingebracht werden.',
      ],
    },
    {
      id: 'DORA_GENAI_AUFBEWAHRUNG_UND_LOESCHUNG',
      question:
        'Sind Aufbewahrung und Löschung für Prompts/Antworten/Protokolle beim Anbieter und intern definiert und technisch umgesetzt?',
      todo:
        'Aufbewahrungs- und Löschkonzept für GenAI-Eingaben/Ausgaben festlegen und umsetzen: Aufbewahrungsfristen, Löschpfade, Zugriffsschutz, Nachweise/Löschbestätigungen.',
      reference: 'DORA (2022), Art. 9 i. V. m. Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: Aufbewahrungsrichtlinie, Konfigurationen (Anbieter/Plattform), Löschprotokolle, Vertrag/Anhang',
      info:
        'Typische Audit-Frage: „Wie lange existieren Prompts/Antworten – wo – und wer kann darauf zugreifen?“',
      examples: [
        'Anbieter-Einstellungen: „keine/geringe Aufbewahrung“ bzw. definierte Aufbewahrung aktiviert und vertraglich fixiert.',
        'Interne Protokolle werden nach X Tagen automatisch gelöscht oder anonymisiert.',
      ],
    },
    {
      id: 'DORA_GENAI_Anbieter_ZUSICHERUNG_KEIN_TRAINING',
      question:
        'Sind vertragliche Zusicherungen vorhanden, dass Kundendaten/Prompts nicht zum Training oder zur Feinabstimmung verwendet werden?',
      todo:
        'Vertragliche Zusicherungen „kein Training/keine Feinabstimmung mit Kundendaten“ sicherstellen und in Einkauf/Auslagerungssteuerung verankern.',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: Vertrag/Anhang, Zusicherungen des Anbieters, Subdienstleister-Liste, Review-Protokoll',
      info:
        'Gerade bei generativer KI ist „kein Training mit Kundendaten“ ein zentraler Kontrollpunkt – inkl. Subdienstleistern und Änderungen der Vertragsbedingungen.',
      examples: [
        'Vertragsanhang enthält „kein Training“ plus Nachweispflichten; Änderungen sind zustimmungspflichtig.',
        'Subdienstleister sind transparent benannt; Wechsel löst eine Neubewertung aus.',
      ],
    },
    {
      id: 'DORA_GENAI_VERSIONIERUNG_UND_AENDERUNGSMITTEILUNGEN',
      question:
        'Ist Modell-/Endpunkt-Versionierung geregelt und gibt es einen Prozess für Änderungen des Anbieters',
      todo:
        'Versionierung und Änderungsmanagement für LLM-Anbieter etablieren: feste Modell-IDs/Endpunkte, Überwachung von Änderungsmitteilungen, Auswirkungsanalyse, Wiederholungstests, Freigabe-Gate, Rücksetz-/Rollback-Optionen.',
      reference: 'DORA (2022), Art. 9 i. V. m. Art. 28–29',
      referenceUrl: DORA_LINKS.ART_29,
      evidence: 'Nachweis: Änderungsrichtlinie, Änderungslog des Anbieters, Testberichte, Freigabeprotokolle',
      info:
        'LLM-Anbieter ändern Modelle häufig. Ohne Versionierung/Änderungsprozess entstehen stille Risikoänderungen.',
      examples: [
        'Nur Nutzung expliziter Modellversionen; automatische Upgrades sind verboten oder freigabepflichtig.',
        'Änderungsmitteilung triggert Regressionstests und Risiko-Review vor Umschaltung.',
      ],
    },
    {
      id: 'DORA_GENAI_PROMPT_ANTWORT_PROTOKOLLIERUNG',
      question:
        'Ist die Protokollierung von Prompts/Antworten risikobasiert geregelt (Zweck, Minimierung, Schutz, Zugriff) und auditfähig umgesetzt?',
      todo:
        'Protokollierungskonzept für generative KI definieren: wann wird protokolliert, welche Felder (maskiert), Zugriffskontrollen, Aufbewahrung, SIEM-Überwachung, Nachweisbarkeit für Vorfälle.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Protokollierungskonzept, IAM-/Zugriffsprotokolle, Aufbewahrung, Beispiel-Protokolle (maskiert), SIEM-Use-Cases',
      info:
        'Zielkonflikt: genug Protokollierung für Audit/Vorfälle, aber datensparsam. Lösung: Metadaten plus selektive, maskierte Nutzdaten-Protokollierung.',
      examples: [
        'Standard: nur Metadaten (Request-ID, Modellversion, Token-Anzahl, Richtlinien-ID); Nutzdaten nur nach Debug-/Fehleranalyse-Freigabe.',
        'Zugriff auf Protokolle ist restriktiv und wird protokolliert.',
      ],
    },
    {
      id: 'DORA_GENAI_SICHERHEITSFILTER_UND_RICHTLINIENDURCHSETZUNG',
      question:
        'Sind Sicherheitsfilter und Richtliniendurchsetzung umgesetzt und werden sie getestet?',
      todo:
        'Sicherheitskontrollen implementieren: Eingabevalidierung, Prompt-Injection-Abwehr, Output-Filter/Guardrails, Richtlinienprüfungen, regelmäßige Tests und Nachverfolgung von Feststellungen.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Guardrail-Design, Testberichte, Abuse-Testfälle, Feststellungen-Tracking',
      info:
        'Generative KI bringt neue Angriffsflächen. Ohne Guardrails entstehen Sicherheits- und Compliance-Risiken.',
      examples: [
        'System-Prompt ist geschützt; Tool-Aufrufe sind auf erlaubte Tools beschränkt; Outputs werden gegen Richtlinien geprüft.',
      ],
    },
    {
      id: 'DORA_GENAI_MISSBRAUCHSPRAEVENTION_RATENBEGRENZUNG',
      question:
        'Sind Maßnahmen zur Missbrauchsprävention umgesetzt?',
      todo:
        'Missbrauchsprävention umsetzen: Ratenbegrenzung/Kontingente, Anomalieerkennung, Authentifizierung/Autorisierung je Nutzer/Rolle, Missbrauchsprozesse, Alarmierung und Nachweiskette.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Ratenbegrenzungs-Konfiguration, SIEM/Alarme, Missbrauchsprozess, Tickets/Fallakten',
      info:
        'Schützt vor Prompt-Stuffing, Datenabfluss, Kostenexplosion und unerlaubter Nutzung.',
      examples: [
        'Kontingente pro Nutzer/Rolle; Anomaliealarme bei ungewöhnlichen Promptmustern oder Datenvolumen.',
        'Missbrauchsprozess enthält Sperrung, Forensik, Kommunikation und Lessons Learned/Lerneffekte.',
      ],
    },
  ],
},

DORA_MODELLBETRIEB_UEBERWACHUNG: {
  label: 'DORA: Modellbetrieb – Überwachung, Änderungsmanagement und Kontrollen',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 5–16'],
  items: [
    {
      id: 'DORA_MODELLAENDERUNG_Auswirkung',
      question:
        'Gibt es einen dokumentierten Änderungsprozess, der Modelländerungen nur nach Risiko- und Auswirkungsanalyse freigibt?',
      todo:
        'Änderungsprozess für Modelländerungen etablieren und dokumentieren, der Freigaben nur nach Risiko- und Auswirkungsanalyse erlaubt (inkl. Re-Tests, Überwachungsauflagen, Rücksetzung).',
      reference: 'DORA (2022), Art. 6–9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Änderungsrichtlinie, Auwirkungs-Vorlage, Freigaben',
      info:
        'Der Prozess sollte Trigger definieren (z. B. Neutraining/Feinabstimmung, neue Features, neue Datenquelle) und Re-Tests/Überwachungsauflagen enthalten.',
      examples: [
        'Auswirkungsanalyse bewertet Sicherheits-, Resilienz- und Compliance-Auswirkungen.',
        'Freigabeprotokoll verlinkt auf Tests, Überwachung und Rücksetzungsplan.',
      ],
    },
    {
      id: 'DORA_UEBERWACHUNG_LEISTUNG',
      question:
        'Werden Leistungskennzahlen des Modells im Betrieb überwacht und gibt es definierte Schwellenwerte für Eskalation?',
      todo:
        'Leistungskennzahlen im Betrieb überwachen und Schwellenwerte inkl. Eskalations- und Reaktionsprozess definieren (inkl. Rückfall/Degradationsmodus).',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Überwachungs-Dashboard, Alarmregeln',
      info:
        'Definieren Sie Metriken, Schwellenwerte, Verantwortliche und Reaktionszeiten (inkl. Rückfall/Degradationsmodus).',
      examples: [
        'Dashboard zeigt Metriken (z. B. Fehlerquote, Latenz, Abbruchrate) mit Schwellenwerten.',
        'Alarmregeln eskalieren an Rufbereitschaft und Verantwortlicher.',
      ],
    },
    {
      id: 'DORA_UEBERWACHUNG_DRIFT',
      question:
        'Wird (Modell-)Drift (Leistungs-/Datenverschiebung) überwacht und sind Maßnahmen bei Überschreitung von Schwellenwerten definiert?',
      todo:
        '(Modell-)Drift (Leistungs-/Datenverschiebung) überwachen sowie Maßnahmen bei Schwellenwertüberschreitung definieren und operationalisieren (Warnung, Analyse, Mitigation, Rücksetzung/Neutraining).',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: Drift-Bericht, Betriebshandbücher, Alarme',
      info:
        'Drift-Überwachung sollte sowohl Datenverteilung als auch Modellleistung berücksichtigen; Maßnahmen reichen von Warnung bis Rücksetzung/Neutraining.',
      examples: [
        'Drift-Bericht zeigt Verteilungsänderungen und betroffene Features.',
        'Betriebshandbuch beschreibt Schritte bei Drift (Analyse, Mitigation, Neutraining, Freigabe).',
      ],
    },
    {
      id: 'DORA_UEBERWACHUNG_SICHERHEIT',
      question:
        'Gibt es Sicherheitsüberwachung für KI-relevante Komponenten (z. B. unautorisierte Zugriffe, Anomalien)?',
      todo:
        'Sicherheitsüberwachung für KI-relevante Komponenten einrichten und betreiben (APIs, Modellendpunkte, Datenzugriffe, Secrets) inkl. Alarmierung und Nachverfolgung.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence: 'Nachweis: SIEM-Anwendungsfälle, Protokolle, Alarmierung',
      info:
        'Sicherheitsüberwachung sollte relevante Angriffsflächen abdecken (APIs, Modellendpunkte, Datenzugriffe, Secrets) und nachvollziehbar auswertbar sein.',
      examples: [
        'SIEM-Anwendungsfälle erkennt untypische Zugriffsmuster auf Modellendpunkte.',
        'Alarmierung löst Tickets aus und dokumentiert Bearbeitung/Abschluss.',
      ],
    },
    {
      id: 'DORA_BETRIEBSHANDBUCH_MODELLVORFAELLE',
      question:
        'Gibt es Betriebshandbücher für Modellfehler (z. B. Fehlentscheidungen, Ausfälle) inklusive Eskalationskette?',
      todo:
        'Betriebshandbücher für Modellfehler erstellen, testen und pflegen (Diagnose, Abschalten/Rückfall/Rücksetzung) inkl. klarer Eskalationskette und Entscheidungsbefugnissen.',
      reference: 'DORA (2022), Art. 17',
      referenceUrl: DORA_LINKS.ART_17,
      evidence:
        'Nachweis: Betriebshandbücher/Ablaufpläne, Rufbereitschaftsplan, Eskalationsmatrix',
      info:
        'Betriebshandbücher sollten klare Diagnose- und Entscheidungswege haben (z. B. Abschalten, Rückfall, Rücksetzung) und Verantwortlichkeiten je Stufe.',
      examples: [
        'Betriebshandbuch enthält Checkliste: Symptome, Ursachen, Maßnahmen, Kommunikationsvorlage.',
        'Eskalationsmatrix benennt Level 1/2/3 und Entscheidungsbefugnisse.',
      ],
    },
    {
      id: 'DORA_BETRIEBSHANDBUCH_CYBER_IKT_VORFAELLE',
      question:
        'Gibt es Betriebshandbücher für Cyber- und IKT-Vorfälle in den KI-Komponenten inklusive Eskalationskette?',
      todo:
        'Betriebshandbücher für Cyber- und IKT-Vorfälle in KI-Komponenten erstellen, üben und pflegen (Erkennung, Eindämmung, Wiederherstellung, Kommunikation/Meldepflichten).',
      reference: 'DORA (2022), Art. 17',
      referenceUrl: DORA_LINKS.ART_17,
      evidence: 'Nachweis: IR-Betriebshandbücher, Rollen, Übungen',
      info:
        'Cyber-Betriebshandbücher sollten Erkennung, Eindämmung, Wiederherstellung sowie Kommunikations- und Meldepflichten berücksichtigen.',
      examples: [
        'IR-Betriebshandbuch beschreibt Eindämmung, Forensik, Wiederanlauf und Lessons Learned.',
        'Übungen sind dokumentiert, Feststellungen werden nachverfolgt.',
      ],
    },
  ],
},

DORA_KOMMUNIKATIONSPLAENE: {
  label: 'DORA: Kommunikation – Kommunikationspläne & -strategie (Art. 14)',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 14', 'DORA (2022), Art. 17 (Bezug)'],
  items: [
    {
      id: 'DORA_KOMM_PLAN',
      canonicalId: 'DORA_KOMM_PLAN',
      question:
        'Gibt es einen Kommunikationsplan für schwerwiegende IKT-Vorfälle/Schwachstellen (Schweregrade, Freigaben, verantwortungsbewusste Offenlegung)?',
      todo:
        'Kommunikationsplan erstellen/aktualisieren: Schweregrade, Auslöser, Freigabeprozess, Kundeninformation, verantwortungsbewusste Offenlegung gegenüber Öffentlichkeit/anderen Finanzunternehmen; inkl. Kontaktlisten und Eskalationswegen.',
      reference: 'DORA (2022), Art. 14(1)',
      referenceUrl: DORA_LINKS.ART_14,
      evidence:
        'Nachweis: Kommunikationsplan, Schweregradmatrix, Freigaberegeln, Kontaktlisten, Dokumentation verantwortungsbewusster Offenlegung',
      info:
        'Der Plan muss Auslöser, Freigaben, Zielgruppen, Inhalte und Kanäle je Schweregrad nachvollziehbar festlegen.',
      examples: [
        'Definierte Kriterien: wann Kunden aktiv informiert werden (z. B. Serviceausfall > X, Datenabfluss).',
        'Freigabekette (Recht/Compliance/PR/Management) ist dokumentiert.',
      ],
    },
    {
      id: 'DORA_KOMM_STRATEGIE',
      canonicalId: 'DORA_KOMM_STRATEGIE',
      question:
        'Gibt es eine Kommunikationsstrategie für interne Mitarbeitende und externe Stakeholder (Zielgruppenlogik, Rollen, Informationsbedarfe)?',
      todo:
        'Kommunikationsstrategie umsetzen: interne/externe Zielgruppen definieren, Rollen und Verantwortlichkeiten festlegen, Informationskanäle und Inhalte je Zielgruppe standardisieren; Trennung „Vorfallsmeldeteam“ vs. „zu informierende Mitarbeitende“ berücksichtigen.',
      reference: 'DORA (2022), Art. 14(2)',
      referenceUrl: DORA_LINKS.ART_14,
      evidence:
        'Nachweis: Kommunikationsstrategie, RACI, Zielgruppen-/Stakeholder-Matrix, Kanal-/Verteilerkonzept',
      info:
        'Die Strategie muss Zielgruppen, Rollen, Kanäle sowie Mindestinhalte pro Lagebild definieren und versioniert pflegen.',
      examples: [
        'Unterscheidung: IR-Team (operativ) vs. restliche Organisation (Status-/Handlungsinfos).',
        'Externe Stakeholder: Kunden, Partner, Aufsicht, Medien, Dienstleister.',
      ],
    },
    {
      id: 'DORA_KOMM_ANSPRECHPERSON',
      canonicalId: 'DORA_KOMM_ANSPRECHPERSON',
      question:
        'Ist mindestens eine verantwortliche Person für die Umsetzung der Kommunikationsstrategie (inkl. Öffentlichkeit/Medien) benannt?',
      todo:
        'Kommunikationsverantwortung festlegen: benannte Rolle/Person (inkl. Stellvertretung) für externe Kommunikation/Medien, eingebettet in Vorfalls- und Krisenorganisation.',
      reference: 'DORA (2022), Art. 14(3)',
      referenceUrl: DORA_LINKS.ART_14,
      evidence:
        'Nachweis: Rollenbeschreibung, Benennung, Stellvertretungsregel, Organigramm/Krisenhandbuch',
      info:
        'Benennung muss Rolle, Stellvertretung, Erreichbarkeit und Freigabebefugnisse eindeutig dokumentieren.',
      examples: ['Krisensprecher:in plus Stellvertretung benannt und erreichbar.'],
    },
    {
      id: 'DORA_KOMM_VORLAGEN',
      canonicalId: 'DORA_KOMM_VORLAGEN',
      question:
        'Gibt es vorgefertigte Kommunikationsbausteine/Vorlagen (Kundeninfo, Statusseite, FAQ, interne Updates) und sind diese getestet/geübt?',
      todo:
        'Vorlagen erstellen und üben: Kundenbenachrichtigung, Statusseiten-Update, interne Lageupdates, Q&A/FAQ, Medienst statement; Übung inkl. Lessons Learned.',
      reference: 'DORA (2022), Art. 14 i. V. m. Art. 17',
      referenceUrl: DORA_LINKS.ART_14,
      evidence:
        'Nachweis: Vorlagen, Übungsprotokolle, Lessons Learned, Aktualisierungsnachweise',
      info:
        'Vorlagen müssen freigegeben, aktuell und in Übungen erprobt sein (inkl. Nachweis der Freigabekette).',
      examples: [
        'Übung „Cloud-Ausfall“: Kommunikationskette und Freigaben wurden durchlaufen.',
      ],
    },
  ],
},

DORA_VEREINFACHTE_BASIS: {
  label: 'DORA: Vereinfachter IKT-Risikomanagementrahmen (Art. 16) – Minimalanforderungen',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 16'],
  items: [
    {
      id: 'DORA_ART16_EIGNUNG_DOKU',
      canonicalId: 'DORA_ART16_EIGNUNG_DOKU',
      question:
        'Ist die Anwendbarkeit von Art. 16 (Geltungsbereich/Eignung) nachvollziehbar begründet und dokumentiert?',
      todo:
        'Art.-16-Eignung dokumentieren: Unternehmenstyp/Geltungsbereich prüfen, Begründung festhalten, Entscheidung versionieren (inkl. Verantwortlicher/Datum).',
      reference: 'DORA (2022), Art. 16',
      referenceUrl: DORA_LINKS.ART_16,
      evidence: 'Nachweis: Recht/Compliance-Notiz, Entscheidungsvorlage, Richtlinienauszug, Version/Verantwortlicher',
      info:
        'Die Dokumentation muss Geltungsbereich, Kriterien und Entscheidung (inkl. Datum/Verantwortlicher) eindeutig nachweisen.',
      examples: [
        'Entscheidungsvorlage enthält Geltungsbereich, Begründung, Datum und Verantwortliche.',
        'Richtlinienauszug referenziert die Anwendung des vereinfachten Rahmens.',
      ],
    },
    {
      id: 'DORA_ART16_RMF_MINDESTUMFANG',
      canonicalId: 'DORA_ART16_RMF_MINDESTUMFANG',
      question:
        'Ist ein vereinfachter IKT-RMF (Rollen, Richtlinien, Mindestkontrollen) definiert und im Betrieb verankert?',
      todo:
        'Vereinfachten IKT-RMF definieren: Rollen/Verantwortlichkeiten, Richtlinien/Standards, Mindestkontrollen und Betriebsprozesse festlegen.',
      reference: 'DORA (2022), Art. 16',
      referenceUrl: DORA_LINKS.ART_16,
      evidence: 'Nachweis: RMF-Dokument, Rollenmodell/RACI, Richtlinien/Standards, Kontrollkatalog',
      info:
        'Der Mindestumfang muss Rollen, Richtlinien, Kontrollen und Betriebsprozesse abdecken und versioniert gepflegt werden.',
      examples: [
        'RMF-Dokument referenziert Rollen/RACI und Mindestkontrollen.',
        'Kontrollkatalog ist abgestimmt und im Betrieb verankert.',
      ],
    },
    {
      id: 'DORA_ART16_UEBERWACHUNG',
      canonicalId: 'DORA_ART16_UEBERWACHUNG',
      question:
        'Gibt es fortlaufende Überwachung der IKT-Risiken und einen Review-Zyklus (mind. jährlich/bei Änderungen)?',
      todo:
        'Überwachung und Review-Zyklus definieren: KPIs/KRIs, regelmäßige Reviews, änderungsgetriebene Neubewertungen, Feststellungen-Tracking.',
      reference: 'DORA (2022), Art. 16',
      referenceUrl: DORA_LINKS.ART_16,
      evidence: 'Nachweis: Überwachungskonzept, KPI/KRI-Set, Review-Protokolle, Feststellungen-Backlog',
      info:
        'Review-Zyklus muss Frequenz, Verantwortliche, Inputs (KPIs/KRIs) und Nachverfolgung von Feststellungen festlegen.',
      examples: [
        'Review-Protokoll enthält KPI/KRI-Status und Entscheidungen.',
        'Backlog dokumentiert Feststellungen mit Verantwortlicher, Frist und Status.',
      ],
    },
    {
      id: 'DORA_ART16_CIA_SCHUTZ',
      canonicalId: 'DORA_ART16_CIA_SCHUTZ',
      question:
        'Sind Mindestmaßnahmen zum Schutz von Vertraulichkeit/Integrität/Verfügbarkeit (z. B. IAM, Protokollierung, Backup) umgesetzt?',
      todo:
        'Mindestmaßnahmen umsetzen: Zugriffssteuerung (minimale Rechte), Protokollierung, Backup/Wiederherstellung, Basis-Härtung – proportional dokumentiert.',
      reference: 'DORA (2022), Art. 16',
      referenceUrl: DORA_LINKS.ART_16,
      evidence: 'Nachweis: IAM-Konzept, Protokollierung/SIEM-Nachweis, Backup-Plan, HärtungsBasis',
      info:
        'Mindestmaßnahmen müssen umgesetzt und auditfähig nachweisbar sein (Konfiguration, Aufbewahrung, Wiederherstellungstests).',
      examples: [
        'IAM-Konzept zeigt Rollen, Rezertifizierung und Trennung von Aufgaben.',
        'Backup-Plan enthält Wiederherstellungstests und dokumentierte Ergebnisse.',
      ],
    },
    {
      id: 'DORA_ART16_VORFALLBEHANDLUNG',
      canonicalId: 'DORA_ART16_VORFALLBEHANDLUNG',
      question:
        'Ist ein minimaler Vorfallprozess inkl. Eskalation/Betriebshandbuch/Verantwortlichkeiten definiert?',
      todo:
        'Minimalen Vorfallprozess definieren: Schweregrade/Eskalation, Betriebshandbücher, Rollen, Lessons Learned und Nachverfolgung.',
      reference: 'DORA (2022), Art. 16',
      referenceUrl: DORA_LINKS.ART_16,
      evidence: 'Nachweis: Vorfallprozess, Betriebshandbücher, Rufbereitschaft/Eskalationsmatrix, Postmortems',
      info:
        'Der Prozess muss Schweregrade, Eskalation, Zuständigkeiten und Nachweise je Vorfall festlegen.',
      examples: [
        'Eskalationsmatrix benennt Verantwortliche und Reaktionszeiten.',
        'Postmortem dokumentiert Ursache, Maßnahmen und Wirksamkeitsprüfung.',
      ],
    },
  ],
},

DORA_VORFALLMANAGEMENT: {
  label: 'DORA: IKT-Vorfallmanagement & Meldeprozesse',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 17–23'],
  items: [
    {
      id: 'DORA_VORFALL_PROZESS',
      question:
        'Gibt es einen dokumentierten Prozess zur Erfassung, Klassifikation und Bearbeitung von IKT-Vorfällen?',
      todo:
        'Prozess zur Erfassung, Klassifikation und Bearbeitung von IKT-Vorfällen definieren, dokumentieren und in den Betrieb integrieren (inkl. KI-spezifischer Vorfälle).',
      reference: 'DORA (2022), Art. 17',
      referenceUrl: DORA_LINKS.ART_17,
      evidence: 'Nachweis: Prozessbeschreibung, Ticket-Workflow, Rollen',
      info:
        'Der Prozess sollte auch KI-spezifische Vorfälle berücksichtigen (z. B. systematische Fehlentscheidungen, (Modell-)Drift (Leistungs-/Datenverschiebung), Datenqualitätsvorfälle). ' +
        'Art. 17 verweist auf Kommunikationspläne nach Art. 14',
      examples: [
        'Ticket-Workflow enthält Kategorien/Schweregrade und SLA-Reaktionszeiten.',
        'Rollen sind definiert (Vorfallsmanager, Verantwortlicher, IT-Sicherheit, Kommunikation).',
      ],
    },
    {
      id: 'DORA_VORFALL_SCHWELLENWERTE',
      question:
        'Sind Kriterien und Schwellenwerte für meldepflichtige IKT-Vorfälle dokumentiert und verbindlich kommuniziert?',
      todo:
        'Kriterien und Schwellenwerte für meldepflichtige IKT-Vorfälle festlegen, dokumentieren und verbindlich an relevante Teams kommunizieren.',
      reference: 'DORA (2022), Art. 18–19',
      referenceUrl: DORA_LINKS.ART_18,
      evidence: 'Nachweis: Richtlinie, Schulungsnachweis, Kommunikationsmail',
      info:
        'Schwellenwerte sollten konkret und operationalisiert sein (z. B. Nutzerauswirkung, Dauer, Datenverlust, kritische Services).',
      examples: [
        'Richtlinie enthält Entscheidungsmatrix (Schweregrad/Materialität).',
        'Schulungsnachweis zeigt, dass relevante Teams die Kriterien kennen.',
      ],
    },
    {
      id: 'DORA_VORFALL_MELDUNG_AUFSICHT',
      question:
        'Gibt es einen dokumentierten Meldeprozess an die zuständige Aufsicht inklusive Fristen, Rollen und Vorlagen?',
      todo:
        'Meldeprozess an die zuständige Aufsicht dokumentieren und operationalisieren (Fristen, Rollen, Vorlagen, Freigaben, Informationsquellen).',
      reference: 'DORA (2022), Art. 19–20',
      referenceUrl: DORA_LINKS.ART_19,
      evidence: 'Nachweis: Meldeprozess, Vorlagen, RACI',
      info:
        'Prozess sollte Verantwortlichkeiten (wer meldet?), Fristen und Informationsquellen für die Meldung klar definieren.',
      examples: [
        'Vorlagen enthalten Mindestinformationen und Ansprechpartner.',
        'RACI definiert Freigabe durch Recht/Compliance vor Versand.',
      ],
    },
    {
      id: 'DORA_VORFALL_MELDEVORLAGEN_VERSIONIERUNG',
      canonicalId: 'DORA_VORFALL_MELDEVORLAGEN_VERSIONIERUNG',
      question:
        'Sind Meldevorlagen gepflegt und versioniert (Verantwortlicher, Freigabe, Änderungsprotokoll), sodass stets die aktuellen Inhalte genutzt werden?',
      todo:
        'Meldevorlagen etablieren und governancefähig machen: Verantwortlicher, Freigabeprozess, Versionierung/Änderungsprotokoll, Ablageort, regelmäßige Reviews; ' +
        'Sicherstellen, dass Vorfall- und Aufsichtsmeldungen konsistent die geforderten Datenfelder abdecken.',
      reference: 'DORA (2022), Art. 19–20',
      referenceUrl: DORA_LINKS.ART_19,
      evidence:
        'Nachweis: Vorlagen-Repository, Versionshistorie/Änderungsprotokoll, Freigabeprotokoll, Review-Zyklus',
      info:
        'Audit-Falle: Vorlage existiert, ist aber veraltet/ungeprüft. Hier geht es explizit um Version-Governance und Nachvollziehbarkeit.',
      examples: [
        'Vorlagen liegen zentral (z. B. GRC/Confluence/Repository) inkl. Versionsnummer.',
        'Änderungen sind freigegeben (Recht/Compliance/Verantwortlicher) und nachvollziehbar.',
      ],
    },
    {
      id: 'DORA_VORFALL_MELDEFRISTEN_PHASEN',
      canonicalId: 'DORA_VORFALL_MELDEFRISTEN_PHASEN',
      question:
        'Sind Meldefristen als Phasen (Erst-/Zwischen-/Abschlussmeldung) operationalisiert (Timer/Trigger, Verantwortliche, Eskalation, Cut-off-Informationen)?',
      todo:
        'Fristen operationalisieren: Definition der Phasen (Erst-/Zwischen-/Abschlussmeldung), Trigger je Phase, interne Timer/SLA, Verantwortlichkeiten und Eskalation; ' +
        'Betriebshandbuch so gestalten, dass „bekannte/noch unbekannte Informationen“ sauber getrennt und nachgereicht werden können.',
      reference: 'DORA (2022), Art. 19–20',
      referenceUrl: DORA_LINKS.ART_20,
      evidence:
        'Nachweis: Betriebshandbuch mit Phasen, SLA/Timer-Konzept, Eskalationsmatrix, Beispielmeldungen, Lessons Learned',
      info:
        'Die häufigste Lücke ist nicht „keine Meldung“, sondern „Fristen/Phasen nicht beherrscht“ (wer liefert wann welche Inhalte).',
      examples: [
        'Betriebshandbuch enthält Checkliste: Inhalte Erstmeldung vs. Zwischenmeldung vs. Abschluss.',
        'Eskalation an Management/Compliance, wenn Informationen nicht rechtzeitig vorliegen.',
      ],
    },
    {
      id: 'DORA_VORFALL_NACHBEREITUNG',
      canonicalId: 'DORA_VORFALL_NACHBEREITUNG',
      question:
        'Werden schwerwiegende IKT-Vorfälle mit Abschlussbericht, Ursachenanalyse und Maßnahmenplan dokumentiert?',
      todo:
        'Für schwerwiegende IKT-Vorfälle Nachbereitungen durchführen und dokumentieren (Abschlussbericht, Ursachenanalyse, Maßnahmenplan inkl. Verantwortlicher/Frist/Wirksamkeitsprüfung).',
      reference: 'DORA (2022), Art. 19–20',
      referenceUrl: DORA_LINKS.ART_20,
      evidence:
        'Nachweis: Abschlussbericht, Ursachenanalyse (RCA), Maßnahmen-Tracker, Wirksamkeitsprüfung/Re-Test',
      info:
        'Nachbereitungen sollten messbare Maßnahmen enthalten (Verantwortlicher, Frist, Erfolgskriterium) und Rückkopplung in Kontrollen/Überwachung sicherstellen.',
      examples: [
        'Abschlussbericht enthält Timeline, Grundursache, Auswirkung und Lessons Learned.',
        'Maßnahmen-Tracker dokumentiert Umsetzung und Wirksamkeitsprüfung.',
      ],
    },
  ],
},

DORA_MELDUNG_ERHEBLICHER_CYBERBEDROHUNGEN: {
  label: 'DORA: (Freiwillige) Meldung erheblicher Cyberbedrohungen',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 19–20'],
  items: [
    {
      id: 'DORA_BEDROHUNGSMELDUNG_KRITERIEN',
      canonicalId: 'DORA_BEDROHUNGSMELDUNG_KRITERIEN',
      question:
        'Sind Kriterien definiert, wann eine erhebliche Cyberbedrohung (ohne eingetretenen Vorfall) gemeldet wird (Relevanz für Finanzsystem/Kunden/Dienstnutzer)?',
      todo:
        'Kriterien/Schwellen für (freiwillige) Bedrohungsmeldungen definieren: Bedrohungskategorien, Relevanzkriterien, Abgrenzung zum Vorfall; ' +
        'Entscheidungsmatrix dokumentieren und den relevanten Teams kommunizieren.',
      reference: 'DORA (2022), Art. 19–20',
      referenceUrl: DORA_LINKS.ART_19,
      evidence:
        'Nachweis: Richtlinie/Entscheidungsmatrix, Bedrohungstaxonomie, Schulungs-/Kommunikationsnachweise',
      info:
        'Ziel: Threat-Intelligence und Vorwarnungen governancefähig machen – nicht jedes IOC melden, sondern nachvollziehbar entscheiden.',
      examples: [
        'Kriterien: hohe Wahrscheinlichkeit plus hohe Auswirkung plus potenziell sektorweite Relevanz.',
      ],
    },
    {
      id: 'DORA_BEDROHUNGSMELDUNG_PROZESS',
      canonicalId: 'DORA_BEDROHUNGSMELDUNG_PROZESS',
      question:
        'Gibt es einen dokumentierten Prozess für Bedrohungsmeldungen (Rollen, Freigaben, Meldekanal, Abstimmung mit Recht/Compliance)?',
      todo:
        'Prozess für Bedrohungsmeldungen dokumentieren: Rollen (SOC/CSIRT, Vorfalls/Threat Manager, Compliance/Recht), Freigaben, Meldekanal, ' +
        'Inhaltsminimum, Vertraulichkeitsprüfung und Abstimmung mit parallel laufenden Behördenprozessen.',
      reference: 'DORA (2022), Art. 19–20',
      referenceUrl: DORA_LINKS.ART_20,
      evidence:
        'Nachweis: Prozessbeschreibung, RACI, Betriebshandbuch/Ablaufplan, Freigabeprotokolle',
      info:
        'Der Prozess muss Rollen, Freigaben, Kanal/Format, Dokumentation und Nachverfolgung eindeutig festlegen.',
      examples: [
        'Betriebshandbuch enthält Go/No-Go-Gate plus Freigabe durch Compliance/Recht.',
        'Klarer Kanal/Format (wer sendet, wer empfängt, wie wird dokumentiert).',
      ],
    },
    {
      id: 'DORA_BEDROHUNGSMELDUNG_NACHWEISE',
      canonicalId: 'DORA_BEDROHUNGSMELDUNG_NACHWEISE',
      question:
        'Werden Entscheidungen und Meldungen zu Cyberbedrohungen nachvollziehbar dokumentiert (Entscheidungsprotokoll, Inhalte, Zeitpunkt, Rückmeldungen)?',
      todo:
        'Nachweisführung etablieren: Entscheidungsprotokoll inkl. Begründung, Zeitpunkt, Inhalt, Freigaben; Rückmeldungen/Nachverfolgung dokumentieren; ' +
        'Lessons Learned in Bedrohungs- und Vorfallprozesse zurückspielen.',
      reference: 'DORA (2022), Art. 19–20',
      referenceUrl: DORA_LINKS.ART_19,
      evidence:
        'Nachweis: Entscheidungsprotokoll, Meldungsablage, Ticket-/Fallakten, Review-Protokolle',
      info:
        'Auditfähig ist die Dokumentation nur, wenn auch Nicht-Meldungen und deren Begründung nachvollziehbar erfasst sind.',
      examples: [
        'Entscheidungsprotokoll zeigt auch Fälle, in denen bewusst nicht gemeldet wurde (mit Begründung).',
      ],
    },
  ],
},

DORA_TESTPROGRAMM: {
  label: 'DORA: IKT-Testprogramm (ohne TLPT)',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 24–25'],
  items: [
    {
      id: 'DORA_TESTPLAN',
      question:
        'Gibt es ein dokumentiertes IKT-Testprogramm (Frequenzen, Testarten, Verantwortlichkeiten, Unabhängigkeit/Kompetenz)?',
      todo:
        'Testprogramm definieren: Testarten-Mix (z. B. Schwachstellenmanagement/Penetrationstests, Szenario-Tests), Frequenzen, Rollen, Unabhängigkeit/Kompetenz und Abhilfemaßnahmen-Governance festlegen.',
      reference: 'DORA (2022), Art. 24–25',
      referenceUrl: DORA_LINKS.ART_24,
      evidence: 'Nachweis: Testprogramm, Testkalender, Rollen/RACI',
      info:
        'Auditfähig = Plan → Durchführung → Feststellungen → Abhilfemaßnahmen → Wirksamkeitsprüfung (geschlossene Nachweiskette).',
      examples: [
        'Testkalender ist abgestimmt, versioniert und wird eingehalten.',
        'Testarten decken relevante Komponenten ab (Modell, Datenpipeline, Infrastruktur/Cloud).',
      ],
    },
    {
      id: 'DORA_TESTUMFANG_ABHAENGIGKEITEN',
      question:
        'Deckt der Testumfang auch kritische Abhängigkeiten und Schnittstellen (inkl. IKT-Drittanbieter) ab?',
      todo:
        'Testumfang so festlegen, dass Drittanbieter-Schnittstellen und kritische Abhängigkeiten einbezogen sind (vertragliche Mitwirkung, Geltungsbereich, Berichtserhalt).',
      reference: 'DORA (2022), Art. 25',
      referenceUrl: DORA_LINKS.ART_25,
      evidence: 'Nachweis: Test-Geltungsbereich, Anbieter-Einbindung, Vertragsklauseln',
      info:
        'Der Geltungsbereich muss Schnittstellen, Abhängigkeiten und Mitwirkung von Drittanbietern nachvollziehbar regeln.',
      examples: [
        'Test-Geltungsbereich benennt Drittanbieter-Schnittstellen und kritische Pfade.',
        'Vertragsklauseln regeln Berichtserhalt und Mitwirkungspflichten.',
      ],
    },
    {
      id: 'DORA_FESTSTELLUNGEN_NACHVERFOLGUNG',
      question:
        'Gibt es einen Prozess, der Test-Feststellungen priorisiert, Maßnahmen zuweist und fristgerecht nachverfolgt?',
      todo:
        'Prozess zur Priorisierung, Zuweisung und fristgerechten Nachverfolgung von Feststellungen etablieren (Schweregrad, Verantwortlicher, Fristen, Wirksamkeitsprüfung).',
      reference: 'DORA (2022), Art. 25',
      referenceUrl: DORA_LINKS.ART_25,
      evidence:
        'Nachweis: Feststellungen-Tracker, Behebungsplan, Statusreports',
      info:
        'Governance-Haken: regelmäßiges Review/Eskalation bei Verzug und Wirksamkeitsnachweis nach Umsetzung.',
      examples: [
        'Feststellungen-Tracker enthält Schweregrad, Verantwortlicher, Fälligkeit und Status.',
        'Statusreport wird regelmäßig im Gremium reviewed und eskaliert bei Verzug.',
      ],
    },
  ],
},

DORA_TLPT: {
  label: 'DORA: TLPT (Threat-Led Penetration Testing)',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 26–27'],
  items: [
    {
      id: 'DORA_TLPT_SCOPE_PRUEFUNG',
      question:
        'Wurde geprüft und dokumentiert, ob das KI-System bzw. seine Infrastruktur in den TLPT-Geltungsbereich fällt (Geltungsbereich, Abhängigkeiten, kritische Pfade)?',
      todo:
        'TLPT-Geltungsbereich prüfen und dokumentieren: Systemgrenzen, kritische Pfade, Abhängigkeiten (inkl. IKT-Drittanbieter) und Kriterien/Begründung festhalten.',
      reference: 'DORA (2022), Art. 26–27',
      referenceUrl: DORA_LINKS.ART_26,
      evidence: 'Nachweis: Geltungsbereich, Risikoanalyse, TLPT-Plan/Beauftragung',
      info:
        'TLPT ist institutsspezifisch. Entscheidend ist die dokumentierte Geltungsbereich-/Pfad-Definition und die Nachvollziehbarkeit der Begründung.',
      examples: [
        'Geltungsbereich wird durch Risikomanagement/BCM/IT abgestimmt und versioniert abgelegt.',
        'Abhängigkeiten zu kritischen IKT-Drittanbietern sind im Geltungsbereich berücksichtigt.',
      ],
    },
  ],
},

DORA_DRITTANBIETER_SORGFALTSPRUEFUNG: {
  label: 'DORA: Drittanbieter – Sorgfaltsprüfung, Verträge und Überwachung',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 28–30, 31–44'],
  items: [
    {
      id: 'DORA_SORGFALTSPRUEFUNG_MINDESTUMFANG',
      question:
        'Umfasst die Sorgfaltsprüfung mindestens Sicherheit, Resilienz, Subdienstleister und Datenverarbeitung – und ist sie dokumentiert?',
      todo:
        'Sorgfaltsprüfung risikobasiert durchführen und dokumentieren (Sicherheit, Resilienz, Subdienstleister, Datenverarbeitung, Abhängigkeiten).',
      reference: 'DORA (2022), Art. 28–29',
      referenceUrl: DORA_LINKS.ART_28,
      evidence: 'Nachweis: DD-Report, Fragebogen, Risikoentscheidung',
      info:
        'Die Sorgfaltsprüfung sollte risikobasiert sein und die tatsächlichen Leistungen/Abhängigkeiten des Anbieters abdecken.',
      examples: [
        'DD-Report bewertet Sicherheit/Resilienz, Subdienstleister und Datenzugriff.',
        'Risikoentscheidung dokumentiert akzeptierte Risiken und Auflagen.',
      ],
    },
    {
      id: 'DORA_VERTRAG_AUDIT_RECHTE',
      canonicalId: 'DORA_VERTRAG_AUDIT_UND_ZUGRIFFSRECHTE',
      question:
        'Sind Audit- und Prüfrechte gegenüber dem Anbieter vertraglich geregelt?',
      todo:
        'Audit- und Prüfrechte vertraglich regeln (inkl. Unterauftragnehmer) und klare Nachweispflichten, Fristen, Geltungsbereich und Abhilfemaßnahmen festlegen.',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: Vertrag/Anhang, Audit-Klausel',
      info:
        'Audit-Rechte sollten auch Unterauftragnehmer einschließen und klare Nachweispflichten/Fristen definieren.',
      examples: [
        'Vertrag regelt Geltungsbereich, Vorankündigung, Berichtserhalt und Abhilfemaßnahmen.',
        'Klausel umfasst Zugriff auf relevante Nachweise (z. B. Reports, Logs, Richtlinien).',
      ],
    },
    {
      id: 'DORA_VERTRAG_SICHERHEIT_SLA',
      question:
        'Sind Sicherheitsanforderungen (z. B. SLAs/KPIs, Mindeststandards) vertraglich geregelt?',
      todo:
        'Messbare Sicherheitsanforderungen vertraglich festlegen (KPIs/SLAs, Schwellenwerte, Reporting-Frequenz, Eskalation) und deren Überprüfbarkeit sicherstellen.',
      reference: 'DORA (2022), Art. 30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence: 'Nachweis: SLA/Anhang, Sicherheits-Addendum',
      info:
        'Anforderungen sollten messbar und überprüfbar sein (KPI/SLA, Schwellenwerte, Reporting-Frequenz, Eskalation).',
      examples: [
        'Sicherheits-Addendum definiert Mindeststandards (z. B. Update-Zeiten, MFA, Protokollierung).',
        'SLA-Anhang enthält Kennzahlen, Reports und Eskalationsstufen.',
      ],
    },
    {
      id: 'DORA_AUSTIEGSPLAN',
      canonicalId: 'DORA_EXIT_STRATEGIE_MIGRATION_DATEN_RUECKGABE',
      question:
        'Ist eine Ausstiegsstrategie inklusive Datenmigration und Übergangsbetrieb dokumentiert?',
      todo:
        'Ausstiegsstrategie inkl. Datenmigration und Übergangsbetrieb dokumentieren und operationalisieren.',
      reference: 'DORA (2022), Art. 28–30',
      referenceUrl: DORA_LINKS.ART_28,
      evidence: 'Nachweis: Exit-Plan, Migrations-Betriebshandbuch, Verantwortliche',
      info:
        'Exit sollte auch Übergangsbetrieb (Parallelbetrieb) und Rückfalloptionen (Rücksetzung) berücksichtigen.',
      examples: [
        'Exit-Plan enthält Schritte, Fristen, Verantwortlicher und notwendige Zugänge/Artefakte.',
        'Migrations-Betriebshandbuch beschreibt Tests, Cutover und Abnahme.',
      ],
    },
    {
      id: 'DORA_ANBIETER_PRUEF_FREQUENZ',
      question:
        'Werden Drittanbieter risikobasiert regelmäßig anhand definierter KPIs überprüft und neu bewertet?',
      todo:
        'Risikobasierte Prüf-Frequenz für Drittanbieter festlegen und regelmäßige KPI-Reviews inkl. Neubewertung bei Änderungen durchführen und dokumentieren.',
      reference: 'DORA (2022), Art. 28–30',
      referenceUrl: DORA_LINKS.ART_28,
      evidence:
        'Nachweis: KPI-Reports, Review-Protokolle, Neubewertung',
      info:
        'Die Prüf-Frequenz sollte vom Risiko abhängen (kritischer Anbieter = häufiger) und Feststellungen/Maßnahmen nachverfolgen.',
      examples: [
        'Review-Protokoll dokumentiert KPI-Trends, Vorfälle und Maßnahmen.',
        'Neubewertung wird bei Änderungen ausgelöst.',
      ],
    },
  ],
},

DORA_BASIS_PROPORTIONAL: {
  label: 'DORA: IKT-Risikomanagement – Proportionale Basis',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 5–16 (proportional)'],
  items: [
    {
      id: 'DORA_LIGHT_MINDESTKONTROLLEN',
      question:
        'Sind risikobasierte Mindestkontrollen definiert und dokumentiert?',
      todo:
        'Risikobasierte Mindestkontrollen proportional zur Kritikalität definieren, dokumentieren und in den Betrieb übernehmen (Zugriff, Protokollierung, Backup).',
      reference: 'DORA (2022), Art. 6',
      referenceUrl: DORA_LINKS.ART_6,
      evidence: 'Nachweis: Kontroll-Basis, Checkliste',
      info:
        '„Proportional“ heißt: Mindestkontrollen passend zur Kritikalität – aber dennoch nachvollziehbar und wiederholbar.',
      examples: [
        'Checkliste ist Teil des Freigabe-/Betriebsprozesses und wird versioniert.',
        'Kontroll-Basis beschreibt Mindestanforderungen für Zugriff, Protokollierung und Backup.',
      ],
    },
    {
      id: 'DORA_LIGHT_VERANTWORTLICHKEITEN',
      question:
        'Sind Verantwortlichkeiten für Betrieb und Sicherheit der KI-relevanten Systeme festgelegt?',
      todo:
        'Verantwortlichkeiten für Betrieb und Sicherheit der KI-relevanten Systeme festlegen und dokumentieren.',
      reference: 'DORA (2022), Art. 5',
      referenceUrl: DORA_LINKS.ART_5,
      evidence: 'Nachweis: RACI, Rollenbeschreibung',
      info:
        'Auch bei kleinerem Umfang sollten Zuständigkeiten eindeutig sein, inkl. Eskalation.',
      examples: [
        'RACI benennt Verantwortlicher, Betrieb, IT-Sicherheit und Stellvertretungen.',
        'Rollenbeschreibung enthält Aufgaben und Entscheidungsrechte.',
      ],
    },
    {
      id: 'DORA_LIGHT_PROTOKOLLIERUNG',
      question:
        'Ist Protokollierung für die KI-relevanten Systeme aktiviert und wird sie gemäß Aufbewahrungsvorgaben aufbewahrt?',
      todo:
        'Protokollierung für KI-relevante Systeme aktivieren, revisionssicher aufbewahren und für Audit/Vorfallaufklärung nutzbar machen.',
      reference: 'DORA (2022), Art. 9',
      referenceUrl: DORA_LINKS.ART_9,
      evidence:
        'Nachweis: Protokollierungskonfiguration, Aufbewahrung, Beispiel-Protokolle',
      info:
        'Protokolle sollten für Audit und Vorfallaufklärung nutzbar sein unter Beachtung des Datenschutzes.',
      examples: [
        'Beispiel-Protokolle enthalten Zeitstempel, Request-ID, Modellversion/Bereitstellung.',
        'Aufbewahrungsvorgaben sind dokumentiert und technisch umgesetzt.',
      ],
    },
    {
      id: 'DORA_MRM_VERZAHNUNG',
      canonicalId: 'DORA_MRM_VERZAHNUNG',
      question:
        'Ist das KI-System mit dem bestehenden Modellrisikomanagement verzahnt?',
      todo:
        'Verzahnung mit Modellrisikomanagement sicherstellen: Modellinventar pflegen, Validierungs-/Revalidierungszyklen definieren, unabhängige Reviews dokumentieren und Feststellungen nachverfolgen.',
      reference: 'DORA (2022), Art. 6',
      referenceUrl: DORA_LINKS.ART_6,
      evidence:
        'Nachweis: Modellinventar, Validierungsplan, unabhängige Review-Protokolle, Feststellungen-Tracking',
      info:
        'Falls bereits ein Modellrisikomanagement existiert: die KI dort sauber einhängen und Doppelstrukturen vermeiden.',
      examples: [
        'Modell ist im Inventar erfasst.',
        'Validierung/Review ist datiert, unabhängig und nachvollziehbar dokumentiert.',
      ],
    },
    {
      id: 'DORA_GOV_FREIGABEGATES',
      canonicalId: 'DORA_GOV_FREIGABEGATES',
      question:
        'Gibt es definierte Management-Freigaben bzw. Gremienentscheidungen für Produktivsetzung und wesentliche Änderungen?',
      todo:
        'Freigabegates mit Management-/Gremienentscheidung dokumentieren und im Betrieb anwenden.',
      reference: 'DORA (2022), Art. 5',
      referenceUrl: DORA_LINKS.ART_5,
      evidence:
        'Nachweis: Freigabeprozess, Gremienprotokoll, Change-Approval-Logs, RACI',
      info:
        'Das reduziert „Schleichbetrieb“: wesentliche Änderungen werden vorab beurteilt und formal freigegeben.',
      examples: [
        'Produktivsetzung-Entscheidung ist protokolliert inkl. Risikoabwägung.',
        'Wesentliche Modell-/Datenänderungen laufen über ein Freigabegate im Änderungsmanagement.',
      ],
    },
  ],
},

DORA_DRITTANBIETER_KRITIKALITAET_UEBERPRUEFUNG: {
  label: 'DORA: Drittanbieter – Kritikalitätseinstufung (Nachweis & Freigabe)',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 28–30'],
  items: [
    {
      id: 'DORA_TP_KRITIKALITAET_DOKU',
      canonicalId: 'DORA_TP_KRITIKALITAET_DOKU',
      question:
        'Ist die Kritikalitätseinstufung dokumentiert (Auswirkungen/Abhängigkeit, Konzentration, Exit-/Substitutionsfähigkeit)?',
      todo:
        'Kritikalitätseinstufung dokumentieren: Abhängigkeitsanalyse (Auswirkungen, RTO/RPO), Konzentrationsbewertung (gemeinsame Ausfall-Domänen), Exit-/Substitutionsplan (technisch und vertraglich).',
      reference: 'DORA (2022), Art. 28–29',
      referenceUrl: DORA_LINKS.ART_28,
      evidence:
        'Nachweis: Auslagerungs-/IKT-Risikoanalyse, Konzentrationsanalyse, Exit-Plan, BCM-Mapping',
      info:
        'Die Einstufung muss Kriterien, Analyseergebnisse und Begründung nachvollziehbar dokumentieren.',
      examples: [
        'Analyse enthält RTO/RPO-Bezug und gemeinsame Ausfall-Domänen.',
        'Exit-/Substitutionsplan benennt technische und vertragliche Maßnahmen.',
      ],
    },
    {
      id: 'DORA_TP_KRITIKALITAET_FREIGABE',
      canonicalId: 'DORA_TP_KRITIKALITAET_FREIGABE',
      question:
        'Liegt eine formale Freigabe durch Risiko-/Compliance-/Auslagerungsfunktion zur Einstufung vor?',
      todo:
        'Formale Freigabe (Risikomanagement/Compliance/Auslagerung) zur Einstufung einholen und versioniert dokumentieren (inkl. Auflagen/Abhilfemaßnahmen).',
      reference: 'DORA (2022), Art. 28–30',
      referenceUrl: DORA_LINKS.ART_30,
      evidence:
        'Nachweis: Freigabeprotokoll, Entscheidungsvorlage, Ticket/Approval-Log, RACI/Verantwortlicher',
      info:
        'Freigabe muss Entscheidung, Auflagen, Verantwortliche und Review-Zyklus eindeutig festhalten.',
      examples: [
        'Freigabeprotokoll enthält Version, Datum, Teilnehmende und Auflagen.',
        'Ticket/Approval-Log verlinkt auf Entscheidungsvorlage und Nachweise.',
      ],
    },
  ],
},

DORA_BCM_AUSWEICHVERFAHREN: {
  label: 'DORA: BCM/Rückfall – Ausweichverfahren, Betriebshandbuch & Tests',
  regulation: 'DORA',
  articles: ['DORA (2022), Art. 11–12'],
  items: [
    {
      id: 'DORA_BCM_AUSWEICHVERFAHREN_BETRIEBSHANDBUCH',
      canonicalId: 'DORA_BCM_AUSWEICHVERFAHREN_BETRIEBSHANDBUCH',
      question:
        'Gibt es ein dokumentiertes Betriebshandbuch inkl. Rollen, Eskalation und Stopp-/Degrade-Kriterien für den Ausfall von KI/Anbieter?',
      todo:
        'Betriebshandbuch erstellen/aktualisieren: Rollen und Verantwortlichkeiten (inkl. Vertretung), Eskalationspfade, Stopp-/Degrade-Kriterien, Kommunikationsplan und operative Schritte für den Rückfallbetrieb.',
      reference: 'DORA (2022), Art. 11–12',
      referenceUrl: DORA_LINKS.ART_11,
      evidence:
        'Nachweis: Betriebshandbuch/Ablaufplan, RACI, Eskalationsmatrix, Kommunikationsplan',
      info:
        'Das Betriebshandbuch muss Kriterien, Schritte, Zuständigkeiten und Kommunikationswege für Rückfallbetrieb nachweisbar regeln.',
      examples: [
        'Stopp-/Degrade-Kriterien sind definiert und mit Verantwortlichen verknüpft.',
        'Kommunikationsplan enthält interne/externe Kontakte und Freigabekette.',
      ],
    },
    {
      id: 'DORA_BCM_AUSWEICHVERFAHREN_RTO_RPO',
      canonicalId: 'DORA_BCM_AUSWEICHVERFAHREN_RTO_RPO',
      question:
        'Sind RTO/RPO sowie manuelle Prozessschritte für den Rückfallbetrieb definiert und im BCM-Prozess verankert?',
      todo:
        'RTO/RPO und manuelle Prozessschritte definieren; in BCM/Prozessdokumentation verankern (inkl. Trigger, Verantwortlichkeiten, Abhängigkeiten).',
      reference: 'DORA (2022), Art. 11–12',
      referenceUrl: DORA_LINKS.ART_11,
      evidence:
        'Nachweis: BCM-Mapping, Prozessdokumentation, RTO/RPO-Festlegung, Abhängigkeitsanalyse',
      info:
        'RTO/RPO und manuelle Schritte müssen mit BCM abgestimmt und in Tests überprüfbar beschrieben sein.',
      examples: [
        'BCM-Mapping verknüpft Prozessschritte mit Systemen, Abhängigkeiten und RTO/RPO.',
        'Prozessdokumentation nennt Trigger und Verantwortliche für den Rückfallbetrieb.',
      ],
    },
    {
      id: 'DORA_BCM_AUSWEICHVERFAHREN_TEST',
      canonicalId: 'DORA_BCM_AUSWEICHVERFAHREN_TEST',
      question:
        'Wurde das Ausweichverfahren getestet (Geltungsbereich, Ergebnis, Feststellungen, Abhilfemaßnahmen) und sind Feststellungen nachverfolgt?',
      todo:
        'Rückfalltest durchführen und dokumentieren (Szenarien, Geltungsbereich, Erfolgskriterien, Ergebnisse); Feststellungen mit Verantwortlicher, Frist und Nachverfolgung (Abhilfemaßnahmen-Tracking).',
      reference: 'DORA (2022), Art. 11–12',
      referenceUrl: DORA_LINKS.ART_12,
      evidence:
        'Nachweis: Testprotokoll, Ergebnisbericht, Feststellungen-Log, Abhilfemaßnahmen-Nachweise',
      info:
        'Tests müssen Erfolgskriterien, Abweichungen, Feststellungen und Nachverfolgung bis zum Abschluss dokumentieren.',
      examples: [
        'Testprotokoll enthält Szenario, Datum, Teilnehmende, Erfolgskriterien und Ergebnis.',
        'Feststellungen-Log enthält Verantwortlicher, Frist, Status und Wirksamkeitsprüfung.',
      ],
    },
  ],
},

};
// =======================================================
// -------------------- Entscheidungsbaum-----------------
// =======================================================

export const CONSISTENCY_LOCKS = {
  KI_HOCHRISIKO: 'KI_HOCHRISIKO',
};

export const decisionTree = {
  // ===================================================
  // -------------------- EU AI Act --------------------
  // ===================================================
  A1: {
    id: 'A1',
    type: 'question',
    cluster: 'AI Act',
    label: 'Handelt es sich um ein KI-System nach Art. 3 EU AI Act?',
    reference: 'EU AI Act (2024), Art. 3',
    referenceId: 'ART_3',
    referenceUrl: EU_AI_ACT_LINKS.ART_3,
    yes: 'A2',
    no: 'A0',
    info:
      'Hier wird geprüft, ob das betrachtete System unter die Definition eines KI-Systems fällt. ' +
      'Nur wenn dies bejaht wird, greifen die weiteren Pflichten des EU AI Act.',
    examples: [
      'Ein Machine-Learning-Modell, das Kreditrisiken automatisiert bewertet.',
      'Ein statisches, rein regelbasiertes System ohne Lern- oder Inferenzlogik.',
      'Ein externer LLM-/Basismodell-Dienst, der in Prozesse eingebunden wird.',
    ],
  },

  A0: {
    id: 'A0',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Kein KI-System → EU AI Act nicht anwendbar.',
    reference: 'EU AI Act (2024), Art. 3',
    referenceId: 'ART_3',
    referenceUrl: EU_AI_ACT_LINKS.ART_3,
    obligations: ['AI_ACT_NICHT_ZUTREFFEND'],
    next: 'ENDE',
    info:
      'Wenn das System nicht unter die Definition eines KI-Systems fällt, gelten die spezifischen EU-AI-Act-Pflichten nicht. ' +
      'DORA- und interne Governance-/Security-Anforderungen können dennoch relevant sein.',
    examples: [
      'Reine Datenvisualisierung ohne KI-Logik.',
      'Klassisches Workflow-Tool ohne ML/KI-Komponente.',
    ],
  },

  A2: {
    id: 'A2',
    type: 'question',
    cluster: 'AI Act',
    label: 'Liegt eine potenziell verbotene Praxis nach EU AI Act vor?',
    reference: 'EU AI Act (2024), Art. 5',
    referenceId: 'ART_5',
    referenceUrl: EU_AI_ACT_LINKS.ART_5,
    yes: 'A2_Y',
    no: 'A2_ROLLE',
    info:
      'Hier wird geprüft, ob das KI-System in eine Kategorie fällt, die nach EU AI Act grundsätzlich unzulässig ist. ' +
      'Bei verbotenen Praktiken ist der Einsatz grundsätzlich nicht erlaubt.',
    examples: [
      'Systeme, die Menschen verdeckt manipulieren, um Entscheidungen zu beeinflussen.',
      'Bestimmte Social-Scoring-Konstellationen.',
    ],
  },

  A2_Y: {
    id: 'A2_Y',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Verbotene Praxis → Nutzung untersagen und Eskalation auslösen.',
    reference: 'EU AI Act (2024), Art. 5',
    referenceId: 'ART_5',
    referenceUrl: EU_AI_ACT_LINKS.ART_5,
    obligations: ['KI_VERBOTENE_PRAKTIKEN'],
    next: 'G_AI_VERBOTENE_PRAKTIKEN_UEBERPRUEFUNG',
    info:
      'Bei verbotenen Praktiken darf das System grundsätzlich nicht betrieben werden. ' +
      'Es sind Stop-Maßnahmen und eine formale Eskalation erforderlich.',
    examples: [
      'Pilot wird gestoppt und aus Produktionsumgebungen entfernt.',
      'Übergabe an Recht/Compliance zur Abbruch-/Neuzuschnitt-Entscheidung.',
    ],
  },

A2_ROLLE_BEREITSTELLUNG: {
  id: 'A2_ROLLE_BEREITSTELLUNG',
  type: 'question',
  cluster: 'AI_ACT',
  label:
    'Stellen Sie das KI-System (oder eine Variante unter ihrer Marke) Dritten bereit oder bringen es in Verkehr?',
  yes: 'A2_ROLLE_WESENTLICHE_AENDERUNG',
  no: 'A2_ROLLE_WESENTLICHE_AENDERUNG',
  reference: 'EU AI Act (2024)',
  info:
    'Praxis-Indikator für „Anbieter“: Sie stellem das System/Produkt Dritten bereit.',
  examples: [
    'Sie verkaufen/vertreiben ein KI-Produkt an Kunden (SaaS oder On-Prem).'
  ],
},

A2_ROLLE_WESENTLICHE_AENDERUNG: {
  id: 'A2_ROLLE_WESENTLICHE_AENDERUNG',
  type: 'question',
  cluster: 'AI_ACT',
  label:
    'Nehmen Sie am Modell/System wesentliche Änderungen vor, die über reine Konfiguration hinausgehen?',
  yes: 'A2_ROLLE_BETRIEB_KONTROLLE',
  no: 'A2_ROLLE_BETRIEB_KONTROLLE',
  reference: 'EU AI Act (2024)',
  info:
    '„Wesentliche Modifikation“ ist ein starker Anbieter-Indikator. Reine Konfiguration zählt typischerweise nicht.',
  examples: [
    'Feintuning/Neutraining mit eigenen Trainingsdaten.',
    'Änderung der Zweckbestimmung.',
    'Neue Trainings-/Feature-Pipeline oder neue Datenquellen fürs Training.',
  ],
},

A2_ROLLE_BETRIEB_KONTROLLE: {
  id: 'A2_ROLLE_BETRIEB_KONTROLLE',
  type: 'question',
  cluster: 'AI_ACT',
  label:
    'Betreiben/hosten Sie die produktive KI-Komponente selbst oder steuern wesentliche Betriebsparameter?',
  yes: 'A2_ROLLE_KONFORMITAETSARTEFAKTE',
  no: 'A2_ROLLE_KONFORMITAETSARTEFAKTE',
  reference: 'EU AI Act (2024)',
  info:
    'Diese Frage trennt typische SaaS-Nutzung von eigenem Deployment/Orchestrierung. „Ja“ ist häufig ein Hinweis auf Mischrollen.',
  examples: [
    'Sie betreiben den Modellservice selbst (Kubernetes/VM/Managed Endpoint).',
    'Sie kontrollieren Releases/Monitoring/Incident-Handling für die KI-Komponente.',
    'Nein: Vollständiger SaaS-Betrieb durch externen Anbieter, Sie nutzen nur die Oberfläche/API.',
  ],
},

A2_ROLLE_KONFORMITAETSARTEFAKTE: {
  id: 'A2_ROLLE_KONFORMITAETSARTEFAKTE',
  type: 'question',
  cluster: 'AI_ACT',
  label:
    'Liefern Sie selbst die zentralen Konformitäts-/Sicherheitsartefakte, oder beziehen Sie diese vom Anbieter?',
  yes: 'A2_ROLLE_SCOPE_ANBIETER',
  no: 'A2_ROLLE_SCOPE_ANBIETER',
  yesLabel: 'Wir liefern selbst',
  noLabel: 'Wir beziehen vom Anbieter',
  reference: 'EU AI Act (2024)',
  info:
    'Wenn Sie die zentralen Artefakte selbst erstellen/liefern müssen, ist das ein starker Anbieter-Indikator.',
  examples: [
    'Sie erstellen selbst das technische Dossier/Tech File und Testnachweise.',
    'Sie beziehen Konformitätsunterlagen vom Anbieter.',
  ],
},

A2_ROLLE_SCOPE_ANBIETER: {
  id: 'A2_ROLLE_SCOPE_ANBIETER',
  type: 'leaf',
  cluster: 'AI_ACT',
  label: 'Rollenempfehlung: Anbieter',
  reference: 'EU AI Act (2024)',
  obligations: ['KI_ROLLENKLAERUNG_NACHWEIS_BASIS'],
  next: 'A2_ROLLE',
},

A2_ROLLE_SCOPE_BETREIBER: {
  id: 'A2_ROLLE_SCOPE_BETREIBER',
  type: 'leaf',
  cluster: 'AI_ACT',
  label: 'Rollenempfehlung: Betreiber',
  reference: 'EU AI Act (2024) – Rollenklärung (intern)',
  obligations: ['KI_ROLLENKLAERUNG_NACHWEIS_BASIS'],
  next: 'A2_ROLLE',
  },

A2_ROLLE_SCOPE_UNSICHER: {
  id: 'A2_ROLLE_SCOPE_UNSICHER',
  type: 'leaf',
  cluster: 'AI_ACT',
  label: 'Rolle unklar (Unsicher)',
  reference: 'EU AI Act (2024)',
  obligations: ['KI_ROLLENKLAERUNG_REVIEW_REQUIRED'],
  next: 'A2_ROLLE',
  info:
    'Die Antworten sind inkonsistent. Review-Gate auslösen und konservativ als „Anbieter“ weiterprüfen, bis Rollen/Pflichten vertraglich und dokumentatorisch geklärt sind.',
},


  A2_ROLLE: {
    id: 'A2_ROLLE',
    type: 'question',
    cluster: 'AI Act',
    label: 'Sind Sie Betreiber oder Anbieter des zu integrierenden KI-Systems?',
    reference: 'EU AI Act (2024), Art. 3',
    referenceId: 'ART_3',
    referenceUrl: EU_AI_ACT_LINKS.ART_3,
    yes: 'A3_HR_ANHANG_3_PRUEFUNG_ANBIETER',
    no: 'A3_HR_ANHANG_3_PRUEFUNG_BETREIBER',
    yesLabel: 'Anbieter',
    noLabel: 'Betreiber',
    info:
      'Hier wird die Rolle des Unternehmens im konkreten Anwendungsfall geklärt.',
    examples: [
      'Anbieter: Wir entwickeln/bringen das KI-System in Verkehr oder stellen es bereit.',
      'Betreiber: Wir nutzen ein KI-System (intern oder extern bezogen) im eigenen Prozess.',
    ],
  },

  A3_HR_ANHANG_3_PRUEFUNG_ANBIETER: {
    id: 'A3_HR_ANHANG_3_PRUEFUNG_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Fällt der Anwendungsfall unter Anhang 3, Nr. 5(b)/(c) (Finanz-Anwendungsfälle) oder ist es ein Sicherheitsbauteil nach Art. 6?',
    reference: 'EU AI Act (2024), Art. 6 i. V. m. Anhang 3',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A3_HR_FIN_KREDIT_ANBIETER',
    no: 'W_AI_HR_UEBERPRUEFUNG',
    info:
      'Anhang 3-Systeme gelten grundsätzlich als Hochrisiko. ' +
      'Für Finanzunternehmen sind insbesondere Kreditwürdigkeits-/Bonitätsbewertung relevant.',
    examples: [
      'Kreditwürdigkeitsprüfung / Bonitätsbewertung (außer reine Finanzbetrugserkennung).',
      'Preis-/Risikobewertung für Lebens- oder Krankenversicherung.',
      'Sicherheitsbauteil in einem regulierten Produkt (Art. 6).',
    ],
  },
  
  A3_HR_FIN_KREDIT_ANBIETER: {
    id: 'A3_HR_FIN_KREDIT_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Wird das KI-System bestimmungsgemäß für Kreditwürdigkeitsprüfung/Bonitätsbewertung natürlicher Personen verwendet (außer reine Finanzbetrugserkennung)?',
    reference: 'EU AI Act (2024), Anhang 3, Nr. 5(b)',
    referenceId: 'ANHANG_3',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_3,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_HR_FIN_VERSICHERUNGS_ANBIETER',
    info:
      'Wenn das System für Kreditwürdigkeits-/Bonitätsbewertung bestimmt ist, ist das ein expliziter Hochrisiko-Anwendungsfall. ' +
      'Ausnahme: reine Finanzbetrugserkennung ist hiervon ausgenommen.',
    examples: [
      'Scoring für Kreditvergabe / Limit / Konditionen für natürliche Personen.',
      'Automatisierte Bonitätsentscheidungsvorschläge, die faktisch übernommen werden.',
      'Nur Betrugserkennung (z. B. Transaktionsanomalien) → eher „Nein“ hier.',
    ],
  },
  
  A3_HR_FIN_VERSICHERUNGS_ANBIETER: {
    id: 'A3_HR_FIN_VERSICHERUNGS_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Wird das KI-System bestimmungsgemäß für Risikobewertung und Preisbildung bei Lebens-/Krankenversicherung natürlicher Personen verwendet?',
    reference: 'EU AI Act (2024), Anhang 3, Nr. 5(c)',
    referenceId: 'ANHANG_3',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_3,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_ANBIETER',
    info:
      'Preis-/Risikobewertung in Lebens- und Krankenversicherung für natürliche Personen ist ein expliziter Hochrisiko-Anwendungsfall.',
    examples: [
      'Tarifierung/Underwriting-Assistenz, die Prämien oder Annahme beeinflusst.',
      'Risikoklassifizierung für Lebens-/Krankenversicherung.',
    ],
  },
  
  A3_HR_ANHANG_3_PRUEFUNG_BETREIBER: {
    id: 'A3_HR_ANHANG_3_PRUEFUNG_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Fällt der Anwendungsfall unter Anhang 3 (insb. Finanz-Anwendungfälle) oder ist es ein Sicherheitsbauteil nach Art. 6?',
    reference: 'EU AI Act (2024), Art. 6 i. V. m. Anhang 3',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A3_HR_FIN_KREDIT_BETREIBER',
    no: 'A3_BETREIBER',
    info:
      'Anhang 3-Systeme gelten grundsätzlich als Hochrisiko. ' +
      'Für Finanz-Anwendungsfälle sind insbesondere Kreditwürdigkeits-/Bonitätsbewertung sowie Preis-/Risikobewertung in Lebens-/Krankenversicherung relevant.',
    examples: [
      'Kreditwürdigkeitsprüfung / Bonitätsbewertung (außer reine Finanzbetrugserkennung).',
      'Preis-/Risikobewertung für Lebens- oder Krankenversicherung.',
      'Sicherheitsbauteil in einem regulierten Produkt (Art. 6).',
    ],
  },
  
  A3_HR_FIN_KREDIT_BETREIBER: {
    id: 'A3_HR_FIN_KREDIT_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Wird das KI-System bestimmungsgemäß für Kreditwürdigkeitsprüfung/Bonitätsbewertung natürlicher Personen verwendet (außer reine Finanzbetrugserkennung)?',
    reference: 'EU AI Act (2024), Anhang 3 Nr. 5(b)',
    referenceId: 'ANHANG_3',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_3,
    yes: 'A3_GRFA_TRIGGER_BETREIBER',
    no: 'A3_HR_FIN_VERSICHERUNGS_BETREIBER',
    info:
      'Wenn das System für Kreditwürdigkeits-/Bonitätsbewertung bestimmt ist, ist das ein expliziter Hochrisiko-Anwendungsfall. ' +
      'Ausnahme: reine Finanzbetrugserkennung (Fraud Detection) ist hiervon ausgenommen.',
    examples: [
      'Scoring für Kreditvergabe / Limit / Konditionen für natürliche Personen.',
      'Automatisierte Bonitätsentscheidungsvorschläge, die faktisch übernommen werden.',
      'Nur Fraud Detection (z. B. Transaktionsanomalien) → eher „Nein“ hier.',
    ],
  },
  
  A3_HR_FIN_VERSICHERUNGS_BETREIBER: {
    id: 'A3_HR_FIN_VERSICHERUNGS_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Wird das KI-System bestimmungsgemäß für Risikobewertung und Preisbildung bei Lebens-/Krankenversicherung natürlicher Personen verwendet?',
    reference: 'EU AI Act (2024), Anhang 3, Nr. 5(c)',
    referenceId: 'ANHANG_3',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_3,
    yes: 'A3_GRFA_TRIGGER_BETREIBER',
    no: 'A3_BETREIBER',
    info:
      'Preis-/Risikobewertung in Lebens- und Krankenversicherung für natürliche Personen ist ein expliziter Hochrisiko-Anwendungsfall.',
    examples: [
      'Tarifierung/Underwriting-Assistenz, die Prämien oder Annahme beeinflusst.',
      'Risikoklassifizierung für Lebens-/Krankenversicherung.',
    ],
  },
  
  A3_ANBIETER: {
    id: 'A3_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Ist das KI-System als Hochrisiko-KI nach EU AI Act einzustufen?',
    reference: 'EU AI Act (2024), Art. 6',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_KEIN_HR_PRUEFUNG',
    info:
      'Hier wird geprüft, ob eine Hochrisiko-Klassifikation greift. ' +
      'Das Ergebnis steuert, welche Pflichtenpakete gelten.',
    examples: [
      'Kreditwürdigkeitsbewertung zur Vergabe von Verbraucherkrediten.',
      'Automatisierte Bewerbervorauswahl.',
      'Assistenzsystem mit Entscheidungswirkung.',
    ],
  },
  
  A3_BETREIBER: {
    id: 'A3_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Ist das KI-System als Hochrisiko-KI nach EU AI Act einzustufen?',
    reference: 'EU AI Act (2024), Art. 6',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A3_GRFA_TRIGGER_BETREIBER',
    no: 'A3_KEIN_HR_PRUEFUNG',
    info:
      'Hier wird geprüft, ob eine Hochrisiko-Klassifikation greift. ' +
      'Das Ergebnis steuert, welche Pflichtenpakete gelten.',
    examples: [
      'Kreditwürdigkeitsbewertung zur Vergabe von Verbraucherkrediten.',
      'Automatisierte Bewerbervorauswahl.',
      'Assistenzsystem ohne Entscheidungswirkung.',
    ],
  },
  
  A3_HR_ANBIETER: {
    id: 'A3_HR_ANBIETER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Hochrisiko-KI → Hochrisiko-Pflichten anwenden.',
    reference: 'EU AI Act (2024), Art. 6',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    obligations: ['KI_HR_ANBIETER', 'KI_KONFORMITAET_UND_DOKU', 'KI_REGISTRIERUNG_UND_KENNZEICHNUNG', 'KI_UEBERWACHUNG_NACH_INVERKEHRBRINGEN_ART_72', 'KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'Das System ist als Hochrisiko-KI eingestuft. Damit greifen die umfangreichen Pflichten (u. a. Risiko-, Daten- und Governance-Anforderungen).',
    examples: [
      'Scoring-Modell zur (teil-)automatisierten Kreditentscheidung.',
      'Modelle mit erheblicher Wirkung auf Zugang zu Finanzprodukten.',
    ],
  },
  
  A3_HR_BETREIBER: {
    id: 'A3_HR_BETREIBER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Hochrisiko-KI → Hochrisiko-Pflichten anwenden.',
    reference: 'EU AI Act (2024), Art. 6',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    obligations: ['KI_HR_BETREIBER', 'KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'Das System ist als Hochrisiko-KI eingestuft. Damit greifen die umfangreichen Pflichten (u. a. Risiko-, Daten- und Governance-Anforderungen).',
    examples: [
      'Scoring-Modell zur (teil-)automatisierten Kreditentscheidung.',
      'Modelle mit erheblicher Wirkung auf Zugang zu Finanzprodukten.',
    ],
  },

  A3_HR_BETREIBER_FIN: {
    id: 'A3_HR_BETREIBER_FIN',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Hochrisiko-KI (Finanz, Anhang 3, Nr. 5) → Betreiberpflichten inkl. GRFA anwenden.',
    reference: 'EU AI Act (2024), Anhang 3, Nr. 5(b)/(c)',
    referenceId: 'ANHANG_3',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_3,
    obligations: ['KI_HR_BETREIBER', 'KI_HR_GRUNDRECHTE_FOLGENABSCHAETZUNG_ART_27', 'KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'GRFA ist nicht auf Finanzfälle beschränkt; sie ist kontextabhängig zu prüfen (Art. 27). ' +
      'Der Wizard führt deshalb eine separate GRFA-Entscheidung durch und löst die vollständigen GRFA-Pflichten nur bei „Ja“ aus. ' +
      'Bei „Nein“ wird zumindest die Pflichtprüfung (Memo/Begründung) als Nachweis eingefordert.',
  },  

  A3_GRFA_TRIGGER_BETREIBER: {
    id: 'A3_GRFA_TRIGGER_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Ist für diesen Hochrisiko Anwendungsfall eine Grundrechts-Folgenabschätzung (GRFA) nach Art. 27 erforderlich?',
    reference: 'EU AI Act (2024), Art. 27',
    referenceId: 'ART_27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    yes: 'A3_HR_BETREIBER_GRFA',
    no: 'A3_HR_BETREIBER_OHNE_GRFA',
    info:
      'GRFA ist nicht auf Finanzfälle beschränkt. Sie ist kontextabhängig zu prüfen, z. B. bei Hochrisiko-Anwendungsfällen nach Anhang 3 oder wenn der Einsatz erhebliche Auswirkungen auf Grundrechte haben kann. ' +
      'Auch wenn GRFA nicht erforderlich ist, muss die Pflichtprüfung (Memo/Begründung) auditfähig dokumentiert werden.',
    examples: [
      'Ja: Kreditwürdigkeits-/Bonitätsbewertung oder Underwriting in Lebens-/Krankenversicherung (Anhang 3).',
      'Ja: Hochrisiko-System mit erheblicher Wirkung auf den Zugang zu wesentlichen Dienstleistungen, wenn Grundrechtsrisiken plausibel sind.',
      'Nein: Nach dokumentierter Prüfung keine zusätzliche GRFA-Pflicht – Memo/Begründung liegt vor.',
    ],
  },
  
  A3_HR_BETREIBER_GRFA: {
    id: 'A3_HR_BETREIBER_GRFA',
    type: 'leaf',
    cluster: 'AI Act',
    label:
      'Hochrisiko-KI → Betreiberpflichten anwenden (inkl. GRFA nach Art. 27).',
    reference: 'EU AI Act (2024), Art. 26–27',
    referenceId: 'ART_27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    obligations: ['KI_HR_BETREIBER', 'KI_HR_GRUNDRECHTE_FOLGENABSCHAETZUNG_ART_27', 'KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'GRFA ist erforderlich: Neben den Betreiberpflichten sind GRFA-Dokumentation, Review/Freigabe und Maßnahmen-Tracking umzusetzen und nachzuweisen.',
  },
  
  A3_HR_BETREIBER_OHNE_GRFA: {
    id: 'A3_HR_BETREIBER_OHNE_GRFA',
    type: 'leaf',
    cluster: 'AI Act',
    label:
      'Hochrisiko-KI → Betreiberpflichten anwenden (GRFA nicht erforderlich – Pflichtprüfung dokumentieren).',
    reference: 'EU AI Act (2024), Art. 26–27',
    referenceId: 'ART_27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    obligations: ['KI_HR_BETREIBER', 'KI_GRFA_PFLICHTPRUEFUNG_ART_27','KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'GRFA ist nicht erforderlich: Es wird kein vollständiges GRFA-Paket ausgelöst, aber die GRFA-Pflichtprüfung (Memo/Begründung) ist auditfähig nachzuweisen.',
  },  

  A3_KEIN_HR_PRUEFUNG: {
    id: 'A3_KEIN_HR_PRUEFUNG',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Kein Hochrisiko festgestellt: Ist die Einstufung nachvollziehbar dokumentiert (Anwendungsfall, Kontext, Anhang 3-Abgleich)?',
    reference: 'EU AI Act (2024), Art. 6',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A4_TRANSPARENZ_ANWENDBAR',
    no: 'W_AI_HR_UEBERPRUEFUNG',
    info:
      'Art. 50 gilt nicht pauschal für „Nicht-Hochrisiko“. Bevor Transparenz geprüft wird, sollte die Nicht-Hochrisiko-Einstufung nachvollziehbar dokumentiert sein.',
    examples: [
      'Kurzbegründung inkl. Zweckbestimmung, Nutzerkreis, Ergebniswirkung (Automatisierungsbias).',
      'Anhang 3-Check wurde durchgeführt und abgelegt.',
    ],
  },
  
  A4_TRANSPARENZ_ANWENDBAR: {
    id: 'A4_TRANSPARENZ_ANWENDBAR',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Interagiert das System direkt mit natürlichen Personen oder erzeugt es synthetische Inhalte (Text/Bild/Audio/Video), die gekennzeichnet werden müssen?',
    reference: 'EU AI Act (2024), Art. 50',
    referenceId: 'ART_50',
    referenceUrl: EU_AI_ACT_LINKS.ART_50,
    yes: 'A4_KEIN_HR_MIT_TRANSPARENZPFLICHTEN',
    no: 'A4_KEIN_HR_NUR_GOVERNANCE_BASIS',
    info:
      'Art. 50 wird typischerweise durch direkte Interaktion mit Personen oder durch synthetische Inhalte (Kennzeichnung) getriggert – nicht durch „Non-HR“ allein.',
    examples: [
      'Chatbot/Kundenassistenz, die direkt mit Endkund:innen interagiert.',
      'Generierung von Text/Bild/Audio/Video für externe Nutzung.',
      'Reines internes Tool ohne direkte Interaktion und ohne kennzeichnungspflichtige Outputs.',
    ],
  },
  
  A4_KEIN_HR_MIT_TRANSPARENZPFLICHTEN: {
    id: 'A4_KEIN_HR_MIT_TRANSPARENZPFLICHTEN',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Kein Hochrisiko → Transparenzpflichten nach Art. 50 umsetzen.',
    reference: 'EU AI Act (2024), Art. 50',
    referenceId: 'ART_50',
    referenceUrl: EU_AI_ACT_LINKS.ART_50,
    obligations: ['KI_NICHT_HOCHRISIKO_GOVERNANCE_BASIS', 'KI_TRANSPARENZ_ART_50'],
    next: 'D0',
    info:
      'Nicht-Hochrisiko bleibt bestehen, aber Transparenzanforderungen gelten aufgrund Interaktion/Inhaltsausgabe.',
    examples: [
      'Kennzeichnung/Hinweis in Benutzeroberfläche, Richtlinie/Handreichung, Protokollierung von Ausgaben (wo erforderlich).',
    ],
  },
  
  A4_KEIN_HR_NUR_GOVERNANCE_BASIS: {
    id: 'A4_KEIN_HR_NUR_GOVERNANCE_BASIS',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Kein Hochrisiko → keine Art.-50-Trigger → Governance-Basis anwenden.',
    reference: 'EU AI Act (2024), Art. 6 / Art. 50',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    obligations: ['KI_NICHT_HOCHRISIKO_GOVERNANCE_BASIS'],
    next: 'D0',
    info:
      'Da keine Interaktion/kennzeichnungspflichtigen Inhalte vorliegen, wird Art. 50 hier nicht ausgelöst.',
    examples: [
      'Interne Wissenssuche/Zusammenfassung ohne externe Interaktion und ohne kennzeichnungspflichtige Outputs.',
    ],
  },  

  // -------------------- EU AI Act: Gates / Review --------------------
  G_AI_VERBOTENE_PRAKTIKEN_UEBERPRUEFUNG: {
    id: 'G_AI_VERBOTENE_PRAKTIKEN_UEBERPRUEFUNG',
    type: 'question',
    cluster: 'AI Act',
    regulation: 'EU AI Act',
    label: 'Review-Gate: Wurde der Einsatz gestoppt und die Eskalation an Recht/Compliance dokumentiert?',
    reference: 'EU AI Act (2024), Art. 5',
    referenceId: 'ART_5',
    referenceUrl: EU_AI_ACT_LINKS.ART_5,
    yes: 'ENDE',
    no: 'W_KI_WIDERSPRUCH',
    info:
      'Sichert ab, dass verbotene Praktiken nicht ohne formale Stop-/Eskalationsentscheidung weiterverfolgt werden.',
    examples:
      'No-Go-Entscheid, Fall-ID, Maßnahmenplan, Ablage der Entscheidungsdokumentation.',
      checkpointText:
      'Checkpoint: Es besteht ein Hinweis auf eine potenziell verbotene Praxis. Bitte Prüfung/Eskalation vor Fortsetzung durchführen und Entscheidung kurz dokumentieren.',
  },

  W_AI_HR_UEBERPRUEFUNG: {
    id: 'W_AI_HR_UEBERPRUEFUNG',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Warnung: Hochrisiko-Einstufung unklar → Review und Dokumentation erforderlich.',
    reference: 'EU AI Act (2024), Art. 6',
    referenceId: 'ART_6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    obligations: [],
    next: 'ENDE',
    info:
      'Dieser Knoten fordert eine formale Klärung, bevor das Vorhaben weitergeführt wird.',
    examples:
      'Review-Protokoll, Klassifikationsbegründung, ggf. externe Beratung.',
    checkpointText:
      'Checkpoint: Die Hochrisiko-Einstufung ist nicht ausreichend belegt. Bitte Klassifikation (inkl. Zweck, Kontext, Anhang 3-Abgleich) nachvollziehbar prüfen und dokumentieren, bevor Sie fortfahren.',
  },

  W_KI_WIDERSPRUCH: {
    id: 'W_KI_WIDERSPRUCH',
    type: 'leaf',
    label: 'Widerspruch erkannt → Review/Eskalation erforderlich.',
    obligations: [],
    next: 'ENDE',
    info:
      'Inkonsistente Antworten sollten nicht zu stillen Annahmen oder impliziten Herabstufungen führen.',
    examples:
      'Pfad prüfen, Entscheidungen revalidieren, Governance-Gremium einbinden.',
  },

  // ==============================================
  // -------------------- DORA --------------------
  // ==============================================
  D0: {
    id: 'D0',
    type: 'question',
    cluster: 'DORA',
    label: 'DORA-Prüfung starten?',
    reference: 'DORA (2022), Art. 5',
    referenceUrl: DORA_LINKS.ART_5,
    yes: 'B1',
    no: 'ENDE',
    info:
      'Hier wird entschieden, ob zusätzlich zum EU AI Act eine strukturierte DORA-Analyse durchgeführt wird.',
    examples: [
      'Bank prüft direkt IKT-Risiken und Resilienzanforderungen mit.',
      'Es liegt bereits eine DORA-Bewertung vor.',
    ],
  },

  B1: {
    id: 'B1',
    type: 'question',
    cluster: 'DORA',
    label: 'Unterstützt das KI-System eine kritische oder wichtige Funktion?',
    reference: 'DORA (2022), Art. 8',
    referenceUrl: DORA_LINKS.ART_8,
    yes: 'B1_SCOPE_NACHWEIS',
    no: 'B3',
    info:
      'Diese Frage klärt, ob das KI-System in Prozessen eingesetzt wird, die für das Unternehmen kritisch oder wichtig sind. ' +
      'Davon hängt ab, wie streng die IKT-Risikomanagement- und Resilienzanforderungen aus DORA ausgestaltet werden.',
    examples: [
      'Kritisch: Zahlungsverkehr, Kreditvergabe, Risikomanagement.',
      'Nicht-kritisch: interne Wissenssuche ohne Kernprozesswirkung.',
    ],
  },

  B1_SCOPE_NACHWEIS: {
    id: 'B1_SCOPE_NACHWEIS',
    type: 'question',
    cluster: 'DORA',
    label:
      'Ist die Einstufung als „kritische oder wichtige Funktion“ nachvollziehbar dokumentiert (Geltungsbereich, Abhängigkeiten, Toleranzen, RTO/RPO) und freigegeben?',
    reference: 'DORA (2022), Art. 8',
    referenceUrl: DORA_LINKS.ART_8,
    yes: 'B2',
    no: 'W_DORA_KRITISCHE_FUNKTION_SCOPE_UEBERPRUEFUNG',
    info:
      'Damit die Einstufung auditfähig ist, braucht es eine saubere Herleitung des Geltungsbereichs: ' +
      'welcher Prozess ist betroffen, welche Abhängigkeiten bestehen und welche Auswirkungs-/Zeit-Toleranzen gelten.',
    examples: [
      'Auswirkungsanalyse inkl. betroffener Services/Prozesse und Business-Verantwortlicher.',
      'Dependency Map (Up-/Downstream Systeme, ANBIETER, Datenflüsse).',
      'RTO/RPO bzw. Stoßtoleranzen (z. B. MTPD) sind dokumentiert und abgestimmt.',
      'Freigabe (Risikomanagement/BCM/Leitungsorgan bzw. zuständiges Gremium) ist versioniert abgelegt.',
    ],
  },
  
  W_DORA_KRITISCHE_FUNKTION_SCOPE_UEBERPRUEFUNG: {
    id: 'W_DORA_KRITISCHE_FUNKTION_SCOPE_UEBERPRUEFUNG',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Scope-Nachweis für „kritische/wichtige Funktion“ fehlt → Dokumentation/Freigabe nachholen.',
    reference: 'DORA (2022), Art. 8',
    referenceUrl: DORA_LINKS.ART_8,
    obligations: ['DORA_KRITISCHE_FUNKTION_SCOPE'],
    next: 'B2',
    info:
      'Ohne Geltungsbereich-/Abhängigkeits- und Toleranznachweis ist die Einstufung nicht governance- und auditfähig. ' +
      'Bitte Herleitung dokumentieren und formal freigeben.',
  },  

  B2: {
    id: 'B2',
    type: 'question',
    cluster: 'DORA',
    label: 'Hat das KI-System direkten Einfluss auf operative oder finanzielle Entscheidungen?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B2_H',
    no: 'B2_EFFECTIVE',
    info:
      'Die Frage differenziert innerhalb der kritischen/wichtigen Funktionen, ob das KI-System selbst direkt ' +
      'Entscheidungen trifft oder „nur“ unterstützt. Direkter Einfluss führt zu strengeren Kontrollanforderungen.',
    examples: [
      'Direkt: KI trifft/steuert Kreditentscheidung oder Limite.',
      'Indirekt: KI liefert Vorschläge, die manuell geprüft werden.',
    ],
  },

  B2_H: {
    id: 'B2_H',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Hohe Kritikalität → DORA-Basis + Resilienztests.',
    reference: 'DORA (2022), Art. 26',
    referenceUrl: DORA_LINKS.ART_26,
    obligations: ['DORA_BASIS', 'DORA_TESTPROGRAMM'],
    next: 'T1_TLPT_APPLIES',
    info:
      'Das System hat hohe Kritikalität und direkten Einfluss auf Entscheidungen. ' +
      'Es gilt mindestens die DORA-Basis plus zusätzliche interne Kontrollen und Überwachung.',
    examples: [
      'Kreditentscheidungs-KI mit unmittelbarer Umsetzung im Kernbankensystem.',
      'Intraday-Liquiditätssteuerung, bei der KI-Vorschläge automatisiert ausgeführt werden.',
    ],
  },

  B2_EFFECTIVE: {
    id: 'B2_EFFECTIVE',
    type: 'question',
    cluster: 'DORA',
    label:
      'Werden KI-Empfehlungen in der Praxis überwiegend ohne substanzielle Prüfung übernommen oder automatisch umgesetzt?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B2_H',
    no: 'B2_COMPLIANCE',
    info:
      'Auch wenn formell ein Mensch entscheidet, kann die KI faktisch „entscheidungsleitend“ sein. ' +
      'Wenn Vorschläge typischerweise übernommen/automatisiert werden, sind stärkere Kontrollen sinnvoll.',
    examples: [
      'Score wird in >80% der Fälle ohne Abweichung übernommen.',
      'Workflows setzen KI-Vorschläge automatisch um.',
      'Sachbearbeitung prüft systematisch und dokumentiert Abweichungen (Antwort „Nein“).',
    ],
  },
  
  B2_COMPLIANCE: {
    id: 'B2_COMPLIANCE',
    type: 'question',
    cluster: 'DORA',
    label:
      'Ist der Einsatz compliance-/risiko-/prüfungsnah oder regulatorisch entscheidend?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B2_M_ENH',
    no: 'B2_M',
    info:
      'Bei compliance-nahen Prozessen kann eine „proportionale“ Basis zu kurz greifen. ' +
      'Hier ist oft eine verstärkte Anwendung angemessen.',
    examples: [
      'KI unterstützt Compliance-Warnungen oder regulatorische Berichterstattung.',
      'KI beeinflusst Prüfpfade oder Kontrollnachweise.',
    ],
  },

  B2_M: {
    id: 'B2_M',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Mittlere Kritikalität → proportionale DORA-Basis.',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS_PROPORTIONAL'],
    next: 'B4',
    info:
      'Das System ist für wichtige Funktionen relevant, trifft aber keine vollautomatischen Entscheidungen. ' +
      'Die DORA-Basis kann proportional und risikoangemessen umgesetzt werden.',
    examples: [
      'Scoring-Modell, dessen Ergebnisse durch Sachbearbeitende regelmäßig plausibilisiert werden.',
      'Monitoring-Dashboards, die Warnungen liefern, ohne automatische Aktionen auszulösen.',
    ],
  },
  
  B2_M_ENH: {
    id: 'B2_M_ENH',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Mittlere Kritikalität (compliance-nah) → verstärkte DORA-Basis.',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS'],
    next: 'B4',
    info:
      'Auch ohne direkten Entscheidungsdurchgriff können compliance-nahe Einsätze erhöhte Anforderungen auslösen. ' +
      'Hier wird die vollständige DORA-Basis angesetzt (inkl. Governance und Kontrollen).',
    examples: [
      'KI priorisiert/klassifiziert Feststellungen in Kontrolltests oder Audit-Vorbereitung.',
      'KI unterstützt regulatorische Reports, die prüfungsrelevant sind.',
    ],
  },
  

  B3: {
    id: 'B3',
    type: 'question',
    cluster: 'DORA',
    label: 'Wird KI nur unterstützend eingesetzt (ohne kritische Wirkung)?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B3_N',
    no: 'B3_R',
    info:
      'Hier wird geprüft, ob das KI-System zwar eingesetzt wird, aber nur eine nachgeordnete, nicht kritische Rolle spielt. ' +
      'Trotzdem können grundlegende DORA-Anforderungen relevant sein.',
    examples: [
      'KI-gestützte Textbausteinvorschläge für interne Dokumentation.',
      'Ein Chatbot für interne IT-Support-Anfragen.',
    ],
  },

  B3_N: {
    id: 'B3_N',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Nicht-kritische KI-Unterstützung → proportionale DORA-Basis.',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: [],
    next: 'D1_ART16_B4',
    info:
      'Die KI wird nur unterstützend und nicht in kritischen Kernprozessen eingesetzt. ' +
      'Es gelten grundsätzliche, aber weniger weitreichende IKT-Kontrollen.',
    examples: [
      'Tool zur automatischen Erstellung von Meeting-Notizen.',
      'Interne Empfehlungssysteme ohne direkte Kundenwirkung.',
    ],
  },

  B3_R: {
    id: 'B3_R',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Kritikalität unklar → konservative Einstufung und Dokumentation.',
    reference: 'DORA (2022), Art. 8',
    referenceUrl: DORA_LINKS.ART_8,
    obligations: ['DORA_BASIS', 'DORA_TESTPROGRAMM'],
    next: 'T1_TLPT_APPLIES',
    info:
      'Wenn die Kritikalität unklar ist, sollte eine konservative Einstufung gewählt und sauber dokumentiert werden. ' +
      'Die DORA-Anforderungen werden eher strenger als zu lax ausgelegt.',
    examples: [
      'Neuartige KI-Anwendung, deren Auswirkung auf den Prozess noch nicht abschließend verstanden ist.',
      'Pilotprojekte mit begrenzter, aber potenziell wachsender Bedeutung.',
    ],
  },

  T1_TLPT_APPLIES: {
    id: 'T1_TLPT_APPLIES',
    type: 'question',
    cluster: 'DORA',
    label:
      'Unterliegt Ihr Institut fortgeschrittenen Resilienztests (TLPT) nach DORA (Art. 26–27) bzw. einer entsprechenden behördlichen TLPT-Anordnung?',
    reference: 'DORA (2022), Art. 26–27',
    referenceUrl: DORA_LINKS.ART_26,
    yes: 'T1_TLPT',
    no: 'B4',
    info:
      'TLPT ist nicht automatisch allein wegen „Kritikalität“ fällig. ' +
      'Die Pflicht hängt typischerweise von der Einstufung/Anordnung für das Institut ab. ' +
      'Wenn TLPT nicht gilt, bleibt dennoch ein allgemeines Testprogramm (Art. 24–25) erforderlich.',
    examples: [
      'Institut ist TLPT-pflichtig oder erhält eine entsprechende Aufsichtsanforderung.',
      'TLPT-Planung erfolgt nach dem bedrohungsgeleiteten Ansatz mit definierter Frequenz und Governance.',
    ],
  },

  T1_TLPT: {
    id: 'T1_TLPT',
    type: 'leaf',
    cluster: 'DORA',
    label: 'TLPT erforderlich → TLPT-Pflichten anwenden (zusätzlich zum Testprogramm).',
    reference: 'DORA (2022), Art. 26–27',
    referenceUrl: DORA_LINKS.ART_26,
    obligations: ['DORA_TLPT'],
    next: 'B4',
    info:
      'Wenn TLPT anwendbar ist, kommen zu den allgemeinen Testprogramm-Pflichten zusätzliche TLPT-spezifische Anforderungen hinzu.',
  },

  B4: {
    id: 'B4',
    type: 'question',
    cluster: 'DORA',
    label: 'Wird das System (ganz oder teilweise) von einem externen IKT-Dienstleister bereitgestellt?',
    reference: 'DORA (2022), Art. 28',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B4_GENAI_LLM_SERVICE',
    no: 'B6',
    info:
      'Diese Frage klärt, ob das KI-System als externer Service (z. B. Cloud-/KI-Plattform) bezogen wird. ' +
      'Das bestimmt, welche DORA-Anforderungen an IKT-Drittanbieter gelten.',
    examples: [
      'Nutzung eines externen LLM-API-Services oder einer KI-Plattform eines Cloud-Großanbieters.',
      'Komplett intern betriebenes Modell ohne externe IKT-Dienstleister (Antwort „Nein“).',
    ],
  },

  B4_GENAI_LLM_SERVICE: {
    id: 'B4_GENAI_LLM_SERVICE',
    type: 'question',
    cluster: 'DORA',
    label:
      'Wird ein Dienst für generative KI/LLM/Grundlagenmodell (API) genutzt (z. B. ChatGPT/Claude/Gemini/Azure OpenAI) oder ein vergleichbarer externer Dienst für generative KI?',
    reference: 'DORA (2022), Art. 9 (IKT-Kontrollen) / Art. 28–30 (Drittanbieter)',
    referenceId: 'ART_30',
    referenceUrl: DORA_LINKS.ART_30,
    yes: 'W_DORA_GENAI_LLM_KONTROLLEN',
    no: 'B5',
    info:
      'Dieser Pfad adressiert spezifische Risiken generativer KI (Datenminimierung/Schwärzung, Aufbewahrung, Zusicherungen des Dienstanbieters „kein Training“, Modellversionierung/Änderungsmitteilungen, Prompt-/Antwort-Protokollierung, Sicherheitsfilter, Missbrauchsprävention). ' +
      'Wenn ihr zwar einen externen IKT-Dienst nutzt, aber keinen Dienst für LLM/generative KI, wählt „Nein“.',
    examples: [
      'Integration eines externen Chat-/Text- oder Bildgenerierungsdienstes per API.',
      'Nutzung eines „gehosteten LLM“/„Grundlagenmodells“ beim Cloud-Dienstanbieter.',
      'RAG-Chatbot, der Prompts/Kontext an einen externen LLM-Dienst sendet.',
    ],
  },
  
  W_DORA_GENAI_LLM_KONTROLLEN: {
    id: 'W_DORA_GENAI_LLM_KONTROLLEN',
    type: 'leaf',
    cluster: 'DORA',
    label:
      'Dienst für generative KI/LLM genutzt → spezifische Kontrollen für generative KI prüfen/umsetzen; Pfad fortsetzen.',
    reference: 'DORA (2022), Art. 9 / Art. 28–30',
    referenceId: 'ART_9',
    referenceUrl: DORA_LINKS.ART_9,
    obligations: [
      'DORA_DATENUEBERMITTLUNG_EXTERNE_KI_SCHUTZ',
      'DORA_GENAI_LLM_SERVICE_KONTROLLEN',
    ],
    next: 'B5',
    info:
      'Dieser Knoten erzeugt zusätzliche Feststellungen/Anforderungen für Dienste für generative KI/LLM, ohne den DORA-Pfad zu unterbrechen. ' +
      'So werden typische Audit-Lücken (Zusicherung „kein Training“, Versionierung/Änderungsmitteilungen, Protokollierung/Aufbewahrung, Sicherheits- und Missbrauchskontrollen) systematisch adressiert.',
  },
  

  B5: {
    id: 'B5',
    type: 'question',
    cluster: 'DORA',
    label:
      'Würde ein Ausfall des Dienstleisters kurzfristig (z. B. <72h) eine kritische/wichtige Funktion oder wesentliche regulatorische Pflichten beeinträchtigen?',
    reference: 'DORA (2022), Art. 28–29',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B5_SUBSTITUIERBARKEIT',
    no: 'B5_KONZENTRATION',
    info:
      'Operationalisierung von „(potenziell) kritisch“ über Auswirkungen/Abhängigkeit. ' +
      'Wenn ein Ausfall eure RTO/RPO oder regulatorische Pflichten reißt, ist das ein starker Kritikalitätsindikator.',
    examples: [
      'Single Point of Failure: Ohne Dienst steht ein kritischer Prozess (z. B. Zahlungsverkehr-Teilprozess/AML-Workflow) still.',
      'Dienst-Ausfall führt zu einem regulatorischen Verstoß (z. B. Kontrollen/Reporting/BCM-Anforderungen nicht erfüllbar).',
      'RTO/RPO sind ohne Anbieter nicht einhaltbar.',
    ],
  },

  B5_SUBSTITUIERBARKEIT: {
    id: 'B5_SUBSTITUIERBARKEIT',
    type: 'question',
    cluster: 'DORA',
    label:
      'Gibt es eine realistische Exit-/Substitutionsmöglichkeit (vertraglich + technisch) innerhalb einer definierten Frist (z. B. 3–6 Monate)?',
    reference: 'DORA (2022), Art. 28–30',
    referenceUrl: DORA_LINKS.ART_30,
    yes: 'B5_KONZENTRATION',
    no: 'B5_C',
    info:
      '„Exit“ heißt nicht nur, den Vertrag zu kündigen, sondern tatsächlich migrieren zu können: Datenportabilität, Schnittstellen, Migrationspfad und getestete Abläufe.',
    examples: [
      'Datenportabilität: Export/Transfer von Daten und Konfigurationen ist möglich.',
      'Modellportabilität: Alternative Anbieter- oder On-Premises-Option ist realistisch.',
      'Vertrag: Kündigungs-/Exit-Rechte, Regeln zu Unterauftragnehmern, Audit-Rechte.',
      'Migration wurde mindestens als Plan (besser: als Test) validiert.',
    ],
  },
  
  B5_KONZENTRATION: {
    id: 'B5_KONZENTRATION',
    type: 'question',
    cluster: 'DORA',
    label:
      'Besteht ein Konzentrationsrisiko (gleicher Anbieter für mehrere kritische Dienste/Regionen/BCM-Szenarien)?',
    reference: 'DORA (2022), Art. 28–29',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B5_C',
    no: 'B5_N',
    info:
      'Konzentrationsrisiko entsteht z. B., wenn KI-Anbieter zugleich Datenhaltung, Inferenz und Kernplattform bündelt (gemeinsame Ausfall-Domänen).',
    examples: [
      'Gleicher Cloud-Großanbieters betreibt KI, Datenplattform und zentrale Applikationsschicht.',
      'Gemeinsame Ausfall-Domäne: gleiche Region/Steuerungsebene für mehrere kritische Workloads.',
      'Mehrere kritische Prozesse hängen am selben Anbieter/Vertrag/Unterauftragnehmer.',
    ],
  },

  B5_C: {
    id: 'B5_C',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Pot. kritischer IKT-Drittanbieter → erweiterte Drittanbieterpflichten.',
    reference: 'DORA (2022), Art. 28',
    referenceUrl: DORA_LINKS.ART_28,
    obligations: ['DORA_DRITTANBIETER_ERWEITERT', 'DORA_DRITTANBIETER_SORGFALTSPRUEFUNG', 'DORA_KRITISCHE_IKT_DRITTANBIETER_AUFSICHTSREGIME'],
    next: 'B5_KRITIKALITAETS_UEBERPRUEFUNG',
    info:
      'Bei (potenziell) kritischen IKT-Drittanbietern gelten erweiterte Anforderungen aus DORA, ' +
      'insbesondere zu Monitoring, Konzentrationsrisiken, Ausstiegsstrategien und ggf. Aufsichtsinteraktion.',
    examples: [
      'Ein großer KI-Dienstleister, über den ein wesentlicher Teil der Kernprozesse läuft.',
      'Ein Cloud-Anbieter, der zentrale Datenhaltung und KI-Ausführung bündelt.',
    ],
  },

  B5_N: {
    id: 'B5_N',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Nicht-kritischer IKT-Drittanbieter → Standardpflichten.',
    reference: 'DORA (2022), Art. 28',
    referenceUrl: DORA_LINKS.ART_28,
    obligations: ['DORA_DRITTANBIETER_STANDARD', 'DORA_DRITTANBIETER_SORGFALTSPRUEFUNG'],
    next: 'B5_KRITIKALITAETS_UEBERPRUEFUNG',
    info:
      'Der IKT-Dienstleister wird nicht als kritisch eingestuft. Es gelten die „normalen“ DORA-Anforderungen ' +
      'für IKT-Drittanbieter, proportional zum Risiko.',
    examples: [
      'Externe KI-Komponente für nicht-entscheidungsrelevante Auswertungen.',
      'Dienstleister für vorverarbeitete Datenfeeds ohne direkten Kundenauswirkung.',
    ],
  },

  B5_KRITIKALITAETS_UEBERPRUEFUNG: {
    id: 'B5_KRITIKALITAETS_UEBERPRUEFUNG',
    type: 'question',
    cluster: 'DORA',
    label:
      'Ist die Einstufung dokumentiert (Abhängigkeitsanalyse, Konzentrationsbewertung, Exit-Plan) und durch Risiko-/Compliance-Funktion formal freigegeben?',
    reference: 'DORA (2022), Art. 28–30',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B7',
    no: 'W_DORA_DRITTANBIETER_UEBERPRUEFUNG',
    info:
      'Damit die Einstufung governance-tauglich ist, braucht ihr Nachweis und formale Verantwortung (Freigabe).',
    examples: [
      'Abhängigkeitsanalyse inkl. Auswirkungen/RTO/RPO.',
      'Konzentrationsbewertung (gemeinsame Ausfall-Domänen des Anbieters).',
      'Exit-/Substitutionsplan (besser: getestet).',
      'Formale Freigabe (Risikomanagement/Compliance/Outsourcing) versioniert abgelegt.',
    ],
  },
  
  W_DORA_DRITTANBIETER_UEBERPRUEFUNG: {
    id: 'W_DORA_DRITTANBIETER_UEBERPRUEFUNG',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Drittanbieter-Kritikalität: Review/Dokumentation erforderlich',
    reference: 'DORA (2022), Art. 28–30',
    referenceUrl: DORA_LINKS.ART_28,
    obligations: ['DORA_DRITTANBIETER_KRITIKALITAET_UEBERPRUEFUNG'],
    next: 'B7',
    info:
      'Bitte Einstufung nachholen: Abhängigkeit, Konzentration, Exit (mindestens geplant), plus formale Freigabe.',
  },

  B6: {
    id: 'B6',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Kein externer IKT-Dienstleister → interne Verantwortung (DORA-Basis).',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS'],
    next: 'B7',
    info:
      'Das KI-System wird vollständig intern betrieben. Das Institut trägt die volle technische und organisatorische Verantwortung ' +
      'für Betrieb, Sicherheit und Resilienz.',
    examples: [
      'Eigenentwickeltes Modell, das auf eigener Infrastruktur (On-Prem) betrieben wird.',
      'Keine Nutzung externer Plattformen für Training oder Inferenz.',
    ],
  },

  B7: {
    id: 'B7',
    type: 'question',
    cluster: 'DORA',
    label: 'Werden produktive Kunden-, Transaktions- oder andere sensible Daten an externe KI-Dienste übermittelt?',
    reference: 'DORA (2022), Art. 9',
    referenceUrl: DORA_LINKS.ART_9,
    yes: 'B7_S',
    no: 'B7_N',
    info:
      'Diese Frage fokussiert auf den Datenfluss: Werden sensible oder produktive Daten an externe KI-Dienste übermittelt? ' +
      'Davon hängen Anforderungen an Schutzmaßnahmen, Verschlüsselung und vertragliche Regelungen ab.',
    examples: [
      'Senden von Kundendaten an einen externen LLM-Service zur Textanalyse.',
      'Nutzung von Test- oder Dummy-Daten ohne Personenbezug (Antwort „Nein“).',
    ],
  },

  B7_S: {
    id: 'B7_S',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Sensible Daten → Schutzmaßnahmen für externe KI.',
    reference: 'DORA (2022), Art. 9',
    referenceUrl: DORA_LINKS.ART_9,
    obligations: ['DORA_DATENUEBERMITTLUNG_EXTERNE_KI_SCHUTZ'],
    next: 'B7_RUECKFALL',
    info:
      'Werden produktive oder sensible Daten an externe KI übertragen, sind starke Schutzmaßnahmen erforderlich: ' +
      'Datenklassifizierung, Verschlüsselung, DLP, Protokollierung und klare vertragliche Regelungen.',
    examples: [
      'Übermittlung von Transaktionsdaten an eine externe Anomalie-Erkennung.',
      'Verarbeitung von KYC-Daten über ein externes KI-Modul.',
    ],
  },

  B7_N: {
    id: 'B7_N',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Keine sensiblen Daten → proportionale Basis.',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: [],
    next: 'D1_ART16_B7',
    info:
      'Wenn keine produktiven oder kritischen Daten an externe KI übermittelt werden, reichen in der Regel ' +
      'Standard-Sicherheitsmaßnahmen aus. Eine Dokumentation der Annahmen bleibt dennoch wichtig.',
    examples: [
      'Nutzung rein synthetischer Daten für Experimente.',
      'Ausschließliche Offline-Tests ohne Live-Kundendaten.',
    ],
  },

  D1_ART16_B4: {
    id: 'D1_ART16_B4',
    type: 'question',
    cluster: 'DORA',
    label:
      'Darf für eure Organisation ein vereinfachter IKT-Risikomanagementrahmen nach Art. 16 angewendet werden?',
    reference: 'DORA (2022), Art. 16',
    referenceUrl: DORA_LINKS.ART_16,
    yes: 'D1_ART16_Y_B4',
    no: 'D1_ART16_N_B4',
    info:
      'Art. 16 ist eine besondere Ausnahme („vereinfachter IKT-RMF“) und nicht identisch mit „proportional“. ' +
      'Wenn unklar: konservativ „Nein/unklar“ wählen und die Begründung dokumentieren (Audit-Sicherheit).',
    examples: [
      'Rechts-/Compliance-Check bestätigt: Art. 16 ist für den Unternehmenstyp anwendbar.',
      'Begründung/Geltungsbereich ist dokumentiert (warum Art. 16 greift oder nicht greift).',
    ],
  },
  
  D1_ART16_Y_B4: {
    id: 'D1_ART16_Y_B4',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Art. 16 anwendbar → vereinfachter IKT-RMF (Minimalanforderungen) umsetzen.',
    reference: 'DORA (2022), Art. 16',
    referenceUrl: DORA_LINKS.ART_16,
    obligations: ['DORA_VEREINFACHTE_BASIS'],
    next: 'B4',
    info:
      'Die „Light“-Variante ist hier auditfähig, weil sie explizit auf Art. 16 gestützt wird (inkl. Nachweis).',
  },
  
  D1_ART16_N_B4: {
    id: 'D1_ART16_N_B4',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Art. 16 nicht anwendbar → proportionale Basis (kein Art.16-Shortcut).',
    reference: 'DORA (2022), Art. 4 (Proportionalität) i. V. m. Art. 5–15',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS_PROPORTIONAL'],
    next: 'B4',
    info:
      '„Proportional“ ist zulässig, aber die Begründung muss klar sein: Art. 16 ist NICHT der Rechtsgrund.',
  },
  
  D1_ART16_B7: {
    id: 'D1_ART16_B7',
    type: 'question',
    cluster: 'DORA',
    label:
      'Darf für eure Organisation ein vereinfachter IKT-Risikomanagementrahmen nach Art. 16 angewendet werden?',
    reference: 'DORA (2022), Art. 16',
    referenceUrl: DORA_LINKS.ART_16,
    yes: 'D1_ART16_Y_B7',
    no: 'D1_ART16_N_B7',
    info:
      'Gleiche Eignungsprüfung wie oben – hier eingefügt, weil dieser Pfad sonst „Light“ ohne Art.16-Begründung wäre.',
  },
  
  D1_ART16_Y_B7: {
    id: 'D1_ART16_Y_B7',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Art. 16 anwendbar → vereinfachter IKT-RMF (Minimalanforderungen) umsetzen.',
    reference: 'DORA (2022), Art. 16',
    referenceUrl: DORA_LINKS.ART_16,
    obligations: ['DORA_VEREINFACHTE_BASIS'],
    next: 'B7_RUECKFALL',
  },
  
  D1_ART16_N_B7: {
    id: 'D1_ART16_N_B7',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Art. 16 nicht anwendbar → proportionale Basis (kein Art.16-Shortcut).',
    reference: 'DORA (2022), Art. 4 (Proportionalität) i. V. m. Art. 5–15',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS_PROPORTIONAL'],
    next: 'B7_RUECKFALL',
  },
  

  B7_RUECKFALL: {
    id: 'B7_RUECKFALL',
    type: 'question',
    cluster: 'DORA',
    label:
      'Gibt es einen getesteten Ausweichverfahren (Rückfall) inkl. RTO/RPO, Rollen, Betriebshandbuch und Entscheidungskriterien (Stop/Degrade)?',
    reference: 'DORA (2022), Art. 11–12',
    referenceUrl: DORA_LINKS.ART_11,
    yes: 'B7_RUECKFALL_OK',
    no: 'B7_RUECKFALL_LUECKE',
    info:
      'Brücke zu BCM: Entscheidend ist nicht „wir können theoretisch“, sondern ob ein Ausweichverfahren ' +
      'mit klaren Rollen, Betriebshandbuch und getesteten Zeiten (RTO/RPO) wirklich funktioniert.',
    examples: [
      'Betriebshandbuch inkl. Stop/Degrade-Kriterien (z. B. harte Abschaltkriterien bei Qualitäts-/Verfügbarkeitsproblemen).',
      'RTO/RPO sind definiert und im Test eingehalten.',
      'Rollen/Vertretung und Eskalationspfade sind klar.',
    ],
  },
  
  B7_RUECKFALL_OK: {
    id: 'B7_RUECKFALL_OK',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Ausweichverfahren vorhanden → BCM-Brücke erfüllt.',
    reference: 'DORA (2022), Art. 11–12',
    referenceUrl: DORA_LINKS.ART_11,
    next: 'B8',
    info:
      'Nachweis sollte vorhanden sein: Betriebshandbuch, BCM-Mapping und Testprotokolle (inkl. Datum, Geltungsbereich, Ergebnis).',
  },
  
  B7_RUECKFALL_LUECKE: {
    id: 'B7_RUECKFALL_LUECKE',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Ausweichverfahren fehlt → BCM-Mapping & Test erforderlich.',
    reference: 'DORA (2022), Art. 11–12',
    referenceUrl: DORA_LINKS.ART_11,
    obligations: ['DORA_BCM_AUSWEICHVERFAHREN'],
    next: 'B8',
    info:
      'Ohne getesteten Ausweichverfahren besteht das Risiko, dass ein KI-/Anbieter-Ausfall kritische Prozesse stoppt ' +
      'oder regulatorische Pflichten verletzt.',
  },  

  B8: {
    id: 'B8',
    type: 'question',
    cluster: 'DORA',
    label: 'Verändert sich das Modell im Betrieb (z. B. Neutraining, Feinabstimmung oder Online-Lernen)?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B8_D',
    no: 'B8_S',
    info:
      'Hier wird geprüft, ob das Modell sich im Betrieb verändert (dynamisches Modell) oder statisch bleibt. ' +
      'Dynamische Modelle erfordern stärkere Prozesse für Änderungsmanagement und Überwachung.',
    examples: [
      'Regelmäßiges Neutraining mit neuen Daten im Monatszyklus.',
      'Online-Lernen, das Gewichte im laufenden Betrieb anpasst.',
      'Statische Modelle mit seltenen, klar geplanten Releases (Antwort „Nein“).',
    ],
  },

  B8_D: {
    id: 'B8_D',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Dynamisches Modell → Überwachung/Änderungsmanagement + Vorfallanagement.',
    reference: 'DORA (2022), Art. 17',
    referenceUrl: DORA_LINKS.ART_17,
    obligations: ['DORA_MODELLBETRIEB_UEBERWACHUNG', 'DORA_VORFALLMANAGEMENT', 'DORA_MELDUNG_ERHEBLICHER_CYBERBEDROHUNGEN'],
    next: 'C1_KOMMUNIKATION_BENOETIGT',
    info:
      'Bei dynamischen Modellen sind strukturierte Change-, Freigabe- und Monitoringprozesse zwingend: ' +
      'Drift-Überwachung, Performance-Checks, Dokumentation von Änderungen und klare Eskalationswege.',
    examples: [
      'Ein Fraud-Detection-Modell, das regelmäßig mit aktuellen Transaktionsdaten nachtrainiert wird.',
      'Ein Empfehlungssystem, das kontinuierlich Online-Lernen nutzt.',
    ],
  },

  B8_S: {
    id: 'B8_S',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Statisches Modell → proportionale Basis + Vorfallanagement.',
    reference: 'DORA (2022), Art. 17',
    referenceUrl: DORA_LINKS.ART_17,
    obligations: ['DORA_BASIS_PROPORTIONAL', 'DORA_VORFALLMANAGEMENT', 'DORA_MELDUNG_ERHEBLICHER_CYBERBEDROHUNGEN'],
    next: 'C1_KOMMUNIKATION_BENOETIGT',
    info:
      'Statische Modelle erfordern zwar ebenfalls Prozesse für Änderungsmanagement und Freigaben, diese können aber ' +
      'proportional und weniger häufig ausgestaltet werden.',
    examples: [
      'Ein einmal trainiertes Scorecard-Modell, das nur bei Bedarf (z. B. jährlich) aktualisiert wird.',
      'Ein statisches Regel-/ML-Modell mit klar definierten Release-Zyklen.',
    ],
  },

  C1_KOMMUNIKATION_BENOETIGT: {
    id: 'C1_KOMMUNIKATION_BENOETIGT',
    type: 'question',
    cluster: 'DORA',
    label:
      'Hat ein Ausfall/Vorfall potenziell Kunden-, Markt- oder Reputationsauswirkungen (sodass externe Kommunikation erforderlich sein kann)?',
    reference: 'DORA (2022), Art. 14 i. V. m. Art. 17',
    referenceUrl: DORA_LINKS.ART_14,
    yes: 'W_DORA_KOMMUNIKATION_ERFORDERLICH',
    no: 'ENDE',
    info:
      'DORA verlangt Kommunikationspläne/-strategien für interne und externe Stakeholder. ' +
      'Wenn Kunden/Öffentlichkeit betroffen sein können, sollte ein belastbarer Kommunikationsplan inkl. Freigaben/Schweregraden existieren.',
    examples: [
      'Serviceausfall betrifft Kundentransaktionen oder wesentliche Kundenprozesse.',
      'Vorfall hat potenziellen Markt-/Reputationsauswirkungen (z. B. Datenabfluss, Betrug, großflächiger Ausfall).',
      'Kundenbeschwerden/Hotline-Volumen oder Medieninteresse ist plausibel.',
    ],
  },
  
  W_DORA_KOMMUNIKATION_ERFORDERLICH: {
    id: 'W_DORA_KOMMUNIKATION_ERFORDERLICH',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Kommunikationspläne/-strategie nach DORA Art. 14 erforderlich.',
    reference: 'DORA (2022), Art. 14',
    referenceUrl: DORA_LINKS.ART_14,
    obligations: ['DORA_KOMMUNIKATIONSPLAENE'],
    next: 'ENDE',
    info:
      'Ergänzt Vorfall-Betriebshandbuch um Kommunikationsplan (intern/extern), Freigaben, Zielgruppenlogik und Templates.',
  },

  ENDE: {
    id: 'ENDE',
    type: 'leaf',
    label: 'Analyse beendet.',
    obligations: [],
  },
};

function deriveConsistencyLocks({ pathIds }) {
  const locks = new Set();

  const ids = Array.isArray(pathIds) ? pathIds : [];
  const HIGH_RISK_KEYS = new Set(['KI_HR_ANBIETER', 'KI_HR_BETREIBER']);

  for (const id of ids) {
    if (!id || typeof id !== 'string') continue;
    if (id.includes('__req__')) continue; // ignore requirement steps/summaries

    const node = decisionTree[id];
    if (!node || node.type !== 'leaf') continue;

    const obligations = Array.isArray(node.obligations) ? node.obligations : [];
    if (obligations.some((k) => HIGH_RISK_KEYS.has(k))) {
      locks.add(CONSISTENCY_LOCKS.KI_HOCHRISIKO);
    }
  }

  return locks;
}

export function validateNextNode({ currentId, answer, nextId, answers, pathIds }) {
  const locks = deriveConsistencyLocks({ answers, pathIds });

  if (!nextId || !decisionTree[nextId]) {
    return { nextId: 'W_KI_WIDERSPRUCH' };
  }

  if (currentId === 'A2') {
    if (answer === 'yes') return { nextId: 'A2_Y' };
    if (answer === 'no') return { nextId: 'A2_ROLLE' };
  }

  if (locks.has(CONSISTENCY_LOCKS.KI_HOCHRISIKO)) {
    const isA3Decision =
      currentId === 'A3_ANBIETER' || currentId === 'A3_BETREIBER';

    const isTryingToDeescalate =
      (isA3Decision && answer === 'no') ||
      nextId === 'A3_KEIN_HR_PRUEFUNG' ||
      nextId === 'G_KI_NON_HR_PLAUSIBILITY';

    if (isTryingToDeescalate) {
      return { nextId: 'W_KI_WIDERSPRUCH' };
    }
  }

  // default: OK
  return { nextId };
}


export function getCanonicalIdForRequirementInstance(instanceId) {
  if (!instanceId || !instanceId.includes('__req__') || instanceId.includes('__req__summary')) return null;

  const suffix = instanceId.split('__req__')[1];
  if (!suffix) return null;

  const parts = suffix.split('__');
  const pkgKey = parts.shift();
  const itemId = parts.join('__');

  const pkg = obligationsCatalog[pkgKey];
  const item = pkg?.items?.find((it) => it && typeof it === 'object' && it.id === itemId);

  return item && typeof item === 'object' && item.canonicalId ? item.canonicalId : suffix;
}


export function getRequirementChain(leafId) {
  const leaf = decisionTree[leafId];
  const obligationKeys = leaf?.obligations ?? [];

  const reqs = [];

  for (const pkgKey of obligationKeys) {
    const pkg = obligationsCatalog[pkgKey];
    if (!pkg) continue;

    const items = pkg.items ?? [];
    for (const item of items) {
      const itemId = item?.id; 
      if (!itemId) continue;

      const instanceId = `${leafId}__req__${pkgKey}__${itemId}`;
      const canonicalId = item?.canonicalId ?? `${pkgKey}__${itemId}`;

      reqs.push({
        id: instanceId,          
        instanceId,              
        canonicalId,             
        pkgKey,
        pkgLabel: pkg.label,
        regulation: pkg.regulation,
        articles: pkg.articles ?? [],
        itemId,

        question: item.question,
        todo: item.todo,
        reference: item.reference,
        referenceId: item.referenceId,
        referenceUrl: item.referenceUrl,
        evidence: item.evidence,
        info: item.info,
        examples: item.examples,
      });
    }
  }

  const firstReqId = reqs[0]?.id ?? null;
  const summaryId = `${leafId}__req__summary`;

  return { reqs, firstReqId, summaryId };
}

export function getNextInRequirementChain(currentReqId) {
  const [leafId] = currentReqId.split('__req__');
  const { reqs, summaryId } = getRequirementChain(leafId);
  const idx = reqs.findIndex((r) => r.id === currentReqId);
  const nextReqId = idx >= 0 && idx + 1 < reqs.length ? reqs[idx + 1].id : undefined;
  return { leafId, nextReqId, summaryId };
}

