var config = {
  apiKey: 'AIzaSyCPMLCgfULPgsjvVLlQjrBR9-N47b4ktAA',
  authDomain: "database-30dcf.firebaseapp.com",
  databaseURL: "https://database-30dcf.firebaseio.com/",
  projectId: "database-30dcf",
  storageBucket: "database-30dcf.appspot.com",
  messagingSenderId: "7555310310"
};

firebase.initializeApp(config);

// Gets called whenever the user clicks "sign in" or "sign out".
function toggleSignIn() {
  if (!firebase.auth().currentUser) { // if no user, handle login
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log("success");
    }).catch(function(error) {
      console.error("error", error);
    });
  } else { // handle logout
    firebase.auth().signOut();
  }
  //This disables the button until login or logout is successful
  $('#google').attr("disabled", false);
}

window.onload = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      if ($('.popup')[0]){
        $('.popup').remove();
      }
      $('#google').html('<i class="fab fa-google-plus"></i> Sign out');
      $('#google').css('background-color','#ecdece');
      $('#cart').show();
      $('#cart').html('<i class="fa fa-shopping-cart"></i>');
      $('#cart').css('background-color','#ecdece');
      
      var user = firebase.auth().currentUser;
      var userdb = firebase.database().ref('user/' + user.displayName);

      userdb.on('value', (snapshot)=> {
          if (snapshot.exists() && snapshot.val().cart_count != 0) {
              $('#cart').html('<i class="fa fa-shopping-cart"></i>&nbsp;' + snapshot.val()['cart_count']);
          } else {
              userdb.push();
              userdb.set({
                  email: user.email,
                  cart_count: 0,
                  total_price: 0,
                  1: 0,
                  2: 0,
                  3: 0
              });
          }
          
          var curr_window = window.location.pathname;
          if (curr_window.includes("cart") && $('#product')[0]) {
            var product_div = document.getElementById('product');

            if (snapshot.val().cart_count == 0) {
              $('#paypal-button').hide();
              product_div.innerHTML = '<h1>cart is empty ...</h1>';
            } else {

              for (let i = 1; i <= 3; i++) {
              
                var id = 'product' + i
                var template_id = id + '-template'; // convert i to a string
                
                for (let j = 1; j <= snapshot.val()[i]; j++) {
                  // var msg = '<% include ../helpers/product_in_cart %> ';
                  // var product_div = document.getElementById('product');
                  var product_template = document.getElementById(template_id);
                  var product_clone = product_template.cloneNode(true); 
                  product_clone.setAttribute('id', id);
                  product_div.appendChild(product_clone);
                  
                }
              }
              $('.total-product-price').html('<h1 style="text-align: right;">total</h1>' + '$' + snapshot.val()['total_price']);
              $('#paypal-price').html(snapshot.val()['total_price']);
            }
          }
      });
      // initializeStreamListener();
      
    } else {
      var curr_window = window.location.pathname;
      if (curr_window.includes("cart")) {
        window.location.href = "/";
      }
      
      $('#cart').hide();
      $('#google').html('<i class="fab fa-google-plus"></i> Sign in with Google');
      $('#google').css('background-color','#ecdece');
      
    }
    $('#google').attr("disabled", false);
  });
};