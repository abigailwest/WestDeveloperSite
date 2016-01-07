$(document).ready(function () {

// MODAL CLICK FUNCTIONS
    $("#submitFive").click(getValues);

    $('#submitFactorial').click(getFactorial);

    $('#submitFizz').click(runMultiples);

    $('#submitPalindrome').click(testPalindrome);

// MODAL UNDERLYING FUNCTIONS

    //Five Numbers
    function getValues() {

        var userEntry = $('#userEntryFive').val();
        var splitEntry = userEntry.split(" ", 5);

        $('#min').text('Minimum value: ' + min(splitEntry));
        $('#max').text('Maximum value: ' + max(splitEntry));
        $('#product').text('Product: ' + product(splitEntry));
        $('#sum').text('Sum: ' + sum(splitEntry));
        $('#mean').text('Mean: ' + mean(splitEntry));
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

    //Factorial
    function getFactorial() {
        var num = $('#userEntryFactorial').val();
        $('#resultFactorial').text('Answer: ' + (factorial(num)))
    }

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

    //Fizz Buzz
    function runMultiples() {

        var userEntry = $('#userEntryFizz').val();
        var splitEntry = userEntry.split(" ", 2);

        var fullOutput = "";

        var i = 0;
        $.each(parseInt(splitEntry[i], 10));

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

            $('#resultFizz').html(fullOutput);
            //.text will input <br/> as a string, but .html formats it as a line break
        }
    }

    //PALINDROME
    function testPalindrome() {

        var wordToInvert = $('#userEntryPalindrome').val();

        if (invert(wordToInvert) == wordToInvert)
            $('#resultPalindrome').text('Congratulations, this is a palindrome!');
        else
            $('#resultPalindrome').text('Sorry, this is not a palindrome.');
    }

    function invert(wordToInvert) {

        var invertedWord = "";

        for (var i = wordToInvert.length - 1; i >= 0; i--) {
            invertedWord += wordToInvert[i];
        }

        return invertedWord;
    }

    //RESET MODAL ON CLOSE
    $(".modal").on("hidden.bs.modal", function () {
        $(".result").text("")
        //.end()
        alert('test')
        $(".text-input").text("")
        alert('test');
    });

    //MODAL TEXT BOX COLOR CHANGE
    $(".text-input").change(
        function () {
            $(this).css({'background-color' : '#ffffff'});
        });
  
    //AUTOFOCUS WITHIN MODAL   
    $('.modal').on('shown.bs.modal', function () {
        $(this).find('[autofocus]').focus();
    });

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
   


    /*
  
*/

    //----------------------TESTING JQUERY ----------------//
});