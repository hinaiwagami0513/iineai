/* ===== 投稿作成フローを途中でやめる =====
   読み込むのは投稿作成ウィザードの5本:
     flow_image_v3 / flow_video_script / flow_video_material /
     flow_image_material / flow_manual

   これまでウィザードには「前のステップに下がる」（フッターの戻る）しか無く、
   作るのをやめてボードに帰る口が無かった。ステップ3まで来てから
   「やっぱり何も編集せずにやめたい」が行き止まりになる。

   ヘッダー右の <button class="close"> は全ファイルにあるのに onclick が
   どこにも無い（クラス名のとおり閉じるボタンのつもりで置かれて、
   中身が付かないままだった）。アイコンだけ ti-list → ti-x に替えて、
   ここに出口を繋ぐ。ボタンを増やさないので、SPの狭いヘッダーも今のまま。

   確認ダイアログは各ファイルが持っている仮予約ダイアログの
   .kariov / .karibox のクラスをそのまま使う。CSSは1行も足さない。 */
(function(){
  var HOME = './board.html';
  var ov = null;

  function build(){
    if(ov) return ov;
    ov = document.createElement('div');
    ov.className = 'kariov';
    ov.id = 'quitOv';
    ov.setAttribute('role','dialog');
    ov.setAttribute('aria-modal','true');
    ov.setAttribute('aria-label','作成をやめる');
    ov.innerHTML =
      '<div class="karibox">'+
        /* アイコンは付けない。この面のアイコンフォントはサブセットで、
           ti-alert-triangle / ti-logout / ti-alert-circle は字が入っておらず
           幅0の空要素になる（既存ページでも同じ）。 */
        '<div class="h">作成をやめますか？'+
          '<button class="x" data-quit="no" aria-label="閉じる"><i class="ti ti-x"></i></button></div>'+
        '<div class="b">途中まで作った案は保存されません。<br>予約ずみの投稿はボードに残ります。</div>'+
        '<div class="f">'+
          '<span class="sp">'+
            '<button class="btn btn-ghost" data-quit="no">続ける</button>'+
            '<button class="btn btn-primary" data-quit="yes">やめる</button>'+
          '</span>'+
        '</div>'+
      '</div>';
    /* 暗幕を押しても閉じる。中身を押したときは閉じない。 */
    ov.addEventListener('click', function(e){
      var b = e.target.closest ? e.target.closest('[data-quit]') : null;
      if(b){ if(b.dataset.quit === 'yes') location.href = HOME; else closeQuit(); return; }
      if(e.target === ov) closeQuit();
    });
    document.body.appendChild(ov);
    return ov;
  }

  function openQuit(){ build().classList.add('on'); }
  function closeQuit(){ if(ov) ov.classList.remove('on'); }

  function init(){
    var btn = document.querySelector('.topbar .close');
    if(!btn) return;
    /* 中身がリストのアイコンのままだと、押した先（やめる）と食い違う */
    btn.innerHTML = '<i class="ti ti-x"></i>';
    btn.title = '作成をやめる';
    btn.setAttribute('aria-label','作成をやめる');
    btn.addEventListener('click', openQuit);
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && ov && ov.classList.contains('on')) closeQuit();
    });
  }

  window.openQuitFlow = openQuit;
  window.closeQuitFlow = closeQuit;

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{
    init();
  }
})();
