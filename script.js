$( document ).ready(function() {
 
    function Character(name, health, strength, agility, intelligence) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }

    var chosenCharacter;

    var fiftyFifty = function(){
        var randomNumb = Math.round(Math.random() * 2);
        if (randomNumb === 1) {
            return true;
        } else {
            return false;
        }
    };
    
    $('.choose-btn').click(function(){
        var chosenBtn = $(this).val();
        $('.professions').hide();
        $('.chosen-profession').show(function(){
            $('#ch-prof-txt').html("You have chosen to be a " + chosenBtn + "! Good luck!");
            $(this).css({"padding":"20px 30px"});
        });
        switch(chosenBtn) {
            case "policeman":
                chosenCharacter = new Character("policeman",5,10,5,0)
                break;
            case "scientist":
                chosenCharacter = new Character("scientist",5,5,0,10)
                break;
            case "dancer":
                chosenCharacter = new Character("dancer",5,0,10,5)
                break;
        }
    });

    $('#next-btn').click(function(){
        $('.chosen-profession').hide();
        $('.opening-scene').show();
    });

    $('#attack-btn, #sneak-btn, #wait-btn').click(function(){
        var result = $('.first-result').show().find('p');
        $('.opening-scene').hide();
        if (this.id == 'attack-btn') {
            if (chosenCharacter.strength === 10) {
                result.html("Bravo! You've killed your first zombie!");
            } else {
                if (fiftyFifty()) {
                    result.html("Somehow you managed to kill the zombie but it was really hard and you lost some health. Next time think twice before you made your decision");
                    chosenCharacter.health -= 3;
                } else {
                    result.html("Your not strong enough... You got killed and lost the game.")
                    chosenCharacter.health -= 5;
                }
            }
        } else if (this.id == 'sneak-btn') {
            if (chosenCharacter.agility === 10) {
                result.html("You have succesfully escape the building!");
            } else {
                if (fiftyFifty()) {
                    result.html("Phew, it's your lucky day, there's no doubt! But it was really dangerous, so maybe not try it again...");
                } else {
                    result.html("Zombie noticed you, weaponless, and killed you.");
                    chosenCharacter.health -= 5;
                }
            }
        } else if (this.id === 'wait-btn') {
            if (chosenCharacter.intelligence === 10) {
                result.html("Thanks to your brilliant mind you find a way to prepare acidic substance from what you found and you killed the zombie with it!");
            } else {
                if (fiftyFifty()) {
                    result.html("What are the odds that you mix some found substances and it will become something useful! You pour the toxic substance on the zombie and it died in agony.");
                } else {
                    result.html("You loose!");
                    chosenCharacter.health -= 5;
                }
            }
        }
    });
 
});