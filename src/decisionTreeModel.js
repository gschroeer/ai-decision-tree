// src/decisionTreeModel.js

// -------------------- Obligations Catalog --------------------
// articles = "Paragraphen/Artikel" (Anzeige in Tooltips + Export)
// items = konkrete Anforderungen (Requirement-Chain)
export const obligationsCatalog = {

AI_ACT_NOT_APPLICABLE: {
  label: 'EU AI Act: Nicht anwendbar – Baseline-Hinweise',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Art. 3 (Definition KI-System)'],
  items: [
    {
      id: 'AI_NA_CLASSIFICATION_NOTE',
      question:
        'Ist die Einstufung „kein KI-System“ dokumentiert und begründet (Scope, Systembeschreibung, Abgrenzung)?',
      reference: 'EU AI Act (2024), Art. 3',
      evidence: 'Nachweis: Klassifikationsmemo, Systembeschreibung, Freigabe/Review',
    },
    {
      id: 'AI_NA_GOVERNANCE_BASELINE',
      question:
        'Sind trotz Nicht-Anwendbarkeit des EU AI Act interne Governance- und Freigabekontrollen für das System definiert?',
      reference: 'EU AI Act (2024) – Governance-Baseline (intern)',
      evidence: 'Nachweis: Freigabeprozess, RACI, Richtlinie/Checkliste',
    },
  ],
},

AI_PROHIBITED: {
  label: 'EU AI Act: Verbotene Praxis – Sofortmaßnahmen & Eskalation',
  regulation: 'EU AI Act',
  articles: ['EU AI Act (2024), Kapitel II (Verbotene Praktiken)'],
  items: [
    {
      id: 'AI_PROH_STOP_DEPLOYMENT',
      question:
        'Wurde die Nutzung bzw. (geplante) Inbetriebnahme des Systems gestoppt und als Maßnahme dokumentiert?',
      reference: 'EU AI Act (2024), Kapitel II',
      evidence: 'Nachweis: Stop-Entscheid, Ticket/Change, Betriebsfreigabe entzogen',
    },
    {
      id: 'AI_PROH_ESCALATION',
      question:
        'Wurde eine formale Eskalation an Legal/Compliance/Risk durchgeführt und dokumentiert?',
      reference: 'EU AI Act (2024), Kapitel II',
      evidence: 'Nachweis: Eskalationsmail/Case-ID, Review-Protokoll, Entscheidungsgremium',
    },
    {
      id: 'AI_PROH_REMEDIATION_DECISION',
      question:
        'Liegt eine dokumentierte Entscheidung vor, ob das Vorhaben abgebrochen oder regelkonform neu zugeschnitten wird?',
      reference: 'EU AI Act (2024), Kapitel II',
      evidence: 'Nachweis: Managemententscheidung, Maßnahmenplan, neue Scope-Definition',
    },
  ],
},


  AI_HR_PROVIDER_OR_DEPLOYER: {
    label: 'EU AI Act: Hochrisiko-KI – Kernpflichten (Anbieter/Betreiber)',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 9–15'],
    items: [
      {
        id: 'AI_HR_RM_PROCESS',
        question:
          'Gibt es einen dokumentierten KI-Risikomanagementprozess, der Risiken identifiziert, bewertet und Maßnahmen festlegt?',
        reference: 'EU AI Act (2024), Art. 9',
        evidence: 'Nachweis: Prozessbeschreibung, Risiko-Register, Freigabeprotokoll',
      },
      {
        id: 'AI_HR_RM_LIFECYCLE',
        question:
          'Werden KI-Risiken vor Go-live bewertet und während des Betriebs bei relevanten Änderungen regelmäßig überprüft?',
        reference: 'EU AI Act (2024), Art. 9',
        evidence: 'Nachweis: Risk-Reviews, Change-Impact-Analysen, Monitoring-Reports',
      },
      {
        id: 'AI_HR_DATA_LINEAGE_RIGHTS',
        question:
          'Sind Datenquellen, Datenherkunft und Nutzungsrechte für Training und Test dokumentiert?',
        reference: 'EU AI Act (2024), Art. 10',
        evidence: 'Nachweis: Data-Lineage/Datasheets, Verträge/Lizenzen, Datenkatalog',
      },
      {
        id: 'AI_HR_DATA_QUALITY_CRITERIA',
        question:
          'Gibt es definierte Kriterien zur Datenqualität und werden diese vor Einsatz des Modells nachweisbar geprüft?',
        reference: 'EU AI Act (2024), Art. 10',
        evidence: 'Nachweis: Data-Quality-Report, Prüfprotokoll, Freigabeentscheidung',
      },
      {
        id: 'AI_HR_BIAS_MITIGATION',
        question:
          'Sind Maßnahmen zur Erkennung und Reduktion von Bias in Trainings- und Testdaten dokumentiert und umgesetzt?',
        reference: 'EU AI Act (2024), Art. 10',
        evidence: 'Nachweis: Bias-Checks, Fairness-Report, Maßnahmenplan',
      },
      {
        id: 'AI_HR_TECH_DOC_UPTODATE',
        question:
          'Wurde eine technische Dokumentation erstellt und wird sie bei Änderungen aktuell gehalten?',
        reference: 'EU AI Act (2024), Art. 11',
        evidence: 'Nachweis: Dokumentationspaket, Versionshistorie, Change-Links',
      },
      {
        id: 'AI_HR_LOGGING_ENABLED',
        question:
          'Ist Protokollierung (Logging) für relevante Systemereignisse aktiviert und nachvollziehbar auswertbar?',
        reference: 'EU AI Act (2024), Art. 12',
        evidence: 'Nachweis: Log-Konfiguration, Log-Auszüge, Retention-Regeln',
      },
      {
        id: 'AI_HR_INFO_FOR_OPERATORS',
        question:
          'Werden Betreibern (Deployer) ausreichende Informationen zur sicheren Nutzung bereitgestellt (Zweck, Grenzen, Betriebsvoraussetzungen)?',
        reference: 'EU AI Act (2024), Art. 13',
        evidence: 'Nachweis: Nutzer-/Betriebsdokumentation, Handbuch, Release Notes',
      },
      {
        id: 'AI_HR_HUMAN_OVERSIGHT',
        question:
          'Sind Human-Oversight-Maßnahmen definiert und implementiert (z. B. manuelle Prüfung, Eingriffsrechte, Abschaltmöglichkeit)?',
        reference: 'EU AI Act (2024), Art. 14',
        evidence: 'Nachweis: Oversight-Konzept, RACI, Bedien-/Abschaltverfahren',
      },
      {
        id: 'AI_HR_PERFORMANCE_TESTS',
        question:
          'Sind messbare Leistungskennzahlen definiert und durch Tests vor Go-live belegt?',
        reference: 'EU AI Act (2024), Art. 15',
        evidence: 'Nachweis: Testreport, Akzeptanzkriterien, Freigabeprotokoll',
      },
      {
        id: 'AI_HR_ROBUSTNESS_TESTS',
        question:
          'Wurde Robustheit gegen typische Stör- und Fehlerszenarien getestet und dokumentiert?',
        reference: 'EU AI Act (2024), Art. 15',
        evidence: 'Nachweis: Robustness-Testplan, Testergebnisse, Maßnahmenplan',
      },
      {
        id: 'AI_HR_SECURITY_ASSESSMENT',
        question:
          'Wurde ein Cybersecurity-/Security-Assessment für die KI-Komponente durchgeführt und dokumentiert?',
        reference: 'EU AI Act (2024), Art. 15',
        evidence: 'Nachweis: Security-Assessment, PenTest/Threat-Model, Hardening-Plan',
      },
    ],
  },

  AI_TRANSPARENCY_ART_50: {
    label: 'EU AI Act: Transparenzpflichten',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 50'],
    items: [
      {
        id: 'AI_TP_INTERACTION_NOTICE',
        question:
          'Erhalten Nutzende einen klaren Hinweis, dass sie mit einem KI-System interagieren (z. B. UI-Hinweis/Disclaimer)?',
        reference: 'EU AI Act (2024), Art. 50',
        evidence: 'Nachweis: Screenshot/UI-Text, freigegebene Disclaimer',
      },
      {
        id: 'AI_TP_GENERATIVE_OUTPUTS',
        question:
          'Erzeugt das System Inhalte (Text, Bild, Audio oder Video), die an Nutzende ausgegeben werden?',
        reference: 'EU AI Act (2024), Art. 50',
        evidence: 'Nachweis: Use-Case-Beschreibung, UI-Flows',
      },
      {
        id: 'AI_TP_CONTENT_LABELING',
        question:
          'Werden KI-generierte Inhalte in den relevanten Fällen eindeutig gekennzeichnet?',
        reference: 'EU AI Act (2024), Art. 50',
        evidence: 'Nachweis: UI/Template, Content-Policy, Freigabe',
      },
      {
        id: 'AI_TP_PURPOSE_INFO',
        question:
          'Ist der Zweck des KI-Systems für Nutzende dokumentiert und verfügbar?',
        reference: 'EU AI Act (2024), Art. 50',
        evidence: 'Nachweis: Nutzerinformation/Handbuch, Intranet-Seite',
      },
      {
        id: 'AI_TP_LIMITATIONS_INFO',
        question:
          'Sind bekannte Grenzen und Limitierungen des Systems dokumentiert und verfügbar?',
        reference: 'EU AI Act (2024), Art. 50',
        evidence: 'Nachweis: Limitations-Abschnitt, Release Notes, Known-Issues',
      },
      {
        id: 'AI_TP_ALLOWED_USE',
        question:
          'Sind Vorgaben zur zulässigen Nutzung (Do/Don’t) dokumentiert und verfügbar?',
        reference: 'EU AI Act (2024), Art. 50',
        evidence: 'Nachweis: Nutzungsrichtlinie, Schulungsunterlagen',
      },
    ],
  },

  AI_CONFORMITY_AND_DOC: {
    label: 'EU AI Act: Konformitätsbewertung & Technische Dokumentation',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 16 ff., Art. 43 ff., Anhang IV'],
    items: [
      {
        id: 'AI_CONF_NEED_DETERMINED',
        question:
          'Wurde dokumentiert festgestellt, ob für das System eine Konformitätsbewertung erforderlich ist?',
        reference: 'EU AI Act (2024), Art. 43 ff.',
        evidence: 'Nachweis: Klassifikationsmemo, Legal/Compliance-Note',
      },
      {
        id: 'AI_CONF_DONE',
        question:
          'Wurde die Konformitätsbewertung durchgeführt und liegt ein dokumentiertes Ergebnis vor?',
        reference: 'EU AI Act (2024), Art. 43 ff.',
        evidence: 'Nachweis: Konformitätsbewertungsbericht, Freigabeentscheidung',
      },
      {
        id: 'AI_CONF_PLAN_IF_OPEN',
        question:
          'Gibt es einen datierten Plan mit Verantwortlichen, falls die Konformitätsbewertung noch aussteht?',
        reference: 'EU AI Act (2024), Art. 43 ff.',
        evidence: 'Nachweis: Projektplan, RACI, Meilensteine',
      },
      {
        id: 'AI_DOC_ANNEX_IV_MINIMUM',
        question:
          'Deckt die technische Dokumentation mindestens Zweck, Modellbeschreibung, Daten, Tests, Risiken und Betriebsvoraussetzungen ab?',
        reference: 'EU AI Act (2024), Anhang IV',
        evidence: 'Nachweis: Anhang-IV-Indexliste, Dokumentationspaket',
      },
      {
        id: 'AI_ROLES_DEFINED',
        question:
          'Sind Rollen (Anbieter/Betreiber) und Verantwortlichkeiten im Dokumentationspaket eindeutig beschrieben?',
        reference: 'EU AI Act (2024), Art. 16 ff.',
        evidence: 'Nachweis: Rollenbeschreibung, RACI, Vertrag/SoW (falls extern)',
      },
      {
        id: 'AI_CHANGE_CONTROL_DOC',
        question:
          'Gibt es einen dokumentierten Change-Prozess, der Modelländerungen (Retraining/Finetuning) vor Go-live freigibt?',
        reference: 'EU AI Act (2024), Art. 11–12 (i. V. m. Governance)',
        evidence: 'Nachweis: Change-Policy, CAB-Protokolle, Release Notes',
      },
    ],
  },

  AI_REGISTRATION_AND_CE: {
    label: 'EU AI Act: Registrierung & Kennzeichnung',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 49 ff., Art. 60'],
    items: [
      {
        id: 'AI_REG_REQUIRED',
        question:
          'Wurde geprüft und dokumentiert, ob das System registrierungspflichtig ist (z. B. Hochrisiko-KI mit Registerpflicht)?',
        reference: 'EU AI Act (2024), Art. 60',
        evidence: 'Nachweis: Klassifikationsmemo, Registerpflicht-Entscheid',
      },
      {
        id: 'AI_REG_DONE',
        question:
          'Wurde die Registrierung durchgeführt und ist die Registrierungs-ID nachvollziehbar dokumentiert?',
        reference: 'EU AI Act (2024), Art. 60',
        evidence: 'Nachweis: Register-ID, Screenshot/PDF, Ablageort',
      },
      {
        id: 'AI_CE_REQUIRED_CHECK',
        question:
          'Wurde geprüft und dokumentiert, ob eine Kennzeichnung (z. B. CE) erforderlich ist (Produkt/integriertes System)?',
        reference: 'EU AI Act (2024), Art. 49 ff.',
        evidence: 'Nachweis: Legal/Compliance-Note, Konformitätsunterlagen',
      },
      {
        id: 'AI_RECORDS_REPO',
        question:
          'Sind Registrierungs- und Kennzeichnungsunterlagen versioniert, zugriffsgeschützt und auffindbar abgelegt?',
        reference: 'EU AI Act (2024), Art. 49 ff.',
        evidence: 'Nachweis: Repository-Link, Zugriffskonzept, Versionshistorie',
      },
    ],
  },

  AI_LIMITED_OR_MINIMAL: {
    label: 'EU AI Act: Nicht-Hochrisiko – Governance-Baseline',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 50 (falls anwendbar)'],
    items: [
      {
        id: 'AI_BASE_APPROVAL_PROCESS',
        question:
          'Gibt es einen dokumentierten Freigabeprozess für KI-Use-Cases (Owner, Schritte, Gremien)?',
        reference: 'EU AI Act (2024) – Governance-Baseline (intern)',
        evidence: 'Nachweis: Prozessbeschreibung, RACI, Gremienprotokoll',
      },
      {
        id: 'AI_BASE_RESPONSIBILITIES',
        question:
          'Sind Zuständigkeiten für Compliance, Risk und IT-Security im KI-Freigabeprozess festgelegt?',
        reference: 'EU AI Act (2024) – Governance-Baseline (intern)',
        evidence: 'Nachweis: RACI, Rollenbeschreibung, Organigramm',
      },
      {
        id: 'AI_BASE_MIN_CONTROLS',
        question:
          'Gibt es definierte Mindestkontrollen für nicht-hochriskante KI (z. B. Zugriff, Logging, Datenschutz)?',
        reference: 'EU AI Act (2024) – Governance-Baseline (intern)',
        evidence: 'Nachweis: Control-Baseline, Checkliste, Freigabekriterien',
      },
      {
        id: 'AI_NON_HR_JUSTIFICATION',
        question:
          'Ist die Nicht-Hochrisiko-Einstufung inklusive Use-Case-Scope, Nutzerkreis und Begründung dokumentiert?',
        reference: 'EU AI Act (2024), Art. 6 (Klassifikation)',
        evidence: 'Nachweis: Klassifikationsmemo, Scope-Beschreibung',
      },
      {
        id: 'AI_BASE_ACCESS_CONTROL',
        question:
          'Sind Zugriffskontrollen für Daten, Modelle und Outputs umgesetzt (Rollen/Least Privilege)?',
        reference: 'Governance/IT-Security Baseline',
        evidence: 'Nachweis: IAM-Konzept, Rollenmatrix, Berechtigungsnachweise',
      },
      {
        id: 'AI_BASE_AUDIT_LOGS',
        question:
          'Ist ein Audit-Trail für Nutzung und Änderungen am System aktiviert und aufbewahrt?',
        reference: 'Governance/IT-Security Baseline',
        evidence: 'Nachweis: Logging-Konfig, Retention, Beispiel-Logs',
      },
      {
        id: 'AI_BASE_DLP',
        question:
          'Sind Maßnahmen gegen Datenabfluss (z. B. DLP-Regeln) definiert und aktiv, sofern relevante Kanäle genutzt werden?',
        reference: 'Governance/IT-Security Baseline',
        evidence: 'Nachweis: DLP-Policy, Regelsets, Testprotokoll',
      },
    ],
  },

  DORA_BASE: {
    label: 'DORA: IKT-Risikomanagement – Baseline',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 5–16'],
    items: [
      {
        id: 'DORA_GOV_ROLES',
        question:
          'Sind IKT-Governance und Verantwortlichkeiten für die KI-relevanten Systeme definiert und dokumentiert?',
        reference: 'DORA (2022), Art. 5',
        evidence: 'Nachweis: Governance-Dokument, RACI, Rollenbeschreibung',
      },
      {
        id: 'DORA_ICT_RMF',
        question:
          'Gibt es ein dokumentiertes IKT-Risikomanagement-Framework inklusive Rollen, Kontrollen und Risikoappetit?',
        reference: 'DORA (2022), Art. 6',
        evidence: 'Nachweis: Framework, Policies, Kontrollkatalog',
      },
      {
        id: 'DORA_ASSET_INVENTORY',
        question:
          'Gibt es ein aktuelles Inventar der IKT-Assets, die für das KI-System genutzt werden?',
        reference: 'DORA (2022), Art. 6–9 (i. V. m. Governance)',
        evidence: 'Nachweis: Asset-Register/CMDB-Auszug, Architekturdiagramm',
      },
      {
        id: 'DORA_PROTECTION_MEASURES',
        question:
          'Sind Schutzmaßnahmen für die KI-relevanten Komponenten definiert und umgesetzt (z. B. IAM, Patch, Hardening)?',
        reference: 'DORA (2022), Art. 9',
        evidence: 'Nachweis: Security-Baseline, Patch-Reports, IAM-Nachweise',
      },
      {
        id: 'DORA_RESILIENCE_MEASURES',
        question:
          'Sind Resilienzmaßnahmen für die KI-relevanten Komponenten definiert (z. B. Redundanz, Failover, Kapazität)?',
        reference: 'DORA (2022), Art. 11–12',
        evidence: 'Nachweis: Architektur, DR-Konzept, Failover-Tests',
      },
      {
        id: 'DORA_BACKUP_RECOVERY_TESTS',
        question:
          'Werden Backup- und Recovery-Verfahren für die KI-relevanten Systeme regelmäßig getestet und dokumentiert?',
        reference: 'DORA (2022), Art. 11–12',
        evidence: 'Nachweis: Testreport, RTO/RPO, Protokolle',
      },
    ],
  },

  DORA_THIRDPARTY_STANDARD: {
    label: 'DORA: IKT-Drittanbieter – Standardanforderungen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 28–30'],
    items: [
      {
        id: 'DORA_VENDOR_REGISTER_RISK',
        question:
          'Werden IKT-Drittanbieter in einem Register geführt und risikobasiert bewertet?',
        reference: 'DORA (2022), Art. 28',
        evidence: 'Nachweis: Vendor-Register, Risk-Rating, Review-Protokolle',
      },
      {
        id: 'DORA_CONTRACT_REGISTER_FIELDS',
        question:
          'Enthält das Vertragsregister Mindestangaben zu Service, Kritikalität, Datenzugriff, Subdienstleistern und Laufzeiten?',
        reference: 'DORA (2022), Art. 28–29',
        evidence: 'Nachweis: Register-Auszug, Datenmodell/Template',
      },
      {
        id: 'DORA_CONTRACT_MIN_CLAUSES',
        question:
          'Enthalten Drittanbieter-Verträge Mindestklauseln zu Sicherheit, Audit-Rechten und Incident-Reporting?',
        reference: 'DORA (2022), Art. 30',
        evidence: 'Nachweis: Vertragsanhang, Musterklauseln, SoW',
      },
      {
        id: 'DORA_EXIT_STRATEGY',
        question:
          'Gibt es eine dokumentierte Exit-Strategie inklusive Datenrückgabe/-löschung und Übergangsplan?',
        reference: 'DORA (2022), Art. 28–30',
        evidence: 'Nachweis: Exit-Plan, Migration-Runbook, Vertrag',
      },
    ],
  },

  DORA_THIRDPARTY_PLUS: {
    label: 'DORA: (Pot.) kritischer IKT-Drittanbieter – Erweiterte Anforderungen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 31–44'],
    items: [
      {
        id: 'DORA_CONCENTRATION_RISK',
        question:
          'Wurde das Konzentrationsrisiko (Single Point of Failure) für den Anbieter bewertet und dokumentiert?',
        reference: 'DORA (2022), Art. 28–29 (i. V. m. Governance)',
        evidence: 'Nachweis: Konzentrationsanalyse, Risikoentscheidung',
      },
      {
        id: 'DORA_CONCENTRATION_MITIGATION',
        question:
          'Gibt es eine dokumentierte Strategie zur Reduktion des Konzentrationsrisikos (z. B. Zweitanbieter/Exit)?',
        reference: 'DORA (2022), Art. 28–30',
        evidence: 'Nachweis: Multi-Vendor-/Exit-Strategie, Management-Freigabe',
      },
      {
        id: 'DORA_SUBCONTRACTORS',
        question:
          'Sind Subdienstleister identifiziert, vertraglich geregelt und werden sie risikobasiert überprüft?',
        reference: 'DORA (2022), Art. 30',
        evidence: 'Nachweis: Subdienstleister-Liste, Vertragsklauseln, Reviews',
      },
      {
        id: 'DORA_VENDOR_MONITORING',
        question:
          'Werden Anbieter anhand definierter KPIs/SLAs regelmäßig überwacht (Security, Verfügbarkeit, Resilienz)?',
        reference: 'DORA (2022), Art. 28–30',
        evidence: 'Nachweis: SLA-Reports, Security-Reports, Review-Protokolle',
      },
      {
        id: 'DORA_SUPERVISORY_READINESS',
        question:
          'Sind interne Prozesse definiert, um Aufsichtsanforderungen zu kritischen IKT-Drittanbietern zu erfüllen (Anfragen, Audits, Auskünfte)?',
        reference: 'DORA (2022), Art. 31–44',
        evidence: 'Nachweis: Prozessbeschreibung, Ansprechpartner, Audit-Playbook',
      },
    ],
  },

  DORA_DATA_PROTECTION_STRONG: {
    label: 'DORA: Datenübermittlung an externe KI – Schutzmaßnahmen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 5–16 (i. V. m. IKT-Kontrollen)'],
    items: [
      {
        id: 'DORA_DATA_CLASS_AND_APPROVAL',
        question:
          'Gibt es eine Datenklassifizierung und eine dokumentierte Freigabe für die Übermittlung an externe KI-Dienste?',
        reference: 'DORA (2022), Art. 6–9',
        evidence: 'Nachweis: Klassifizierungsrichtlinie, Freigabeprotokoll',
      },
      {
        id: 'DORA_ENCRYPTION',
        question:
          'Werden Daten bei Übertragung und Speicherung für externe KI-Dienste verschlüsselt?',
        reference: 'DORA (2022), Art. 9',
        evidence: 'Nachweis: Crypto-Konfiguration, Architektur, Key-Management',
      },
      {
        id: 'DORA_PSEUDONYMIZATION',
        question:
          'Werden sensible Daten vor Übermittlung an externe KI-Dienste pseudonymisiert oder tokenisiert, sofern erforderlich?',
        reference: 'DORA (2022), Art. 9',
        evidence: 'Nachweis: Pseudonymisierungskonzept, Datenflussdiagramm',
      },
      {
        id: 'DORA_DLP_CONTROLS',
        question:
          'Sind DLP-Kontrollen für relevante Kanäle aktiv, um Datenabfluss bei Nutzung externer KI zu verhindern?',
        reference: 'DORA (2022), Art. 9',
        evidence: 'Nachweis: DLP-Policy, Regelsets, Testprotokoll',
      },
      {
        id: 'DORA_CONTRACT_DATA_LOCATION',
        question:
          'Ist Datenlokation oder Hostingregion für externe KI-Dienste vertraglich festgelegt?',
        reference: 'DORA (2022), Art. 30',
        evidence: 'Nachweis: Vertrag/Anhang, Hosting-Addendum',
      },
      {
        id: 'DORA_CONTRACT_DELETION_RETURN',
        question:
          'Sind Datenrückgabe und Löschung nach Vertragsende vertraglich geregelt?',
        reference: 'DORA (2022), Art. 30',
        evidence: 'Nachweis: Vertrag/Anhang, Löschkonzept',
      },
      {
        id: 'DORA_CONTRACT_AUDIT_RIGHTS',
        question:
          'Sind Audit- und Prüfrechte gegenüber dem Anbieter vertraglich geregelt?',
        reference: 'DORA (2022), Art. 30',
        evidence: 'Nachweis: Vertrag/Anhang, Audit-Klausel',
      },
      {
        id: 'DORA_CONTRACT_SUBPROCESSORS',
        question:
          'Sind Subprozessoren transparent benannt und ist deren Einsatz vertraglich geregelt (z. B. Zustimmungspflicht)?',
        reference: 'DORA (2022), Art. 30',
        evidence: 'Nachweis: Subprocessor-Liste, Vertragsklauseln',
      },
    ],
  },

  DORA_MONITORING_AI: {
    label: 'DORA: Modellbetrieb – Monitoring, Change und Kontrollen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 5–16'],
    items: [
      {
        id: 'DORA_MODEL_CHANGE_IMPACT',
        question:
          'Gibt es einen dokumentierten Change-Prozess, der Modelländerungen nur nach Risiko- und Impact-Analyse freigibt?',
        reference: 'DORA (2022), Art. 6–9',
        evidence: 'Nachweis: Change-Policy, Impact-Template, Freigaben',
      },
      {
        id: 'DORA_MONITORING_PERFORMANCE',
        question:
          'Werden Leistungskennzahlen des Modells im Betrieb überwacht und gibt es definierte Schwellenwerte für Eskalation?',
        reference: 'DORA (2022), Art. 9',
        evidence: 'Nachweis: Monitoring-Dashboard, Alert-Regeln',
      },
      {
        id: 'DORA_MONITORING_DRIFT',
        question:
          'Wird Daten- oder Konzeptdrift überwacht und sind Maßnahmen bei Überschreitung von Schwellenwerten definiert?',
        reference: 'DORA (2022), Art. 9',
        evidence: 'Nachweis: Drift-Report, Runbooks, Alerts',
      },
      {
        id: 'DORA_MONITORING_SECURITY',
        question:
          'Gibt es Security-Monitoring für KI-relevante Komponenten (z. B. unautorisierte Zugriffe, Anomalien)?',
        reference: 'DORA (2022), Art. 9',
        evidence: 'Nachweis: SIEM-Use-Cases, Logs, Alerting',
      },
      {
        id: 'DORA_RUNBOOKS_MODEL_INCIDENTS',
        question:
          'Gibt es Runbooks für Modellfehler (z. B. Fehlentscheidungen, Ausfälle) inklusive Eskalationskette?',
        reference: 'DORA (2022), Art. 17',
        evidence: 'Nachweis: Runbooks, On-Call-Plan, Eskalationsmatrix',
      },
      {
        id: 'DORA_RUNBOOKS_CYBER',
        question:
          'Gibt es Runbooks für Cyber- und IKT-Vorfälle in den KI-Komponenten inklusive Eskalationskette?',
        reference: 'DORA (2022), Art. 17',
        evidence: 'Nachweis: IR-Playbooks, Rollen, Übungen',
      },
    ],
  },

  DORA_INCIDENT_MGMT: {
    label: 'DORA: IKT-Vorfallmanagement & Meldeprozesse',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 17–23'],
    items: [
      {
        id: 'DORA_INC_PROCESS',
        question:
          'Gibt es einen dokumentierten Prozess zur Erfassung, Klassifikation und Bearbeitung von IKT-Vorfällen?',
        reference: 'DORA (2022), Art. 17',
        evidence: 'Nachweis: Prozessbeschreibung, Ticket-Workflow, Rollen',
      },
      {
        id: 'DORA_INC_THRESHOLDS',
        question:
          'Sind Kriterien und Schwellenwerte für meldepflichtige IKT-Vorfälle dokumentiert und verbindlich kommuniziert?',
        reference: 'DORA (2022), Art. 18–19',
        evidence: 'Nachweis: Policy, Schulungsnachweis, Kommunikationsmail',
      },
      {
        id: 'DORA_INC_REPORTING',
        question:
          'Gibt es einen dokumentierten Meldeprozess an die zuständige Aufsicht inklusive Fristen, Rollen und Vorlagen?',
        reference: 'DORA (2022), Art. 19–20',
        evidence: 'Nachweis: Meldeprozess, Templates, RACI',
      },
      {
        id: 'DORA_INC_POSTMORTEM',
        question:
          'Werden schwerwiegende IKT-Vorfälle mit Abschlussbericht, Ursachenanalyse und Maßnahmenplan dokumentiert?',
        reference: 'DORA (2022), Art. 19–20',
        evidence: 'Nachweis: Abschlussbericht, RCA, Maßnahmen-Tracker',
      },
    ],
  },

  DORA_TLPT: {
    label: 'DORA: IKT-Resilienztests (inkl. TLPT)',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 24–27'],
    items: [
      {
        id: 'DORA_TLPT_SCOPE_CHECK',
        question:
          'Wurde geprüft, ob das KI-System oder seine Infrastruktur in den Scope fortgeschrittener Resilienztests (z. B. TLPT) fällt?',
        reference: 'DORA (2022), Art. 26',
        evidence: 'Nachweis: Scope-Entscheid, Risikoanalyse',
      },
      {
        id: 'DORA_TEST_PLAN',
        question:
          'Sind Resilienztests für KI-relevante Komponenten (Model Serving, Datenpipeline, Cloud) geplant und terminiert?',
        reference: 'DORA (2022), Art. 24–25',
        evidence: 'Nachweis: Testplan, Kalender/Meilensteine',
      },
      {
        id: 'DORA_TEST_ROLES_COVERAGE',
        question:
          'Sind Rollen, Testabdeckung und Testkriterien für die Resilienztests dokumentiert?',
        reference: 'DORA (2022), Art. 24–25',
        evidence: 'Nachweis: Testkonzept, RACI, Abdeckungsmatrix',
      },
      {
        id: 'DORA_FINDINGS_TRACKING',
        question:
          'Gibt es einen Prozess, der Test-Findings priorisiert, Maßnahmen zuweist und fristgerecht nachverfolgt?',
        reference: 'DORA (2022), Art. 25',
        evidence: 'Nachweis: Findings-Tracker, Remediation-Plan, Statusreports',
      },
    ],
  },

  DORA_THIRDPARTY_DD: {
    label: 'DORA: Drittanbieter – Due Diligence, Verträge und Monitoring',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 28–30, 31–44'],
    items: [
      {
        id: 'DORA_DD_MINIMUM_SCOPE',
        question:
          'Umfasst die Due-Diligence mindestens Security, Resilienz, Subdienstleister und Datenverarbeitung – und ist sie dokumentiert?',
        reference: 'DORA (2022), Art. 28–29',
        evidence: 'Nachweis: DD-Report, Fragebogen, Risikoentscheidung',
      },
      {
        id: 'DORA_CONTRACT_AUDIT_RIGHTS',
        question:
          'Sind Audit- und Prüfrechte gegenüber dem Anbieter vertraglich geregelt?',
        reference: 'DORA (2022), Art. 30',
        evidence: 'Nachweis: Vertrag/Anhang, Audit-Klausel',
      },
      {
        id: 'DORA_CONTRACT_SECURITY_SLA',
        question:
          'Sind Sicherheitsanforderungen (z. B. SLAs/KPIs, Mindeststandards) vertraglich geregelt?',
        reference: 'DORA (2022), Art. 30',
        evidence: 'Nachweis: SLA/Anhang, Security-Addendum',
      },
      {
        id: 'DORA_EXIT_PLAN',
        question:
          'Ist eine Exit-Strategie inklusive Datenmigration und Übergangsbetrieb dokumentiert?',
        reference: 'DORA (2022), Art. 28–30',
        evidence: 'Nachweis: Exit-Plan, Migrations-Runbook, Verantwortliche',
      },
      {
        id: 'DORA_VENDOR_REVIEW_CADENCE',
        question:
          'Werden Drittanbieter risikobasiert regelmäßig anhand definierter KPIs überprüft und neu bewertet?',
        reference: 'DORA (2022), Art. 28–30',
        evidence: 'Nachweis: KPI-Reports, Review-Protokolle, Re-Rating',
      },
    ],
  },

  DORA_BASE_LIGHT: {
    label: 'DORA: IKT-Risikomanagement – Proportionale Baseline',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 5–16 (proportional)'],
    items: [
      {
        id: 'DORA_LIGHT_MIN_CONTROLS',
        question:
          'Sind risikobasierte Mindestkontrollen (z. B. Zugriff, Logging, Backup) definiert und dokumentiert?',
        reference: 'DORA (2022), Art. 6',
        evidence: 'Nachweis: Control-Baseline, Checkliste',
      },
      {
        id: 'DORA_LIGHT_RESPONSIBILITIES',
        question:
          'Sind Verantwortlichkeiten für Betrieb und Sicherheit der KI-relevanten Systeme festgelegt?',
        reference: 'DORA (2022), Art. 5',
        evidence: 'Nachweis: RACI, Rollenbeschreibung',
      },
      {
        id: 'DORA_LIGHT_LOGGING',
        question:
          'Ist Logging für die KI-relevanten Systeme aktiviert und wird es gemäß Retention-Vorgaben aufbewahrt?',
        reference: 'DORA (2022), Art. 9',
        evidence: 'Nachweis: Log-Konfiguration, Retention, Beispiel-Logs',
      },
    ],
  },
};
// =======================================================
// -------------------- Decision Tree --------------------
// =======================================================

export const CONSISTENCY_LOCKS = {
  AI_HIGH_RISK: 'AI_HIGH_RISK',
};

export const decisionTree = {
  // ===================================================
  // -------------------- EU AI Act --------------------
  // ===================================================
  A1: {
    id: 'A1',
    type: 'question',
    label: 'Handelt es sich um ein KI-System nach Art. 3 EU AI Act?',
    yes: 'A2',
    no: 'A0',
    info:
      'Hier wird geprüft, ob das betrachtete System unter die Definition eines KI-Systems fällt. ' +
      'Nur wenn dies bejaht wird, greifen die weiteren Pflichten des EU AI Act.',
    examples: [
      'Ein Machine-Learning-Modell, das Kreditrisiken automatisiert bewertet.',
      'Ein statisches, rein regelbasiertes System ohne Lern- oder Inferenzlogik.',
      'Ein externer LLM-/Foundation-Model-Service, der in Prozesse eingebunden wird.',
    ],
  },

  A0: {
    id: 'A0',
    type: 'leaf',
    label: 'Kein KI-System → EU AI Act nicht anwendbar.',
    obligations: ['AI_ACT_NOT_APPLICABLE'],
    next: 'END',
    info:
      'Wenn das System nicht unter die Definition eines KI-Systems fällt, gelten die spezifischen EU-AI-Act-Pflichten nicht. ' +
      'DORA- und interne Governance-/Security-Anforderungen können dennoch relevant sein.',
    examples: [
      'Reine Datenvisualisierung ohne KI-Logik.',
      'Klassisches Workflow-Tool ohne ML/AI-Komponente.',
    ],
  },

  A2: {
    id: 'A2',
    type: 'question',
    label: 'Liegt eine potenziell verbotene Praxis nach EU AI Act vor?',
    yes: 'A2_ja',
    no: 'A3',
    info:
      'Hier wird geprüft, ob das KI-System in eine Kategorie fällt, die nach EU AI Act grundsätzlich unzulässig ist. ' +
      'Bei verbotenen Praktiken ist der Einsatz grundsätzlich nicht erlaubt.',
    examples: [
      'Systeme, die Menschen verdeckt manipulieren, um Entscheidungen zu beeinflussen.',
      'Bestimmte Social-Scoring-Konstellationen.',
    ],
  },

  A2_ja: {
    id: 'A2_ja',
    type: 'leaf',
    label: 'Verbotene Praxis → Nutzung untersagen und Eskalation auslösen.',
    obligations: ['AI_PROHIBITED'],
    next: 'G_AI_PROHIBITED_REVIEW',
    info:
      'Bei verbotenen Praktiken darf das System grundsätzlich nicht betrieben werden. ' +
      'Es sind Stop-Maßnahmen und eine formale Eskalation erforderlich.',
    examples: [
      'Pilot wird gestoppt und aus Produktionsumgebungen entfernt.',
      'Übergabe an Legal & Compliance zur Abbruch-/Re-Design-Entscheidung.',
    ],
  },

  A3: {
    id: 'A3',
    type: 'question',
    label: 'Ist das KI-System als Hochrisiko-KI nach EU AI Act einzustufen (Verwendungszweck/Anhang)?',
    yes: 'A3_HR',
    no: 'A3_NON_HR',
    info:
      'Hier wird geprüft, ob eine Hochrisiko-Klassifikation greift (z. B. Annex-Fälle wie Kreditwürdigkeitsprüfungen). ' +
      'Das Ergebnis steuert, welche Pflichtenpakete gelten.',
    examples: [
      'Kreditwürdigkeitsbewertung zur Vergabe von Verbraucherkrediten.',
      'Automatisierte Bewerbervorauswahl.',
      'Assistenzsystem ohne Entscheidungswirkung.',
    ],
  },

  A3_HR: {
    id: 'A3_HR',
    type: 'leaf',
    label: 'Hochrisiko-KI → Hochrisiko-Pflichten anwenden.',
    obligations: ['AI_HR_PROVIDER_OR_DEPLOYER', 'AI_CONFORMITY_AND_DOC', 'AI_REGISTRATION_AND_CE'],
    next: 'G_AI_HR_LOCK',
    info:
      'Das System ist als Hochrisiko-KI eingestuft. Damit greifen die umfangreichen Pflichten (u. a. Risiko-, Daten- und Governance-Anforderungen).',
    examples: [
      'Scoring-Modell zur (teil-)automatisierten Kreditentscheidung.',
      'Modelle mit erheblicher Wirkung auf Zugang zu Finanzprodukten.',
    ],
  },

  A3_NON_HR: {
    id: 'A3_NON_HR',
    type: 'leaf',
    label: 'Kein Hochrisiko → Transparenz und Governance-Baseline prüfen.',
    obligations: ['AI_LIMITED_OR_MINIMAL', 'AI_TRANSPARENCY_ART_50'],
    next: 'D0',
    info:
      'Wenn keine Hochrisiko-Klassifikation greift, können dennoch Transparenzpflichten und interne Governance-Anforderungen relevant sein.',
    examples: [
      'Interner KI-Assistent ohne unmittelbaren Einfluss auf Kundentransaktionen.',
      'Wissenssuche/Content-Summarization ohne Entscheidungsautomatisierung.',
    ],
  },

  // -------------------- EU AI Act: Gates / Review --------------------
  G_AI_HR_LOCK: {
    id: 'G_AI_HR_LOCK',
    type: 'question',
    regulation: 'EU AI Act',
    label: 'Plausibilitätscheck: Soll die Hochrisiko-Einstufung als verbindlich dokumentiert werden?',
    yes: 'D0',
    no: 'W_AI_HR_REVIEW',
    info:
      'Dieser Gate-Knoten stellt sicher, dass eine Hochrisiko-Einstufung nicht ungeprüft relativiert wird.',
    examples:
      'Bei Unsicherheit: Review/Eskalation (Legal/Compliance/Risk/ISB) und Begründung dokumentieren.',
  },

  G_AI_PROHIBITED_REVIEW: {
    id: 'G_AI_PROHIBITED_REVIEW',
    type: 'question',
    regulation: 'EU AI Act',
    label: 'Review-Gate: Wurde der Einsatz gestoppt und die Eskalation an Legal/Compliance dokumentiert?',
    yes: 'END',
    no: 'W_AI_PROHIBITED_ESCALATION',
    info:
      'Sichert ab, dass verbotene Praktiken nicht ohne formale Stop-/Eskalationsentscheidung weiterverfolgt werden.',
    examples:
      'No-Go-Entscheid, Case-ID, Maßnahmenplan, Ablage der Entscheidungsdokumentation.',
  },

  W_AI_HR_REVIEW: {
    id: 'W_AI_HR_REVIEW',
    type: 'leaf',
    label: 'Warnung: Hochrisiko-Einstufung unklar → Review und Dokumentation erforderlich.',
    obligations: [],
    next: 'END',
    info:
      'Dieser Knoten fordert eine formale Klärung, bevor das Vorhaben weitergeführt wird.',
    examples:
      'Review-Protokoll, Klassifikationsbegründung, ggf. externe Beratung.',
  },

  W_AI_CONTRADICTION: {
    id: 'W_AI_CONTRADICTION',
    type: 'leaf',
    label: 'Widerspruch erkannt → Review/Eskalation erforderlich.',
    obligations: [],
    next: 'END',
    info:
      'Inkonsistente Antworten sollten nicht zu stillen Annahmen oder impliziten Herabstufungen führen.',
    examples:
      'Pfad prüfen, Entscheidungen revalidieren, Governance-Gremium einbinden.',
  },

  W_AI_PROHIBITED_ESCALATION: {
    id: 'W_AI_PROHIBITED_ESCALATION',
    type: 'leaf',
    label: 'Eskalation erforderlich: Verbotene Praxis → Stop/Eskalation noch nicht nachgewiesen.',
    obligations: [],
    next: 'END',
    info:
      'Ohne dokumentierte Stop- und Eskalationsmaßnahmen darf das Vorhaben nicht fortgesetzt werden.',
    examples:
      'Freigabevermerk fehlt, Ticket/Case-ID fehlt, Entscheidungsgremium nicht erfolgt.',
  },

  // ==============================================
  // -------------------- DORA --------------------
  // ==============================================
  D0: {
    id: 'D0',
    type: 'question',
    label: 'DORA-Prüfung starten?',
    yes: 'B1',
    no: 'END',
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
    label: 'Unterstützt das KI-System eine kritische oder wichtige Funktion?',
    yes: 'B2',
    no: 'B3',
    info:
      'DDiese Frage klärt, ob das KI-System in Prozessen eingesetzt wird, die für das Unternehmen kritisch oder wichtig sind. ' +
      'Davon hängt ab, wie streng die IKT-Risikomanagement- und Resilienzanforderungen aus DORA ausgestaltet werden.',
    examples: [
      'Kritisch: Zahlungsverkehr, Kreditvergabe, Risk-Steuerung.',
      'Nicht-kritisch: interne Wissenssuche ohne Kernprozesswirkung.',
    ],
  },

  B2: {
    id: 'B2',
    type: 'question',
    label: 'Hat das KI-System direkten Einfluss auf operative oder finanzielle Entscheidungen?',
    yes: 'B2_H',
    no: 'B2_M',
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
    label: 'Hohe Kritikalität → DORA-Baseline + Resilienztests.',
    obligations: ['DORA_BASE', 'DORA_TLPT'],
    next: 'B4',
    info:
      'Das System hat hohe Kritikalität und direkten Einfluss auf Entscheidungen. ' +
      'Es gilt mindestens die DORA-Baseline plus zusätzliche interne Kontrollen und Überwachung.',
    examples: [
      'Kreditentscheidungs-KI mit unmittelbarer Umsetzung im Kernbankensystem.',
      'Intraday-Liquiditätssteuerung, bei der KI-Vorschläge automatisiert ausgeführt werden.',
    ],
  },

  B2_M: {
    id: 'B2_M',
    type: 'leaf',
    label: 'Mittlere Kritikalität → proportionale DORA-Baseline.',
    obligations: ['DORA_BASE_LIGHT'],
    next: 'B4',
    info:
      'Das System ist für wichtige Funktionen relevant, trifft aber keine vollautomatischen Entscheidungen. ' +
      'Die DORA-Baseline kann proportional und risikoangemessen umgesetzt werden.',
    examples: [
      'Scoring-Modell, dessen Ergebnisse durch Sachbearbeitende regelmäßig plausibilisiert werden.',
      'Monitoring-Dashboards, die Warnungen liefern, ohne automatische Aktionen auszulösen.',
    ],
  },

  B3: {
    id: 'B3',
    type: 'question',
    label: 'Wird KI nur unterstützend eingesetzt (ohne kritische Wirkung)?',
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
    label: 'Nicht-kritische KI-Unterstützung → proportionale DORA-Baseline.',
    obligations: ['DORA_BASE_LIGHT'],
    next: 'B4',
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
    label: 'Kritikalität unklar → konservative Einstufung und Dokumentation.',
    obligations: ['DORA_BASE', 'DORA_TLPT'],
    next: 'B4',
    info:
      'Wenn die Kritikalität unklar ist, sollte eine konservative Einstufung gewählt und sauber dokumentiert werden. ' +
      'Die DORA-Anforderungen werden eher strenger als zu lax ausgelegt.',
    examples: [
      'Neuartige KI-Anwendung, deren Auswirkung auf den Prozess noch nicht abschließend verstanden ist.',
      'Pilotprojekte mit begrenzter, aber potenziell wachsender Bedeutung.',
    ],
  },

  B4: {
    id: 'B4',
    type: 'question',
    label: 'Wird das System (ganz oder teilweise) von einem externen IKT-Dienstleister bereitgestellt?',
    yes: 'B5',
    no: 'B6',
    info:
      'Diese Frage klärt, ob das KI-System als externer Service (z. B. Cloud-/KI-Plattform) bezogen wird. ' +
      'Das bestimmt, welche DORA-Anforderungen an IKT-Drittanbieter gelten.',
    examples: [
      'Nutzung eines externen LLM-API-Services oder einer Hyperscaler-KI-Plattform.',
      'Komplett intern betriebenes Modell ohne externe IKT-Dienstleister (Antwort „Nein“).',
    ],
  },

  B5: {
    id: 'B5',
    type: 'question',
    label: 'Ist der Dienstleister potenziell ein (kritischer) IKT-Drittanbieter (z. B. Hyperscaler/KI-Plattform)?',
    yes: 'B5_C',
    no: 'B5_N',
    info:
      'Hier wird unterschieden, ob es sich um einen potenziell kritischen IKT-Drittanbieter handelt ' +
      '(z. B. große Cloud-Plattformen oder zentrale KI-Provider), auf die das Institut stark angewiesen ist.',
    examples: [
      'Einsatz eines globalen Hyperscalers als zentrale KI-Plattform.',
      'Spezialisierter Drittanbieter, der für einen kritischen KI-Service Single Point of Failure wäre.',
    ],
  },

  B5_C: {
    id: 'B5_C',
    type: 'leaf',
    label: 'Pot. kritischer IKT-Drittanbieter → erweiterte Drittanbieterpflichten.',
    obligations: ['DORA_THIRDPARTY_PLUS', 'DORA_THIRDPARTY_DD'],
    next: 'B7',
    info:
      'Bei (potenziell) kritischen IKT-Drittanbietern gelten erweiterte Anforderungen aus DORA, ' +
      'insbesondere zu Monitoring, Konzentrationsrisiken, Exit-Strategien und ggf. Aufsichtsinteraktion.',
    examples: [
      'Ein großer KI-Dienstleister, über den ein wesentlicher Teil der Kernprozesse läuft.',
      'Ein Cloud-Anbieter, der zentrale Datenhaltung und KI-Ausführung bündelt.',
    ],
  },

  B5_N: {
    id: 'B5_N',
    type: 'leaf',
    label: 'Nicht-kritischer IKT-Drittanbieter → Standardpflichten.',
    obligations: ['DORA_THIRDPARTY_STANDARD', 'DORA_THIRDPARTY_DD'],
    next: 'B7',
    info:
      'Der IKT-Dienstleister wird nicht als kritisch eingestuft. Es gelten die „normalen“ DORA-Anforderungen ' +
      'für IKT-Drittanbieter, proportional zum Risiko.',
    examples: [
      'Externe KI-Komponente für nicht-entscheidungsrelevante Auswertungen.',
      'Dienstleister für vorverarbeitete Datenfeeds ohne direkten Kundenimpact.',
    ],
  },

  B6: {
    id: 'B6',
    type: 'leaf',
    label: 'Kein externer IKT-Dienstleister → interne Verantwortung (DORA-Baseline).',
    obligations: ['DORA_BASE'],
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
    label: 'Werden produktive Kunden-, Transaktions- oder andere sensible Daten an externe KI-Dienste übermittelt?',
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
    label: 'Sensible Daten → Schutzmaßnahmen für externe KI.',
    obligations: ['DORA_DATA_PROTECTION_STRONG'],
    next: 'B8',
    info:
      'Werden produktive oder sensible Daten an externe KI übertragen, sind starke Schutzmaßnahmen erforderlich: ' +
      'Datenklassifizierung, Verschlüsselung, DLP, Logging und klare vertragliche Regelungen.',
    examples: [
      'Übermittlung von Transaktionsdaten an eine externe Anomalie-Erkennung.',
      'Verarbeitung von KYC-Daten über ein externes KI-Modul.',
    ],
  },

  B7_N: {
    id: 'B7_N',
    type: 'leaf',
    label: 'Keine sensiblen Daten → proportionale Baseline.',
    obligations: ['DORA_BASE_LIGHT'],
    next: 'B8',
    info:
      'Wenn keine produktiven oder kritischen Daten an externe KI übermittelt werden, reichen in der Regel ' +
      'Standard-Sicherheitsmaßnahmen aus. Eine Dokumentation der Annahmen bleibt dennoch wichtig.',
    examples: [
      'Nutzung rein synthetischer Daten für Experimente.',
      'Ausschließliche Offline-Tests ohne Live-Kundendaten.',
    ],
  },

  B8: {
    id: 'B8',
    type: 'question',
    label: 'Verändert sich das Modell im Betrieb (z. B. Retraining, Finetuning oder Online-Learning)?',
    yes: 'B8_D',
    no: 'B8_S',
    info:
      'Hier wird geprüft, ob das Modell sich im Betrieb verändert (dynamisches Modell) oder statisch bleibt. ' +
      'Dynamische Modelle erfordern stärkere Change- und Monitoringprozesse.',
    examples: [
      'Regelmäßiges Retraining mit neuen Daten im Monatszyklus.',
      'Online-Learning, das Gewichte im laufenden Betrieb anpasst.',
      'Statische Modelle mit seltenen, klar geplanten Releases (Antwort „Nein“).',
    ],
  },

  B8_D: {
    id: 'B8_D',
    type: 'leaf',
    label: 'Dynamisches Modell → Monitoring/Change + Incident Management.',
    obligations: ['DORA_MONITORING_AI', 'DORA_INCIDENT_MGMT'],
    next: 'END',
    info:
      'Bei dynamischen Modellen sind strukturierte Change-, Freigabe- und Monitoringprozesse zwingend: ' +
      'Drift-Überwachung, Performance-Checks, Dokumentation von Änderungen und klare Eskalationswege.',
    examples: [
      'Ein Fraud-Detection-Modell, das regelmäßig mit aktuellen Transaktionsdaten nachtrainiert wird.',
      'Ein Empfehlungssystem, das kontinuierlich Online-Learning nutzt.',
    ],
  },

  B8_S: {
    id: 'B8_S',
    type: 'leaf',
    label: 'Statisches Modell → proportionale Baseline + Incident Management.',
    obligations: ['DORA_BASE_LIGHT', 'DORA_INCIDENT_MGMT'],
    next: 'END',
    info:
      'Statische Modelle erfordern zwar ebenfalls Change- und Freigabeprozesse, diese können aber ' +
      'proportional und weniger häufig ausgestaltet werden.',
    examples: [
      'Ein einmal trainiertes Scorecard-Modell, das nur bei Bedarf (z. B. jährlich) aktualisiert wird.',
      'Ein statisches Regel-/ML-Modell mit klar definierten Release-Zyklen.',
    ],
  },

  END: {
    id: 'END',
    type: 'leaf',
    label: 'Analyse beendet.',
    obligations: [],
  },
};


/**
 * Ableitung von Locks/Flags aus dem bisherigen Pfad/Antworten.
 * - High-Risk wird „gelockt“, sobald G_AI_HR_LOCK = yes beantwortet wurde.
 */
export function deriveConsistencyLocks({ answers, pathIds }) {
  const locks = new Set();

  if (answers?.G_AI_HR_LOCK === 'yes') {
    locks.add(CONSISTENCY_LOCKS.AI_HIGH_RISK);
  }

  // Optional: auch direkt aus A3=yes locken (strenger):
  // if (answers?.A3 === 'yes') locks.add(CONSISTENCY_LOCKS.AI_HIGH_RISK);

  void pathIds;
  return locks;
}

/**
 * Globale Validierungsregeln pro Transition.
 * Call this BEFORE you commit a nextId to path.
 *
 * Returns:
 *  - { nextId } normal
 *  - { nextId: 'W_AI_CONTRADICTION' } if inconsistent
 */
export function validateNextNode({ currentId, answer, nextId, answers, pathIds }) {
  const locks = deriveConsistencyLocks({ answers, pathIds });

  // Rule 1: Wenn High-Risk gelockt, darf nicht in Non-HR Pfade „entschärft“ werden.
  // Konkreter Konflikt: A3=no (führt zu A3_NON_HR) nachdem HR-Lock gesetzt wurde.
  if (locks.has(CONSISTENCY_LOCKS.AI_HIGH_RISK)) {
    const isTryingToDeescalate = (currentId === 'A3' && answer === 'no') || nextId === 'A3_NON_HR';

    if (isTryingToDeescalate) {
      return { nextId: 'W_AI_CONTRADICTION' };
    }
  }

  // Rule 2: Verbotene Praxis darf nicht ohne Review-Gate „weiter“ führen
  if (currentId === 'A2' && answer === 'yes' && nextId !== 'A2_ja') {
    return { nextId: 'W_AI_PROHIBITED_ESCALATION' };
  }

  return { nextId };
}

// -------------------- Requirements API --------------------
export function getRequirementChain(leafId) {
  const def = decisionTree[leafId];
  const reqs = [];
  const summaryId = `${leafId}__req__summary`;

  if (!def?.obligations?.length) return { reqs, summaryId };

  for (const pkgKey of def.obligations) {
    const pkg = obligationsCatalog[pkgKey];
    if (!pkg?.items?.length) continue;

    pkg.items.forEach((item, idx) => {
      const isObject = item && typeof item === 'object';

      reqs.push({
        id: `${leafId}__req__${pkgKey}__${idx}`,
        question: isObject ? item.question : String(item),
        pkgKey,
        pkgLabel: pkg.label || pkgKey,
        articles: pkg.articles || [],
        leafId,
      });
    });
  }

  return { reqs, summaryId };
}

export function getNextInRequirementChain(currentReqId) {
  const [leafId] = currentReqId.split('__req__');
  const { reqs, summaryId } = getRequirementChain(leafId);
  const idx = reqs.findIndex((r) => r.id === currentReqId);
  const nextReqId = idx >= 0 && idx + 1 < reqs.length ? reqs[idx + 1].id : undefined;
  return { leafId, nextReqId, summaryId };
}

