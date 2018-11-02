<?php

define('DB_NAME', 'ecfm');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');

$link = mysql_connect('localhost','root','');

if (!$link) {
     die('Could not connect: ' . mysql_error());
     }

     $db_selected = mysql_select_db(DB_NAME, $link);

     if (!$db_selected) {
     die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
     }

    $q1 = $_POST['q1'];  
$q2 = $_POST['q2'];  
$q3 = $_POST['q3'];  
$q4 = $_POST['q4'];  
$q5 = $_POST['q5'];  
$q6 = $_POST['q6'];  
$q7 = $_POST['q7'];  
$q8 = $_POST['q8'];  
$q9 = $_POST['q9'];  
$q10 = $_POST['q10'];  
$q11 = $_POST['q11'];  
$q12 = $_POST['q12'];  
$q13 = $_POST['q13']; 
 $query = " INSERT INTO Library ( q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13 )  VALUES ( '$q1', '$q2', '$q3', '$q4', '$q5', '$q6', '$q7', '$q8', '$q9', '$q10', '$q11', '$q12', '$q13' ) "; 
 $result = mysql_query($query); 

 if( $result )
 {
 	echo 'Success';
 }
 else
 {
 	echo 'Query Failed';
 }

     mysql_close();
	 ?> 	  

<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>ECFM</title>
    <link rel='shortcut icon' href='../favicon.png' type='image/x-icon' />
    <link rel="stylesheet" href="../css/styles.en.css">
    <link rel="stylesheet" type="text/css" href="../d_css/css/common7869.css?nm0" />
</head>
<body>
<div>


	<a href="../en.html"><div id="homeicon"></div></a>
		
<div class="sec" id="certificates">

<canvas id="world"></canvas>
<script>(function() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

  NUM_CONFETTI = 350;

  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

  PI_2 = 2 * Math.PI;

  canvas = document.getElementById("world");

  context = canvas.getContext("2d");

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  Confetti = (function() {
    function Confetti() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    Confetti.prototype.replace = function() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    };

    Confetti.prototype.draw = function() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    };

    return Confetti;

  })();

  confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
  })();

  window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };

  step();

}).call(this);

//# sourceURL=pen.js
</script>

	<div id="certitle">
	THANK YOU
<P align="center" ><FONT color="#800000" face="Times New Roman" ></FONT>&nbsp;</P>
<P align="center" ><FONT color="#800000" size="5" face="Times New Roman" >Do you want to give one more feedback?</FONT></P>
<P align="center" ><FONT color="#800000" size="7" face="Times New Roman" ><A href=http://localhost/ecfm.com/en/academic.html >click here...</A></FONT></P>
<P align="center" ><FONT color="#800000" size="7" face="Times New Roman" ></FONT>&nbsp;</P>
<P align="center" ><FONT color="#800000" size="7" face="Times New Roman" ></FONT>&nbsp;</P>

	
	
	
	</div>
	



</body>

</html>