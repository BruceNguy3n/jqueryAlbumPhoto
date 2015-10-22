$(document).ready(function()
{
	albums.initilize();
});

var albums =
{
	jsonAlbums: null,
	currentAlbum: null,
	currentPictureId: null,
	initilize: function()
	{
		$.getJSON("albums.json", function(data)
		{
			albums.jsonAlbums = data;
			albums.findAllNames();
			albums.addEventHandlers();
		});
	},
	findAllNames: function()
	{
		var albumNames = [];
		$.each(this.jsonAlbums, function(key, album)
		{
			albumNames.push('<h4 class="ui-widget-header album" data-id="' + album.id + '">' +
				album.albumName + '</h4>');
		});
		$('#albumNames').html(albumNames.join(''));
	},
	addEventHandlers: function()
	{

	},
	display: function(albumId)
	{

	},
	editImage: function()
	{

	},
	deleteImage: function()
	{

	},
	saveNewSequence: function()
	{

	}
};	