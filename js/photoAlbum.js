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
		$('.album').on('click', function()
		{
			albums.displayAlbum($(this).data('id'));
		});

		$('#albumPics').sortable(
		{
			handle: '.ui-widget-header',
			placeholder: 'ui-state-highlight',
			cursor: 'move'
		});
	},
	displayAlbum: function(albumId)
	{
		$('#albumPics').empty();
		$('#btnSave').hide();
		this.currentAlbum = albumId;
		var listItems = '';
		for(var i = 0; i < this.jsonAlbums.length; i++)
		{
			if(this.jsonAlbums[i].id === albumId)
			{
				if(this.jsonAlbums[i].pictures.length > 0)
				{
					var allPictures = this.jsonAlbums[i].pictures;
					// sort pictures by sequence before displaying
					allPictures.sort(function(a,b)
					{
						return a.sequence - b.sequence;
					});
					$.each(allPictures, function(key, picture)
					{
						listItems += '<li class="ui-widget-content" id="picture_' + picture.id 
										+ '">';
						listItems += '<h5 class="ui-widget-header"><span id="pictureName_' 
										+ picture.id 
										+ '">' + picture.imageTitle + '</span>';
						listItems += '<div class="icons">';
						listItems += '<a href="#" title="Edit?" class="ui-icon ui-icon-pencil" data-id'
										+ picture.id + '" data-name="' + picture.imageTitle + '"></a>';
						listItems += '<a href="#" title="Delete?" class="ui-icon ui-icon-trash" data-id="'
										+ picture.id + '"></a>';
						listItems += '</div>';
						listItems += '</h5>';
						listItems += '<a href="' + picture.imageLarge + '">';
						listItems += '<img src="' + picture.imageThumb + '" width="150" height="150" class="large">';
						listItems += '</a>';
						listItems += '</li>';
					});
					$('#btnSave').show();
				}
				else
				{
					listItems += '<li class="ui-widget-content">No pictures in this album</li>';
				}
				$('#numImages').text(this.jsonAlbums[i].pictures.length + ' pictures');
				$('#albumPics').html(listItems);
				break;
			}
		}
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