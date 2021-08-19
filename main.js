import './style.css';
import "tailwindcss/dist/tailwind.css";
import $ from "jquery";

$(window).on('load', function(){
  $('.preloader').delay(2000).fadeOut();
  $('.backg').delay(2000).fadeOut();
});

function populateCards(currencyData){
  console.log("currencyData", currencyData);
  $.each(currencyData, function(index , element){
    //console.log("index", index, "element" , element)
    if(index===0){
      $(".currency-card");
      $(".currency-card").find(".currency-title").text(element.name);
      $(".currency-card").find(".currency-symbol").text(element.symbol);
      $(".currency-card").find(".currency-price").text(Number(element.priceUsd).toFixed(2));
      $(".currency-card").find(".currency-rank").text(element.rank);
    }
    else{
      const currencyCardClone = $(".currency-card").first().clone();
      currencyCardClone.find(".currency-title").text(element.name);
      currencyCardClone.find(".currency-symbol").text(element.symbol);
      currencyCardClone.find(".currency-price").text(Number(element.priceUsd).toFixed(2));
      currencyCardClone.find(".currency-rank").text(element.rank);
      $('.card-container').append(currencyCardClone);
    }
  })
}

function fetchData(){
 $.ajax({
   url: "https://api.coincap.io/v2/assets?limit=6 ", 
   success: function(result){
     //console.log("result", result);
     const currencyData = result.data;
     populateCards(currencyData);
   },
}); 
}

$(window).on("load", function() {
   fetchData();
});