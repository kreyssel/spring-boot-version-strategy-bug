var scripts = document.getElementsByTagName('script');
if(scripts && scripts.length && scripts.length>0) {
	var src = scripts[scripts.length-1].src;
	if(src && src.indexOf('/v1/')>=0) { // checks if script src path contains 'v1'
		var e = document.getElementById('ph_js');
		if(e) {
			e.innerHTML = 'fixed paths works!';
			e.style.color = 'green';
			e.style.backgroundColor = 'yellow';
		}
	}
}

var img = document.getElementById('my_img');
if(img && img.src && img.src.indexOf('/i-')>=0) { // checks if img src path contains then hash splitter in filename
	var e = document.getElementById('ph_img');
	if(e) {
		e.innerHTML = 'content based paths works!';
		e.style.color = 'green';
		e.style.backgroundColor = 'yellow';
	}
}