(function () {
    var story = angular.module("storyWriter");
    story.controller("storyCtrl", (function () {

        var ref = this;

        //  ---------- SET SELECTORS AND ARRAYS --------------------

        //try creating an array of objects; each object holds the string and array for these variables. 
        //Then, in the generic function, reference each object by its index in the array.  
        //This should bypass the issues we were having earlier, in which we were merely passing in a copy of the object.
        //Example:
        //    todoList.todos = [
        //      { text: 'learn angular', done: true },
        //      { text: 'build an angular app', done: false }];

        ref.aselect = "The big hairy"
        ref.adj = [
            "Add your own!",
            "The fanged and slathering",
            "A busily bumbling",
            "A murky-mooshy",
            "An inwardly inauspicious",
            "The award-winning",
            "A grumbling, griggly, grannooting",
            "The savagely smelly",
            "An easily entertained",
            "The sleepy",
            "The astutely blind",
            "An emotionaly disinclined",
            "The smugly snuggly",
            "An easily exasperated",
            "An independent",
            "The tentatively tentacled",
            "An attentive yet distracted",
            "The illustrious",
            "The incredibly elephantine",
            "A flamboyant",
            "A slithering, silent"
            ]

        ref.nselect = "caterpillar"
        ref.noun = [
            "Add your own!",
            "professor of Philosophy",
            "bandersnatch",
            "army of devoted minions",
            "dragon king",
            "worker bee",
            "neighbor",
            "sorceress",
            "caterpillar",
            "friend",
            "hippopatomus",
            "ballerina",
            "brick-layer",
            "politician",
            "phoenix",
            "Shiva",
            "student",
            "xylophone player"
        ]

        ref.pselect ="with spines all down his back"
        ref.prepos = [
            "Add your own!",
            "who was hiding under the bed",
            "who couldnt control his laughter",
            "inside of your head",
            "who torments all tyrants",
            "with tulips sprouting out of her ears",
            "with earthworms for hair",
            "whose eyes can see through time",
            "who can hear dreams passing",
            "with stars in his eyes",
            "who lusts for lasagna",
            "who rose from the ashes",
            "who came from over the mountains",
            "whose feet fall among the clouds",
            "with words of power vibrating in her throat",
            "whose mind could not banish doubt",
            "with a head full of dreams",
            "with no good intentions",
            "with snakes for hair"
        ]

        ref.vselect = "ate the whole tree!"
        ref.verb = [
            "Add your own!",
            "stole the cookie from the cookie jar!",
            "ran out amidst the falling snow.",
            "laughed and sang!",
            "cried over so much spilt milk.",
            "gave his friend a big bear hug.",
            "fought back against the tormentor!",
            "furiously finished the frittata.",
            "refused to open the door.",
            "looked out from under the mushroom.",
            "let me climb onto his back!",
            "immediately munched on my hat.",
            "said my name.",
            "uncovered her newest invention!",
            "swept aside the fallacies of myth.",
            "settled deeper into the silky mud.",
            "asked graciously for a favor.",
            "jumped to the ground with a BOOM."
        ];

        // ------------  FUNCTIONS TO RANDOMLY CYCLE THROUGH INPUT -------

        //  ADJECTIVE
        ref.randomAdj = function () {
            var array = ref.adj;
            var randomIndex = Math.floor(Math.random() * array.length);

            ref.aselect = array[randomIndex];
        }

        //  NOUN
        ref.randomNoun = function () {

            var array = ref.noun;
            var randomIndex = Math.floor(Math.random() * array.length);

            ref.nselect = array[randomIndex];
        }

        //  PREPOSITION
        ref.randomPrepos = function () {

            var array = ref.prepos;
            var randomIndex = Math.floor(Math.random() * array.length);

            ref.pselect = array[randomIndex];
        }

        // VERB
        ref.randomVerb = function () {

            var array = ref.verb;

            //if (array.length === 0) array = refill(array);
            var randomIndex = Math.floor(Math.random() * array.length);

            ref.vselect = array[randomIndex];

            //array.foreach(function(item){
            //    ref.vselect = item;
            //})

            //array.splice(randomIndex, 1);
        }

        //refill = function (array) {
        //    return array;
        //}

        //  -------- TOGGLE ---------------

        ref.inputA = false;
        ref.toggleA = function () {
            if (ref.aselect === "Add your own!") {
                ref.inputA = ref.inputA === false ? true : false;
            }
        }

        ref.inputN = false;
        ref.toggleN = function () {
            if (ref.nselect === "Add your own!") {
                ref.inputN = ref.inputN === false ? true : false;
            }
        }

        ref.inputP = false;
        ref.toggleP = function () {
            if (ref.pselect === "Add your own!") {
                ref.inputP = ref.inputP === false ? true : false;
            }
        }

        ref.inputV = false;
        ref.toggleV = function () {
            if (ref.vselect === "Add your own!") {
                ref.inputV = ref.inputV === false ? true : false;
            }
        }

        // --------   ADD YOUR OWN TO ARRAY ----------

        ref.addAdj = function () {
            ref.adj.push(ref.aselect);
            ref.inputA = false;
        }

        ref.addPrepos = function () {
            ref.prepos.push(ref.pselect);
            ref.inputP = false;
        }

        ref.addNoun = function () {
            ref.noun.push(ref.nselect);
            ref.inputN = false;
        }

        ref.addVerb = function () {
            ref.verb.push(ref.vselect);
            ref.inputV = false;
        }
        //todoList.addTodo = function () {
        //    todoList.todos.push({ text: todoList.todoText, done: false });
        //    todoList.todoText = '';
        //};

    }))
})();



/* ----------------- NOTES ON USING ANGULARJS --------------------------------------


(function () { //called an IIFE  Immediately Invoked Function Expression: avoids global variables
    var app = angular.module('storyWriter');

    app.controller('storyCtrl', ['$interval', (function ($interval) {      //$scope would go here if not using Controller as
                                            //creates controller, initiates function. We will reference this controller in the view.
        var ref = this;                     //this refers to this function only and minimizes confusion between variables of different controllers
        ref.name = "Abigail";
        ref.names = ['Abi', 'Dan', 'Justin', 'Matt', 'Chris'];
        ref.time = new Date();

        $interval = (function () {          //interval is an available built-in service
            scope.time = new Date();
        }, 1000)                            //second parameter is duration in ms

    })
    ])
        })();  //be sure to invoke the IFFE!

*/