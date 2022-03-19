name_of_the_student_array=[];
function submit()
{
    var display_srudent_array=[];
    
    for (var j = 1; j<=4; j++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }

    console.log(name_of_the_student_array);
    
    var length = name_of_the_student_array.length;
    console.log(length);

    for (var k = 0; k < length; k++)
    {
        display_srudent_array.push("<h4>NAME - "+name_of_the_student_array[k] + "</h4>")
        console.log(display_srudent_array);
    }

    console.log(display_srudent_array);
    document.getElementById("display_name_with_commas").innerHTML = display_srudent_array;

    var remove_commas = display_srudent_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

    var length = name_of_the_student_array.length;
    console.log(length);

    for (var k = 0; k < length; k++)
    {
        display_student_array_sorting.push("<h4>NAME - "+name_of_the_student_array[k] + "</h4>")
        console.log(display_student_array_sorting);
    }

    var remove_commas= display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}