function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var courses = [
    new Course("JavaScript Essential Training", "MOrten Rand-Hendriksen", 1, true, 0),
    new Course("Up and Running with ECMAScript 6", "Eve Porcello", 1, true, 123456)
];

console.log(courses[1].instructor);
