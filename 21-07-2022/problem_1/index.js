// factory function 
function createClass(){
    return{
        title : 'title',
        enroll(){
            console.log('you are enrolled');
        }
    }
}

const course = createClass('javascript');
course.enroll();
console.log(course);