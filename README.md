
# Resume Parsing and Job Matching System (Rule-Based)

## Overview

This project implements a **rule-based Resume Parsing and Job Matching System** built using **Node.js**.  
The system extracts structured information from a candidate’s resume and matches it against multiple Job Descriptions (JDs) to calculate a **matching score**.

The implementation strictly follows the assignment requirement of **not using any Large Language Models (LLMs)** or generative AI APIs.

Instead, the system uses:

- Rule-based parsing
- Regular expressions
- Skill dictionary matching

---

# Features

The system performs the following tasks:

1. Upload and parse **PDF resumes**
2. Extract candidate **name**
3. Extract **skills** from resume
4. Parse **Job Descriptions**
5. Extract JD **skills**
6. Compare resume skills with JD skills
7. Calculate **matching score**
8. Return structured **JSON output**

---

# Tech Stack

Backend:

- Node.js
- Express.js

Libraries used:

- multer → File upload
- pdf-parse → PDF text extraction
- cors → API access

---



---

# Installation

Clone the repository:
git clone https://github.com/your-username/resume-parser-system.git



Go to project folder:
cd resume-parser-system

Install dependencies:
npm install


---

# Run the Server
node app.js

or
nodemon app.js



Server runs on:
http://localhost:5000

---

# API Endpoint

## Upload Resume
POST /upload-resume

