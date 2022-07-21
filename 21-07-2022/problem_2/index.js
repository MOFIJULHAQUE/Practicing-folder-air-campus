const course = {
    lecture : 30,
    section : 5,
    title : 'java',
    notes : {
        introduction : 'welcome to this course',
    },
    enroll(){
        console.log('you are enrolled in this course');
    }
};

course.enroll();
console.log(course.title);
delete course.section;

course.about = 'nothing to say';
console.log(course);
