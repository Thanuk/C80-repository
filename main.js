name_of_the_student_array = [];

function submit() {
    var display_name = [];

    for (var t = 1; t <= 4; t++) {
        var name_of_the_student = document.getElementById("name_of_the_student_"+t).value;
        name_of_the_student_array.push(name_of_the_student);
        console.log(name_of_the_student);
    }
    console.log(name_of_the_student_array);
    var Length_Student = name_of_the_student_array.length;
    console.log(Length_Student);

    for (var j = 0; j < Length_Student; j++) {
        display_name.push("<h3>Name - " + name_of_the_student_array[j] + "</h3>");
    }
    console.log(display_name);
    document.getElementById("display_name_with_commas").innerHTML = display_name;

    var remove_commas = display_name.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    var display_sort_name = [];
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var Length = name_of_the_student_array.length;
    console.log(Length);

    for (var k = 0; k < Length; k++) {
        display_sort_name.push("<h3>Name - " + name_of_the_student_array[k] + "</h3>");
    }

    var remove_commas = display_sort_name.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}     
