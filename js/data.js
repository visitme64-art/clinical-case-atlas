/* ==========================================================
   CLINICAL CASE ATLAS BANGLADESH - data.js
   Specialty directory, categories and learning modules.

   IMPORTANT: Qualification details (FCPS, MD, MS, MCPS, etc.)
   are intentionally NOT listed per specialty here. They must be
   verified from official Bangladesh institutions (BCPS, BSMMU,
   universities) before being added.

   The "modules" list for each specialty shows which learning
   modules are PLANNED to be relevant. It does not mean content
   already exists.
   ========================================================== */

(function () {
  "use strict";

  /* ---------- Learning modules (ids match the links on the pages) ---------- */
  var MODULES = [
    { id: "long-cases", name: "Long Cases", icon: "🩺", desc: "Full case presentation and discussion" },
    { id: "short-cases", name: "Short Cases", icon: "📋", desc: "Focused examination and diagnosis" },
    { id: "clinical-examination", name: "Clinical Examination", icon: "🖐️", desc: "Stepwise technique and signs" },
    { id: "history-taking", name: "History Taking", icon: "🗣️", desc: "Structured, specialty-based history" },
    { id: "systemic-examination", name: "Systemic Examination", icon: "🫀", desc: "System-by-system approach" },
    { id: "viva", name: "Viva Q&A", icon: "💬", desc: "Common questions with model answers" },
    { id: "practical", name: "Practical Exams", icon: "🧪", desc: "OSCE, OSPE and practical stations" },
    { id: "spotters", name: "Spotters", icon: "🎯", desc: "Rapid identification practice" },
    { id: "radiology", name: "Radiology & Images", icon: "🩻", desc: "X-ray, CT, MRI, USG interpretation" },
    { id: "ecg-investigations", name: "ECG & Investigations", icon: "📈", desc: "ECG, labs and reports" },
    { id: "instruments-specimens", name: "Instruments & Specimens", icon: "🔬", desc: "Identify, describe, discuss" },
    { id: "laboratory", name: "Laboratory Learning", icon: "⚗️", desc: "Lab-based topics and methods" }
  ];

  /* ---------- Categories (used for the filter chips) ---------- */
  var CATEGORIES = [
    { id: "medical", name: "Medical" },
    { id: "surgical", name: "Surgical" },
    { id: "women-child", name: "Women & Child" },
    { id: "clinical", name: "Clinical Specialties" },
    { id: "acute", name: "Anaesthesia & Acute Care" },
    { id: "diagnostic", name: "Diagnostic & Imaging" },
    { id: "basic", name: "Basic Science" },
    { id: "public-health", name: "Public Health" },
    { id: "dental", name: "Dental" }
  ];

  /* ---------- Module presets (planned relevance only) ---------- */
  var P = {
    medicine: ["long-cases", "short-cases", "clinical-examination", "history-taking", "systemic-examination", "viva", "spotters", "radiology", "ecg-investigations"],
    surgery: ["long-cases", "short-cases", "clinical-examination", "history-taking", "viva", "spotters", "radiology", "instruments-specimens"],
    obgyn: ["long-cases", "short-cases", "clinical-examination", "history-taking", "viva", "spotters", "radiology", "instruments-specimens"],
    paeds: ["long-cases", "short-cases", "clinical-examination", "history-taking", "systemic-examination", "viva", "spotters", "radiology"],
    sensory: ["long-cases", "short-cases", "clinical-examination", "history-taking", "viva", "spotters", "instruments-specimens"],
    derm: ["long-cases", "short-cases", "clinical-examination", "history-taking", "viva", "spotters"],
    psych: ["long-cases", "short-cases", "history-taking", "viva"],
    rehab: ["long-cases", "short-cases", "clinical-examination", "history-taking", "viva", "spotters"],
    anaes: ["long-cases", "short-cases", "viva", "practical", "instruments-specimens", "ecg-investigations"],
    emergency: ["long-cases", "short-cases", "clinical-examination", "history-taking", "viva", "practical", "ecg-investigations", "radiology"],
    imaging: ["viva", "practical", "spotters", "radiology"],
    labpath: ["viva", "practical", "spotters", "instruments-specimens", "laboratory"],
    basic: ["viva", "practical", "spotters", "instruments-specimens", "laboratory"],
    community: ["viva", "practical"],
    dental: ["long-cases", "short-cases", "clinical-examination", "viva", "practical", "instruments-specimens", "radiology"]
  };

  /* ---------- Specialties ---------- */
  function s(id, name, category, icon, desc, modules) {
    return { id: id, name: name, category: category, icon: icon, desc: desc, modules: modules };
  }

  var SPECIALTIES = [
    /* MEDICAL */
    s("internal-medicine", "Internal Medicine", "medical", "🩺", "General medicine, multisystem disease and acute care", P.medicine),
    s("cardiology", "Cardiology", "medical", "🫀", "Heart disease, ECG, echo and interventions", P.medicine),
    s("neurology", "Neurology", "medical", "🧠", "Brain, spinal cord, nerve and muscle disorders", P.medicine),
    s("nephrology", "Nephrology", "medical", "💧", "Kidney disease, dialysis and fluid-electrolyte problems", P.medicine),
    s("gastroenterology", "Gastroenterology & Hepatology", "medical", "🍽️", "GI tract, liver, pancreas and endoscopy", P.medicine),
    s("respiratory-medicine", "Respiratory Medicine", "medical", "🫁", "Chest diseases, TB, asthma, COPD and lung imaging", P.medicine),
    s("endocrinology", "Endocrinology & Metabolism", "medical", "🧬", "Diabetes, thyroid, adrenal, pituitary and bone", P.medicine),
    s("rheumatology", "Rheumatology", "medical", "🦴", "Autoimmune and joint diseases", P.medicine),
    s("infectious-diseases", "Infectious Diseases", "medical", "🦠", "Tropical and general infections, HIV, fevers", P.medicine),
    s("haematology", "Haematology", "medical", "🩸", "Anaemias, bleeding disorders and blood cancers", P.medicine),
    s("medical-oncology", "Medical Oncology", "medical", "🎗️", "Systemic cancer therapy and supportive care", P.medicine),
    s("geriatrics", "Geriatric Medicine", "medical", "👴", "Care of the older adult", P.medicine),
    s("palliative-medicine", "Palliative Medicine", "medical", "🕊️", "Symptom control and end-of-life care", P.medicine),

    /* SURGICAL */
    s("general-surgery", "General Surgery", "surgical", "🔪", "Abdominal, breast, thyroid, hernia and trauma surgery", P.surgery),
    s("colorectal-surgery", "Colorectal Surgery", "surgical", "🔹", "Colon, rectum and anal diseases", P.surgery),
    s("hpb-surgery", "Hepatobiliary & Pancreatic Surgery", "surgical", "🟤", "Liver, biliary tract and pancreas surgery", P.surgery),
    s("urology", "Urology", "surgical", "🚰", "Urinary tract and male genital system", P.surgery),
    s("neurosurgery", "Neurosurgery", "surgical", "🧠", "Brain, spine and nerve surgery", P.surgery),
    s("orthopaedics", "Orthopaedics & Traumatology", "surgical", "🦴", "Fractures, joints, spine and sports injury", P.surgery),
    s("paediatric-surgery", "Paediatric Surgery", "surgical", "🧒", "Congenital and acquired surgical disease in children", P.surgery),
    s("plastic-surgery", "Plastic & Reconstructive Surgery", "surgical", "✂️", "Burns, reconstruction and cosmetic surgery", P.surgery),
    s("cardiothoracic-surgery", "Cardiothoracic Surgery", "surgical", "🫀", "Heart and thoracic surgery", P.surgery),
    s("vascular-surgery", "Vascular Surgery", "surgical", "🩸", "Arterial, venous and lymphatic disease", P.surgery),

    /* WOMEN & CHILD */
    s("obstetrics-gynaecology", "Obstetrics & Gynaecology", "women-child", "🤰", "Pregnancy, childbirth and female reproductive health", P.obgyn),
    s("reproductive-medicine", "Reproductive Medicine & Infertility", "women-child", "👶", "Infertility, IVF and reproductive endocrinology", P.obgyn),
    s("paediatrics", "Paediatrics", "women-child", "🧒", "Child health, growth, development and disease", P.paeds),
    s("neonatology", "Neonatology", "women-child", "🍼", "Newborn care and neonatal intensive care", P.paeds),

    /* CLINICAL SPECIALTIES */
    s("ophthalmology", "Ophthalmology", "clinical", "👁️", "Eye diseases, refraction and eye surgery", P.sensory),
    s("otolaryngology", "Otolaryngology (ENT)", "clinical", "👂", "Ear, nose, throat, head and neck", P.sensory),
    s("dermatology-venereology", "Dermatology & Venereology", "clinical", "🧴", "Skin, hair, nail and sexually transmitted infections", P.derm),
    s("psychiatry", "Psychiatry", "clinical", "🧘", "Mental health and psychiatric disorders", P.psych),
    s("pmr", "Physical Medicine & Rehabilitation", "clinical", "🏃", "Rehabilitation, disability and musculoskeletal medicine", P.rehab),

    /* ANAESTHESIA & ACUTE */
    s("anaesthesiology", "Anaesthesiology", "acute", "😴", "Anaesthesia, pain medicine and perioperative care", P.anaes),
    s("emergency-medicine", "Emergency Medicine", "acute", "🚑", "Resuscitation, trauma and acute presentations", P.emergency),
    s("critical-care", "Critical Care Medicine", "acute", "🏥", "ICU management, ventilation and organ support", P.emergency),

    /* DIAGNOSTIC & IMAGING */
    s("radiology-imaging", "Radiology & Imaging", "diagnostic", "🩻", "X-ray, ultrasound, CT, MRI and interventional imaging", P.imaging),
    s("radiotherapy-oncology", "Radiotherapy & Clinical Oncology", "diagnostic", "☢️", "Radiation therapy and cancer treatment planning", P.imaging),
    s("nuclear-medicine", "Nuclear Medicine", "diagnostic", "⚛️", "Isotope imaging and therapy", P.imaging),
    s("pathology", "Pathology", "diagnostic", "🔬", "General pathology and laboratory diagnosis", P.labpath),
    s("histopathology", "Histopathology", "diagnostic", "🧫", "Tissue diagnosis, biopsy and cytology", P.labpath),
    s("microbiology", "Microbiology", "diagnostic", "🦠", "Bacteria, fungi, parasites and laboratory methods", P.labpath),
    s("virology", "Virology", "diagnostic", "🧪", "Viral diseases, serology and molecular diagnosis", P.labpath),
    s("clinical-haematology-lab", "Laboratory Haematology", "diagnostic", "🩸", "Blood films, coagulation and bone marrow", P.labpath),
    s("transfusion-medicine", "Transfusion Medicine", "diagnostic", "🧬", "Blood banking, grouping and transfusion safety", P.labpath),
    s("clinical-biochemistry", "Biochemistry (Clinical)", "diagnostic", "⚗️", "Clinical chemistry and metabolic testing", P.labpath),
    s("immunology", "Immunology", "diagnostic", "🛡️", "Immune function, allergy and immunodeficiency", P.labpath),

    /* BASIC SCIENCE */
    s("anatomy", "Anatomy", "basic", "💀", "Gross anatomy, embryology, histology and neuroanatomy", P.basic),
    s("physiology", "Physiology", "basic", "📊", "Human physiology and practical experiments", P.basic),
    s("biochemistry", "Biochemistry", "basic", "🧪", "Medical biochemistry and molecular biology", P.basic),
    s("pharmacology", "Pharmacology", "basic", "💊", "Drug action, therapeutics and toxicology", P.basic),
    s("forensic-medicine", "Forensic Medicine & Toxicology", "basic", "⚖️", "Medicolegal practice, autopsy and poisons", P.basic),

    /* PUBLIC HEALTH */
    s("community-medicine", "Community Medicine", "public-health", "🏘️", "Community health, epidemiology and preventive medicine", P.community),
    s("public-health", "Public Health", "public-health", "🌍", "Population health, policy and health systems", P.community),
    s("epidemiology-biostatistics", "Epidemiology & Biostatistics", "public-health", "📉", "Study design, data analysis and disease surveillance", P.community),
    s("occupational-health", "Occupational & Environmental Health", "public-health", "🏭", "Workplace and environmental health hazards", P.community),
    s("family-medicine", "Family Medicine", "public-health", "👨‍👩‍👧", "Primary care and continuing, whole-person care", P.medicine),

    /* DENTAL */
    s("oral-maxillofacial-surgery", "Oral & Maxillofacial Surgery", "dental", "🦷", "Jaw, face and oral surgery", P.dental),
    s("conservative-dentistry", "Conservative Dentistry & Endodontics", "dental", "🦷", "Restorative dentistry and root canal treatment", P.dental),
    s("orthodontics", "Orthodontics", "dental", "😁", "Dental alignment and jaw growth guidance", P.dental),
    s("prosthodontics", "Prosthodontics", "dental", "🦷", "Dentures, crowns, bridges and implants", P.dental),
    s("periodontology", "Periodontology", "dental", "🦷", "Gum and supporting tissue disease", P.dental),
    s("oral-pathology", "Oral Pathology & Medicine", "dental", "🔬", "Diseases of the mouth and jaws", P.dental),
    s("paediatric-dentistry", "Paediatric Dentistry", "dental", "🧒", "Dental care for children", P.dental)
  ];

  /* ---------- Helper functions ---------- */
  function getSpecialty(id) {
    for (var i = 0; i < SPECIALTIES.length; i++) {
      if (SPECIALTIES[i].id === id) return SPECIALTIES[i];
    }
    return null;
  }

  function getModule(id) {
    for (var i = 0; i < MODULES.length; i++) {
      if (MODULES[i].id === id) return MODULES[i];
    }
    return null;
  }

  function getCategory(id) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].id === id) return CATEGORIES[i];
    }
    return null;
  }

  /* ---------- Share with other scripts ---------- */
  window.ATLAS_DATA = {
    modules: MODULES,
    categories: CATEGORIES,
    specialties: SPECIALTIES,
    getSpecialty: getSpecialty,
    getModule: getModule,
    getCategory: getCategory
  };
})();
