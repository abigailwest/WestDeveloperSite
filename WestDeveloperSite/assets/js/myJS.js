$(document).ready(function () {

// MODAL CLICK FUNCTIONS
    $("#submitFive").click(getValues);

    $('#submitFactorial').click(getFactorial);

    $('#submitFizz').click(runMultiples);

    $('#submitPalindrome').click(testPalindrome);

    $('#getFact').click(getFact);
    
    $('#getFact').click(borderShow);

// MODAL UNDERLYING FUNCTIONS

    //Five Numbers
    function getValues() {
        var userEntry = $('#userEntryFive').val();
        var splitEntry = userEntry.split(" ", 5);
        
        if (splitEntry.length < 5) {
            $('#min').text('Please enter five numbers.');
            return;
        };

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

            fullOutput += newLine + "  ";

            $('#resultFizz').html(fullOutput);
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
        $(".result").text("");
        $(".text-input").val("");
    });


    //MODAL TEXT BOX COLOR CHANGE
    $(".text-input").change(
        function () {
            $(this).css({'background-color' : '#ffffff'});
        });
  
    //AUTOFOCUS AND PAUSE MODAL   
    $('.modal').on('shown.bs.modal', function () {
        $(this).find('[autofocus]').focus();
        $('#carousel-javascript').carousel('pause');
    });
   
    //FUN FACT

    var factArray = [];

    function getFact() {

        if (factArray.length === 0) { factArray = refillFact(); };

        var randomIndex = Math.floor(Math.random() * factArray.length);
        $('#displayFact').html(factArray[randomIndex]);

        factArray.splice(randomIndex, 1);                  
     }

    function refillFact() {

        return [
            "After moving to western NC, I worked for most of a year as a custom cabinet maker. They were so impressed with my efficiency and attention to detail that I was soon promoted to running the entire production floor.",
            "When the economy crashed in 2009, I decided not to get a Masters of Fine Arts. Instead, I started my very own gluten-free bakery! It was more successful than I intended, and I ended up selling it one year later.",
            "I have summited four 14,000 foot peaks: Mt. Whitney, CA (twice); Mt. Shasta, CA; Mt. Sill, WY, and Snowmass Peak, CO. I also like to count K2, a 13,900 peak on the way to Capitol Peak, CO. Capitol is a fourteener than I still intend to conquer!",
            "In 2010, my now-husband and I hiked 1,300 miles on the Pacific Crest Trail - from the south end of the Sierra Nevada, CA, to Crater Lake, OR. We were on the trail for two and a half months!",
            "While studying abroad in Chile, I conducted a research experiment on the effect of community arts on social change.  Through this, I took part in mural and graffiti campaigns, and interviewed several former leaders of the movement against the dictator Augusto Pinochet.",
            "In 2011, I spoke on a 'Women in Business' panel at the Carolina Farm Stewardship Association’s Sustainable Agriculture Conference in North Carolina. I was the youngest participant.",
            "While acquiring my BFA, I focused on large-format woodcuts. Several of them are over 2' x 3' in size, and include over 150 hours of drawing and carving time."
        ];
    }

    function borderShow() {

        $('#displayFact').css({ 'border': '1px solid #16a085', 'border-radius':'5px' });
    }
});

