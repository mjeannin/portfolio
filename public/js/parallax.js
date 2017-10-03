var img_by_sections = [
	{n: 1, url: '/public/img/img1.jpg'},
	{n: 'gallery1-1', url: '/public/img/img2.jpg'},
	{n: 'gallery1-2', url: '/public/img/img3.jpg'},
	{n: 'gallery1-3', url: '/public/img/img4.jpg'},
	{n: 3, url: '/public/img/img5.jpg'},
	{n: 5, url: '/public/img/img6.jpg'},
	{n: 'gallery2-1', url: '/public/img/img7.jpg'},
	{n: 'gallery2-2', url: '/public/img/img8.jpg'},
	{n: 'gallery2-3', url: '/public/img/img9.jpg'},
	{n: 'gallery2-4', url: '/public/img/img10.jpg'},
	{n: 7, url: '/public/img/img11.jpg'},
	{n: 'gallery3-1', url: '/public/img/img12.jpg'},
	{n: 'gallery3-2', url: '/public/img/img13.jpg'},
	{n: 'gallery3-3', url: '/public/img/img14.jpg'},
	{n: 9, url: '/public/img/img15.jpg'},
	{n: 11, url: '/public/img/img16.jpg'},
	{n: 13, url: '/public/img/img17.jpg'}
]

img_by_sections.forEach(function(e){
	var section = document.getElementById('section'+e.n);
	section.setAttribute('style', 'background-image: url("' + e.url + '")');
});