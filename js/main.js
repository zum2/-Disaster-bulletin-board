

//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
    const width = $(window).width();
    if(width <= 768) {//横幅が768px以下の場合
      $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
      $(".has-child>a").on('click', function() {    //has-childクラスがついたaタグをクリックしたら
        const parentElem =  $(this).parent();   // aタグから見た親要素の<li>を取得し
        $(parentElem).toggleClass('active');    //矢印方向を変えるためのクラス名を付与して
        $(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
        return false;//リンクの無効化
      });
    }else{//横幅が768px以上の場合
      $(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
      $(".has-child").removeClass('active');//activeクラスを削除
      $('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
    }
  }

  // ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
    mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load',function(){
    mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
  });


  // アイコンの色を変えるためのJS
  const icon = document.getElementById('eyecon');
let count = 0;

eyecon.addEventListener('click', function() {
  count++;

  if (count === 1) {
    icon.style.backgroundColor = '#6EAA00';
  } else if (count === 2) {
    icon.style.backgroundColor = '#D60015';
  } else if (count === 3) {
    icon.style.backgroundColor = '#6EAA00';
    count = 0; // カウントをリセット
  }
});

//プルダウンメニューの文字色を反映するためのJS
$(function(){
  $('select').on('change',function(){
    $(this).css('color',$(this).find('option:selected').get(0).style.color);
  }).trigger('change');
});