# vAccordousel
*A jQuery plugin for a vertical accordion carousel.*

## Example Usage
```
<!-- Start vAccordousel markup -->
<div id="accordouselContainer" style="width: 100%;" class="clearfix">
	<h3><a href="#"><img src="cat1.jpg" style="width: 80px; height: 250px;" /></a></h3>
	<div>
		<img src="happy1.jpg" width="400" height="250" />
	</div>

	<h3><a href="#"><img src="cat2.jpg" style="width: 80px; height: 250px;" /></a></h3>
	<div>
		<img src="happy2.jpg" width="400" height="250" />
	</div>

	<h3><a href="#"><img src="cat3.jpg" style="width: 80px; height: 250px;" /></a></h3>
	<div>
		<img src="happy3.jpg" width="400" height="250" />
	</div>
</div>
<!-- End vAccordousel markup -->

<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script src="../src/vAccordousel.min.js"></script>

<script type="text/javascript">

	$(document).ready(function() {
		$("#accordouselContainer").vAccordousel();
	});

</script>
```

### License
Copyright 2012 Adam Presley. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY Adam Presley "AS IS" AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
EVENT SHALL Adam Presley OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
