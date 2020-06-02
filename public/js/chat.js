var solved = false;

var input = document.getElementById("in");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
 event.preventDefault();
 document.getElementById("btn").click();
}
});

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}


async function check() {
  document.getElementById('in').value = "";
  solved = true;
  await sleep(800);
  solved = false;
  generateQ();

}

var acceptable = [
'George_Washington',
'John_Adams',
'Thomas_Jefferson',
'James_Madison',
'John_Quincy_Adams',
'Andrew_Jackson',
'Martin_Van_Buren',
'William_Henry_Harrison',
'John_Tyler',
'James_K_Polk',
'Zachary_Taylor',
'Millard_Fillmore',
'Franklin_Pierce',
'James_Buchanan',
'Abraham_Lincoln',
'Andrew_Johnson',
'Ulysses_S_Grant',
'Rutherford_B_Hayes',
'James_A_Garfield',
'Chester_A_Arthur',
'Grover_Cleveland',
'Benjamin_Harrison',
'William_Mckinley',
'Theodore_Roosevelt',
'William_H_Taft',
'Woodrow_Wilson',
'Warren_G_Harding',
'Calvin_Coolidge',
'Herbert_Hoover',
'Franklin_D_Roosevelt',
'Harry_S_Truman',
'Dwight_D_Eisenhower',
'John_F_Kennedy',
'Lyndon_B_Johnson',
'Richard_M_Nixon',
'Gerald_R_Ford',
'Jimmy_Carter',
'Ronald_Reagan',
'George_Bush',
'Bill_Clinton',
'George_W_Bush',
'Barack_Obama',
'Donald_J_Trump',
'One_Direction'
];

generateQ();



async function generateQ() {
  var index = Math.floor(Math.random() * acceptable.length);
  var page = acceptable[index];
  console.log(page);
  $.getJSON('https://en.wikipedia.org/api/rest_v1/page/summary/' + page + '?redirect=true', async function(data1) {
      var firstName, lastName, name;
      name = page;
      var underscore = name.indexOf('_');
      firstName = name.substring(0, underscore);
      name = name.substring(underscore+1);
      underscore = name.indexOf('_');
      name = name.substring(underscore+1);
      if (name.indexOf('_') != -1) {
          lastName = name.substring(name.indexOf('_')+1);
      } else {
          lastName = name;
      }
      console.log(lastName);
      let reF = new RegExp(firstName, 'gi');
      let reL = new RegExp(lastName, 'gi');
      console.log(reF);
      var content = data1['extract'];
      content = content.replace(reF, '_'.repeat(firstName.length));
      content = content.replace(reL, '_'.repeat(lastName.length));

      //document.getElementById('title').innerHTML = page;
      var subs = content.split(" ");
      var total = "";
      while (subs.length > 1) {
        console.log("yeet");
        await sleep(200);
          total += subs[0] + " ";
          document.getElementById('summary').innerHTML = total;

        subs.splice(0, 1);
        if (solved) {
          return;
        }
      }
      //wait(2000);
      document.getElementById('summary').innerHTML = content;

  });
}



// Make connection
//var socket = io.connect('http://wikibowl.herokuapp.com/');
//var socket = io.connect('http://localhost:3000');
var socket = io();
socket.on('connect', () => {
  document.getElementById('test').innerHTML = socket.id;
});
// change to process.env.port
