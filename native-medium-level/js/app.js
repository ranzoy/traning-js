/**
 * Click Generator
 */

var clickGenerator = {
    maxClick: 100,
    generateBtn: null,
    init: function(){
        this.tiles = document.getElementsByClassName("tile");
        this.generateBtn = document.getElementById("js-generate-click");
        this.resultsBtn = document.getElementById("js-show-results");
        this.resetBtn = document.getElementById("js-reset");
        this.events();
    },
    events: function(){
        this.generateBtn.addEventListener("click", this.generateClick.bind(this));
        this.resultsBtn.addEventListener("click", this.showResults.bind(this));
        this.resetBtn.addEventListener("click", this.resetResults.bind(this));
    },
    generateClick: function(){
        alert('generate');
    },
    showResults: function(){
        for(i=0;i<this.tiles.length; i++){
            this.qtyClicks = this.tiles[i].innerHTML;
            switch (true){
                case this.qtyClicks >= 26 && this.qtyClicks <=50:
                    this.tiles[i].className += " light-yellow";
                    break;
                case this.qtyClicks >= 51 && this.qtyClicks <=75:
                    this.tiles[i].className += " yellow";
                    break;
                case this.qtyClicks >= 76 && this.qtyClicks <=100:
                    this.tiles[i].className += " orange";
                    break;
                case this.qtyClicks >= 101:
                    this.tiles[i].className += " red";
                    break;
            }
        }
    },
    resetResults: function(){
        for(i=0;i<this.tiles.length; i++){
            this.tiles[i].innerHTML = '';
        }
    }
};

clickGenerator.init();
