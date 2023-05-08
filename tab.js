var btn = $('.tab-button');
var content = $('.tab-content');

// for (let j = 0; j < btn.length; j++) {
//   //여기서 for 문의 j나 i는 let으로 선언해줘야함
//   btn.eq(j).on('click', function () {
//     //콜백함수 안에다가 함수 써야함. 안그럴거면 바인딩 해줘야함
//     tab(j);
//   });
// }

$('.list').click(function (e) {
  tab(e.target.dataset.id);
});

function tab(index) {
  btn.removeClass('orange');
  content.removeClass('show');
  btn.eq(index).addClass('orange');
  content.eq(index).addClass('show');
}
