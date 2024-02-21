// MIT License

// Copyright (c) 2024 raminrodbari

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

$(document).ready(function() {
	// بارگذاری محتوای ذخیره شده هنگام باز کردن صفحه
	if (localStorage.getItem('htmlCode')) $('#htmlCode').val(localStorage.getItem('htmlCode'));
	if (localStorage.getItem('cssCode')) $('#cssCode').val(localStorage.getItem('cssCode'));
	if (localStorage.getItem('jsCode')) $('#jsCode').val(localStorage.getItem('jsCode'));
	updateOutput(); $('#editorToggle').click(function() {
		$('#editorModal').modal('show');
	});
	$('#htmlCode, #cssCode, #jsCode').on('input', function() {
		// ذخیره محتوای کادرها در localStorage هنگام تغییر
		localStorage.setItem('htmlCode', $('#htmlCode').val());
		localStorage.setItem('cssCode', $('#cssCode').val());
		localStorage.setItem('jsCode', $('#jsCode').val());
		updateOutput();
	});
});
// برنامه کد نویس
function updateOutput() {
	var htmlCode = $('#htmlCode').val();
	var cssCode = '<style>' + $('#cssCode').val() + '</style>';
	var jsCode = '<script>' + $('#jsCode').val() + '<\/script>';
	var outputContent = htmlCode + cssCode + jsCode;
	$('#output').html(outputContent);
}
$(".align-end").click(function() {
	$(this).addClass("active");
	$(".align-left").removeClass("active");
	$(".output").removeClass("text-left");
	$(".output").addClass("text-end");
	showAlert("متن به راست چین تغییر کرد.");
});
$(".align-left").click(function() {
	$(this).addClass("active");
	$(".align-end").removeClass("active");
	$(".output").removeClass("text-end");
	$('output').addClass("text-left");
	showAlert("متن به چپ چین تغییر کرد.");
});

function showAlert(message) {
	$("#alert").text(message).show().delay(3000).fadeOut();
}
//دکمه های تغییر اندازه و حالت فعلی
$('.size-fill').click(function() {
	$(this).addClass("active");
	$('.output').addClass('mod-auto');
	$(".size-sm").removeClass("active");
	$(".size-md").removeClass("active");
	$(".size-lg").removeClass("active");
	$(".size-xl").removeClass("active");
});
$('.size-sm').click(function() {
	$(this).addClass('active');
	$('.output').addClass('mod-sm');
	$('.output').removeClass('mod-md mod-lg mod-xl mod-auto');
	$('.size-md').removeClass('active');
	$('.size-lg').removeClass('active');
	$('.size-xl').removeClass('active');
	$(".size-fill").removeClass("active");
});
$('.size-md').click(function() {
	$(this).addClass('active');
	$('.output').addClass('mod-md');
	$('.output').removeClass('mod-sm mod-lg mod-xl mod-auto');
	$('.size-sm').removeClass('active');
	$('.size-lg').removeClass('active');
	$('.size-xl').removeClass('active');
	$(".size-fill").removeClass("active");
});
$('.size-lg').click(function() {
	$(this).addClass('active');
	$('.output').addClass('mod-lg');
	$('.output').removeClass('mod-md mod-sm mod-xl mod-auto');
	$('.size-sm').removeClass('active');
	$('.size-md').removeClass('active');
	$('.size-xl').removeClass('active');
	$(".size-fill").removeClass("active");
});
$('.size-xl').click(function() {
	$(this).addClass('active');
	$('.output').addClass('mod-xl');
	$('.output').removeClass('mod-md mod-lg mod-sm mod-auto');
	$('.size-sm').removeClass('active');
	$('.size-md').removeClass('active');
	$('.size-lg').removeClass('active');
	$(".size-fill").removeClass("active");
});
//دکمه لود اجرا دوباره‌کد
$('.loading-btn').click(function() {
	// نمایش آیکون لودینگ
	$('.loading-icon').removeClass('visually-hidden');
	// محو کردن آیکون لودینگ بعد از دو ثانیه
	setTimeout(function() {
		$('.loading-icon').addClass('visually-hidden');
	}, 2000);
});
// تم دارک مود و لایت مد
(() => {
	'use strict'
	const getStoredTheme = () => localStorage.getItem('theme');
	const setStoredTheme = theme => localStorage.setItem('theme', theme);
	const getPreferredTheme = () => {
		const storedTheme = getStoredTheme();
		if (storedTheme) {
			return storedTheme;
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light';
	};
	const setTheme = theme => {
		document.documentElement.setAttribute('data-bs-theme', theme);
		document.querySelector('.modal-theme').setAttribute('data-bs-theme', theme);
	};
	setTheme(getPreferredTheme());
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		const storedTheme = getStoredTheme();
		if (!storedTheme || storedTheme === 'auto') {
			setTheme(getPreferredTheme());
		}
	});
	window.addEventListener('DOMContentLoaded',
		() => {
			document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
				toggle.addEventListener('click', () => {
					const theme = toggle.getAttribute('data-bs-theme-value');
					setStoredTheme(theme);
					setTheme(theme);
				});
			});
		});
})();
//	اسکریپت اندازه گیری صحفه
function updateDimensions() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	document.getElementById('width').textContent = width + 'px' + ' : عرض ';
	document.getElementById('height').textContent = height + 'px' + ' : طول ';
}
// بروزرسانی ابعاد هنگام بارگذاری صفحه
updateDimensions();
// بروزرسانی ابعاد هنگام تغییر اندازه پنجره
window.addEventListener('resize', updateDimensions);
