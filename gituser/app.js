$(document).ready(function() {
	const getUserInfo = async (username) => {
		const response = await fetch(`https://api.github.com/users/${username}`);
		const data = await response.json();
		return data;
	};

	const showUserInfo = (data) => {
		document.getElementById('user-image').src = data.avatar_url;
		document.getElementById('name').textContent = data.name;
		document.getElementById('username-info').textContent = data.login;
		document.getElementById('bio').textContent = data.bio;
		document.getElementById('location').textContent = data.location;
		document.getElementById('website').textContent = data.blog;
		document.getElementById('followers').textContent = data.followers;
		document.getElementById('following').textContent = data.following;
		document.getElementById('public-repos').textContent = data.public_repos;
		document.getElementById('Created').textContent = data.created_at;
		document.getElementById('updated').textContent = data.updated_at;
		document.getElementById('user-url').textContent = data.html_url;
		document.getElementById('mee').textContent = data.message;
	};

	document.getElementById('submit-button').addEventListener('click', async () => {
		const username = document.getElementById('username').value;
		const user = await getUserInfo(username);
		showUserInfo(user);
	});

	$("#dark-mod-btn").click(function() {
		$(".gitHubs").toggleClass("text-light text-dark");
		$(".btn.btn-primary").toggleClass("neon");
		$(".modal-content").toggleClass("bg-dark text-light text-dark")
	});
  
	$("#submit-button").click(function() {
		$("usercadr").toggle();
	});
  
	$('.modal-image').click(function() {
		var imgSrc = $(this).attr('src');
		$('body').css('background-image', 'url(' + imgSrc + ')');
		$('#exampleModal').modal('hide');
	});
	$('#showImageButton').click(function() {
		var imageUrl = $('#imageUrl').val();
		var imageElement = '<img src="' + imageUrl + '" alt="عکس">';
		$('#imageContainer').html(imageElement);
	});
	$("img").each(function() {
		// بررسی می‌کنیم که آیا src خالی است
		if ($(this).attr("src") === "") {
			$(this).attr("src", "https://raw.githubusercontent.com/raminxz/raminxz.github.io/main/img/errorimg.png");
		}
	});

	$("img").on("error",
		function() {
			// در صورتی که تصویر به درستی لود نشود، تصویر پیش‌فرض را جایگزین می‌کنیم
			$(this).attr("src", "https://raw.githubusercontent.com/raminxz/raminxz.github.io/main/img/errorimg.png");
		});
	$("#addimg").click(function(event) {
		event.preventDefault(); // جلوگیری از ارسال فرم
		var imageUrl = $("#imagesearchwithurl").val(); // گرفتن آدرس تصویر از فیلد ورودی

		// ایجاد یک div جدید برای تصویر
		var imgDiv = $("<div>", {
			class: "col-4",
			html: "<img src='" + imageUrl + "' class='img-fluid modal-image' alt='تصویر'>"
		}).appendTo("#urlimg"); // اضافه کردن div به داخل #urlimg

		// نمایش آلارم سبز
		$("<div>", {
			class: "alert alert-success",
			text: "تصویر با موفقیت اضافه شد."
		}).appendTo("#linkphoto").fadeOut(7000);
	});
});
