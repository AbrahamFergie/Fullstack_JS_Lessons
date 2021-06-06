## 01-Day Lesson Plan - Joys of JavaScript <!--links--> &nbsp; [⬅️](../../01-Week/05-Day/05-Day-LessonPlan.md) &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)

### Overview

Today's class is focused on providing students with the very basics of JavaScript. For many, this will be their first foray into JavaScript as a programming language.

`Summary: Complete Activities 1-18 in Unit 03`

##### Instructor Priorities

* Students should understand what each of the following terms means: `console.log`, `alert`, `prompt`, `confirm`, `variable`, `array`, and `if/else`.
* Students should complete the `03-PizzaVariables` activity.
* Students should complete the `07-SushiPrompt` activity.
* Students should complete the `09-ConditionalActivity` activity.
* Students should be given a primer on arrays and guided through examples of their use.
* Students should understand what a `for` loop is and how to use one to loop through an array.
* Students should complete the `18-ZooLoop`.

##### Instructor Notes

* Welcome to Week 2! In this class, you will be giving students their first primer on JavaScript as a programming language. Many of your students will have little clue what JavaScript is, let alone how to use it. Be prepared for the simplest bugs, from missing quotation marks to utter confusion in setting a variable. Today you suckle your children with the wisdom of the fundamentals!

* Today's class also aims to cover a lot of ground very quickly. For perspective, today's class will cover the following: Variables, Conditionals, Console Logging / Alerts, and Arrays. The homework activity is also fairly challenging, and it will really require students to keep up. Try to move through the material as quickly as you can without sacrificing comprehension from the baseline student.

* In every case for today, pre-coded instructor demos are provided for you. However, because of the simplicity of today's class, feel free to code your own examples on the fly. Part of the reason we have pre-coded versions is for when we share the directory with students since it becomes easy to copy over into the in-class repo. Don't let that limit your imagination though!

* **Important Point:** In today's class you will be Slacking out JavaScript files to students. For whatever reason, Slack adds hidden characters to JavaScript which render the code dysfunctional. To avoid this happening, make sure that students are downloading the file directly from Slack and that they're NOT just copying and pasting from the snippets you send out. This will single-handedly confuse a ton of students. Make sure they are doing this.

* After each activity, be sure to Slack out the complete solution so students can use them during the next activity.

* You may want to Slack the slides out to students in advance as well. Your choice!

![1-SlackDownload](Images/1-SlackDownload.png)

* Have your TAs reference [01-Day-TimeTracker](01-Day-TimeTracker.xlsx) to help keep track of time during class.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ed1f47e5-350a-4737-b1e8-786f58b70ea0)

- - -

### Class Objectives

* To gain a preliminary grasp of JavaScript definitions and of basic syntax.
* To utilize variables, logging, arrays, and if/else statements to create simple JavaScript applications.
* To understand the use and syntax of JavaScript's `for` loops.
- - -

### 1. Everyone Do: Welcome Students (1 min)

* Welcome students and see how they are doing while opening up the PowerPoint [JoysofJS](SlideShow).

### 2. Instructor Do: Today's Class (1 min)

Begin going through the slides.

* Take a moment to let students know the agenda for today.

### 3. Instructor Do: How to Learn JavaScript (5 mins)

* Students may be unnerved by the fact that they are learning JavaScript. Help them know how to learn it correctly.

* You can use the following verbiage as a guide to how to talk about each slide:
  * **Your Brain on JavaScript:** Learning JavaScript will require having a lot of "little pieces" of code in your mind floating around. The key is in knowing how these pieces fit together to build useful things.
  * **Take Notes:** Self-explanatory, but basically, students should likely be taking a few notes here and there; primarily on your explanations of why some JavaScript piece matters and/or of how to use it.
  * **Keep Organized:** Many students around this time start to have files in literally every location possible. It gets incredibly confusing trying to help them when everything is so scattered. Let them know that a little folder organization can go a long way in creating easy-to-read applications.
  * **Overall Tips:** Just read these. Self-explanatory. Key point&mdash;encourage students to REDO coding exercises on their own. Many students just go home and re-flip through slides or read through code without actually trying to do it themselves. Hands-on experience is a lot better than looking code over secondhand.

### 4. Partners Do: Code Dissection (7 mins)

* Let students know that a big part of JavaScript learning requires you to "learn on the fly".

* Then Slack out the following file and instructions to students:

  * **File**

    * `js-dissect.html` (01-CodeDissection)

  * **Instructions**

    * Download the file sent to you via Slack.

    * IMPORTANT: When downloading any code going forward, be sure to hit "Download". **If you copy and paste directly from Slack, your code will not work!**

    * Open the file in Chrome, and observe what happens.

    * With a partner, try to explain how the code connects to the events that happen on the page.

    * Note: We haven't covered JavaScript before, but a big part of being a developer is learning on the fly!

* **Instructor / TA Note:** Do not go over this activity after the time is done. Just move onto the next activity. Students will come back to this later after they've learned more.  

### 5. Instructor Do: What is JavaScript (2 mins)

* Spend a few brief moments explaining what JavaScript is. Try to emphasize what it does in relation to HTML/CSS (i.e. JavaScript is the language that creates "interactivity and more").

### 6. Instructor Do: Variables Slides + Demo (6 mins)

* Go through the preliminary slides on Variables. Wait for the "Instructor Demo" slide before live-coding.

* At this point students should just understand that variables can be strings, numbers, and booleans (leave out the bit about functions, objects, etc. for the time being since this could confuse them).

* When doing the demo, feel free to create your own example on the fly. Otherwise, there is an example inside [02-BasicVariablesDemo](../../../../01-Class-Content/03-javascript/01-Activities/02-BasicVariablesDemo).

* Make sure students know that strings require quotation marks but that numbers and booleans do not.

### 7. Students Do: Variable Activity (10 mins)

* Slack out the following files and instructions to students.

  * **Files**

    * `pizza-variables.html` in `03-PizzaVariables/Unsolved`

  * **Instructions**

    * Using the instructions in the file sent to you, fill in the missing JavaScript code to create variables.

    * When you are done, open the file in Chrome and check the output.

    * If you successfully completed the activity, you should see a series of pop-up windows with text inside.

    * Finally, look at the rest of the code and try to figure out why the text displayed the way it did.

### 8. Instructor Do: Review Variable Activity (4 mins)

* Spend a few moments reviewing the activity [03-PizzaVariables/Solved](../../../../01-Class-Content/03-javascript/01-Activities/03-PizzaVariables/Solved). In discussing the solution, explain both the variable assignment and the way strings are combined in the alerts.

    ![3-Variable_1](Images/3-Variable_1.png)

    ![3-Variable_2](Images/3-Variable_2.png)

### 9. Instructor Demo: Console Log (4 mins)

* Proceed with the slides and the console log demo. You can either open the solution found in [04-ConsoleLogDemo](../../../../01-Class-Content/03-javascript/01-Activities/04-ConsoleLogDemo) or create your own example to show what console log does.

* Be sure to point out how you can console.log either strings or variable values.

    ![4-ConsoleLog_1](Images/4-ConsoleLog_1.png)

* Also show students where in Google Inspector the line `console.log` outputs to.

    ![4-ConsoleLog_2](Images/4-ConsoleLog_2.png)

* Briefly explain the concept of a function as "code that does a thing and lives somewhere else."

  * Explain that `console.log` is a function that prints a message and that "lives" in the JavaScript engine.

  * Explain that we can often give functions "things to work with." In this case, we give `console.log` a _message_ to print.

  * Explain that later on, students will write their own functions, which they'll use the same way.

  * Refrain from a more detailed discussion of arguments, etc. This explanation is simply to provide context for entities such as `alert`, `console.log`, etc.

### 10. Instructor Do: Console Log Slides (5 mins)

* Start to go through the slides on console log.

* Make certain to show students how the `console.log` statement can be used to display text, variables, or a combination of the two.

### 11. Students Do: Console Log Activity (7 mins)

* Slack out the following files and instructions:

  * **Files**

    * `pizza-variables-2.html` in `05-PizzaConsole/Unsolved`

  * **Instructions**

    * Using the file sent to you as a guide, modify the code so that it uses `console.log` instead of alerts to display messages.

    * With a partner, discuss the difference between using `console.log` and `alert`.

### 12. Instructor Do: Review Console.log Activity (7 mins)

* Have students offer their answers to the assignment and have them explain their changes.

* Also ask students why they might use one form of output versus another.


### 13. Instructor Demo: Alerts, Prompts, Confirms (5 mins)

* Use the file inside [06-PromptDemo/prompt-demo.html](../../../../01-Class-Content/03-javascript/01-Activities/06-PromptDemo/prompt-demo.html), and walk students through the code.

* Be sure to point out the differences between `confirm`, `alert`, and `prompt`.

* **Important:** Be sure to point out how `prompt` and `confirm` create data that can be stored in a variable directly.

  * Remind students that `alert`, `prompt`, and `confirm` are _functions_.

  * Explain that functions that "give you something back" are said to _return_ something.

  * Explain that `prompt` and `confirm` _return_ whatever the user enters in the text prompt.

      ![5-PromptDemo](Images/5-PromptDemo.png)

### 14. Instructor Do: Alerts, Prompts, Confirms Slides (5 mins)

* Go over the remaining slides on this section. Create engagement by having students remind you of the differences between the three functions.

### 15. Students Do: Alert Activity (15 min)

* At this point, Slack out the following files and instructions.

  * **Files**
    * `prompt-sushi.html` in `07-PromptSushi/Unsolved`

  * **Instructions**
    * Write JavaScript code that does the following:
      * Using a confirm, ask the user, "Do you like \_?" Store their response in a variable.
      * Using a prompt, ask the user, "What kind of \_ do you like?" Store their response in a variable.
      * Alert both variables to the screen.

### 16. Instructor Do: Review Alert Activity (4 mins)

* Go over the previous activity using [prompt-sushi.html](../../../../01-Class-Content/03-javascript/01-Activities/07-PromptSushi/Solved/prompt-sushi.html) in `07-PromptSushi/Solved`.

### 17. Instructor Do: Document.write (4 mins)

* Go over the slide on `document.write`. We'll be demonstrating it in code in a future slide.

### 18. Instructor Demo: If/Else Statement (8 mins)

* Proceed with the slides to the demo of conditionals. Use [08-ConditionalDemo/conditional-demo.html](../../../../01-Class-Content/03-javascript/01-Activities/08-ConditionalDemo/conditional-demo.html) as a starting point. Walk students through the fact that the confirm prompt is used to grab a boolean.

    ![6-ConfirmConditional](Images/6-ConfirmConditional.png)

### 19. Instructor Slides: If/Else Statement (5 mins)

* Proceed through the instructor slides on conditionals.

### 20. Partners Do: If/Else Activity #1 (15 mins)

* Slack out the instructions below.

  * **Files**

    * None

  * **Instructions**

    * Create a website (from scratch) that asks users if they eat steak.

    * If they respond with "yes", write the following to the page: "Here’s a Steak Sandwich!"

    * If they respond with "no", write the following to the page: "Here’s a Tofu Stir-Fry!"

    * Bonus: Ask what the user’s birth year is. If they are under 21, alert the following: "No Sake for you!"

    * Hint: You will need to use `document.write()` from a few slides back.

- - -

### 21. LUNCH BREAK (30 mins)

- - -

### 22. Instructor Do: Review If/Else Activity #1 (10 mins)

* Review the solution found in [09-ConditionalActivity](../../../../01-Class-Content/03-javascript/01-Activities/09-ConditionalActivity). Point out the uses of conditionals and of `document.write`. For the bonus, run the program with various ages, and show students how each elicits a different output.

    ![7-Sake](Images/7-Sake.png)

* Slack out the video review for this activity which can be found [here](https://www.youtube.com/watch?v=rlhhRVO5EOg).

### 23. Everyone Do: If/Else Activity #2 (10 mins)

* Show the following file on screen: [conditional-demo-2.html](../../../../01-Class-Content/03-javascript/01-Activities/10-ConditionalActivity2/conditional-demo-2.html) in `10-ConditionalActivity2`.

* Then, as a class, go through `if` statements and try to predict which of the alerts will get triggered.

* Then run the program to see if your expectation matched how it functioned.

    ![8-Conditionals](Images/8-Conditionals.png)

### 24. Instructor Do: Arrays Slides (5 mins)

* Run through the Array example in the slides. Describe arrays as being like "lists" or "collections" of variables. Each variable has its own index ID (sort of like the "pen" number for our Zoo example).

* We can retrieve any value in the array by referencing its index.

* Indexes start at 0.

### 25. Instructor Do: Array Demo (6 mins)

* Open the file [arrays-demo.html](../../../../01-Class-Content/03-javascript/01-Activities/11-ArraysDemo/arrays-demo.html) in `11-ArraysDemo`. Show students how this example matches the one in the slides.

* Point out how the index system works (i.e. starts at 0 and ends one before the length).

### 26. Everyone Do: Class Code Dissection (15 mins)

* Slack out the following file and instructions to students.

  * **File:**

    * `arrays-activity.html` in `12-ArraysActivity/Unsolved`

  * **Instructions:**

    * With a partner, take a few moments to look over the following code.

    * Above each `console.log()` write a comment "predicting" what you think the output will be.

    * HINT: Comments are the grayed lines that begin with `//`. These lines are ignored by JavaScript, and they allow you to explain your code. Commenting your code is an extremely useful habit to get into as it allows other developers to more easily read your code. It will also help you better understand your own applications when you look back at them.

* **Instructor / TAs:** Review with the class when complete.


### 27. Students Do: Challenge 1 - Bands Activity (10 mins)

* Slack out the instructions associated with the example in [13-Bands](../../../../01-Class-Content/03-javascript/01-Activities/13-Bands/README.md). This activity is intended to be done from scratch.

  * **Instructions**

    * Create a website that accomplishes the following:

      * Create an array of your favorite bands.

      * With a prompt, ask the user's favorite band.

      * If it's one of your favorites, alert: "YEAH I LOVE THEM!"

      * If it's not, alert: "Nah. They're pretty lame."

      * Hint:  You will need to research how to use `.indexOf()`.

      * Hint: You will need to research how to use `.toLowerCase()`.

### 28. Everyone Do: Basic JS Dissection (3 mins)

* Slack out the following file from yesterday and have students re-examine it.

* Give them a few minutes to examine it, and immediately have a few students explain it to the class.

  * **File**

    * `js-dissect-unsolved.html`in `14-JSDissect/Unsolved/`

  * **Instructions**

    * Take a few minutes to quickly look through the attached file. With a partner, discuss what you expect to happen when the code is run.

    * Prepare to share your thoughts with the class.

* After you go over the activity, if there are still questions, Slack out the fully commented file [js-dissect-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/14-JSDissect/Solved/js-dissect-solved.html) in `14-JSDissect/Solved`.

### 29. Everyone Do: Array Logging (5 mins)

* Slack out the file and the instructions below.

* Read the instructions aloud, and call on students to help you live-code the activity.

  * **File**

    * `array-logs-unsolved.html` in `15-CoolPeopleArray/Unsolved`

  * **Instructions**

    * Follow the instructions provided in the file to `console.log` each of the names in the `coolPeople` variable.

    * Hint: You should be repeating the same line 6 times.

* Slack out [array-logs-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/15-CoolPeopleArray/Solved/array-logs-solved.html) in `15-CoolPeopleArray/Solved` when finished.

### 30. Everyone Do: Array Setting (5 mins)

* Slack out the file and the instructions below.

* Read the instructions aloud, and call on students to help you live-code the activity.

  * **File**

    * `array-setting-unsolved.html` in `16-ArraySetting/Unsolved`

  * **Instructions**

    * Follow the instructions in the file provided to convert each item in the array to lower case.

    * Make sure to only add in lines of code where instructed.

    * Hint: You will need to use the `.toLowerCase()` method. Research if you don’t remember how to use it.

    * Be prepared to share when time is up.

* Slack out [array-setting-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/16-ArraySetting/Solved/array-setting-solved.html) in `16-ArraySetting/Solved` when finished.

### 31. Instructor Do: For Loops (5 mins)

* Go through the slides introducing the concept of `for` loops. Re-use the example of the Zoo Array as shown on the slides.

### 32. Students Do: For Loop Dissection (5 mins)

* Slack out the file and the instructions below.

  * **File**

    * `my-first-loop.html`in `17-MyFirstLoop`

  * **Instructions**

    * With a partner, spend a few moments trying to dissect the code sent to you.

    * Try to explain to one another what is happening with each line of code.

    * Feel free to do research if you are stumped. As a hint, look into the phrase “for-loop.”

### 33. Instructor Do: For Loops Cont. (10 mins)

* Continue through the slides and demonstrate how the previous example worked.

* Point out that the iteration index, `i`, continually increments to it until it reaches the value `array.length - 1`.

  * Point out how the selected vegetable changes on each loop iteration.

### 34. Students Do: For Loop Zoo (15 mins)

* Slack out the file and the instructions below.

  * **File**

    * `zoo-loop-unsolved.html` in `18-ZooLoop/Unsolved`

  * **Instructions**

    * Use `for-loops`  to rewrite the file sent to you via Slack.

    * If you need help, use the code from the previous example as a guide.

    * Once you think your code is functioning properly, share it with the person sitting next to you.  

### 35. Instructor Do: Review Activity (5 mins)

* Review [zoo-loop-solved.html](../../../../01-Class-Content/03-javascript/01-Activities/18-ZooLoop/Solved/zoo-loop-solved.html) in `18-ZooLoop/Solved`.

    ![Images/5-ZooLoop.png](Images/5-ZooLoop.png)

* Then Slack the solution out to students.

* Slack out the [video review for this activity](https://www.youtube.com/watch?v=zJO9g7S2_Xo) as well.

* Before moving on, review the concept of functions.

  * Explain that a function is a piece of code that lives somewhere and that performs a repeatable action.

  * Use `console.log` as an example to demonstrate the concept of arguments.

  * Finally, write a function that accepts an array as an argument and that logs the value at each of its indices.

  * Explain that just as `for` loops allow us to generalize _the process_ of looping through a given array, this function allows us to generalize _the array itself_ that we loop through.

### 36. TAs Do: Introduce Homework (1 min)

* At this point, TAs should introduce students to the homework. This typically just means opening the homework solution in the browser and showing students what the final product looks like or showing the video and talking over it.

### 37. Instructor Do: Questions (10 mins, or remaining time)

* If time remains and there isn't sufficient time for the challenges, spend the remainder of the class answering questions.

* If no time remains for the challenges, then encourage students to work on them at home.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=positive&lesson=02.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=ft&sentiment=negative&lesson=02.01)
