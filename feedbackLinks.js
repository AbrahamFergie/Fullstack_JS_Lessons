

const find = require('find');
const join = require('path').join;
const fs = require('fs');

const fullTimeWeeks = find.fileSync(/.*[Ll]esson[Pp]lan.md/, join(__dirname, '02-lesson-plans/full-time'));

const partTimeWeeks = find.fileSync(/.*[Ll]esson[Pp]lan.md/, join(__dirname, '02-lesson-plans/part-time'));

const liveOnlineWeeks = find.fileSync(/.*[Ll]esson[Pp]lan.md/, join(__dirname, '02-lesson-plans/online-part-time'));

const getFeedbackString = (week, day, format) => 
`
### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=${format}&sentiment=positive&lesson=${week}.${day})
[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=${format}&sentiment=negative&lesson=${week}.${day})
`;

const makeWriteLinks = (format) => {
  return (path) => {
    const week = path.match(/([0-9]+)\-Week/)[1];
    const day = path.match(/([0-9]+)\-Day/)[1];

    const toWrite = getFeedbackString(week, day, format);

    fs.appendFileSync(path, toWrite);
  };
};

fullTimeWeeks.forEach(makeWriteLinks('ft'));

partTimeWeeks.forEach(makeWriteLinks('pt'));

liveOnlineWeeks.forEach(makeWriteLinks('lo'));
