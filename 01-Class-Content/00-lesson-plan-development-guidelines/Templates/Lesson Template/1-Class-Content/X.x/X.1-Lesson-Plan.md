# X.x Lesson Plan - Lesson Plan Name

### Overview

The **Overview** section contains a one- or two-sentence description of the lesson plan, and should enumerate the topics covered.

#### Instructor Priorities

* The **Instructor Priorities** section should contain a list of learning objectives covered by this lesson plan. Learning objectives for all lesson plans in the unit live in [Objectives](../../Objectives.md).

#### Instructor Notes

* The **Instructor Notes** section should contain any information the instructor needs to run class smoothly. This includes resources to slack out and/or packages to install before class; troubleshooting problems to anticpiate; etc.

- - -

### Class Objectives

* The **Class Objectives** section presents a student-facing list of goals for the lesson plan. These differ from learning objectives in that they are general, and are intended to set students' expectations rather than guide the development of instructional materials.

- - -

### 1. Instructor Do: Topic of Instruction (0:15)

**Objectives Met**

* **Objectives Met** sections are always set off by a heading of size H4 (####).

* Each **Instructor Do** and **Everyone Do** section must be associated with an Objectives Met section.

* This section lists the subset of objectives listed in the Instructor Priorities addressed by this heading and its associated activities and reviews.

- - -

* Lesson plans sections can bear one of four headings:

  * Instructor Do;

  * Students Do:

  * Everone Do; or

  * Partners Do.

* Headings are always of size H# (###).

* Headings are always followed by the length of time allotted for their content, as specified in the lesson's Time Tracker.

  * A 10 minute time allotment would be written: (0:10). Never write 10 min.

* **Instructor Do** sections provide step-by-step instructions as to how to introduce; explain; and reinforce the section's **topic of instruction**.

  * **Explain** clauses direct instructors to explain specific topics, such as features of a language or the usage of some function.

    * **Example**: Explain that `forEach` iterates over a list without requiring that we manually track array indices.

  * **Point out** clauses direct instructors to call attention to a particular phenomenon, and are primarily used for reinforcement.

    * **Example**: Point out that such an approach results in duplicate code, which we already know as a "code smell".

  * **Discuss** clauses direct instructors to prompt student feedback on a given topic, and imply the use of at least a few minutes' time.

    * **Example**: Discuss the benefits of using constructors to create similar objects.

  * Arbitrary other such clauses are acceptable where appropriate.

    * But, favor convention over creativity. Lesson plans are easier to read when they are consistent.

* All sections are written as bullet lists.

  * USe indentation to provide details on a larger point.

* Each bullet should consist of a single sentence. 

  * Two sentences are acceptable where necessary. But, two sentences should rarely be necessary.

### 2. Students Do: Activity (0:15)

* **Students Do** sections set off activities.

* In the future, all activities will have an associated README.md and directory structure, which will contain instructions; example files; and unsolved files; solved files.

  * Protocols for distributing activities have yet to be finalized.

* "Legacy" lesson plans typically contain instructions, which instructors slack to students. Lesson plans adhering to this format contain a list of instructions, formatted thus, and slacked to students via copy/paste:

* **Instructions**:

  * Instructions should be indented under the **Instructions** header.

  * Instructions should be succinct and specific, but not minutely detailed. For example, **do** write: "Add a model with properties for the user's first name; last name; and email". **Do not** write: "Add a `class` with `string` fields for the user's first name; last name; and email."

  * **Formatting** _in_ `instructions` is not visible when instructor's copy/paste them into Slack. Don't rely on formatting to communicate meaning.

  * Take extra care to avoid grammatical and orthographic errors in instructions, as they are student-facing text.

### 3. Everyone Do: Exploration (0:15)

* **Everone Do** headings set off sections of activities that students are intended to code and/or work through alongside the instructor's explanations.

* Everyone Do sections follow the same guidelines set forth for Instructor Do sections.

### 4. Partners Do: Activity (0:15)

* **Partners Do** headings set off sections for activities that students are intended to complete in groups—typically pairs.

* Partners Do sections follow the same guidelines set forth for Instructor Do sections.
