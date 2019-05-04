		function change (el) {
			var max_len = 355;
			if (el.value.length > max_len) {
				el.value = el.value.substr(0, max_len);
			}
			document.getElementById('char_cnt').innerHTML = el.value.length;
			document.getElementById('chars_left').innerHTML = max_len - el.value.length;
			return true;
		}