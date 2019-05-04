/* -- ----------------------------------- -- */
/* -- B K S D   R E M O V E   A C T I V E -- */
/* -- ----------------------------------- -- */

	function active_remove() {
		$('.active').each(function(index) {
			$(this).removeClass('active');
			});
		}

/* -- ----------------------------------------------------- -- */
/* -- B K S D   S E T   A C T I V E   A C T I V E   M E N Ü -- */
/* -- ----------------------------------------------------- -- */

function setActiveMenu(id) {
	active_remvove(); // Entferne Active-Markierung
	jQuery(id).addClass('active'); // Füge Klasse Active hinzu
	}