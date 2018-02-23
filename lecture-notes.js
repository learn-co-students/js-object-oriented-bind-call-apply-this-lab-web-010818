class Interruption {
  constructor(typeOfInterruption) {
    this.typeOfInteruption = typeOfInterruption;
  }
  deploy() {
    console.log(this.typeOfInterruption)
  }
}

class Lecture {
  startLecture(interruption) {
    console.log('Lecture started')
    if (onStartCallback) {
      onStartCallback();
    }
  }
}

var interruption = new Interruption("Flood from above");
var lecture = new Lecture
lecture.start();
interruption.deploy();
lecture.start(interruption.deploy.bind(interruption);


    //bind(x) sets this as x when called in function
    //call takes in an object and multiple arguments (obj,arg1,arg2,arg3,arg4)
    //apply takes an object and an array of arguments (obj,[args])