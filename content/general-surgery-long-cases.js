/* ==========================================================
   CLINICAL CASE ATLAS BANGLADESH
   General Surgery - Long Cases

   HOW TO ADD A NEW CASE LATER:
   1. Copy one whole case block (from its opening { to its closing }).
   2. Put a comma after the previous case's closing }.
   3. Paste the copy after that comma and change the text.
   Each case needs a unique "id" (lowercase letters and hyphens).

   These are revision notes for educational use. Check them against
   standard textbooks (for example Bailey & Love, SRB's Manual of
   Surgery), current guidelines and your supervisors.
   ========================================================== */

(function () {
  "use strict";

  window.ATLAS_CONTENT = window.ATLAS_CONTENT || {};

  window.ATLAS_CONTENT["general-surgery:long-cases"] = {
    specialty: "general-surgery",
    module: "long-cases",
    cases: [

      /* ===================== CASE 1 ===================== */
      {
        id: "obstructive-jaundice",
        title: "Obstructive (Surgical) Jaundice",
        summary: "Approach to a patient with jaundice due to biliary obstruction: carcinoma head of pancreas, periampullary carcinoma and CBD stones.",
        tags: ["Hepatobiliary", "Jaundice", "Pancreas", "Biliary"],
        sections: [

          {
            heading: "1. Illustrative opening statement",
            text: "This is a fictional example to show the structure. Replace it with the details of your own patient. 'Mr A, a 62-year-old married farmer from Mymensingh, presented with progressive yellowish discolouration of the eyes and skin for 2 months, associated with itching, dark urine and clay-coloured stool. He also reports loss of appetite and about 8 kg weight loss over 3 months, with dull epigastric discomfort radiating to the back. There is no fever, no history of gallstones or previous biliary surgery, no blood transfusion and no alcohol use. On examination he is deeply jaundiced and thin, with scratch marks. The gallbladder is palpable, non-tender and smooth. There is no ascites and no lymphadenopathy. My provisional diagnosis is obstructive jaundice, most likely due to carcinoma of the head of the pancreas or a periampullary carcinoma. My differentials are CBD stone and distal cholangiocarcinoma.'"
          },

          {
            heading: "2. History: key points to elicit",
            items: [
              "Jaundice: onset, duration, progressive or fluctuating (fluctuating suggests a stone or ampullary carcinoma)",
              "Pruritus, dark (tea-coloured) urine, pale or clay-coloured stool (the onset of these suggests cholestasis)",
              "Pain: site, character, radiation to the back (suggests pancreatic malignancy), colicky pain with previous biliary colic (suggests stones), painless jaundice (suggests malignancy)",
              "Fever with rigors (cholangitis), vomiting, nausea, anorexia",
              "Weight loss and its amount and time frame, steatorrhoea, new-onset diabetes",
              "Previous gallstones, biliary colic, cholecystectomy or ERCP (stricture or retained stone)",
              "Features of hepatitis: prodromal illness, contacts, blood transfusion, injections, tattoos, high-risk behaviour (hepatitis A, B, C and E are important to exclude)",
              "Drugs and toxins: hepatotoxic or cholestatic drugs, herbal medicines, alcohol",
              "Past history (diabetes, chronic pancreatitis), family history, smoking, personal and socio-economic details"
            ]
          },

          {
            heading: "3. Examination",
            items: [
              "General: degree of jaundice (best seen under natural light in the sclera), scratch marks, pallor, cachexia, dehydration, fever, pulse and blood pressure",
              "Look for chronic liver disease and chronic cholestasis: spider naevi, palmar erythema, clubbing, xanthelasma, gynaecomastia",
              "Lymph nodes: left supraclavicular node (Virchow's node), periumbilical nodule (Sister Mary Joseph nodule)",
              "Abdomen, inspection: distension, scars, visible mass, dilated veins",
              "Abdomen, palpation: palpable gallbladder (smooth, non-tender), hepatomegaly (smooth, firm; nodular suggests metastasis), epigastric mass, tenderness in the right upper quadrant, Murphy's sign",
              "Abdomen, percussion and auscultation: ascites (shifting dullness), splenomegaly (suggests portal hypertension)",
              "Per rectal examination: Blumer's shelf (peritoneal metastasis), stool colour (pale or silver stool)",
              "Complete the examination: chest, cardiovascular and nervous systems, and look for signs of a fitness problem for surgery"
            ]
          },

          {
            heading: "4. Courvoisier's law",
            text: "In a jaundiced patient, a palpable, non-tender gallbladder is unlikely to be due to gallstones, because a gallbladder that has long been inflamed by stones becomes fibrosed and cannot distend. It therefore points to malignant obstruction of the distal bile duct (head of pancreas, ampulla, distal CBD). Exceptions include a double impaction of stones (in Hartmann's pouch or cystic duct and in the CBD) and a mucocele."
          },

          {
            heading: "5. Clues pointing to the cause",
            items: [
              "Painless, progressive jaundice with weight loss and a palpable gallbladder: carcinoma head of pancreas",
              "Fluctuating jaundice with silver-coloured stool or occult blood: periampullary (ampullary) carcinoma",
              "Colicky right upper quadrant pain, fever and jaundice: CBD stone with or without cholangitis (Charcot's triad)",
              "Jaundice after a biliary operation: stricture of the bile duct (iatrogenic injury)",
              "Jaundice with a mass and early satiety or vomiting: advanced pancreatic or duodenal disease",
              "Jaundice with a long history of alcohol, pain and calcification: chronic pancreatitis with distal CBD stricture"
            ]
          },

          {
            heading: "6. Differential diagnosis (by site of obstruction)",
            items: [
              "In the lumen: CBD stones, parasites (Ascaris), blood clot (haemobilia), hydatid material",
              "In the wall: cholangiocarcinoma (hilar or distal), benign bile duct stricture (post-operative or post-inflammatory), primary sclerosing cholangitis, choledochal cyst, biliary atresia in infants",
              "Outside the wall: carcinoma head of pancreas, periampullary carcinoma (ampulla of Vater, duodenum, distal CBD), chronic pancreatitis, enlarged porta hepatis lymph nodes (metastasis, lymphoma, tuberculosis), Mirizzi syndrome, gallbladder carcinoma",
              "Also exclude pre-hepatic (haemolytic) and hepatocellular (hepatitis, cirrhosis, drugs) jaundice"
            ]
          },

          {
            heading: "7. Investigations",
            items: [
              "Liver function tests: raised conjugated (direct) bilirubin; markedly raised ALP and GGT; AST and ALT only mildly to moderately raised; low albumin in long-standing disease",
              "Urine: bile salts and bilirubin present; urobilinogen absent in complete obstruction. Stool: clay-coloured (no stercobilinogen)",
              "Complete blood count (anaemia, leucocytosis in cholangitis), PT and INR (vitamin K malabsorption), urea, creatinine and electrolytes, blood glucose, amylase or lipase",
              "Tumour marker CA 19-9: supports the diagnosis and is useful for baseline and follow-up, but it is raised in any cholestasis and is not diagnostic; CEA may be added",
              "Hepatitis serology if clinically suggested",
              "Ultrasonography (first-line): dilated intrahepatic ducts, dilated CBD (more than about 6 mm), gallbladder status, stones, pancreatic mass, liver metastases, ascites",
              "Contrast-enhanced CT abdomen (pancreatic protocol): size and site of the mass, vascular involvement (SMV, portal vein, SMA, coeliac axis), lymph nodes, liver metastases; used for staging and resectability",
              "MRCP: non-invasive map of the biliary and pancreatic ducts, level and cause of obstruction",
              "Endoscopic ultrasound (EUS) with FNA: small pancreatic or ampullary lesions, nodal staging, tissue diagnosis",
              "ERCP: both diagnostic and therapeutic (sphincterotomy, stone extraction, stenting, brush cytology)",
              "PTC or PTBD: when ERCP fails or in hilar obstruction",
              "Chest X-ray, ECG and echocardiography as needed for anaesthetic fitness; staging laparoscopy in selected patients"
            ]
          },

          {
            heading: "8. Preparation and general management",
            items: [
              "Resuscitation and hydration: IV fluids to protect the kidneys; monitor urine output; avoid nephrotoxic drugs",
              "Vitamin K (usually 10 mg IV daily for 3 days) to correct the prolonged PT; fresh frozen plasma if urgent surgery is needed",
              "Antibiotics if there is cholangitis, and before any biliary instrumentation",
              "Control diabetes, correct anaemia, improve nutrition (enteral preferred), treat pruritus (for example cholestyramine)",
              "Pre-operative biliary drainage is not routine. It is considered for cholangitis, very high bilirubin with a delay to surgery, severe pruritus, renal impairment, or before neoadjuvant therapy",
              "Informed consent, anaesthetic fitness assessment, and counselling about the outcome and the extent of the planned operation"
            ]
          },

          {
            heading: "9. Treatment by cause",
            items: [
              "CBD stones: ERCP with sphincterotomy and stone extraction, followed by cholecystectomy if the gallbladder is present; alternatively laparoscopic or open CBD exploration (T-tube or primary closure) or choledochoduodenostomy in selected cases",
              "Resectable carcinoma head of pancreas or periampullary carcinoma: pancreaticoduodenectomy (Whipple's operation), then adjuvant chemotherapy",
              "Borderline resectable disease: neoadjuvant chemotherapy followed by reassessment for resection",
              "Unresectable or metastatic disease: palliation with endoscopic self-expanding metal stent (or PTBD), palliative chemotherapy, coeliac plexus neurolysis for pain, pancreatic enzyme replacement; surgical double bypass (hepaticojejunostomy with gastrojejunostomy) if found unresectable at laparotomy and the patient has a reasonable life expectancy",
              "Hilar cholangiocarcinoma: staging by Bismuth-Corlette; resection (often with liver resection) when feasible, otherwise drainage and palliation",
              "Benign stricture: Roux-en-Y hepaticojejunostomy",
              "Cholangitis: urgent biliary drainage (ERCP or PTBD), antibiotics and resuscitation"
            ]
          },

          {
            heading: "10. Whipple's operation (what to say if asked)",
            items: [
              "Removed: head of pancreas with the uncinate process, duodenum, gallbladder, distal common bile duct, and the distal stomach (classic) or the stomach is preserved with the pylorus (pylorus-preserving), with regional lymph nodes",
              "Reconstruction: pancreaticojejunostomy (or pancreaticogastrostomy), hepaticojejunostomy, and gastrojejunostomy (or duodenojejunostomy in the pylorus-preserving type)",
              "Early complications: pancreatic fistula, delayed gastric emptying, haemorrhage, bile leak, intra-abdominal collection and wound infection",
              "Late complications: diabetes, exocrine insufficiency, marginal ulcer, weight loss"
            ]
          },

          {
            heading: "11. Complications of obstructive jaundice",
            items: [
              "Cholangitis and septicaemia",
              "Coagulopathy and bleeding (vitamin K deficiency)",
              "Acute kidney injury and hepatorenal syndrome",
              "Malnutrition, delayed wound healing and wound dehiscence",
              "Biliary cirrhosis and liver failure if obstruction is prolonged",
              "Intractable pruritus"
            ]
          },

          {
            heading: "12. Common pitfalls in the exam",
            items: [
              "Giving a diagnosis without naming the level and the likely cause",
              "Forgetting to exclude hepatitis and haemolytic causes",
              "Not mentioning staging (CT) before declaring a tumour resectable",
              "Listing investigations without saying what each one adds",
              "Forgetting vitamin K, hydration and cholangitis cover in preparation"
            ]
          }
        ],

        viva: [
          {
            q: "State Courvoisier's law.",
            a: "In a jaundiced patient a palpable, non-tender gallbladder is unlikely to be caused by gallstones, because a gallbladder chronically scarred by stones is unable to distend. It usually indicates malignant obstruction below the cystic duct, such as carcinoma head of pancreas or periampullary carcinoma. Exceptions are double impaction and mucocele."
          },
          {
            q: "What is Charcot's triad, and what is Reynolds' pentad?",
            a: "Charcot's triad is fever with rigors, jaundice and right upper quadrant pain; it indicates acute cholangitis. Reynolds' pentad adds hypotension (shock) and altered mental state, and indicates severe suppurative cholangitis."
          },
          {
            q: "How do you differentiate obstructive from hepatocellular jaundice?",
            a: "Obstructive jaundice usually has pruritus, dark urine, pale stool, and urinary bile salts with absent urobilinogen. Conjugated bilirubin and ALP and GGT are disproportionately raised, and the bile ducts are dilated on ultrasound. In hepatocellular jaundice there is usually a prodrome or chronic liver disease signs, AST and ALT are markedly raised, urinary urobilinogen is present, and the ducts are not dilated."
          },
          {
            q: "Why is vitamin K given in obstructive jaundice?",
            a: "Bile salts are needed to absorb fat-soluble vitamins. In obstruction vitamin K is not absorbed, so factors II, VII, IX and X are not synthesised and the PT is prolonged. Parenteral vitamin K corrects this and reduces the bleeding risk before surgery or instrumentation."
          },
          {
            q: "Why is serum ALP raised in obstructive jaundice?",
            a: "Cholestasis induces increased synthesis of ALP by the bile duct epithelium and its release into the blood. A raised GGT confirms that the source is hepatobiliary rather than bone."
          },
          {
            q: "What is the role of CA 19-9?",
            a: "CA 19-9 is raised in many patients with pancreatic and biliary cancer, but it is also raised in benign cholestasis and cholangitis, and it is absent in Lewis antigen-negative people. It is therefore not used alone for diagnosis, but is useful as a baseline, for prognosis and for follow-up after treatment."
          },
          {
            q: "Which investigation do you do first, and why?",
            a: "Ultrasonography is the first-line test: it is cheap, non-invasive and widely available, and shows duct dilatation, stones, the gallbladder, a mass and liver metastases. If a malignant cause is suspected, a contrast-enhanced CT scan follows for staging and resectability, and MRCP or ERCP is used to define the biliary tree and treat the obstruction."
          },
          {
            q: "When would you do pre-operative biliary drainage?",
            a: "It is not routine, because it adds infective complications. It is considered when there is cholangitis, a long delay before surgery with very high bilirubin, severe pruritus, renal dysfunction, or when neoadjuvant chemotherapy is planned."
          },
          {
            q: "Describe Whipple's pancreaticoduodenectomy.",
            a: "The head and uncinate process of the pancreas, the duodenum, the gallbladder, the distal bile duct and either the distal stomach (classic) or none of the stomach (pylorus-preserving) are removed with regional nodes. Reconstruction consists of pancreaticojejunostomy, hepaticojejunostomy and gastrojejunostomy or duodenojejunostomy."
          },
          {
            q: "Which criteria make a pancreatic head tumour unresectable?",
            a: "Distant metastases (liver, peritoneum, distant nodes), encasement of the superior mesenteric artery or coeliac axis, and occlusion of the superior mesenteric or portal vein that cannot be reconstructed. Tumours with limited vascular involvement are called borderline resectable and are usually offered neoadjuvant therapy."
          },
          {
            q: "How do you palliate unresectable periampullary carcinoma?",
            a: "Biliary drainage with an endoscopic self-expanding metal stent (or PTBD), duodenal stenting or gastrojejunostomy for gastric outlet obstruction, coeliac plexus neurolysis for pain, pancreatic enzyme supplements, nutritional support and palliative chemotherapy. Surgical double bypass is used when unresectability is found at laparotomy."
          },
          {
            q: "Describe the Bismuth-Corlette classification.",
            a: "It classifies hilar cholangiocarcinoma. Type I is below the confluence of the hepatic ducts, type II involves the confluence, type IIIa also involves the right hepatic duct, type IIIb also involves the left hepatic duct, and type IV involves both hepatic ducts or is multifocal."
          },
          {
            q: "What are the complications of ERCP?",
            a: "Acute pancreatitis (the most common), bleeding after sphincterotomy, duodenal perforation, cholangitis, and complications of sedation."
          }
        ]
      }

      /* To add Case 2, put a comma after the closing brace above,
         then paste a new case block here. */
    ]
  };
})();
