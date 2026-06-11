/* ==========================================================================
   PulseCore EHR UX - Application Engine & Logic
   ========================================================================== */

// --- Global Application State ---
const state = {
  patients: [
    {
      id: "PX-10294",
      firstName: "Jane",
      lastName: "Doe",
      dob: "1987-11-04",
      gender: "Female",
      room: "ICU-302",
      department: "ICU",
      doctor: "Dr. Sarah Vance",
      triage: "Stable",
      allergies: ["Penicillin", "NSAIDs"],
      emergencyContact: "John Doe - 555-0129",
      history: "Diagnosed with persistent hypertension in 2021. Underwent laparoscopic cholecystectomy in 2023.",
      baselineVitals: { hr: 72, bpSys: 118, bpDia: 76, spo2: 98, temp: 98.6 },
      currentVitals: { hr: 72, bpSys: 118, bpDia: 76, spo2: 98, temp: 98.6 },
      prescriptions: [
        { medication: "Lisinopril", dosage: "10mg", frequency: "Daily", route: "PO", status: "Active" },
        { medication: "Acetaminophen", dosage: "500mg", frequency: "Q6H PRN", route: "PO", status: "Active" }
      ],
      encounters: [
        { time: "08:30 AM", title: "Shift Handover", note: "Patient reports rested sleep, chest pain resolved. Core telemetry vitals stabilized." },
        { time: "Yesterday", title: "Intensive Care Admission", note: "Admitted following mild chest pressure. Baseline ECG showed transient sinus tachycardia." }
      ],
      labs: [
        { panel: "Troponin I", value: "< 0.04 ng/mL", status: "Normal" },
        { panel: "Potassium (K+)", value: "4.2 mEq/L", status: "Normal" },
        { panel: "Hemoglobin", value: "13.8 g/dL", status: "Normal" }
      ],
      simulationMode: "normal" // normal | tachycardia | hypoxia
    },
    {
      id: "PX-88231",
      firstName: "Robert",
      lastName: "Miller",
      dob: "1964-05-18",
      gender: "Male",
      room: "ER-108",
      department: "ER",
      doctor: "Dr. Robert Chen",
      triage: "Unstable",
      allergies: ["NKA (No Known Allergies)"],
      emergencyContact: "Grace Miller - 555-0143",
      history: "Chronic Obstructive Pulmonary Disease (COPD) since 2018. Former smoker (30 pack-years).",
      baselineVitals: { hr: 94, bpSys: 132, bpDia: 84, spo2: 91, temp: 99.1 },
      currentVitals: { hr: 94, bpSys: 132, bpDia: 84, spo2: 91, temp: 99.1 },
      prescriptions: [
        { medication: "Albuterol Inhaler", dosage: "2 Puffs", frequency: "Q4H PRN", route: "Inhalation", status: "Active" },
        { medication: "Methylprednisolone", dosage: "40mg", frequency: "Q12H", route: "IV", status: "Active" }
      ],
      encounters: [
        { time: "09:15 AM", title: "Respiratory Assessment", note: "Mild expiratory wheeze. Oxygen supplement raised to 3L nasal cannula. SpO2 monitoring crucial." },
        { time: "07:00 AM", title: "Emergency Room Intake", note: "Presented with acute shortness of breath and productive cough. Lung sounds diminished globally." }
      ],
      labs: [
        { panel: "pH (Arterial Blood)", value: "7.34", status: "Borderline Low" },
        { panel: "pCO2", value: "48 mmHg", status: "Elevated" },
        { panel: "pO2", value: "62 mmHg", status: "Low" }
      ],
      simulationMode: "normal"
    },
    {
      id: "PX-44923",
      firstName: "Arthur",
      lastName: "Pendragon",
      dob: "1951-08-21",
      gender: "Male",
      room: "Cardio-204",
      department: "Cardiology",
      doctor: "Dr. Elena Rostova",
      triage: "Critical",
      allergies: ["Sulfa Drugs"],
      emergencyContact: "Gwen Pendragon - 555-0182",
      history: "Coronary Artery Bypass Graft (CABG x3) in 2019. Heart Failure with Preserved Ejection Fraction (HFpEF).",
      baselineVitals: { hr: 145, bpSys: 96, bpDia: 58, spo2: 93, temp: 98.4 },
      currentVitals: { hr: 145, bpSys: 96, bpDia: 58, spo2: 93, temp: 98.4 },
      prescriptions: [
        { medication: "Amiodarone Infusion", dosage: "1mg/min", frequency: "Continuous", route: "IV", status: "Active" },
        { medication: "Furosemide (Lasix)", dosage: "40mg", frequency: "Daily", route: "IV", status: "Active" },
        { medication: "Carvedilol", dosage: "6.25mg", frequency: "Q12H", route: "PO", status: "Held" }
      ],
      encounters: [
        { time: "10:00 AM", title: "Cardiology Consultation", note: "Patient experiencing sustained runs of wide-complex tachycardia. Amiodarone started. Prepared for bedside cardioversion if hemodynamic compromise deepens." }
      ],
      labs: [
        { panel: "BNP", value: "850 pg/mL", status: "Severely Elevated" },
        { panel: "Magnesium", value: "1.6 mEq/L", status: "Low" },
        { panel: "Creatinine", value: "1.4 mg/dL", status: "Elevated" }
      ],
      simulationMode: "tachycardia"
    },
    {
      id: "PX-30281",
      firstName: "Chloe",
      lastName: "Bennett",
      dob: "1992-02-12",
      gender: "Female",
      room: "GenMed-412",
      department: "General Medicine",
      doctor: "Dr. Marcus Aurelius",
      triage: "Stable",
      allergies: ["Codeine"],
      emergencyContact: "Thomas Bennett - 555-0155",
      history: "No significant clinical history. Left knee osteoarthrosis.",
      baselineVitals: { hr: 66, bpSys: 118, bpDia: 78, spo2: 99, temp: 98.9 },
      currentVitals: { hr: 66, bpSys: 118, bpDia: 78, spo2: 99, temp: 98.9 },
      prescriptions: [
        { medication: "Enoxaparin (Lovenox)", dosage: "40mg", frequency: "Daily", route: "SubQ", status: "Active" },
        { medication: "Oxycodone", dosage: "5mg", frequency: "Q4H PRN", route: "PO", status: "Active" }
      ],
      encounters: [
        { time: "09:00 AM", title: "Post-Op Ortho Round", note: "Patient ambulating well with physical therapy guidance. Wound site clean, dry, and intact. Vital signs stable." }
      ],
      labs: [
        { panel: "WBC Count", value: "8.4 x10^3/uL", status: "Normal" },
        { panel: "Platelet Count", value: "245 x10^3/uL", status: "Normal" }
      ],
      simulationMode: "normal"
    }
  ],
  activePatientId: null,
  activeAlarms: [],
  preferences: {
    theme: "dark",
    fontSize: "medium",
    dyslexicMode: false,
    audioAlarms: true
  },
  currentTab: "dashboard",
  modalStep: 1
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  loadStateFromStorage();
  applyPreferences();
  bindEvents();
  
  // Set default active patient
  if (state.patients.length > 0) {
    state.activePatientId = state.patients[0].id;
  }
  
  // Start continuous simulation loops
  startTelemetrySimulation();
  startECGChart();

  // Initial UI Render
  renderApp();
});

// --- Dynamic Live Clock ---
function initClock() {
  const timeEl = document.getElementById("live-time");
  const dateEl = document.getElementById("live-date");
  
  function updateTime() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    dateEl.textContent = now.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  }
  
  updateTime();
  setInterval(updateTime, 1000);
}

// --- Persistence Helpers ---
function savePreferences() {
  localStorage.setItem("pulsecore_pref", JSON.stringify(state.preferences));
}

function loadStateFromStorage() {
  const savedPref = localStorage.getItem("pulsecore_pref");
  if (savedPref) {
    state.preferences = JSON.parse(savedPref);
  }
}

function applyPreferences() {
  const html = document.documentElement;
  
  // Theme
  html.setAttribute("data-theme", state.preferences.theme);
  document.querySelectorAll(".theme-opt").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-theme") === state.preferences.theme);
  });
  
  // Font Size
  html.setAttribute("data-font-size", state.preferences.fontSize);
  document.querySelectorAll(".font-opt").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-size") === state.preferences.fontSize);
  });

  // Dyslexic Mode
  document.body.classList.toggle("dyslexic-mode", state.preferences.dyslexicMode);
  document.getElementById("btn-toggle-dyslexic").setAttribute("aria-pressed", state.preferences.dyslexicMode);

  // Sound Toggles
  const soundOn = document.getElementById("sound-icon-on");
  const soundOff = document.getElementById("sound-icon-off");
  if (state.preferences.audioAlarms) {
    soundOn.classList.remove("hidden");
    soundOff.classList.add("hidden");
  } else {
    soundOn.classList.add("hidden");
    soundOff.classList.remove("hidden");
  }
}

// --- Event Binding ---
function bindEvents() {
  // Navigation
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
      btn.classList.add("active");
      
      const tab = btn.getAttribute("data-tab");
      switchTab(tab);
    });
  });

  // Global Search
  document.getElementById("global-search").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    
    // Filter queue
    document.getElementById("triage-search").value = e.target.value;
    filterTriageQueue(query);
    
    // Filter directory table
    filterDirectoryTable(query);
  });

  // Triage Search
  document.getElementById("triage-search").addEventListener("input", (e) => {
    filterTriageQueue(e.target.value.toLowerCase());
  });

  // Triage Chips Filters
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filterTriageQueue(document.getElementById("triage-search").value.toLowerCase());
    });
  });

  // Accessibility Panel Toggle
  const accBtn = document.getElementById("btn-accessibility-toggle");
  const accPanel = document.getElementById("accessibility-panel");
  
  accBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const active = accPanel.classList.toggle("active");
    accBtn.setAttribute("aria-expanded", active);
    document.getElementById("alerts-dropdown").classList.remove("active");
  });

  document.getElementById("btn-close-acc").addEventListener("click", () => {
    accPanel.classList.remove("active");
    accBtn.setAttribute("aria-expanded", "false");
  });

  // Alerts Panel Toggle
  const alertsBtn = document.getElementById("btn-alerts-trigger");
  const alertsPanel = document.getElementById("alerts-dropdown");

  alertsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const active = alertsPanel.classList.toggle("active");
    alertsBtn.setAttribute("aria-expanded", active);
    accPanel.classList.remove("active");
  });

  // Click outside to close overlays
  document.addEventListener("click", (e) => {
    if (!accPanel.contains(e.target) && e.target !== accBtn) {
      accPanel.classList.remove("active");
      accBtn.setAttribute("aria-expanded", "false");
    }
    if (!alertsPanel.contains(e.target) && e.target !== alertsBtn) {
      alertsPanel.classList.remove("active");
      alertsBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Theme Picker Actions
  document.querySelectorAll(".theme-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      state.preferences.theme = btn.getAttribute("data-theme");
      savePreferences();
      applyPreferences();
    });
  });

  // Font Size Picker Actions
  document.querySelectorAll(".font-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      state.preferences.fontSize = btn.getAttribute("data-size");
      savePreferences();
      applyPreferences();
    });
  });

  // Dyslexic Mode Toggle
  document.getElementById("btn-toggle-dyslexic").addEventListener("click", () => {
    state.preferences.dyslexicMode = !state.preferences.dyslexicMode;
    savePreferences();
    applyPreferences();
  });

  // Alarm Mute Toggle
  document.getElementById("btn-audio-toggle").addEventListener("click", () => {
    state.preferences.audioAlarms = !state.preferences.audioAlarms;
    savePreferences();
    applyPreferences();
  });

  // Clear Non-Critical Alerts
  document.getElementById("btn-clear-alerts").addEventListener("click", () => {
    state.activeAlarms = state.activeAlarms.filter(a => a.priority === "Critical");
    renderAlertCenter();
  });

  // Detail Sub-tabs
  document.querySelectorAll(".tab-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      document.querySelectorAll(".tab-trigger").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      
      trigger.classList.add("active");
      const targetId = `panel-${trigger.getAttribute("data-tab-content")}`;
      document.getElementById(targetId).classList.add("active");
    });
  });

  // Quick Add Clinical Note
  document.getElementById("btn-add-note").addEventListener("click", addClinicalNote);
  document.getElementById("input-timeline-note").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addClinicalNote();
  });

  // Quick Add Prescription
  document.getElementById("btn-add-prescription").addEventListener("click", addPrescription);

  // Directory Sorting & Filtering
  document.getElementById("dir-dept-filter").addEventListener("change", applyDirectoryFilters);
  document.getElementById("dir-severity-filter").addEventListener("change", applyDirectoryFilters);

  // Simulation Controls in Intervention panel
  document.getElementById("trigger-tachycardia").addEventListener("click", () => triggerSimulation("tachycardia"));
  document.getElementById("trigger-hypoxia").addEventListener("click", () => triggerSimulation("hypoxia"));
  document.getElementById("trigger-stabilize").addEventListener("click", () => triggerSimulation("normal"));
  document.getElementById("trigger-discharge").addEventListener("click", triggerDischarge);

  // Admission Modal Actions
  const modal = document.getElementById("admission-modal");
  document.getElementById("btn-open-admission").addEventListener("click", openAdmissionWizard);
  document.getElementById("btn-close-admission").addEventListener("click", closeAdmissionWizard);
  
  // Wizard Navigation
  document.getElementById("btn-wizard-prev").addEventListener("click", prevWizardStep);
  document.getElementById("btn-wizard-next").addEventListener("click", nextWizardStep);
  document.getElementById("admission-form").addEventListener("submit", handleAdmissionSubmit);
}

// --- Views Tab Router ---
function switchTab(tabName) {
  state.currentTab = tabName;
  document.querySelectorAll(".app-view").forEach(view => view.classList.remove("active"));
  
  let headerTitle = "Clinical Dashboard";
  
  if (tabName === "dashboard") {
    document.getElementById("view-dashboard").classList.add("active");
    headerTitle = "Clinical Dashboard";
  } else if (tabName === "patients") {
    document.getElementById("view-patients").classList.add("active");
    headerTitle = "Master Patient Directory";
    renderDirectoryTable();
  } else if (tabName === "alerts-hub") {
    document.getElementById("view-alerts-hub").classList.add("active");
    headerTitle = "Central Telemetry Monitor";
    renderTelemetryHub();
  }

  document.getElementById("page-title-display").textContent = headerTitle;
}

// --- Dynamic Content Render Pipeline ---
function renderApp() {
  renderStats();
  renderTriageQueue();
  renderPatientInspector();
  renderAlertCenter();
}

function renderStats() {
  const maxBeds = 24;
  const occupiedBeds = state.patients.length;
  const pct = Math.round((occupiedBeds / maxBeds) * 100);

  // Bed stats
  document.getElementById("stat-beds").textContent = `${occupiedBeds} / ${maxBeds}`;
  document.getElementById("stat-beds-pct").textContent = `${pct}% Occupancy Rate`;
  document.getElementById("progress-beds").style.width = `${pct}%`;

  // Critical Alarms stats
  const criticalCount = state.activeAlarms.filter(a => a.priority === "Critical").length;
  const criticalEl = document.getElementById("stat-critical");
  criticalEl.textContent = criticalCount;
  
  const critBar = document.getElementById("progress-critical");
  if (criticalCount > 0) {
    criticalEl.className = "metric-value text-danger pulse";
    critBar.style.width = "100%";
    critBar.className = "progress-fill danger pulse";
  } else {
    criticalEl.className = "metric-value";
    critBar.style.width = "0%";
    critBar.className = "progress-fill danger";
  }

  // Badges count
  document.getElementById("total-patients-badge").textContent = occupiedBeds;
}

function renderTriageQueue() {
  const container = document.getElementById("triage-patient-list");
  container.innerHTML = "";

  const query = document.getElementById("triage-search").value.toLowerCase();
  
  // Chip filter
  const activeChip = document.querySelector(".filter-chip.active").getAttribute("data-filter");

  const filtered = state.patients.filter(p => {
    // Text search
    const matchesSearch = p.firstName.toLowerCase().includes(query) || 
                          p.lastName.toLowerCase().includes(query) ||
                          p.room.toLowerCase().includes(query) ||
                          p.id.toLowerCase().includes(query) ||
                          p.doctor.toLowerCase().includes(query) ||
                          p.triage.toLowerCase().includes(query);
    
    // Severity chip
    if (activeChip === "all") return matchesSearch;
    return matchesSearch && p.triage.toLowerCase() === activeChip;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-alerts"><p>No patients match the filter criteria.</p></div>`;
    return;
  }

  filtered.forEach(p => {
    const isSelected = p.id === state.activePatientId;
    const hasAlarm = state.activeAlarms.some(a => a.patientId === p.id && a.priority === "Critical");

    const card = document.createElement("div");
    card.className = `patient-card ${isSelected ? 'active' : ''} ${hasAlarm ? 'critical-glow' : ''}`;
    card.setAttribute("role", "option");
    card.setAttribute("aria-selected", isSelected);
    card.addEventListener("click", () => selectPatient(p.id));

    // Get triage label
    let triageClass = "stable";
    if (p.triage === "Critical") triageClass = "critical";
    else if (p.triage === "Unstable") triageClass = "unstable";

    card.innerHTML = `
      <div class="card-top">
        <span class="card-name">${p.lastName}, ${p.firstName}</span>
        <span class="severity-pill ${triageClass}">${p.triage}</span>
      </div>
      <div class="card-complaint">${p.room} • ${p.gender}, ${calculateAge(p.dob)}</div>
      <div class="card-vitals-row">
        <span class="vital-tag ${hasAlarm ? 'alert-pulse font-bold' : ''}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
          <span class="mono">${p.currentVitals.hr}</span>
        </span>
        <span class="vital-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span class="mono">${p.currentVitals.bpSys}/${p.currentVitals.bpDia}</span>
        </span>
        <span class="vital-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          <span class="mono">${p.currentVitals.spo2}%</span>
        </span>
      </div>
    `;

    container.appendChild(card);
  });
}

function selectPatient(id) {
  state.activePatientId = id;
  renderTriageQueue();
  renderPatientInspector();
}

function renderPatientInspector() {
  const inspector = document.getElementById("patient-inspector");
  const noState = document.getElementById("no-patient-selected-state");
  const detailState = document.getElementById("patient-details-state");

  const patient = state.patients.find(p => p.id === state.activePatientId);

  if (!patient) {
    noState.classList.remove("hidden");
    detailState.classList.add("hidden");
    return;
  }

  noState.classList.add("hidden");
  detailState.classList.remove("hidden");

  // Render Bio Info
  document.getElementById("detail-name").textContent = `${patient.firstName} ${patient.lastName}`;
  document.getElementById("detail-avatar").textContent = `${patient.firstName.charAt(0)}${patient.lastName.charAt(0)}`;
  document.getElementById("detail-dob").textContent = formatDate(patient.dob);
  document.getElementById("detail-age").textContent = calculateAge(patient.dob);
  document.getElementById("detail-gender").textContent = patient.gender;
  document.getElementById("detail-id").textContent = patient.id;
  document.getElementById("detail-room").textContent = patient.room;
  document.getElementById("detail-doctor").textContent = patient.doctor;

  const severityBadge = document.getElementById("detail-severity");
  severityBadge.textContent = `Triage: ${patient.triage}`;
  severityBadge.className = `severity-badge severity-pill ${patient.triage.toLowerCase()}`;

  // Allergies
  const allergyContainer = document.getElementById("detail-allergies-container");
  allergyContainer.innerHTML = `<span class="allergy-tag font-bold">ALLERGIES:</span>`;
  patient.allergies.forEach(all => {
    const isPen = all.toLowerCase().includes("penicillin") || all.toLowerCase().includes("codeine");
    allergyContainer.innerHTML += `<span class="badge ${isPen ? 'badge-danger' : 'badge-info'}">${all}</span>`;
  });

  // Vitals Monitor Fields
  updateVitalsDisplay(patient);

  // Tab 1: Encounters Timeline
  renderEncounterTimeline(patient);

  // Tab 2: Prescriptions
  renderPrescriptions(patient);

  // Tab 3: Labs Panel
  renderLabs(patient);
}

function updateVitalsDisplay(patient) {
  if (!patient || patient.id !== state.activePatientId) return;

  const hrCard = document.getElementById("vital-card-hr");
  const bpCard = document.getElementById("vital-card-bp");
  const spo2Card = document.getElementById("vital-card-spo2");
  const tempCard = document.getElementById("vital-card-temp");

  // HR
  document.getElementById("vital-val-hr").textContent = patient.currentVitals.hr;
  const isHrCrit = patient.currentVitals.hr < 50 || patient.currentVitals.hr > 120;
  hrCard.classList.toggle("critical-alert", isHrCrit);
  document.getElementById("vital-trend-hr").textContent = isHrCrit ? "↓ Critical" : "↑ Stable";
  document.getElementById("vital-trend-hr").className = `vital-trend font-bold ${isHrCrit ? 'text-danger' : 'text-success'}`;

  // BP
  document.getElementById("vital-val-bp").textContent = `${patient.currentVitals.bpSys}/${patient.currentVitals.bpDia}`;
  const isBpCrit = patient.currentVitals.bpSys > 160 || patient.currentVitals.bpSys < 85;
  bpCard.classList.toggle("critical-alert", isBpCrit);
  document.getElementById("vital-trend-bp").textContent = isBpCrit ? "↑ Severe" : "↔ Stable";
  document.getElementById("vital-trend-bp").className = `vital-trend font-bold ${isBpCrit ? 'text-danger' : 'text-success'}`;

  // SpO2
  document.getElementById("vital-val-spo2").textContent = patient.currentVitals.spo2;
  const isSpo2Crit = patient.currentVitals.spo2 < 92;
  spo2Card.classList.toggle("critical-alert", isSpo2Crit);
  document.getElementById("vital-trend-spo2").textContent = isSpo2Crit ? "↓ Hypoxic" : "↔ Stable";
  document.getElementById("vital-trend-spo2").className = `vital-trend font-bold ${isSpo2Crit ? 'text-danger' : 'text-success'}`;

  // Temp
  document.getElementById("vital-val-temp").textContent = patient.currentVitals.temp.toFixed(1);
  const isTempCrit = patient.currentVitals.temp > 101.5;
  tempCard.classList.toggle("critical-alert", isTempCrit);
  document.getElementById("vital-trend-temp").textContent = isTempCrit ? "↑ Pyrexia" : "↔ Stable";
  document.getElementById("vital-trend-temp").className = `vital-trend font-bold ${isTempCrit ? 'text-danger' : 'text-success'}`;
}

function renderEncounterTimeline(patient) {
  const container = document.getElementById("detail-timeline");
  container.innerHTML = "";
  
  patient.encounters.forEach((enc, index) => {
    const entry = document.createElement("div");
    entry.className = "timeline-entry";
    
    const isFirst = index === 0;
    entry.innerHTML = `
      <div class="timeline-meta">${enc.time}</div>
      <div class="timeline-bar">
        <div class="timeline-node ${isFirst ? 'active' : ''}"></div>
        ${index < patient.encounters.length - 1 ? '<div class="timeline-line"></div>' : ''}
      </div>
      <div class="timeline-content">
        <h4>${enc.title}</h4>
        <p>${enc.note}</p>
      </div>
    `;
    container.appendChild(entry);
  });
}

function renderPrescriptions(patient) {
  const tbody = document.getElementById("detail-prescriptions");
  tbody.innerHTML = "";

  patient.prescriptions.forEach(p => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="font-bold">${p.medication}</td>
      <td>${p.dosage}</td>
      <td>${p.frequency}</td>
      <td class="mono">${p.route}</td>
      <td><span class="badge ${p.status === 'Active' ? 'badge-info' : 'badge-danger'}">${p.status}</span></td>
    `;
    tbody.appendChild(row);
  });
}

function renderLabs(patient) {
  const container = document.getElementById("detail-labs");
  container.innerHTML = "";

  if (!patient.labs || patient.labs.length === 0) {
    container.innerHTML = "<li>No lab diagnostics reported for this admission yet.</li>";
    return;
  }

  patient.labs.forEach(lab => {
    const isNorm = lab.status.toLowerCase() === "normal";
    container.innerHTML += `
      <li>
        <span>${lab.panel}</span>
        <strong class="${isNorm ? '' : 'text-danger'}">${lab.value} (${lab.status})</strong>
      </li>
    `;
  });
}

// --- Alert System Command Center ---
function renderAlertCenter() {
  const alertsCount = state.activeAlarms.length;
  
  // Update header count and side badges
  document.getElementById("alerts-count").textContent = alertsCount;
  document.getElementById("sidebar-alerts-badge").textContent = alertsCount;
  document.getElementById("sidebar-alerts-badge").classList.toggle("hidden", alertsCount === 0);

  const container = document.getElementById("dropdown-alerts-list");
  
  if (alertsCount === 0) {
    container.innerHTML = `
      <div class="empty-alerts">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <p>All telemetry indicators within normal thresholds.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";
  state.activeAlarms.forEach(alarm => {
    const item = document.createElement("div");
    item.className = `alert-row-item ${alarm.priority.toLowerCase()}`;
    
    item.innerHTML = `
      <div class="alert-row-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 22 22 22 12 2"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </div>
      <div class="alert-row-info">
        <h4>${alarm.patientName} (${alarm.room})</h4>
        <p>${alarm.message} - Current: <span class="mono font-bold">${alarm.value}</span></p>
      </div>
      <button class="btn-ack" onclick="acknowledgeAlarm('${alarm.id}')">Acknowledge</button>
    `;
    container.appendChild(item);
  });
}

function triggerAlarm(patient, vital, value, message, priority = "Warning") {
  // Prevent duplicate alarm for same vital
  const exists = state.activeAlarms.some(a => a.patientId === patient.id && a.vital === vital);
  if (exists) return;

  const alarmId = `AL-${Math.floor(100000 + Math.random() * 900000)}`;
  const alarm = {
    id: alarmId,
    patientId: patient.id,
    patientName: `${patient.lastName}, ${patient.firstName}`,
    room: patient.room,
    vital,
    value,
    message,
    priority,
    timestamp: new Date().toLocaleTimeString()
  };

  state.activeAlarms.unshift(alarm);
  
  // Add warning code block to patient encounters
  patient.encounters.unshift({
    time: "Telemetry Alarm",
    title: `ALERT: Abnormal ${vital}`,
    note: `${message}. Active telemetry recorded value: ${value}`
  });

  // Re-render
  renderApp();

  // Play Audio Alarm
  if (state.preferences.audioAlarms) {
    const audio = document.getElementById("alert-sound");
    audio.currentTime = 0;
    audio.play().catch(e => console.log("Audio play blocked by browser. Interaction required."));
  }

  // Push Toast
  showToastNotification(alarm);
}

function acknowledgeAlarm(alarmId) {
  // Remove alert
  state.activeAlarms = state.activeAlarms.filter(a => a.id !== alarmId);
  renderApp();
}

// Global alert acknowledgment shortcut for dynamic binding
window.acknowledgeAlarm = acknowledgeAlarm;

function showToastNotification(alarm) {
  const hub = document.getElementById("toast-hub");
  
  const toast = document.createElement("div");
  toast.className = `toast-alarm ${alarm.priority.toLowerCase()}`;
  toast.innerHTML = `
    <div class="alert-row-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 22 22 22 12 2"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    </div>
    <div class="toast-body">
      <h4>${alarm.priority.toUpperCase()} TELEMETRY ALARM</h4>
      <p>Room ${alarm.room} (${alarm.patientName}): ${alarm.message}</p>
    </div>
    <button class="toast-close">&times;</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.remove();
  });

  hub.appendChild(toast);

  // Auto-dismiss after 6 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px) scale(0.95)";
    toast.style.transition = "all 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 6000);
}

// --- Live Telemetry Simulation Engine ---
function startTelemetrySimulation() {
  setInterval(() => {
    state.patients.forEach(patient => {
      // Small random variations inside normal baseline
      const vit = patient.currentVitals;
      const base = patient.baselineVitals;

      // Handle override clinical simulation states
      if (patient.simulationMode === "tachycardia") {
        vit.hr = Math.min(200, Math.round(vit.hr + (145 - vit.hr) * 0.3 + (Math.random() * 6 - 3)));
        vit.bpSys = Math.max(80, Math.round(vit.bpSys + (95 - vit.bpSys) * 0.3 + (Math.random() * 4 - 2)));
        vit.bpDia = Math.max(50, Math.round(vit.bpDia + (58 - vit.bpDia) * 0.3 + (Math.random() * 4 - 2)));
        
        triggerAlarm(patient, "Heart Rate", vit.hr, "Sustained Tachycardia - Ventricular Flutter", "Critical");
      } else if (patient.simulationMode === "hypoxia") {
        vit.spo2 = Math.max(75, Math.round(vit.spo2 + (88 - vit.spo2) * 0.3 + (Math.random() * 2 - 1)));
        vit.hr = Math.min(130, Math.round(vit.hr + (102 - vit.hr) * 0.2 + (Math.random() * 4 - 2)));
        
        triggerAlarm(patient, "SpO2 Oxygen", `${vit.spo2}%`, "Acute Oxygen Desaturation / Hypoxia", "Critical");
      } else {
        // Normal simulation mode: slight physiological noise
        vit.hr = clamp(Math.round(base.hr + (Math.random() * 4 - 2)), 45, 180);
        vit.bpSys = clamp(Math.round(base.bpSys + (Math.random() * 6 - 3)), 80, 200);
        vit.bpDia = clamp(Math.round(base.bpDia + (Math.random() * 4 - 2)), 50, 110);
        vit.spo2 = clamp(Math.round(base.spo2 + (Math.random() * 0.4 - 0.1)), 85, 100);
        vit.temp = clamp(base.temp + (Math.random() * 0.4 - 0.2), 96.5, 104);
        
        // Auto resolve alarm warning threshold if vitals fall back to healthy limits
        if (vit.hr >= 60 && vit.hr <= 100) {
          state.activeAlarms = state.activeAlarms.filter(a => !(a.patientId === patient.id && a.vital === "Heart Rate"));
        }
        if (vit.spo2 >= 95) {
          state.activeAlarms = state.activeAlarms.filter(a => !(a.patientId === patient.id && a.vital === "SpO2 Oxygen"));
        }
      }
    });

    // Refresh UI display fields
    const activePat = state.patients.find(p => p.id === state.activePatientId);
    if (activePat) {
      updateVitalsDisplay(activePat);
    }
    
    // Update live triage lists and capacity meters
    renderStats();
    renderTriageQueue();

    // Update Directory or Alerts subviews if they are current
    if (state.currentTab === "patients") renderDirectoryTable();
    else if (state.currentTab === "alerts-hub") renderTelemetryHub();

  }, 1600);
}

// --- Dynamic Sweeping Real-time ECG waveform generator ---
function startECGChart() {
  const svg = document.getElementById("vital-svg-chart");
  const path = document.getElementById("vital-chart-path");
  if (!svg || !path) return;

  const width = 800;
  const height = 200;
  const bufferSize = 160;
  
  // Initialize baseline points buffer
  let dataPoints = Array(bufferSize).fill(height / 2);
  let sweepIndex = 0;

  // ECG generation states
  let phase = 0;
  
  function generateNextEcgValue(hr) {
    // Determine beat frequency based on heart rate
    // Standard HR = 75 bpm -> 1 beat every 800ms
    // We update at 60fps (~16ms per step). A full cycle takes ~50 steps for 72bpm.
    const stepsPerBeat = Math.round((60 * 60) / hr);
    
    const cycleStep = phase % stepsPerBeat;
    phase++;

    // Baseline amplitude is height / 2 (100)
    let y = 100;

    // Simulate standard P-Q-R-S-T sequence within the beat cycle
    if (cycleStep < 6) {
      // Flat baseline ISO
      y = 100;
    } else if (cycleStep >= 6 && cycleStep < 12) {
      // P wave: rounded positive bump
      const t = (cycleStep - 6) / 6;
      y = 100 - Math.sin(t * Math.PI) * 12;
    } else if (cycleStep >= 12 && cycleStep < 15) {
      // Iso line PR segment
      y = 100;
    } else if (cycleStep === 15) {
      // Q wave: small downward dip
      y = 108;
    } else if (cycleStep >= 16 && cycleStep < 19) {
      // R wave: major rapid vertical QRS spike
      const t = (cycleStep - 16) / 3;
      y = 108 - t * 115; // Climbs to 20 on SVG (very high)
    } else if (cycleStep >= 19 && cycleStep < 22) {
      // S wave: rapid crash below baseline
      const t = (cycleStep - 19) / 3;
      y = 25 + t * 140; // Crashes to 145 on SVG
    } else if (cycleStep >= 22 && cycleStep < 25) {
      // Returns to baseline
      const t = (cycleStep - 22) / 3;
      y = 145 - t * 45;
    } else if (cycleStep >= 25 && cycleStep < 30) {
      // ST segment
      y = 100;
    } else if (cycleStep >= 30 && cycleStep < 42) {
      // T wave: medium slow repolarization bump
      const t = (cycleStep - 30) / 12;
      y = 100 - Math.sin(t * Math.PI) * 22;
    } else {
      // Isoelectric line before next cycle
      y = 100;
    }

    // Add tiny high-frequency simulation noise
    y += (Math.random() * 3 - 1.5);
    return y;
  }

  function animate() {
    // Only animate if patient view is visible and patient is active
    const activePat = state.patients.find(p => p.id === state.activePatientId);
    if (activePat && state.currentTab === "dashboard") {
      const hr = activePat.currentVitals.hr;
      const nextVal = generateNextEcgValue(hr);

      // We implement a sweep-eraser plot effect (like real ICU scope monitors)
      // Erase 6 points ahead of our sweep index for clean readability
      dataPoints[sweepIndex] = nextVal;
      for (let i = 1; i <= 6; i++) {
        dataPoints[(sweepIndex + i) % bufferSize] = null;
      }
      
      sweepIndex = (sweepIndex + 1) % bufferSize;

      // Construct SVG path string
      let d = "";
      const stepX = width / bufferSize;
      
      for (let i = 0; i < bufferSize; i++) {
        const val = dataPoints[i];
        if (val !== null) {
          const x = i * stepX;
          if (d === "" || dataPoints[i - 1] === null) {
            d += `M${x},${val}`;
          } else {
            d += ` L${x},${val}`;
          }
        }
      }

      path.setAttribute("d", d);
      
      // Heart rate dependent cardiogram coloring
      if (hr > 120 || hr < 50) {
        path.style.stroke = "var(--color-danger)";
      } else {
        path.style.stroke = "var(--color-success)";
      }
    }
    
    requestAnimationFrame(animate);
  }

  animate();
}

// --- Worksheet Quick Addition Operations ---
function addClinicalNote() {
  const patient = state.patients.find(p => p.id === state.activePatientId);
  const input = document.getElementById("input-timeline-note");
  const noteText = input.value.trim();

  if (!patient || !noteText) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  patient.encounters.unshift({
    time: timeStr,
    title: "Clinical Observation Note",
    note: noteText
  });

  input.value = "";
  renderEncounterTimeline(patient);
}

function addPrescription() {
  const patient = state.patients.find(p => p.id === state.activePatientId);
  const medEl = document.getElementById("presc-med");
  const doseEl = document.getElementById("presc-dose");
  const freqEl = document.getElementById("presc-freq");

  const medication = medEl.value.trim();
  const dosage = doseEl.value.trim();
  const frequency = freqEl.value.trim();

  if (!patient || !medication || !dosage || !frequency) return;

  patient.prescriptions.push({
    medication,
    dosage,
    frequency,
    route: "PO",
    status: "Active"
  });

  // Clear fields
  medEl.value = "";
  doseEl.value = "";
  freqEl.value = "";

  renderPrescriptions(patient);
  
  // Log intervention
  patient.encounters.unshift({
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    title: "Intervention: New RX Administered",
    note: `Prescribed ${medication} ${dosage} with frequency scheduled: ${frequency}.`
  });
  renderEncounterTimeline(patient);
}

// --- Triage Intervention Simulators ---
function triggerSimulation(mode) {
  const patient = state.patients.find(p => p.id === state.activePatientId);
  if (!patient) return;

  patient.simulationMode = mode;
  
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (mode === "tachycardia") {
    patient.currentVitals.hr = 145;
    patient.currentVitals.bpSys = 92;
    patient.currentVitals.bpDia = 56;
    patient.encounters.unshift({
      time: now,
      title: "Simulation Triggered",
      note: "Bedside testing: Simulated sustained tachycardia runs with acute blood pressure degradation."
    });
  } else if (mode === "hypoxia") {
    patient.currentVitals.spo2 = 88;
    patient.currentVitals.hr = 106;
    patient.encounters.unshift({
      time: now,
      title: "Simulation Triggered",
      note: "Bedside testing: Simulated severe hypoxic acute respiratory decompensation."
    });
  } else {
    // Stable Reset
    patient.simulationMode = "normal";
    patient.currentVitals.hr = patient.baselineVitals.hr;
    patient.currentVitals.bpSys = patient.baselineVitals.bpSys;
    patient.currentVitals.bpDia = patient.baselineVitals.bpDia;
    patient.currentVitals.spo2 = patient.baselineVitals.spo2;
    
    // Clear alarms related to this patient
    state.activeAlarms = state.activeAlarms.filter(a => a.patientId !== patient.id);
    
    patient.encounters.unshift({
      time: now,
      title: "Vitals Stabilized",
      note: "Telemetry override reset. Patient baseline clinical vitals successfully restored."
    });
  }

  renderApp();
}

function triggerDischarge() {
  const patient = state.patients.find(p => p.id === state.activePatientId);
  if (!patient) return;

  if (confirm(`Confirm physical discharge process and transfer parameters for patient ${patient.firstName} ${patient.lastName}?`)) {
    // Record log
    alert(`Discharge instructions finalized. Removing patient PX-${patient.id} from local unit registry.`);
    
    // Remove patient from database
    state.patients = state.patients.filter(p => p.id !== patient.id);
    state.activeAlarms = state.activeAlarms.filter(a => a.patientId !== patient.id);

    // Pick first patient in list if any
    if (state.patients.length > 0) {
      state.activePatientId = state.patients[0].id;
    } else {
      state.activePatientId = null;
    }

    renderApp();
  }
}

// --- Advanced Directory View UI ---
function renderDirectoryTable() {
  const tbody = document.getElementById("master-table-body");
  tbody.innerHTML = "";

  const query = document.getElementById("global-search").value.toLowerCase();
  const deptVal = document.getElementById("dir-dept-filter").value;
  const sevVal = document.getElementById("dir-severity-filter").value;

  const filtered = state.patients.filter(p => {
    const matchesSearch = p.firstName.toLowerCase().includes(query) || 
                          p.lastName.toLowerCase().includes(query) ||
                          p.id.toLowerCase().includes(query);
    
    const matchesDept = deptVal === "all" || p.department === deptVal;
    const matchesSev = sevVal === "all" || p.triage === sevVal;

    return matchesSearch && matchesDept && matchesSev;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 40px;">No patient records matched the directory filters.</td></tr>`;
    return;
  }

  filtered.forEach(p => {
    const row = document.createElement("tr");
    
    let triageClass = "stable";
    if (p.triage === "Critical") triageClass = "critical";
    else if (p.triage === "Unstable") triageClass = "unstable";

    row.innerHTML = `
      <td class="mono font-bold">${p.id}</td>
      <td class="font-bold">${p.lastName}, ${p.firstName}</td>
      <td>${calculateAge(p.dob)} / ${p.gender}</td>
      <td>${p.department} - ${p.room}</td>
      <td><span class="severity-pill ${triageClass}">${p.triage}</span></td>
      <td>${p.encounters[p.encounters.length - 1]?.title || "Initial Intake"}</td>
      <td class="mono font-bold">
        HR ${p.currentVitals.hr} | SpO₂ ${p.currentVitals.spo2}% | BP ${p.currentVitals.bpSys}/${p.currentVitals.bpDia}
      </td>
      <td>${p.doctor}</td>
      <td>
        <button class="btn-ack" onclick="viewPatientFromDir('${p.id}')">Inspect</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function viewPatientFromDir(id) {
  state.activePatientId = id;
  switchTab("dashboard");
  renderPatientInspector();
}
window.viewPatientFromDir = viewPatientFromDir;

function applyDirectoryFilters() {
  renderDirectoryTable();
}

function filterDirectoryTable(query) {
  if (state.currentTab === "patients") {
    renderDirectoryTable();
  }
}

function filterTriageQueue(query) {
  renderTriageQueue();
}

// --- Active Telemetry Hub Section ---
function renderTelemetryHub() {
  // Hub alarm list
  const container = document.getElementById("hub-alerts-list");
  container.innerHTML = "";

  const alertsCount = state.activeAlarms.length;
  document.getElementById("alerts-hub-count").textContent = `${alertsCount} Alarms Active`;

  if (alertsCount === 0) {
    container.innerHTML = `
      <div class="empty-alerts">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <p>No active critical events in unit. Telemetry feed status healthy.</p>
      </div>
    `;
  } else {
    state.activeAlarms.forEach(alarm => {
      const item = document.createElement("div");
      item.className = `alert-row-item ${alarm.priority.toLowerCase()}`;
      item.style.padding = "16px";
      
      item.innerHTML = `
        <div class="alert-row-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 22 22 22 12 2"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div class="alert-row-info">
          <h3 style="font-size: 0.95rem; margin-bottom: 4px;">Room ${alarm.room} • ${alarm.patientName}</h3>
          <p style="font-size: var(--font-small); color: var(--text-secondary);">${alarm.message}</p>
          <span class="mono font-bold" style="color: var(--color-danger); margin-top: 4px; display: inline-block;">Value: ${alarm.value} • Recorded: ${alarm.timestamp}</span>
        </div>
        <button class="primary-btn" style="height: 32px; font-size: 11px; padding: 0 12px;" onclick="acknowledgeAlarm('${alarm.id}')">Dismiss Alarm</button>
      `;
      container.appendChild(item);
    });
  }

  // Bed matrix layout
  const grid = document.getElementById("icu-telemetry-grid");
  grid.innerHTML = "";

  state.patients.forEach(p => {
    const hasAlarm = state.activeAlarms.some(a => a.patientId === p.id && a.priority === "Critical");
    
    const card = document.createElement("div");
    card.className = `central-bed-card ${hasAlarm ? 'alarm-active' : ''}`;
    card.addEventListener("click", () => {
      state.activePatientId = p.id;
      switchTab("dashboard");
    });

    card.innerHTML = `
      <div class="bed-number">${p.room}</div>
      <div class="bed-patient">${p.lastName}, ${p.firstName.charAt(0)}.</div>
      <div class="bed-hr-spark">${p.currentVitals.hr} <span style="font-size:10px;">bpm</span></div>
      <div class="bed-status-lbl">${hasAlarm ? 'Critical Alert' : 'Telemetry OK'}</div>
    `;

    grid.appendChild(card);
  });
}

// --- Admission Intake Form Wizard Logic ---
function openAdmissionWizard() {
  state.modalStep = 1;
  document.getElementById("admission-form").reset();
  
  // Set today as max/default for DOB input
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("adm-dob").max = today;
  document.getElementById("adm-dob").value = "1990-01-01";

  updateWizardStepDisplay();
  document.getElementById("admission-modal").classList.add("active");
  document.getElementById("admission-modal").setAttribute("aria-hidden", "false");
}

function closeAdmissionWizard() {
  document.getElementById("admission-modal").classList.remove("active");
  document.getElementById("admission-modal").setAttribute("aria-hidden", "true");
}

function updateWizardStepDisplay() {
  // Hide all steps
  document.querySelectorAll(".form-step").forEach(step => step.classList.remove("active"));
  
  // Show active step
  document.getElementById(`form-step-${state.modalStep}`).classList.add("active");

  // Update Stepper Nodes UI
  document.querySelectorAll(".step-node").forEach(node => {
    const nodeStep = parseInt(node.getAttribute("data-step"));
    node.classList.toggle("active", nodeStep <= state.modalStep);
  });

  document.querySelectorAll(".step-line").forEach((line, index) => {
    line.classList.toggle("active", index + 1 < state.modalStep);
  });

  // Footer navigation buttons
  const prevBtn = document.getElementById("btn-wizard-prev");
  const nextBtn = document.getElementById("btn-wizard-next");
  const submitBtn = document.getElementById("btn-wizard-submit");

  prevBtn.classList.toggle("hidden", state.modalStep === 1);
  
  if (state.modalStep === 3) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
}

function nextWizardStep() {
  // Validate current step fields before progressing
  const activeFields = document.querySelectorAll(`#form-step-${state.modalStep} input[required], #form-step-${state.modalStep} select[required]`);
  let valid = true;
  
  activeFields.forEach(f => {
    if (!f.value) {
      f.reportValidity();
      valid = false;
    }
  });

  if (!valid) return;

  if (state.modalStep < 3) {
    state.modalStep++;
    updateWizardStepDisplay();
  }
}

function prevWizardStep() {
  if (state.modalStep > 1) {
    state.modalStep--;
    updateWizardStepDisplay();
  }
}

function handleAdmissionSubmit(e) {
  e.preventDefault();

  // Validate step 3
  const activeFields = document.querySelectorAll(`#form-step-3 input[required], #form-step-3 select[required]`);
  let valid = true;
  activeFields.forEach(f => {
    if (!f.value) {
      f.reportValidity();
      valid = false;
    }
  });
  if (!valid) return;

  // Gather values
  const fName = document.getElementById("adm-first-name").value.trim();
  const lName = document.getElementById("adm-last-name").value.trim();
  const dob = document.getElementById("adm-dob").value;
  const gender = document.getElementById("adm-gender").value;
  const emergency = document.getElementById("adm-emergency").value.trim();
  
  const complaint = document.getElementById("adm-complaint").value.trim();
  const triage = document.getElementById("adm-triage").value;
  const allergiesRaw = document.getElementById("adm-allergies").value.trim();
  const allergies = allergiesRaw ? allergiesRaw.split(",").map(s => s.trim()) : ["NKA"];
  const history = document.getElementById("adm-history").value.trim() || "No past history recorded.";
  
  const department = document.getElementById("adm-dept").value;
  const room = document.getElementById("adm-room").value.trim();
  const doctor = document.getElementById("adm-doctor").value;
  const hrBase = parseInt(document.getElementById("adm-hr-base").value) || 80;

  // Create patient ID
  const pId = `PX-${Math.floor(10000 + Math.random() * 90000)}`;

  // Construct patient database object
  const newPatient = {
    id: pId,
    firstName: fName,
    lastName: lName,
    dob,
    gender,
    room,
    department,
    doctor,
    triage,
    allergies,
    emergencyContact: emergency,
    history,
    baselineVitals: { hr: hrBase, bpSys: 120, bpDia: 80, spo2: 98, temp: 98.6 },
    currentVitals: { hr: hrBase, bpSys: 120, bpDia: 80, spo2: 98, temp: 98.6 },
    prescriptions: [
      { medication: "Saline Flush 0.9%", dosage: "10mL", frequency: "Q8H", route: "IV", status: "Active" }
    ],
    encounters: [
      { time: "Intake", title: "Patient Admitted to Unit", note: `Admitted under primary diagnosis of: "${complaint}". Initial triage assessment: ${triage}.` }
    ],
    labs: [
      { panel: "Complete Blood Count", value: "Pending", status: "In Process" }
    ],
    simulationMode: "normal"
  };

  // Add to global state
  state.patients.unshift(newPatient);
  state.activePatientId = pId;

  // Render & clean view
  closeAdmissionWizard();
  switchTab("dashboard");
  renderApp();

  // Highlight message
  alert(`Patient record ${fName} ${lName} successfully admitted to room ${room}! Vitals feed established.`);
}

// --- Visual Calculation Helpers ---
function calculateAge(dobStr) {
  const birth = new Date(dobStr);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${month}/${day}/${year}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
