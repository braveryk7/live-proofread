const userAgent = window.navigator.userAgent;
const message
    = '<section>'
    +   '<h2>当サイトはお使いのブラウザではご使用になれません。</h2>'
    +   '<p>お使いのブラウザは古いブラウザ（インターネット閲覧ソフト）のため、セキュリティ上の観点でサポートしておりません。</p>'
    +   '<p>以下の最新のブラウザをご使用の上、改めてご利用下さい。</p>'
    +   '<div id="" class="">'
    +   '<div class="chrome">'
    +   '<h3>Google Chrome</h3>'
    +   '<a href="https://www.google.com/intl/ja_jp/chrome/" target="_blank">Google Chrome公式Webサイトでダウンロード</a>'
    +   '</div>'
    +   '<div class="firefox">'
    +   '<h3>Firefox</h3>'
    +   '<a href="https://www.mozilla.org/ja/firefox/new/" target="_blank">Firefox公式Webサイトでダウンロード</a>'
    +   '</div>'
    +   '<div class="edge">'
    +   '<h3>Microsoft Edge</h3>'
    +   '<a href="https://www.microsoft.com/ja-jp/edge" target="_blank">Microsoft Edge公式Webサイトでダウンロード</a>'
    +   '</div>'
    +   '</div>'
    +   '</section>'
    ;

if(userAgent.indexOf('Trident/7') !== -1) {
    document.getElementById('main').innerHTML = message;
}