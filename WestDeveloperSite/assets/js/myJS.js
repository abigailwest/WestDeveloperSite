
//MODAL TEXT BOX COLOR CHANGE

    function textboxColor() {

        var textbox = document.getElementsByClassName("text-input");

        textbox.style.backgroundColor = "#ffffff";
    }
/*
   //SCROLL TO ANCHOR WITHIN DOCUMENT
    function filterPath(string) {
        return string
        .replace(/^\//,'')
        .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
        .replace(/\/$/,'');
    }
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');
    // Any links with hash tags in them (can't do ^= because of fully qualified URL potential)
    $('a[href*=#]').each(function() {
        // Ensure it's a same-page link
        var thisPath = filterPath(this.pathname) || locationPath;
        if (  locationPath == thisPath
            && (location.hostname == this.hostname || !this.hostname)
            && this.hash.replace(/#/,'') ) {
            // Ensure target exists
            var $target = $(this.hash), target = this.hash;
            if (target) {
                // Find location of target
                var targetOffset = $target.offset().top;
                $(this).click(function(event) {
                    // Prevent jump-down
                    event.preventDefault();
                    // Animate to target
                    $(scrollElem).animate({scrollTop: targetOffset}, 2000, function() {
                        // Set hash in URL after animation successful
                        location.hash = target;
                    });
                });
            }
        }
 */

    //FIVE NUMBERS
    function getValues() {
        var userEntry = document.getElementById("userEntryFive").value

        var splitEntry = userEntry.split(" ", 5);

        document.getElementById("min").innerHTML = "Minimum value: " + min(splitEntry);
        document.getElementById("max").innerHTML = "Maximum value: " + max(splitEntry);
        document.getElementById("product").innerHTML = "Product: " + product(splitEntry);
        document.getElementById("sum").innerHTML = "Sum: " + sum(splitEntry);
        document.getElementById("mean").innerHTML = "Mean: " + mean(splitEntry);
    }

    function min(numbers) {
        var minimum = Math.min(...numbers);
        return minimum;
    }
    function max(numbers) {
        var maximum = Math.max(...numbers);
        return maximum;
    }
    function product(numbers) {
        var product = 1;
        for (i = 0; i < numbers.length; i++) {
            product *= parseInt(numbers[i]);
        }
        return product;
    }
    function sum(numbers) {
        var sum = 0
        for (i = 0; i < numbers.length; i++) {
            sum += parseInt(numbers[i]);
        };
        return sum;
    }
    function mean(numbers) {
        var mean = (sum(numbers) / numbers.length);
        return mean;
    }
        /*
    //FACTORIAL
    function factorial(num) {
        
        var num = parseInt(num, 10);
        var temp = 1;

        if (num == 0)
            return 1;
        else if (isNaN(num))
            return "Not a valid number";
        else if (num < 0)
            return "Please enter a positive integer.";
        else
            for (var i = 1; i <= num; i++) {
                 temp *= i;
            }

        var answer = temp;
        return answer;
    }

    function getFactorial() {
        var num = document.getElementById("userEntryFactorial").value.trim();
        document.getElementById("resultFactorial").innerHTML = "Answer: " + (factorial(num));
    }

    //FIZZBUZZ
    function runMultiples() {

        var userEntry = document.getElementById("userEntryFizz").value
        var splitEntry = userEntry.split(" ", 2);

        var fullOutput = "";
        var newLine = "";

        for (var i = 0; i < splitEntry.length; i++) {
            splitEntry[i] = parseInt(splitEntry[i], 10);
        }

        for (i = 1; i <= 100; i++) {
            newLine = "";
            if ((i % splitEntry[0]) == 0 && (i % splitEntry[1]) == 0)
                newLine = "FizzBuzz";
            else if ((i % splitEntry[0]) == 0)
                newLine = "Fizz";
            else if ((i % splitEntry[1]) == 0)
                newLine = "Buzz";
            else
                newLine = i;

            fullOutput += newLine + "<br/>";

            document.getElementById("resultFizz").innerHTML = fullOutput;
        }
    }

//PALINDROME
    function invert(wordToInvert) {

        var invertedWord = "";

        for (var i = wordToInvert.length - 1; i >= 0; i--) {
            invertedWord += wordToInvert[i];
        }

        return invertedWord;

    }

    function testPalindrome() {

        var wordToInvert = document.getElementById("userEntryPalindrome").value;

        if (invert(wordToInvert) == wordToInvert)
            document.getElementById("resultPalindrome").innerHTML = "Congratulations, this is a palindrome!";
        else
            document.getElementById("resultPallindrome").innerHTML = "Sorry, this is not a palindrome."

    }
*/

//----------------------TESTING JQUERY ----------------//
$("#submitFive").click(getValues());